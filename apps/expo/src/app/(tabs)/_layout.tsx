import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Tabs } from "expo-router";
import { useColorScheme } from "nativewind";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import MoreMenu from "~/components/MoreMenu";

import { COLORS } from "~/constants/Colors";

export default function TabLayout() {
  const { colorScheme } = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["top"]} style={styles.container}>
        <View className="flex-row items-center p-3 gap-3 bg-sepia-200 dark:bg-sepia-800">
          <FontAwesome6 name="book-bible" size={15} color="#e53935" />
          <Text className="font-bold text-lg text-sepia-800 dark:text-sepia-200 font-body">
            Tesouro dos Fiéis
          </Text>
        </View>
      </SafeAreaView>

      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: isDarkMode ? COLORS["200"] : COLORS["800"],
          tabBarActiveBackgroundColor: isDarkMode
            ? COLORS["800"]
            : COLORS["400"],
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
            tabBarIcon: ({ color }) => (
              <FontAwesome size={15} name="ellipsis-h" color={color} />
            ),
            tabBarShowLabel: false,
            // tabBarStyle: {
            //   width: 15,
            // },
            // tabBarButton: () => <MoreMenu />,
          }}
        />
      </Tabs>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS["600"],
  },
});
