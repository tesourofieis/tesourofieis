import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Tabs } from "expo-router";
import { useColorScheme } from "nativewind";
import React from "react";

import { COLORS } from "~/constants/Colors";

export default function TabLayout() {
  const { colorScheme } = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: isDarkMode ? COLORS["200"] : COLORS["800"],
        tabBarActiveBackgroundColor: isDarkMode ? COLORS["700"] : COLORS["300"],
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: isDarkMode ? COLORS["700"] : COLORS["300"],
          backgroundColor: isDarkMode ? COLORS["800"] : COLORS["200"],
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicío",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 size={15} name="house" color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="calendario"
        options={{
          title: "Calendário",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 size={15} name="calendar" color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: "More",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 size={15} name="ellipsis" color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tabs>
  );
}
