import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Missa from "../comum/sumospontifices";

export default function Page0426() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. S. Cleto e Marcelino, P. P. e Mártires, a 26 de Abril
          </Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
