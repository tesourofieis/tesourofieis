import { burgundy, sepia } from "config";
import { useColorScheme } from "nativewind";

export const FONT_FAMILIES = {
  reading: "Cardo_400Regular",
  strong: "Cardo_700Bold",
  display: "DMSerifDisplay_400Regular",
  displayItalic: "DMSerifDisplay_400Regular_Italic",
} as const;

const THEME_COLORS = {
  sepia,
  burgundy,
} as const;

export function useAppTheme() {
  const { colorScheme, setColorScheme, toggleColorScheme } = useColorScheme();
  const resolvedColorScheme = colorScheme ?? "light";
  const isDark = resolvedColorScheme === "dark";

  return {
    colorScheme: resolvedColorScheme,
    isDark,
    setColorScheme,
    toggleColorScheme,
    colors: {
      ...THEME_COLORS,
      shell: isDark ? sepia[800] : sepia[200],
      screen: isDark ? sepia[900] : sepia[50],
      panel: isDark ? sepia[800] : sepia[200],
      card: isDark ? sepia[800] : sepia[100],
      cardElevated: isDark ? sepia[900] : sepia[50],
      divider: isDark ? sepia[700] : sepia[300],
      textPrimary: isDark ? sepia[100] : sepia[900],
      textSecondary: isDark ? sepia[200] : sepia[800],
      textMuted: isDark ? sepia[300] : sepia[600],
      textSubtle: sepia[500],
      icon: isDark ? sepia[300] : sepia[700],
      accent: isDark ? burgundy[300] : burgundy[500],
      accentStrong: isDark ? burgundy[400] : burgundy[600],
      selectedBg: isDark ? sepia[200] : sepia[800],
      selectedText: isDark ? sepia[800] : sepia[200],
    },
  };
}
