import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { useColorScheme } from "nativewind";
import React from "react";
import MoreMenu from "~/components/MoreMenu";

import { COLORS } from "~/constants/Colors";

export default function TabLayout() {
  const { colorScheme } = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: isDarkMode ? COLORS["200"] : COLORS["800"],
        tabBarActiveBackgroundColor: isDarkMode ? COLORS["800"] : COLORS["400"],
        tabBarInactiveTintColor: isDarkMode ? COLORS["900"] : COLORS["900"],
        tabBarInactiveBackgroundColor: isDarkMode
          ? COLORS["700"]
          : COLORS["300"],
        tabBarStyle: { height: 40 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicío",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={15} name="home" color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="calendario"
        options={{
          title: "Calendário",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={15} name="calendar" color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: "More",
          tabBarStyle: {
            width: 15,
          },
          tabBarButton: () => <MoreMenu />,
        }}
      />
    </Tabs>
  );
}
