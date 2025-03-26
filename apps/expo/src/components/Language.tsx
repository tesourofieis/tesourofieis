import FontAwesome from "@expo/vector-icons/FontAwesome";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import {
  GestureHandlerRootView,
  Swipeable,
  gestureHandlerRootHOC,
} from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { COLORS } from "~/constants/Colors";

type LanguageToggleProps = {
  children: React.ReactNode;
};

function Language({ children }: LanguageToggleProps) {
  const [language, setLanguage] = useState<"latin" | "vernacular">(
    "vernacular",
  );
  const translateX = useSharedValue(0);

  // Parse children safely
  const childrenArray = React.Children.toArray(children);
  const latinContent = childrenArray.filter(
    (child) => React.isValidElement(child) && child.props.className === "latin",
  );
  const vernacularContent = childrenArray.filter(
    (child) =>
      React.isValidElement(child) && child.props.className === "vernacular",
  );

  const handleLanguageChange = () => {
    setLanguage((prev) => (prev === "vernacular" ? "latin" : "vernacular"));
    translateX.value = withTiming(0, { duration: 1000 });
  };

  const onSwipeableOpen = (direction: "left" | "right") => {
    if (direction === "left" && language !== "latin") {
      setLanguage("latin");
      translateX.value = withTiming(0, { duration: 1000 });
    } else if (direction === "right" && language !== "vernacular") {
      setLanguage("vernacular");
      translateX.value = withTiming(0, { duration: 1000 });
    }
  };

  return (
    <Swipeable
      friction={2}
      overshootFriction={8}
      leftThreshold={50}
      rightThreshold={50}
      onSwipeableOpen={onSwipeableOpen}
      renderLeftActions={() => <View />}
      renderRightActions={() => <View />}
      simultaneousHandlers={[]} // Allow simultaneous gesture recognition
    >
      <Pressable onPress={handleLanguageChange}>
        <View className="relative w-full gap-2 border border-sepia-200 dark:border-sepia-800">
          <View className="w-full mt-1 bg-sepia-200 dark:bg-sepia-800 p-1 items-center justify-between">
            {language === "vernacular" ? (
              <View className="flex-row  items-center gap-1">
                <FontAwesome
                  name="arrow-left"
                  color={COLORS["500"]}
                  size={12}
                />
                <Text className="text-xs text-sepia-500 font-black">Latim</Text>
              </View>
            ) : (
              <View className="flex-row items-center gap-1">
                <Text className="text-xs text-sepia-500 font-black">
                  Português
                </Text>
                <FontAwesome
                  name="arrow-right"
                  color={COLORS["500"]}
                  size={12}
                />
              </View>
            )}
          </View>

          <View className="flex-1">
            {language === "vernacular" ? vernacularContent : latinContent}
          </View>
        </View>
      </Pressable>
    </Swipeable>
  );
}

export default gestureHandlerRootHOC(Language);
