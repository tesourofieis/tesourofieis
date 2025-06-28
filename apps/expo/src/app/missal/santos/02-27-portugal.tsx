import { Link } from "expo-router";

import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

export default function Page0227Portugal() {
  return (
    <PageWrapper>
      <Text className="h1">S. Torquato, Bispo e Mártir, a 27 de Fevereiro</Text>
      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/5martirnaopontifice2">
          Missa Lætábitur justus
        </Link>{" "}
        , excepto:
      </Text>
      <Text className="h3">Oração</Text>
      <Text className="text-base">
        Dignai-Vos ouvir clementemente, Senhor, as preces do vosso povo, a fim
        de que sejamos auxiliados pelos méritos do B. Torquato, vosso Mártir e
        Pontífice, em cujo martírio nos alegramos. Por nosso Senhor...
      </Text>
    </PageWrapper>
  );
}
