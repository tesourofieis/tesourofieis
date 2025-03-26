import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Language from "~/components/Language";

export default function Page0514Lisboa() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Gil, Confessor, a 14 de Maio</Text>

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
              Misericórdiam tuam, Deus, súpplices implorámus: ut sicut, ea
              præveniénte, beátum Ægídium in viam justitiæ et sanctitátis redíre
              fecísti; ita nos e servitúte ac morte peccáti in perféctam
              tránsferas libertátem et vitam. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Humildemente imploramos a vossa misericórdia, ó Deus, a fim de
              que, assim como em virtude dela permitistes que o B. Gil
              regressasse ao caminho da justiça e da santidade, assim também nos
              trasladeis do caminho da escravidão e da morte do pecado para o da
              liberdade e da vida perfeita. Por nosso Senhor...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
