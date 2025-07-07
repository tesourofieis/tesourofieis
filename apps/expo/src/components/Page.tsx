import { useLocalSearchParams } from "expo-router";
import type React from "react";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Platform, ScrollView, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
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

  const pinchGesture = Gesture.Pinch()
    .onStart(() => {
      baseScale.current = lastScale.current;
    })
    .onUpdate((event) => {
      const newScale = Math.max(
        0.5,
        Math.min(3, baseScale.current * event.scale),
      );
      const newFontSize = Math.round(16 * newScale);
      setFontSize(newFontSize);
    })
    .onEnd(() => {
      lastScale.current = fontSize / 16;
    });

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
        <GestureDetector gesture={pinchGesture}>
          <ScrollView ref={scrollViewRef}>{scrollContent}</ScrollView>
        </GestureDetector>
      </SafeAreaView>
    </PageProvider>
  );
}
