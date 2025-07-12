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
        gray: sepia,
        sepia: sepia,
        red: burgundy,
      },
    },
  },
  presets: [nativewind],
} satisfies Config;
