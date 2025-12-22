import { Platform, Text } from "react-native";
import { useFontContext } from "~/providers/fonts";

type FontSize = "small" | "medium" | "large";

type HeadingProps = {
  text: string;
  id?: string;
  className?: string;
};

const H1_SIZE: Record<FontSize, string> = {
  small: "text-3xl",
  medium: "text-4xl",
  large: "text-5xl",
};
const H2_SIZE: Record<FontSize, string> = {
  small: "text-2xl",
  medium: "text-3xl",
  large: "text-4xl",
};
const H3_SIZE: Record<FontSize, string> = {
  small: "text-xl",
  medium: "text-2xl",
  large: "text-3xl",
};
const H4_SIZE: Record<FontSize, string> = {
  small: "text-lg",
  medium: "text-xl",
  large: "text-2xl",
};
const H5_SIZE: Record<FontSize, string> = {
  small: "text-base",
  medium: "text-lg",
  large: "text-xl",
};
const H6_SIZE: Record<FontSize, string> = {
  small: "text-sm",
  medium: "text-base",
  large: "text-lg",
};

function useHeadingId(text: string, id?: string): string {
  return (
    id ||
    text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")
  );
}

function registerAnchor(anchorId: string, yPosition: number) {
  if (Platform.OS !== "web") {
    if (!(globalThis as any).anchorRegistry) {
      (globalThis as any).anchorRegistry = {};
    }
    (globalThis as any).anchorRegistry[anchorId] = { yPosition };
  }
}

export function H1({ text, id, className = "" }: HeadingProps) {
  const { fontSize } = useFontContext();
  const anchorId = useHeadingId(text, id);
  return (
    <Text
      nativeID={anchorId}
      onLayout={(e) => registerAnchor(anchorId, e.nativeEvent.layout.y)}
      className={`font-display text-center text-red-500 py-6 ${H1_SIZE[fontSize]} ${className}`}
    >
      {text}
    </Text>
  );
}

export function H2({ text, id, className = "" }: HeadingProps) {
  const { fontSize } = useFontContext();
  const anchorId = useHeadingId(text, id);
  return (
    <Text
      nativeID={anchorId}
      onLayout={(e) => registerAnchor(anchorId, e.nativeEvent.layout.y)}
      className={`font-display text-center text-sepia-800 dark:text-sepia-200 py-5 ${H2_SIZE[fontSize]} ${className}`}
    >
      {text}
    </Text>
  );
}

export function H3({ text, id, className = "" }: HeadingProps) {
  const { fontSize } = useFontContext();
  const anchorId = useHeadingId(text, id);
  return (
    <Text
      nativeID={anchorId}
      onLayout={(e) => registerAnchor(anchorId, e.nativeEvent.layout.y)}
      className={`font-display text-center text-sepia-800 dark:text-sepia-200 py-4 ${H3_SIZE[fontSize]} ${className}`}
    >
      {text}
    </Text>
  );
}

export function H4({ text, id, className = "" }: HeadingProps) {
  const { fontSize } = useFontContext();
  const anchorId = useHeadingId(text, id);
  return (
    <Text
      nativeID={anchorId}
      onLayout={(e) => registerAnchor(anchorId, e.nativeEvent.layout.y)}
      className={`font-display text-center text-sepia-800 dark:text-sepia-200 py-3 ${H4_SIZE[fontSize]} ${className}`}
    >
      {text}
    </Text>
  );
}

export function H5({ text, id, className = "" }: HeadingProps) {
  const { fontSize } = useFontContext();
  const anchorId = useHeadingId(text, id);
  return (
    <Text
      nativeID={anchorId}
      onLayout={(e) => registerAnchor(anchorId, e.nativeEvent.layout.y)}
      className={`font-display text-center text-sepia-800 dark:text-sepia-200 py-2 ${H5_SIZE[fontSize]} ${className}`}
    >
      {text}
    </Text>
  );
}

export function H6({ text, id, className = "" }: HeadingProps) {
  const { fontSize } = useFontContext();
  const anchorId = useHeadingId(text, id);
  return (
    <Text
      nativeID={anchorId}
      onLayout={(e) => registerAnchor(anchorId, e.nativeEvent.layout.y)}
      className={`font-display text-center text-sepia-800 dark:text-sepia-200 py-1 ${H6_SIZE[fontSize]} ${className}`}
    >
      {text}
    </Text>
  );
}
