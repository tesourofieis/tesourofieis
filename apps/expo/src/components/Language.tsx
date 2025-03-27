import FontAwesome from "@expo/vector-icons/FontAwesome";
import React, { useMemo, useState } from "react";
import { Dimensions, Pressable, Text, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
} from "react-native-reanimated";
import { COLORS } from "~/constants/Colors";

type LanguageToggleProps = {
  children: React.ReactNode;
};

function Language({ children }: LanguageToggleProps) {
  const position = useSharedValue(100); // Position in percentage (0 = Latin, 100 = Vernacular)
  const [isLatin, setIsLatin] = useState(position.value === 0);
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

  const toggleLanguage = (forceDirection?: "left" | "right") => {
    const newPosition = forceDirection
      ? forceDirection === "right"
        ? 100
        : 0
      : isLatin
        ? 100
        : 0;
    position.value = withTiming(newPosition, { duration: 300 });
    setIsLatin(newPosition === 0);
  };

  const panGesture = Gesture.Pan()
    .onBegin((event) => {
      // Ignore swipes starting within 20px of the left edge
      if (event.x < 20) {
        return;
      }
    })
    .onUpdate((event) => {
      // Only move if velocity suggests intentional swipe (not slow drag)
      if (Math.abs(event.velocityX) > 100) {
        const translationX = event.translationX;
        const newPosition = isLatin
          ? Math.max(0, Math.min(100, (translationX / screenWidth) * 100))
          : Math.max(
              0,
              Math.min(100, 100 - (translationX / screenWidth) * 100),
            );
        position.value = newPosition;
      }
    })
    .onEnd(() => {
      const threshold = 50;
      if (isLatin && position.value > threshold) {
        toggleLanguage("right");
      } else if (!isLatin && position.value < 100 - threshold) {
        toggleLanguage("left");
      } else {
        position.value = withSpring(isLatin ? 0 : 100);
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: `${-position.value}%` }],
  }));

  return (
    <GestureDetector gesture={panGesture}>
      <View>
        <Pressable
          onPress={() => toggleLanguage()}
          accessibilityLabel="Toggle Language"
          accessibilityHint="Swipe or tap to switch between Latin and Vernacular"
          accessibilityRole="button"
        >
          <View
            className={`p-2 flex-row items-center ${
              isLatin ? "justify-end" : "justify-start"
            }`}
          >
            {isLatin ? (
              <>
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
              </>
            )}
          </View>
        </Pressable>

        {/* Swipeable content */}
        <Animated.View style={[animatedStyle]} className="flex-row w-full">
          <View className="w-full">{latinContent}</View>
          <View className="w-full">{vernacularContent}</View>
        </Animated.View>
      </View>
    </GestureDetector>
  );
}

export default Language;
