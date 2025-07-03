import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

import Missa from "../comum/3martirpontifice";

export default function Page0203() {
  return (
    <PageWrapper>
      <Text className="h1">S. Brás, B. e Márt., a 3 de Fevereiro</Text>

      <Missa />
    </PageWrapper>
  );
}
