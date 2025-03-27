import React, { useMemo, useState, useCallback, useRef } from "react";
import { Dimensions, Pressable, View, PanResponder, Text } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

type LanguageToggleProps = {
  children: React.ReactNode;
};

function LanguageToggle({ children }: LanguageToggleProps) {
  const position = useSharedValue(0);
  const [isLatin, setIsLatin] = useState(true);
  const initialPosition = useRef(0);
  const screenWidth = Dimensions.get("window").width;

  // Separate Latin and Vernacular content
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

  // Toggle language on tap
  const toggleLanguage = () => {
    const newPosition = isLatin ? 100 : 0;
    position.value = withTiming(newPosition, { duration: 300 });
    setIsLatin(!isLatin);
  };

  // Handle swipe gestures
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        initialPosition.current = position.value;
      },
      onPanResponderMove: (event, gestureState) => {
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
    })
  ).current;

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: `-${position.value}%` }],
  }));

  // Determine which language is active for the chip

  return (
    <View {...panResponder.panHandlers}>
      {/* Content */}
      <Animated.View style={[animatedStyle]} className="flex-row w-full">
        <View className="w-full">{latinContent}</View>
        <View className="w-full">{vernacularContent}</View>
      </Animated.View>

      {/* Chip Indicator */}
      <View className="flex-row justify-center mt-2">
        <Pressable
          onPress={toggleLanguage}
          accessibilityLabel="Toggle Language"
          accessibilityHint="Swipe or tap to switch between Latin and Vernacular"
          accessibilityRole="button"
        >
          <View className="flex-row bg-sepia-300 dark:bg-sepia-700 rounded-full p-1">
            {/* Latin Segment */}
            <View
              className={`px-3 py-1 rounded-full ${
                isLatin ? "bg-sepia-500" : "bg-transparent"
              }`}
            >
              <Text
                className={`text-xs font-medium ${
                  isLatin ? "text-white" : "text-sepia-600"
                }`}
              >
                LA
              </Text>
            </View>
            {/* Vernacular Segment */}
            <View
              className={`px-3 py-1 rounded-full ${
                !isLatin ? "bg-sepia-500" : "bg-transparent"
              }`}
            >
              <Text
                className={`text-xs font-medium ${
                  !isLatin ? "text-white" : "text-sepia-600"
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
