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
	{ text: 'Oração', header: true, type: 'learn', key: 'oratio' },
	{ text: 'Rosário', slug: 'oracao/rosario', key: 'rosario' },
	{ text: 'Angelus', slug: 'oracao/angelus', key: 'angelus' },
	{ text: 'Pequeno Ofício', slug: 'oracao/oficio', key: 'oficio' },

	{ text: 'Canto', header: true, type: 'learn', key: 'canto' },

	{
		text: 'Saltério',
		slug: 'canto/salterio',
		key: 'salterio',
	},
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
