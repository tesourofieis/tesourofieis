import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { FontSize } from "~/components/FontSelector";

type FontVariables = Record<string, string>;
type FontSettings = {
  fontSize: FontSize;
};

type FontContextType = {
  fontVariables: FontVariables;
  fontSize: FontSize;
  setFontSize: (fontSize: FontSize) => Promise<void>;
  isLoading: boolean;
};

const FontContext = createContext<FontContextType | undefined>(undefined);

const BASE_SCALE_FACTORS = {
  pequeno: 0.85,
  normal: 1.0,
  grande: 1.25,
} as const;

const FONT_DEFINITIONS = {
  xs: { base: 10, lineHeight: 1.33, headingScale: 1.1 },
  sm: { base: 12, lineHeight: 1.29, headingScale: 1.2 },
  base: { base: 14, lineHeight: 1.5, headingScale: 1.2 },
  lg: { base: 18, lineHeight: 1.56, headingScale: 1.2 },
  xl: { base: 20, lineHeight: 1.4, headingScale: 1.1 },
  "2xl": { base: 22, lineHeight: 1.33, headingScale: 1.1 },
  "3xl": { base: 24, lineHeight: 1.2, headingScale: 1.1 },
  "4xl": { base: 26, lineHeight: 1.11, headingScale: 1.1 },
  "5xl": { base: 28, lineHeight: 1.0, headingScale: 1.1 },
  "6xl": { base: 30, lineHeight: 1.0, headingScale: 1.1 },
} as const;

const FONT_STORAGE_KEY = "font_settings";
const DEFAULT_FONT_SETTINGS: FontSettings = {
  fontSize: "normal",
};

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
  const [fontSettings, setFontSettings] = useState<FontSettings>(
    DEFAULT_FONT_SETTINGS
  );
  const [isLoading, setIsLoading] = useState(true);

  const loadFontSettings = useCallback(async (): Promise<FontSettings> => {
    try {
      const jsonValue = await AsyncStorage.getItem(FONT_STORAGE_KEY);
      if (jsonValue) {
        const parsed: FontSettings = JSON.parse(jsonValue);
        return { ...DEFAULT_FONT_SETTINGS, ...parsed };
      }
      await AsyncStorage.setItem(
        FONT_STORAGE_KEY,
        JSON.stringify(DEFAULT_FONT_SETTINGS)
      );
      return DEFAULT_FONT_SETTINGS;
    } catch (error) {
      console.error("Error loading font settings:", error);
      return DEFAULT_FONT_SETTINGS;
    }
  }, []);

  const updateFontSettings = useCallback(
    async (newSettings: Partial<FontSettings>) => {
      try {
        const updated = { ...fontSettings, ...newSettings };
        await AsyncStorage.setItem(FONT_STORAGE_KEY, JSON.stringify(updated));
        setFontSettings(updated);
        return updated;
      } catch (error) {
        console.error("Error updating font settings:", error);
        throw error;
      }
    },
    [fontSettings]
  );

  const setFontSize = useCallback(
    async (fontSize: FontSize) => {
      await updateFontSettings({ fontSize });
    },
    [updateFontSettings]
  );

  const fontVariables = generateFontVariables(fontSettings.fontSize);

  useEffect(() => {
    const init = async () => {
      const loaded = await loadFontSettings();
      setFontSettings(loaded);
      setIsLoading(false);
    };
    init();
  }, [loadFontSettings]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const root = document.documentElement;
      Object.entries(fontVariables).forEach(([key, value]) => {
        root.style.setProperty(key, value);
      });
    }
  }, [fontVariables]);

  return (
    <FontContext.Provider
      value={{
        fontVariables,
        fontSize: fontSettings.fontSize,
        setFontSize,
        isLoading,
      }}
    >
      {children}
    </FontContext.Provider>
  );
};

export const useFont = () => {
  const context = useContext(FontContext);
  if (!context) {
    throw new Error("useFont must be used within a FontProvider");
  }
  return context;
};

// Legacy hook for backwards compatibility
export const useFontVariables = () => {
  const { fontVariables } = useFont();
  return fontVariables;
};
