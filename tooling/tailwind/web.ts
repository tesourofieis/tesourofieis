import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import defaultTheme from "tailwindcss/defaultTheme";

import base from "./base";

export default {
  content: base.content,
  presets: [base],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
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
  plugins: [animate],
} satisfies Config;
