import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

import Missa from "./adv4-0";

export default function PageAdv42() {
  return (
    <PageWrapper>
      <Text className="h1">Terça-feira da 4ª semana do Advento</Text>

      <Missa />
    </PageWrapper>
  );
}
