import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';
import { defineConfig } from 'astro/config';

import AutoImport from 'astro-auto-import';

import { asideAutoImport, astroAsides } from './integrations/astro-asides';
import { theme } from './syntax-highlighting-theme';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.astro.build/',
	integrations: [
		AutoImport({
			imports: [asideAutoImport],
		}),
		preact({ compat: true }),
		astroAsides(),
		mdx(),
	],
	markdown: {
		syntaxHighlight: 'shiki',
		shikiConfig: { theme },
		// Override with our own config
		smartypants: false,
	},
});
