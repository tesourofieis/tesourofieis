import { getCalendarDay } from "@tesourofieis/cal/getCalendar";
import { yyyyMMDD } from "@tesourofieis/cal/utils";

import { Icon } from "@iconify/react";
import LinkCard from "./LinkCard";
import Loading from "./Loading";

export default function Ordo({ section }: { section: string }) {
  const mass = getCalendarDay(yyyyMMDD(new Date()))?.mass;

  if (!mass?.length)
    return (
      <div className="mt-2 flex flex-col items-center justify-center">
        <Loading />
      </div>
    );

  return (
    <div className="flex gap-5 p-8">
      <Icon icon="mdi:arrow-right" />
      <LinkCard
        href={`/${mass?.[0]?.link}#${section}`}
        title={mass?.[0]?.name ?? ""}
        description={section.toUpperCase()}
      />
    </div>
  );
}
