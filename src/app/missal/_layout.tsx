import { Stack } from "expo-router";

import { useAppTheme } from "~/theme";

export default function MissalLayout() {
  const { colors } = useAppTheme();

  return (
    <Stack
      screenOptions={{
        animation: "none",
        headerShown: false,
        headerStyle: {
          backgroundColor: colors.panel,
        },
        headerTintColor: colors.textPrimary,
        contentStyle: {
          backgroundColor: colors.screen,
        },
      }}
    />
  );
}
