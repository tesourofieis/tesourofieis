import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0424() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Fiel de Sigmaringen, Mártir, a 24 de Abril
          </Text>

          <View className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/9martir">
              Missa Protexísti me
            </Link>{" "}
            , excepto:
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Deus, qui beátum Fidelem, seráphico spíritus ardore succénsum, in
              veræ fídei propagatióne martýrii palma et gloriósis miráculis
              decoráre dignátus es: ejus, quǽsumus, méritis et intercessióne,
              ita nos per grátiam tuam in fide et caritáte confírma; ut in
              serívtio tuo fidéles usque ad mortem inveníri mereámur. Per
              Dóminum...
            </Text>
            <Text className="text-base">
              Ó Deus, que na propagação da fé Vos dignastes ilustrar com a palma
              do martírio e com gloriosos milagres o B. Fiel, cujo coração ardia
              de amor seráfico, Vos suplicamos, pela vossa graça e pelos seus
              méritos e intercessão, que arraigueis na nossa alma de tal modo a
              fé e a caridade que mereçamos ser fiéis no vosso serviço até à
              morte. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
