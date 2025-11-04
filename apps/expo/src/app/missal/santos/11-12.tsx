import { Typography } from "~/components/typography";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

import Missa from "../comum/sumospontifices";

export default function Page1112() {
  return (
    <PageWrapper>
      <H1 text="S. Martinho, Papa e Mártir, a 12 de Novembro" />

      <Typography className="comment">
        Martinho sucedeu ao Papa Theodoro. Tendo convocado, em Roma, um Concílio
        no qual foram condenados os Monotelitas, que não admitiam em Jesus
        Cristo senão uma vontade divina, foi traiçoeiramente preso por ordem dos
        hereges Heráclio e Constante, e levado para Constantinopla. Depois de
        muitos sofrimentos e humilhações, foi exilado em Chersoneso, onde morreu
        de fadiga, em 655. Seu corpo, transferido para Roma, foi depositado na
        igreja dos Santos Silvestre e Martinho, apóstolos das Gálias.
      </Typography>

      <Missa />
    </PageWrapper>
  );
}
