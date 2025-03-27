import React, { useMemo, useState, useRef } from "react";
import {
  Dimensions,
  PanResponder,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

type LanguageToggleProps = {
  children: React.ReactNode;
};

function LanguageToggle({ children }: LanguageToggleProps) {
  const position = useSharedValue(100); // Default to Vernacular
  const [isLatin, setIsLatin] = useState(false); // Start with Vernacular (PT)
  const initialPosition = useRef(100);
  const screenWidth = Dimensions.get("window").width;

  const { latinContent, vernacularContent } = useMemo(() => {
    const childrenArray = React.Children.toArray(children);
    return {
      latinContent: childrenArray.filter(
        (child) =>
          React.isValidElement(child) && child.props.className === "latin",
      ),
      vernacularContent: childrenArray.filter(
        (child) =>
          React.isValidElement(child) && child.props.className === "vernacular",
      ),
    };
  }, [children]);

  const toggleLanguage = () => {
    const newPosition = isLatin ? 100 : 0;
    position.value = withTiming(newPosition, { duration: 300 });
    setIsLatin(!isLatin);
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return (
          Math.abs(gestureState.dx) > 30 &&
          Math.abs(gestureState.dx) > Math.abs(gestureState.dy) * 5
        );
      },
      onPanResponderGrant: () => {
        initialPosition.current = position.value;
      },
      onPanResponderMove: (_, gestureState) => {
        const { dx } = gestureState;
        const delta = (dx / screenWidth) * 100;
        const newPosition = initialPosition.current - delta;
        position.value = Math.max(0, Math.min(100, newPosition));
      },
      onPanResponderRelease: () => {
        if (position.value > 50) {
          position.value = withTiming(100, { duration: 300 });
          setIsLatin(false);
        } else {
          position.value = withTiming(0, { duration: 300 });
          setIsLatin(true);
        }
      },
    }),
  ).current;

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: `${-position.value}%` as const }],
  }));

  return (
    <View {...panResponder.panHandlers}>
      {/* Content */}
      <Animated.View style={[animatedStyle]} className="flex-row w-full">
        <View className="w-full">
          <ScrollView scrollEnabled={true} directionalLockEnabled={true}>
            {latinContent}
          </ScrollView>
        </View>
        <View className="w-full">
          <ScrollView scrollEnabled={true} directionalLockEnabled={true}>
            {vernacularContent}
          </ScrollView>
        </View>
      </Animated.View>

      {/* Chip Indicator */}
      <View className="flex-row justify-center mt-2">
        <Pressable
          onPress={toggleLanguage}
          accessibilityLabel="Toggle Language"
          accessibilityHint="Swipe or tap to switch between Latin and Vernacular"
          accessibilityRole="button"
        >
          <View className="flex-row bg-sepia-200 dark:bg-sepia-800 rounded-xl p-1">
            <View
              className={`px-2 rounded-lg ${
                isLatin
                  ? "bg-sepia-200 dark:bg-sepia-800 text-white"
                  : "bg-transparent"
              }`}
            >
              <Text
                className={`text-xs font-medium ${
                  isLatin
                    ? "text-sepia-700 dark:text-sepia-300"
                    : "text-sepia-500"
                }`}
              >
                LA
              </Text>
            </View>
            <View
              className={`px-2 rounded-lg ${
                !isLatin
                  ? "bg-sepia-200 dark:bg-sepia-700 text-white"
                  : "bg-transparent"
              }`}
            >
              <Text
                className={`text-xs font-medium ${
                  !isLatin
                    ? "text-sepia-700 dark:text-sepia-300"
                    : "text-sepia-500"
                }`}
              >
                PT
              </Text>
            </View>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

export default LanguageToggle;
