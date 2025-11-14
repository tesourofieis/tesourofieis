import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { TouchableOpacity, useColorScheme, View } from "react-native";
import { H6 } from "~/components/Headings";
import { COLORS } from "~/constants/Colors";
import { useFontContext } from "~/providers/fonts";
import { Typography } from "./typography";

const SIZES = ["small", "medium", "large"] as const;
const SIZE_LABEL: Record<string, string> = {
  small: "Pequeno",
  medium: "Médio",
  large: "Grande",
};

export const FontSizeSelector = () => {
  const colorScheme = useColorScheme();
  const { fontSize, setFontSize } = useFontContext();
  return (
    <View className="py-3 my-3 border-b border-sepia-300 dark:border-sepia-700">
      <View className="flex-row items-center mb-3 gap-1">
        <FontAwesome6
          name="text-height"
          size={15}
          color={colorScheme === "light" ? COLORS["900"] : COLORS["200"]}
        />
        <H6 text="Tamanho da Letra" />
      </View>

      <View className="flex-row justify-between items-center">
        {SIZES.map((size) => (
          <TouchableOpacity
            key={size}
            onPress={() => setFontSize(size)}
            className={`flex-1 mx-1 py-3 px-4 rounded-lg items-center ${
              fontSize === size
                ? "bg-sepia-800 dark:bg-sepia-200"
                : "soft-background"
            }`}
          >
            <Typography
              className={`font-medium ${
                fontSize === size
                  ? "text-sepia-200 dark:text-sepia-800"
                  : "text-sepia-800 dark:text-sepia-200"
              }`}
            >
              {SIZE_LABEL[size]}
            </Typography>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
