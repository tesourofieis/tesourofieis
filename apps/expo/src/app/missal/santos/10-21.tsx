import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Missa from "../comum/16abades";

export default function Page1021() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Hilarião, Abade, a 21 de Outubro</Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
