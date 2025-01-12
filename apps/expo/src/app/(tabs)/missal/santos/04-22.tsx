import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Missa from "../comum/sumospontifices";

export default function Page0422() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. S. Sotero e Caio, P. P. e Mártires, a 22 de Abril
          </Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
