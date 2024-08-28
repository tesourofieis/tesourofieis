import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  format,
  getYear,
  startOfMonth,
} from "date-fns";
import { pt } from "date-fns/locale";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

import type { Day } from "@tesourofieis/cal/day";
import { getCalendar } from "@tesourofieis/cal/getCalendar";
import { yyyyMMDD } from "@tesourofieis/cal/utils";

import { COLORS } from "~/constants/Colors";
import LinkCard from "./LinkCard";

export function getColor(color?: string) {
  switch (color) {
    case "w":
      return "white";
    case "r":
      return "red";
    case "g":
      return "green";
    case "v":
      return "violet";
    case "b":
      return "black";
    default:
      return "gray";
  }
}

export default function MonthlyCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const calendar = getCalendar(getYear(currentMonth));
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
      <View className="text-xs">
        <ChangeMonth
          handleNextMonth={handleNextMonth}
          monthStart={monthStart}
          handlePreviousMonth={handlePreviousMonth}
        />
        <View>
          {monthDays.map((date) => {
            const calendarDate = yyyyMMDD(date);
            const day: Partial<Day> | undefined = calendar[calendarDate];
            return (
              <View
                key={calendarDate}
                className={`flex flex-col gap-1 rounded p-3 m-3 ${
                  calendarDate === today
                    ? "bg-sepia-200 dark:bg-sepia-800"
                    : "bg-sepia-100 dark:bg-sepia-900"
                }`}
              >
                <Text className="mb-1 text-center text-xs font-bold text-sepia-700 dark:text-sepia-300">
                  {format(date, "MMM dd", { locale: pt })}
                </Text>
                {day?.celebration?.map((celebration) => (
                  <LinkCard
                    key={celebration.id}
                    href={celebration.link}
                    caption={"Celebração"}
                    title={celebration.title}
                    color={getColor(celebration.colors[0])}
                    description="Missa"
                  />
                ))}
                {day?.tempora?.map((tempora) => (
                  <LinkCard
                    key={tempora.id}
                    href={tempora.link}
                    caption={"Tempora"}
                    title={tempora.title || "Feria"}
                    color={getColor(tempora.colors[0])}
                    description="Missa"
                  />
                ))}
                {day?.commemoration?.map((commemoration) => (
                  <LinkCard
                    key={commemoration.id}
                    href={commemoration.link}
                    caption="Comemoração"
                    title={commemoration.title}
                    color={getColor(commemoration.colors[0])}
                    description="Missa"
                  />
                ))}
                {day?.local?.map((local) => (
                  <LinkCard
                    key={local.id}
                    href={local.link}
                    caption={`Local: ${local.local
                      ?.toLocaleUpperCase()
                      .split("-")
                      .join(", ")}`}
                    title={local.title}
                    color={getColor(local.colors[0])}
                    description="Missa"
                  />
                ))}
                {day?.outro?.map((outro) => (
                  <LinkCard
                    key={outro.id}
                    href={outro.link}
                    caption="No mesmo dia"
                    title={outro.title}
                    color={getColor(outro.colors[0])}
                    description="Missa"
                  />
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
