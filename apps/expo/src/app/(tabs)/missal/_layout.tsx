import { Stack } from "expo-router";
import { useColorScheme } from "nativewind";
import "../../../global.css";
import { COLORS } from "../../../constants/Colors";

export default function MissalLayout() {
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
