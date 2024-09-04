import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useRouter } from "expo-router";
import { useColorScheme } from "nativewind";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "~/constants/Colors";
import { sidebar } from "../../../../astro/sidebar";

const MainMenuItem = ({ item, onPress, isExpanded }) => {
  const { colorScheme } = useColorScheme();
  const textColor = colorScheme === "light" ? COLORS["800"] : COLORS["200"];
  const iconColor = colorScheme === "light" ? COLORS["600"] : COLORS["400"];

  return (
    <TouchableOpacity
      className="m-2 p-3 flex-row items-center justify-between rounded-lg"
      onPress={onPress}
    >
      <View className="flex-row items-center">
        <Text className="font-bold text-lg" style={{ color: textColor }}>
          {item.label}
        </Text>
        {item.badge && (
          <View className="ml-2 px-2 py-1 rounded-full bg-sepia-900">
            <Text className="text-xs font-semibold text-sepia-200">
              {item.badge.text}
            </Text>
          </View>
        )}
      </View>
      {item.items && (
        <FontAwesome6
          name={isExpanded ? "chevron-up" : "chevron-down"}
          size={16}
          color={iconColor}
        />
      )}
      {item.link && <FontAwesome6 name="arrow-right" color={COLORS["500"]} />}
      {item.autogenerate?.directory && (
        <FontAwesome6 name="arrow-right" color={COLORS["500"]} />
      )}
    </TouchableOpacity>
  );
};

const SubMenuItem = ({ item, onPress, isExpanded }) => {
  const { colorScheme } = useColorScheme();
  const textColor = colorScheme === "light" ? COLORS["700"] : COLORS["300"];
  const iconColor = COLORS["500"];

  return (
    <TouchableOpacity
      className="flex-row items-center justify-between p-3"
      onPress={onPress}
    >
      <View className="flex-row items-center ml-6">
        <Text className="text-base" style={{ color: textColor }}>
          {item.label}
        </Text>
        {item.badge && (
          <View className="ml-2 px-2 py-1 rounded-full bg-sepia-900">
            <Text className="text-xs font-semibold text-sepia-200">
              {item.badge.text}
            </Text>
          </View>
        )}
      </View>
      {item.items && (
        <FontAwesome6
          name={isExpanded ? "chevron-up" : "chevron-down"}
          size={16}
          color={iconColor}
        />
      )}
      {item.link && <FontAwesome6 name="arrow-right" color={iconColor} />}
      {item.autogenerate?.directory && (
        <FontAwesome6 name="arrow-right" color={iconColor} />
      )}
    </TouchableOpacity>
  );
};

export default function MoreScreen() {
  const router = useRouter();
  const [expandedItems, setExpandedItems] = useState({});

  const handleItemPress = (item) => {
    if (item.items) {
      setExpandedItems((prev) => ({
        ...prev,
        [item.label]: !prev[item.label],
      }));
    } else if (item.link) {
      router.push({ pathname: "/modal", params: { url: item.link.slice(1) } });
    } else if (item.autogenerate) {
      router.push({
        pathname: "/modal",
        params: { url: item.autogenerate.directory },
      });
    }
  };

  const renderItem = (item, depth = 0, isLast = false) => {
    const isExpanded = expandedItems[item.label];

    return (
      <View
        key={item.label}
        className="bg-sepia-50 dark:bg-sepia-900 border rounded-lg border-sepia-300 p-1 m-1 dark:border-sepia-800"
      >
        {depth === 0 ? (
          <>
            <MainMenuItem
              item={item}
              onPress={() => handleItemPress(item)}
              isExpanded={isExpanded}
            />
          </>
        ) : (
          <SubMenuItem
            item={item}
            onPress={() => handleItemPress(item)}
            isExpanded={isExpanded}
          />
        )}
        {isExpanded && item.items && (
          <View className="ml-4">
            {item.items.map((subItem, index) =>
              renderItem(subItem, depth + 1, index === item.items.length - 1),
            )}
          </View>
        )}
      </View>
    );
  };

  return (
    <ScrollView className="flex-1 p-3">
      {sidebar.map((item, index) =>
        renderItem(item, 0, index === sidebar.length - 1),
      )}
    </ScrollView>
  );
}
