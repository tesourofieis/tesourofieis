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
        serif: ["NotoSerif-Regular", ...defaultTheme.fontFamily.serif],
        display: ["BerkshireSwash-Regular", "cursive"],
        bold: ["NotoSerif-Bold", ...defaultTheme.fontFamily.serif],
        italic: ["NotoSerif-Italic", ...defaultTheme.fontFamily.serif],
        sans: ["NotoSans-Regular", ...defaultTheme.fontFamily.sans],
      },
    },
  },
} satisfies Config;
