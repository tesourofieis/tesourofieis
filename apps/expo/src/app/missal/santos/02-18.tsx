import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Missa from "../comum/2martirpontificeforapascal";

export default function Page0218() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Simeão, B. e Mártir, a 18 de Fevereiro</Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
