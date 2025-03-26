import React, { useMemo, useState } from "react";
import { Text, View, Pressable } from "react-native";
import {
  Gesture,
  GestureDetector,
  Directions,
} from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { COLORS } from "~/constants/Colors";

type LanguageToggleProps = {
  children: React.ReactNode;
};

function Language({ children }: LanguageToggleProps) {
  const position = useSharedValue(0);
  const [isLatin, setIsLatin] = useState(true);

  const { latinContent, vernacularContent } = useMemo(() => {
    const childrenArray = React.Children.toArray(children);
    return {
      latinContent: childrenArray.filter(
        (child) =>
          React.isValidElement(child) && child.props.className === "latin"
      ),
      vernacularContent: childrenArray.filter(
        (child) =>
          React.isValidElement(child) && child.props.className === "vernacular"
      ),
    };
  }, [children]);

  const toggleLanguage = () => {
    const newPosition = isLatin ? 1 : 0;
    position.value = withTiming(newPosition * 100, { duration: 300 });
    setIsLatin(!isLatin);
  };

  const flingRightGesture = Gesture.Fling()
    .direction(Directions.RIGHT)
    .onStart(toggleLanguage);

  const flingLeftGesture = Gesture.Fling()
    .direction(Directions.LEFT)
    .onStart(toggleLanguage);

  const composedGesture = Gesture.Race(flingRightGesture, flingLeftGesture);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: -position.value + "%" }],
  }));

  return (
    <GestureDetector gesture={composedGesture}>
      <View className="w-full">
        {/* Swipeable content */}
        <Animated.View style={[animatedStyle]} className="flex-row w-full">
          <View className="w-full">{latinContent}</View>
          <View className="w-full">{vernacularContent}</View>
        </Animated.View>

        {/* Toggle Button */}
        <Pressable
          onPress={toggleLanguage}
          accessibilityLabel="Toggle Language"
          accessibilityHint="Swipe or tap to switch between Latin and Vernacular"
          accessibilityRole="button"
        >
          <View className="w-full mt-1 bg-sepia-200 dark:bg-sepia-800 p-2 flex-row items-center justify-center">
            {isLatin ? (
              <>
                <Text className="mr-2 text-xs text-sepia-500 font-black">
                  Português
                </Text>
                <FontAwesome
                  name="arrow-right"
                  color={COLORS["500"]}
                  size={14}
                />
              </>
            ) : (
              <>
                <FontAwesome
                  name="arrow-left"
                  color={COLORS["500"]}
                  size={14}
                />
                <Text className="ml-2 text-xs text-sepia-500 font-black">
                  Latim
                </Text>
              </>
            )}
          </View>
        </Pressable>
      </View>
    </GestureDetector>
  );
}

export default Language;
