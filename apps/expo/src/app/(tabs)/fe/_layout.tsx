import { Stack } from "expo-router";
import { useColorScheme } from "nativewind";

import { COLORS } from "../../../constants/Colors";

export default function FeLayout() {
  const { colorScheme } = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  return (
    <Stack
      screenOptions={{
        animation: "none",
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
