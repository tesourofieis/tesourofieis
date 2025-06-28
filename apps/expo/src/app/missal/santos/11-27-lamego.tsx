import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

import Missa from "../comum/25dedicacaoigreja";

export default function Page1127Lamego() {
  return (
    <PageWrapper>
      <Text className="h1">
        Na Oitava da Dedicação da Igreja Catedral da Lamego, a 27 de Novembro
      </Text>

      <Missa />
    </PageWrapper>
  );
}
