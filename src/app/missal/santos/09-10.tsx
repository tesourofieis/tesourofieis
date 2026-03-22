import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

import Missa from "../comum/15confessoresnaopontifices2";

export default function Page0910() {
  return (
    <PageWrapper>
      <H1 text="S. Nicolau Tolentino, Conf., a 10 de Setembro" />

      <Typography className="comment">
        Nicolau, dito de Tolentino, devido á sua longa estadia nessa localidade, recebeu no baptismo
        o nome do santo bispo de Barri, por ter nascido em seguida a uma peregrinação feita por seus
        pais ao tumulo do grande thaumaturgo. A exemplo do seu santo Padroeiro, desde a idade de
        sete annos começou a jejuar varias vezes na semana. Certo dia, ouvindo o sermão de um
        pregador da Ordem dos Eremitas de Santo Agostinho, sobre o desprezo do mundo, resolveu
        abandonar tudo o que possuía (Ev.) e entrou para a dita Ordem. É representado com um lírio
        na mão, porque foi sempre um modelo de inocência. Morreu em 1310.
      </Typography>

      <Missa />
    </PageWrapper>
  );
}
