import { getHours } from "date-fns";
import LinkCard from "./LinkCard";

export default function Office() {
  const date = new Date();
  const hour = getHours(date);

  if (hour >= 0 && hour < 3) {
    return (
      <LinkCard
        href="/devocionario/oficio/matinas"
        title="Matina"
        description="Pequeno Ofício de Nossa Senhora"
      />
    );
  }

  if (hour >= 3 && hour < 6) {
    return (
      <LinkCard
        href="/devocionario/oficio/laudes"
        title="Laudes"
        description="Pequeno Ofício de Nossa Senhora"
      />
    );
  }

  if (hour >= 6 && hour < 9) {
    return (
      <LinkCard
        href="/devocionario/oficio/prima"
        title="Prima"
        description="Pequeno Ofício de Nossa Senhora"
      />
    );
  }

  if (hour >= 9 && hour < 12) {
    return (
      <LinkCard
        href="/devocionario/oficio/terca"
        title="Terça"
        description="Pequeno Ofício de Nossa Senhora"
      />
    );
  }

  if (hour >= 12 && hour < 15) {
    return (
      <LinkCard
        href="/devocionario/oficio/sexta"
        title="Sexta"
        description="Pequeno Ofício de Nossa Senhora"
      />
    );
  }

  if (hour >= 15 && hour < 18) {
    return (
      <LinkCard
        href="/devocionario/oficio/noa"
        title="Noa"
        description="Pequeno Ofício de Nossa Senhora"
      />
    );
  }

  if (hour >= 18 && hour < 21) {
    return (
      <LinkCard
        href="/devocionario/oficio/vesperas"
        title="Vésperas"
        description="Pequeno Ofício de Nossa Senhora"
      />
    );
  }

  if (hour >= 21 || hour < 0) {
    return (
      <LinkCard
        href="/devocionario/oficio/completas"
        title="Completas"
        description="Pequeno Ofício de Nossa Senhora"
      />
    );
  }
}
