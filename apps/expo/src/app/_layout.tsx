import { ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";

import { BerkshireSwash_400Regular } from "@expo-google-fonts/berkshire-swash";
import {
  Lusitana_400Regular,
  Lusitana_700Bold,
} from "@expo-google-fonts/lusitana";
import { useFonts } from "expo-font";
import { useColorScheme } from "nativewind";
import { useEffect } from "react";

import "../global.css";

import * as SplashScreen from "expo-splash-screen";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { ActivityIndicator, Platform, Text, View } from "react-native";
import { CalendarProvider } from "~/providers/calendar";
import { NotificationsProvider } from "~/providers/notifications";
import { COLORS } from "../constants/Colors";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Serif: Lusitana_400Regular,
    Display: BerkshireSwash_400Regular,
    Bold: Lusitana_700Bold,
    Black: require("../../assets/fonts/Geist-UltraBlack.ttf"),
    ...FontAwesome6.font,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded && Platform.OS !== "web") {
    return <ActivityIndicator />;
  }

  return (
    <CalendarProvider>
      <NotificationsProvider>
        <RootLayoutNav />
      </NotificationsProvider>
    </CalendarProvider>
  );
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
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerStyle: {
              backgroundColor: isDarkMode ? COLORS["800"] : COLORS["200"],
            },
            headerTitle: Header,
          }}
        />
        <Stack.Screen
          name="modal"
          options={{
            headerShown: false,
            presentation: "modal",
            animation: "slide_from_bottom",
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}

const Header = () => {
  return (
    <View className="flex-row items-center p-3 gap-3">
      <FontAwesome6 name="book-bible" size={15} color="#e53935" />
      <Text className="text-lg text-sepia-800 dark:text-sepia-200 font-serif">
        Tesouro dos Fiéis
      </Text>
    </View>
  );
};
