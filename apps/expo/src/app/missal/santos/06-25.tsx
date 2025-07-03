import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";


import { Text } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0625() {
  return (
    <PageWrapper>
      <H1 text="S. Guilherme, Abade, a 25 de Junho" />

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/16abades">
          Missa Os justi
        </Link>{" "}
        , excepto:
      </Text>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Deus, qui infirmitáti nostræ ad teréndam salútis viam in Sanctis tuis
          exémplum et præsídium collocásti: da nobis, ita beáti Guliélmi Abbátis
          mérita venerári; ut ejúsdem excipiámus suffrágia et vestígia
          prosequámur. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que para facilitar à nossa fraqueza o caminho da salvação no
          auxiliais com o exemplo e com a assistência dos vossos Santos,
          concedei-nos a graça de imitar os méritos do B. Abade Guilherme de
          modo que mereçamos o socorro das suas preces e sigamos os seus passos.
          Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
