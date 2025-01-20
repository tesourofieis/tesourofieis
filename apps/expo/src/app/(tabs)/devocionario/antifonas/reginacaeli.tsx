import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageReginacaeli() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Regína cæli</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Regína cæli, lætáre, allelúja; Quia quem meruísti portáre,
              allelúja, Resurréxit, sicut dixit, allelúja: Ora pro nobis Deum,
              allelúja.
            </Text>
            <Text className="text-base vernacular">
              Rainha do Céu, alegrai-Vos, Aleluia! Porque Aquele que merecestes
              trazer em vosso ventre, Aleluia! Ressuscitou como disse, Aleluia!
              Rogai por nós a Deus, Aleluia!
            </Text>
            <Text className="text-base latin">
              Gaude et laetare, Virgo Maria! Alleluia! Quia surrexit Dominus
              vere! Alleluia!
            </Text>
            <Text className="text-base vernacular">
              Alegrai-Vos e exultai, ó Virgem Maria, Aleluia! Porque o Senhor
              ressuscitou verdadeiramente, Aleluia!
            </Text>
            <Text className="text-base latin">
              <Text className="text-base latin">Orémus.</Text>
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">Oremos.</Text>
            </Text>
            <Text className="text-base latin">
              Deus, qui per resurrectiónem Fílii tui Dómini nostri Jesu Christi
              mundum lætificáre dignátus es: præsta, quǽsumus; ut, per ejus
              Genitrícem Vírginem Mariam, perpétuæ capiámus gáudia vitæ. Per
              eumdem Christum, Dóminum nostrum.
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, que Vos dignastes alegrar o mundo com a Ressurreição do
              vosso Filho, Nosso Senhor Jesus Cristo, concedei-nos, Vos
              suplicamos, a graça de alcançarmos pela protecção da Virgem Maria,
              Sua Mãe, a glória da vida eterna. Pelo mesmo Cristo Nosso Senhor.
            </Text>
            <Text className="text-base latin">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
