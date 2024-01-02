import { CUSTOM_PREFACES, PROPERS_DIR } from './constants';
import path from 'path';
import fs from 'fs';
import { Observance } from './observance';
import { Section } from './parser';
import { Day } from './day';
import { Proper } from './proper';

type Pattern = string | RegExp;

function match(
	observances: string | Observance | Array<string | Observance>,
	patterns: Array<Pattern> | Pattern
): Observance | undefined {
	if (!Array.isArray(observances)) {
		observances = [observances];
	}
	if (!Array.isArray(patterns)) {
		patterns = [patterns];
	}

	for (const observance of observances) {
		const observanceId = typeof observance === 'string' ? observance : observance.id;

		for (const pattern of patterns) {
			const patternRegex = typeof pattern === 'string' ? new RegExp(pattern) : pattern;

			if (patternRegex.test(observanceId)) {
				return observance as Observance;
			}
		}
	}

	return;
}

function yyyyMMDD(date: Date) {
	return date.toISOString().split('T')[0];
}

function getCustomPreface(celebration: Observance, tempora?: Observance): string | null {
	for (const { id, preface } of CUSTOM_PREFACES) {
		if (
			new RegExp(id).test(celebration.id) ||
			(tempora && celebration.rank > 1 && new RegExp(id).test(tempora.id))
		) {
			return preface;
		}
	}
	return null;
}

function getPregeneratedProper(lang: string, properId: string) {
	const filePath = path.join(PROPERS_DIR, lang, `${properId}.json`);

	if (fs.existsSync(filePath)) {
		const fileContent = fs.readFileSync(filePath, 'utf-8');
		return JSON.parse(fileContent);
	}

	return null;
}

interface ProperInfo {
	info: Proper;
	sections: Section[]; // replace 'any' with the actual type for sections
}

function format_propers(propers: [Proper, Proper][], day?: Day): ProperInfo[] {
	const retvals: ProperInfo[] = [];

	for (const [propers_vernacular, propers_latin] of propers) {
		const title = propers_vernacular.title;
		const tempora_name: string | null = day ? day.getTemporaName() : null;

		const info: Proper = {
			id: propers_vernacular.id,
			title: title,
			description: propers_vernacular.description,
			tags: propers_vernacular.tags,
			tempora: tempora_name !== title ? tempora_name : null,
			rank: propers_vernacular.rank,
			colors: propers_vernacular.colors,
			supplements: propers_vernacular.supplements,
			date: day ? day.date : null,
		};

		retvals.push({
			info: info,
			sections: format_proper_sections(propers_vernacular, propers_latin), // Replace with the actual function
		});
	}

	return retvals;
}

function format_proper_sections(propers_vernacular: Proper, propers_latin: Proper) {
	const pv = propers_vernacular.serialize();
	const pl = propers_latin.serialize().reduce((acc, curr) => {
		acc[curr.id] = curr.body;
		return acc;
	}, {});

	const result = [];

	for (const section of pv) {
		try {
			section.body = [[section.body, pl[section.id]]];
			result.push(section);
		} catch (error) {
			console.warn(`Section '${section.id}' not found in latin proper '${propers_latin.id}'.`);
		}
	}

	return result;
}

export { match, getCustomPreface, getPregeneratedProper, yyyyMMDD, format_propers };
