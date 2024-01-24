import { getHours } from "date-fns";
import LinkCard from "./LinkCard";

export default function Office() {
  const date = new Date();
  const hour = getHours(date);

  if (hour >= 0 && hour < 3) {
    return (
      <LinkCard
        link="/devocionario/oficio/matinas"
        caption="Matina"
        title="Pequeno Ofício de Nossa Senhora"
      />
    );
  }

  if (hour >= 3 && hour < 6) {
    return (
      <LinkCard
        link="/devocionario/oficio/lauds"
        caption="Lauds"
        title="Pequeno Ofício de Nossa Senhora"
      />
    );
  }

  if (hour >= 6 && hour < 9) {
    return (
      <LinkCard
        link="/devocionario/oficio/prima"
        caption="Prima"
        title="Pequeno Ofício de Nossa Senhora"
      />
    );
  }

  if (hour >= 9 && hour < 12) {
    return (
      <LinkCard
        link="/devocionario/oficio/terca"
        caption="Terça"
        title="Pequeno Ofício de Nossa Senhora"
      />
    );
  }

  if (hour >= 12 && hour < 15) {
    return (
      <LinkCard
        link="/devocionario/oficio/sexta"
        caption="Sexta"
        title="Pequeno Ofício de Nossa Senhora"
      />
    );
  }

  if (hour >= 15 && hour < 18) {
    return (
      <LinkCard
        link="/devocionario/oficio/noa"
        caption="Noa"
        title="Pequeno Ofício de Nossa Senhora"
      />
    );
  }

  if (hour >= 18 && hour < 21) {
    return (
      <LinkCard
        link="/devocionario/oficio/vesperas"
        caption="Vésperas"
        title="Pequeno Ofício de Nossa Senhora"
      />
    );
  }

  if (hour >= 21 || hour < 0) {
    return (
      <LinkCard
        link="/devocionario/oficio/completas"
        caption="Completas"
        title="Pequeno Ofício de Nossa Senhora"
      />
    );
  }
}
