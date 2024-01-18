import dedent from 'dedent-js';
import glob from 'fast-glob';
import fs from 'fs';
import { escape } from 'html-escaper';
import os from 'os';
import path from 'path';
import simpleGit from 'simple-git';
import { fileURLToPath } from 'url';
import languages from '../src/i18n/languages';
import output from './lib/output.mjs';
import type { PageData, PageIndex, PageTranslationStatus } from './lib/translation-status/types';
import { toUtcString, tryGetFrontMatterBlock } from './lib/translation-status/utils.js';

/**
 * Uses the git commit history to build an HTML-based overview of
 * the current Astro Docs translation status.
 *
 * This code is designed to be run on every push to the `main` branch.
 */
class TranslationStatusBuilder {
	constructor(config: {
		pageSourceDir: string;
		/**
		 * Full path & file name of the HTML file that the translation status should be written to.
		 * If the parent path does not exist yet, it will be created.
		 * */
		htmlOutputFilePath: string;
		sourceLanguage: string;
		targetLanguages: string[];
		languageLabels: { [key: string]: string };
		githubRepo: string;
	}) {
		this.pageSourceDir = config.pageSourceDir;
		this.htmlOutputFilePath = path.resolve(config.htmlOutputFilePath);
		this.sourceLanguage = config.sourceLanguage;
		this.targetLanguages = config.targetLanguages;
		this.languageLabels = config.languageLabels;
		this.githubRepo = config.githubRepo;
		this.git = simpleGit({
			maxConcurrentProcesses: Math.max(2, Math.min(32, os.cpus().length)),
		});
	}

	readonly pageSourceDir;
	readonly htmlOutputFilePath;
	readonly sourceLanguage;
	readonly targetLanguages;
	readonly languageLabels;
	readonly githubRepo;
	readonly git;

	async run() {
		// Before we start, validate that this is not a shallow clone of the repo
		const isShallowRepo = await this.git.revparse(['--is-shallow-repository']);
		if (isShallowRepo !== 'false') {
			output.error(dedent`This script cannot operate on a shallow clone of the git repository.
				Please add the checkout setting "fetch-depth: 0" to your GitHub workflow:
				- name: Checkout
				  uses: actions/checkout@v3
				  with:
				    fetch-depth: 0
			`);
			process.exit(1);
		}

		output.debug(`*** Building translation status`);

		// Ensure that the output directory exists before continuing
		output.debug(`- Output file path: ${this.htmlOutputFilePath}`);
		const outputDir = path.dirname(this.htmlOutputFilePath);
		if (!fs.existsSync(outputDir)) {
			fs.mkdirSync(outputDir, { recursive: true });
		}

		// Create an index of all Markdown/MDX pages grouped by language,
		// with information about the last minor & major commit per page
		output.debug(`- Generating page index...`);
		const pages = await this.createPageIndex();

		// Determine translation status by source page
		const statusByPage = this.getTranslationStatusByPage(pages);

		// Render a human-friendly summary
		output.debug(`- Building HTML file...`);
		const html = this.renderHtmlStatusPage(statusByPage);

		// Write HTML output to file
		fs.writeFileSync(this.htmlOutputFilePath, html);

		output.debug('');
		output.debug('*** Success!');
		output.debug('');
	}

	async createPageIndex(): Promise<PageIndex> {
		// Initialize a new page index with a stable key order
		const pages: PageIndex = {
			[this.sourceLanguage]: {},
		};
		this.targetLanguages.forEach((lang) => (pages[lang] = {}));

		// Enumerate all markdown pages with supported languages in pageSourceDir,
		// retrieve their page data and update them
		const pagePaths = await glob(`**/*.{md,mdx}`, {
			cwd: this.pageSourceDir,
		});
		const updatedPages = await Promise.all(
			pagePaths.sort().map(async (pagePath) => {
				const pathParts = pagePath.split('/');
				if (pathParts.length < 2) return;
				const lang = pathParts[0];
				const subpath = pathParts.splice(1).join('/');

				// Ignore pages with languages not contained in our configuration
				if (!pages[lang]) return;

				// Create or update page data for the page
				return {
					lang,
					subpath,
					pageData: await this.getSinglePageData(pagePath),
				};
			})
		);

		// Write the updated pages to the index
		updatedPages.forEach((page) => {
			if (!page) return;
			const { lang, subpath, pageData } = page;
			pages[lang][subpath] = pageData;
		});

		return pages;
	}

