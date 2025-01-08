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
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

import { yyyyMMDD } from "@tesourofieis/cal/utils";
import { COLORS } from "~/constants/Colors";
import { useCalendar } from "~/providers/calendar";
import LinkCard from "./LinkCard";

export default function PageCalendarView() {
  const today = yyyyMMDD(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<"month" | "week">("month");
  const { calendar } = useCalendar();

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

  return (
    <View className="bg-sepia-100 dark:bg-sepia-900">
      <View className="text-sm">
        <ChangePeriod
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          formattedPeriod={formattedPeriod}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />
        <View>
          {days.map((date) => {
            const calendarDate = yyyyMMDD(date);
            const day = calendar.find((i) => i.date === calendarDate);

            return (
              <View
                key={calendarDate}
                className={`flex flex-row items-center gap-4 p-3 m-3 border-t`}
              >
                <Text className="text-sm font-bold text-sepia-700 dark:text-sepia-300 w-20">
                  {format(date, "EEE, dd", { locale: pt })}
                </Text>
                <View
                  className={`flex-1 rounded ${
                    calendarDate === today
                      ? "bg-sepia-300 dark:bg-sepia-700"
                      : "bg-sepia-100 dark:bg-sepia-900"
                  }
                  `}
                >
                  {day?.mass?.map((item) => (
                    <LinkCard key={item.id} mass={item} />
                  ))}
                </View>
              </View>
            );
          })}
        </View>
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
    <View className="flex flex-row items-center justify-between px-4 my-5">
      <Pressable
        onPress={handlePrevious}
        className="rounded bg-gray-200 p-2 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <FontAwesome name="chevron-left" color={COLORS["600"]} />
      </Pressable>
      <Text className="text-3xl text-sepia-700 dark:text-sepia-300">
        {formattedPeriod}
      </Text>
      <Pressable
        onPress={handleNext}
        className="rounded bg-gray-200 p-2 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <FontAwesome name="chevron-right" color={COLORS["600"]} />
      </Pressable>
      <View className="flex flex-row ml-4">
        <Pressable
          onPress={() => setViewMode("week")}
          className={`p-2 rounded-l bg-gray-200 dark:bg-gray-800 ${
            viewMode === "week" ? "bg-gray-300 dark:bg-gray-700" : ""
          }`}
        >
          <Text className="text-sepia-700 dark:text-sepia-300">Week</Text>
        </Pressable>
        <Pressable
          onPress={() => setViewMode("month")}
          className={`p-2 rounded-r bg-gray-200 dark:bg-gray-800 ${
            viewMode === "month" ? "bg-gray-300 dark:bg-gray-700" : ""
          }`}
        >
          <Text className="text-sepia-700 dark:text-sepia-300">Month</Text>
        </Pressable>
      </View>
    </View>
  );
}
