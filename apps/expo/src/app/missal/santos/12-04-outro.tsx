import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

import Missa from "./../comum/17virgensmartires1";

export default function Page1204Outro() {
  return (
    <PageWrapper>
      <H1 text="Santa Bárbara, Virgem e Mártir, a 4 de Dezembro" />

      <Typography className="comment">
        Morta na Ásia Menor em 235, está na lista dos «Quatorze Santos
        Auxiliadores».
      </Typography>

      <Missa />
    </PageWrapper>
  );
}