	/**
	 * Processes the markdown page located in the pageSourceDir subpath `pagePath`
	 * and creates a new page data object based on its frontmatter and git history.
	 */
	async getSinglePageData(pagePath: string): Promise<PageData> {
		const fullFilePath = `${this.pageSourceDir}/${pagePath}`;

		// Retrieve git history for the current page
		const gitHistory = await this.getGitHistory(fullFilePath);

		// Retrieve i18nReady flag from frontmatter
		const frontMatterBlock = tryGetFrontMatterBlock(fullFilePath);
		const i18nReady = /^\s*i18nReady:\s*true\s*$/m.test(frontMatterBlock);

		return {
			...(i18nReady ? { i18nReady: true } : {}),
			lastChange: gitHistory.lastCommitDate,
			lastCommitMsg: gitHistory.lastCommitMessage,
			lastMajorChange: gitHistory.lastMajorCommitDate,
			lastMajorCommitMsg: gitHistory.lastMajorCommitMessage,
		};
	}

	async getGitHistory(filePath: string) {
		const gitLog = await this.git.log({
			file: filePath,
			strictDate: true,
		});

		const lastCommit = gitLog.latest;
		if (!lastCommit) {
			throw new Error(dedent`Failed to retrieve last commit information for file
				"${filePath}". Your working copy should not contain uncommitted new pages
				when running this script.`);
		}

		// Attempt to find the last "major" commit, ignoring any commits that
		// usually do not require translations to be updated
		const lastMajorCommit =
			gitLog.all.find((logEntry) => {
				return !logEntry.message.match(/(en-only|typo|broken link|i18nReady|i18nIgnore)/i);
			}) || lastCommit;

		return {
			lastCommitMessage: lastCommit.message,
			lastCommitDate: toUtcString(lastCommit.date),
			lastMajorCommitMessage: lastMajorCommit.message,
			lastMajorCommitDate: toUtcString(lastMajorCommit.date),
		};
	}

	getTranslationStatusByPage(pages: PageIndex): PageTranslationStatus[] {
		const sourcePages = pages[this.sourceLanguage];
		const arrContent: PageTranslationStatus[] = [];

		Object.keys(sourcePages).forEach((subpath) => {
			const sourcePage = sourcePages[subpath];
			if (!sourcePage.i18nReady) return;

			const content: PageTranslationStatus = {
				subpath,
				sourcePage,
				githubUrl: this.getPageUrl({ lang: this.sourceLanguage, subpath }),
				translations: {},
			};

			this.targetLanguages.forEach((lang) => {
				const i18nPage = pages[lang][subpath];
				content.translations[lang] = {
					page: i18nPage,
					isMissing: !i18nPage,
					isOutdated: i18nPage && sourcePage.lastMajorChange > i18nPage.lastMajorChange,
					githubUrl: this.getPageUrl({ lang, subpath }),
					sourceHistoryUrl: this.getPageUrl({
						lang: 'en',
						subpath,
						type: 'commits',
						query: i18nPage ? `?since=${i18nPage.lastMajorChange}` : '',
					}),
				};
			});

			arrContent.push(content);
		});

		return arrContent;
	}

