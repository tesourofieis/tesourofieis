import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PageActocaridade() {
  return (
    <PageWrapper>
      <H1 text="Acto de Caridade" />

      <Language>
        <Typography className="latin">
          Dómine Deus, amo te super ómnia et próximum meum propter te, quia tu es summum, infinítum,
          et perfectíssimum bonum, omni dilectióne dignum. In hac caritáte vívere et mori státuo.
          Amen.
        </Typography>
        <Typography className="vernacular">
          Senhor Deus, amo-Vos sobre todas as coisas e a meu próximo por causa de Vós, porque Vós
          sois o sumo bem, infinito e perfeitíssimo, digno de todo amor. Nesta caridade, é minha
          determinação viver e morrer. Amen.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
