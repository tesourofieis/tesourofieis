import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0304() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Casimiro, Conf., a 4 de Março</Text>

          <View className="aside">
            Como na{" "}
            <Link
              className="link"
              href="/missal/comum/14confessoresnaopontifices1"
            >
              Missa Os justi
            </Link>{" "}
            , excepto:
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, qui inter regáles delicias et mundi illécebras sanctum
              Casimírum virtúte constantiæ roborásti: quǽsumus; ut ejus
              intercessióne fidéles tui terréna despíciant, et ad cœléstia
              semper aspírent. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, que no meio das delícias régias e dos atractivos do mundo
              fortalecestes S. Casimiro com a virtude da constância, fazei, Vos
              rogamos, que por sua intercessão os fiéis desprezem os bens
              terrenos e aspirem sempre aos celestiais. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
