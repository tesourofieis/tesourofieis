import { BookPlus, Calendar, Clock } from "lucide-react-native";
import { burgundy } from "config";
import { format, getYear, isWithinInterval } from "date-fns";
import { pt } from "date-fns/locale";
import { useEffect, useRef } from "react";
import {
  Animated,
  Platform,
  ScrollView,
  useColorScheme,
  useWindowDimensions,
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
import { useTodaysIndulgences } from "~/hooks/useTodaysIndulgences";

export default function PageRender() {
  const { day, date } = useCalendar();
  const colorScheme = useColorScheme();
  const pulseAnim = useRef(new Animated.Value(0)).current;
  const todaysIndulgences = useTodaysIndulgences();

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
      colorScheme === "light" ? [COLORS["100"], COLORS["200"]] : [COLORS["900"], COLORS["700"]],
  });

  function getPrayer(date: Date) {
    const hour = date.getHours();
    const isMorning = hour >= 5 && hour < 10;
    const isNight = hour >= 20 || (hour >= 0 && hour <= 3);
    const isAngelus = hour === 6 || hour === 12 || hour === 18;

    return { isMorning, isNight, isAngelus };
  }

  const currentPrayer = getPrayer(date);

  const isWeb = Platform.OS === "web";
  const { width } = useWindowDimensions();
  const isWebDesktop = isWeb && width >= 768;

  return (
    <ScrollView>
      <View className="extreme-background">
        <View className="flex flex-row items-center gap-3 p-1 justify-center">
          <BookPlus strokeWidth={2} size={25} color={burgundy[500]} />
          <H1 text="Tesouro dos Fiéis" />
        </View>

        <Animated.View
          className={`flex-1 ${!isWebDesktop ? "" : "web:mx-auto"} py-5 p-3 rounded-lg`}
          style={{
            borderWidth: 1,
            borderColor: colorScheme === "light" ? COLORS["200"] : COLORS["800"],
            backgroundColor: bgColor,
          }}
        >
          <View className="px-5 flex flex-col pb-3">
            <View className="flex-row items-center">
              <Calendar size={15} color={colorScheme === "light" ? COLORS["900"] : COLORS["200"]} />
              <Typography className="bold dark:text-sepia-200 text-left p-3 text-lg text-bold">
                {format(date, "EEEE, dd MMMM", {
                  locale: pt,
                })}
              </Typography>
            </View>

            {day.mass?.map((item) => (
              <LinkCard key={item.id} mass={item} />
            ))}
            {day.alternatives?.map((item) => (
              <LinkCard key={item.id} mass={item} />
            ))}
          </View>

          <View className="px-5 flex flex-col pb-3">
            <View className="flex-row items-center">
              <Clock size={15} color={colorScheme === "light" ? COLORS["900"] : COLORS["200"]} />
              <Typography className="bold dark:text-sepia-200 text-left p-3 text-lg text-bold">
                {format(date, "HH:mm", {
                  locale: pt,
                }).toUpperCase()}
              </Typography>
            </View>

            <LinkCard
              oratio={{
                link: "/devocionario/rosario",
                name: "Rosário",
              }}
              description="Orações do dia"
            />

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

            {todaysIndulgences.map((indulgence, index) => (
              <LinkCard
                key={`indulgence-${index}`}
                indulgence={{
                  prayer: indulgence.prayer,
                  body: indulgence.body,
                  link: indulgence.link,
                }}
                description="Indulgência Plenária"
              />
            ))}

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
