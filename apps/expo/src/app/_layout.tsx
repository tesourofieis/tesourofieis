import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ThemeProvider } from "@react-navigation/native";
/* eslint-disable @typescript-eslint/no-require-imports */
import { SplashScreen, Stack } from "expo-router";

import "react-native-reanimated";

import { useFonts } from "expo-font";
import { useColorScheme } from "nativewind";
import { useEffect } from "react";

import "react-native-reanimated";

import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { COLORS } from "../constants/Colors";

SplashScreen.preventAutoHideAsync();

import "../styles.css";

export { ErrorBoundary } from "expo-router";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Mono: require("~/fonts/SpaceMono-Regular.ttf"),
    Serif: require("~/fonts/EBGaramond-VariableFont_wght.ttf"),
    Display: require("~/fonts/BerkshireSwash-Regular.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const { colorScheme } = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  const CustomLightTheme = {
    dark: false,
    colors: {
      primary: COLORS["100"],
      background: COLORS["50"],
      card: COLORS["300"],
      text: COLORS["900"],
      border: COLORS["400"],
      notification: COLORS["500"],
    },
  };

  const CustomDarkTheme = {
    dark: true,
    colors: {
      primary: COLORS["800"],
      background: COLORS["900"],
      card: COLORS["700"],
      text: COLORS["100"],
      border: COLORS["600"],
      notification: COLORS["500"],
    },
  };
  return (
    <ThemeProvider value={isDarkMode ? CustomDarkTheme : CustomLightTheme}>
      <SafeAreaProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="modal"
            options={{
              title: "Voltar",
              headerShown: false,
              presentation: "modal",
              animation: "simple_push",
            }}
          />
        </Stack>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
