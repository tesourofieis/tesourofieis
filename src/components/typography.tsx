import { Text, type TextProps } from "react-native";
import { useFontContext } from "~/providers/fonts";

const PAGE_FONT_SIZE_CLASS = {
  small: "text-base",
  medium: "text-lg",
  large: "text-xl",
};

type PProps = TextProps & {
  className?: string;
};

export function Typography({ children, className = "", ...props }: PProps) {
  const { fontSize } = useFontContext();
  return (
    <Text
      className={`font-serif-custom text-sepia ${PAGE_FONT_SIZE_CLASS[fontSize]} ${className}`}
      {...props}
    >
      {children}
    </Text>
  );
}
