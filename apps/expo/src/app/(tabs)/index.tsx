import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { format } from "date-fns";
import { pt } from "date-fns/locale";
import { Link } from "expo-router";
import { ScrollView, Text, useColorScheme, View } from "react-native";
import { burgundy } from "tailwind.config";
import ExternalLinks from "~/components/External";
import { H1 } from "~/components/Headings";

import LinkCard from "~/components/LinkCard";
import LiturgicalSeason from "~/components/LiturgicalSeason";
import Novenas from "~/components/Novenas";
import Office from "~/components/Office";
import PageWrapper from "~/components/Page";
import { COLORS } from "~/constants/Colors";
import { useCalendar } from "~/providers/calendar";

export default function PageRender() {
  const { day, date } = useCalendar();

  const colorScheme = useColorScheme();

  function getPrayer(date: Date) {
    const hour = date.getHours();
    const isMorning = hour >= 5 && hour < 10;
    const isNight = hour >= 20 || (hour >= 0 && hour <= 3);
    const isAngelus = hour === 6 || hour === 12 || hour === 18;

    return { isMorning, isNight, isAngelus };
  }

  const currentPrayer = getPrayer(date);

  return (
    <ScrollView>
      <View className="bg-sepia-700">
        <Text className="font-serif text-sm p-3 text-center text-sepia-300">
          Em Portugal se conservará sempre o dogma da fé - Nossa Senhora de
          Fátima
        </Text>
      </View>

      <View className="flex flex-col items-center mt-20 justify-center gap-5">
        <FontAwesome6
          name="book-bible"
          size={180}
          color={burgundy[500]}
        />
        <H1 text="Tesouro dos Fiéis" />
        <Text className="font-serif text-sm text-center mx-8 text-sepia-800 dark:text-sepia-200">
          Espaço dedicado à oração, exposição e preservação das santas tradições
          da Igreja.
        </Text>
      </View>

      <PageWrapper>
        <View className="flex flex-row justify-center my-5 mx-5 gap-5">
          <Link
            className="shadow-sm border-sepia-700 dark:border-sepia-200 bg-sepia-100 dark:bg-sepia-800 active:bg-sepia-200 dark:active:bg-sepia-700 m-2 rounded-xl border px-4 py-3"
            href="/devocionario/introducao"
          >
            <Text className="text-pretty text-sepia-800 dark:text-sepia-200 text-center">
              Introdução
            </Text>
          </Link>

          <Link
            href="/devocionario/rosario"
            className="shadow-sm border-sepia-700 dark:border-sepia-300 bg-sepia-800 dark:bg-sepia-200 active:bg-sepia-700 dark:active:bg-sepia-300 m-2 rounded-xl border px-4 py-3"
          >
            <Text className="text-pretty text-sepia-200 dark:text-sepia-900 text-center">
              Rosário
            </Text>
          </Link>
        </View>

        <View className="border-t border-sepia mt-2" />
        <View className="px-5">
          <View className="flex-row items-center">
            <FontAwesome6
              name="calendar"
              size={15}
              color={colorScheme === "light" ? COLORS["900"] : COLORS["200"]}
            />
            <Text className="font-bold dark:text-sepia-200 text-left p-3 text-lg text-bold">
              {format(date, "EEEE, dd MMMM", {
                locale: pt,
              })}
            </Text>
          </View>

          {day.mass?.map((item) => (
            <LinkCard key={item.id} mass={item} />
          ))}
        </View>

        <View className="border-t border-sepia mt-2" />

        <View className="px-5">
          <View className="flex-row items-center">
            <FontAwesome6
              name="clock"
              size={15}
              color={colorScheme === "light" ? COLORS["900"] : COLORS["200"]}
            />
            <Text className="font-bold dark:text-sepia-200 text-left p-3 text-lg text-bold">
              {format(date, "HH:mm", {
                locale: pt,
              }).toUpperCase()}
            </Text>
          </View>

          {currentPrayer.isAngelus && (
            <LinkCard
              oratio={{ link: "/devocionario/dia/angelus", name: "Angelus" }}
              description="Hora do Angelus"
            />
          )}

          {currentPrayer.isMorning && (
            <LinkCard
              oratio={{
                link: "/devocionario/dia/oracaomanha",
                name: "Oração da Manhã",
              }}
              description="Orações do dia"
            />
          )}

          {currentPrayer.isNight && (
            <LinkCard
              oratio={{
                link: "/devocionario/dia/oracaonoite",
                name: "Oração da Noite",
              }}
              description="Orações do dia"
            />
          )}

          <Office />
          <Novenas />
        </View>

        <View className="border-t border-sepia mt-2" />

        <LiturgicalSeason />

        <ExternalLinks />
      </PageWrapper>
    </ScrollView>
  );
}
