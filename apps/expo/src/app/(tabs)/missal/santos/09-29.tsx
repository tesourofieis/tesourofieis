import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0929() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Dedicação de S. Miguel Arcanjo, a 29 de Setembro
          </Text>

          <View className="aside">
            Como na [Missa da Festa da Aparição de Arcanjo
            Miguel](/missal/santos/05-08), excepto:
          </View>

          <Text className="h3">Gradual</Text>

          <Text className="em">Sl. 102, 20 & 1</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Benedícite Dóminum, omnes Angeli ejus: poténtes virtúte, qui
              fácitis verbum ejus. ℣. Benedic, ánima mea, Dóminum, et ómnia
              interióra mea, nomen sanctum ejus.
            </Text>
            <Text className="text-base vernacular">
              Bendizei o Senhor, ó Anjos do Senhor, que sois poderosos e cheios
              de força, e cumpris as ordens do Senhor. ℣. Bendizei o Senhor, ó
              minha alma; que toda minha alma bendiga o nome do Senhor.
            </Text>
            <Text className="text-base latin">
              Allelúja, allelúja. ℣. Sancte Míchaël Archángele, defénde nos in
              prǿlio: ut non pereámus in treméndo judício. Allelúja.
            </Text>
            <Text className="text-base vernacular">
              Aleluia, aleluia. ℣. S. Miguel Arcanjo, defendei-nos neste
              combate, para que não pereçamos no dia do tremendo juízo. Aleluia.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
