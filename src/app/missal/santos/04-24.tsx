import { MissalRefLink as Link } from "~/components/MissalRefLink";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0424() {
  return (
    <PageWrapper>
      <H1 text="S. Fiel de Sigmaringen, Mártir, a 24 de Abril" />

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/9martir">
          Missa Protexísti me
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui beátum Fidelem, seráphico spíritus ardore succénsum, in veræ fídei propagatióne
          martýrii palma et gloriósis miráculis decoráre dignátus es: ejus, quǽsumus, méritis et
          intercessióne, ita nos per grátiam tuam in fide et caritáte confírma; ut in serívtio tuo
          fidéles usque ad mortem inveníri mereámur. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que na propagação da fé Vos dignastes ilustrar com a palma do martírio e com
          gloriosos milagres o B. Fiel, cujo coração ardia de amor seráfico, Vos suplicamos, pela
          vossa graça e pelos seus méritos e intercessão, que arraigueis na nossa alma de tal modo a
          fé e a caridade que mereçamos ser fiéis no vosso serviço até à morte. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
