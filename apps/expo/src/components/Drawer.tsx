import { Typography } from "~/components/typography";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useRouter } from "expo-router";
import React, { useCallback, useMemo } from "react";
import {
  Pressable,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { COLORS } from "~/constants/Colors";
import { burgundy } from "config";
import { useSearchModal } from "~/components/Search";
import { ListDocs } from "./ListDocs";

interface StaticRoute {
  name: string;
  title: string;
  icon: keyof typeof FontAwesome6.glyphMap;
}

interface CustomDrawerContentProps {
  navigation: {
    closeDrawer: () => void;
  };
}

const STATIC_ROUTES: StaticRoute[] = [
  { name: "index", title: "Início", icon: "landmark" },
  { name: "ordo", title: "Ordo", icon: "church" },
  { name: "calendario", title: "Calendário", icon: "calendar-days" },
];

export function CustomDrawerContent({ navigation }: CustomDrawerContentProps) {
  const router = useRouter();
  const isDark = useColorScheme() === "dark";
  const { openSearch } = useSearchModal();

  const handleStaticRoute = useCallback(
    (routeName: string) => {
      navigation.closeDrawer();
      router.push(`/${routeName === "index" ? "" : routeName}` as const);
    },
    [router, navigation],
  );

  const handleSearchPress = useCallback(() => {
    openSearch();
  }, [openSearch]);

  const handleConfigPress = useCallback(() => {
    navigation.closeDrawer();
    router.push("/configurar" as const);
  }, [router, navigation]);

  const colors = useMemo(
    () => ({
      icon: isDark ? COLORS["300"] : COLORS["700"],
    }),
    [isDark],
  );

  return (
    <View
      style={{
        flex: 1,
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <View className="pt-5 px-4 pb-3">
        <View className="flex-row justify-between items-center mb-3">
          <Pressable
            className="p-2 items-center rounded-xl active:bg-sepia-200 dark:active:bg-sepia-700"
            onPress={() => handleStaticRoute("index")}
            accessibilityRole="button"
            accessibilityLabel="Ir para Início"
          >
            <FontAwesome6 name="book-bible" size={15} color={burgundy[500]} />
          </Pressable>
          <Typography
            className="flex-1 text-pretty text-sepia-800 dark:text-sepia-200 font-serif-bold text-center px-4"
            accessibilityRole="header"
            accessibilityLabel="Tesouro dos Fiéis"
          >
            Tesouro dos Fiéis
          </Typography>
          <Pressable
            className="p-2 items-center rounded-xl active:bg-sepia-200 dark:active:bg-sepia-700"
            onPress={handleSearchPress}
            accessibilityRole="button"
            accessibilityLabel="Abrir pesquisa"
          >
            <FontAwesome6
              name="magnifying-glass"
              size={16}
              color={colors.icon}
            />
          </Pressable>
        </View>
      </View>

      {STATIC_ROUTES.map((route) => (
        <TouchableOpacity
          key={route.name}
          onPress={() => handleStaticRoute(route.name)}
          className="flex-row items-center px-4 py-3 active:bg-sepia-300 dark:active:bg-sepia-700"
          accessibilityRole="button"
          accessibilityLabel={route.title}
        >
          <FontAwesome6 name={route.icon} size={13} color={colors.icon} />
          <Typography className="ml-3 text-xs font-serif text-sepia-800 dark:text-sepia-200">
            {route.title}
          </Typography>
        </TouchableOpacity>
      ))}

      <View className="h-px bg-sepia-300 dark:bg-sepia-700 my-2" />

      <ListDocs />
      <View className="flex-row justify-between items-center m-2">
        <Typography
          className="flex-1 text-pretty text-sepia-800 dark:text-sepia-200 font-serif-bold text-center px-4"
          accessibilityRole="header"
          accessibilityLabel="Tesouro dos Fiéis"
        >
          {new Date().getFullYear().toString()}
        </Typography>
        <Pressable
          className="p-2 items-center rounded-xl active:bg-sepia-200 dark:active:bg-sepia-700"
          onPress={handleConfigPress}
          accessibilityRole="button"
          accessibilityLabel="Configurações"
        >
          <FontAwesome6 name="gear" size={16} color={colors.icon} />
        </Pressable>
      </View>
    </View>
  );
}
