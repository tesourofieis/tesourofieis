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
        serif: ["Serif", ...defaultTheme.fontFamily.serif],

        display: ["Display", "cursive"],

        bold: ["Bold", ...defaultTheme.fontFamily.serif],

        italic: ["Italic", ...defaultTheme.fontFamily.serif],
        black: ["Black", ...defaultTheme.fontFamily.serif],

        sans: [...defaultTheme.fontFamily.sans],
      },
    },
  },
} satisfies Config;
