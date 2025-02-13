import { format, startOfToday } from "date-fns";
import { pt } from "date-fns/locale";

import { getCalendarDay } from "@tesourofieis/cal/getCalendar";
import { yyyyMMDD } from "@tesourofieis/cal/utils";

import type { Mass } from "@tesourofieis/cal/observanceManager";
import LinkCard from "./LinkCard";

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
  const today = startOfToday();

  const formatDate = (date: Date) => {
    return format(date, "EEEE, MMMM dd", { locale: pt });
  };

  const day = getCalendarDay(yyyyMMDD(today));

  return (
    <div className="text-xs">
      <div className="mx-2 mb-4 flex flex-col gap-2 rounded p-4 bg-sepia-100 dark:bg-sepia-900">
        <div className="mb-2 text-lg font-semibold">{formatDate(today)}</div>
        {day?.mass.map((item) => (
          <LinkCard
            key={item.link}
            href={item.link}
            caption={"Celebração"}
            title={item.name}
            color={getColor(item.color)}
            icon="mdi:tshirt-v"
          />
        ))}
      </div>
    </div>
  );
}
