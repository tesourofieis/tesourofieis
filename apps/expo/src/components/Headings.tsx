import { Text, View } from "react-native";
import { useEffect, useRef } from "react";
import { Platform } from "react-native";

type HeadingProps = {
  text: string;
  id?: string;
};

const createHeadingComponent = (className: string) => {
  return ({ text, id }: HeadingProps) => {
    const headingRef = useRef<Text>(null);
    const anchorId =
      id ||
      text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");

    useEffect(() => {
      if (Platform.OS !== "web") {
        if (!global.anchorRegistry) {
          global.anchorRegistry = {};
        }

        const timer = setTimeout(() => {
          if (headingRef.current) {
            headingRef.current.measureInWindow((x, y) => {
              global.anchorRegistry[anchorId] = {
                yPosition: y,
                text: text,
              };
            });
          }
        }, 100);

        return () => {
          clearTimeout(timer);
          delete global.anchorRegistry?.[anchorId];
        };
      }
    }, [anchorId, text]);

    if (Platform.OS === "web") {
      return (
        <View nativeID={anchorId}>
          <Text className={className}>{text}</Text>
        </View>
      );
    }

    return (
      <Text ref={headingRef} className={className}>
        {text}
      </Text>
    );
  };
};

export const H1 = createHeadingComponent("heading1");
export const H2 = createHeadingComponent("h2");
export const H3 = createHeadingComponent("h3");
export const H4 = createHeadingComponent("h4");
export const H5 = createHeadingComponent("h5");
export const H6 = createHeadingComponent("h6");
