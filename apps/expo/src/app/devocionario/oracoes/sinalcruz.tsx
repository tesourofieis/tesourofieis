import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageSinalCruz() {
  return (
    <PageWrapper>
      <Text className="h2">Sinal da Cruz</Text>
      <Language>
        <Text className="latin">
          <Text className="cross"> ✠ </Text> In nómine Patris, et Fílii, et
          Spíritus Sancti.
        </Text>
        <Text className="vernacular">
          <Text className="cross"> ✠ </Text> Em nome do Pai e do Filho e do
          Espírito Santo.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
      </Language>
    </PageWrapper>
  );
}
