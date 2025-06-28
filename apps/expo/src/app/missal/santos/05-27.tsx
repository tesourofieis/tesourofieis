import { Link } from "expo-router";

import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0527() {
  return (
    <PageWrapper>
      <Text className="h1">S. Beda, Conf. e Doutor, a 27 de Maio</Text>

      <Text className="comment">
        Beda, nascido em Jarrow, no Nortúmbria, desde a mais tenra idade foi
        confiado a S. Bento Biscopo, abade do Mosteiro benedictino de Wearmouth,
        tornando-se também filho do grande Patriarca dos monges do Ocidente.
      </Text>

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/13doutores">
          Missa In médio Ecclésiae
        </Link>{" "}
        , excepto:
      </Text>

      <Text className="h3">Oração</Text>

      <Language>
        <Text className="latin">
          Deus, qui Ecclésiam tuam beáti Bedæ Confessóris tui atque Doctóris
          eruditióne claríficas: concéde propítius fámulis tuis; ejus semper
          ilustrári sapiéntia et méritis adjuvári. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que ilustrais a vossa Igreja com a erudição do B. Beda, vosso
          Confessor e Doutor, concedei propício aos vossos servos que sejam
          sempre ilustrados pela sua doutrina e socorridos pelos seus méritos.
          Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
