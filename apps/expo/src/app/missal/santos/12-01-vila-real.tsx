import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

import Missa from "./../comum/25dedicacaoigreja";

export default function Page1201VilaReal() {
  return (
    <PageWrapper>
      <Text className="h1">
        Na Oitava da Dedicação da Igreja Catedral de Vila Real, a 1 de Dezembro
      </Text>

      <Missa />
    </PageWrapper>
  );
}
