import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

import Missa from "../comum/sumospontifices";

export default function Page1112() {
  return (
    <PageWrapper>
      <Text className="h1">S. Martinho, Papa e Mártir, a 12 de Novembro</Text>

      <Missa />
    </PageWrapper>
  );
}
