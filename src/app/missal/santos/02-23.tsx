import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0223() {
  return (
    <PageWrapper>
      <H1 text="S. Pedro Damião, B., C. e Doutor, a 23 de Fevereiro" />

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/13doutores">
          Missa In médio Ecclésiae
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Concéde nos, quǽsumus, omnípotens Deus: beáti Petri Confessóris tui
          atque Pontíficis mónita et exémpla sectári; ut per terréstrium rerum
          contémptum ætérna gáudia consequámur. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Concedei-nos, ó Deus omnipotente, Vos suplicamos, que imitemos as
          lições e os exemplos do B. Pedro, vosso Confessor e Pontífice, a fim
          de que pelo desprezo dos bens terrenos alcancemos as alegrias eternas.
          Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
