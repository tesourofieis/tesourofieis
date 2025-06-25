import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Missa from "../comum/25dedicacaoigreja";

export default function Page1016Angra() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Na Dedicação da Igreja Catedral de Angra, a 16 de Outubro
          </Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
