import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function LinkCard({
  href,
  caption,
  title,
  description,
  color = "sepia",
  borderColor = "border-sepia-500 dark:border-sepia-700",
}: {
  href: string;
  title?: string;
  caption?: string;
  description?: string;
  color?: string;
  borderColor?: string;
}) {
  return (
    <Link
      href={{
        pathname: "/modal",
        params: { url: href },
      }}
      className={`flex-1 w-full my-1 bg-sepia-200 dark:bg-sepia-800 justify-between text-sepia-600 dark:text-sepia-300 border rounded-lg ${borderColor} hover:bg-sepia-200 dark:hover:bg-sepia-900 border-sepia-100 dark:border-sepia-900 no-underline p-4 shadow`}
      asChild
    >
      <View className="flex flex-col justify-start">
        <View className="flex flex-row gap-2">
          <Text className="text-xs text-sepia-600 dark:text-sepia-300">{description}</Text>
          {caption && <Text className="text-xs font-bold text-sepia-700 dark:text-sepia-300">|  {caption}</Text>}
        </View>

        <View className="flex flex-row gap-2 items-center">
          <FontAwesome name="circle" color={color} />
          <Text className={`font-bold text-sepia-600 dark:text-sepia-400`}>{title}</Text>
        </View>
      </View>
    </Link>
  );
}
