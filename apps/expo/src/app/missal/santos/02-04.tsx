import { Typography } from "~/components/typography";
import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0204() {
  return (
    <PageWrapper>
      <H1 text="S. André Corsino, B. e Conf., a 4 de Fevereiro" />

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/11confessorespontifices1">
          Missa Státuit ei
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui in Ecclésia tua nova semper instáuras exémpla virtútum: da
          pópulo tuo beáti Andréæ Confessóris tui atque Pontíficis ita sequi
          vestígia; ut assequátur et prǽmia. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que na vossa Igreja apresentais constantemente novos exemplos
          de virtudes, concedei ao vosso povo que de tal modo siga os vestígios
          do B. André, vosso Confessor e Pontífice, que possa alcançar o mesmo
          prémio. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
