import { Link } from "expo-router";

import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

export default function Page0603() {
  return (
    <PageWrapper>
      <Text className="h1">
        S. Ovídio, B. e Mártir, a 3 de Junho, Na Arquidiocese de Braga e noutras
        Dioceses
      </Text>
      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/9martir">
          Missa Protexísti me,
        </Link>{" "}
        excepto: Fora do Tempo Pascal como na
        <Link className="link" href="/missal/comum/12confessorespontifices2">
          Missa Sacerdótes tui,
        </Link>{" "}
        excepto:
      </Text>
      <Text className="h3">Oração</Text>Ó Deus, que maravilhosamente ilustrastes
      a vossa Igreja com a pregação apostólica do B. Ovídio, vosso Mártir e
      Pontífice, concedei-nos propício que intercedam por nós os sufrágios
      daquele de quem recebemos o incremento da religião. Por nosso Senhor...
    </PageWrapper>
  );
}
