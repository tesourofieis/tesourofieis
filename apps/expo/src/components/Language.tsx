import * as Haptics from "expo-haptics";
import React, { useMemo, useRef } from "react";
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

const screenWidth = Dimensions.get("window").width;
const toggleWidth = 20;

const springConfig = {
  damping: 25,
  stiffness: 120,
  mass: 0.8,
  restDisplacementThreshold: 0.1,
  restSpeedThreshold: 0.1,
};

export default function LanguageToggle({ children }: LanguageToggleProps) {
  // Shared values for content and toggle positions.
  const translateX = useSharedValue(-screenWidth); // vernacular by default
  const translateXToggle = useSharedValue(toggleWidth); // PT by default
  const currentLanguage = useSharedValue<"latin" | "vernacular">("vernacular");

  const initialX = useRef(0);

  // Haptic feedback when switching languages
  const triggerHaptic = () => {
    try {
      if (Platform.OS === "ios" || Platform.OS === "android") {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      }
    } catch {
      Vibration.vibrate(10);
    }
  };

  // Function to animate the translations to the desired target values.
  const setLanguage = (vernacular: boolean) => {
    const targetContent = vernacular ? -screenWidth : 0;
    const targetToggle = vernacular ? toggleWidth : 0;
    translateX.value = withSpring(targetContent, springConfig);
    translateXToggle.value = withSpring(targetToggle, springConfig);
    currentLanguage.value = vernacular ? "vernacular" : "latin";
    triggerHaptic();
  };

  // Toggle language on tap.
  const toggle = () => {
    const toVernacular = currentLanguage.value === "latin";
    setLanguage(toVernacular);
  };

  // PanResponder for horizontal swipe gestures.
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onMoveShouldSetPanResponder: (_, gesture) =>
        Math.abs(gesture.dx) > 2 &&
        Math.abs(gesture.dx) > Math.abs(gesture.dy) * 1.5,
      onPanResponderGrant: () => {
        initialX.current = translateX.value;
      },
      onPanResponderMove: (_, gesture) => {
        const offset = initialX.current + gesture.dx;
        // Clamp the content translation between -screenWidth and 0.
        translateX.value = Math.max(-screenWidth, Math.min(0, offset));
      },
      onPanResponderRelease: (_, gesture) => {
        const velocity = gesture.vx;
        const dx = gesture.dx;
        const swipeThreshold = 50;
        // Choose target language based on swipe direction, distance, and velocity.
        if (dx < -swipeThreshold || velocity < -0.5) {
          runOnJS(setLanguage)(true);
        } else if (dx > swipeThreshold || velocity > 0.5) {
          runOnJS(setLanguage)(false);
        } else {
          const midpoint = -screenWidth / 2;
          runOnJS(setLanguage)(translateX.value < midpoint);
        }
      },
    }),
  ).current;

  const toggleStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateXToggle.value }],
  }));

  const contentStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  // Separate children based on the provided className prop
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

  return (
    <View {...panResponder.panHandlers}>
      <View className="flex-row justify-center mt-2">
        <Pressable
          onPress={toggle}
          accessibilityLabel="Toggle Language"
          accessibilityHint="Swipe or tap to switch between Latin and Vernacular"
          accessibilityRole="button"
          className="relative flex-row bg-sepia-100 dark:bg-sepia-900 border border-sepia-200 dark:border-sepia-800 rounded-lg"
          style={{ width: toggleWidth * 2 }}
        >
          <Animated.View
            style={[toggleStyle]}
            className="absolute w-[20px] h-full rounded-lg bg-sepia-200 dark:bg-sepia-800"
          />
          <View className="w-[20px] items-center justify-center py-1">
            <Text className="text-xs font-medium text-sepia-700 dark:text-sepia-300">
              LA
            </Text>
          </View>
          <View className="w-[20px] items-center justify-center py-1">
            <Text className="text-xs font-medium text-sepia-700 dark:text-sepia-300">
              PT
            </Text>
          </View>
        </Pressable>
      </View>

      <Animated.View style={[contentStyle]} className="flex-row w-[200%]">
        <View className="w-screen">
          <ScrollView scrollEnabled>{latinContent}</ScrollView>
        </View>
        <View className="w-screen">
          <ScrollView scrollEnabled>{vernacularContent}</ScrollView>
        </View>
      </Animated.View>
    </View>
  );
}
