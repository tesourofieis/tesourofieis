import { BookPlus, ChevronLeft, ChevronRight } from "lucide-react-native";
import { burgundy } from "config";
import { addDays, format, getYear, isWithinInterval } from "date-fns";
import { pt } from "date-fns/locale";
import { Pressable, ScrollView, useWindowDimensions, View } from "react-native";
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
import { useAppTheme } from "~/theme";

export default function PageRender() {
  const { day, date, season, setDate, resetToToday, isCustomDate } = useCalendar();
  const { isDark, colors } = useAppTheme();
  const todaysIndulgences = useTodaysIndulgences();

  function getPrayer(date: Date) {
    const hour = date.getHours();
    const isMorning = hour >= 5 && hour < 10;
    const isNight = hour >= 20 || (hour >= 0 && hour <= 3);
    const isAngelus = hour === 6 || hour === 12 || hour === 18;

    return { isMorning, isNight, isAngelus };
  }

  const currentPrayer = getPrayer(date);

  const { width } = useWindowDimensions();
  const isCompactLayout = width < 420;
  const sectionInset = isCompactLayout ? 20 : 20;
  const headerPaddingTop = isCompactLayout ? 6 : 8;
  const headerPaddingBottom = isCompactLayout ? 8 : 10;
  const feriaFontSize = isCompactLayout ? 9 : 10;
  const feriaLetterSpacing = isCompactLayout ? 3.2 : 4;
  const dateFontSize = isCompactLayout ? 28 : 34;
  const seasonFontSize = isCompactLayout ? 12 : 13;
  const dateTextColor = isCustomDate
    ? isDark
      ? burgundy[400]
      : burgundy[600]
    : isDark
      ? colors.textPrimary
      : colors.textSecondary;
  const chevronColor = isDark ? colors.textMuted : COLORS["500"];
  const feriaTextColor = isDark ? burgundy[400] : burgundy[500];
  const seasonTextColor = isDark ? colors.textMuted : COLORS["500"];
  const sectionLabelColor = isDark ? burgundy[400] : burgundy[500];

  const stepDay = (delta: number) => () => setDate(addDays(date, delta));

  const prayerItems: Array<{
    key: string;
    href: string;
    title: string;
    description: string;
  }> = [
    {
      key: "rosario",
      href: "/devocionario/rosario",
      title: "Rosário",
      description: "Orações do dia",
    },
  ];
  if (currentPrayer.isAngelus) {
    prayerItems.push({
      key: "angelus",
      href: "/devocionario/dia/angelus",
      title: "Angelus",
      description: "Hora do Angelus",
    });
  }
  if (currentPrayer.isMorning) {
    prayerItems.push({
      key: "oracaomanha",
      href: "/devocionario/dia/oracaomanha",
      title: "Oração da Manhã",
      description: "Orações do dia",
    });
  }
  if (currentPrayer.isNight) {
    prayerItems.push({
      key: "oracaonoite",
      href: "/devocionario/dia/oracaonoite",
      title: "Oração da Noite",
      description: "Orações do dia",
    });
  }

  return (
    <ScrollView>
      <View className="extreme-background">
        <View className="flex flex-row items-center gap-3 p-1 justify-center">
          <BookPlus strokeWidth={2} size={25} color={burgundy[500]} />
          <H1 text="Tesouro dos Fiéis" />
        </View>

        <View
          className="flex-1 web:max-w-5xl web:mx-auto py-5 p-3 rounded-lg"
          style={{
            borderWidth: 1,
            borderColor: isDark ? COLORS["800"] : COLORS["200"],
            backgroundColor: colors.screen,
          }}
        >
          {/* Liturgical day header — missal style: rules framing pure typography */}
          <View
            style={{
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderColor: colors.divider,
              paddingTop: headerPaddingTop,
              paddingBottom: headerPaddingBottom,
              paddingHorizontal: sectionInset,
              marginBottom: 4,
            }}
          >
            {/* Feria label — tracked small-caps, burgundy */}
            <Typography
              className="font-reading"
              style={{
                fontSize: feriaFontSize,
                letterSpacing: feriaLetterSpacing,
                color: feriaTextColor,
                marginBottom: 6,
              }}
            >
              {format(date, "EEEE", { locale: pt }).toUpperCase()}
            </Typography>

            {/* Date stepper — circular targets flank a tappable date, so the three elements read as one control */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                columnGap: 6,
                alignSelf: "flex-start",
                marginBottom: 6,
              }}
            >
              <Pressable
                onPress={stepDay(-1)}
                hitSlop={6}
                accessibilityRole="button"
                accessibilityLabel="Dia anterior"
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 17,
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 1,
                  borderColor: colors.divider,
                }}
              >
                <ChevronLeft size={18} color={chevronColor} strokeWidth={1.7} />
              </Pressable>

              <DatePicker date={date} onDateChange={setDate}>
                <Typography
                  className={`font-display leading-none ${
                    isCustomDate
                      ? "text-burgundy-600 dark:text-burgundy-400"
                      : "text-sepia-800 dark:text-sepia-100"
                  }`}
                  style={{
                    fontSize: dateFontSize,
                    color: dateTextColor,
                    paddingHorizontal: 10,
                    paddingVertical: 2,
                  }}
                >
                  {format(date, "d 'de' MMMM", { locale: pt })}
                </Typography>
              </DatePicker>

              <Pressable
                onPress={stepDay(1)}
                hitSlop={6}
                accessibilityRole="button"
                accessibilityLabel="Dia seguinte"
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 17,
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 1,
                  borderColor: colors.divider,
                }}
              >
                <ChevronRight size={18} color={chevronColor} strokeWidth={1.7} />
              </Pressable>
            </View>

            {/* Season — italic, like a liturgical subtitle */}
            <Typography
              className="font-display-italic"
              style={{
                fontSize: seasonFontSize,
                color: seasonTextColor,
              }}
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
          <View className="pt-2 pb-4 gap-3" style={{ paddingHorizontal: sectionInset }}>
            {day.mass?.map((item) => (
              <LinkCard key={item.id} mass={item} variant="featured" />
            ))}
            {day.alternatives?.map((item) => (
              <LinkCard key={item.id} mass={item} variant="featured" />
            ))}
          </View>

          <View
            style={{
              height: 1,
              backgroundColor: colors.divider,
              marginHorizontal: sectionInset,
            }}
          />

          <View className="flex flex-col pt-6 pb-4" style={{ paddingHorizontal: sectionInset }}>
            <Typography
              className="font-reading"
              style={{
                fontSize: 11,
                letterSpacing: 3.2,
                color: sectionLabelColor,
                marginBottom: 14,
              }}
            >
              {`${format(date, "HH:mm", { locale: pt })} · ORAÇÕES`}
            </Typography>

            <View style={{ flexDirection: "row", flexWrap: "wrap", marginHorizontal: -6 }}>
              {prayerItems.map((item) => (
                <View
                  key={item.key}
                  style={{ width: "100%", paddingHorizontal: 6, marginBottom: 12, minWidth: 0 }}
                  className="md:w-1/2"
                >
                  <LinkCard
                    oratio={{
                      link: item.href,
                      name: item.title,
                    }}
                    description={item.description}
                  />
                </View>
              ))}
            </View>

            <View style={{ flexDirection: "row", flexWrap: "wrap", marginHorizontal: -6 }}>
              <View
                style={{ width: "100%", paddingHorizontal: 6, marginBottom: 12, minWidth: 0 }}
                className="md:w-1/2"
              >
                <Office />
              </View>
              <View
                style={{ width: "100%", paddingHorizontal: 6, marginBottom: 12, minWidth: 0 }}
                className="md:w-1/2"
              >
                <Novenas />
              </View>
            </View>

            <View style={{ flexDirection: "row", flexWrap: "wrap", marginHorizontal: -6 }}>
              {todaysIndulgences.map((indulgence, index) => (
                <View
                  key={`indulgence-${index}`}
                  style={{ width: "100%", paddingHorizontal: 6, marginBottom: 12, minWidth: 0 }}
                  className="md:w-1/2"
                >
                  <LinkCard
                    indulgence={{
                      prayer: indulgence.prayer,
                      body: indulgence.body,
                      link: indulgence.link,
                    }}
                    description="Indulgência Plenária"
                  />
                </View>
              ))}
            </View>

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
              backgroundColor: colors.divider,
              marginHorizontal: sectionInset,
            }}
          />

          <View className="pb-4" style={{ paddingHorizontal: sectionInset }}>
            <LiturgicalSeason />
          </View>

          <View
            style={{
              height: 1,
              backgroundColor: colors.divider,
              marginHorizontal: sectionInset,
            }}
          />

          <ExternalLinks />
        </View>
      </View>
    </ScrollView>
  );
}
