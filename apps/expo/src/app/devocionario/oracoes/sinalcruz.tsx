import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageSinalCruz() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h2">Sinal da Cruz</Text>
          <View className="side-by-side">
            <Text className="latin">
              <Text className="cross"> ✠ </Text> In nómine Patris, et Fílii, et
              Spíritus Sancti.
            </Text>
            <Text className="vernacular">
              <Text className="cross"> ✠ </Text> Em nome do Pai e do Filho e do
              Espírito Santo.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
