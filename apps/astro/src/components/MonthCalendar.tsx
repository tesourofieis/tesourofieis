import { Icon } from "@iconify/react";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getYear,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { pt } from "date-fns/locale";
import { useState } from "react";
import { yyyyMMDD } from "@tesourofieis/cal/utils";
import LinkCard from "./LinkCard";
import { getCalendar } from "@tesourofieis/cal/getCalendar";

export function getColor(color) {
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
  const monthEnd = format(endOfMonth(currentMonth), "MMMM yyyy", {
    locale: pt,
  });

  const monthDays = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  // return <>{JSON.stringify(currentMonth, null, 2)}</>;

  return (
    <>
      {calendar && (
        <div className="text-xs">
          <ChangeMonth
            handleNextMonth={handleNextMonth}
            monthStart={monthStart}
            handlePreviousMonth={handlePreviousMonth}
          />
          <div>
            {monthDays.map((date) => {
              const calendarDate = yyyyMMDD(date);
              const day = calendar[calendarDate];
              return (
                <div
                  key={calendarDate}
                  className={`flex flex-col gap-1 p-1 rounded ${
                    calendarDate === today
                      ? "bg-sepia-200 dark:bg-sepia-800"
                      : "bg-sepia-100 dark:bg-sepia-900"
                  }`}
                >
                  <div className="text-xs text-center font-bold mb-1">
                    {format(date, "MMM dd", { locale: pt })}
                  </div>
                  {day ? (
                    <>
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
                      {day?.outro?.map((outro) => (
                        <LinkCard
                          key={outro.id}
                          href={outro.link}
                          caption="No mesmo dia"
                          title={outro.title}
                          color={getColor(outro?.colors?.[0])}
                          icon="mdi:tshirt-v"
                        />
                      ))}
                    </>
                  ) : (
                    <div>No events</div>
                  )}
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
      )}
    </>
  );
}

function ChangeMonth({ handlePreviousMonth, monthStart, handleNextMonth }) {
  return (
    <div className="flex justify-between items-center px-4 py-2">
      <button
        type="button"
        onClick={handlePreviousMonth}
        className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded cursor-pointer"
      >
        <Icon icon="mdi:arrow-left" width="18" height="18" />
      </button>
      <h5>{monthStart}</h5>
      <button
        type="button"
        onClick={handleNextMonth}
        className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded cursor-pointer"
      >
        <Icon icon="mdi:arrow-right" width="18" height="18" />
      </button>
    </div>
  );
}
