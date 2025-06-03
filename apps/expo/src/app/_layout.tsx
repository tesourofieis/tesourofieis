import { BerkshireSwash_400Regular } from "@expo-google-fonts/berkshire-swash";

import {
  NotoSerif_400Regular,
  NotoSerif_400Regular_Italic,
  NotoSerif_700Bold,
} from "@expo-google-fonts/noto-serif";

import { NotoSans_400Regular } from "@expo-google-fonts/noto-sans";

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
import { openExternalLink } from "~/components/External";
import { COLORS } from "~/constants/Colors";
import { CalendarProvider } from "~/providers/calendar";
import { NotificationsProvider } from "~/providers/notifications";

SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

export default function PageRootLayout() {
  const [loaded, error] = useFonts({
    "NotoSerif-Regular": NotoSerif_400Regular,
    "BerkshireSwash-Regular": BerkshireSwash_400Regular,
    "NotoSerif-Bold": NotoSerif_700Bold,
    "NotoSerif-Italic": NotoSerif_400Regular_Italic,
    "NotoSans-Regular": NotoSans_400Regular,
    ...FontAwesome6.font,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

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

  if (!loaded && !error) {
    return null;
  }

  if (!loaded && Platform.OS !== "web") {
    return (
      <View className="flex-auto justify-center items-center bg-sepia-200 dark:bg-sepia-900">
        <ActivityIndicator className="text-red-600" />
      </View>
    );
  }

  return (
    <CalendarProvider>
      {Platform.OS === "web" ? (
        <RootLayoutNav />
      ) : (
        <GestureHandlerRootView>
          <NotificationsProvider>
            <RootLayoutNav />
          </NotificationsProvider>
        </GestureHandlerRootView>
      )}
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
            header: () => <Header withBC={false} />,
          }}
        />
        <Stack.Screen
          name="missal"
          options={{
            presentation: "modal",
            animation: "simple_push",
            header: () => <Header withBC={true} />,
          }}
        />
        <Stack.Screen
          name="devocionario"
          options={{
            presentation: "modal",
            animation: "simple_push",
            header: () => <Header withBC={true} />,
          }}
        />
        <Stack.Screen
          name="ritual"
          options={{
            presentation: "modal",
            animation: "simple_push",
            header: () => <Header withBC={true} />,
          }}
        />
        <Stack.Screen
          name="fe"
          options={{
            presentation: "modal",
            animation: "simple_push",
            header: () => <Header withBC={true} />,
          }}
        />
        <Stack.Screen
          name="canticos"
          options={{
            presentation: "modal",
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
    // Use replace instead of push to avoid modal stack issues

    // @ts-ignore
    router.replace(targetPath);
  };

  return (
    <View className="flex-row items-center gap-1">
      {segments.map((segment, index) => (
        <React.Fragment key={segment}>
          {index !== 0 && (
            <Text className="text-sepia-400 dark:text-sepia-600">/</Text>
          )}

          {index === segments.length - 1 ? (
            <Text className="text-xs font-serif text-sepia-700 dark:text-sepia-300 font-bold">
              {formatSegmentName(segment)}
            </Text>
          ) : (
            <Pressable
              className="p-1 rounded bg-sepia-200 dark:bg-sepia-800 active:bg-sepia-100 dark:active:bg-sepia-700"
              onPress={() =>
                handleBreadcrumbPress(
                  `/${segments.slice(0, index + 1).join("/")}`
                )
              }
            >
              <Text className="text-xs font-serif text-sepia-600 dark:text-sepia-400 underline">
                {formatSegmentName(segment)}
              </Text>
            </Pressable>
          )}
        </React.Fragment>
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
      <View className="flex-row items-center p-5 gap-2 border-b bg-sepia-300 dark:bg-sepia-900 w-full justify-between">
        <View className="flex-row gap-3">
          <Pressable
            className="rounded-full p-2 shadow-md bg-sepia-200 dark:bg-sepia-800 active:bg-sepia-100 dark:active:bg-sepia-700"
            onPress={() => router.dismissAll()}
          >
            <FontAwesome6 name="arrow-left" size={15} color="#e53935" />
          </Pressable>
          <Breadcrumbs />
        </View>
        <Pressable
          onPress={() => openExternalLink(`https://tesourofieis.com${path}`)}
          className="p-2 items-center border rounded-lg border-sepia-700 dark:border-sepia-400 active:bg-sepia-200 dark:active:bg-sepia-700"
        >
          <FontAwesome6
            name="globe"
            size={15}
            color={isDarkMode ? COLORS["300"] : COLORS["700"]}
          />
        </Pressable>
      </View>
    );
  }
  return (
    <Link href="/" dismissTo>
      <View className="flex-row items-center p-5 gap-3 bg-sepia-300 dark:bg-sepia-900 w-full border-b active:bg-sepia-200 dark:active:bg-sepia-800">
        <FontAwesome6 name="book-bible" size={15} color="#e53935" />
        <Text className="text-lg text-sepia-800 dark:text-sepia-200 font-serif">
          Tesouro dos Fiéis
        </Text>
      </View>
    </Link>
  );
};
