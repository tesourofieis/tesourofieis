import { Text } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

import Missa from "../comum/11confessorespontifices1";

export default function Page1001() {
  return (
    <PageWrapper>
      <H1 text="B. Remígio, B. e Conf., a 1 de Outubro" />

      <Text className="comment">
        Em Reims, nas Gallias, diz o Martyrologio Romano, festa de São Remigio,
        Bispo e Confessor, o qual converteu á fé de Jesus Christo a nação
        franca, conferindo o Baptismo a Clovis, seu rei. Morreu a 13 de Janeiro
        de 533 e a transladação solemne de suas reliquias foi feita a 1º de
        Outubro.
      </Text>

      <Missa />
    </PageWrapper>
  );
}
