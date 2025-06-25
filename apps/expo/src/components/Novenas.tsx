import React from "react";
import { useCalendar } from "~/providers/calendar";
import LinkCard from "./LinkCard";

export default function PageNovenas() {
  const { novenas } = useCalendar();

  if (novenas?.length) {
    return (
      <React.Fragment>
        {novenas.map((novena) => (
          <LinkCard
            key={novena.id}
            oratio={{ link: "/devocionario/novenas", name: novena.name }}
            description="Novena"
          />
        ))}
      </React.Fragment>
    );
  }
}
