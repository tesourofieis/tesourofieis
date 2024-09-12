import { addDays, format, getYear, startOfToday } from "date-fns";
import { pt } from "date-fns/locale";
import { useState } from "react";

import { getCalendar } from "@tesourofieis/cal/getCalendar";
import { yyyyMMDD } from "@tesourofieis/cal/utils";

import LinkCard from "./LinkCard";
import type { Mass } from "@tesourofieis/cal/observanceManager";

export function getColor(color: Mass["color"]) {
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

export default function DailyCalendar() {
  const calendar = getCalendar(getYear(new Date()));
  const today = startOfToday();
  const [currentDayIndex] = useState(0);

  const getDate = (index: number) => {
    return addDays(today, index);
  };

  const formatDate = (date: Date) => {
    return format(date, "EEEE, MMMM dd", { locale: pt });
  };

  return (
    <div className="text-xs">
      <div className="max-h-96 overflow-y-scroll">
        {Array.from({ length: 15 }, (_, i) => currentDayIndex + i).map(
          (index) => {
            const date = yyyyMMDD(getDate(index));
            const day = calendar.find((i) => i.date === date);
            return (
              <div
                key={date}
                className={`mx-2 mb-4 flex flex-col gap-2 rounded p-4 ${
                  date === yyyyMMDD(today)
                    ? "bg-sepia-200 dark:bg-sepia-800"
                    : "bg-sepia-100 dark:bg-sepia-900"
                }`}
              >
                <div className="mb-2 text-lg font-semibold">
                  {formatDate(getDate(index))}
                </div>
                {day?.mass.map((item) => (
                  <LinkCard
                    key={item.link}
                    href={item.link}
                    caption={"Celebração"}
                    title={item.name}
                    color={getColor(item.color ?? "")}
                    icon="mdi:tshirt-v"
                  />
                ))}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
