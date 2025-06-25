import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";

export default function PageConfesso() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Confesso</Text>

          <Language>
            <Text className="latin">
              Confíteor Deo omnipoténti, beátæ Maríæ semper Vírgini, beáto
              Michǽli Archángelo, beáto Joánni Baptístæ, sanctis Apóstolis Petro
              et Paulo, et ómnibus Sanctis: quia peccávi nimis cogitatióne,
              verbo et ópere:{" "}
              <Text className="latin">Percutit sibi pectus ter, dicens:</Text>
            </Text>
            <Text className="vernacular">
              Eu me confesso a Deus, todo poderoso, à bem-aventurada sempre
              Virgem Maria, ao bem-aventurado S. Miguel Arcanjo, ao
              bem-aventurado S. João Baptista, aos Santos Apóstolos S. Pedro e
              S. Paulo, e a todos os santos: que pequei muitas vezes por
              pensamentos, palavras e obras:{" "}
              <Text className="vernacular">
                Feche a mão direita e bata no peito por três vezes.
              </Text>
            </Text>
            <Text className="latin">
              <Text className="latin">
                Mea culpa, mea culpa, mea máxima culpa.
              </Text>
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">
                Por minha culpa, por minha culpa, por minha tão grande culpa.
              </Text>
            </Text>
            <Text className="latin">
              Ideo precor beátam Maríam semper Vírginem, beátum Michǽlem
              Archángelum, beátum Joánnem Baptístam, sanctos Apóstolos Petrum et
              Paulum, et omnes Sanctos, orare pro me ad Dóminum, Deum nostrum.
            </Text>
            <Text className="vernacular">
              Portanto rogo à bem-aventurada sempre Virgem Maria, ao
              bem-aventurado S. Miguel Arcanjo, ao bem-aventurado S. João
              Baptista, aos Santos Apóstolos S. Pedro e S. Paulo, e a todos os
              Santos, que rogueis a Deus, nosso Senhor, por mim.
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
