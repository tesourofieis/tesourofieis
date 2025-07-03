import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";


import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0204() {
  return (
    <PageWrapper>
      <H1 text="S. André Corsino, B. e Conf., a 4 de Fevereiro" />

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/11confessorespontifices1">
          Missa Státuit ei
        </Link>{" "}
        , excepto:
      </Text>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Deus, qui in Ecclésia tua nova semper instáuras exémpla virtútum: da
          pópulo tuo beáti Andréæ Confessóris tui atque Pontíficis ita sequi
          vestígia; ut assequátur et prǽmia. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que na vossa Igreja apresentais constantemente novos exemplos
          de virtudes, concedei ao vosso povo que de tal modo siga os vestígios
          do B. André, vosso Confessor e Pontífice, que possa alcançar o mesmo
          prémio. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
