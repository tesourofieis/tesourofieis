import { getCurrentOffice } from "@tesourofieis/cal/office";
import LinkCard from "./LinkCard";

export default function Office() {
  const office = getCurrentOffice();

  if (office) {
    return (
      <LinkCard
        href={office.link}
        title={office.name}
        description={office.description}
      />
    );
  }

  return null;
}
