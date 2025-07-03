import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

import Missa from "./../pentecostes/pent3-0";

export default function PageCoracaojesus() {
  return (
    <PageWrapper>
      <Text className="h1">Missa do Santíssimo Coração de Jesus</Text>

      <Missa />
    </PageWrapper>
  );
}
