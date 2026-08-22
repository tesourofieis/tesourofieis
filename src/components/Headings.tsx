import { Platform, Text } from "react-native";
import { useFontContext } from "~/providers/fonts";

type FontSize = "small" | "medium" | "large";

type HeadingProps = {
  text: string;
  id?: string;
  className?: string;
};

const H1_SIZE = {
  small: "text-3xl",
  medium: "text-4xl",
  large: "text-5xl",
} satisfies Record<FontSize, string>;
const H2_SIZE = {
  small: "text-2xl",
  medium: "text-3xl",
  large: "text-4xl",
} satisfies Record<FontSize, string>;
const H3_SIZE = {
  small: "text-xl",
  medium: "text-2xl",
  large: "text-3xl",
} satisfies Record<FontSize, string>;
const H4_SIZE = {
  small: "text-lg",
  medium: "text-xl",
  large: "text-2xl",
} satisfies Record<FontSize, string>;
const H5_SIZE = {
  small: "text-base",
  medium: "text-lg",
  large: "text-xl",
} satisfies Record<FontSize, string>;
const H6_SIZE = {
  small: "text-sm",
  medium: "text-base",
  large: "text-lg",
} satisfies Record<FontSize, string>;

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
      className={`font-display text-center text-red-500 py-5 ${H1_SIZE[fontSize]} ${className}`}
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
      className={`font-display text-center text-sepia-800 dark:text-sepia-200 pt-8 pb-2 ${H2_SIZE[fontSize]} ${className}`}
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
      className={`font-display text-center tracking-widest uppercase text-sepia-500 dark:text-sepia-400 pt-7 pb-1 ${H3_SIZE[fontSize]} ${className}`}
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
      className={`font-display text-center text-sepia-700 dark:text-sepia-300 pt-5 pb-1 ${H4_SIZE[fontSize]} ${className}`}
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
      className={`font-display text-center text-sepia-600 dark:text-sepia-400 pt-4 pb-0.5 ${H5_SIZE[fontSize]} ${className}`}
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
      className={`font-display text-center text-sepia-500 dark:text-sepia-500 pt-3 pb-0.5 ${H6_SIZE[fontSize]} ${className}`}
    >
      {text}
    </Text>
  );
}
