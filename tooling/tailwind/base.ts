import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export const sepia = {
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

export default {
  content: ["src/**/*.{ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        accent: sepia,
        gray: sepia,
        sepia: sepia,
      },
      fontFamily: {
        display: [
          "Display",
          ...defaultTheme.fontFamily.serif,
          ...defaultTheme.fontFamily.sans, // Add sans-serif as a fallback
        ],
        title: [
          "Title",
          ...defaultTheme.fontFamily.sans, // Add sans-serif as a fallback
        ],
        sans: [
          "Geist",
          ...defaultTheme.fontFamily.sans, // Add sans-serif as a fallback
        ],
        mono: ["Mono", ...defaultTheme.fontFamily.mono],
        body: [
          "Serif",
          ...defaultTheme.fontFamily.serif,
          ...defaultTheme.fontFamily.sans, // Add sans-serif as a fallback
        ],
      },
    },
  },
} satisfies Config;
