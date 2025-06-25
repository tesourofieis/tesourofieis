import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";

export default function Page116() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Salmo 116</Text>

          <Language>
            <Text className="latin">
              Laudáte Dóminum, omnes gentes: * laudáte eum, omnes pópuli:
            </Text>
            <Text className="vernacular">
              Ó gentes, louvai todas o Senhor: * louvai-O todos, ó povos:
            </Text>
            <Text className="latin">
              Quóniam confirmáta est super nos misericórdia ejus: * et véritas
              Dómini manet in ætérnum.
            </Text>
            <Text className="vernacular">
              Porque sobre nós foi confirmada a sua misericórdia: * e a verdade
              do Senhor permanece eternamente.
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
