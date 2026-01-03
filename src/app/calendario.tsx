import { ChevronLeft, ChevronRight } from "lucide-react-native";
import { yyyyMMDD } from "~/lib/utils";
import {
  addMonths,
  addWeeks,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { pt } from "date-fns/locale";
import { useEffect, useRef, useState } from "react";
import { Pressable, ScrollView, View } from "react-native";
import LinkCard from "~/components/LinkCard";
import { Typography } from "~/components/typography";
import { COLORS } from "~/constants/Colors";
import { useCalendar } from "~/providers/calendar";
import PageWrapper from "~/components/Page";

export default function CalendarMasterpiece() {
  const scrollViewRef = useRef<ScrollView>(null);
  const todayRef = useRef<View>(null);
  const { calendar, date } = useCalendar();

  const todayString = yyyyMMDD(date);

  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [viewMode, setViewMode] = useState<"month" | "week">("month");

  const intervalStart =
    viewMode === "month" ? startOfMonth(currentDate) : startOfWeek(currentDate);
  const intervalEnd =
    viewMode === "month" ? endOfMonth(currentDate) : endOfWeek(currentDate);

  const days = eachDayOfInterval({ start: intervalStart, end: intervalEnd });

  const formattedPeriod =
    viewMode === "month"
      ? format(intervalStart, "MMMM yyyy", { locale: pt })
      : `${format(startOfWeek(currentDate), "MMM dd", {
          locale: pt,
        })} - ${format(endOfWeek(currentDate), "MMM dd", { locale: pt })}`;

  const handlePrevious = () => {
    setCurrentDate((prevDate) =>
      viewMode === "month" ? addMonths(prevDate, -1) : addWeeks(prevDate, -1),
    );
  };

  const handleNext = () => {
    setCurrentDate((prevDate) =>
      viewMode === "month" ? addMonths(prevDate, 1) : addWeeks(prevDate, 1),
    );
  };

  const handleViewSwitch = (mode: "month" | "week") => {
    setViewMode(mode);
    setCurrentDate((prevDate) =>
      mode === "month" ? startOfMonth(prevDate) : startOfWeek(prevDate),
    );
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (todayRef.current) {
        todayRef.current.measure((_x, _y, _width, _height, _pageX, pageY) => {
          if (pageY > 0) {
            scrollViewRef.current?.scrollTo({
              y: Math.max(0, pageY - 100),
              animated: true,
            });
          }
        });
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [viewMode, currentDate]);

  return (
    <PageWrapper>
      <View className="flex-1 text-sm">
        <Header
          formattedPeriod={formattedPeriod}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
          viewMode={viewMode}
          onViewSwitch={handleViewSwitch}
        />
        <ScrollView ref={scrollViewRef} className="flex-1">
          {days.map((dayDate) => {
            const dayString = yyyyMMDD(dayDate);
            const dayData = calendar.find((i) => i.date === dayString);
            const isToday = dayString === todayString;

            return (
              <View
                key={dayString}
                className={`flex flex-row items-center gap-4 p-3 border border-sepia ${
                  isToday ? "extreme-background" : "medium-background"
                }`}
              >
                <Typography className="w-20 text-sm bold text-sepia-700 dark:text-sepia-300">
                  {format(dayDate, "EEE, dd", { locale: pt })}
                </Typography>
                <View
                  ref={isToday ? todayRef : null}
                  className="flex-1 p-1 rounded"
                >
                  {dayData?.mass && dayData.mass.length > 0
                    ? dayData.mass.map((item) => (
                        <LinkCard key={item.id} mass={item} />
                      ))
                    : null}
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </PageWrapper>
  );
}

type HeaderProps = {
  formattedPeriod: string;
  handlePrevious: () => void;
  handleNext: () => void;
  viewMode: "month" | "week";
  onViewSwitch: (mode: "month" | "week") => void;
};

function Header({
  formattedPeriod,
  handlePrevious,
  handleNext,
  viewMode,
  onViewSwitch,
}: HeaderProps) {
  return (
    <View className="flex flex-row items-center justify-between px-4 py-5">
      <View className="flex flex-row items-center">
        <Pressable
          onPressOut={handlePrevious}
          className="rounded bg-gray-200 p-2 active:bg-gray-300 dark:bg-gray-800 dark:active:bg-gray-700"
        >
          <ChevronLeft color={COLORS["600"]} />
        </Pressable>
        <Pressable
          onPressOut={handleNext}
          className="ml-3 rounded bg-gray-200 p-2 active:bg-gray-300 dark:bg-gray-800 dark:active:bg-gray-700"
        >
          <ChevronRight color={COLORS["600"]} />
        </Pressable>
      </View>

      <Typography className="p-3 text-xl bold dark:text-sepia-200">
        {formattedPeriod}
      </Typography>

      <View className="flex flex-row items-center">
        <Pressable onPressOut={() => onViewSwitch("week")}>
          <Typography
            className={`p-2 rounded-l text-sepia-700 dark:text-sepia-300 ${
              viewMode === "week" ? "soft-background bold" : "medium-background"
            }`}
          >
            Week
          </Typography>
        </Pressable>
        <Pressable onPressOut={() => onViewSwitch("month")}>
          <Typography
            className={`p-2 rounded-r text-sepia-700 dark:text-sepia-300 ${
              viewMode === "month"
                ? "soft-background bold"
                : "medium-background"
            }`}
          >
            Month
          </Typography>
        </Pressable>
      </View>
    </View>
  );
}
