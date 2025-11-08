import { Typography } from "~/components/typography";
import { NotoSans_400Regular } from "@expo-google-fonts/noto-sans";
import { Cardo_700Bold } from "@expo-google-fonts/cardo/700Bold";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display/400Regular";
import { DMSerifDisplay_400Regular_Italic } from "@expo-google-fonts/dm-serif-display/400Regular_Italic";
import { DMSerifText_400Regular } from "@expo-google-fonts/dm-serif-text/400Regular";
import { DMSerifText_400Regular_Italic } from "@expo-google-fonts/dm-serif-text/400Regular_Italic";
import { useFonts } from "expo-font";
import { useColorScheme , Platform, Pressable, View } from "react-native";
import { useEffect } from "react";
import "../global.css";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useNavigation, usePathname, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { COLORS } from "~/constants/Colors";
import { burgundy } from "config";
import { FontProvider } from "~/providers/fonts";
import { UpdateProvider, useUpdate } from "~/providers/update";
import { Update } from "~/components/Update";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Drawer from "expo-router/drawer";
import { CalendarProvider } from "~/providers/calendar";
import { SettingsProvider } from "~/providers/settings";
import { CustomDrawerContent } from "~/components/Drawer";
import { SearchModalProvider, useSearchModal } from "~/components/Search";

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
        <Typography className="text-burgundy-700 dark:text-burgundy-300 text-center mt-4 font-serif text-lg">
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
    <UpdateProvider>
      <FontProvider>
        <SafeAreaProvider>
          <SearchModalProvider>
            {Platform.OS === "web" ? (
              <RootLayoutNav />
            ) : (
              <GestureHandlerRootView style={{ flex: 1 }}>
                <RootLayoutNav />
              </GestureHandlerRootView>
            )}
          </SearchModalProvider>
        </SafeAreaProvider>
      </FontProvider>
    </UpdateProvider>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: isDarkMode ? COLORS["900"] : COLORS["100"],
      }}
    >
      <UpdateAwareDrawer />
      <StatusBar hidden />
    </SafeAreaView>
  );
}

function UpdateAwareDrawer() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const { updateState } = useUpdate();

  if (updateState !== "idle") {
    return <Update />;
  }

  return (
    <CalendarProvider>
      <SettingsProvider>
        <Drawer
          drawerContent={(props) => <CustomDrawerContent {...props} />}
          screenOptions={{
            headerShown: true,
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
            drawerInactiveTintColor: isDarkMode ? COLORS["200"] : COLORS["800"],
            drawerActiveTintColor: isDarkMode ? burgundy["300"] : COLORS["700"],
            drawerStyle: {
              backgroundColor: isDarkMode ? COLORS["800"] : COLORS["200"],
            },

            drawerLabelStyle: {
              fontFamily: "DMSerifText_400Regular",
            },
          }}
        />
      </SettingsProvider>
    </CalendarProvider>
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
    <View className="flex-row items-center px-2 py-1 rounded-lg bg-sepia-300 dark:bg-sepia-700">
      {segments.map((segment, index) => (
        <View
          className="flex-row items-center gap-1"
          key={`${segment}-${index}`}
        >
          {index !== 0 && (
            <FontAwesome6 name="arrow-right" size={8} color={burgundy[500]} />
          )}

          {index === segments.length - 1 ? (
            <Typography className="font-italic text-sm text-red-500">
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
              <Typography className="font-italic text-sm text-sepia-600 dark:text-sepia-400 underline">
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
      <View className="flex-row items-center justify-between p-3 gap-2 bg-sepia-200 dark:bg-sepia-800 w-full border-b border-sepia">
        <View className="flex-row items-center justify-between flex-1">
          <View className="flex-row gap-4 items-center">
            <Pressable
              className="p-2 items-center rounded-xl active:bg-sepia-400 dark:active:bg-sepia-700 bg-sepia-300 dark:bg-sepia-700"
              onPress={() => navigation.openDrawer()}
            >
              <FontAwesome6 name="bars" size={10} color={burgundy[500]} />
            </Pressable>
            <Breadcrumbs />
          </View>
          <Pressable
            onPress={openSearch}
            className="p-2 items-center rounded-xl active:bg-sepia-400 dark:active:bg-sepia-700 bg-sepia-300 dark:bg-sepia-700"
          >
            <FontAwesome6
              name="magnifying-glass"
              size={10}
              color={burgundy[500]}
            />
          </Pressable>
        </View>
      </View>
    );
  }

  return (
    <View className="flex-row items-center justify-between p-3 gap-2 bg-sepia-200 dark:bg-sepia-800 w-full border-b border-sepia">
      <Pressable
        className="p-2 items-center rounded-xl active:bg-sepia-400 dark:active:bg-sepia-700 bg-sepia-300 dark:bg-sepia-700"
        onPress={() => navigation.openDrawer()}
      >
        <FontAwesome6 name="bars" size={10} color={burgundy[500]} />
      </Pressable>

      <Pressable
        className="p-2 items-center rounded-xl active:bg-sepia-300 dark:active:bg-sepia-800 bg-sepia-200 dark:bg-sepia-800"
        onPress={() => router.dismissTo("/")}
      >
        <FontAwesome6 name="book-bible" size={15} color={burgundy[500]} />
      </Pressable>
      <Pressable
        onPress={openSearch}
        className="p-2 items-center rounded-xl active:bg-sepia-100 dark:active:bg-sepia-700 bg-sepia-300 dark:bg-sepia-700"
      >
        <FontAwesome6 name="magnifying-glass" size={10} color={burgundy[500]} />
      </Pressable>
    </View>
  );
};
