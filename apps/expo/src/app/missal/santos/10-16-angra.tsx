import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

import Missa from "../comum/25dedicacaoigreja";

export default function Page1016Angra() {
  return (
    <PageWrapper>
      <Text className="h1">
        Na Dedicação da Igreja Catedral de Angra, a 16 de Outubro
      </Text>

      <Missa />
    </PageWrapper>
  );
}
