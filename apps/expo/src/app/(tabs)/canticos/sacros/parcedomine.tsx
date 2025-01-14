import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageParcedomine() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Parce domine</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              ℣. Parce, Domine, parce populo tuo:
            </Text>
            <Text className="text-base vernacular">
              ℣. Perdoai, Senhor, perdoai ao vosso povo.
            </Text>
            <Text className="text-base latin">
              <Text className="text-red-500">℟.</Text> Ne in aeternum irascaris
              nobis.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-red-500">℟.</Text> Não fiqueis sempre
              irritado contra nós.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
