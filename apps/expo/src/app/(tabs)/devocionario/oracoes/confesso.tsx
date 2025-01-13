import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageConfesso() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Confesso</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Confíteor Deo omnipoténti, beátæ Maríæ semper Vírgini, beáto
              Michǽli Archángelo, beáto Joánni Baptístæ, sanctis Apóstolis Petro
              et Paulo, et ómnibus Sanctis: quia peccávi nimis cogitatióne,
              verbo et ópere:{" "}
              <Text className="text-base latin">
                Percutit sibi pectus ter, dicens:
              </Text>
            </Text>
            <Text className="text-base vernacular">
              Eu me confesso a Deus, todo poderoso, à bem-aventurada sempre
              Virgem Maria, ao bem-aventurado S. Miguel Arcanjo, ao
              bem-aventurado S. João Baptista, aos Santos Apóstolos S. Pedro e
              S. Paulo, e a todos os santos: que pequei muitas vezes por
              pensamentos, palavras e obras:{" "}
              <Text className="text-base vernacular">
                Feche a mão direita e bata no peito por três vezes.
              </Text>
            </Text>
            <Text className="text-base latin">
              <Text className="text-base latin">
                Mea culpa, mea culpa, mea máxima culpa.
              </Text>
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">
                Por minha culpa, por minha culpa, por minha tão grande culpa.
              </Text>
            </Text>
            <Text className="text-base latin">
              Ideo precor beátam Maríam semper Vírginem, beátum Michǽlem
              Archángelum, beátum Joánnem Baptístam, sanctos Apóstolos Petrum et
              Paulum, et omnes Sanctos, orare pro me ad Dóminum, Deum nostrum.
            </Text>
            <Text className="text-base vernacular">
              Portanto rogo à bem-aventurada sempre Virgem Maria, ao
              bem-aventurado S. Miguel Arcanjo, ao bem-aventurado S. João
              Baptista, aos Santos Apóstolos S. Pedro e S. Paulo, e a todos os
              Santos, que rogueis a Deus, nosso Senhor, por mim.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
