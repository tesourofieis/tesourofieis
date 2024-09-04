import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ThemeProvider } from "@react-navigation/native";
import * as Notifications from "expo-notifications";
import { useRouter } from "expo-router";
import { SplashScreen, Stack } from "expo-router";

import { useFonts } from "expo-font";
import { useColorScheme } from "nativewind";
import { useEffect } from "react";

import "react-native-reanimated";

import React from "react";

import { COLORS } from "../constants/Colors";

SplashScreen.preventAutoHideAsync();

import "../styles.css";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Text, View } from "react-native";

export { ErrorBoundary } from "expo-router";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function RootLayout() {
  const router = useRouter();
  const [loaded, error] = useFonts({
    Mono: require("~/fonts/SpaceMono-Regular.ttf"),
    Serif: require("~/fonts/EBGaramond-VariableFont_wght.ttf"),
    Display: require("~/fonts/BerkshireSwash-Regular.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    const subscription = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        const url = response.notification.request.content.data.url;
        if (url) {
          router.push(`/modal?url=${url}`);
        }
      },
    );

    return () => subscription.remove();
  }, [router]);

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
      <Text className="font-bold text-lg text-sepia-800 dark:text-sepia-200 font-body">
        Tesouro dos Fiéis
      </Text>
    </View>
  );
};
