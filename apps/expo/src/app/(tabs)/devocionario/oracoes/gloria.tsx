import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageGloria() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Glória</Text>

          <View className="side-by-side">
            <Text className="text-base">
              ℣. Glória Patri, et Fílio, et Spíritui Sancto.
            </Text>
            <Text className="text-base">
              ℣. Glória ao Pai, e ao Filho e ao Espírito Santo.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Sicut erat in pricípio,
              et nunc, et semper, et in sǽcula sæculórum.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Assim como era no
              princípio, agora e sempre, e por todos os séculos dos séculos.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
