import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageParcedomine() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Parce domine</Text>

          <View className="side-by-side">
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Parce, Domine, parce populo
              tuo:
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Perdoai, Senhor, perdoai ao
              vosso povo.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Ne in aeternum irascaris
              nobis.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Não fiqueis sempre irritado
              contra nós.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
