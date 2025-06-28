import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

import Missa from "../comum/25dedicacaoigreja";

export default function Page1124VilaReal() {
  return (
    <PageWrapper>
      <Text className="h1">
        Na Dedicação da Igreja Catedral de Vila Real, a 24 de Novembro
      </Text>

      <Missa />
    </PageWrapper>
  );
}
