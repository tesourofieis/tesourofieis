import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Missa from "../comum/7muitosmartires2";

export default function Page0806Outro() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. S. Sixto, Felicíssimo e Agapito, Márts., a 6 de Agosto
          </Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
