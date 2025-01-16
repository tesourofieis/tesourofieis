import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Tabs } from "expo-router";
import React from "react";
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
          borderTopWidth: 1,
          borderTopColor: isDarkMode ? COLORS["700"] : COLORS["300"],
          backgroundColor: isDarkMode ? COLORS["800"] : COLORS["200"],
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          href: isWeb ? null : "index",
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
          href: isWeb ? null : "calendario",
          title: "Calendário",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 size={15} name="calendar" color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="notificacoes"
        options={{
          href: isWeb ? null : "notificacoes",
          title: "Notificações",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 size={15} name="bell" color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />

      <Tabs.Screen
        name="missal"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="devocionario"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="ritual"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="fe"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="canticos"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
