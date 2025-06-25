import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Missa from "../comum/13doutores";

export default function Page0421() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Anselmo, B. Conf. e Doutor, a 21 de Abril
          </Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
