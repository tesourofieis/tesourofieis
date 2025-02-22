import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageActocaridade() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Acto de Caridade</Text>

          <View className="side-by-side">
            <Text className="latin">
              Dómine Deus, amo te super ómnia et próximum meum propter te, quia
              tu es summum, infinítum, et perfectíssimum bonum, omni dilectióne
              dignum. In hac caritáte vívere et mori státuo. Amen.
            </Text>
            <Text className="vernacular">
              Senhor Deus, amo-Vos sobre todas as coisas e a meu próximo por
              causa de Vós, porque Vós sois o sumo bem, infinito e
              perfeitíssimo, digno de todo amor. Nesta caridade, é minha
              determinação viver e morrer. Amen.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
