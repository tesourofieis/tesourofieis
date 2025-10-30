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
import { Platform, Pressable, StatusBar, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { COLORS } from "~/constants/Colors";
import { CalendarProvider } from "~/providers/calendar";
import { SettingsProvider } from "~/providers/settings";
import { burgundy } from "config";
import { FontProvider } from "~/providers/fonts";
import { UpdateProvider, useUpdate } from "~/providers/update";
import { Update } from "~/components/Update";

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

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (error) {
    return (
      <View className="flex-1 justify-center items-center bg-sepia-200 dark:bg-sepia-900 p-4">
        <FontAwesome6
          name="triangle-exclamation"
          size={48}
          color={burgundy[500]}
        />
        <Text className="text-burgundy-700 dark:text-burgundy-300 text-center mt-4 font-serif text-lg">
          Erro ao carregar fontes
        </Text>
        <Text className="text-sepia-600 dark:text-sepia-400 text-center mt-2">
          Reinicie a aplicação
        </Text>
      </View>
    );
  }

  if (!loaded) {
    return null;
  }

  return (
    <UpdateProvider>
      <CalendarProvider>
        <SettingsProvider>
          <FontProvider>
            {Platform.OS === "web" ? (
              <RootLayoutNav />
            ) : (
              <GestureHandlerRootView style={{ flex: 1 }}>
                <RootLayoutNav />
              </GestureHandlerRootView>
            )}
          </FontProvider>
        </SettingsProvider>
      </CalendarProvider>
    </UpdateProvider>
  );
}

function RootLayoutNav() {
  const { colorScheme } = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  const CustomLightTheme = {
    ...DefaultTheme,
    dark: false,
    colors: {
      primary: COLORS["100"],
      background: COLORS["50"],
      card: COLORS["300"],
      text: COLORS["900"],
      border: COLORS["300"],
      notification: COLORS["500"],
    },
  };

  const CustomDarkTheme = {
    ...DefaultTheme,
    dark: true,
    colors: {
      primary: COLORS["800"],
      background: COLORS["900"],
      card: COLORS["700"],
      text: COLORS["100"],
      border: COLORS["700"],
      notification: COLORS["500"],
    },
  };

  return (
    <ThemeProvider value={isDarkMode ? CustomDarkTheme : CustomLightTheme}>
      <StatusBar backgroundColor={isDarkMode ? COLORS["800"] : COLORS["200"]} />
      <UpdateAwareStack />
    </ThemeProvider>
  );
}

function UpdateAwareStack() {
  const { updateState } = useUpdate();

  if (updateState !== "idle") {
    return <Update />;
  }

  return (
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

  const formatSegmentName = (segment: string): string => {
    segment = segment.replace(/\(.*?\)/g, "");
    return segment
      .split(/[-_]/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const handleBreadcrumbPress = (targetPath: string) => {
    router.replace(targetPath as any);
  };

  return (
    <View className="flex-row items-center gap-1">
      {segments.map((segment, index) => (
        <View
          className="flex-row items-center gap-1"
          key={`${segment}-${index}`}
        >
          {index !== 0 && (
            <Text className="font-serif text-xs text-sepia-700 dark:text-sepia-300">
              /
            </Text>
          )}

          {index === segments.length - 1 ? (
            <Text className="font-serif text-xs text-sepia-700 dark:text-sepia-300">
              {formatSegmentName(segment)}
            </Text>
          ) : (
            <Pressable
              className="rounded px-1 py-0.5 bg-sepia-200 dark:bg-sepia-800 active:bg-sepia-100 dark:active:bg-sepia-700"
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
  const router = useRouter();
  const { colorScheme } = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  if (withBC) {
    return (
      <View className="flex-row items-center p-5 gap-2 border-b bg-sepia-200 dark:bg-sepia-800 w-full justify-between">
        <View className="flex-row gap-3 flex-1 items-center">
          <Pressable
            className="rounded-full p-2 shadow-sm bg-sepia-200 dark:bg-sepia-800 active:bg-sepia-100 dark:active:bg-sepia-700"
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
    <View className="flex-row items-center justify-between p-5 bg-sepia-200 dark:bg-sepia-800 w-full border-b">
      <Pressable
        onPress={() => router.navigate("/")}
        className="active:opacity-70"
      >
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
