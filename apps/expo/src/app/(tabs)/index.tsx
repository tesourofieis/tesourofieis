import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { format } from "date-fns";
import { pt } from "date-fns/locale";
import { Link } from "expo-router";
import { useColorScheme } from "nativewind";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

import Calendar from "~/components/Calendar";
import LinkCard from "~/components/LinkCard";
import Not from "~/components/Notifications";
import Novenas from "~/components/Novenas";
import Office from "~/components/Office";
import { COLORS } from "~/constants/Colors";

export default function Render() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const { colorScheme } = useColorScheme();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000); // Update every minute (60000 milliseconds)

    return () => clearInterval(timer); // Clean up the timer on component unmount
  }, []);

  function getPrayer(date: Date) {
    const hour = date.getHours();
    const isMorning = hour >= 5 && hour < 10;
    const isNight = hour >= 20 || (hour >= 0 && hour <= 3);
    const isAngelus = hour === 6 || hour === 12 || hour === 18;

    return { isMorning, isNight, isAngelus };
  }

  const currentPrayer = getPrayer(currentDate);

  return (
    <ScrollView>
      <View className="font-serif">
        <View className="bg-sepia-300 dark:bg-sepia-700">
          <Text className="font-serif text-sm p-3 text-center text-sepia-700 dark:text-sepia-300">
            Em Portugal se conservará sempre o dogma da fé - Nossa Senhora de
            Fátima
          </Text>
        </View>

        <View className="flex flex-col items-center mt-20 justify-center gap-5">
          {/* @ts-ignore */}
          <FontAwesome6 name="book-bible" size={180} color="#e53935" />
          <Text className="font-display text-3xl text-red-600 m-3">
            Tesouro dos Fiéis
          </Text>
          <Text className="font-serif text-sm text-center mx-8 text-sepia-800 dark:text-sepia-200">
            Espaço dedicado à oração, exposição e preservação das santas
            tradições da Igreja.
          </Text>
        </View>

        <View className="flex flex-row justify-center my-5 mx-5 gap-5">
          <Text className="font-black bg-sepia-900 text-sepia-200 dark:bg-sepia-200 dark:text-sepia-900 m-2 rounded-lg px-4 py-2 text-center">
            <Link
              href={{
                pathname: "/modal",
                params: { url: "devocionario/rosario" },
              }}
            >
              Rosário{" "}
              <FontAwesome6
                name="arrow-right"
                color={colorScheme === "light" ? COLORS["200"] : COLORS["900"]}
              />
            </Link>
          </Text>

          <Text className="font-black border-sepia-900 text-sepia-800 dark:border-sepia-200 dark:text-sepia-200 m-2 rounded-lg border px-4 py-2 text-center">
            <Link
              href={{
                pathname: "/modal",
                params: { url: "devocionario/oracoes/coroasaomiguel" },
              }}
            >
              Coroa de São Miguel{" "}
              <FontAwesome6
                name="arrow-right"
                color={colorScheme === "light" ? COLORS["900"] : COLORS["200"]}
              />
            </Link>
          </Text>
        </View>

        <View className="border-t border-sepia-300 dark:border-sepia-700 mb-2" />

        <View className="px-5">
          <View className="flex-row items-center">
            <FontAwesome6
              name="calendar"
              size={15}
              color={colorScheme === "light" ? COLORS["900"] : COLORS["200"]}
            />
            <Text className="font-black dark:text-sepia-200 text-left p-3 text-xl text-bold">
              Hoje
            </Text>
          </View>
          <Text className="font-serif text-sepia-600 dark:text-sepia-400 text-sm pb-3">
            {format(currentDate, "EEEE, dd MMMM", {
              locale: pt,
            })}
          </Text>

          <Calendar />

          <View className="flex-1 items-center justify-center p-2">
            <Text className="text-sepia-600 dark:text-sepia-400 text-sm font-bold">
              {format(currentDate, "HH:mm", {
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

        <View className="border-t border-sepia-300 dark:border-sepia-700 mt-3" />

        <Not />
      </View>
    </ScrollView>
  );
}
