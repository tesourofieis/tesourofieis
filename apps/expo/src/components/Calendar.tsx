import { useCalendar } from "~/providers/calendar";
import LinkCard from "./LinkCard";

export default function Calendar() {
  const { day } = useCalendar();

  return (
    <>
      {day.mass?.map((item) => (
        <LinkCard key={item.id} mass={item} />
      ))}
    </>
  );
}
