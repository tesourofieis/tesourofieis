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
      className={`flex-1 w-full my-1 bg-sepia-200 dark:bg-sepia-800 justify-between text-sepia-600 border rounded-lg ${borderColor} hover:bg-sepia-200 dark:hover:bg-sepia-900 hover:border-sepia-800 dark:hover:border-sepia-400 no-underline p-4`}
      asChild
    >
      <View className="flex flex-col justify-start">
        {caption && <Text className="font-sm font-bold">{caption}</Text>}
        <View className="">
          <Text className={`font-bold text-${color}-500`}>{title}</Text>
        </View>
        <Text className="text-sepia-600">{description}</Text>
      </View>
    </Link>
  );
}
