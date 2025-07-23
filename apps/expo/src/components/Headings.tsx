import { useEffect, useRef } from "react";
import { Platform, Text, View } from "react-native";
import { vars } from "nativewind";
import { useFontVariables } from "~/providers/fonts";

type HeadingProps = {
  text: string;
  id?: string;
};

const HEADING_SIZE_MAP = {
  heading1: "6xl",
  h2: "5xl",
  h3: "4xl",
  h4: "3xl",
  h5: "2xl",
  h6: "xl",
} as const;

const createHeadingComponent = (className: string) => {
  return ({ text, id }: HeadingProps) => {
    const headingRef = useRef<Text>(null);
    const fontVariables = useFontVariables();
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
            headingRef.current.measureInWindow((_x, y) => {
              global.anchorRegistry[anchorId] = { yPosition: y, text: text };
            });
          }
        }, 100);
        return () => {
          clearTimeout(timer);
          delete global.anchorRegistry?.[anchorId];
        };
      }
    }, [anchorId, text]);

    const sizeKey =
      HEADING_SIZE_MAP[className as keyof typeof HEADING_SIZE_MAP];
    const headingVars = sizeKey
      ? {
          [`--heading-font-size-${sizeKey}`]:
            fontVariables[`--heading-font-size-${sizeKey}`],
          [`--heading-line-height-${sizeKey}`]:
            fontVariables[`--heading-line-height-${sizeKey}`],
        }
      : {};

    if (Platform.OS === "web") {
      return (
        <View nativeID={anchorId}>
          <Text style={vars(headingVars)} className={className}>
            {text}
          </Text>
        </View>
      );
    }

    return (
      <Text ref={headingRef} style={vars(headingVars)} className={className}>
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
