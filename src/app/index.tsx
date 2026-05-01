import { BookPlus } from "lucide-react-native";
import { burgundy } from "config";
import { format, getYear, isWithinInterval } from "date-fns";
import { pt } from "date-fns/locale";
import { Platform, Pressable, ScrollView, useWindowDimensions, View } from "react-native";
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
import { FONT_FAMILIES, useAppTheme } from "~/theme";

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

  const isWeb = Platform.OS === "web";
  const { width } = useWindowDimensions();
  const isWebDesktop = isWeb && width >= 768;
  const isCompactLayout = width < 420;
  const sectionInset = isCompactLayout ? 20 : 20;
  const headerPaddingTop = isCompactLayout ? 14 : 16;
  const headerPaddingBottom = isCompactLayout ? 16 : 18;
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
  const feriaTextColor = isDark ? burgundy[400] : burgundy[500];
  const seasonTextColor = isDark ? colors.textMuted : COLORS["500"];
  const sectionLabelColor = isDark ? burgundy[400] : burgundy[500];

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
              style={{
                fontFamily: FONT_FAMILIES.reading,
                fontSize: feriaFontSize,
                letterSpacing: feriaLetterSpacing,
                color: feriaTextColor,
                marginBottom: 6,
              }}
            >
              {format(date, "EEEE", { locale: pt }).toUpperCase()}
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
                  fontFamily: FONT_FAMILIES.display,
                  fontSize: dateFontSize,
                  color: dateTextColor,
                  marginBottom: 10,
                  textDecorationLine: "underline",
                  textDecorationStyle: "solid",
                  textDecorationColor: dateTextColor,
                }}
              >
                {format(date, "d 'de' MMMM", { locale: pt })}
              </Typography>
            </DatePicker>

            {/* Season — italic, like a liturgical subtitle */}
            <Typography
              style={{
                fontFamily: FONT_FAMILIES.displayItalic,
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
          <View className="pt-2 pb-4" style={{ paddingHorizontal: sectionInset }}>
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
              style={{
                fontFamily: FONT_FAMILIES.reading,
                fontSize: 11,
                letterSpacing: 3.2,
                color: sectionLabelColor,
                marginBottom: 14,
              }}
            >
              {`${format(date, "HH:mm", { locale: pt })} · ORAÇÕES`}
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
              backgroundColor: colors.divider,
              marginHorizontal: sectionInset,
            }}
          />

          <View className="pb-3">
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
