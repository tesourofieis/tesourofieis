import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

import Missa from "../comum/sumospontifices";

export default function Page1119Outro() {
  return (
    <PageWrapper>
      <H1 text="Comemoração de S. Ponciano, Papa e Mártir, a 19 de Agosto" />

      <Typography className="comment">
        Deportado para a Sardenha com o sacerdote Hyppolito, por ordem do imperador Alexandre, S.
        Ponciano foi fustigado até à morte, recebendo a palma do martírio em 235.
      </Typography>

      <Missa />
    </PageWrapper>
  );
}
