import React, { useEffect, useMemo, useState } from "react";
import { Platform, Pressable, StyleSheet, View } from "react-native";
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
import { useDefaultLanguage } from "~/providers/language";

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
    ...(Platform.OS === "web" ? {} : { overflow: "hidden" }),
  },
  animatedContainer: {
    flexDirection: "row",
    alignItems: "stretch",
  },
});

export default function LanguageToggle({ children }: LanguageToggleProps) {
  const defaultLanguage = useDefaultLanguage();
  const [containerWidth, setContainerWidth] = useState(0);
  const [currentLang, setCurrentLang] = useState<"latin" | "vernacular">(defaultLanguage);

  const currentLanguage = useSharedValue<"latin" | "vernacular">(defaultLanguage);
  const translateX = useSharedValue(defaultLanguage === "vernacular" ? -1000 : 0);
  const translateXToggle = useSharedValue(defaultLanguage === "vernacular" ? toggleWidth : 0);

  useEffect(() => {
    setCurrentLang(defaultLanguage);
    currentLanguage.value = defaultLanguage;
    if (containerWidth > 0) {
      translateX.value = defaultLanguage === "vernacular" ? -containerWidth : 0;
    }
  }, [defaultLanguage]);

  const setLanguage = (vernacular: boolean) => {
    if (containerWidth === 0) return;
    const newLang = vernacular ? "vernacular" : "latin";
    setCurrentLang(newLang);
    currentLanguage.value = newLang;
    const targetContent = vernacular ? -containerWidth : 0;
    translateX.value = withSpring(targetContent, springConfig);
    translateXToggle.value = withSpring(vernacular ? toggleWidth : 0, springConfig);
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
      if (containerWidth === 0) return;
      translateX.value = Math.max(
        -containerWidth,
        Math.min(0, startTranslate.value + event.translationX),
      );
      const toggleProgress = -translateX.value / containerWidth;
      translateXToggle.value = Math.max(0, Math.min(toggleWidth, toggleProgress * toggleWidth));
    })
    .onEnd((event) => {
      if (containerWidth === 0) return;
      const dx = event.translationX;
      const vx = event.velocityX;
      const swipeThreshold = containerWidth * 0.25;
      const velocityThreshold = 500;
      if (dx < -swipeThreshold || vx < -velocityThreshold) {
        runOnJS(setLanguage)(true);
      } else if (dx > swipeThreshold || vx > velocityThreshold) {
        runOnJS(setLanguage)(false);
      } else {
        const midpoint = -containerWidth / 2;
        runOnJS(setLanguage)(translateX.value < midpoint);
      }
    });

  const contentStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

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
          child.props.className.includes("latin"),
      ),
      vernacularContent: childrenArray.filter(
        (child) =>
          React.isValidElement(child) &&
          typeof child.props === "object" &&
          child.props !== null &&
          "className" in child.props &&
          typeof child.props.className === "string" &&
          child.props.className.includes("vernacular"),
      ),
    };
  }, [children]);

  const onContainerLayout = (event: any) => {
    const { width } = event.nativeEvent.layout;
    if (width > 0 && width !== containerWidth) {
      setContainerWidth(width);
      const isVernacular = currentLanguage.value === "vernacular";
      translateX.value = isVernacular ? -width : 0;
    }
  };

  const isWeb = Platform.OS === "web";

  if (isWeb) {
    const latinArray = React.Children.toArray(latinContent);
    const vernacularArray = React.Children.toArray(vernacularContent);
    const maxLength = Math.max(latinArray.length, vernacularArray.length);

    const pairs = Array.from({ length: maxLength }, (_, i) => ({
      latin: latinArray[i] || null,
      vernacular: vernacularArray[i] || null,
    }));

    return (
      <View>
        {pairs.map((pair, index) => (
          <View key={index} className="flex-row gap-4">
            <View className="flex-1">{pair.latin}</View>
            <View className="flex-1">{pair.vernacular}</View>
          </View>
        ))}
      </View>
    );
  }

  return (
    <View onLayout={onContainerLayout} style={styles.container}>
      <GestureDetector gesture={panGesture}>
        <Animated.View
          style={[contentStyle, { width: containerWidth * 2 }, styles.animatedContainer]}
        >
          <View style={{ flex: 1, width: containerWidth }}>
            <GestureScrollView
              scrollEnabled
              style={{ flex: 1 }}
              contentContainerStyle={{ flexGrow: 1 }}
            >
              {latinContent}
            </GestureScrollView>
          </View>
          <View style={{ flex: 1, width: containerWidth }}>
            <GestureScrollView
              scrollEnabled
              style={{ flex: 1 }}
              contentContainerStyle={{ flexGrow: 1 }}
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
          className="flex-row gap-1 px-2 py-1 justify-center extreme-background border border-sepia rounded-xl shadow-sm"
        >
          <View
            className={`w-2 h-2 rounded-full transition-colors ${
              currentLang === "vernacular" ? "soft-background" : "bg-sepia-700 dark:bg-sepia-300"
            }`}
          />
          <View
            className={`w-2 h-2 rounded-full transition-colors ${
              currentLang === "latin" ? "soft-background" : "bg-sepia-700 dark:bg-sepia-300"
            }`}
          />
        </Pressable>
      </View>
    </View>
  );
}
