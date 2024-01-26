import colors from "tailwindcss/colors";
import starlightPlugin from "@astrojs/starlight-tailwind";
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Your preferred accent color. Indigo is closest to Starlight’s defaults.
        accent: colors.red,
        // Your preferred gray scale. Zinc is closest to Starlight’s defaults.
        gray: colors.zinc,
      },
      fontFamily: {
        display: ['"Berkshire Swash"', ...defaultTheme.fontFamily.serif],
        body: ['"Cardo"', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [starlightPlugin(), require("@tailwindcss/typography")],
};
