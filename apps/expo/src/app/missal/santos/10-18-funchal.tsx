import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

import Missa from "../comum/25dedicacaoigreja";

export default function Page1018Funchal() {
  return (
    <PageWrapper>
      <Text className="h1">
        Na Oitava da Dedicação da Igreja Catedral do Funchal, a 18 de Outubro
      </Text>

      <Missa />
    </PageWrapper>
  );
}
