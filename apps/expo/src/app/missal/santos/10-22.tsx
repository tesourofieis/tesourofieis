import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Missa from "../comum/25dedicacaoigreja";

export default function Page1022() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Dedicação da Basílica de Mafra, a 22 de Outubro
          </Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
