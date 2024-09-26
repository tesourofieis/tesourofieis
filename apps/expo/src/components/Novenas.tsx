import { useCalendar } from "~/providers/calendar";
import LinkCard from "./LinkCard";

export default function Novenas() {
  const { novenas } = useCalendar();

  if (novenas.length) {
    return (
      <>
        {novenas.map((novena) => (
          <LinkCard
            key={novena.id}
            oratio={{ link: "/devocionario/novenas", name: novena.name }}
            description="Novena"
          />
        ))}
      </>
    );
  }
}
