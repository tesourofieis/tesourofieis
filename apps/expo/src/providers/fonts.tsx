import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

type FontSize = "small" | "medium" | "large";
type FontContextType = {
  fontSize: FontSize;
  setFontSize: (s: FontSize) => void;
  isLoading: boolean;
};

const FontContext = createContext<FontContextType | undefined>(undefined);
const FONT_STORAGE_KEY = "font_size";
const DEFAULT_FONT_SIZE: FontSize = "medium";

export const FontProvider = ({ children }: { children: ReactNode }) => {
  const [fontSize, setFontSizeState] = useState<FontSize>(DEFAULT_FONT_SIZE);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem(FONT_STORAGE_KEY).then((s) => {
      if (s === "small" || s === "medium" || s === "large") setFontSizeState(s);
      setIsLoading(false);
    });
  }, []);

  const setFontSize = useCallback((s: FontSize) => {
    setFontSizeState(s);
    AsyncStorage.setItem(FONT_STORAGE_KEY, s);
  }, []);

  return (
    <FontContext.Provider value={{ fontSize, setFontSize, isLoading }}>
      {children}
    </FontContext.Provider>
  );
};

export const useFontContext = () => {
  const ctx = useContext(FontContext);
  if (!ctx) throw new Error("useFontContext must be used inside FontProvider");
  return ctx;
};
