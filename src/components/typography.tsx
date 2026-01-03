import { Text, type TextProps } from "react-native";
import { useFontContext } from "~/providers/fonts";
import { Platform } from "react-native";

const PAGE_FONT_SIZE_CLASS = {
  small: Platform.OS === "web" ? "text-xs" : "text-sm",
  medium: Platform.OS === "web" ? "text-sm" : "text-base",
  large: Platform.OS === "web" ? "text-base" : "text-lg",
};

type PProps = TextProps & {
  className?: string;
};

export function Typography({ children, className = "", ...props }: PProps) {
  const { fontSize } = useFontContext();
  return (
    <Text
      className={`text-sepia ${PAGE_FONT_SIZE_CLASS[fontSize]} ${className}`}
      {...props}
    >
      {children}
    </Text>
  );
}
