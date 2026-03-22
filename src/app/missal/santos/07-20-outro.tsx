import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

import Missa from "../comum/18virgensmartires2";

export default function Page0720Outro() {
  return (
    <PageWrapper>
      <H1 text="Santa Margarida, Virgem e Mártir, a 20 de Julho" />

      <Typography className="comment">
        Instruida, pela ama, na religião cristã, Margarida pereceu pela espada durante a última
        perseguição geral, em Antioquia da Pisídia, cerca de 255 a 275. Seu culto passou do Oriente
        ao Ocidente no tempo das Cruzadas. É sobretudo invocada pelas senhoras prestes a serem mães,
        e está na lista dos Quatorze Santos Auxiliares.
      </Typography>

      <Missa />
    </PageWrapper>
  );
}
