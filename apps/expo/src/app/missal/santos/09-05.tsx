import { Typography } from "~/components/typography";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

import Missa from "../comum/11confessorespontifices1";

export default function Page0905() {
  return (
    <PageWrapper>
      <H1 text="S. Lourenço Justiniano, B. e Conf., a 5 de Setembro" />

      <Typography className="comment">
        S. Lourenço nasceu em Veneza no XV século, da ilustre família dos
        Justiniani, preferiu as rudes austeridades do claustro à uma gloriosa
        aliança, preparada por sua mãe. Lançando um olhar ao Cristo sobre a
        Cruz, exclamou: Sois vós, Senhor, a minha esperança e em vós encontra-se
        a consolação e a força». Entrou para os Cônegos de São Jorge de Alga. Em
        toda a sua vida, praticou a maior austeridade e era principalmente em
        assidua oração que se inflamava o seu grande amor a Deus e dedicação
        para com o proximo. Foi chamado por Eugénio IV a receber o sacerdócio de
        Cristo em toda a sua plenitude. Tornou-se bispo de Veneza e morreu em
        1455, dizendo: Vou para vós, ó bom Jesus.
      </Typography>

      <Missa />
    </PageWrapper>
  );
}
