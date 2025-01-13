import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageSinalCruz() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h2">Sinal da Cruz</Text>
          <View className="side-by-side">
            <Text className="text-base latin">
              <Text className="text-base latin">✠</Text> In nómine Patris, et
              Fílii, et Spíritus Sancti.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">✠</Text> Em nome do Pai e
              do Filho e do Espírito Santo.
            </Text>
            <Text className="text-base latin">
              <Text className="text-base latin">℟.</Text> Amen.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">℟.</Text> Amen.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
