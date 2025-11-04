import { Typography } from "~/components/typography";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

import Missa from "../santos/09-15";

export default function PageQuad55Outro() {
  return (
    <PageWrapper>
      <H1 text="Sete Dores da B. Virgem Maria" />

      <Typography className="aside">
        No Ciclo do Natal, celebramos a missão da Santíssima Virgem no mistério
        da Encarnação, glorificando ao mesmo tempo a divindade de Jesus e a
        maternidade divina de Maria. O Ciclo da Páscoa diz-nos, como a Mão do
        Salvador cooperou no Mistério da Redenção. Neste Tempo da Paixão, ele
        mostra-nos ao pé da Cruz, onde morre o Cristo (Intr., Seq., Ev.).
      </Typography>

      <Missa />
    </PageWrapper>
  );
}
