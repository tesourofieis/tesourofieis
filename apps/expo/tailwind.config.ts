// @ts-expect-error - no types
import nativewind from "nativewind/preset";
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export const sepia = {
  900: "#262624",
  800: "#2B2B29",
  700: "#32302f",
  600: "#40403C",
  // 600: "#504945",
  500: "#7c6f64",
  // 500: "#bfae98",
  400: "#cba57e",
  300: "#e2c1a2",
  200: "#f2ddc7",
  100: "#eee6d9",
  50: "#f4eadd",
};

export const newsepia = {
  900: "#0F0F0E",
  800: "#262624",
  850: "#2B2B29",
  700: "#30302E",
  600: "#40403C",
  500: "#C2C0B6",
  400: "#E8E6DC",
  300: "#F0EEE6",
  200: "#F5F4ED",
  100: "#FAF9F5",
  50: "#FFFFFF",
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderColor: {
        DEFAULT: "hsl(var(--border))",
      },
    },
  },
  presets: [nativewind],
} satisfies Config;
