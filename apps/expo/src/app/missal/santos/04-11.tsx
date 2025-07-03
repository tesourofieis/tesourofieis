import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

import Missa from "../comum/sumospontifices";

export default function Page0411() {
  return (
    <PageWrapper>
      <Text className="h1">S. Leão I, Papa, Conf. e Doutor, a 11 de Abril</Text>

      <Missa />
    </PageWrapper>
  );
}
