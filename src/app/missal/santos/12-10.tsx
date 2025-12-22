import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

import Missa from "../comum/sumospontifices";

export default function Page1210() {
  return (
    <PageWrapper>
      <H1 text="S. Melquíades, Papa e Mártir, a 10 de Dezembro" />

      <Typography className="comment">
        «Em Roma, morte de S. Melquíades, Papa, que, depois de haver sofrido
        muito na perseguição de Maximiano, viu a paz restituída à Igreja e
        morreu tranquilamente em 314.»
      </Typography>

      <Missa />
    </PageWrapper>
  );
}
