import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Missa from "../comum/sumospontifices";

export default function Page0304Outro() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Lúcio I, Papa e Mártir, a 4 de Março</Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
