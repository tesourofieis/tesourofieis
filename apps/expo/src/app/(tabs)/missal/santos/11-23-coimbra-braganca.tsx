import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Missa from "./../comum/25dedicacaoigreja";

export default function Page1123CoimbraBraganca() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Na Oitava da Dedicação das Igrejas Catedrais de Bragança e Coimbra,
            a 23 de Novembro
          </Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
