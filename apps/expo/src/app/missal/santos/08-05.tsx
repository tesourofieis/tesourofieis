import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

import Missa from "../comum/26festasmaria1";

export default function Page0805() {
  return (
    <PageWrapper>
      <Text className="h1">
        Dedicação de Santa Maria das Neves, a 5 de Agosto
      </Text>

      <Missa />
    </PageWrapper>
  );
}
