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
  Epiphany: [
    { title: "Orações da Epifania", href: "/devocionario/temporas/epifania" },
    {
      title: "Novena dos Reis Magos",
      href: "/devocionario/temporas/reis-magos",
    },
  ],
  Advent: [
    { title: "Coroa do Advento", href: "/devocionario/temporas/coroa-advento" },
    { title: "Novena de Natal", href: "/devocionario/temporas/novena-natal" },
  ],
  Septuagesima: [
    {
      title: "Preparação para Quaresma",
      href: "/devocionario/temporas/pre-quaresma",
    },
  ],
  Lent: [
    { title: "Via Sacra", href: "/devocionario/viasacra" },
    { title: "Jejum e Abstinência", href: "/devocionario/temporas/jejum" },
    {
      title: "Meditações Quaresmais",
      href: "/devocionario/temporas/meditacoes-quaresma",
    },
  ],
  Passiontide: [
    { title: "Via Sacra", href: "/devocionario/viasacra" },
    { title: "Jejum e Abstinência", href: "/devocionario/temporas/jejum" },
    {
      title: "Meditações Quaresmais",
      href: "/devocionario/temporas/meditacoes-quaresma",
    },
  ],
  Easter: [
    { title: "Regina Coeli", href: "/devocionario/temporas/regina-coeli" },
    {
      title: "Novena do Divino Espírito Santo",
      href: "/devocionario/temporas/novena-espirito-santo",
    },
  ],
  Christmas: [
    { title: "Novena de Natal", href: "/devocionario/temporas/novena-natal" },
    {
      title: "Orações ao Menino Jesus",
      href: "/devocionario/temporas/menino-jesus",
    },
  ],
  Pentecost: [
    {
      title: "Novena do Espírito Santo",
      href: "/devocionario/temporas/novena-espirito-santo",
    },
    {
      title: "Veni Creator Spiritus",
      href: "/devocionario/temporas/veni-creator",
    },
  ],
  "Time after Pentecost": [
    {
      title: "Novena do Espírito Santo",
      href: "/devocionario/temporas/novena-espirito-santo",
    },
    {
      title: "Veni Creator Spiritus",
      href: "/devocionario/temporas/veni-creator",
    },
  ],
};

// Icons for each liturgical season
const CATEGORY_ICONS: Record<Season, string> = {
  Epiphany: "star-of-david",
  Advent: "calendar-day",
  Septuagesima: "seedling",
  Lent: "cross",
  Passiontide: "cross",
  Easter: "dove",
  Christmas: "baby",
  Pentecost: "fire-flame-curved",
  "Time after Pentecost": "praying-hands",
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
    <View className="my-4">
      <View className="flex-row items-center mb-2">
        <FontAwesome6
          name={CATEGORY_ICONS[season] || "church"}
          size={18}
          color={iconColor}
        />
        <Text className={`font-bold ${textColor} text-left pl-3 text-lg`}>
          Orações do Tempo Litúrgico
        </Text>
      </View>

      <View className="space-y-2">
        {prayers.map((prayer, index) => (
          <Link key={index} href={prayer.href} asChild>
            <View className="bg-sepia-100 dark:bg-sepia-700 rounded-lg p-4 border border-sepia-300 dark:border-sepia-600 active:bg-sepia-200 active:dark:bg-sepia-600">
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
