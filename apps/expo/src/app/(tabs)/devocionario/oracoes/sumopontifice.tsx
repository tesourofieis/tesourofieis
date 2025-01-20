import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageSumopontifice() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Pro Summo Pontifice</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              ℣. Orémus pro Pontífice nostro N.
            </Text>
            <Text className="text-base vernacular">
              ℣. Oremos pelo nosso Pontífice N.
            </Text>
            <Text className="text-base latin">
              <Text className="text-red-500">℟. </Text> Dóminus consérvet eum,
              et vivíficet eum, et beátum fáciat eum in terra, et non tradat eum
              in ánimam inimicórum ejus.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-red-500">℟. </Text> Que o Senhor o conserve
              e vivifique, que o faça santo na terra e o não entregue à vontade
              dos seus inimigos.
            </Text>
            <Text className="text-base latin">
              Pater Noster... Ave Maria...
            </Text>
            <Text className="text-base vernacular">
              Pai Nosso... Ave Maria...
            </Text>
            <Text className="text-base latin">
              <Text className="text-base latin">℣. </Text>Deus, ómnium fidélium
              pastor et rector, fámulum tuum N., quem pastórem Ecclésiæ tuæ
              præésse voluísti, propítius réspice: da ei, quǽsumus, verbo et
              exémplo, quibus præest, profícere: ut ad vitam, una cum grege sibi
              crédito, pervéniat sempitérnam. Per Christum, Dóminum nostrum.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">℣. </Text>Ó Deus, pastor e
              guia de todos os fieis, olhai misericordiosamente sobre vosso
              Servo N. que escolheestes para pastor da vossa Igreja;
              concedei-lhe que, com sua palavra e exemplo, encaminhe o rebanho
              que lhe confiastes, e juntamente com ele, possa alcançar a vida
              eterna. Por Cristo Senhor nosso.
            </Text>
            <Text className="text-base latin">
              <Text className="text-red-500">℟. </Text>Amen.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-red-500">℟. </Text>Amen.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
