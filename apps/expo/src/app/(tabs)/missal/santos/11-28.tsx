import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page1128() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Santa Catarina Labouré, Virgem, a 28 de Novembro
          </Text>
          <View className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/20virgemnaomartir1">
              Missa Dilexísti justitiam
            </Link>{" "}
            , excepto:
          </View>
          <Text className="h3">Oração</Text>
          Senhor Jesus, que Vos dignastes alegrar a bem-aventurada Virgem
          Catarina com a admirável aparição da vossa Imaculada Mãe, fazei, Vos
          suplicamos, que, honrando nós a vossa Mãe Santíssima com um culto
          especial, possamos alcançar as alegrias eternas, mercê dos exemplos da
          mesma Bem-aventurada Catarina. Vós, que viveis...
          <Text className="h3">Secreta</Text>
          Senhor, que a fervorosa oração da Bem-aventurada Virgem Catarina Vos
          torne propício o nosso sacrifício, a fim de que por Vós seja aceite,
          em virtude dos méritos daquela em cuja honra é solenemente oferecido.
          Por nosso Senhor...
          <Text className="h3">Postcomúnio</Text>
          Senhor, tende piedade dos vossos servos, a fim de que, consolados
          inefavelmente com estes sagrados mystérios e seguindo o exemplo da
          Bem-aventurada Catarina, nos esforcemos em viver pensando
          continuamente nos céus. Por nosso Senhor...
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
