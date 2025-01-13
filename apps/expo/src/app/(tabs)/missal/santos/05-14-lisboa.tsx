import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0514Lisboa() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Gil, Confessor, a 14 de Maio</Text>

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
              Misericórdiam tuam, Deus, súpplices implorámus: ut sicut, ea
              præveniénte, beátum Ægídium in viam justitiæ et sanctitátis redíre
              fecísti; ita nos e servitúte ac morte peccáti in perféctam
              tránsferas libertátem et vitam. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Humildemente imploramos a vossa misericórdia, ó Deus, a fim de
              que, assim como em virtude dela permitistes que o B. Gil
              regressasse ao caminho da justiça e da santidade, assim também nos
              trasladeis do caminho da escravidão e da morte do pecado para o da
              liberdade e da vida perfeita. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
