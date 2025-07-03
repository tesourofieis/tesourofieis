import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

import Missa from "./adv3-0";

export default function PageAdv32() {
  return (
    <PageWrapper>
      <Text className="h1">Terça-feira da 3ª semana do Advento</Text>

      <Missa />
    </PageWrapper>
  );
}
