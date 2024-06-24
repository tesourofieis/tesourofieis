import { Icon } from "@iconify/react";
import {
  addWeeks,
  endOfWeek,
  format,
  getYear,
  isSameWeek,
  startOfWeek,
} from "date-fns";
import { useState } from "react";
import { getCalendar } from "../lib/getCalendar";
import { yyyyMMDD } from "../lib/utils";
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

export default function WeeklyCalendar() {
  const calendar = getCalendar(getYear(new Date()));
  const today = yyyyMMDD(new Date());

  const [currentWeek, setCurrentWeek] = useState(startOfWeek(new Date()));

  const handlePreviousWeek = () => {
    setCurrentWeek((prevWeek) => addWeeks(prevWeek, -1));
  };

  const handleNextWeek = () => {
    setCurrentWeek((prevWeek) => addWeeks(prevWeek, 1));
  };

  const weekStart = format(currentWeek, "MMMM dd");
  const weekEnd = format(endOfWeek(currentWeek), "MMMM dd");

  return (
    <>
      {calendar && (
        <div className="text-sm border rounded border-sepia-500 dark:border-sepia-700">
          <div className="flex justify-between items-center px-4 py-2">
            <button
              type="button"
              onClick={handlePreviousWeek}
              className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded cursor-pointer"
            >
              <Icon icon="mdi:arrow-left" width="20" height="20" />
            </button>
            <div>{`${weekStart} - ${weekEnd}`}</div>
            <button
              type="button"
              onClick={handleNextWeek}
              className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded cursor-pointer"
            >
              <Icon icon="mdi:arrow-right" width="20" height="20" />
            </button>
          </div>
          {Object.entries(calendar)
            .filter(([calendarDate]) =>
              isSameWeek(new Date(calendarDate), currentWeek),
            )
            .map(([calendarDate, day]) => (
              <div
                key={calendarDate}
                className="flex justify-between gap-2 mx-2"
              >
                <LinkCard
                  link={day.celebration[0]?.link ?? day.tempora[0]?.link}
                  description={
                    day.celebration[0]?.title ? day.tempora[0]?.title : ""
                  }
                  caption={day.celebration[0]?.title ? "Celebração" : "Tempora"}
                  title={
                    day.celebration[0]?.title ??
                    day.tempora[0]?.title ??
                    "Feria"
                  }
                  color={getColor(day.celebration[0]?.colors[0])}
                  borderColor={calendarDate === today && "border-red-500"}
                  icon="mdi:tshirt-v"
                  date={calendarDate}
                />
                {day.commemoration.length ? (
                  <LinkCard
                    link={day.commemoration[0]?.link}
                    caption="Comemoração"
                    title={day.commemoration[0]?.title}
                    color={getColor(day.commemoration[0]?.colors[0])}
                    borderColor={calendarDate === today && "border-red-500"}
                    icon="mdi:tshirt-v"
                    date={calendarDate}
                  />
                ) : (
                  <></>
                )}
              </div>
            ))}
        </div>
      )}
    </>
  );
}
