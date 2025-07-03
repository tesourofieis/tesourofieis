import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

import Missa from "../comum/sumospontifices";

export default function Page0923() {
  return (
    <PageWrapper>
      <Text className="h1">S. Lino, Papa e Mártir, a 23 de Setembro</Text>

      <Missa />
    </PageWrapper>
  );
}
