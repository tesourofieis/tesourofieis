import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

import Missa from "../santos/08-22";

export default function Page0513Portugal() {
  return (
    <PageWrapper>
      <H1 text="Missa Votiva do Imaculado Coração da B. Virgem Maria, a 13 de Maio" />

      <Missa />
    </PageWrapper>
  );
}
