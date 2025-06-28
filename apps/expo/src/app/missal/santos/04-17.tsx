import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

import Missa from "../comum/sumospontifices";

export default function Page0417() {
  return (
    <PageWrapper>
      <Text className="h1">S. Aniceto, Papa e Mártir, a 17 de Abril</Text>

      <Missa />
    </PageWrapper>
  );
}
