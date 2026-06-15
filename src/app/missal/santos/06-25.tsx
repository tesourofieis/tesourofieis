import { MissalRefLink as Link } from "~/components/MissalRefLink";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0625() {
  return (
    <PageWrapper>
      <H1 text="S. Guilherme, Abade, a 25 de Junho" />

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/16abades">
          Missa Os justi
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui infirmitáti nostræ ad teréndam salútis viam in Sanctis tuis exémplum et
          præsídium collocásti: da nobis, ita beáti Guliélmi Abbátis mérita venerári; ut ejúsdem
          excipiámus suffrágia et vestígia prosequámur. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que para facilitar à nossa fraqueza o caminho da salvação no auxiliais com o
          exemplo e com a assistência dos vossos Santos, concedei-nos a graça de imitar os méritos
          do B. Abade Guilherme de modo que mereçamos o socorro das suas preces e sigamos os seus
          passos. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
