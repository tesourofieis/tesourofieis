import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Tabs } from "expo-router";

import { Platform, useColorScheme } from "react-native";

import { COLORS } from "~/constants/Colors";

export default function PageTabLayout() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  const isWeb = Platform.OS === "web";

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: isDarkMode ? COLORS["200"] : COLORS["800"],
        tabBarActiveBackgroundColor: isDarkMode ? COLORS["700"] : COLORS["300"],
        tabBarStyle: {
          borderTopWidth: 0,
          borderTopColor: isDarkMode ? COLORS["700"] : COLORS["300"],
          backgroundColor: isDarkMode ? COLORS["800"] : COLORS["200"],
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          href: isWeb ? null : "/",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="house" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="calendario"
        options={{
          title: "Calendário",
          href: isWeb ? null : "/calendario",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="calendar" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="notificacoes"
        options={{
          title: "Notificações",
          href: isWeb ? null : "/notificacoes",
          tabBarIcon: ({ color }) => <FontAwesome6 name="bell" color={color} />,
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: "Procura",
          href: isWeb ? null : "/more",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="magnifying-glass" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
