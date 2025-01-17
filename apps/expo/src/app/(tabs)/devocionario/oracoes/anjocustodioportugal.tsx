import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageAnjocustodioportugal() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Anjo Custódio de Portugal</Text>
          <Text className="text-base">
            Ó Deus omnipotente e sempiterno, que com inefável providência
            destinais para cada nação um Anjo, que a guarde, concedei-nos, Vos
            suplicamos, que, pelas súplicas e pelo patrocínio do Anjo Custódio
            da nossa Nação, sejamos sempre livres de todas as adversidades.
            Amen.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
