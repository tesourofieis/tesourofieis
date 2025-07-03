import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

import Missa from "./../comum/25dedicacaoigreja";

export default function Page1123CoimbraBraganca() {
  return (
    <PageWrapper>
      <Text className="h1">
        Na Oitava da Dedicação das Igrejas Catedrais de Bragança e Coimbra, a 23
        de Novembro
      </Text>

      <Missa />
    </PageWrapper>
  );
}
