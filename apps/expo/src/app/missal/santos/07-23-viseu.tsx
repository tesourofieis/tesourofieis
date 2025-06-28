import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

import Missa from "../comum/25dedicacaoigreja";

export default function Page0723Viseu() {
  return (
    <PageWrapper>
      <Text className="h1">
        Na Dedicação da Igreja Catedral de Viseu, a 23 de Julho
      </Text>

      <Missa />
    </PageWrapper>
  );
}
