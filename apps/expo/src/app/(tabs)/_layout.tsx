import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Tabs } from "expo-router";

import { Platform, useColorScheme } from "react-native";
import { burgundy } from "tailwind.config";

import { COLORS } from "~/constants/Colors";

export default function PageTabLayout() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  const isWeb = Platform.OS === "web";

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: isDarkMode ? COLORS[400] : COLORS[600],
        tabBarActiveBackgroundColor: isDarkMode ? COLORS[700] : COLORS[300],
        tabBarStyle: {
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          borderColor: isDarkMode ? COLORS[600] : COLORS[400],
          backgroundColor: isDarkMode ? COLORS[900] : COLORS[200],
        },
        tabBarLabelStyle: {
          fontSize: 9,
          fontFamily: "DMSerifDisplay_400Regular",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          href: "/",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="house" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="calendario"
        options={{
          title: "Calendário",
          href: "/calendario",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="calendar" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="configurar"
        options={{
          title: "Configurar",
          href: isWeb ? null : "/configurar",
          tabBarIcon: ({ color }) => <FontAwesome6 name="gear" color={color} />,
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: "Procura",
          href: "/more",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="magnifying-glass" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
