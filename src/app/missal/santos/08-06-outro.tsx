import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

import Missa from "../comum/7muitosmartires2";

export default function Page0806Outro() {
  return (
    <PageWrapper>
      <H1 text="S. S. Sixto, Felicíssimo e Agapito, Márts., a 6 de Agosto" />

      <Typography className="comment">
        O Papa S. Sixto II foi martirizado com os dois diáconos Felicíssimo e Agapito, no III
        século, por ocasião da cruel perseguição de Décio. Seu nome acha-se inscrito no Canon da
        Missa entre os Papas. Lourenço, seu arquidiácono, vendo-o conduzido ao suplício, exclamou:
        Porque me abandonais, ó Pai, vós que nunca oferecíeis o sacrifício sem vosso diácono? Sixto
        respondeu-lhe: dentro de três dias me seguireis. O aniversário do martírio de São Lourenço
        celebrar-se-á dentro de três
      </Typography>

      <Missa />
    </PageWrapper>
  );
}
