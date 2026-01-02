import { useFonts } from "expo-font";
import { useEffect } from "react";
import {
  useWindowDimensions,
  Platform,
  Pressable,
  useColorScheme,
  View,
} from "react-native";
import { Typography } from "~/components/typography";
import "../global.css";
import {
  BookPlus,
  ChevronRight,
  Search,
  Menu,
  AlertTriangle,
} from "lucide-react-native";
import { burgundy } from "config";
import { useNavigation, usePathname, useRouter } from "expo-router";

import Drawer from "expo-router/drawer";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import CustomDrawer from "~/components/Drawer";
import { SearchModalProvider, useSearchModal } from "~/components/Search";
import { COLORS } from "~/constants/Colors";
import { CalendarProvider } from "~/providers/calendar";
import { FontProvider } from "~/providers/fonts";
import { SettingsProvider } from "~/providers/settings";

SplashScreen.preventAutoHideAsync();

export default function PageRootLayout() {
  const [loaded, error] = useFonts({
    "NotoSans-Regular": require("~/assets/fonts/NotoSans_400Regular.ttf"),
    Cardo_400Regular: require("~/assets/fonts/Cardo_400Regular.ttf"),
    Cardo_700Bold: require("~/assets/fonts/Cardo_700Bold.ttf"),
    DMSerifDisplay_400Regular: require("~/assets/fonts/DMSerifDisplay_400Regular.ttf"),
    DMSerifDisplay_400Regular_Italic: require("~/assets/fonts/DMSerifDisplay_400Regular_Italic.ttf"),
    DMSerifText_400Regular: require("~/assets/fonts/DMSerifText_400Regular.ttf"),
    DMSerifText_400Regular_Italic: require("~/assets/fonts/DMSerifText_400Regular_Italic.ttf"),
    FontAwesome6: require("~/assets/fonts/FontAwesome.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (error) {
    return (
      <View className="flex-1 justify-center items-center bg-sepia-200 dark:bg-sepia-900 p-4">
        <AlertTriangle size={48} color={burgundy[500]} />
        <Typography className="text-burgundy-700 dark:text-burgundy-300 text-center mt-4 font-display text-lg">
          Erro ao carregar fontes
        </Typography>
        <Typography className="text-sepia-600 dark:text-sepia-400 text-center mt-2">
          Reinicie a aplicação
        </Typography>
      </View>
    );
  }

  if (!loaded) {
    return null;
  }

  return (
    <FontProvider>
      <SafeAreaProvider>
        <CalendarProvider>
          <SearchModalProvider>
            {Platform.OS === "web" ? (
              <RootLayoutNav />
            ) : (
              <SettingsProvider>
                <GestureHandlerRootView style={{ flex: 1 }}>
                  <RootLayoutNav />
                </GestureHandlerRootView>
              </SettingsProvider>
            )}
          </SearchModalProvider>
        </CalendarProvider>
      </SafeAreaProvider>
    </FontProvider>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const isWeb = Platform.OS === "web";
  const { width } = useWindowDimensions();
  const isWebDesktop = isWeb && width >= 768;

  if (isWeb) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: isDarkMode ? COLORS["800"] : COLORS["200"],
        }}
      >
        {isWebDesktop && <WebHeader />}
        <UpdateAwareDrawer />
        <StatusBar
          hidden
          backgroundColor={isDarkMode ? COLORS["800"] : COLORS["200"]}
        />
      </View>
    );
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: isDarkMode ? COLORS["800"] : COLORS["200"],
      }}
    >
      <UpdateAwareDrawer />
      <StatusBar
        hidden
        backgroundColor={isDarkMode ? COLORS["800"] : COLORS["200"]}
      />
    </SafeAreaView>
  );
}

function WebHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const { openSearch } = useSearchModal();

  const isRootScreen = ["index", "calendario", "ordo", "configurar"].some(
    (screen) => pathname === `/${screen}` || pathname === "/",
  );

  return (
    <View className="w-full border-b border-sepia z-10">
      <View className="flex-row items-center justify-between p-3 gap-2 medium-background">
        <View className="flex-row items-center gap-4">
          <Pressable
            className="p-2 items-center rounded-xl active:bg-sepia-200 dark:active:bg-sepia-700"
            onPress={() => router.navigate("/")}
            accessibilityRole="button"
            accessibilityLabel="Ir para Início"
          >
            <BookPlus size={15} color={burgundy[500]} />
          </Pressable>
          {!isRootScreen && <Breadcrumbs />}
        </View>
        <Pressable
          onPress={openSearch}
          className="p-2 items-center rounded-xl active:bg-sepia-400 dark:active:bg-sepia-700 soft-background"
        >
          <Search size={15} color={burgundy[500]} />
        </Pressable>
      </View>
    </View>
  );
}

