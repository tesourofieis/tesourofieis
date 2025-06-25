import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Missa from "../comum/sumospontifices";

export default function Page0916Outro() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Cornélio, Papa e Mártir, a 16 de Setembro
          </Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
