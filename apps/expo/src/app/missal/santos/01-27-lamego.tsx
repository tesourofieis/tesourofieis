import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Missa from "./01-20";

export default function Page0127Lamego() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Na Oitava de S. Sebastião, Mártir, a 27 de Janeiro
          </Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
