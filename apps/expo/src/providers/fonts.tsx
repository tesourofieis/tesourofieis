import { createContext, useContext, ReactNode } from "react";
import { useSettings } from "~/providers/settings";
import { FontSize } from "~/app/(tabs)/configurar";

type FontVariables = Record<string, string>;
const FontContext = createContext<FontVariables>({});

const BASE_SCALE_FACTORS = {
  small: 0.9,
  normal: 1.0,
  big: 1.1,
} as const;

const FONT_DEFINITIONS = {
  xs: { base: 8, lineHeight: 1.33, headingScale: 1.0 },
  sm: { base: 10, lineHeight: 1.29, headingScale: 1.0 },
  base: { base: 12, lineHeight: 1.5, headingScale: 1.0 },
  lg: { base: 14, lineHeight: 1.56, headingScale: 1.05 },
  xl: { base: 16, lineHeight: 1.4, headingScale: 1.1 },
  "2xl": { base: 18, lineHeight: 1.33, headingScale: 1.1 },
  "3xl": { base: 20, lineHeight: 1.2, headingScale: 1.1 },
  "4xl": { base: 22, lineHeight: 1.11, headingScale: 1.1 },
  "5xl": { base: 24, lineHeight: 1.0, headingScale: 1.1 },
  "6xl": { base: 26, lineHeight: 0.95, headingScale: 1.1 },
} as const;

function generateFontVariables(fontSize: FontSize): FontVariables {
  const scaleFactor = BASE_SCALE_FACTORS[fontSize];
  const variables: Record<string, string> = {};

  Object.entries(FONT_DEFINITIONS).forEach(([size, config]) => {
    const scaledSize = Math.round(config.base * scaleFactor);
    const scaledLineHeight = Math.round(scaledSize * config.lineHeight);

    const headingScaleFactor = scaleFactor * config.headingScale;
    const headingSize = Math.round(config.base * headingScaleFactor);
    const headingLineHeight = Math.round(headingSize * config.lineHeight);

    variables[`--font-size-${size}`] = `${scaledSize}px`;
    variables[`--line-height-${size}`] = `${scaledLineHeight}px`;
    variables[`--heading-font-size-${size}`] = `${headingSize}px`;
    variables[`--heading-line-height-${size}`] = `${headingLineHeight}px`;
  });

  return variables;
}

export const FontProvider = ({ children }: { children: ReactNode }) => {
  const { settings } = useSettings();
  const fontVariables = generateFontVariables(
    (settings?.fontSize as FontSize) || "normal"
  );

  // Apply CSS variables to document root for web
  if (typeof document !== "undefined") {
    const root = document.documentElement;
    Object.entries(fontVariables).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }

  return (
    <FontContext.Provider value={fontVariables}>
      {children}
    </FontContext.Provider>
  );
};

export const useFontVariables = () => useContext(FontContext);
