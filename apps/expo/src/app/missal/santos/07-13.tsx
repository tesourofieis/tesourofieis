import { Typography } from "~/components/typography";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

import Missa from "../comum/sumospontifices";

export default function Page0713() {
  return (
    <PageWrapper>
      <H1 text="S. Anacleto, Papa e Mártir, a 13 de Julho" />

      <Typography className="comment">
        «Em Roma, diz o Martirológio romano, festa de Santo Anacleto Papa e
        Mártir, que governou a Igreja de Deus e a honrou com ilustre martírio».
        Participando da plenitude do sacerdócio de Cristo (Intr., Ale., Of.), o
        santo Pontífice compartilhou também aos seus sofrimentos (Ep.). Rei das
        almas, não temeu, diante do príncipe deste mundo, e tornou-se uma das
        pedras que constituem, nos primeiros séculos, os fundamentos da Igreja
        (Ev.). Decretou que todo Bispo seria consagrado pelo menos, por três
        Bispos, os clérigos publicamente iniciados nas Ordens Sacras pelo seu
        próprio Bispo e que, terminada a consagração, comungariam todos na
        Missa. Recebeu a coroa do martírio (Com.), depois de ter ocupado a Santa
        Sé cerca de dez anos. Foi sepultado no Vaticano (112).
      </Typography>

      <Missa />
    </PageWrapper>
  );
}
