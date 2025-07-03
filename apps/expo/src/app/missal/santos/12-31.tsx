import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

import Missa from "../comum/sumospontifices";

export default function Page1231() {
  return (
    <PageWrapper>
      <Text className="h1">
        S. Silvestre, Papa e Confessor, a 31 de Dezembro
      </Text>

      <Missa />
    </PageWrapper>
  );
}
