import { getNovenas } from "@tesourofieis/cal/getCalendar";
import { yyyyMMDD } from "@tesourofieis/cal/utils";
import LinkCard from "./LinkCard";

export default function Novenas() {
  const date = new Date();
  const novenas = getNovenas(yyyyMMDD(date));

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