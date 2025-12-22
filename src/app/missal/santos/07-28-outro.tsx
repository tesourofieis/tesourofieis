import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

import Missa from "../comum/sumospontifices";

export default function Page0728Outro() {
  return (
    <PageWrapper>
      <H1 text="S. Vítor, Papa e Mártir, a 28 de Julho" />

      <Typography className="comment">
        Victor I, nascido na África, sucedeu a Santo Eleutério, no trono
        pontifical. Tornou uniforme a fixação da festa da Páscoa, segundo as
        regras ainda hoje em vigor; decidiu que, em caso de necessidade, se
        podia baptizar com a água natural. Morreu mártir sob Septímio Severo em
        197.
      </Typography>

      <Missa />
    </PageWrapper>
  );
}
