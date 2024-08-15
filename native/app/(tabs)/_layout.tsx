import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, SafeAreaView } from "react-native";
import { useColorScheme } from "nativewind";
import { COLORS } from "@/constants/Colors";

export default function TabLayout() {
  const { colorScheme } = useColorScheme();

  const isLight = colorScheme === "light";

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerStatusBarHeight: 1,
        headerTitle: "",
        tabBarActiveTintColor: COLORS["800"],
        tabBarActiveBackgroundColor: COLORS["200"],
        tabBarInactiveTintColor: COLORS["600"],
        tabBarInactiveBackgroundColor: COLORS["300"],
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicío",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="calendario"
        options={{
          title: "Calendário",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="calendar" color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="configurar"
        options={{
          title: "Configurar",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cogs" color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tabs>
  );
}
