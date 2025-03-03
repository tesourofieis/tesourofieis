import FontAwesome from "@expo/vector-icons/FontAwesome";
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
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

import { yyyyMMDD } from "@tesourofieis/cal/utils";
import LinkCard from "~/components/LinkCard";
import { COLORS } from "~/constants/Colors";
import { useCalendar } from "~/providers/calendar";

export default function PageCalendarView() {
  const scrollViewRef = useRef<ScrollView>(null);
  const todayRef = useRef<View>(null);
  const { calendar, date } = useCalendar();
  const today = yyyyMMDD(date);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<"month" | "week">("month");

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

  const formattedPeriod =
    viewMode === "month"
      ? format(startOfMonth(currentDate), "MMMM yyyy", { locale: pt })
      : `${format(startOfWeek(currentDate), "MMM dd", {
          locale: pt,
        })} - ${format(endOfWeek(currentDate), "MMM dd", { locale: pt })}`;

  const days = eachDayOfInterval({
    start:
      viewMode === "month"
        ? startOfMonth(currentDate)
        : startOfWeek(currentDate),
    end:
      viewMode === "month" ? endOfMonth(currentDate) : endOfWeek(currentDate),
  });

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
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
  }, [viewMode, todayRef]);

  return (
    <View className="bg-sepia-100 dark:bg-sepia-900 flex-1">
      <View className="text-sm flex-1">
        <ChangePeriod
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          formattedPeriod={formattedPeriod}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />
        <ScrollView ref={scrollViewRef} className="flex-1">
          {days.map((date) => {
            const calendarDate = yyyyMMDD(date);
            const day = calendar.find((i) => i.date === calendarDate);
            const isToday = calendarDate === today;

            return (
              <View
                key={calendarDate}
                className={`flex flex-row items-center gap-4 p-3 border-t ${
                  isToday
                    ? "bg-sepia-200 dark:bg-sepia-800"
                    : "bg-sepia-100 dark:bg-sepia-900"
                }`}
              >
                <Text className="text-sm font-bold text-sepia-700 dark:text-sepia-300 w-20">
                  {format(date, "EEE, dd", { locale: pt })}
                </Text>
                <View
                  ref={isToday ? todayRef : null}
                  className="flex-1 p-1 rounded"
                >
                  {day?.mass?.map((item) => (
                    <LinkCard key={item.id} mass={item} />
                  ))}
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

function ChangePeriod({
  handlePrevious,
  handleNext,
  formattedPeriod,
  viewMode,
  setViewMode,
}: {
  handlePrevious: () => void;
  handleNext: () => void;
  formattedPeriod: string;
  viewMode: "month" | "week";
  setViewMode: React.Dispatch<React.SetStateAction<"month" | "week">>;
}) {
  return (
    <View className="flex flex-row items-center justify-between px-4 py-5 bg-sepia-200 dark:bg-sepia-800">
      <Pressable
        onPressOut={handlePrevious}
        className="rounded bg-gray-200 p-2 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <FontAwesome name="chevron-left" color={COLORS["600"]} />
      </Pressable>

      <Text className="font-bold dark:text-sepia-200 p-3 text-xl text-bold">
        {formattedPeriod}
      </Text>
      <Pressable
        onPressOut={handleNext}
        className="rounded bg-gray-200 p-2 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <FontAwesome name="chevron-right" color={COLORS["600"]} />
      </Pressable>
      <View className="flex flex-row ml-4">
        <Pressable onPressOut={() => setViewMode("week")}>
          <Text
            className={`p-2 rounded-l text-sepia-700 dark:text-sepia-300 ${
              viewMode === "week"
                ? "bg-sepia-300 dark:bg-sepia-700 bold"
                : "bg-sepia-200 dark:bg-sepia-800"
            } `}
          >
            Week
          </Text>
        </Pressable>
        <Pressable onPressOut={() => setViewMode("month")}>
          <Text
            className={`p-2 rounded-r text-sepia-700 dark:text-sepia-300 ${
              viewMode === "month"
                ? "bg-sepia-300 dark:bg-sepia-700 bold"
                : "bg-sepia-200 dark:bg-sepia-800"
            } `}
          >
            Month
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
