import { Icon } from "@iconify/react";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  format,
  getYear,
  startOfMonth,
  startOfToday,
} from "date-fns";
import { pt } from "date-fns/locale";
import { useState } from "react";

import { getCalendar } from "@tesourofieis/cal/getCalendar";
import { yyyyMMDD } from "@tesourofieis/cal/utils";

import LinkCard from "./LinkCard";

export function getColor(color: string) {
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
  const today = startOfToday();

  const handlePreviousMonth = () => {
    setCurrentMonth((prevMonth) => addMonths(prevMonth, -1));
  };

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => addMonths(prevMonth, 1));
  };

  const monthStart = format(startOfMonth(currentMonth), "MMMM yyyy", {
    locale: pt,
  });

  const monthDays = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  // return <>{JSON.stringify(currentMonth, null, 2)}</>;

  return (
    <div className="text-xs">
      <ChangeMonth
        handleNextMonth={handleNextMonth}
        monthStart={monthStart}
        handlePreviousMonth={handlePreviousMonth}
      />
      <div>
        {monthDays.map((date) => {
          const day = calendar.find((i) => i.date === yyyyMMDD(date));
          return (
            <div
              key={date.toString()}
              className={`flex flex-col gap-1 rounded p-1 ${
                date.getDate() === today.getDate()
                  ? "bg-sepia-200 dark:bg-sepia-800"
                  : "bg-sepia-100 dark:bg-sepia-900"
              }`}
            >
              <div className="mb-1 text-center text-xs font-bold">
                {format(date, "MMM dd", { locale: pt })}
              </div>
              {day?.mass.map((item) => (
                <LinkCard
                  key={item.id}
                  href={item.link}
                  caption={"Celebração"}
                  title={item.name}
                  color={getColor(item.color)}
                  icon="mdi:tshirt-v"
                />
              ))}
            </div>
          );
        })}
      </div>
      <ChangeMonth
        handleNextMonth={handleNextMonth}
        monthStart={monthStart}
        handlePreviousMonth={handlePreviousMonth}
      />
    </div>
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
    <div className="flex items-center justify-between px-4 py-2">
      <button
        type="button"
        onClick={handlePreviousMonth}
        className="cursor-pointer rounded p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        <Icon icon="mdi:arrow-left" width="18" height="18" />
      </button>
      <h5>{monthStart}</h5>
      <button
        type="button"
        onClick={handleNextMonth}
        className="cursor-pointer rounded p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        <Icon icon="mdi:arrow-right" width="18" height="18" />
      </button>
    </div>
  );
}
