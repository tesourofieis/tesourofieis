import { getYear } from "date-fns";
import { useEffect, useRef } from "react";
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

export default function Calendar() {
  const calendar = getCalendar(getYear(new Date()));
  const today = yyyyMMDD(new Date());
  const containerRef = useRef(null);
  const todayRef = useRef(null);

  useEffect(() => {
    if (todayRef.current) {
      todayRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, []);

  return (
    <>
      {calendar && (
        <div
          ref={containerRef}
          className="text-sm border rounded border-sepia-500 dark:border-sepia-700 h-80 overflow-y-auto"
        >
          {Object.entries(calendar).map(([calendarDate, day]) => (
            <div
              key={calendarDate}
              ref={calendarDate === today ? todayRef : null}
              className="flex justify-between gap-2 mx-2"
            >
              <LinkCard
                link={day.celebration[0]?.link ?? day.tempora[0]?.link}
                description={
                  day.celebration[0]?.title ? day.tempora[0]?.title : ""
                }
                caption={day.celebration[0]?.title ? "Celebração" : "Tempora"}
                title={
                  day.celebration[0]?.title ?? day.tempora[0]?.title ?? "Feria"
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
