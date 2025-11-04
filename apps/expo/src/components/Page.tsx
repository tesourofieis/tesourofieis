import { useLocalSearchParams } from "expo-router";
import type React from "react";
import { useEffect, useRef } from "react";
import { Platform, View } from "react-native";
import { ScrollView as GestureScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
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

  const contentWithFontSize = <PageContent>{children}</PageContent>;

  if (isNested) {
    return <PageProvider>{contentWithFontSize}</PageProvider>;
  }

  const scrollContent = isWeb ? (
    <View className="flex-1 web:w-6/12 mx-auto">{contentWithFontSize}</View>
  ) : (
    <View className="flex-1 w-full">{contentWithFontSize}</View>
  );

  return (
    <PageProvider>
      <SafeAreaView className="flex-1 dark:bg-sepia-900 bg-sepia-100">
        <GestureScrollView scrollEnabled ref={scrollViewRef}>
          {scrollContent}
        </GestureScrollView>
      </SafeAreaView>
    </PageProvider>
  );
}
