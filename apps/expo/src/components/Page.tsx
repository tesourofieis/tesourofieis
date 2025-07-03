import type React from "react";
import { Platform, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PageProvider, useIsNested } from "~/providers/page";

type PageWrapperProps = {
  children: React.ReactNode;
};

export default function PageWrapper({ children }: PageWrapperProps) {
  const isNested = useIsNested();

  const isWeb = Platform.OS === "web";

  if (isNested) {
    // If nested, just return the content wrapped in PageProvider
    return <PageProvider>{children}</PageProvider>;
  }

  // If not nested, provide full page structure
  return (
    <PageProvider>
      <SafeAreaView className="flex-1 dark:bg-sepia-900 bg-sepia-100">
        <ScrollView>
          {isWeb ? (
            <View className="flex-1 font-serif py-2 px-1 web:w-6/12 mx-auto">
              {children}
            </View>
          ) : (
            <View className="flex-1 font-serif py-2 px-1 w-full">
              {children}
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </PageProvider>
  );
}
