import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageNuncdimittis() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Nunc Dimíttis</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Nunc dimíttis, servum tuum, Dómine, * secúndum verbum tuum in
              pace:
            </Text>
            <Text className="text-base">
              Agora, Senhor, deixareis ir em paz o vosso servo, * segundo a
              vossa palavra:
            </Text>
            <Text className="text-base">
              Quia vidérunt óculi mei * salutáre tuum,
            </Text>
            <Text className="text-base">
              Pois os meus olhos já viram * a vossa salvação,
            </Text>
            <Text className="text-base">
              Quod parásti * ante fáciem ómnium populórum,
            </Text>
            <Text className="text-base">
              E que preparastes * ante a face de todos os povos,
            </Text>
            <Text className="text-base">
              Lumen ad revelatiónem Géntium, * et glóriam plebis tuæ Israël.
            </Text>
            <Text className="text-base">
              Luz para se revelar às nações, * e glória de Israel, vosso povo.
            </Text>
            <Text className="text-base">
              ℣. Glória Patri, et Fílio, et Spíritui Sancto.
            </Text>
            <Text className="text-base">
              ℣. Glória ao Pai, e ao Filho e ao Espírito Santo.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Sicut erat in pricípio,
              et nunc, et semper, et in sǽcula sæculórum. Amen.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Assim como era no
              princípio, agora e sempre, e por todos os séculos dos séculos.
              Amen.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
