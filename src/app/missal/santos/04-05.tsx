import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0405() {
  return (
    <PageWrapper>
      <H1 text="S. Vicente Ferrer, Conf., a 5 de Abril" />

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
          Deus, qui Ecclésiam tuam beáti Vincéntii Confessóris tui méritis et prædicatióne
          illustráre dignátus es: concéde nobis fámulis tuis; ut et ipsíus instruámur exémplis et ab
          ómnibus ejus patrocínio liberémur advérsis. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que Vos dignastes ilustrar a vossa Igreja com os méritos e a pregação do B.
          Vicente, vosso Confessor, concedei a estes vossos servos a graça de serem instruídos com
          seus exemplos e livres de todas as adversidades pela sua protecção. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
