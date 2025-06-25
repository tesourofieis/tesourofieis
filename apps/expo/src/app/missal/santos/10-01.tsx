import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Missa from "../comum/11confessorespontifices1";

export default function Page1001() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">B. Remígio, B. e Conf., a 1 de Outubro</Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
