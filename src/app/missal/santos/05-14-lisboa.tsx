import { MissalRefLink as Link } from "~/components/MissalRefLink";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0514Lisboa() {
  return (
    <PageWrapper>
      <H1 text="S. Gil, Confessor, a 14 de Maio" />

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/14confessoresnaopontifices1">
          Missa Os justi
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Misericórdiam tuam, Deus, súpplices implorámus: ut sicut, ea præveniénte, beátum Ægídium
          in viam justitiæ et sanctitátis redíre fecísti; ita nos e servitúte ac morte peccáti in
          perféctam tránsferas libertátem et vitam. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Humildemente imploramos a vossa misericórdia, ó Deus, a fim de que, assim como em virtude
          dela permitistes que o B. Gil regressasse ao caminho da justiça e da santidade, assim
          também nos trasladeis do caminho da escravidão e da morte do pecado para o da liberdade e
          da vida perfeita. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
