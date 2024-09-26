import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  format,
  startOfMonth,
} from "date-fns";
import { pt } from "date-fns/locale";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

import { yyyyMMDD } from "@tesourofieis/cal/utils";
import { COLORS } from "~/constants/Colors";
import { useCalendar } from "~/providers/calendar";
import LinkCard from "./LinkCard";

export default function MonthlyCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const { calendar } = useCalendar();
  const today = yyyyMMDD(new Date());

  const handlePreviousMonth = () => {
    setCurrentMonth((prevMonth) => addMonths(prevMonth.toString(), -1));
  };

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => addMonths(prevMonth.toString(), 1));
  };

  const monthStart = format(startOfMonth(currentMonth), "MMMM yyyy", {
    locale: pt,
  });

  const monthDays = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  return (
    <View>
      <View className="text-sm">
        <ChangeMonth
          handleNextMonth={handleNextMonth}
          monthStart={monthStart}
          handlePreviousMonth={handlePreviousMonth}
        />
        <View>
          {monthDays.map((date) => {
            const calendarDate = yyyyMMDD(date);

            const day = calendar.find((i) => i.date === calendarDate);
            return (
              <View
                key={calendarDate}
                className={`flex flex-col gap-1 rounded p-3 m-3 ${
                  calendarDate === today
                    ? "bg-sepia-200 dark:bg-sepia-800"
                    : "bg-sepia-100 dark:bg-sepia-900"
                }`}
              >
                <Text className="mb-1 text-center text-sm font-bold text-sepia-700 dark:text-sepia-300">
                  {format(date, "MMM dd", { locale: pt })}
                </Text>
                {day?.mass?.map((item) => (
                  <LinkCard key={item.id} mass={item} />
                ))}
              </View>
            );
          })}
        </View>
        <ChangeMonth
          handleNextMonth={handleNextMonth}
          monthStart={monthStart}
          handlePreviousMonth={handlePreviousMonth}
        />
      </View>
    </View>
  );
}

function ChangeMonth({
  handlePreviousMonth,
  monthStart,
  handleNextMonth,
}: {
  handlePreviousMonth: () => void;
  monthStart: string;
  handleNextMonth: () => void;
}) {
  return (
    <View className="flex flex-row items-center justify-around px-4 my-5">
      <Pressable
        onPress={handlePreviousMonth}
        className="cursor-pointer rounded bg-gray-200 p-2 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <FontAwesome name="chevron-left" color={COLORS["600"]} />
      </Pressable>
      <Text className="text-3xl text-sepia-700 dark:text-sepia-300">
        {monthStart}
      </Text>

      <Pressable
        onPress={handleNextMonth}
        className="cursor-pointer rounded bg-gray-200 p-2 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <FontAwesome name="chevron-right" color={COLORS["600"]} />
      </Pressable>
    </View>
  );
}
