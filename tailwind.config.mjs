import colors from "tailwindcss/colors";
import starlightPlugin from "@astrojs/starlight-tailwind";
const defaultTheme = require("tailwindcss/defaultTheme");

const sepia = {
  900: "#1d2021",
  800: "#32302f",
  700: "#504945",
  600: "#7c6f64",
  500: "#bfae98",
  400: "#cba57e",
  300: "#e2c1a2",
  200: "#f2ddc7",
  100: "#eee6d9",
  50: "#f4eadd",
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        accent: sepia,
        gray: sepia,
        sepia: sepia,
      },
      fontFamily: {
        display: [
          "Berkshire Swash",
          ...defaultTheme.fontFamily.serif,
          ...defaultTheme.fontFamily.sans, // Add sans-serif as a fallback
        ],
        body: [
          "EB Garamond Variable",
          ...defaultTheme.fontFamily.serif,
          ...defaultTheme.fontFamily.sans, // Add sans-serif as a fallback
        ],
      },
    },
  },
  plugins: [starlightPlugin()],
};
