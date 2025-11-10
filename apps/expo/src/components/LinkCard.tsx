import FontAwesome from "@expo/vector-icons/FontAwesome";
import type { Mass } from "@tesourofieis/cal/observanceManager";
import { burgundy } from "config";
import { Link } from "expo-router";
import { Pressable, View } from "react-native";
import { COLORS } from "~/constants/Colors";
import { Typography } from "./typography";

export function getColor(color?: string) {
  switch (color) {
    case "w":
      return "white";
    case "r":
      return burgundy[500];
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
  return `border border-sepia my-1 w-full flex-1 justify-between rounded-xl shadow-md p-2 ${
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
  hasChildren,
}: {
  mass?: Mass;
  oratio?: {
    link: string;
    name: string;
  };
  description?: string;
  href?: string;
  title?: string;
  hasChildren?: boolean;
}) {
  if (oratio) {
    return (
      <View>
        {/* @ts-ignore */}
        <Link href={oratio.link} asChild>
          <Pressable>
            {({ pressed }) => (
              <View className={cardBase(pressed)}>
                <View className="flex flex-row justify-between items-center gap-1 mr-2">
                  <View className="flex-1">
                    <View className="flex flex-row">
                      <Typography className="text-pretty text-sm text-sepia-600 dark:text-sepia-200">
                        {description || ""}
                      </Typography>
                    </View>

                    <View className="flex flex-row items-center gap-2">
                      <Typography className="text-pretty text-lg text-sepia-600 dark:text-sepia-300">
                        {oratio.name || ""}
                      </Typography>
                    </View>
                  </View>

                  <FontAwesome
                    name="chevron-right"
                    size={15}
                    color={pressed ? COLORS[600] : COLORS[500]}
                  />
                </View>
              </View>
            )}
          </Pressable>
        </Link>
      </View>
    );
  }

  if (mass) {
    return (
      <View>
        {/* @ts-ignore */}
        <Link href={mass.link} asChild>
          <Pressable>
            {({ pressed }) => (
              <View className={cardBase(pressed)}>
                <View className="flex flex-row justify-between items-center gap-1 mr-2">
                  <View className="flex-1">
                    <View className="px-3 flex flex-row items-center gap-2">
                      <FontAwesome name="circle" color={getColor(mass.color)} />
                      <Typography className="font-serif text-sm text-sepia-600 dark:text-sepia-200">
                        {description || "Missa"}
                      </Typography>
                      <Typography className="text-sepia">|</Typography>

                      <Typography className="font-serif text-sm text-sepia-700 dark:text-sepia-200">
                        Classe: {mass.rank}
                      </Typography>
                    </View>

                    <Typography className="text-pretty text-lg text-sepia-600 dark:text-sepia-300">
                      {mass.name || ""}
                    </Typography>

                    {mass.local && (
                      <View className="flex-row items-center gap-2">
                        <FontAwesome name="map" color={COLORS[500]} />
                        <Typography className="text-pretty text-sepia-500">
                          Local: {String(mass.local).toUpperCase()}
                        </Typography>
                      </View>
                    )}
                  </View>

                  <FontAwesome
                    name={hasChildren ? "chevron-down" : "chevron-right"}
                    size={15}
                    color={pressed ? COLORS[600] : COLORS[500]}
                  />
                </View>
              </View>
            )}
          </Pressable>
        </Link>
      </View>
    );
  }

  return (
    <View>
      {/* @ts-ignore */}
      <Link href={href ?? "/"} asChild>
        <Pressable>
          {({ pressed }) => (
            <View className={cardBase(pressed)}>
              <View className="flex flex-row justify-between items-center gap-1 mr-2">
                <View className="flex-1">
                  <View className="flex flex-row">
                    <Typography
                      className="text-pretty text-xs text-sepia-600 dark:text-sepia-200"
                      numberOfLines={1}
                    >
                      {description || ""}
                    </Typography>
                  </View>

                  <View className="flex flex-row items-center gap-2">
                    <Typography className="text-pretty text-lg text-sepia-600 dark:text-sepia-300">
                      {title || ""}
                    </Typography>
                  </View>
                </View>

                <FontAwesome
                  name={hasChildren ? "chevron-down" : "chevron-right"}
                  size={15}
                  color={pressed ? COLORS[600] : COLORS[500]}
                />
              </View>
            </View>
          )}
        </Pressable>
      </Link>
    </View>
  );
}
