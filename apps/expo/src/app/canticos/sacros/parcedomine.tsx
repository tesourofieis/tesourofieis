import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageParcedomine() {
  return (
    <PageWrapper>
      <Text className="h1">Parce domine</Text>

      <Language>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text>Parce, Domine, parce populo tuo:
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>Perdoai, Senhor, perdoai ao
          vosso povo.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Ne in aeternum irascaris nobis.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Não fiqueis sempre irritado
          contra nós.
        </Text>
      </Language>
    </PageWrapper>
  );
}
