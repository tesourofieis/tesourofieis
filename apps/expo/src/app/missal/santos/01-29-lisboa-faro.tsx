import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

import Missa from "./01-22-lisboa-faro";

export default function Page0129LisboaFaro() {
  return (
    <PageWrapper>
      <Text className="h1">
        Na Oitava de S. Vicente, Mártir, a 29 de Janeiro
      </Text>

      <Missa />
    </PageWrapper>
  );
}
