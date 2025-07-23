import { NotoSans_400Regular } from "@expo-google-fonts/noto-sans";
import { Cardo_700Bold } from "@expo-google-fonts/cardo/700Bold";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display/400Regular";
import { DMSerifDisplay_400Regular_Italic } from "@expo-google-fonts/dm-serif-display/400Regular_Italic";
import { DMSerifText_400Regular } from "@expo-google-fonts/dm-serif-text/400Regular";
import { DMSerifText_400Regular_Italic } from "@expo-google-fonts/dm-serif-text/400Regular_Italic";

import { useFonts } from "expo-font";
import { useColorScheme } from "nativewind";
import { useEffect } from "react";

import "../global.css";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack, usePathname, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import * as Updates from "expo-updates";
import { useUpdates } from "expo-updates";
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
import { SettingsProvider } from "~/providers/settings";
import { SQLiteProvider } from "expo-sqlite";
import { migrateDatabase } from "~/db/db";
import { burgundy } from "tailwind.config";
import { FontProvider } from "~/providers/fonts";

SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

export default function PageRootLayout() {
  const [loaded, error] = useFonts({
    "NotoSans-Regular": NotoSans_400Regular,
    Cardo_700Bold,
    DMSerifDisplay_400Regular,
    DMSerifDisplay_400Regular_Italic,
    DMSerifText_400Regular,
    DMSerifText_400Regular_Italic,
    ...FontAwesome6.font,
  });

  const { isUpdateAvailable, isUpdatePending, isChecking, isDownloading } =
    useUpdates();

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  useEffect(() => {
    if (isUpdateAvailable) {
      Updates.fetchUpdateAsync();
    }
  }, [isUpdateAvailable]);

  useEffect(() => {
    if (isUpdatePending) {
      Updates.reloadAsync();
    }
  }, [isUpdatePending]);

  const getUpdateMessage = () => {
    if (isChecking) return "A verificar actualizações...";
    if (isDownloading) return "A transferir actualização...";
    if (isUpdatePending) return "A instalar actualização...";
    return "A carregar...";
  };

  if (!loaded && !error) {
    return null;
  }

  const shouldShowLoading =
    !loaded || isChecking || isDownloading || isUpdatePending;

  if (shouldShowLoading && Platform.OS !== "web") {
    return (
      <View className="flex-auto justify-center items-center bg-sepia-200 dark:bg-sepia-900">
        <ActivityIndicator className="text-red-500" />
        <Text className="mt-4 text-sepia-700 dark:text-sepia-300">
          {getUpdateMessage()}
        </Text>
        {isDownloading && (
          <Text className="mt-2 text-xs text-sepia-600 dark:text-sepia-400">
            Isto pode demorar alguns momentos...
          </Text>
        )}
      </View>
    );
  }

  return (
    <SQLiteProvider onInit={migrateDatabase} databaseName="docs.db">
      <CalendarProvider>
        <SettingsProvider>
          <FontProvider>
            {Platform.OS === "web" ? (
              <RootLayoutNav />
            ) : (
              <GestureHandlerRootView>
                <RootLayoutNav />
              </GestureHandlerRootView>
            )}
          </FontProvider>
        </SettingsProvider>
      </CalendarProvider>
    </SQLiteProvider>
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
      border: COLORS["300"],
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
      border: COLORS["700"],
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
            header: () => <Header withBC={false} />,
          }}
        />
        <Stack.Screen
          name="missal"
          options={{
            animation: "simple_push",
            header: () => <Header withBC={true} />,
          }}
        />
        <Stack.Screen
          name="devocionario"
          options={{
            animation: "simple_push",
            header: () => <Header withBC={true} />,
          }}
        />
        <Stack.Screen
          name="ritual"
          options={{
            animation: "simple_push",
            header: () => <Header withBC={true} />,
          }}
        />
        <Stack.Screen
          name="fe"
          options={{
            animation: "simple_push",
            header: () => <Header withBC={true} />,
          }}
        />
        <Stack.Screen
          name="canticos"
          options={{
            animation: "simple_push",
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

  const segments = pathname
    .split("/")
    .filter((segment) => segment && segment !== "(tabs)");

  if (segments.length <= 1) {
    return null;
  }

  const formatSegmentName = (segment: string) => {
    segment = segment.replace(/\(.*?\)/g, "");
    return segment
      .split(/[-_]/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const handleBreadcrumbPress = (targetPath: string) => {
    // @ts-ignore
    router.replace(targetPath);
  };

  return (
    <View className="flex-row items-center gap-1">
      {segments.map((segment, index) => (
        <View className="flex-row items-center gap-1" key={segment}>
          {index !== 0 && (
            <Text className="font-serif text-xs text-sepia-400 dark:text-sepia-600">
              /
            </Text>
          )}

          {index === segments.length - 1 ? (
            <Text className="font-serif text-xs text-sepia-700 dark:text-sepia-300">
              {formatSegmentName(segment)}
            </Text>
          ) : (
            <Pressable
              className="rounded bg-sepia-200 dark:bg-sepia-800 active:bg-sepia-100 dark:active:bg-sepia-700"
              onPress={() =>
                handleBreadcrumbPress(
                  `/${segments.slice(0, index + 1).join("/")}`
                )
              }
            >
              <Text className="font-serif text-xs text-sepia-600 dark:text-sepia-400 underline">
                {formatSegmentName(segment)}
              </Text>
            </Pressable>
          )}
        </View>
      ))}
    </View>
  );
};

const Header = ({ withBC }: { withBC: boolean }) => {
  const path = usePathname();
  const router = useRouter();

  const { colorScheme } = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  if (withBC) {
    return (
      <View className="flex-row items-center p-5 gap-2 border-b bg-sepia-200 dark:bg-sepia-800 w-full justify-between">
        <View className="flex-row gap-3">
          <Pressable
            className="rounded-full p-2 shadow-md bg-sepia-200 dark:bg-sepia-800 active:bg-sepia-100 dark:active:bg-sepia-700"
            onPress={() => router.navigate("/")}
          >
            <FontAwesome6 name="arrow-left" size={15} color={burgundy[500]} />
          </Pressable>
          <Breadcrumbs />
        </View>
        <View className="flex-row gap-1">
          <Pressable
            onPress={() => router.navigate("/more")}
            className="p-2 items-center border rounded-xl border-sepia-700 dark:border-sepia-200 active:bg-sepia-200 dark:active:bg-sepia-700"
          >
            <FontAwesome6
              name="magnifying-glass"
              size={15}
              color={isDarkMode ? COLORS["300"] : COLORS["700"]}
            />
          </Pressable>
        </View>
      </View>
    );
  }
  return (
    <View className="flex-row items-center justify-between p-5 bg-sepia-200 dark:bg-sepia-800 w-full border-b active:bg-sepia-100 dark:active:bg-sepia-900">
      <Pressable onPress={() => router.navigate("/")}>
        <View className="flex-row items-center gap-3">
          <FontAwesome6 name="book-bible" size={25} color={burgundy[500]} />
          <Text className="h5 text-sepia-800 dark:text-sepia-200 font-serif">
            Tesouro dos Fiéis
          </Text>
        </View>
      </Pressable>
    </View>
  );
};
