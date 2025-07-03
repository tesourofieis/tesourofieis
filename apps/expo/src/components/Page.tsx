import type React from "react";
import { Platform, ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useRef, useState } from "react";
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
  const contentRef = useRef<View>(null);
  const { currentQuery } = useSearch();
  const [isContentRendered, setIsContentRendered] = useState(false);

  useEffect(() => {
    if (currentQuery && isContentRendered) {
      scrollToSearchTerm(currentQuery);
    }
  }, [currentQuery, isContentRendered]);

  const handleContentLayout = () => {
    setIsContentRendered(true);
  };

  const scrollToSearchTerm = (query: string) => {
    if (!query.trim() || !contentRef.current) return;

    const searchInChildren = (element: any, yOffset = 0): boolean => {
      if (!element || !element.props) return false;

      // Check if element has onLayout and text content
      if (element.props.children) {
        const childText = extractTextFromChildren(element.props.children);
        if (
          childText &&
          childText.toLowerCase().includes(query.toLowerCase())
        ) {
          // Found matching text, scroll to this position
          if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({
              y: Math.max(0, yOffset - 100),
              animated: true,
            });
          }
          return true;
        }
      }

      // Recursively search children
      if (React.Children.count(element.props.children) > 0) {
        let currentOffset = yOffset;
        return React.Children.toArray(element.props.children).some(
          (child: any) => {
            const found = searchInChildren(child, currentOffset);
            currentOffset += 50; // Rough estimate of element height
            return found;
          }
        );
      }

      return false;
    };

    const extractTextFromChildren = (children: any): string => {
      if (typeof children === "string") return children;
      if (Array.isArray(children)) {
        return children.map(extractTextFromChildren).join(" ");
      }
      if (React.isValidElement(children) && children.props?.children) {
        return extractTextFromChildren(children.props.children);
      }
      return "";
    };

    // Wait a bit more for any lazy content to load
    setTimeout(() => {
      searchInChildren({ props: { children } });
    }, 100);
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
