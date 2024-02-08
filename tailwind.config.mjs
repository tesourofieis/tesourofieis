import colors from "tailwindcss/colors";
import starlightPlugin from "@astrojs/starlight-tailwind";
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        accent: colors.red,
        gray: colors.sepia,
        sepia: {
          900: "#1d2021",
          800: "#32302f",
          700: "#504945",
          600: "#7c6f64",
          500: "#bfae98",
          400: "#cba57e",
          300: "#e2bda0",
          200: "#f3dbc9",
          100: "#eee6d9",
        },
      },
      fontFamily: {
        display: ['"Berkshire Swash"', ...defaultTheme.fontFamily.serif],
        body: ['"Cardo"', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [starlightPlugin(), require("@tailwindcss/typography")],
};
