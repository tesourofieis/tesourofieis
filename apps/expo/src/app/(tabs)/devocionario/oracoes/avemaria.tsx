import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageAvemaria() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Ave Maria</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              ℣. Ave, María, grátia plena, Dóminus tecum; benedícta tu in
              muliéribus, et benedíctus fructus ventris tui, Jesus.
            </Text>
            <Text className="text-base vernacular">
              ℣. Ave, Maria, Cheia de graça, o Senhor é convosco; bendita sois
              Vós entre as mulheres, e bendito é o fruto do Vosso ventre, Jesus.
            </Text>
            <Text className="text-base latin">
              <Text className="text-red-500">℟.</Text> Sancta María, Mater Dei,
              ora pro nobis peccatóribus, nunc, et in hora mortis nostræ.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-red-500">℟.</Text> Santa Maria, Mãe de Deus,
              rogai por nós, pecadores, agora e na hora da nossa morte.
            </Text>
            <Text className="text-base latin">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
