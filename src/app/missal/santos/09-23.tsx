import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

import Missa from "../comum/sumospontifices";

export default function Page0923() {
  return (
    <PageWrapper>
      <H1 text="S. Lino, Papa e Mártir, a 23 de Setembro" />

      <Typography className="comment">
        Em Roma, diz o Martyrologio Romano, triunfo de São Lino, Papa e Martyr, successor immediato
        de S. Pedro no governo da Igreja. Sofreu o martírio, sendo sepultado no Vaticano, perto
        daquele Apostolo». O nome de S. Lino acha-se no Canon da Missa, depois dos Apóstolos (1ª
        lista, p. 89).
      </Typography>

      <Missa />
    </PageWrapper>
  );
}
