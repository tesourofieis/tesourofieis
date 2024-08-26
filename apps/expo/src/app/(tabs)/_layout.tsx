import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import React from "react";

import { COLORS } from "~/constants/Colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS["200"],
        tabBarActiveBackgroundColor: COLORS["800"],
        tabBarInactiveTintColor: COLORS["400"],
        tabBarInactiveBackgroundColor: COLORS["700"],
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
    </Tabs>
  );
}
