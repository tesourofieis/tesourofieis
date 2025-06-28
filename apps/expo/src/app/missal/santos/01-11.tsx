import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

import Missa from "../comum/sumospontifices";

export default function Page0111() {
  return (
    <PageWrapper>
      <Text className="h1">S. Higino, Papa e Mártir, a 11 de Janeiro</Text>

      <Missa />
    </PageWrapper>
  );
}
