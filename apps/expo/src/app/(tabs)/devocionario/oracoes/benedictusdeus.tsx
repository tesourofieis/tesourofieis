import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageBenedictusdeus() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Benedictus Deus</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Benedíctus Deus, et Pater Dómini nostri Jesu Christi, Pater
              misericordiárum, et Deus totíus consolationis, qui consolátur nos
              in omni tribulatióne nostra.
            </Text>
            <Text className="text-base">
              Bendito seja Deus, e Pai de nosso Senhor Jesus Cristo, Pai de
              misericórdias e Deus de todas as consolações, O qual nos consola
              em toda nossa tribulação.
            </Text>
            <Text className="text-base">Deo grátias.</Text>
            <Text className="text-base">Graças a Deus.</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
