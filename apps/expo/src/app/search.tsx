import { useLocalSearchParams, useRouter } from "expo-router";
import { useColorScheme } from "nativewind";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants/Colors";

export default function SearchResults() {
  const router = useRouter();
  const { results } = useLocalSearchParams();
  const { colorScheme } = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  const handleItemPress = (item) => {
    if (item.path) {
      router.push({ pathname: "/modal", params: { url: item.path.slice(1) } });
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      className="p-3 border-b border-sepia-300 dark:border-sepia-700"
      onPress={() => handleItemPress(item)}
    >
      <Text className="text-sepia-800 dark:text-sepia-200">{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={JSON.parse(results)}
      renderItem={renderItem}
      keyExtractor={(item) => item.path}
      style={{
        backgroundColor: isDarkMode ? COLORS["900"] : COLORS["50"],
      }}
    />
  );
}
