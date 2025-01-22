import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Missa from "../comum/sumospontifices";

export default function Page0728Outro2() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Inocêncio, Papa e Conf., a 28 de Julho</Text>

          <Text className="comment">
            Inocêncio I nasceu em Albano e viveu no tempo de Santo Agostinho e
            de S. Jerónimo. Este último escreveu a seu respeito: «Guardai a fé
            de Santo Inocêncio que ocupa a cátedra apostólica, sucessor e filho
            espiritual de Anastácio, de feliz memória; não recebais outra
            doutrina por mais sábia e sedutora que pareça». Morreu no ano 417.
          </Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
