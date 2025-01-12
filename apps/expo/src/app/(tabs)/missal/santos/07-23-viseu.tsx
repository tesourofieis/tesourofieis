import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Missa from "../comum/25dedicacaoigreja";

export default function Page0723Viseu() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Na Dedicação da Igreja Catedral de Viseu, a 23 de Julho
          </Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
