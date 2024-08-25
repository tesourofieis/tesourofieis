import { Icon } from "@iconify/react/dist/iconify.js";
import { getCalendarDay } from "@tesourofieis/cal/getCalendar";
import { yyyyMMDD } from "@tesourofieis/cal/utils";

import LinkCard from "./LinkCard";
import Loading from "./Loading";

export default function Ordo({ section }: { section: string }) {
  const calendar = getCalendarDay(yyyyMMDD(new Date()));

  if (!calendar)
    return (
      <div className="mt-2 flex flex-col items-center justify-center">
        <Loading />
      </div>
    );

  return (
    <div className="flex gap-5 p-8">
      <Icon icon="mdi:arrow-right" />
      <LinkCard
        href={`/${
          calendar.celebration.length
            ? calendar.celebration[0].link
            : calendar.commemoration[0].link
        }#${section}`}
        title={
          calendar.celebration.length
            ? calendar.celebration[0].title
            : calendar.commemoration[0].title
        }
        description={section.toUpperCase()}
      />
    </div>
  );
}
