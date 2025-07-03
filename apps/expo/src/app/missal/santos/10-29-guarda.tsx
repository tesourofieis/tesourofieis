import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

import Missa from "../comum/25dedicacaoigreja";

export default function Page1029Guarda() {
  return (
    <PageWrapper>
      <Text className="h1">
        Na Oitava da Dedicação da Igreja Catedral da Guarda, a 29 de Outubro
      </Text>

      <Missa />
    </PageWrapper>
  );
}
