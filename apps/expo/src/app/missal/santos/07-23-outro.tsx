import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

import Missa from "../comum/11confessorespontifices1";

export default function Page0723Outro() {
  return (
    <PageWrapper>
      <Text className="h1">S. Libório, B, e Conf., a 23 de Julho</Text>

      <Text className="comment">
        São Libório nasceu no século IV, de familia gaulesa. Deixou tudo para
        consagrar-se ao serviço do altar. Foi bispo de Mans e , após uma vida
        dedicada à pregação, às orações e austeridades, morreu em 397.
      </Text>

      <Missa />
    </PageWrapper>
  );
}
