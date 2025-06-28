import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

import Missa from "./adv1-0";

export default function PageAdv12() {
  return (
    <PageWrapper>
      <Text className="h1">Terça-feira da 1ª semana do Advento</Text>

      <Missa />
    </PageWrapper>
  );
}
