import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

import Missa from "../comum/25dedicacaoigreja";

export default function Page1023Angra() {
  return (
    <PageWrapper>
      <Text className="h1">
        Na Oitava da Dedicação da Igreja Catedral de Angra, a 23 de Outubro
      </Text>

      <Missa />
    </PageWrapper>
  );
}
