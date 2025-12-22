import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Platform } from "react-native";

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
  const isWeb = Platform.OS === "web";
  const [fontSize, setFontSizeState] = useState<FontSize>(DEFAULT_FONT_SIZE);
  const [isLoading, setIsLoading] = useState(!isWeb);

  useEffect(() => {
    if (isWeb) return;

    AsyncStorage.getItem(FONT_STORAGE_KEY).then((s) => {
      if (s === "small" || s === "medium" || s === "large") setFontSizeState(s);
      setIsLoading(false);
    });
  }, [isWeb]);

  const setFontSize = useCallback(
    (s: FontSize) => {
      setFontSizeState(s);
      if (!isWeb) {
        AsyncStorage.setItem(FONT_STORAGE_KEY, s);
      }
    },
    [isWeb],
  );

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
