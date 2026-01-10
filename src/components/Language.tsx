import React, { useEffect, useMemo, useState } from "react";
import { Platform, Pressable, View } from "react-native";
import { useDefaultLanguage } from "~/providers/language";

type LanguageToggleProps = {
  children: React.ReactNode;
};

export default function LanguageToggle({ children }: LanguageToggleProps) {
  const defaultLanguage = useDefaultLanguage();
  const [currentLang, setCurrentLang] = useState<"latin" | "vernacular">(
    "vernacular",
  );

  useEffect(() => {
    setCurrentLang(defaultLanguage);
  }, [defaultLanguage]);

  const { latinContent, vernacularContent } = useMemo(() => {
    const childrenArray = React.Children.toArray(children);
    return {
      latinContent: childrenArray.filter(
        (child) =>
          React.isValidElement(child) &&
          typeof child.props === "object" &&
          child.props !== null &&
          "className" in child.props &&
          typeof child.props.className === "string" &&
          child.props.className.includes("latin"),
      ),
      vernacularContent: childrenArray.filter(
        (child) =>
          React.isValidElement(child) &&
          typeof child.props === "object" &&
          child.props !== null &&
          "className" in child.props &&
          typeof child.props.className === "string" &&
          child.props.className.includes("vernacular"),
      ),
    };
  }, [children]);

  const toggle = () => {
    setCurrentLang(currentLang === "latin" ? "vernacular" : "latin");
  };

  const isWeb = Platform.OS === "web";

  if (isWeb) {
    const latinArray = React.Children.toArray(latinContent);
    const vernacularArray = React.Children.toArray(vernacularContent);
    const maxLength = Math.max(latinArray.length, vernacularArray.length);

    const pairs = Array.from({ length: maxLength }, (_, i) => ({
      latin: latinArray[i] || null,
      vernacular: vernacularArray[i] || null,
    }));

    return (
      <View>
        {pairs.map((pair, index) => (
          <View key={index} className="flex-row gap-4">
            <View className="flex-1">{pair.latin}</View>
            <View className="flex-1">{pair.vernacular}</View>
          </View>
        ))}
      </View>
    );
  }

  return (
    <View className="flex-1">
      <View className="flex-1">
        {currentLang === "latin" ? latinContent : vernacularContent}
      </View>
      <View className="flex-row justify-center mt-2">
        <Pressable
          onPress={toggle}
          accessibilityLabel={`Toggle Language. Current language: ${
            currentLang === "latin" ? "Latin" : "Vernacular"
          }`}
          accessibilityRole="button"
          className="flex-row gap-1 px-2 py-1 justify-center extreme-background border border-sepia rounded-xl shadow-sm"
        >
          <View
            className={`w-2 h-2 rounded-full transition-colors ${
              currentLang === "vernacular"
                ? "soft-background"
                : "bg-sepia-700 dark:bg-sepia-300"
            }`}
          />
          <View
            className={`w-2 h-2 rounded-full transition-colors ${
              currentLang === "latin"
                ? "soft-background"
                : "bg-sepia-700 dark:bg-sepia-300"
            }`}
          />
        </Pressable>
      </View>
    </View>
  );
}
