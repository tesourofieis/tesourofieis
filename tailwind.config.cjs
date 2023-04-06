/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
		plugin(({ addComponents }) => {
			addComponents({
				'.dropcap': {
					...apply(
						'first-letter:float-left first-letter:text-7xl first-letter:pr-4 first-letter:font-black first-letter:text-red-500'
					),
				},
			});
		}),
	],
};

function apply(classes) {
	return {
		[`@apply ${classes}`]: {},
	};
}
