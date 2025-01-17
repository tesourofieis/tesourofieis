import FontAwesome from "@expo/vector-icons/FontAwesome";
import type { Mass } from "@tesourofieis/cal/observanceManager";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { COLORS } from "~/constants/Colors";

export function getColor(color?: string) {
  switch (color) {
    case "w":
      return "white";
    case "r":
      return "red";
    case "g":
      return "green";
    case "v":
      return "violet";
    case "b":
      return "black";
    default:
      return "gray";
  }
}

export default function PageLinkCard({
  mass,
  oratio,
  description,
  href,
  title,
}: {
  mass?: Mass;
  oratio?: {
    link: string;
    name: string;
  };
  description?: string;
  href?: string;
  title?: string;
}) {
  if (oratio) {
    return (
      <Link
        href={oratio.link}
        className="my-1 w-full flex-1 justify-between rounded-lg border-l text-sepia-600 dark:text-sepia-300 border-l-sepia-300 p-4 no-underline hover:bg-sepia-200 dark:border-l-sepia-700 bg-sepia-100 dark:bg-sepia-900 dark:hover:bg-sepia-900"
        asChild
      >
        <View className="flex flex-col justify-start">
          <View className="flex flex-row">
            <Text className="font-serif text-sm text-sepia-600 dark:text-sepia-300">
              {description}
            </Text>
          </View>

          <View className="flex flex-row items-center gap-2">
            <Text className={"font-black text-sepia-600 dark:text-sepia-400"}>
              {oratio.name}
            </Text>
          </View>
        </View>
      </Link>
    );
  }
  if (mass) {
    return (
      <Link
        href={mass.link}
        className="my-1 w-full flex-1 justify-between rounded-lg border-l text-sepia-600 dark:text-sepia-300 border-l-sepia-300 p-4 no-underline hover:bg-sepia-200 bg-sepia-100 dark:bg-sepia-900 dark:border-l-sepia-700 dark:hover:bg-sepia-900"
        asChild
      >
        <View className="flex flex-col justify-start">
          <View className="flex flex-row">
            <Text className="font-serif text-sm text-sepia-600 dark:text-sepia-300">
              {description ? description : "Missa"}
            </Text>
            {mass.rank ? (
              <Text className="font-serif text-sm font-bold text-sepia-700 dark:text-sepia-300">
                {" "}
                | Classe: {mass.rank}
              </Text>
            ) : undefined}
          </View>

          <View className="flex flex-row items-center gap-2">
            <FontAwesome name="circle" color={getColor(mass.color)} />
            <Text className={"font-black text-sepia-600 dark:text-sepia-400"}>
              {mass.name}
            </Text>
          </View>
          {mass.local ? (
            <View className="flex-row items-center gap-2">
              <FontAwesome name="map" color={COLORS[500]} />
              <Text className={"font-black text-sepia-500"}>
                Local: {mass.local.toUpperCase()}
              </Text>
            </View>
          ) : undefined}
        </View>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="my-1 w-full flex-1 justify-between rounded-lg border-l text-sepia-600 dark:text-sepia-300 border-l-sepia-300 bg-sepia-200 dark:bg-sepia-800 p-4 no-underline hover:bg-sepia-200 dark:border-l-sepia-700 dark:hover:bg-sepia-900"
      asChild
    >
      <View className="flex flex-col justify-start">
        <View className="flex flex-row">
          <Text className="font-serif text-sm text-sepia-600 dark:text-sepia-300">
            {description ? description : ""}
          </Text>
        </View>

        <View className="flex flex-row items-center gap-2">
          <Text className={"font-black text-sepia-600 dark:text-sepia-400"}>
            {title}
          </Text>
        </View>
      </View>
    </Link>
  );
}
