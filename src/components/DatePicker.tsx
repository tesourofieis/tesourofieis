import type { CalendarTheme } from "@marceloterreiro/flash-calendar";
import { Calendar, toDateId } from "@marceloterreiro/flash-calendar";
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { burgundy } from "config";
import { addMonths, format, parseISO, startOfMonth, subMonths } from "date-fns";
import { pt } from "date-fns/locale";
import { ChevronLeft, ChevronRight } from "lucide-react-native";
import { useCallback, useMemo, useRef, useState } from "react";
import { Pressable, Text, View, useColorScheme } from "react-native";
import { COLORS } from "~/constants/Colors";

interface DatePickerProps {
  date: Date;
  onDateChange: (date: Date) => void;
  children: React.ReactNode;
}

const FONT = "Cardo_400Regular";
const FONT_DISPLAY = "DMSerifDisplay_400Regular";

// Stable formatting functions (must be outside component for referential equality)
const formatWeekDay = (d: Date) => format(d, "EEEEEE", { locale: pt }).toUpperCase();

export function DatePicker({ date, onDateChange, children }: DatePickerProps) {
  const isDark = useColorScheme() === "dark";
  const sheetRef = useRef<BottomSheetModal>(null);
  const [viewMonth, setViewMonth] = useState(() => startOfMonth(date));

  const open = useCallback(() => {
    setViewMonth(startOfMonth(date));
    sheetRef.current?.present();
  }, [date]);

  const handleDayPress = useCallback(
    (dateId: string) => {
      onDateChange(parseISO(dateId));
      sheetRef.current?.dismiss();
    },
    [onDateChange],
  );

  const monthLabel = format(viewMonth, "MMMM yyyy", { locale: pt });

  const bg = isDark ? COLORS["800"] : COLORS["50"];
  const textPrimary = isDark ? COLORS["200"] : COLORS["800"];
  const textMuted = COLORS["500"];
  const hoverBg = isDark ? COLORS["700"] : COLORS["200"];
  const todayBg = isDark ? COLORS["700"] : COLORS["200"];
  const activeBg = burgundy[isDark ? 600 : 500];

  const theme = useMemo<CalendarTheme>(
    () => ({
      // Hide the built-in month row — we have our own navigation
      rowMonth: {
        container: { height: 0, overflow: "hidden" },
      },
      // Week day names
      itemWeekName: {
        content: {
          fontFamily: FONT,
          fontSize: 11,
          color: textMuted,
          letterSpacing: 0.5,
        },
      },
      // Day cells
      itemDay: {
        idle: ({ isPressed, isHovered }) => ({
          container: {
            backgroundColor: isPressed || isHovered ? hoverBg : "transparent",
            borderRadius: 99,
          },
          content: {
            fontFamily: FONT,
            fontSize: 14,
            color: isDark ? COLORS["300"] : COLORS["600"],
          },
        }),
        today: ({ isPressed, isHovered }) => ({
          container: {
            backgroundColor: isPressed || isHovered ? activeBg : todayBg,
            borderRadius: 99,
          },
          content: {
            fontFamily: FONT,
            fontSize: 14,
            color: isPressed || isHovered ? "#fff" : isDark ? COLORS["100"] : COLORS["700"],
          },
        }),
        active: () => ({
          container: {
            backgroundColor: activeBg,
            borderRadius: 99,
          },
          content: {
            fontFamily: FONT,
            fontSize: 14,
            color: "#fff",
          },
        }),
      },
    }),
    [isDark, textMuted, hoverBg, todayBg, activeBg],
  );

  const dateId = toDateId(date);
  const monthId = toDateId(viewMonth);

  return (
    <>
      <Pressable onPress={open} accessibilityRole="button" accessibilityLabel="Selecionar data">
        {children}
      </Pressable>

      <BottomSheetModal
        ref={sheetRef}
        snapPoints={["44%"]}
        backgroundStyle={{ backgroundColor: bg }}
        handleIndicatorStyle={{ backgroundColor: textMuted }}
        backdropComponent={(props) => (
          <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} opacity={0.3} />
        )}
      >
        <BottomSheetView style={{ paddingHorizontal: 16, paddingBottom: 24 }}>
          {/* Month navigation */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingVertical: 12,
            }}
          >
            <Pressable
              onPress={() => setViewMonth((m) => subMonths(m, 1))}
              style={{ padding: 8 }}
              accessibilityLabel="Mês anterior"
            >
              <ChevronLeft size={20} color={textMuted} />
            </Pressable>

            <Text style={{ fontFamily: FONT_DISPLAY, fontSize: 18, color: textPrimary }}>
              {monthLabel}
            </Text>

            <Pressable
              onPress={() => setViewMonth((m) => addMonths(m, 1))}
              style={{ padding: 8 }}
              accessibilityLabel="Próximo mês"
            >
              <ChevronRight size={20} color={textMuted} />
            </Pressable>
          </View>

          {/* Calendar grid */}
          <Calendar
            calendarMonthId={monthId}
            calendarActiveDateRanges={[{ startId: dateId, endId: dateId }]}
            onCalendarDayPress={handleDayPress}
            calendarFirstDayOfWeek="monday"
            calendarMonthHeaderHeight={0}
            calendarDayHeight={36}
            calendarRowVerticalSpacing={4}
            calendarRowHorizontalSpacing={4}
            getCalendarWeekDayFormat={formatWeekDay}
            theme={theme}
          />
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
}
