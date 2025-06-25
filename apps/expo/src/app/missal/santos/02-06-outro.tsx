import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import VirgensMartires2 from "./../comum/18virgensmartires2";

export default function Page0206Outro() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Santa Dorotéia, V. e Márt., a 6 de Fevereiro
          </Text>

          <VirgensMartires2 />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
