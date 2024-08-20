import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ThemeProvider } from "@react-navigation/native";

import "react-native-reanimated";

import { useEffect } from "react";
import { useFonts } from "expo-font";
import { useColorScheme } from "nativewind";

import "react-native-reanimated";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { COLORS } from "../constants/Colors";
import React from "react";

SplashScreen.preventAutoHideAsync();

export { ErrorBoundary } from "expo-router";

import "../styles.css"

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Goudy: require("~/fonts/GoudyBookletter1911.otf"),
    SpaceMono: require("~/fonts/SpaceMono-Regular.ttf"),
    Garamond: require("~/fonts/EBGaramond-VariableFont_wght.ttf"),
    Berkshire: require("~/fonts/BerkshireSwash-Regular.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
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
              headerShown: false,
              animation: "simple_push",
            }}
          />
        </Stack>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