function UpdateAwareDrawer() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const isWeb = Platform.OS === "web";
  const { width } = useWindowDimensions();
  const isWebDesktop = isWeb && width >= 768;

  return (
    <Drawer
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: !isWebDesktop,
        freezeOnBlur: true,
        header: ({ route }) => {
          const isRootScreen = [
            "index",
            "calendario",
            "ordo",
            "configurar",
          ].includes(route.name);
          return <Header withBC={!isRootScreen} />;
        },
        headerStyle: {
          backgroundColor: isDarkMode ? COLORS["800"] : COLORS["200"],
        },
        sceneStyle: {
          backgroundColor: isDarkMode ? COLORS["800"] : COLORS["200"],
        },
        drawerType: isWebDesktop ? "permanent" : "slide",
        drawerStyle: {
          backgroundColor: isDarkMode ? COLORS["800"] : COLORS["200"],
          borderRightWidth: 0,
          width: 250,
        },
        drawerInactiveTintColor: isDarkMode ? COLORS["200"] : COLORS["800"],
        drawerActiveTintColor: isDarkMode ? burgundy["300"] : COLORS["700"],
      }}
    />
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
    router.push(targetPath as any);
  };

  return (
    <View className="flex-row items-center px-2 py-1 rounded-lg soft-background">
      {segments.map((segment, index) => (
        <View
          className="flex-row items-center gap-1"
          key={`${segment}-${index}`}
        >
          {index !== 0 && <ChevronRight size={8} color={burgundy[500]} />}
          {index === segments.length - 1 ? (
            <Typography className="font-display text-sm text-red-500">
              {formatSegmentName(segment)}
            </Typography>
          ) : (
            <Pressable
              className="rounded px-1 py-0.5 active:bg-sepia-200 dark:active:bg-sepia-800"
              onPress={() =>
                handleBreadcrumbPress(
                  `/${segments.slice(0, index + 1).join("/")}`,
                )
              }
            >
              <Typography className="bold text-sm text-sepia-600 dark:text-sepia-400 underline">
                {formatSegmentName(segment)}
              </Typography>
            </Pressable>
          )}
        </View>
      ))}
    </View>
  );
};

export const Header = ({ withBC }: { withBC: boolean }) => {
  const router = useRouter();
  const navigation = useNavigation();
  const { openSearch } = useSearchModal();

  if (withBC) {
    return (
      <View className="flex-row items-center justify-between p-3 gap-2 medium-background w-full border-b border-sepia">
        <View className="flex-row items-center justify-between flex-1">
          <View className="flex-row gap-4 items-center">
            <Pressable
              className="p-2 items-center rounded-xl active:bg-sepia-400 dark:active:bg-sepia-700 soft-background"
              // @ts-expect-error
              onPress={() => navigation.openDrawer()}
            >
              <Menu size={15} color={burgundy[500]} />
            </Pressable>

            <Pressable
              className="p-2 items-center rounded-xl active:bg-sepia-200 dark:active:bg-sepia-700"
              onPress={() => router.navigate("/")}
              accessibilityRole="button"
              accessibilityLabel="Ir para Início"
            >
              <BookPlus size={15} color={burgundy[500]} />
            </Pressable>
            <Breadcrumbs />
          </View>
          <Pressable
            onPress={openSearch}
            className="p-2 items-center rounded-xl active:bg-sepia-400 dark:active:bg-sepia-700 soft-background"
          >
            <Search size={15} color={burgundy[500]} />
          </Pressable>
        </View>
      </View>
    );
  }

  return (
    <View className="flex-row items-center justify-between p-3 gap-2 w-full border-b border-sepia">
      <Pressable
        className="p-2 items-center rounded-xl active:bg-sepia-400 dark:active:bg-sepia-700 soft-background"
        // @ts-expect-error
        onPress={() => navigation.openDrawer()}
      >
        <Menu size={15} color={burgundy[500]} />
      </Pressable>
      <Pressable
        className="p-2 items-center rounded-xl active:bg-sepia-200 dark:active:bg-sepia-700"
        onPress={() => router.navigate("/")}
        accessibilityRole="button"
        accessibilityLabel="Ir para Início"
      >
        <BookPlus size={15} color={burgundy[500]} />
      </Pressable>
      <Pressable
        onPress={openSearch}
        className="p-2 items-center rounded-xl active:bg-sepia-100 dark:active:bg-sepia-700 soft-background"
      >
        <Search size={15} color={burgundy[500]} />
      </Pressable>
    </View>
  );
};
