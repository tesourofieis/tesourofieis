import { BerkshireSwash_400Regular } from "@expo-google-fonts/berkshire-swash";
import { EBGaramond_700Bold } from "@expo-google-fonts/eb-garamond";

import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";
import { useFonts } from "expo-font";
import { useColorScheme } from "nativewind";
import { useEffect } from "react";

import "../global.css";

import * as SplashScreen from "expo-splash-screen";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Link, Stack, usePathname, useRouter } from "expo-router";
import * as Updates from "expo-updates";
import React from "react";
import {
  ActivityIndicator,
  Platform,
  Pressable,
  StatusBar,
  Text,
  View,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { COLORS } from "~/constants/Colors";
import { CalendarProvider } from "~/providers/calendar";
import { NotificationsProvider } from "~/providers/notifications";

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

  useEffect(() => {
    async function checkForUpdates() {
      if (__DEV__) {
        console.log("Update checking is disabled in development mode.");
        return;
      }

      if (Updates.checkForUpdateAsync() === undefined) {
        console.log("Updates module is not available.");
        return;
      }

      try {
        const update = await Updates.checkForUpdateAsync();
        if (update.isAvailable) {
          await Updates.fetchUpdateAsync();
          await Updates.reloadAsync();
        }
      } catch (error) {
        console.error("Error checking for updates:", error);
      }
    }
    checkForUpdates();
  }, []);

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
      <StatusBar backgroundColor={isDarkMode ? COLORS["800"] : COLORS["200"]} />
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerStyle: {
              backgroundColor: isDarkMode ? COLORS["800"] : COLORS["200"],
            },
            header: () => <Header withBC={false} />,
          }}
        />
        <Stack.Screen
          name="missal"
          options={{
            presentation: "modal",
            headerStyle: {
              backgroundColor: isDarkMode ? COLORS["800"] : COLORS["200"],
            },
            header: () => <Header withBC={true} />,
          }}
        />
        <Stack.Screen
          name="devocionario"
          options={{
            presentation: "modal",
            headerStyle: {
              backgroundColor: isDarkMode ? COLORS["800"] : COLORS["200"],
            },
            header: () => <Header withBC={true} />,
          }}
        />
        <Stack.Screen
          name="ritual"
          options={{
            presentation: "modal",
            headerStyle: {
              backgroundColor: isDarkMode ? COLORS["800"] : COLORS["200"],
            },
            header: () => <Header withBC={true} />,
          }}
        />
        <Stack.Screen
          name="fe"
          options={{
            presentation: "modal",
            headerStyle: {
              backgroundColor: isDarkMode ? COLORS["800"] : COLORS["200"],
            },
            header: () => <Header withBC={true} />,
          }}
        />
        <Stack.Screen
          name="canticos"
          options={{
            presentation: "modal",
            headerStyle: {
              backgroundColor: isDarkMode ? COLORS["800"] : COLORS["200"],
            },
            header: () => <Header withBC={true} />,
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}

const Breadcrumbs = () => {
  const pathname = usePathname();

  const router = useRouter();

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

    return segment
      .split(/[-_]/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const handlePress = (path: string) => {
    router.navigate(path);
  };

  return (
    <View className="flex-row items-center gap-1">
      {segments.map((segment, index) => (
        <React.Fragment key={segment}>
          {index !== 0 && (
            <Text className="text-sepia-400 dark:text-sepia-600">/</Text>
          )}

          <Pressable
            onPress={() =>
              handlePress(`/${segments.slice(0, index + 1).join("/")}`)
            }
          >
            <Text
              className={`text-sm px-2 py-1 rounded ${
                index === segments.length - 1
                  ? "text-sepia-700 dark:text-sepia-300 font-bold"
                  : "text-sepia-600 dark:text-sepia-400 bg-sepia-300 dark:bg-sepia-700 underline "
              }`}
            >
              {formatSegmentName(segment)}
            </Text>
          </Pressable>
        </React.Fragment>
      ))}
    </View>
  );
};

const Header = ({ withBC }: { withBC: boolean }) => {
  if (withBC) {
    return (
      <View className="flex-row items-center p-5 gap-5 bg-sepia-200 dark:bg-sepia-800">
        <Link href="/">
          <FontAwesome6 name="book-bible" size={15} color="#e53935" />
        </Link>
        <Breadcrumbs />
      </View>
    );
  }
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
    </View>
  );
};
