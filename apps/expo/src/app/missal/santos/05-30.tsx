import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

import Missa from "../comum/sumospontifices";

export default function Page0530() {
  return (
    <PageWrapper>
      <Text className="h1">S. Félix, Papa e Mártir, a 30 de Maio</Text>

      <Missa />
    </PageWrapper>
  );
}
