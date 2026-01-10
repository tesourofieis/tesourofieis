import { Languages } from "lucide-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";
import { Platform, TouchableOpacity, useColorScheme, View } from "react-native";
import { H6 } from "~/components/Headings";
import { COLORS } from "~/constants/Colors";
import { Typography } from "~/components/typography";

type Language = "latin" | "vernacular";

const STORAGE_KEY = "default_language";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  isLoading: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguageState] = useState<Language>("vernacular");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadLanguage();
  }, []);

  const loadLanguage = async () => {
    try {
      if (Platform.OS !== "web") {
        const stored = await AsyncStorage.getItem(STORAGE_KEY);
        if (stored) {
          setLanguageState(stored as Language);
        }
      } else {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          setLanguageState(stored as Language);
        }
      }
    } catch (error) {
      console.log("Error loading default language:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const setLanguage = async (lang: Language) => {
    try {
      setLanguageState(lang);
      if (Platform.OS !== "web") {
        await AsyncStorage.setItem(STORAGE_KEY, lang);
      } else {
        localStorage.setItem(STORAGE_KEY, lang);
      }
    } catch (error) {
      console.log("Error saving default language:", error);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useDefaultLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useDefaultLanguage must be used within LanguageProvider");
  }
  return context.language;
};

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguageContext must be used within LanguageProvider");
  }
  return context;
};

export const DefaultLanguageSelector = () => {
  const colorScheme = useColorScheme();
  const { language, setLanguage, isLoading } = useLanguageContext();

  if (isLoading) {
    return (
      <View className="py-3 my-3 border-b border-sepia-300 dark:border-sepia-700">
        <View className="flex-row items-center mb-3">
          <Languages
            size={15}
            color={colorScheme === "light" ? COLORS["900"] : COLORS["200"]}
          />
          <H6 text="Língua Padrão" />
        </View>
        <View className="h-12 soft-background rounded-lg" />
      </View>
    );
  }

  return (
    <View className="py-3 my-3 border-b border-sepia-300 dark:border-sepia-700">
      <View className="flex-row items-center mb-3 gap-1">
        <Languages
          size={15}
          color={colorScheme === "light" ? COLORS["900"] : COLORS["200"]}
        />
        <H6 text="Língua Padrão" />
      </View>
      <View className="flex-row justify-between items-center">
        <TouchableOpacity
          onPress={() => setLanguage("vernacular")}
          className={`flex-1 mx-1 py-3 px-4 rounded-lg items-center ${
            language === "vernacular"
              ? "bg-sepia-800 dark:bg-sepia-200"
              : "soft-background"
          }`}
        >
          <Typography
            className={`font-medium ${
              language === "vernacular"
                ? "text-sepia-200 dark:text-sepia-800"
                : "text-sepia-800 dark:text-sepia-200"
            }`}
          >
            Vernáculo
          </Typography>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setLanguage("latin")}
          className={`flex-1 mx-1 py-3 px-4 rounded-lg items-center ${
            language === "latin"
              ? "bg-sepia-800 dark:bg-sepia-200"
              : "soft-background"
          }`}
        >
          <Typography
            className={`font-medium ${
              language === "latin"
                ? "text-sepia-200 dark:text-sepia-800"
                : "text-sepia-800 dark:text-sepia-200"
            }`}
          >
            Latim
          </Typography>
        </TouchableOpacity>
      </View>
    </View>
  );
};
