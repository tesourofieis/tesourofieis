import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

import Missa from "../comum/sumospontifices";

export default function Page0422() {
  return (
    <PageWrapper>
      <Text className="h1">
        S. S. Sotero e Caio, P. P. e Mártires, a 22 de Abril
      </Text>

      <Missa />
    </PageWrapper>
  );
}
