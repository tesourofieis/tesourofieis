import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

import Missa from "../santos/08-22";

export default function Page0513Portugal() {
  return (
    <PageWrapper>
      <Text className="h1">
        Missa Votiva do Imaculado Coração da B. Virgem Maria, a 13 de Maio
      </Text>

      <Missa />
    </PageWrapper>
  );
}
