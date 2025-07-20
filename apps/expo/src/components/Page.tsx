import { useLocalSearchParams } from "expo-router";
import type React from "react";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Platform, ScrollView, View } from "react-native";
import {
  Gesture,
  ScrollView as GestureScrollView,
  GestureDetector,
  PinchGestureHandler,
  State,
} from "react-native-gesture-handler";
import { runOnJS } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { PageProvider, useIsNested } from "~/providers/page";

const FontSizeContext = createContext<number>(16);
export const useFontSize = () => useContext(FontSizeContext);

type PageWrapperProps = {
  children: React.ReactNode;
};

export default function PageWrapper({ children }: PageWrapperProps) {
  const isNested = useIsNested();
  const isWeb = Platform.OS === "web";
  const scrollViewRef = useRef<ScrollView>(null);
  const { anchor } = useLocalSearchParams();
  const anchorString = Array.isArray(anchor) ? anchor[0] : anchor;
  const [fontSize, setFontSize] = useState(16);
  const baseScale = useRef(1);
  const lastScale = useRef(1);
  const currentScale = useRef(1);

  useEffect(() => {
    if (anchorString && scrollViewRef.current) {
      setTimeout(() => {
        scrollToAnchor(anchorString);
      }, 300);
    }
  }, [anchorString]);

  const scrollToAnchor = (anchorId: string) => {
    if (Platform.OS === "web") {
      const element = document.getElementById(anchorId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      const anchorElement = global.anchorRegistry?.[anchorId];
      if (anchorElement && scrollViewRef.current) {
        scrollViewRef.current.scrollTo({
          y: Math.max(0, anchorElement.yPosition - 100),
          animated: true,
        });
      }
    }
  };

  const onPinchEvent = (event: any) => {
    const scale = event.nativeEvent.scale;
    const newScale = Math.max(0.5, Math.min(3, baseScale.current * scale));
    currentScale.current = newScale;
    const newFontSize = Math.round(16 * newScale);
    setFontSize(newFontSize);

    console.log("[Pinch] Pinch event triggered");
    console.log(`[Pinch] Raw scale: ${scale}`);
    console.log(`[Pinch] New scale: ${newScale}`);
    console.log(`[Pinch] Font size set to: ${newFontSize}`);
  };

  const onPinchStateChange = (event: any) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      lastScale.current = currentScale.current;
      console.log(
        "[Pinch] Gesture ended, last scale updated:",
        lastScale.current
      );
    } else if (event.nativeEvent.state === State.BEGAN) {
      baseScale.current = lastScale.current;
      console.log(
        "[Pinch] Gesture began, base scale set to:",
        baseScale.current
      );
    }
  };

  const contentWithFontSize = (
    <FontSizeContext.Provider value={fontSize}>
      {children}
    </FontSizeContext.Provider>
  );

  if (isNested) {
    return <PageProvider>{contentWithFontSize}</PageProvider>;
  }

  const scrollContent = isWeb ? (
    <View className="flex-1 py-2 px-1 web:w-6/12 mx-auto">
      {contentWithFontSize}
    </View>
  ) : (
    <View className="flex-1 py-2 px-1 w-full">{contentWithFontSize}</View>
  );

  return (
    <PageProvider>
      <SafeAreaView className="flex-1 dark:bg-sepia-900 bg-sepia-100">
        <PinchGestureHandler
          onGestureEvent={onPinchEvent}
          onHandlerStateChange={onPinchStateChange}
        >
          <GestureScrollView scrollEnabled ref={scrollViewRef}>
            {scrollContent}
          </GestureScrollView>
        </PinchGestureHandler>
      </SafeAreaView>
    </PageProvider>
  );
}
