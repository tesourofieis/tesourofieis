import React from "react";
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { COLORS } from "~/constants/Colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerStatusBarHeight: 1,
        headerTitle: "",
        tabBarActiveTintColor: COLORS["200"],
        tabBarActiveBackgroundColor: COLORS["800"],
        tabBarInactiveTintColor: COLORS["400"],
        tabBarInactiveBackgroundColor: COLORS["700"],
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicío",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={20} name="home" color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="calendario"
        options={{
          title: "Calendário",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={20} name="calendar" color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tabs>
  );
}