	getPageUrl({
		type = 'blob',
		refName = 'main',
		lang,
		subpath,
		query = '',
	}: {
		type?: string;
		refName?: string;
		lang: string;
		subpath: string;
		query?: string;
	}) {
		const noDotSrcDir = this.pageSourceDir.replace(/^.\//, '');
		return (
			`https://github.com/${this.githubRepo}/${type}/${refName}` +
			`/${noDotSrcDir}/${lang}/${subpath}${query}`
		);
	}

	/**
	 * Renders the primary HTML output of this script by loading a template from disk,
	 * rendering the individual views to HTML, and inserting them into the template.
	 */
	renderHtmlStatusPage(statusByPage: PageTranslationStatus[]) {
		// Load HTML template
		const templateFilePath = path.join(
			path.dirname(fileURLToPath(import.meta.url)),
			'lib',
			'translation-status',
			'template.html'
		);
		const html = fs.readFileSync(templateFilePath, { encoding: 'utf8' });

		// Replace placeholders in the template with the rendered views
		// and return the resulting HTML page
		return html
			.replace(
				'<!-- TranslationStatusByLanguage -->',
				this.renderTranslationStatusByLanguage(statusByPage)
			)
			.replace(
				'<!-- TranslationStatusByPage -->',
				this.renderTranslationStatusByPage(statusByPage)
			);
	}

	renderTranslationStatusByLanguage(statusByPage: PageTranslationStatus[]) {
		const lines: string[] = [];

		this.targetLanguages.forEach((lang) => {
			const missing = statusByPage.filter((content) => content.translations[lang].isMissing);
			const outdated = statusByPage.filter((content) => content.translations[lang].isOutdated);
			lines.push('<details>');
			lines.push(
				`<summary><strong>` +
					`${this.languageLabels[lang]} (${lang})` +
					`</strong><br>` +
					`<span class="progress-summary">` +
					`${statusByPage.length - outdated.length - missing.length} done, ` +
					`${outdated.length} need${outdated.length === 1 ? 's' : ''} updating, ` +
					`${missing.length} missing` +
					`</span>` +
					'<br>' +
					this.renderProgressBar(statusByPage.length, outdated.length, missing.length) +
					`</summary>`
			);
			lines.push(``);
			if (outdated.length > 0) {
				lines.push(`<h5>🔄&nbsp; Needs updating</h5>`);
				lines.push(`<ul>`);
				lines.push(
					...outdated.map(
						(content) =>
							`<li>` +
							`${this.renderLink(content.githubUrl, content.subpath)} ` +
							`(${this.renderLink(
								content.translations[lang].githubUrl,
								'outdated translation'
							)}, ${this.renderLink(
								content.translations[lang].sourceHistoryUrl,
								'source change history'
							)})` +
							`</li>`
					)
				);
				lines.push(`</ul>`);
			}
			if (missing.length > 0) {
				lines.push(`<h5>❌&nbsp; Missing</h5>`);
				lines.push(`<ul>`);
				lines.push(
					...missing.map(
						(content) =>
							`<li>` +
							`${this.renderLink(
								content.githubUrl,
								content.subpath
							)} &nbsp; ${this.renderCreatePageButton(lang, content.subpath)}` +
							`</li>`
					)
				);
				lines.push(`</ul>`);
			}
			lines.push(`</details>`);
			lines.push(``);
		});

		return lines.join('\n');
	}

	renderTranslationStatusByPage(statusByPage: PageTranslationStatus[]) {
		const lines: string[] = [];

		lines.push('<table role="table" class="status-by-page">');

		lines.push('<thead><tr>');
		lines.push(['Page', ...this.targetLanguages].map((col) => `<th>${col}</th>`).join(''));
		lines.push('</tr></thead>');

		lines.push('<tbody>');
		const spacer = `<tr class="spacer">\n${this.targetLanguages
			.map(() => `<td></td>`)
			.join('\n')}\n</tr>`;
		lines.push(spacer);
		statusByPage.forEach((content) => {
			const cols = [];
			cols.push(this.renderLink(content.githubUrl, content.subpath));
			cols.push(
				...this.targetLanguages.map((lang) => {
					const translation = content.translations[lang];
					if (translation.isMissing)
						return `<span title="${lang}: Missing"><span aria-hidden="true">❌</span></span>`;
					if (translation.isOutdated)
						return `<a href="${translation.githubUrl}" title="${lang}: Needs updating"><span aria-hidden="true">🔄</span></a>`;
					return `<a href="${translation.githubUrl}" title="${lang}: Completed"><span aria-hidden="true">✔</span></a>`;
				})
			);
			lines.push(`<tr>\n${cols.map((col) => `<td>${col}</td>`).join('\n')}\n</tr>`);
		});
		lines.push(spacer);
		lines.push('</tbody>');

		lines.push('</table>');

		lines.push(`\n<sup>❌ Missing &nbsp; 🔄 Needs updating &nbsp; ✔ Completed</sup>`);

		return lines.join('\n');
	}

	/**
	 * Render a link to a pre-filled GitHub UI for creating a new file.
	 *
	 * @param lang Language tag to create page for
	 * @param filename Subpath of page to create
	 */
	renderCreatePageButton(lang: string, filename: string): string {
		// We include `lang` twice because GitHub eats the last path segment when setting filename.
		const createUrl = new URL(
			`https://github.com/${this.githubRepo}/new/main/src/content/docs/${lang}`
		);
		createUrl.searchParams.set('filename', lang + '/' + filename);
		createUrl.searchParams.set('value', '---\ntitle:\ndescription:\n---\n');
		return this.renderLink(createUrl.href, `Create\xa0page\xa0+`, 'create-button');
	}

	/**
	 * Render a progress bar with emoji.
	 */
	renderProgressBar(
		total: number,
		outdated: number,
		missing: number,
		{ size = 20 }: { size?: number } = {}
	) {
		const outdatedLength = Math.round((outdated / total) * size);
		const missingLength = Math.round((missing / total) * size);
		const doneLength = size - outdatedLength - missingLength;
		return (
			'<span class="progress-bar" aria-hidden="true">' +
			[
				[doneLength, '🟪'],
				[outdatedLength, '🟧'],
				[missingLength, '⬜'],
			]
				.map(([length, icon]) => Array(length).fill(icon))
				.flat()
				.join('') +
			'</span>'
		);
	}

	renderLink(href: string, text: string, className = ''): string {
		return `<a href="${escape(href)}" class="${escape(className)}">${escape(text)}</a>`;
	}
}

const translationStatusBuilder = new TranslationStatusBuilder({
	pageSourceDir: './src/content/docs',
	htmlOutputFilePath: './dist/translation-status/index.html',
	sourceLanguage: 'en',
	targetLanguages: Object.keys(languages)
		.filter((lang) => lang !== 'en')
		.sort(),
	languageLabels: languages,
	githubRepo: process.env.GITHUB_REPOSITORY || 'withastro/docs',
});

await translationStatusBuilder.run();
