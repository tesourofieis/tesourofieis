import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Platform, TouchableOpacity, useColorScheme, View } from "react-native";
import { H6 } from "~/components/Headings";
import { COLORS } from "~/constants/Colors";
import { Typography } from "./typography";

type Language = "latin" | "vernacular";

const STORAGE_KEY = "default_language";

export const DefaultLanguageSelector = () => {
  const colorScheme = useColorScheme();
  const [defaultLanguage, setDefaultLanguage] =
    useState<Language>("vernacular");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadDefaultLanguage();
  }, []);

  const loadDefaultLanguage = async () => {
    try {
      if (Platform.OS !== "web") {
        const stored = await AsyncStorage.getItem(STORAGE_KEY);
        if (stored) {
          setDefaultLanguage(stored as Language);
        }
      } else {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          setDefaultLanguage(stored as Language);
        }
      }
    } catch (error) {
      console.log("Error loading default language:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveDefaultLanguage = async (language: Language) => {
    try {
      setDefaultLanguage(language);
      if (Platform.OS !== "web") {
        await AsyncStorage.setItem(STORAGE_KEY, language);
      } else {
        localStorage.setItem(STORAGE_KEY, language);
      }
    } catch (error) {
      console.log("Error saving default language:", error);
    }
  };

  if (isLoading) {
    return (
      <View className="py-3 my-3 border-b border-sepia-300 dark:border-sepia-700">
        <View className="flex-row items-center mb-3">
          <FontAwesome6
            name="language"
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
        <FontAwesome6
          name="language"
          size={15}
          color={colorScheme === "light" ? COLORS["900"] : COLORS["200"]}
        />
        <H6 text="Língua Padrão" />
      </View>
      <View className="flex-row justify-between items-center">
        <TouchableOpacity
          onPress={() => saveDefaultLanguage("vernacular")}
          className={`flex-1 mx-1 py-3 px-4 rounded-lg items-center ${
            defaultLanguage === "vernacular"
              ? "bg-sepia-800 dark:bg-sepia-200"
              : "soft-background"
          }`}
        >
          <Typography
            className={`font-medium ${
              defaultLanguage === "vernacular"
                ? "text-sepia-200 dark:text-sepia-800"
                : "text-sepia-800 dark:text-sepia-200"
            }`}
          >
            Vernáculo
          </Typography>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => saveDefaultLanguage("latin")}
          className={`flex-1 mx-1 py-3 px-4 rounded-lg items-center ${
            defaultLanguage === "latin"
              ? "bg-sepia-800 dark:bg-sepia-200"
              : "soft-background"
          }`}
        >
          <Typography
            className={`font-medium ${
              defaultLanguage === "latin"
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

export const useDefaultLanguage = () => {
  const [defaultLanguage, setDefaultLanguage] =
    useState<Language>("vernacular");

  useEffect(() => {
    const loadDefault = async () => {
      try {
        if (Platform.OS !== "web") {
          const stored = await AsyncStorage.getItem(STORAGE_KEY);
          if (stored) {
            setDefaultLanguage(stored as Language);
          }
        } else {
          const stored = localStorage.getItem(STORAGE_KEY);
          if (stored) {
            setDefaultLanguage(stored as Language);
          }
        }
      } catch (error) {
        console.log("Error loading default language:", error);
      }
    };

    loadDefault();
  }, []);

  return defaultLanguage;
};
