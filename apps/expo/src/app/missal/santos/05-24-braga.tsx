import { Link } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page0524Braga() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Trasl. das Rel. de S. Tiago Intercísio, a 24 de Maio, Arquidiocese
            de Braga e noutros lugares
          </Text>

          <Text className="aside">
            Como na
            <Link href="/missal/santos/05-04-portugal">
              Missa da Trasladação das Relíquias de S. Vicente,
            </Link>
            alterando-se com o nome deste Santo.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
