import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0324Portugal() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Festa do Santíssimo Sacramento, a 24 de Março
          </Text>

          <View className="aside">
            Em todoas as igrejas de Portugal é permitido, neste dia, celebrar em
            honra do Santíssimo Sacramento, a Missa, que será do [Santíssimo
            Corpo de Cristo](/missal/pentecostes/pent1-4), com Glória e Credo.
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
