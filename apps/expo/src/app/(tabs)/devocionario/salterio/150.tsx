import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page150() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Salmo 150</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Laudáte Dóminum in sanctis ejus: * laudáte eum in firmaménto
              virtútis ejus.
            </Text>
            <Text className="text-base">
              Louvai o Senhor no seu santuário: * louvai-O no seu augusto
              firmamento.
            </Text>
            <Text className="text-base">
              Laudáte eum in virtútibus ejus: * laudáte eum secúndum
              multitúdinem magnitúdinis ejus.
            </Text>
            <Text className="text-base">
              Louvai-O nas suas virtudes: * louvai-O segundo a multitude da sua
              grandeza.
            </Text>
            <Text className="text-base">
              Laudáte eum in sono tubæ: * laudáte eum in psaltério, et cíthara.
            </Text>
            <Text className="text-base">
              Louvai-O ao som da trombeta: * louvai-O com o saltério e a cítara.
            </Text>
            <Text className="text-base">
              Laudáte eum in týmpano, et choro: * laudáte eum in chordis, et
              órgano.
            </Text>
            <Text className="text-base">
              Louvai-O com timbales e em coro: * louvai-O com cordas e órgão.
            </Text>
            <Text className="text-base">
              Laudáte eum in cýmbalis benesonántibus: laudáte eum in cýmbalis
              jubilatiónis: * omnis spíritus laudet Dóminum.
            </Text>
            <Text className="text-base">
              Louvai-O com címbalos melodiosos: louvai-O com címbalos de júbilo:
              * todo o espírito louve o Senhor.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
