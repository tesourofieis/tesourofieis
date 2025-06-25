import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Missa from "../comum/sumospontifices";

export default function Page0923() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Lino, Papa e Mártir, a 23 de Setembro</Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
