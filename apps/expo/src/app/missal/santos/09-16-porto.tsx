import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

import Missa from "../comum/25dedicacaoigreja";

export default function Page0916Porto() {
  return (
    <PageWrapper>
      <Text className="h1">
        Na Dedicação da Igreja Catedral do Porto, a 16 de Setembro
      </Text>

      <Missa />
    </PageWrapper>
  );
}
