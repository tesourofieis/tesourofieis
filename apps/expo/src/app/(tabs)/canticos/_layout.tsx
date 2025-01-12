import { Stack } from "expo-router";
import { useColorScheme } from "nativewind";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../../constants/Colors";

export default function CanticosLayout() {
  const { colorScheme } = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: isDarkMode ? COLORS["800"] : COLORS["200"],
        },
        headerTintColor: isDarkMode ? COLORS["100"] : COLORS["900"],
        contentStyle: {
          backgroundColor: isDarkMode ? COLORS["900"] : COLORS["50"],
        },
      }}
    />
  );
}
