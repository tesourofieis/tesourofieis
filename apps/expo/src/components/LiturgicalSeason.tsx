import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import type { LiturgicalSeason as Season } from "@tesourofieis/cal/calendar";
import { Link } from "expo-router";
import React from "react";
import { Pressable, Text, View, useColorScheme } from "react-native";
import { COLORS } from "~/constants/Colors";
import { useCalendar } from "~/providers/calendar";
import { cardBase } from "./LinkCard";

type Prayer = {
  title: string;
  href: string;
  description?: string;
};

const TEMPORAS_PRAYERS: Record<Season, Prayer[]> = {
  Advento: [
    {
      title: "Rorate Caeli",
      href: "/canticos/sacros/roratecaeli",
      description: "Hino de invocação ao Messias",
    },
    {
      title: "Alma Redemptoris Mater",
      href: "/devocionario/antifonas/almaredemptorismater",
      description: "Antífona Mariana",
    },
    {
      title: "O Antífonas",
      href: "/devocionario/oracoes/antifonasdoo",
      description: "Antífonas do Advento",
    },
    {
      title: "Ave Maris Stella",
      href: "/canticos/sacros/avemarisstella",
      description: "Hino mariano",
    },
    {
      title: "Benedictus",
      href: "/canticos/sacros/benedictus",
      description: "Cântico de Zacarias",
    },
    {
      title: "Ladainha de Loreto",
      href: "/devocionario/ladainhas/loreto",
      description: "Invocação à Virgem Maria",
    },
    {
      title: "Ave Maria",
      href: "/devocionario/oracoes/avemaria",
      description: "Oração mariana",
    },
  ],
  Natal: [
    {
      title: "Alma Redemptoris Mater",
      href: "/devocionario/antifonas/almaredemptorismater",
      description: "Antífona Mariana",
    },
    {
      title: "Adeste Fideles",
      href: "/canticos/sacros/adestefideles",
      description: "Hino de Natal",
    },
    {
      title: "Puer Natus Est",
      href: "/missal/santos/12-25-1",
      description: "Introito da Missa do Natal",
    },
    {
      title: "Magnificat",
      href: "/canticos/sacros/magnificat",
      description: "Cântico de Maria",
    },
    {
      title: "O Gloriosa Virginum",
      href: "/canticos/sacros/ogloriosavirginum",
      description: "Hino mariano",
    },
    {
      title: "Ladainha de São José",
      href: "/devocionario/ladainhas/jose",
      description: "Invocação ao padroeiro da Igreja",
    },
    {
      title: "Oração a São José",
      href: "/devocionario/oracoes/jose",
      description: "Invocação a São José",
    },
  ],
  Epifania: [
    {
      title: "Ecce Advenit",
      href: "/devocionario/cantos/ecceadvenit",
      description: "Introito da Missa da Epifania",
    },
    {
      title: "Alma Redemptoris Mater",
      href: "/devocionario/antifonas/almaredemptorismater",
      description: "Antífona Mariana",
    },
    {
      title: "Nunc Dimittis",
      href: "/canticos/sacros/nuncdimittis",
      description: "Cântico de Simeão",
    },
    {
      title: "Quem Terra, Pontus, Aethera",
      href: "/canticos/sacros/quemterra",
      description: "Hino mariano",
    },
    {
      title: "Ladainha do Nome de Jesus",
      href: "/devocionario/ladainhas/nomejesus",
      description: "Invocação ao Nome de Jesus",
    },
    {
      title: "Conversão dos Infiéis",
      href: "/devocionario/oracoes/conversaoinfieis",
      description: "Oração missionária",
    },
  ],
  Septuagésima: [
    {
      title: "Ave Regina Caelorum",
      href: "/devocionario/antifonas/avereginacaelorum",
      description: "Antífona Mariana",
    },
    {
      title: "Circumdederunt Me",
      href: "/devocionario/cantos/circumdederuntme",
      description: "Introito penitencial",
    },
    {
      title: "Miserere (Salmo 50)",
      href: "/devocionario/salmos/miserere",
      description: "Salmo penitencial",
    },
    {
      title: "Parce Domine",
      href: "/canticos/sacros/parcedomine",
      description: "Hino penitencial",
    },
    {
      title: "Acto de Contrição",
      href: "/devocionario/oracoes/actocontricao",
      description: "Oração penitencial",
    },
    {
      title: "Concede Mihi",
      href: "/devocionario/oracoes/concedemihi",
      description: "Oração pela pureza",
    },
  ],
  Quaresma: [
    {
      title: "Via Sacra",
      href: "/devocionario/viasacra",
      description: "Meditação da Paixão",
    },
    {
      title: "Stabat Mater",
      href: "/missal/santos/09-15/#sequência",
      description: "Hino à Virgem Dolorosa",
    },
    {
      title: "Attende Domine",
      href: "/canticos/sacros/attendedomine",
      description: "Hino penitencial",
    },
    {
      title: "Parce Domine",
      href: "/canticos/sacros/parcedomine",
      description: "Hino penitencial",
    },
    {
      title: "Ladainha do Preciosíssimo Sangue",
      href: "/devocionario/ladainhas/sanguejesus",
      description: "Invocação ao Sangue de Cristo",
    },
    {
      title: "Acto de Reparação",
      href: "/devocionario/oracoes/actoreparacao",
      description: "Oração eucarística",
    },
    {
      title: "Confesso",
      href: "/devocionario/oracoes/confesso",
      description: "Ato penitencial",
    },
  ],
  Paixão: [
    {
      title: "Via Sacra",
      href: "/devocionario/viasacra",
      description: "Meditação da Paixão",
    },
    {
      title: "Vexilla Regis",
      href: "/canticos/sacros/vexillaregis",
      description: "Hino da Cruz",
    },
    {
      title: "Crux Fidelis",
      href: "/missal/quaresma/quad6-5#veníte-adorémus",
      description: "Hino da Sexta-feira Santa",
    },
    {
      title: "Pange Lingua",
      href: "/canticos/sacros/pangelingua",
      description: "Hino eucarístico",
    },
    {
      title: "Tantum Ergo",
      href: "/canticos/sacros/tantumergo",
      description: "Hino eucarístico",
    },
    {
      title: "Ladainha do Preciosíssimo Sangue",
      href: "/devocionario/ladainhas/sanguejesus",
      description: "Invocação ao Sangue de Cristo",
    },
    {
      title: "Senhor dos Passos",
      href: "/devocionario/oracoes/senhorpassos",
      description: "Devoção da Paixão",
    },
  ],
  Páscoa: [
    {
      title: "Regina Coeli",
      href: "/devocionario/antifonas/reginacaeli",
      description: "Antífona Mariana",
    },
    {
      title: "Adoro Te Devote",
      href: "/canticos/sacros/adorote",
      description: "Hino eucarístico",
    },
    {
      title: "O Salutaris Hostia",
      href: "/canticos/sacros/salutaris",
      description: "Hino eucarístico",
    },
    {
      title: "Jesus Misericordioso",
      href: "/devocionario/oracoes/jesusmisericordioso",
      description: "Devoção à Misericórdia",
    },
    {
      title: "Alma de Cristo",
      href: "/devocionario/oracoes/almacristo",
      description: "Oração eucarística",
    },
  ],
  Pentecostes: [
    {
      title: "Veni Creator Spiritus",
      href: "/canticos/sacros/venicreator",
      description: "Hino ao Espírito Santo",
    },
    {
      title: "Veni Sancte Spiritus",
      href: "/devocionario/sequencias/venisanctespiritus",
      description: "Sequência de Pentecostes",
    },
    {
      title: "Regina Coeli",
      href: "/devocionario/antifonas/reginacaeli",
      description: "Antífona Mariana",
    },
    {
      title: "Te Deum",
      href: "/canticos/sacros/tedeum",
      description: "Hino de louvor",
    },
    {
      title: "Oração ao Espírito Santo",
      href: "/devocionario/oracoes/espiritosanto",
      description: "Invocação ao Espírito Santo",
    },
  ],
  "Tempo depois Pentecostes": [
    {
      title: "Salve Regina",
      href: "/devocionario/antifonas/salveregina",
      description: "Antífona Mariana",
    },
    {
      title: "Te Deum",
      href: "/canticos/sacros/tedeum",
      description: "Hino de louvor",
    },
    {
      title: "Magnificat",
      href: "/canticos/sacros/magnificat",
      description: "Cântico de Maria",
    },
    {
      title: "Ave Verum Corpus",
      href: "/canticos/sacros/aveverum",
      description: "Hino eucarístico",
    },
    {
      title: "Ecce Panis Angelorum",
      href: "/canticos/sacros/eccepanisangelorum",
      description: "Hino eucarístico",
    },
    {
      title: "Te Lucis Ante Terminum",
      href: "/canticos/sacros/telucis",
      description: "Hino vespertino",
    },
    {
      title: "Ladainha do Sagrado Coração",
      href: "/devocionario/ladainhas/coracaojesus",
      description: "Invocação ao Coração de Jesus",
    },
    {
      title: "Ladainha de Todos os Santos",
      href: "/devocionario/ladainhas/santos",
      description: "Invocação aos santos",
    },
    {
      title: "Coroa de São Miguel",
      href: "/devocionario/oracoes/coroasaomiguel",
      description: "Devoção angélica",
    },
    {
      title: "Exercício pelas Almas",
      href: "/devocionario/oracoes/exercitoalmas",
      description: "Oração pelas almas",
    },
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
    <View className="m-5 border p-3 bg-sepia-200 dark:bg-gray-800 rounded-lg border-sepia-500">
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

      {prayers.map((prayer) => (
        // @ts-ignore
        <Link key={prayer.href} href={prayer.href} asChild>
          {/* @ts-ignore */}
          <Pressable className={cardBase}>
            {({ pressed }) => (
              <View className={cardBase(pressed)}>
                <Text className={`font-bold ${textColor}`}>{prayer.title}</Text>
                {prayer.description && (
                  <Text className="text-sepia-600 dark:text-sepia-400 text-sm mt-1">
                    {prayer.description}
                  </Text>
                )}
              </View>
            )}
          </Pressable>
        </Link>
      ))}
    </View>
  );
}
