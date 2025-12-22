import { useLocalSearchParams } from "expo-router";
import type React from "react";
import { useEffect, useRef } from "react";
import { Platform, View } from "react-native";
import { ScrollView as GestureScrollView } from "react-native-gesture-handler";
import { PageProvider, useIsNested } from "~/providers/page";

type PageWrapperProps = {
  children: React.ReactNode;
};

function PageContent({ children }: { children: React.ReactNode }) {
  return <View className="flex-1">{children}</View>;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  const isNested = useIsNested();
  const isWeb = Platform.OS === "web";
  const scrollViewRef = useRef<GestureScrollView>(null);
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

  const content = <PageContent>{children}</PageContent>;

  if (isNested) {
    return <PageProvider>{content}</PageProvider>;
  }

  const scrollContent = isWeb ? (
    <View className="flex-1 px-2 web:w-6/12 mx-auto">{content}</View>
  ) : (
    <View className="flex-1 px-1 w-full">{content}</View>
  );

  return (
    <PageProvider>
      <GestureScrollView scrollEnabled ref={scrollViewRef}>
        {scrollContent}
      </GestureScrollView>
    </PageProvider>
  );
}
