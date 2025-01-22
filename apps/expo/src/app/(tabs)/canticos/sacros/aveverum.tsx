import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageAveverum() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Ave verum</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Ave verum corpus, natum de Maria Virgine, vere passum, immolatum
              in cruce pro homine cuius latus perforatum fluxit aqua et
              sanguine: esto nobis praegustatum in mortis examine. O Jesu
              dulcis, O Jesu pie, O Jesu, fili Mariae. Miserere mei. Amen.
            </Text>
            <Text className="text-base vernacular">
              Salve, verdadeiro Corpo nascido da Virgem Maria, verdadeiramente
              atormentado, imolado na cruz pelos homens, de cujo lado perfurado
              fluíram água e sangue; sê para nós uma antecipação na provação da
              morte. Ó Jesus doce, ó Jesus piedoso, ó Jesus, filho de Maria!
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
