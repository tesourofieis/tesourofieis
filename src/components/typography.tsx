import { Text, type TextProps } from "react-native";
import { useFontContext } from "~/providers/fonts";

const PAGE_FONT_SIZE_CLASS = {
  small: "text-sm",
  medium: "text-base",
  large: "text-lg",
};

type PProps = TextProps & {
  className?: string;
};

export function Typography({ children, className = "", ...props }: PProps) {
  const { fontSize } = useFontContext();
  return (
    <Text className={`text-sepia ${PAGE_FONT_SIZE_CLASS[fontSize]} ${className}`} {...props}>
      {children}
    </Text>
  );
}
