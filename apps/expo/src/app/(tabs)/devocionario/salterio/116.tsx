import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page116() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Salmo 116</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Laudáte Dóminum, omnes gentes: * laudáte eum, omnes pópuli:
            </Text>
            <Text className="text-base">
              Ó gentes, louvai todas o Senhor: * louvai-O todos, ó povos:
            </Text>
            <Text className="text-base">
              Quóniam confirmáta est super nos misericórdia ejus: * et véritas
              Dómini manet in ætérnum.
            </Text>
            <Text className="text-base">
              Porque sobre nós foi confirmada a sua misericórdia: * e a verdade
              do Senhor permanece eternamente.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
