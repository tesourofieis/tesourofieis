// @ts-expect-error - no types
import nativewind from "nativewind/preset";
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export const sepia = {
  900: "#262624",
  800: "#2B2B29",
  700: "#32302f",
  600: "#40403C",
  500: "#7c6f64",
  400: "#cba57e",
  300: "#e2c1a2",
  200: "#f2ddc7",
  100: "#eee6d9",
  50: "#f4eadd",
};

// Deep burgundy - like aged wine stains on vellum
export const burgundy = {
  900: "#4a1a1c",
  800: "#5c2022",
  700: "#7d2d30",
  600: "#8c3437",
  500: "#9B3D3F",
  400: "#b85d5f",
  300: "#d48385",
  200: "#e8b5b6",
  100: "#f4e0e1",
};

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        // These already use CSS variables and are handled correctly by your PageWrapper
        xs: ["var(--font-size-xs)", { lineHeight: "var(--line-height-xs)" }],
        sm: ["var(--font-size-sm)", { lineHeight: "var(--line-height-sm)" }],
        base: [
          "var(--font-size-base)",
          { lineHeight: "var(--line-height-base)" },
        ],
        lg: ["var(--font-size-lg)", { lineHeight: "var(--line-height-lg)" }],
        xl: ["var(--font-size-xl)", { lineHeight: "var(--line-height-xl)" }],
        "2xl": [
          "var(--font-size-2xl)",
          { lineHeight: "var(--line-height-2xl)" },
        ],
        "3xl": [
          "var(--font-size-3xl)",
          { lineHeight: "var(--line-height-3xl)" },
        ],
        "4xl": [
          "var(--font-size-4xl)",
          { lineHeight: "var(--line-height-4xl)" },
        ],
      },
      fontFamily: {
        serif: ["DMSerifText_400Regular", ...defaultTheme.fontFamily.serif],
        display: ["DMSerifDisplay_400Regular", "cursive"],
        "display-italic": ["DMSerifDisplay_400Regular_Italic", "cursive"],
        bold: ["Cardo_700Bold", ...defaultTheme.fontFamily.serif],
        italic: [
          "DMSerifText_400Regular_Italic",
          ...defaultTheme.fontFamily.serif,
        ],
        sans: ["NotoSans-Regular", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Keep these definitions. Tailwind still needs them to generate classes like `bg-sepia-100` if you use them directly.
        // Your custom classes in global.css will now prefer the CSS variables.
        gray: sepia,
        sepia: sepia,
        red: burgundy, // Naming this `red` is important if you want `text-red-500` to work directly.
      },
    },
  },
  presets: [nativewind],
} satisfies Config;
