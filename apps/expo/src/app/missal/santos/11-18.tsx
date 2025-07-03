import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

import Missa from "../comum/25dedicacaoigreja";

export default function Page1118() {
  return (
    <PageWrapper>
      <Text className="h1">
        Dedic. da Basílica dos S. S. Pedro e Paulo, a 18 de Novembro
      </Text>

      <Missa />
    </PageWrapper>
  );
}
