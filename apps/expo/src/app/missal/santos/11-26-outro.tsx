import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

import Missa from "../comum/2martirpontificeforapascal";

export default function Page1126Outro() {
  return (
    <PageWrapper>
      <Text className="h1">
        S. Pedro Alexandrino, B. e Mártir, a 26 de Novembro
      </Text>

      <Missa />
    </PageWrapper>
  );
}
