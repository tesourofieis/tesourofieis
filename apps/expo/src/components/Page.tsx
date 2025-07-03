import type React from "react";
import { Platform, ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useRef } from "react";
import { useLocalSearchParams } from "expo-router";
import { PageProvider, useIsNested } from "~/providers/page";
import { useSearch } from "~/providers/search";

type PageWrapperProps = {
  children: React.ReactNode;
  searchableSlug?: string;
};

export default function PageWrapper({
  children,
  searchableSlug,
}: PageWrapperProps) {
  const isNested = useIsNested();
  const isWeb = Platform.OS === "web";
  const scrollViewRef = useRef<ScrollView>(null);
  const { anchor } = useLocalSearchParams();
  const anchorString = Array.isArray(anchor) ? anchor[0] : anchor;

  useEffect(() => {
    if (anchorString && scrollViewRef.current) {
      setTimeout(() => {
        scrollToAnchor(anchorString);
      }, 300);
    }
  }, [anchorString]);

  const scrollToAnchor = (anchorId: string) => {
    if (Platform.OS === 'web') {
      // On web, we can use native anchor behavior
      const element = document.getElementById(anchorId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // On native, we need to find the registered anchor
      const anchorElement = global.anchorRegistry?.[anchorId];
      if (anchorElement && scrollViewRef.current) {
        scrollViewRef.current.scrollTo({
          y: Math.max(0, anchorElement.yPosition - 100),
          animated: true
        });
      }
    }
  };

  if (isNested) {
    return <PageProvider>{children}</PageProvider>;
  }

  return (
    <PageProvider>
      <SafeAreaView className="flex-1 dark:bg-sepia-900 bg-sepia-100">
        <Text>{currentQuery}</Text>
        <ScrollView ref={scrollViewRef}>
          {isWeb ? (
            <View
              ref={contentRef}
              className="flex-1 font-serif py-2 px-1 web:w-6/12 mx-auto"
              onLayout={handleContentLayout}
            >
              {children}
            </View>
          ) : (
            <View
              ref={contentRef}
              className="flex-1 font-serif py-2 px-1 w-full"
              onLayout={handleContentLayout}
            >
              {children}
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </PageProvider>
  );
}
