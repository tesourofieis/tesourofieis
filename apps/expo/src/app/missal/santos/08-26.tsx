import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Missa from "../comum/sumospontifices";

export default function Page0826() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Zeferino, Papa e Mártir, a 26 de Agosto</Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
