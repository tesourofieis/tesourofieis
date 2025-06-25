import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page0301Braga() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            B. Miguel de Carvalho e Outros, Márts., a 1 de Março, Na
            Arquidiocese de Braga
          </Text>
          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/7muitosmartires2">
              Missa Sapiéntiam sanctórum
            </Link>{" "}
            , excepto:
          </Text>
          <Text className="h3">Oração</Text>
          <Text className="text-base">
            Senhor, que os vossos B. B. Miguel e seus Companheiros nos confortem
            com sua preciosa profissão de fé; e que pela sua piedosa intercessão
            sejamos continuamente favorecidos. Por nosso Senhor...
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
