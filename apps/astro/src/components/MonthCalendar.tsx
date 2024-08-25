import { useState } from "react";
import { Icon } from "@iconify/react";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  format,
  getYear,
  startOfMonth,
} from "date-fns";
import { pt } from "date-fns/locale";

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
          const calendarDate = yyyyMMDD(date);
          const day: Day = calendar[calendarDate];
          return (
            <div
              key={calendarDate}
              className={`flex flex-col gap-1 rounded p-1 ${
                calendarDate === today
                  ? "bg-sepia-200 dark:bg-sepia-800"
                  : "bg-sepia-100 dark:bg-sepia-900"
              }`}
            >
              <div className="mb-1 text-center text-xs font-bold">
                {format(date, "MMM dd", { locale: pt })}
              </div>
              {day.celebration.map((celebration) => (
                <LinkCard
                  key={celebration.id}
                  href={celebration?.link}
                  caption={"Celebração"}
                  title={celebration.title}
                  color={getColor(celebration[0]?.colors[0])}
                  icon="mdi:tshirt-v"
                />
              ))}
              {day.tempora.map((tempora) => (
                <LinkCard
                  key={tempora.id}
                  href={tempora?.link}
                  caption={tempora.title ? "Celebração" : "Tempora"}
                  title={tempora.title ?? "Feria"}
                  color={getColor(tempora.colors[0])}
                  icon="mdi:tshirt-v"
                />
              ))}
              {day.commemoration.map((commemoration) => (
                <LinkCard
                  key={commemoration.id}
                  href={commemoration.link}
                  caption="Comemoração"
                  title={commemoration.title}
                  color={getColor(commemoration.colors[0])}
                  icon="mdi:tshirt-v"
                />
              ))}
              {day.local.map((local) => (
                <LinkCard
                  key={local.id}
                  href={local.link}
                  caption={`Local: ${local.local
                    .toLocaleUpperCase()
                    .split("-")
                    .join(", ")}`}
                  title={local.title}
                  color={getColor(local.colors[0])}
                  icon="mdi:tshirt-v"
                />
              ))}
              {day.outro?.map((outro) => (
                <LinkCard
                  key={outro.id}
                  href={outro.link}
                  caption="No mesmo dia"
                  title={outro.title}
                  color={getColor(outro?.colors?.[0])}
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

function ChangeMonth({ handlePreviousMonth, monthStart, handleNextMonth }) {
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
