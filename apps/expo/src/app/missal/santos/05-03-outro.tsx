import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

import Missa from "../comum/sumospontifices";

export default function Page0503Outro() {
  return (
    <PageWrapper>
      <Text className="h1">S. Alexandre, Papa e Mártir, a 3 de Maio</Text>

      <Missa />
    </PageWrapper>
  );
}
