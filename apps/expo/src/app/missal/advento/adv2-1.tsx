import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Missa from "./adv2-0";

export default function PageAdv21() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Segunda-feira da 2ª semana do Advento</Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
