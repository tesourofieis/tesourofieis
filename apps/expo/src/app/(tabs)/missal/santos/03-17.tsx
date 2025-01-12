import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0317() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Patrício, B. e Conf., a 17 de Março</Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Deus, qui ad prædicándam géntibus glóriam tuam beátum Patrícium
              Confessórem atque Pontíficem míttere dignátus es: ejus méritis et
              intercessióne concéde; ut, quæ nobis agénda prǽcipis, te miseránte
              adimplére póssimus. Per Dóminum nostrum...
            </Text>
            <Text className="text-base">
              Ó Deus, que Vos dignastes mandar B. Patrício, Confessor e Bispo,
              anunciar a vossa glória aos gentios, concedei-nos pelos seus
              méritos e intercessão que com o socorro da vossa misericórdia
              possamos cumprir o que nos ordenais. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
