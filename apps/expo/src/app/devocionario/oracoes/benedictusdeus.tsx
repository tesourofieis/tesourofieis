import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageBenedictusdeus() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Benedictus Deus</Text>

          <View className="side-by-side">
            <Text className="latin">
              Benedíctus Deus, et Pater Dómini nostri Jesu Christi, Pater
              misericordiárum, et Deus totíus consolationis, qui consolátur nos
              in omni tribulatióne nostra.
            </Text>
            <Text className="vernacular">
              Bendito seja Deus, e Pai de nosso Senhor Jesus Cristo, Pai de
              misericórdias e Deus de todas as consolações, O qual nos consola
              em toda nossa tribulação.
            </Text>
            <Text className="latin">Deo grátias.</Text>
            <Text className="vernacular">Graças a Deus.</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
