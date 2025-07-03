import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

import Missa from "./adv1-0";

export default function PageAdv16() {
  return (
    <PageWrapper>
      <Text className="h1">Sábado da 1ª semana do Advento</Text>

      <Missa />
    </PageWrapper>
  );
}
