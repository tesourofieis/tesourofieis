import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageAvemaria() {
  return (
    <PageWrapper>
      <Text className="h1">Ave Maria</Text>

      <Language>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text>Ave, María, grátia plena,
          Dóminus tecum; benedícta tu in muliéribus, et benedíctus fructus
          ventris tui, Jesus.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>Ave, Maria, Cheia de graça, o
          Senhor é convosco; bendita sois Vós entre as mulheres, e bendito é o
          fruto do Vosso ventre, Jesus.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Sancta María, Mater Dei, ora
          pro nobis peccatóribus, nunc, et in hora mortis nostræ.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Santa Maria, Mãe de Deus, rogai
          por nós, pecadores, agora e na hora da nossa morte.
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
