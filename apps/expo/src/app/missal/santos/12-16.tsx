import { Typography } from "~/components/typography";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

import Missa from "../comum/3martirpontifice";

export default function Page1216() {
  return (
    <PageWrapper>
      <H1 text="S. Eusébio, B. e Márt., a 16 de Dezembro" />

      <Typography className="comment">
        S. Eusébio, nasceu na Sardenha no século IV, época em que o Arianismo se
        esforçava por abalar o dogma da Divindade de Cristo. Feito bispo de
        Verceil, na Itália secundou os esforços do Papa Libério e de seu
        sucessor S. Damásio, cuja festa celebrámos há poucos dias. Irritaram-se
        vivamente contra ele os Arianos e, depois de maltratá-lo cruelmente,
        obtiveram o seu exílio. A Missa descreve as numerosas perseguições que
        lhe fizeram os hereges. Constante no meio das provas, como diz a
        Epístola, confortou o clero e o povo de Verceil por suas cartas. A
        Igreja lhe dá o título de Mártir, embora não tenha ele derramado o seu
        sangue, devido à generosidade que mostrou nos sofrimentos e intrepidez
        em face da morte (Ev.) (371). Confessemos com Eusébio a divindade do
        Messias cujo advento esperamos.
      </Typography>

      <Missa />
    </PageWrapper>
  );
}
