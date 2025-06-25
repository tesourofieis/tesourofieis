import { SafeAreaView, ScrollView, Text, View } from "react-native";

import Missa from "../comum/sumospontifices";

export default function Page0526Outro() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Eleutério, Papa e Mártir, a 26 de Maio</Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
