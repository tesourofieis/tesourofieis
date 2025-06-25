import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";

export default function Page0304() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Casimiro, Conf., a 4 de Março</Text>

          <Text className="aside">
            Como na{" "}
            <Link
              className="link"
              href="/missal/comum/14confessoresnaopontifices1"
            >
              Missa Os justi
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Deus, qui inter regáles delicias et mundi illécebras sanctum
              Casimírum virtúte constantiæ roborásti: quǽsumus; ut ejus
              intercessióne fidéles tui terréna despíciant, et ad cœléstia
              semper aspírent. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Ó Deus, que no meio das delícias régias e dos atractivos do mundo
              fortalecestes S. Casimiro com a virtude da constância, fazei, Vos
              rogamos, que por sua intercessão os fiéis desprezem os bens
              terrenos e aspirem sempre aos celestiais. Por nosso Senhor...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
