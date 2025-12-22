import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { burgundy } from "config";
import { format, getYear, isWithinInterval } from "date-fns";
import { pt } from "date-fns/locale";
import { useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import {
  Animated,
  Pressable,
  ScrollView,
  useColorScheme,
  View,
} from "react-native";
import ExternalLinks from "~/components/External";
import { H1 } from "~/components/Headings";
import LinkCard from "~/components/LinkCard";
import LiturgicalSeason from "~/components/LiturgicalSeason";
import Novenas from "~/components/Novenas";
import Office from "~/components/Office";
import { Typography } from "~/components/typography";
import { COLORS } from "~/constants/Colors";
import { useCalendar } from "~/providers/calendar";

export default function PageRender() {
  const { day, date } = useCalendar();
  const router = useRouter();
  const colorScheme = useColorScheme();
  const pulseAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 5000,
          useNativeDriver: false,
        }),
        Animated.timing(pulseAnim, {
          toValue: 0,
          duration: 5000,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  }, []);

  const bgColor = pulseAnim.interpolate({
    inputRange: [0, 1],
    outputRange:
      colorScheme === "light"
        ? [COLORS["100"], COLORS["200"]]
        : [COLORS["900"], COLORS["700"]],
  });

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
      <View className="extreme-background">
        <View className="soft-background">
          <Typography className="font-serif text-sm p-3 text-center text-sepia">
            Em Portugal se conservará sempre o dogma da fé - Nossa Senhora de
            Fátima
          </Typography>
        </View>

        <View className="flex flex-col items-center mt-20 justify-center gap-5">
          <FontAwesome6 name="book-bible" size={150} color={burgundy[500]} />
          <H1 text="Tesouro dos Fiéis" />
          <Typography className="font-serif text-sm text-center mx-8 text-sepia-800 dark:text-sepia-200">
            Espaço dedicado à oração, exposição e preservação das santas
            tradições da Igreja.
          </Typography>
        </View>

        <View className="flex flex-row justify-center my-5 mx-5 gap-5">
          <Pressable
            className="shadow-sm bg-sepia-100 dark:bg-sepia-800 active:bg-sepia-200 dark:active:bg-sepia-700 m-2 rounded-xl px-4 py-3"
            onPress={() => router.navigate("/devocionario/introducao")}
          >
            <Typography className="text-pretty text-sepia-800 dark:text-sepia-200 text-center">
              Introdução
            </Typography>
          </Pressable>

          <Pressable
            className="shadow-sm bg-sepia-800 dark:bg-sepia-200 active:bg-sepia-700 dark:active:bg-sepia-300 m-2 rounded-xl px-4 py-3"
            onPress={() => router.navigate("/devocionario/rosario")}
          >
            <Typography className="text-pretty text-sepia-invert text-center">
              Rosário
            </Typography>
          </Pressable>
        </View>

        <Animated.View
          className="flex-1 web:w-6/12 web:mx-auto p-3 rounded-lg"
          style={{
            borderWidth: 1,
            borderColor:
              colorScheme === "light" ? COLORS["200"] : COLORS["800"],
            backgroundColor: bgColor,
          }}
        >
          <View className="px-5 flex flex-col pb-3">
            <View className="flex-row items-center">
              <FontAwesome6
                name="calendar"
                size={15}
                color={colorScheme === "light" ? COLORS["900"] : COLORS["200"]}
              />
              <Typography className="font-bold dark:text-sepia-200 text-left p-3 text-lg text-bold">
                {format(date, "EEEE, dd MMMM", {
                  locale: pt,
                })}
              </Typography>
            </View>

            {day.mass?.map((item) => (
              <LinkCard key={item.id} mass={item} />
            ))}
          </View>

          <View className="px-5 flex flex-col pb-3">
            <View className="flex-row items-center">
              <FontAwesome6
                name="clock"
                size={15}
                color={colorScheme === "light" ? COLORS["900"] : COLORS["200"]}
              />
              <Typography className="font-bold dark:text-sepia-200 text-left p-3 text-lg text-bold">
                {format(date, "HH:mm", {
                  locale: pt,
                }).toUpperCase()}
              </Typography>
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

            {isWithinInterval(date, {
              start: new Date(getYear(date), 11, 17),
              end: new Date(getYear(date), 11, 23),
            }) && (
              <LinkCard
                href="/devocionario/oracoes/antifonasdoo"
                title="Nossa Senhora do Ó"
                description="Antifonas"
              />
            )}
          </View>

          <View className="pb-3">
            <LiturgicalSeason />
          </View>

          <ExternalLinks />
        </Animated.View>
      </View>
    </ScrollView>
  );
}
