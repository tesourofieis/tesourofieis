import { useCalendar } from "~/providers/calendar";
import LinkCard from "./LinkCard";

export default function PageCalendar() {
  const { day } = useCalendar();

  return (
    <>
      {day.mass?.map((item) => (
        <LinkCard key={item.id} mass={item} />
      ))}
    </>
  );
}
