import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Missa from "../comum/13doutores";

export default function Page0404() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Isidoro, B. Conf. e Doutor, a 4 de Abril
          </Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
