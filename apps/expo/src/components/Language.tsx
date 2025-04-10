import * as Haptics from "expo-haptics";
import React, { useMemo, useState, useRef } from "react";
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
} from "react-native-reanimated";

type LanguageToggleProps = {
  children: React.ReactNode;
};

function LanguageToggle({ children }: LanguageToggleProps) {
  const position = useSharedValue(100);
  const [isLatin, setIsLatin] = useState(false);
  const initialPosition = useRef(100);
  const lastToggleTime = useRef(0);
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

  // Function for haptic feedback based on platform
  const triggerHaptic = () => {
    if (Platform.OS === "ios" || Platform.OS === "android") {
      // Use Expo Haptics if available
      try {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      } catch (_error) {
        // Fallback to Vibration API
        Vibration.vibrate(10);
      }
    }
  };

  const toggleLanguage = () => {
    const now = Date.now();
    // Prevent multiple rapid toggles
    if (now - lastToggleTime.current < 300) return;
    lastToggleTime.current = now;

    triggerHaptic();

    const newPosition = isLatin ? 100 : 0;
    position.value = withSpring(newPosition, {
      damping: 20,
      stiffness: 150,
      overshootClamping: false,
      restSpeedThreshold: 0.1,
      restDisplacementThreshold: 0.1,
    });
    setIsLatin(!isLatin);
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return (
          Math.abs(gestureState.dx) > 10 && // Reduced from 30 for more sensitivity
          Math.abs(gestureState.dx) > Math.abs(gestureState.dy) * 2 // Reduced from 5
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
      onPanResponderRelease: (_, gestureState) => {
        // Use velocity to determine direction of swipe
        const { vx } = gestureState;
        const velocityThreshold = 0.3;

        if (vx > velocityThreshold) {
          // Fast swipe right
          position.value = withSpring(100, { velocity: vx * 100 });
          if (isLatin) {
            triggerHaptic();
            setIsLatin(false);
          }
        } else if (vx < -velocityThreshold) {
          // Fast swipe left
          position.value = withSpring(0, { velocity: vx * 100 });
          if (!isLatin) {
            triggerHaptic();
            setIsLatin(true);
          }
        } else if (position.value > 50) {
          // Slow swipe, use position
          position.value = withSpring(100);
          if (isLatin) {
            triggerHaptic();
            setIsLatin(false);
          }
        } else {
          position.value = withSpring(0);
          if (!isLatin) {
            triggerHaptic();
            setIsLatin(true);
          }
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
          className="flex-row bg-sepia-200 dark:bg-sepia-800 rounded-xl p-1 active:bg-sepia-100 dark:active:bg-sepia-700"
        >
          <View
            className={`px-2 rounded-lg ${
              isLatin
                ? "bg-sepia-300 dark:bg-sepia-900 text-white"
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
                ? "bg-sepia-300 dark:bg-sepia-900 text-white"
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
        </Pressable>
      </View>
    </View>
  );
}

export default LanguageToggle;
