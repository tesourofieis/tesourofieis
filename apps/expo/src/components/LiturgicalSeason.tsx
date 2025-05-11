import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { LiturgicalSeason as Season } from "@tesourofieis/cal/calendar";
import { Link } from "expo-router";
import React from "react";
import { Text, View, useColorScheme } from "react-native";
import { COLORS } from "~/constants/Colors";
import { useCalendar } from "~/providers/calendar";

type Prayer = {
  title: string;
  href: string;
  description?: string;
};

const TEMPORAS_PRAYERS: Record<Season, Prayer[]> = {
  Epifania: [
    {
      title: "Ave, Regína cælórum",
      href: "/devocionario/antifonas/avereginacaelorum",
    },
  ],
  Advento: [
    {
      title: "Ave, Regína cælórum",
      href: "/devocionario/antifonas/avereginacaelorum",
    },
  ],
  Septuagésima: [
    {
      title: "Preparação para Quaresma",
      href: "/devocionario/temporas/pre-quaresma",
    },
  ],
  Quaresma: [{ title: "Via Sacra", href: "/devocionario/viasacra" }],
  Paixão: [{ title: "Via Sacra", href: "/devocionario/viasacra" }],
  Páscoa: [
    {
      title: "Regina Coeli",
      href: "/devocionario/antifonas/reginacaeli",
      description: "Antifona",
    },
  ],
  Natal: [
    {
      title: "Ave, Regína cælórum",
      href: "/devocionario/antifonas/avereginacaelorum",
    },
  ],
  Pentecostes: [
    {
      title: "Veni Creator Spiritus",
      href: "/devocionario/oracoes/espiritosanto",
    },
    { title: "Salve Regina", href: "/devocionario/antifonas/salveregina" },
  ],
  "Tempo depois Pentecostes": [
    {
      title: "Veni Creator Spiritus",
      href: "/devocionario/oracoes/espiritosanto",
    },
    { title: "Salve Regina", href: "/devocionario/antifonas/salveregina" },
  ],
};

// Icons for each liturgical season
const CATEGORY_ICONS: Record<Season, string> = {
  Epifania: "stars",
  Advento: "calendar-day",
  Septuagésima: "seedling",
  Quaresma: "cross",
  Paixão: "cross",
  Páscoa: "dove",
  Natal: "baby",
  Pentecostes: "fire",
  "Tempo depois Pentecostes": "fire",
};

// Component to display seasonal prayers based on current liturgical category
export default function LiturgicalSeason() {
  const colorScheme = useColorScheme();
  const textColor =
    colorScheme === "light" ? "text-sepia-800" : "text-sepia-200";
  const iconColor = colorScheme === "light" ? COLORS["800"] : COLORS["200"];

  const { season } = useCalendar();

  // Handle case where category doesn't have associated prayers
  const prayers = TEMPORAS_PRAYERS[season] || [];

  if (prayers.length === 0) {
    return null;
  }

  return (
    <View className="m-5 border p-3 bg-sepia-300 dark:bg-gray-700 rounded-lg border-sepia-500">
      <View className="flex-row items-center mb-2">
        <FontAwesome6
          name={CATEGORY_ICONS[season] || "church"}
          size={18}
          color={iconColor}
        />
        <Text className={`font-bold ${textColor} text-left pl-3 text-lg`}>
          {season}
        </Text>
      </View>

      <View className="">
        {prayers.map((prayer, index) => (
          <Link key={index} href={prayer.href} asChild>
            <View className="w-1/3 bg-sepia-100 dark:bg-sepia-700 rounded-lg p-4 border border-sepia-300 dark:border-sepia-600 active:bg-sepia-200 active:dark:bg-sepia-600">
              <Text className={`font-bold ${textColor}`}>{prayer.title}</Text>
              {prayer.description && (
                <Text className="text-sepia-600 dark:text-sepia-400 text-sm mt-1">
                  {prayer.description}
                </Text>
              )}
            </View>
          </Link>
        ))}
      </View>
    </View>
  );
}
