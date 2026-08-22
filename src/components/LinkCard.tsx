import { ChevronRight, ChevronDown, MapPin, Sparkles, Calendar, Users } from "lucide-react-native";
import { burgundy } from "config";
import type React from "react";
import type { Mass } from "~/lib/observanceManager";
import { Link } from "expo-router";
import { Pressable, View } from "react-native";
import { useAppTheme } from "~/theme";
import { Typography } from "./typography";

function toRoman(n: number): string {
  const map = new Map<number, string>([
    [1, "I"],
    [2, "II"],
    [3, "III"],
    [4, "IV"],
  ]);
  return map.get(n) ?? String(n);
}

function massNameClass(rank: number): string {
  if (rank === 1) return "text-sepia-800 dark:text-sepia-100";
  if (rank === 2) return "text-sepia-700 dark:text-sepia-200";
  return "text-sepia-600 dark:text-sepia-400";
}

function getBorderColor(color?: string) {
  switch (color) {
    case "w":
      return "#d8d8cc";
    case "r":
      return burgundy[500];
    case "g":
      return "#3a7d50";
    case "v":
      return "#7a4d8a";
    case "vw":
      return "#9b6faa";
    case "b":
      return "#555550";
    default:
      return "#7c6f64";
  }
}

type LinkCardVariant = "default" | "featured";

export const cardBase = (pressed: boolean, variant: LinkCardVariant = "default") => {
  return `w-full rounded-xl border border-sepia shadow-sm ${
    variant === "featured" ? "p-4" : "p-3"
  } ${pressed ? "bg-sepia-200 dark:bg-sepia-700 opacity-90" : "bg-sepia-100 dark:bg-sepia-800"}`;
};

function CardShell({
  children,
  pressed,
  variant,
  accentColor,
}: {
  children: React.ReactNode;
  pressed: boolean;
  variant?: LinkCardVariant;
  accentColor?: string;
}) {
  const isFeatured = variant === "featured";
  return (
    <View
      className={cardBase(pressed, variant)}
      style={
        isFeatured && accentColor
          ? { overflow: "hidden" }
          : accentColor
            ? { borderLeftWidth: 4, borderLeftColor: accentColor }
            : undefined
      }
    >
      {isFeatured && accentColor && (
        <View
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 5,
            backgroundColor: accentColor,
          }}
        />
      )}
      {children}
    </View>
  );
}

function CardContent({
  description,
  title,
  accessory,
}: {
  description?: string;
  title?: string;
  accessory?: React.ReactNode;
}) {
  return (
    <View className="flex-row items-center justify-between gap-3">
      <View className="flex-1">
        {description ? (
          <Typography
            className="font-strong text-xs text-sepia-600 dark:text-sepia-300"
            numberOfLines={1}
          >
            {description}
          </Typography>
        ) : null}
        <Typography className="font-strong text-base text-sepia-700 dark:text-sepia-200">
          {title || ""}
        </Typography>
      </View>
      {accessory}
    </View>
  );
}

function Badge({
  children,
  important,
  featured,
}: {
  children: React.ReactNode;
  important?: boolean;
  featured?: boolean;
}) {
  return (
    <View
      className={`${featured ? "px-2.5 py-1" : "px-2 py-0.5"} rounded-full flex-shrink-0 ${
        important ? "bg-burgundy-100 dark:bg-burgundy-900" : "bg-sepia-200 dark:bg-sepia-700"
      }`}
    >
      <Typography
        className={`${featured ? "text-[10px]" : "text-[9px]"} tracking-wider ${
          important
            ? "text-burgundy-700 dark:text-burgundy-200"
            : "text-sepia-500 dark:text-sepia-400"
        }`}
        numberOfLines={1}
      >
        {children}
      </Typography>
    </View>
  );
}

function CardChevron({
  hasChildren,
  pressed,
  size = 15,
}: {
  hasChildren?: boolean;
  pressed: boolean;
  size?: number;
}) {
  const { colors } = useAppTheme();
  const color = pressed ? colors.textSecondary : colors.textSubtle;
  return hasChildren ? (
    <ChevronDown size={size} color={color} />
  ) : (
    <ChevronRight size={size} color={color} />
  );
}

