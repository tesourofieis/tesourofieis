import { getCurrentOffice } from "~/lib/office";
import LinkCard from "./LinkCard";

export default function PageOffice() {
  const office = getCurrentOffice();

  if (office) {
    return (
      <LinkCard
        oratio={{ link: office.link, name: office.name }}
        description={office.description}
      />
    );
  }

  return null;
}
