import Drawer from "expo-router/drawer";

import { BerkshireSwash_400Regular } from "@expo-google-fonts/berkshire-swash";
import { EBGaramond_700Bold } from "@expo-google-fonts/eb-garamond";

import {
  DMSerifDisplay_400Regular,
  DMSerifDisplay_400Regular_Italic,
} from "@expo-google-fonts/dm-serif-display";
import { GoudyBookletter1911_400Regular } from "@expo-google-fonts/goudy-bookletter-1911";
import { useFonts } from "expo-font";
import { useColorScheme } from "nativewind";
import { useEffect } from "react";

import "../global.css";

import * as SplashScreen from "expo-splash-screen";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Link, usePathname } from "expo-router";
import React from "react";
import {
  ActivityIndicator,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CustomDrawerContent from "~/components/CustomDrawer";
import { CalendarProvider } from "~/providers/calendar";
import { NotificationsProvider } from "~/providers/notifications";
import { COLORS } from "../constants/Colors";

SplashScreen.preventAutoHideAsync();

export default function PageRootLayout() {
  const [loaded] = useFonts({
    Serif: DMSerifDisplay_400Regular,
    Display: BerkshireSwash_400Regular,
    Bold: EBGaramond_700Bold,
    ...FontAwesome6.font,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded && Platform.OS !== "web") {
    return (
      <View className="flex-auto justify-center items-center bg-sepia-200 dark:bg-sepia-900">
        <ActivityIndicator className="text-red-600" />
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <CalendarProvider>
        {Platform.OS === "web" ? (
          <RootLayoutNav />
        ) : (
          <NotificationsProvider>
            <RootLayoutNav />
          </NotificationsProvider>
        )}
      </CalendarProvider>
    </GestureHandlerRootView>
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
    fonts: DefaultTheme.fonts,
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
    fonts: DefaultTheme.fonts,
  };

  return (
    <ThemeProvider value={isDarkMode ? CustomDarkTheme : CustomLightTheme}>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerTitle: Header,
          headerStyle: {
            backgroundColor: isDarkMode ? COLORS["800"] : COLORS["200"],
          },
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            headerTitle: Header,
            drawerLabel: "Home",
            headerStyle: {
              backgroundColor: isDarkMode ? COLORS["800"] : COLORS["200"],
            },
          }}
        />
      </Drawer>
    </ThemeProvider>
  );
}

const Breadcrumbs = () => {
  const pathname = usePathname();

  // Skip empty segments and remove (tabs)
  const segments = pathname
    .split("/")
    .filter((segment) => segment && segment !== "(tabs)");

  // Don't show breadcrumbs if we're at root or only one level deep
  if (segments.length <= 1) {
    return null;
  }

  const formatSegmentName = (segment: string) => {
    // Remove any parentheses and their contents
    segment = segment.replace(/\(.*?\)/g, "");
    // Convert kebab-case or snake_case to Title Case
    return segment
      .split(/[-_]/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <View className="flex-row items-center mb-2 gap-1">
      {segments.map((segment, index) => (
        <React.Fragment key={segment}>
          {index !== 0 && (
            <Text className="text-sepia-400 dark:text-sepia-600">/</Text>
          )}

          <Link href={`/${segments.slice(0, index + 1).join("/")}`} asChild>
            <TouchableOpacity>
              <Text
                className={`text-sm ${
                  index === segments.length - 1
                    ? "text-sepia-700 dark:text-sepia-300 font-bold"
                    : "text-sepia-600 dark:text-sepia-400"
                }`}
              >
                {formatSegmentName(segment)}
              </Text>
            </TouchableOpacity>
          </Link>
        </React.Fragment>
      ))}
    </View>
  );
};

const Header = () => {
  return (
    <View>
      <Link href="/">
        <View className="flex-row items-center p-3 gap-3">
          <FontAwesome6 name="book-bible" size={15} color="#e53935" />
          <Text className="text-lg text-sepia-800 dark:text-sepia-200 font-serif">
            Tesouro dos Fiéis
          </Text>
        </View>
      </Link>
      <Breadcrumbs />
    </View>
  );
};
