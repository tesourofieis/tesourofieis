import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

import Missa from "../comum/sumospontifices";

export default function Page0620() {
  return (
    <PageWrapper>
      <Text className="h1">S. Silvério, Papa e Mártir, a 20 de Junho</Text>

      <Missa />
    </PageWrapper>
  );
}
