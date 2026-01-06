import { useLocalSearchParams } from "expo-router";
import type React from "react";
import { useEffect, useRef } from "react";
import { Platform, ScrollView, useWindowDimensions, View } from "react-native";
import { ScrollView as GestureScrollView } from "react-native-gesture-handler";
import { PageProvider, useIsNested } from "~/providers/page";

type PageWrapperProps = {
  children: React.ReactNode;
};

export default function PageWrapper({ children }: PageWrapperProps) {
  const isNested = useIsNested();
  const isWeb = Platform.OS === "web";
  const { width } = useWindowDimensions();
  const isWebDesktop = isWeb && width >= 768;
  const scrollViewRef = useRef<any>(null);
  const { anchor } = useLocalSearchParams();
  const anchorString = Array.isArray(anchor) ? anchor[0] : anchor;

  useEffect(() => {
    if (anchorString) {
      setTimeout(() => {
        scrollToAnchor(anchorString);
      }, 300);
    }
  }, [anchorString]);

  const scrollToAnchor = (anchorId: string) => {
    if (Platform.OS === "web") {
      // @ts-ignore
      const element = document.getElementById(anchorId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      const anchorElement = (globalThis as any).anchorRegistry?.[anchorId];
      if (anchorElement && scrollViewRef.current) {
        scrollViewRef.current.scrollTo({
          y: Math.max(0, anchorElement.yPosition - 100),
          animated: true,
        });
      }
    }
  };

  if (isNested) {
    return <PageProvider>{children}</PageProvider>;
  }

  const ScrollComponent = isWeb ? ScrollView : GestureScrollView;
  const content = <View className="flex-1">{children}</View>;
  const scrollContent = isWebDesktop ? (
    <View className="flex-1 web:w-6/12 mx-auto">{content}</View>
  ) : (
    <View className="flex-1 px-1 w-full" style={{ minHeight: "100%" }}>
      {content}
    </View>
  );

  return (
    <PageProvider>
      <ScrollComponent
        scrollEnabled
        ref={scrollViewRef}
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {scrollContent}
      </ScrollComponent>
    </PageProvider>
  );
}
