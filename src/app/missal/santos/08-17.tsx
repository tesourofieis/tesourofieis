import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

import Missa from "../comum/14confessoresnaopontifices1";

export default function Page0817() {
  return (
    <PageWrapper>
      <H1 text="S. Jacinto, Conf., a 17 de Agosto" />

      <Typography className="comment">
        S. Jacinto, chamado o Apóstolo do Norte, nasceu em 1185 no castelo de Kamin, perto de
        Breslau. Foi, em Roma, recebido na Ordem dos Irmãos Pregadores pelo próprio fundador, S.
        Domingos, na igreja de Santa Sabina. Com a idade de 33 annos, foi estabelecido superior da
        missão enviada pelo Santo à Polónia. Jacinto percorreu, então a Áustria, a Polónia, a
        Dinamarca, a Suécia, a Escócia e a Livônia, pregando por toda a parte a palavra de Deus,
        confirmada por seus numerosos milagres. Morreu no dia da Assunção, em 1257.
      </Typography>

      <Missa />
    </PageWrapper>
  );
}
