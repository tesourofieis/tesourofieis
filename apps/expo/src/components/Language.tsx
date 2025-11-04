import React, { useEffect, useMemo, useState } from "react";
import {
  Platform,
  Pressable,
  useWindowDimensions,
  View,
  StyleSheet,
} from "react-native";
import {
  Gesture,
  GestureDetector,
  ScrollView as GestureScrollView,
} from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useDefaultLanguage } from "./LanguageSelector";

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
} as const;

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
  },
  animatedContainer: {
    flexDirection: "row", // Explicit: Overrides missing className in Animated.View (Reanimated v4 quirk)
    alignItems: "stretch", // Ensures full height alignment across children
  },
});

export default function LanguageToggle({ children }: LanguageToggleProps) {
  const { width: screenWidth } = useWindowDimensions();
  const defaultLanguage = useDefaultLanguage();
  const translateX = useSharedValue(-screenWidth);
  const translateXToggle = useSharedValue(toggleWidth);
  const currentLanguage = useSharedValue<"latin" | "vernacular">("vernacular");
  const [currentLang, setCurrentLang] = useState<"latin" | "vernacular">(
    "vernacular"
  );
  const [layoutWidth, setLayoutWidth] = useState(screenWidth);

  useEffect(() => {
    if (defaultLanguage) {
      setLanguage(defaultLanguage === "vernacular");
    }
  }, [defaultLanguage]);

  const setLanguage = (vernacular: boolean) => {
    const newLang = vernacular ? "vernacular" : "latin";
    setCurrentLang(newLang);
    currentLanguage.value = newLang;
    const targetContent = vernacular ? -layoutWidth : 0;
    translateX.value = withSpring(targetContent, springConfig);
    translateXToggle.value = withSpring(
      vernacular ? toggleWidth : 0,
      springConfig
    );
  };

  const toggle = () => {
    const toVernacular = currentLanguage.value === "latin";
    setLanguage(toVernacular);
  };

  const startTranslate = useSharedValue(0);
  const panGesture = Gesture.Pan()
    .minPointers(1)
    .maxPointers(1)
    .activeOffsetX([-10, 10])
    .failOffsetY([-5, 5])
    .onStart(() => {
      startTranslate.value = translateX.value;
    })
    .onUpdate((event) => {
      translateX.value = Math.max(
        -layoutWidth,
        Math.min(0, startTranslate.value + event.translationX)
      );
      const toggleProgress = -translateX.value / layoutWidth;
      translateXToggle.value = Math.max(
        0,
        Math.min(toggleWidth, toggleProgress * toggleWidth)
      );
    })
    .onEnd((event) => {
      const dx = event.translationX;
      const vx = event.velocityX;
      const swipeThreshold = layoutWidth * 0.25;
      const velocityThreshold = 500;
      if (dx < -swipeThreshold || vx < -velocityThreshold) {
        runOnJS(setLanguage)(true);
      } else if (dx > swipeThreshold || vx > velocityThreshold) {
        runOnJS(setLanguage)(false);
      } else {
        const midpoint = -layoutWidth / 2;
        runOnJS(setLanguage)(translateX.value < midpoint);
      }
    });

  const contentStyle = useAnimatedStyle(
    () => ({
      transform: [{ translateX: translateX.value }],
    }),
    [layoutWidth]
  );

  const { latinContent, vernacularContent } = useMemo(() => {
    const childrenArray = React.Children.toArray(children);
    return {
      latinContent: childrenArray.filter(
        (child) =>
          React.isValidElement(child) &&
          typeof child.props === "object" &&
          child.props !== null &&
          "className" in child.props &&
          typeof child.props.className === "string" &&
          child.props.className.includes("latin")
      ),
      vernacularContent: childrenArray.filter(
        (child) =>
          React.isValidElement(child) &&
          typeof child.props === "object" &&
          child.props !== null &&
          "className" in child.props &&
          typeof child.props.className === "string" &&
          child.props.className.includes("vernacular")
      ),
    };
  }, [children]);

  const onLayout = (event: any) => {
    const { width } = event.nativeEvent.layout;
    console.log(`Container layout: ${width}`); // Debug: Should match screenWidth
    if (width !== layoutWidth) {
      setLayoutWidth(width);
      const isVernacular = currentLanguage.value === "vernacular";
      translateX.value = withSpring(isVernacular ? -width : 0, springConfig);
    }
  };

  const isWeb = Platform.OS === "web";
  if (isWeb) {
    return (
      <View className="flex-row">
        <View className="flex-1">{latinContent}</View>
        <View className="flex-1">{vernacularContent}</View>
      </View>
    );
  }

  return (
    <View className="flex-1" onLayout={onLayout} style={styles.container}>
      <GestureDetector gesture={panGesture}>
        <Animated.View
          style={[
            contentStyle,
            { width: layoutWidth * 2 },
            styles.animatedContainer, // Inline flex-row via StyleSheet
          ]}
          // className="flex-row" // Commented: Not applied on Animated.View; use style instead
        >
          <View className="flex-1">
            <GestureScrollView
              scrollEnabled
              className="flex-1"
              style={{ alignSelf: "stretch" }} // Ensures full height if ScrollView quirks
            >
              {latinContent}
            </GestureScrollView>
          </View>
          <View className="flex-1">
            <GestureScrollView
              scrollEnabled
              className="flex-1"
              style={{ alignSelf: "stretch" }}
            >
              {vernacularContent}
            </GestureScrollView>
          </View>
        </Animated.View>
      </GestureDetector>
      <View className="flex-row justify-center mt-2">
        <Pressable
          onPress={toggle}
          accessibilityLabel={`Toggle Language. Current language: ${
            currentLang === "latin" ? "Latin" : "Vernacular"
          }`}
          accessibilityHint="Swipe or tap to switch between Latin and Vernacular"
          accessibilityRole="button"
          className="flex-row gap-1 px-2 py-1 justify-center bg-sepia-100 dark:bg-sepia-900 border border-sepia rounded-xl shadow-sm"
        >
          <View
            className={`w-2 h-2 rounded-full transition-colors ${
              currentLang === "vernacular"
                ? "bg-sepia-300 dark:bg-sepia-700"
                : "bg-sepia-700 dark:bg-sepia-300"
            }`}
          />
          <View
            className={`w-2 h-2 rounded-full transition-colors ${
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
