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
          className="text-sm border rounded border-sepia-500 dark:border-sepia-700 h-72 divide-y divide-sepia-200 dark:divide-sepia-700 overflow-y-auto"
        >
          {Object.entries(calendar).map(([calendarDate, day]) => (
            <div
              key={calendarDate}
              ref={calendarDate === today ? todayRef : null}
              className={calendarDate === today ? "bg-sepia-500" : ""}
            >
              <LinkCard
                link={day.celebration[0]?.link}
                description={day.celebration[0]?.title}
                title={day.tempora[0]?.title ?? "Feria"}
                caption={day.commemoration[0]?.title}
                color={getColor(
                  day.celebration[0]?.colors[0] ||
                    day.commemoration[0]?.colors[0] ||
                    day.tempora[0]?.colors[0],
                )}
                icon="mdi:tshirt-v"
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
