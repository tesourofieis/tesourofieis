import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PageSenhoracarmo() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Nossa Senhora do Carmo</Text>

          <View className="not-content">
            <Text className="text-base">
              Nome de Maria Tão bonito é! Salvai a minha alma Que ela vossa é.
            </Text>
            <Text className="text-base">{"\n"}</Text>
            <Text className="text-base">
              Senhora do Carmo Mandou-me um recado Que reze três vêzes Bendito e
              louvado.
            </Text>
            <Text className="text-base">{"\n"}</Text>
            <Text className="text-base">
              Bendito e louvado Eu hei-de rezar Senhora do Carmo Me há-de
              ajudar.
            </Text>
            <Text className="text-base">{"\n"}</Text>
            <Text className="text-base">
              No Céu três mesuras Ao peso da Cruz; reza-se três vêzes Salvai-me
              Jesus!... Salvai-me Jesus!... Salvai-me Jesus!...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
