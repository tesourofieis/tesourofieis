import type React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PageProvider, useIsNested } from "~/providers/page";

type PageWrapperProps = {
  children: React.ReactNode;
};

export default function PageWrapper({ children }: PageWrapperProps) {
  const isNested = useIsNested();

  if (isNested) {
    // If nested, just return the content wrapped in PageProvider
    return <PageProvider>{children}</PageProvider>;
  }

  // If not nested, provide full page structure
  return (
    <PageProvider>
      <SafeAreaView className="flex-1">
        <ScrollView>
          <View className="docs">{children}</View>
        </ScrollView>
      </SafeAreaView>
    </PageProvider>
  );
}
