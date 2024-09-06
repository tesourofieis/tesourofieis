import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

import base from "./base";

export default {
  content: base.content,
  presets: [base],
  theme: {
    extend: {
      ...base.theme.extend,
      fontFamily: {
        serif: [
          "Serif",
          ...defaultTheme.fontFamily.serif,
          ...defaultTheme.fontFamily.sans, // Add sans-serif as a fallback
        ],
        sans: [
          "Serif",
          ...defaultTheme.fontFamily.serif,
          ...defaultTheme.fontFamily.sans, // Add sans-serif as a fallback
        ],
        display: [
          "Display",
          ...defaultTheme.fontFamily.serif,
          ...defaultTheme.fontFamily.sans, // Add sans-serif as a fallback
        ],
        bold: [
          "Bold",
          ...defaultTheme.fontFamily.serif,
          ...defaultTheme.fontFamily.sans, // Add sans-serif as a fallback
        ],
        italic: [
          "Italic",
          ...defaultTheme.fontFamily.serif,
          ...defaultTheme.fontFamily.sans, // Add sans-serif as a fallback
        ],
        black: [
          "Black",
          ...defaultTheme.fontFamily.serif,
          ...defaultTheme.fontFamily.sans, // Add sans-serif as a fallback
        ],
      },
    },
  },
} satisfies Config;
