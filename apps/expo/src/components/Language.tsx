import * as Haptics from "expo-haptics";
import React, { useMemo, useState } from "react";
import {
  Platform,
  Pressable,
  useWindowDimensions,
  Vibration,
  View,
} from "react-native";
import {
  ScrollView as GestureScrollView,
  PanGestureHandler,
  type PanGestureHandlerStateChangeEvent,
  State,
} from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

type LanguageToggleProps = {
  children: React.ReactNode;
};

const toggleWidth = 20;

const springConfig = {
  damping: 20,
  stiffness: 150,
  mass: 0.8,
  restDisplacementThreshold: 0.1,
  restSpeedThreshold: 0.1,
};

export default function LanguageToggle({ children }: LanguageToggleProps) {
  const { width } = useWindowDimensions();
  const translateX = useSharedValue(-width);
  const translateXToggle = useSharedValue(toggleWidth);
  const currentLanguage = useSharedValue<"latin" | "vernacular">("vernacular");
  const [currentLang, setCurrentLang] = useState<"latin" | "vernacular">(
    "vernacular",
  );

  const triggerHaptic = () => {
    try {
      if (Platform.OS === "ios" || Platform.OS === "android") {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      }
    } catch {
      Vibration.vibrate(10);
    }
  };

  const setLanguage = (vernacular: boolean) => {
    const newLang = vernacular ? "vernacular" : "latin";
    setCurrentLang(newLang);
    currentLanguage.value = newLang;
    const targetContent = vernacular ? -width : 0;
    translateX.value = withSpring(targetContent, springConfig, () => {
      runOnJS(triggerHaptic)();
    });
    translateXToggle.value = withSpring(
      vernacular ? toggleWidth : 0,
      springConfig,
    );
  };

  const toggle = () => {
    const toVernacular = currentLanguage.value === "latin";
    setLanguage(toVernacular);
  };

  const handlePan = (event: { nativeEvent: { translationX: number } }) => {
    const offset = event.nativeEvent.translationX;
    translateX.value = Math.max(
      -width,
      Math.min(0, offset + (currentLanguage.value === "latin" ? 0 : -width)),
    );
    const toggleProgress = -translateX.value / width;
    translateXToggle.value = Math.max(
      0,
      Math.min(toggleWidth, toggleProgress * toggleWidth),
    );
  };

  const handleStateChange = (event: PanGestureHandlerStateChangeEvent) => {
    if (event.nativeEvent.state === State.END) {
      const dx = event.nativeEvent.translationX;
      const vx = event.nativeEvent.velocityX;
      const swipeThreshold = width * 0.25;
      const velocityThreshold = 0.5;

      if (dx < -swipeThreshold || vx < -velocityThreshold) {
        runOnJS(setLanguage)(true);
      } else if (dx > swipeThreshold || vx > velocityThreshold) {
        runOnJS(setLanguage)(false);
      } else {
        const midpoint = -width / 2;
        runOnJS(setLanguage)(translateX.value < midpoint);
      }
    }
  };

  const contentStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

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

  const isWeb = Platform.OS === "web";

  if (isWeb) {
    return (
      <View className="flex-row">
        <View className="flex-1 min-w-0">{latinContent}</View>
        <View className="flex-1 min-w-0">{vernacularContent}</View>
      </View>
    );
  }

  return (
    <View>
      <PanGestureHandler
        onGestureEvent={handlePan}
        onHandlerStateChange={handleStateChange}
        minPointers={1}
        maxPointers={1}
        activeOffsetX={[-10, 10]}
        failOffsetY={[-5, 5]}
      >
        <Animated.View style={[contentStyle]} className="flex-row w-[200%]">
          <View className="w-screen">
            <GestureScrollView scrollEnabled>{latinContent}</GestureScrollView>
          </View>
          <View className="w-screen">
            <GestureScrollView scrollEnabled>
              {vernacularContent}
            </GestureScrollView>
          </View>
        </Animated.View>
      </PanGestureHandler>

      <View className="flex-row justify-center">
        <Pressable
          onPress={toggle}
          accessibilityLabel={`Toggle Language. Current language: ${
            currentLang === "latin" ? "Latin" : "Vernacular"
          }`}
          accessibilityHint="Swipe or tap to switch between Latin and Vernacular"
          accessibilityRole="button"
          className="flex-row gap-1 px-2 py-1 justify-center bg-sepia-100 dark:bg-sepia-900 border border-sepia-200 dark:border-sepia-800 rounded-lg"
        >
          <View
            className={`w-2 h-2 rounded-full ${
              currentLang === "vernacular"
                ? "bg-sepia-300 dark:bg-sepia-700"
                : "bg-sepia-700 dark:bg-sepia-300"
            }`}
          />
          <View
            className={`w-2 h-2 rounded-full ${
              currentLang === "latin"
                ? "bg-sepia-300 dark:bg-sepia-700"
                : "bg-sepia-700 dark:bg-sepia-300"
            }`}
          />
        </Pressable>
      </View>
    </View>
  );
}
