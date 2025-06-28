import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

import Missa from "../comum/sumospontifices";

export default function Page0426() {
  return (
    <PageWrapper>
      <Text className="h1">
        S. S. Cleto e Marcelino, P. P. e Mártires, a 26 de Abril
      </Text>

      <Missa />
    </PageWrapper>
  );
}
