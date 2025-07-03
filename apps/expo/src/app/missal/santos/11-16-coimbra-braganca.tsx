import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

import Missa from "../comum/25dedicacaoigreja";

export default function Page1116CoimbraBraganca() {
  return (
    <PageWrapper>
      <Text className="h1">
        Na Dedicação das Igrejas Catedrais de Bragança e Coimbra, a 16 de
        Novembro
      </Text>

      <Missa />
    </PageWrapper>
  );
}
