import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Missa from "../comum/sumospontifices";

export default function Page1112() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Martinho, Papa e Mártir, a 12 de Novembro
          </Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
