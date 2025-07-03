import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

import Missa from "../comum/25dedicacaoigreja";

export default function Page1120Lamego() {
  return (
    <PageWrapper>
      <Text className="h1">
        Na Dedicação da Igreja Catedral de Lamego, a 20 de Novembro
      </Text>

      <Missa />
    </PageWrapper>
  );
}
