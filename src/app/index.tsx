import { BookPlus } from "lucide-react-native";
import { burgundy } from "config";
import { format, getYear, isWithinInterval } from "date-fns";
import { pt } from "date-fns/locale";
import {
  Platform,
  Pressable,
  ScrollView,
  useColorScheme,
  useWindowDimensions,
  View,
} from "react-native";
import ExternalLinks from "~/components/External";
import { DatePicker } from "~/components/DatePicker";
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
  const { day, date, season, setDate, resetToToday, isCustomDate } = useCalendar();
  const colorScheme = useColorScheme();
  const todaysIndulgences = useTodaysIndulgences();

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

        <View
          className={`flex-1 ${!isWebDesktop ? "" : "web:mx-auto"} py-5 p-3 rounded-lg`}
          style={{
            borderWidth: 1,
            borderColor: colorScheme === "light" ? COLORS["200"] : COLORS["800"],
            backgroundColor: colorScheme === "light" ? COLORS["50"] : COLORS["900"],
          }}
        >
          {/* Liturgical day header — missal style: rules framing pure typography */}
          <View
            style={{
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderColor: colorScheme === "light" ? COLORS["300"] : COLORS["600"],
              paddingTop: 16,
              paddingBottom: 18,
              paddingHorizontal: 20,
              marginBottom: 4,
            }}
          >
            {/* Feria label — tracked small-caps, burgundy */}
            <Typography
              className="uppercase text-burgundy-500 dark:text-burgundy-400"
              style={{ fontSize: 10, letterSpacing: 4, marginBottom: 6 }}
            >
              {format(date, "EEEE", { locale: pt })}
            </Typography>

            {/* The date itself — tappable, large display serif */}
            <DatePicker date={date} onDateChange={setDate}>
              <Typography
                className={`font-display leading-none ${
                  isCustomDate
                    ? "text-burgundy-600 dark:text-burgundy-400"
                    : "text-sepia-800 dark:text-sepia-100"
                }`}
                style={{
                  fontSize: 38,
                  marginBottom: 10,
                  textDecorationLine: "underline",
                  textDecorationStyle: "solid",
                  textDecorationColor:
                    colorScheme === "light"
                      ? isCustomDate
                        ? burgundy[600]
                        : COLORS["800"]
                      : isCustomDate
                        ? burgundy[400]
                        : COLORS["100"],
                }}
              >
                {format(date, "d 'de' MMMM", { locale: pt })}
              </Typography>
            </DatePicker>

            {/* Season — italic, like a liturgical subtitle */}
            <Typography
              className="font-italic text-sepia-500 dark:text-sepia-400"
              style={{ fontSize: 13 }}
            >
              {season}
            </Typography>

            {/* Rubric: when on custom date, a small italic note to return */}
            {isCustomDate && (
              <Pressable onPress={resetToToday} accessibilityLabel="Voltar a hoje">
                <Typography
                  className="font-italic text-burgundy-500 dark:text-burgundy-400"
                  style={{ fontSize: 11, marginTop: 6 }}
                >
                  † voltar ao dia de hoje
                </Typography>
              </Pressable>
            )}
          </View>

          {/* Mass cards — sit directly below the day header, inside the animated container */}
          <View className="px-5 pt-2 pb-4">
            {day.mass?.map((item) => (
              <LinkCard key={item.id} mass={item} />
            ))}
            {day.alternatives?.map((item) => (
              <LinkCard key={item.id} mass={item} />
            ))}
          </View>

          <View
            style={{
              height: 1,
              backgroundColor: colorScheme === "light" ? COLORS["300"] : COLORS["600"],
              marginHorizontal: 20,
            }}
          />

          <View className="px-5 flex flex-col pt-5 pb-4">
            <Typography
              className="uppercase text-burgundy-500 dark:text-burgundy-400 mb-3"
              style={{ fontSize: 11, letterSpacing: 3 }}
            >
              {format(date, "HH:mm", { locale: pt })} · Orações
            </Typography>

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

          <View
            style={{
              height: 1,
              backgroundColor: colorScheme === "light" ? COLORS["300"] : COLORS["600"],
              marginHorizontal: 20,
            }}
          />

          <View className="pb-3">
            <LiturgicalSeason />
          </View>

          <View
            style={{
              height: 1,
              backgroundColor: colorScheme === "light" ? COLORS["300"] : COLORS["600"],
              marginHorizontal: 20,
            }}
          />

          <ExternalLinks />
        </View>
      </View>
    </ScrollView>
  );
}
