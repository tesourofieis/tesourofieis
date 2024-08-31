import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ThemeProvider } from "@react-navigation/native";
import { SplashScreen, Stack } from "expo-router";

import "react-native-reanimated";

import { useFonts } from "expo-font";
import { useColorScheme } from "nativewind";
import { useEffect } from "react";

import "react-native-reanimated";

import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { COLORS } from "../constants/Colors";

SplashScreen.preventAutoHideAsync();

import "../styles.css";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { StyleSheet, Text, View } from "react-native";

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
        <SafeAreaView edges={["top"]} style={styles.container}>
          <View className="flex-row justify-start items-center p-3 gap-3 bg-sepia-300 dark:bg-sepia-800">
            <FontAwesome6 name="book-bible" size={15} color="#e53935" />
            <Text className="font-bold  text-sepia-800 dark:text-sepia-200 font-body">
              Tesouro dos Fiéis
            </Text>
          </View>
        </SafeAreaView>
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS["600"],
  },
});
