import type { AstroGlobal } from 'astro';

interface NavItem {
	text: string;
	slug: string;
}

interface LinkItem {
	text: string;
	link: string;
}

interface PreviousAndNext {
	previous?: LinkItem;
	next?: LinkItem;
}

export const nav = [
	{ text: 'Start Here', header: true, type: 'learn', key: 'startHere' },
	{ text: 'Getting Started', slug: 'getting-started', key: 'getting-started' },
	{ text: 'Installation', slug: 'install/auto', key: 'install' },
	{ text: 'Editor Setup', slug: 'editor-setup', key: 'editor-setup' },

	{ text: 'Core Concepts', header: true, type: 'learn', key: 'coreConcepts' },
	{ text: 'Why Astro', slug: 'concepts/why-astro', key: 'concepts/why-astro' },
	{ text: 'MPA vs. SPA', slug: 'concepts/mpa-vs-spa', key: 'concepts/mpa-vs-spa' },
	{ text: 'Astro Islands', slug: 'concepts/islands', key: 'concepts/islands' },

	{ text: 'Basics', header: true, type: 'learn', key: 'basics' },

	{
		text: 'Saltério',
		slug: 'salterio',
		key: 'salterio',
	},
	{
		text: 'Components',
		slug: 'core-concepts/astro-components',
		key: 'core-concepts/astro-components',
	},
	{ text: 'Pages', slug: 'core-concepts/astro-pages', key: 'core-concepts/astro-pages' },
	{ text: 'Layouts', slug: 'core-concepts/layouts', key: 'core-concepts/layouts' },

	{
		text: 'Astro Template Syntax',
		slug: 'core-concepts/astro-syntax',
		key: 'core-concepts/astro-syntax',
	},
	{
		text: 'UI Frameworks',
		slug: 'core-concepts/framework-components',
		key: 'core-concepts/framework-components',
	},
	{ text: 'Routing', slug: 'core-concepts/routing', key: 'core-concepts/routing' },
	{ text: 'Endpoints', slug: 'core-concepts/endpoints', key: 'core-concepts/endpoints' },
] as const;

/**
 * This helper looks for the current page in the global navigation object and,
 * if it finds it, returns the pages before and after it to help build links.
 * @param Astro The Astro global
 * @returns `previous` and `next` links if available
 */
export async function getNavLinks(Astro: Readonly<AstroGlobal>): Promise<PreviousAndNext> {
	const links = nav.filter((x) => !('header' in x) && x.slug) as NavItem[];
	return getPreviousAndNext(links, Astro);
}

export function getPreviousAndNext(
	links: NavItem[],
	Astro: Readonly<AstroGlobal>
): PreviousAndNext {
	const index = links.findIndex((x) => Astro.url.pathname.replace(/\/$/, '').endsWith(x.slug));

	const makeLinkItem = ({ text, slug }: NavItem): LinkItem => ({ text, link: `/${slug}/` });

	return {
		previous: index > 0 ? makeLinkItem(links[index - 1]) : undefined,
		next: index !== -1 && index < links.length - 1 ? makeLinkItem(links[index + 1]) : undefined,
	};
}
