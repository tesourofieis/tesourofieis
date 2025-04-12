import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  addMonths,
  addWeeks,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isWithinInterval,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { pt } from "date-fns/locale";
import React, { useState, useRef, useEffect } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

import { yyyyMMDD } from "@tesourofieis/cal/utils";
import LinkCard from "~/components/LinkCard";
import { COLORS } from "~/constants/Colors";
import { useCalendar } from "~/providers/calendar";

// Main Calendar Component
export default function CalendarMasterpiece() {
  const scrollViewRef = useRef<ScrollView>(null);
  const todayRef = useRef<View>(null);
  const { calendar, date } = useCalendar();

  // Today's date formatted for comparison with calendar entries
  const todayString = yyyyMMDD(date);

  // Local state for current date and view mode (month or week)
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [viewMode, setViewMode] = useState<"month" | "week">("month");

  // Calculate the visible days interval based on the view mode
  const intervalStart =
    viewMode === "month" ? startOfMonth(currentDate) : startOfWeek(currentDate);
  const intervalEnd =
    viewMode === "month" ? endOfMonth(currentDate) : endOfWeek(currentDate);

  const days = eachDayOfInterval({ start: intervalStart, end: intervalEnd });

  // Determine if today's date is visible in the current interval
  const isTodayVisible = isWithinInterval(new Date(), {
    start: intervalStart,
    end: intervalEnd,
  });

  // Format the period string for display
  const formattedPeriod =
    viewMode === "month"
      ? format(intervalStart, "MMMM yyyy", { locale: pt })
      : `${format(startOfWeek(currentDate), "MMM dd", {
          locale: pt,
        })} - ${format(endOfWeek(currentDate), "MMM dd", { locale: pt })}`;

  // Navigation handlers for previous and next periods
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

  // Switch view handler that resets the current date to align with the new mode
  const handleViewSwitch = (mode: "month" | "week") => {
    setViewMode(mode);
    setCurrentDate((prevDate) =>
      mode === "month" ? startOfMonth(prevDate) : startOfWeek(prevDate),
    );
  };

  // “Today” button recenter logic – only update if not already centered on today
  const handleToday = () => {
    if (!isTodayVisible) {
      const newDate = new Date();
      setCurrentDate(
        viewMode === "week" ? startOfWeek(newDate) : startOfMonth(newDate),
      );
    }
  };

  // Scroll the view so that today is visible
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
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
    <View className="flex-1 bg-sepia-100 dark:bg-sepia-900">
      <View className="flex-1 text-sm">
        <Header
          formattedPeriod={formattedPeriod}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
          viewMode={viewMode}
          onViewSwitch={handleViewSwitch}
          onToday={handleToday}
          isTodayActive={isTodayVisible}
        />
        <ScrollView ref={scrollViewRef} className="flex-1">
          {days.map((dayDate) => {
            const dayString = yyyyMMDD(dayDate);
            const dayData = calendar.find((i) => i.date === dayString);
            const isToday = dayString === todayString;

            return (
              <View
                key={dayString}
                className={`flex flex-row items-center gap-4 p-3 border-t ${
                  isToday
                    ? "bg-sepia-200 dark:bg-sepia-800"
                    : "bg-sepia-100 dark:bg-sepia-900"
                }`}
              >
                <Text className="w-20 text-sm font-bold text-sepia-700 dark:text-sepia-300">
                  {format(dayDate, "EEE, dd", { locale: pt })}
                </Text>
                <View
                  ref={isToday ? todayRef : null}
                  className="flex-1 p-1 rounded"
                >
                  {dayData?.mass?.map((item) => (
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

// Header component: Displays period navigation, view-mode switches, and the recenter "Today" button.
type HeaderProps = {
  formattedPeriod: string;
  handlePrevious: () => void;
  handleNext: () => void;
  viewMode: "month" | "week";
  onViewSwitch: (mode: "month" | "week") => void;
  onToday: () => void;
  isTodayActive: boolean;
};

function Header({
  formattedPeriod,
  handlePrevious,
  handleNext,
  viewMode,
  onViewSwitch,
  onToday,
  isTodayActive,
}: HeaderProps) {
  return (
    <View className="flex flex-row items-center justify-between px-4 py-5 bg-sepia-200 dark:bg-sepia-800">
      <View className="flex flex-row items-center">
        <Pressable
          onPressOut={handlePrevious}
          className="rounded bg-gray-200 p-2 active:bg-gray-300 dark:bg-gray-800 active:dark:bg-gray-700"
        >
          <FontAwesome name="chevron-left" color={COLORS["600"]} />
        </Pressable>
        <Pressable
          onPressOut={handleNext}
          className="ml-3 rounded bg-gray-200 p-2 active:bg-gray-300 dark:bg-gray-800 active:dark:bg-gray-700"
        >
          <FontAwesome name="chevron-right" color={COLORS["600"]} />
        </Pressable>
      </View>

      <Text className="p-3 text-xl font-bold dark:text-sepia-200">
        {formattedPeriod}
      </Text>

      <View className="flex flex-row items-center">
        {/* Week/Month toggle */}
        <Pressable onPressOut={() => onViewSwitch("week")}>
          <Text
            className={`p-2 rounded-l text-sepia-700 dark:text-sepia-300 ${
              viewMode === "week"
                ? "bg-sepia-300 dark:bg-sepia-700 font-bold"
                : "bg-sepia-200 dark:bg-sepia-800"
            }`}
          >
            Week
          </Text>
        </Pressable>
        <Pressable onPressOut={() => onViewSwitch("month")}>
          <Text
            className={`p-2 rounded-r text-sepia-700 dark:text-sepia-300 ${
              viewMode === "month"
                ? "bg-sepia-300 dark:bg-sepia-700 font-bold"
                : "bg-sepia-200 dark:bg-sepia-800"
            }`}
          >
            Month
          </Text>
        </Pressable>

        <Pressable
          onPressOut={onToday}
          className={`ml-3 p-2 rounded ${
            isTodayActive
              ? "bg-sepia-300 dark:bg-sepia-700"
              : "bg-sepia-200 dark:bg-sepia-800"
          }`}
        >
          <FontAwesome name="crosshairs" size={18} color={COLORS["500"]} />
        </Pressable>
      </View>
    </View>
  );
}
