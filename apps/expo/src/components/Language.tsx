import * as Haptics from "expo-haptics";
import React, { useMemo, useRef, useState, useEffect } from "react";
import {
  Dimensions,
  PanResponder,
  Platform,
  Pressable,
  ScrollView,
  Text,
  Vibration,
  View,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
} from "react-native-reanimated";

type LanguageToggleProps = {
  children: React.ReactNode;
};

function LanguageToggle({ children }: LanguageToggleProps) {
  const screenWidth = Dimensions.get("window").width;
  const translateX = useSharedValue(-Dimensions.get("window").width);
  const initialX = useRef(0);
  const lastToggleTime = useRef(0);
  const [isVernacular, setIsVernacular] = useState(true);

  // Split children
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

  const triggerHaptic = () => {
    if (Platform.OS === "ios" || Platform.OS === "android") {
      try {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      } catch {
        Vibration.vibrate(10);
      }
    }
  };

  const toggleLanguage = () => {
    const now = Date.now();
    if (now - lastToggleTime.current < 300) return;
    lastToggleTime.current = now;

    const toVernacular = !isVernacular;
    translateX.value = withSpring(toVernacular ? -screenWidth : 0, {
      damping: 20,
      stiffness: 150,
    });
    setIsVernacular(toVernacular);
    triggerHaptic();
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onMoveShouldSetPanResponder: (_, gesture) =>
        Math.abs(gesture.dx) > 1 &&
        Math.abs(gesture.dx) > Math.abs(gesture.dy) * 2,
      onPanResponderGrant: () => {
        initialX.current = translateX.value;
      },
      onPanResponderMove: (_, gesture) => {
        const offset = initialX.current + gesture.dx;
        translateX.value = Math.max(-screenWidth, Math.min(0, offset));
      },
      onPanResponderRelease: (_, gesture) => {
        const threshold = 50;
        const finalOffset = gesture.dx;

        if (finalOffset < -threshold) {
          // Swipe to vernacular
          translateX.value = withSpring(-screenWidth);
          runOnJS(setIsVernacular)(true);
          runOnJS(triggerHaptic)();
        } else if (finalOffset > threshold) {
          // Swipe to Latin
          translateX.value = withSpring(0);
          runOnJS(setIsVernacular)(false);
          runOnJS(triggerHaptic)();
        } else {
          // Not enough movement: snap back to current position
          translateX.value = withSpring(
            translateX.value < -screenWidth / 2 ? -screenWidth : 0,
          );
          runOnJS(setIsVernacular)(translateX.value < -screenWidth / 2);
        }
      },
    }),
  ).current;

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    translateX.value = isVernacular ? -screenWidth : 0;
  }, [isVernacular, screenWidth]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View {...panResponder.panHandlers}>
      <View className="flex-row justify-center mt-2">
        <Pressable
          onPress={toggleLanguage}
          accessibilityLabel="Toggle Language"
          accessibilityHint="Swipe or tap to switch between Latin and Vernacular"
          accessibilityRole="button"
          className="flex-row bg-sepia-300 dark:bg-sepia-700 rounded-lg active:bg-sepia-300 dark:active:bg-sepia-800"
        >
          <View
            className={`px-2 py-1 rounded-lg ${
              !isVernacular
                ? "bg-sepia-300 dark:bg-sepia-800"
                : "bg-sepia-200 dark:bg-sepia-700"
            }`}
          >
            <Text
              className={`text-xs font-medium ${
                !isVernacular
                  ? "text-sepia-700 dark:text-sepia-300"
                  : "text-sepia-500 dark:text-sepia-400"
              }`}
            >
              LA
            </Text>
          </View>
          <View
            className={`px-2 py-1 rounded-lg ${
              isVernacular ? "bg-sepia-200 dark:bg-sepia-800" : "bg-transparent"
            }`}
          >
            <Text
              className={`text-xs font-medium ${
                isVernacular
                  ? "text-sepia-700 dark:text-sepia-300"
                  : "text-sepia-500 dark:text-sepia-400"
              }`}
            >
              PT
            </Text>
          </View>
        </Pressable>
      </View>
      <Animated.View style={[animatedStyle]} className="flex-row w-[200%]">
        <View className="w-screen">
          <ScrollView scrollEnabled={true}>{latinContent}</ScrollView>
        </View>
        <View className="w-screen">
          <ScrollView scrollEnabled={true}>{vernacularContent}</ScrollView>
        </View>
      </Animated.View>

      {/* Toggle */}
    </View>
  );
}

export default LanguageToggle;