function IndulgenceContent({
  indulgence,
  description,
  pressed,
}: {
  indulgence: { prayer: string; body: string; link?: string };
  description?: string;
  pressed: boolean;
}) {
  return (
    <CardShell pressed={pressed}>
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
      </View>
    </CardShell>
  );
}

export default function PageLinkCard({
  mass,
  oratio,
  description,
  href,
  title,
  hasChildren,
  indulgence,
  noLink,
  variant = "default",
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
  variant?: LinkCardVariant;
}) {
  const isFeatured = variant === "featured";
  const { colors } = useAppTheme();

  if (oratio) {
    return (
      <View>
        <Link href={oratio.link} asChild>
          <Pressable>
            {({ pressed }) => (
              <CardShell pressed={pressed}>
                <CardContent description={description} title={oratio.name} />
              </CardShell>
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
              <CardShell
                pressed={pressed}
                variant={variant}
                accentColor={getBorderColor(mass.color)}
              >
                <View
                  className={`flex-row justify-between ${isFeatured ? "items-start gap-3" : "items-center gap-2"}`}
                >
                  <View className="flex-1">
                    <View
                      className={`flex-row flex-wrap ${isFeatured ? "gap-2 mb-2" : "gap-1.5 mb-1.5"}`}
                    >
                      <Badge featured={isFeatured}>{description?.toUpperCase() || "MISSA"}</Badge>
                      <Badge featured={isFeatured} important={mass.rank === 1}>
                        {toRoman(mass.rank)} CLASSE
                      </Badge>
                    </View>

                    <Typography
                      className={`${isFeatured ? "font-display" : "font-strong"} ${massNameClass(mass.rank)}`}
                      style={{
                        fontSize: isFeatured ? 17 : 15,
                        lineHeight: isFeatured ? 24 : 21,
                      }}
                    >
                      {mass.name || ""}
                    </Typography>

                    {(mass.local || mass.calendar || mass.outro) && (
                      <View
                        className={`flex-row items-center flex-wrap gap-3 ${isFeatured ? "mt-2" : "mt-1"}`}
                      >
                        {mass.local && (
                          <View className="flex-row items-center gap-1">
                            <MapPin size={12} color={colors.textSubtle} />
                            <Typography className="text-xs text-sepia-500">
                              {String(mass.local).toUpperCase()}
                            </Typography>
                          </View>
                        )}
                        {mass.calendar === "62" && (
                          <View className="flex-row items-center gap-1">
                            <Calendar size={12} color={colors.textSubtle} />
                            <Typography className="text-xs text-sepia-500">1962</Typography>
                          </View>
                        )}
                        {mass.outro && (
                          <View className="flex-row items-center gap-1">
                            <Users size={12} color={colors.textSubtle} />
                            <Typography className="text-xs text-sepia-500">Alt.</Typography>
                          </View>
                        )}
                      </View>
                    )}
                  </View>

                  <View className={isFeatured ? "pt-1" : ""}>
                    {hasChildren ? <CardChevron hasChildren pressed={pressed} size={18} /> : null}
                  </View>
                </View>
              </CardShell>
            )}
          </Pressable>
        </Link>
      </View>
    );
  }

  if (indulgence) {
    if (indulgence.link && !noLink) {
      return (
        <View>
          <Link href={indulgence.link} asChild>
            <Pressable>
              {({ pressed }) => (
                <IndulgenceContent
                  indulgence={indulgence}
                  description={description}
                  pressed={pressed}
                />
              )}
            </Pressable>
          </Link>
        </View>
      );
    } else {
      return (
        <View>
          <Pressable>
            {({ pressed }) => (
              <IndulgenceContent
                indulgence={indulgence}
                description={description}
                pressed={pressed}
              />
            )}
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
            <CardShell pressed={pressed}>
              <CardContent description={description} title={title} />
            </CardShell>
          )}
        </Pressable>
      ) : (
        <Link href={href ?? "/"} asChild>
          <Pressable>
            {({ pressed }) => (
              <CardShell pressed={pressed}>
                <CardContent
                  description={description}
                  title={title}
                  accessory={
                    hasChildren ? <CardChevron hasChildren pressed={pressed} /> : undefined
                  }
                />
              </CardShell>
            )}
          </Pressable>
        </Link>
      )}
    </View>
  );
}
