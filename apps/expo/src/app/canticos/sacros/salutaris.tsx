import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";

export default function PageSalutaris() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Salutaris</Text>

          <Language>
            <Text className="latin">
              O salutaris Hostia, Quæ cæli pandis ostium: Bella premunt
              hostilia, Da robur, fer auxilium. Uni trinoque Domino Sit
              sempiterna gloria, Qui vitam sine termino Nobis donet in patria.
              Amen.
            </Text>
            <Text className="vernacular">
              Ó Hóstia salutar, porta do céu, divino Sacramento, o inimigo
              ameaça os nossos dias! Concedei-nos, Senhor, fortaleza e socorro.
              A Vós, Senhor, glória imortal! E que por Vós a alma fiel goze a
              vida e a felicidade na pátria sempiterna. Amen.
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
