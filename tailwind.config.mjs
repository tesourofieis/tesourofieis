import colors from "tailwindcss/colors";
import starlightPlugin from "@astrojs/starlight-tailwind";
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        sepia: {
          900: "#2B2718",
          800: "#473e30",
          700: "#695F4D",
          600: "#bfae98",
          500: "#cba57e",
          400: "#dfba9d",
          300: "#f1d4be",
          200: "#eee6d9",
          100: "#fcf7ea",
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
