import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

import Missa from "../comum/sumospontifices";

export default function Page0916Outro() {
  return (
    <PageWrapper>
      <Text className="h1">S. Cornélio, Papa e Mártir, a 16 de Setembro</Text>

      <Missa />
    </PageWrapper>
  );
}
