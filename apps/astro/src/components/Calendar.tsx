import { addDays, format, getYear, startOfToday } from "date-fns";
import { pt } from "date-fns/locale";
import { useState } from "react";

import type { Day } from "@tesourofieis/cal/day";
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

export default function DailyCalendar() {
  const calendar = getCalendar(getYear(new Date()));
  const today = startOfToday();
  const [currentDayIndex, _setCurrentDayIndex] = useState(0);

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
            const day = calendar[date] as Day;
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
                {day?.celebration?.length ? (
                  day.celebration.map((celebration) => (
                    <LinkCard
                      key={celebration.link}
                      href={celebration.link}
                      caption={"Celebração"}
                      title={celebration.title}
                      color={getColor(celebration.colors[0] ?? "")}
                      icon="mdi:tshirt-v"
                    />
                  ))
                ) : (
                  <>
                    {day.tempora.map((tempora) => (
                      <LinkCard
                        key={tempora.link}
                        href={tempora.link}
                        caption={tempora.title ? "Celebração" : "Tempora"}
                        title={tempora.title || "Feria"}
                        color={getColor(tempora.colors[0] ?? "")}
                        icon="mdi:tshirt-v"
                      />
                    ))}
                  </>
                )}
                {day.commemoration.map((commemoration) => (
                  <LinkCard
                    key={commemoration.link}
                    href={commemoration.link}
                    caption="Comemoração"
                    title={commemoration.title}
                    color={getColor(commemoration.colors[0] ?? "")}
                    icon="mdi:tshirt-v"
                  />
                ))}
                {day.local.map((local) => (
                  <LinkCard
                    key={local.link}
                    href={local.link}
                    caption={`Local: ${local.local
                      ?.toLocaleUpperCase()
                      .split("-")
                      .join(", ")}`}
                    title={local.title}
                    color={getColor(local.colors[0] ?? "")}
                    icon="mdi:tshirt-v"
                  />
                ))}
                {day.outro.map((outro) => (
                  <LinkCard
                    key={outro.link}
                    href={outro.link}
                    caption="No mesmo dia"
                    title={outro.title}
                    color={getColor(outro.colors[0] ?? "")}
                    icon="mdi:tshirt-v"
                  />
                ))}
              </div>
            );
          },
        )}
      </div>
    </div>
  );
}
