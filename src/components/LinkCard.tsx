import {
  ChevronRight,
  ChevronDown,
  MapPin,
  Shirt,
  Sparkles,
} from "lucide-react-native";
import type { Mass } from "~/lib/observanceManager";
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
  return `border border-sepia my-1 w-full justify-between rounded-xl shadow-sm p-2 ${
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
  indulgence,
  noLink,
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
  indulgence?: {
    prayer: string;
    body: string;
    link?: string;
  };
  noLink?: boolean;
}) {
  if (oratio) {
    return (
      <View>
        <Link href={oratio.link} asChild>
          <Pressable>
            {({ pressed }) => (
              <View className={cardBase(pressed)}>
                <View className="flex flex-row justify-between items-center gap-1 mr-2">
                  <View className="flex-1">
                    <View className="flex flex-row">
                      <Typography
                        numberOfLines={1}
                        className="text-pretty bold text-sm text-sepia-600 dark:text-sepia-200"
                      >
                        {description || ""}
                      </Typography>
                    </View>

                    <View className="flex flex-row items-center gap-2">
                      <Typography className="text-pretty bold text-base text-sepia-600 dark:text-sepia-300">
                        {oratio.name || ""}
                      </Typography>
                    </View>
                  </View>

                  <ChevronRight
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
        <Link href={mass.link} asChild>
          <Pressable>
            {({ pressed }) => (
              <View className={cardBase(pressed)}>
                <View className="flex flex-row justify-between items-center gap-1 mr-2">
                  <View className="flex-1">
                    <View className="px-3 flex flex-row items-center gap-2">
                      <Shirt size={15} color={getColor(mass.color)} />
                      <Typography
                        numberOfLines={1}
                        className="font-display text-sepia-600 dark:text-sepia-200"
                      >
                        {description || "Missa"}
                      </Typography>
                      <Typography className="text-sepia">|</Typography>

                      <Typography className="font-display text-sepia-700 dark:text-sepia-200">
                        Classe: {mass.rank}
                      </Typography>
                    </View>

                    <Typography className="text-pretty bold text-base text-sepia-600 dark:text-sepia-300">
                      {mass.name || ""}
                    </Typography>

                    {mass.local && (
                      <View className="flex-row items-center gap-2">
                        <MapPin color={COLORS[500]} />
                        <Typography className="text-pretty bold text-sepia-500">
                          Local: {String(mass.local).toUpperCase()}
                        </Typography>
                      </View>
                    )}
                  </View>

                  {hasChildren ? (
                    <ChevronDown
                      size={15}
                      color={pressed ? COLORS[600] : COLORS[500]}
                    />
                  ) : (
                    <ChevronRight
                      size={15}
                      color={pressed ? COLORS[600] : COLORS[500]}
                    />
                  )}
                </View>
              </View>
            )}
          </Pressable>
        </Link>
      </View>
    );
  }

  if (indulgence) {
    const CardContent = ({ pressed }: { pressed: boolean }) => (
      <View className={cardBase(pressed)}>
        <View className="flex flex-row justify-between items-center gap-1 mr-2">
          <View className="flex-1">
            <View className="px-3 flex flex-row items-center gap-2">
              <Sparkles size={15} color="#FFD700" />
              <Typography
                numberOfLines={1}
                className="font-display text-sepia-600 dark:text-sepia-200"
              >
                {description || "Indulgência Plenária"}
              </Typography>
            </View>

            <Typography className="text-pretty bold text-base text-sepia-600 dark:text-sepia-300">
              {indulgence.prayer || ""}
            </Typography>

            <Typography className="text-pretty text-sm text-sepia-500 dark:text-sepia-400 mt-1">
              {indulgence.body || ""}
            </Typography>
          </View>

          {indulgence.link && !noLink ? (
            <ChevronRight
              size={15}
              color={pressed ? COLORS[600] : COLORS[500]}
            />
          ) : null}
        </View>
      </View>
    );

    if (indulgence.link && !noLink) {
      return (
        <View>
          <Link href={indulgence.link} asChild>
            <Pressable>
              {({ pressed }) => <CardContent pressed={pressed} />}
            </Pressable>
          </Link>
        </View>
      );
    } else {
      return (
        <View>
          <Pressable>
            {({ pressed }) => <CardContent pressed={pressed} />}
          </Pressable>
        </View>
      );
    }
  }

  return (
    <View>
      {noLink ? (
        <Pressable>
          {({ pressed }) => (
            <View className={cardBase(pressed)}>
              <View className="flex flex-row justify-between items-center gap-1 mr-2">
                <View className="flex-1">
                  <View className="flex flex-row">
                    <Typography
                      className="text-pretty bold text-xs text-sepia-600 dark:text-sepia-200"
                      numberOfLines={1}
                    >
                      {description || ""}
                    </Typography>
                  </View>

                  <View className="flex flex-row items-center gap-2">
                    <Typography className="text-pretty bold text-base text-sepia-600 dark:text-sepia-300">
                      {title || ""}
                    </Typography>
                  </View>
                </View>
              </View>
            </View>
          )}
        </Pressable>
      ) : (
        <Link href={href ?? "/"} asChild>
          <Pressable>
            {({ pressed }) => (
              <View className={cardBase(pressed)}>
                <View className="flex flex-row justify-between items-center gap-1 mr-2">
                  <View className="flex-1">
                    <View className="flex flex-row">
                      <Typography
                        className="text-pretty bold text-xs text-sepia-600 dark:text-sepia-200"
                        numberOfLines={1}
                      >
                        {description || ""}
                      </Typography>
                    </View>

                    <View className="flex flex-row items-center gap-2">
                      <Typography className="text-pretty bold text-base text-sepia-600 dark:text-sepia-300">
                        {title || ""}
                      </Typography>
                    </View>
                  </View>

                  {hasChildren ? (
                    <ChevronDown
                      size={15}
                      color={pressed ? COLORS[600] : COLORS[500]}
                    />
                  ) : (
                    <ChevronRight
                      size={15}
                      color={pressed ? COLORS[600] : COLORS[500]}
                    />
                  )}
                </View>
              </View>
            )}
          </Pressable>
        </Link>
      )}
    </View>
  );
}
