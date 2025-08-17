import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Text, TouchableOpacity, useColorScheme, View } from "react-native";
import { H6 } from "~/components/Headings";
import { COLORS } from "~/constants/Colors";
import { useFont } from "~/providers/fonts";

export type FontSize = "pequeno" | "normal" | "grande";

const FONT_SIZE_MAP: Record<FontSize, number> = {
  pequeno: 14,
  normal: 18,
  grande: 24,
};

export const FontSizeSelector = () => {
  const colorScheme = useColorScheme();

  const { setFontSize, fontSize } = useFont();

  const sizes: FontSize[] = ["pequeno", "normal", "grande"];

  return (
    <View className="py-3 my-3 border-b border-sepia-300 dark:border-sepia-700">
      <View className="flex-row items-center mb-3">
        <FontAwesome6
          name="text-height"
          size={15}
          color={colorScheme === "light" ? COLORS["900"] : COLORS["200"]}
        />
        <H6 text="Tamanho da Letra" />
      </View>

      <View className="flex-row justify-between items-center">
        {sizes.map((size) => (
          <TouchableOpacity
            key={size}
            onPress={() => setFontSize(size)}
            className={`flex-1 mx-1 py-3 px-4 rounded-lg items-center ${
              fontSize === size
                ? "bg-sepia-800 dark:bg-sepia-200"
                : "bg-sepia-300 dark:bg-sepia-700"
            }`}
          >
            <Text
              className={`font-medium ${
                fontSize === size
                  ? "text-sepia-200 dark:text-sepia-800"
                  : "text-sepia-800 dark:text-sepia-200"
              }`}
              style={{ fontSize: FONT_SIZE_MAP[size] }}
            >
              {size}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
