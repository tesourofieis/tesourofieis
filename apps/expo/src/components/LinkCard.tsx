import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function LinkCard({
  href,
  caption,
  title,
  description,
  color,
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
      className={`my-1 w-full flex-1 justify-between rounded-lg border text-sepia-600 dark:text-sepia-300 ${borderColor} border-sepia-300 p-4 no-underline hover:bg-sepia-200 dark:border-sepia-700 dark:hover:bg-sepia-900`}
      asChild
    >
      <View className="flex flex-col justify-start">
        <View className="flex flex-row">
          <Text className="font-serif text-sm text-sepia-600 dark:text-sepia-300">
            {description}
          </Text>
          {caption && (
            <Text className="font-serif text-sm font-bold text-sepia-700 dark:text-sepia-300">
              {" "}
              | {caption}
            </Text>
          )}
        </View>

        <View className="flex flex-row items-center gap-2">
          {color && <FontAwesome name="circle" color={color} />}
          <Text className={"font-black text-sepia-600 dark:text-sepia-400"}>
            {title}
          </Text>
        </View>
      </View>
    </Link>
  );
}
