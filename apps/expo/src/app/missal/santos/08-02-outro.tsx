import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

import Missa from "../comum/sumospontifices";

export default function Page0802Outro() {
  return (
    <PageWrapper>
      <Text className="h1">S. Estêvão I, Papa e Mártir, a 2 de Agosto</Text>

      <Missa />
    </PageWrapper>
  );
}
