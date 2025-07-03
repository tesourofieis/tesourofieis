import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

import Missa from "../comum/sumospontifices";

export default function Page1119Outro() {
  return (
    <PageWrapper>
      <Text className="h1">
        Comemoração de S. Ponciano, Papa e Mártir, a 19 de Agosto
      </Text>

      <Missa />
    </PageWrapper>
  );
}
