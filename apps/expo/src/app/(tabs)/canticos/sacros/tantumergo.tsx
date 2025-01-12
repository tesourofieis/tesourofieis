import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageTantumergo() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Tantum ergo</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Tantum ergo Sacramentum Veneremur cernui: Et antiquum documentum
              Novo cedat ritui: Præstet fides supplementum Sensuum defectui.
              Genitori, Genitoque Laus et iubilatio, Salus, honor, virtus quoque
              Sit et benedictio: Procedenti ab utroque Compar sit laudatio.
              Amen.
            </Text>
            <Text className="text-base">
              Adoremos, pois, prostrados tão augusto Sacramento: cedam os ritos
              antigos o lugar ao novo Mystério e que a fé supra a fraqueza dos
              nossos sentidos. Glória, honra, louvor, poder, acção de graças e
              bênçãos sejam dadas ao Pai, e ao Filho: e dêem-se iguais louvores
              Àquele que procede de um e do outro. Amen.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
