import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PageAnjoscantaicomigo() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Ó anjos cantai comigo</Text>

          <View className="not-content">
            <Text className="text-base">
              Ó anjos cantai comigo, ó anjos louvai sem fim, dar graças eu não
              consigo, ó anjos dai-as por mim.
            </Text>
            <Text className="text-base">{"\n"}</Text>
            <Text className="text-base">
              Canta serena minha alma bela jóia em Ti reluz. Já colheste a rica
              palma, já nasceu em mim Jesus.
            </Text>
            <Text className="text-base">{"\n"}</Text>
            <Text className="text-base">
              Ó Jesus que amor tão terno Ó Jesus que amor o Teu, deixas o trono
              supremo vens fazer da terra o céu.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
