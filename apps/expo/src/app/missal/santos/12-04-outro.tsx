import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

import Missa from "./../comum/17virgensmartires1";

export default function Page1204Outro() {
  return (
    <PageWrapper>
      <Text className="h1">
        Santa Bárbara, Virgem e Mártir, a 4 de Dezembro
      </Text>

      <Text className="comment">
        Morta na Ásia Menor em 235, está na lista dos «Quatorze Santos
        Auxiliadores».
      </Text>

      <Missa />
    </PageWrapper>
  );
}
