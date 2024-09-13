import { getHours } from "date-fns";
import LinkCard from "./LinkCard";

export default function Office() {
  const date = new Date();
  const hour = getHours(date);

  if (hour >= 0 && hour < 3) {
    return (
      <LinkCard
        oratio={{ link: "/devocionario/oficio/matinas", name: "Matina" }}
        description="Pequeno Ofício de Nossa Senhora"
      />
    );
  }

  if (hour >= 3 && hour < 6) {
    return (
      <LinkCard
        oratio={{ link: "/devocionario/oficio/laudes", name: "Laudes" }}
        description="Pequeno Ofício de Nossa Senhora"
      />
    );
  }

  if (hour >= 6 && hour < 9) {
    return (
      <LinkCard
        oratio={{ link: "/devocionario/oficio/prima", name: "Prima" }}
        description="Pequeno Ofício de Nossa Senhora"
      />
    );
  }

  if (hour >= 9 && hour < 12) {
    return (
      <LinkCard
        oratio={{ link: "/devocionario/oficio/terca", name: "Terça" }}
        description="Pequeno Ofício de Nossa Senhora"
      />
    );
  }

  if (hour >= 12 && hour < 15) {
    return (
      <LinkCard
        oratio={{ link: "/devocionario/oficio/sexta", name: "Sexta" }}
        description="Pequeno Ofício de Nossa Senhora"
      />
    );
  }

  if (hour >= 15 && hour < 18) {
    return (
      <LinkCard
        oratio={{ link: "/devocionario/oficio/noa", name: "Noa" }}
        description="Pequeno Ofício de Nossa Senhora"
      />
    );
  }

  if (hour >= 18 && hour < 21) {
    return (
      <LinkCard
        oratio={{ link: "/devocionario/oficio/vesperas", name: "Vésperas" }}
        description="Pequeno Ofício de Nossa Senhora"
      />
    );
  }

  if (hour >= 21 || hour < 0) {
    return (
      <LinkCard
        oratio={{ link: "/devocionario/oficio/completas", name: "Completas" }}
        description="Pequeno Ofício de Nossa Senhora"
      />
    );
  }
}
