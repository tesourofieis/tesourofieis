import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Missa from "../comum/16abades";

export default function Page0321() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Bento, Abade, a 21 de Março</Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
