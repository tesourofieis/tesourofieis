import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

import Missa from "../comum/25dedicacaoigreja";

export default function Page1022() {
  return (
    <PageWrapper>
      <Text className="h1">
        Dedicação da Basílica de Mafra, a 22 de Outubro
      </Text>

      <Missa />
    </PageWrapper>
  );
}
