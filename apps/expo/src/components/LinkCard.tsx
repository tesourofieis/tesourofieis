import FontAwesome from "@expo/vector-icons/FontAwesome";
import type { Mass } from "@tesourofieis/cal/observanceManager";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";
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

export const cardBase = (pressed: boolean) => {
  return `my-1 w-full flex-1 justify-between rounded-lg shadow-xl p-4 ${
    pressed
      ? "bg-sepia-200 dark:bg-sepia-700 opacity-90"
      : "bg-sepia-100 dark:bg-sepia-800"
  }`;
};

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
      // @ts-ignore
      <Link href={oratio.link} asChild>
        {/* @ts-ignore */}
        <Pressable>
          {({ pressed }) => (
            <View className={cardBase(pressed)}>
              <View className="flex flex-row">
                <Text className="font-serif text-sm text-sepia-600 dark:text-sepia-300">
                  {description}
                </Text>
              </View>

              <View className="flex flex-row items-center gap-2">
                <Text className="font-black text-sepia-600 dark:text-sepia-400">
                  {oratio.name}
                </Text>
              </View>
            </View>
          )}
        </Pressable>
      </Link>
    );
  }

  if (mass) {
    return (
      // @ts-ignore
      <Link href={mass.link} asChild>
        {/* @ts-ignore */}
        <Pressable>
          {({ pressed }) => (
            <View className={cardBase(pressed)}>
              <View className="flex flex-col justify-start">
                <View className="flex flex-row">
                  <Text className="font-serif text-sm text-sepia-600 dark:text-sepia-300">
                    {description ?? "Missa"}
                  </Text>
                  {mass.rank && (
                    <Text className="font-serif text-sm font-bold text-sepia-700 dark:text-sepia-300">
                      {" "}
                      | Classe: {mass.rank}
                    </Text>
                  )}
                </View>

                <View className="flex flex-row items-center gap-2">
                  <FontAwesome name="circle" color={getColor(mass.color)} />
                  <Text className="font-black text-sepia-600 dark:text-sepia-400">
                    {mass.name}
                  </Text>
                </View>

                {mass.local && (
                  <View className="flex-row items-center gap-2">
                    <FontAwesome name="map" color={COLORS[500]} />
                    <Text className="font-black text-sepia-500">
                      Local: {mass.local.toUpperCase()}
                    </Text>
                  </View>
                )}
              </View>
            </View>
          )}
        </Pressable>
      </Link>
    );
  }

  return (
    // @ts-ignore
    <Link href={href ?? "/"} asChild>
      {/* @ts-ignore */}
      <Pressable>
        {({ pressed }) => (
          <View className={cardBase(pressed)}>
            <View className="flex flex-col justify-start">
              <View className="flex flex-row">
                <Text
                  className="font-serif text-sm text-sepia-600 dark:text-sepia-300"
                  numberOfLines={1}
                >
                  {description ?? ""}
                </Text>
              </View>

              <View className="flex flex-row items-center gap-2">
                <Text className="font-black text-sepia-600 dark:text-sepia-400">
                  {title}
                </Text>
              </View>
            </View>
          </View>
        )}
      </Pressable>
    </Link>
  );
}
