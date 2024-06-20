import { getYear } from "date-fns";
import { getCalendar } from "../lib/getCalendar";
import LinkCard from "./LinkCard";
import Loading from "./Loading";

export default function Ordo({ section }: { section: string }) {
  const calendar = getCalendar(getYear(new Date()));

  if (!calendar?.length)
    return (
      <div className="mt-2 flex flex-col justify-center items-center">
        <Loading />
      </div>
    );

  return (
    <LinkCard
      link={`/${calendar.celebration[0]?.link}#${section}`}
      title={calendar.celebration[0]?.title}
      caption={calendar.commemoration[0]?.title}
      description={calendar.tempora[0].title}
    />
  );
}
