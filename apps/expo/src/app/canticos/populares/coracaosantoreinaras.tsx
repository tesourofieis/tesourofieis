import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PageCoracaosantoreinaras() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Coração Santo, Tu reinarás</Text>

          <View className="not-content">
            <Text className="text-base">
              Refrão: Coração Santo, Tu reinarás Tu nosso encanto sempre serás
              (Bis).
            </Text>
            <Text className="text-base">{"\n"}</Text>
            <Text className="text-base">
              Como o soldado vela a seu rei, assim meu sangue por Ti darei
              (Bis).
            </Text>
            <Text className="text-base">{"\n"}</Text>
            <Text className="text-base">
              Se o mundo iníquo me combater sempre a Teu lado hei de vencer
              (Bis).
            </Text>
            <Text className="text-base">{"\n"}</Text>
            <Text className="text-base">
              Jesus soberano deixa-me ser teu guarda d´honra até morrer (Bis).
            </Text>
            <Text className="text-base">{"\n"}</Text>
            <Text className="text-base">
              Anjos e arcanjos, santos do céu connosco velam o trono Teu (Bis).
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
