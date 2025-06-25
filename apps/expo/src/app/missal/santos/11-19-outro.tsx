import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Missa from "../comum/sumospontifices";

export default function Page1119Outro() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Comemoração de S. Ponciano, Papa e Mártir, a 19 de Agosto
          </Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
