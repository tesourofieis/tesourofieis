import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

import Missa from "../comum/26festasmaria1";

export default function Page0805() {
  return (
    <PageWrapper>
      <H1 text="Dedicação de Santa Maria das Neves, a 5 de Agosto" />

      <Typography className="comment">
        Esta Igreja foi edificada no IV seculo, em Roma, no pontificado de
        Libério, sobre o Monte Esquilino. Na idade media, uma legenda graciosa e
        popular atribuiu essa fundação a um nobre patrício que, favorecido por
        uma visão de Maria, a fizera construir sobre um terreno marcado
        milagrosamente por uma camada de neve. O santuario foi reconstruido no
        seculo seguinte e consagrado em 432, por Sixto III, á Maria, a quem o
        Concilio de Epheso (431) acabava de proclamar Mãe de Deus. Os mosaicos
        do arco triumphal da maternidade divina, e as duas cidades de Belém e de
        Jerusalem ai representadas, lembram o nascimento do Cristo na cidade de
        David e o da Igreja no Cenáculo. Os mosaicos foram restaurados em
        1931-1934. A Basilica chama-se também Santa Maria do presépio, por se
        guardarem ai, reliquias do presépio; é denominada Maior por ser a maior
        e a mais importante das igrejas construídas em honra da SSma Virgem; e é
        uma Basilica patriarchal. Sua grande nave é formada por duas fileiras de
        quarenta e quatro columnas de mármore branco e o tecto coberto do
        primeiro oiro vindo de America. Nesta Basilica, cuja consagração hoje se
        commemora, inaugura-se o anno litúrgico, no primeiro Domingo do Advento,
        ai se faz a Estação nas festas de Natal, de São João, e da Pascoá, na
        Segunda-Feira das Rogações e todas as Quartas-Feiras das Temporãs.
      </Typography>

      <Missa />
    </PageWrapper>
  );
}
