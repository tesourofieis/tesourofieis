import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

import Missa from "../comum/sumospontifices";

export default function Page1026() {
  return (
    <PageWrapper>
      <Text className="h1">S. Evaristo, Papa e Mártir, a 26 de Outubro</Text>

      <Missa />
    </PageWrapper>
  );
}
