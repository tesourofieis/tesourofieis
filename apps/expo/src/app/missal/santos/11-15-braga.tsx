import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

import Missa from "../comum/25dedicacaoigreja";

export default function Page1115Braga() {
  return (
    <PageWrapper>
      <Text className="h1">
        Na Dedicação da Basílica do Santissimo Coração de Jesus, a 15 de
        Novembro
      </Text>

      <Missa />
    </PageWrapper>
  );
}
