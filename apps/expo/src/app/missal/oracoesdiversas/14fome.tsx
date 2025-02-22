import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page14Fome() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">14.ª Para os tempos de fome</Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="latin">
              Da nobis, quǽsumus, Dómine, piæ supplicatiónis efféctum: et famem
              propitiátus avérte; ut mortálium corda cognóscant, et te
              indignánte tália flagélla prodíre, et te miseránte cessáre. Per
              Dóminum...
            </Text>
            <Text className="vernacular">
              Vos suplicamos, Senhor, concedei-nos a graça de alcançarmos o que
              de Vós imploramos com nossas súplicas piedosas; e, pela vossa
              bondade, afastai de nós a fome, a fim de que os corações mortais
              conheçam que, assim como estes flagelos provêm da vossa
              indignação, assim também a vossa misericórdia pode fazê-los
              cessar. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="latin">
              Deus, qui humáni generis utrámque substántiam, præséntium númerum
              et aliménto végetas et rénovas sacraménto: tríbue, quǽsumus; ut
              eórum et corpóribus nostris subsídium non desit et méntibus. Per
              Dóminum...
            </Text>
            <Text className="vernacular">
              Ó Deus, que com os dons aqui presentes assistis ao género humano
              nas suas duas substâncias, sustentando-o com o alimento e
              renovando-o com o sacramento, concedei-nos, Vos suplicamos, que a
              assistência, que esperamos, não falte nem aos nossos corpos, nem
              às nossas almas. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="latin">
              Gubérna, quǽsumus, Dómine, temporálibus aliméntis: quos dignáris
              ætérnis informáre mystériis. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Vos suplicamos, Senhor, dignai-Vos manifestar a vossa providência,
              concedendo os alimentos temporais àqueles que Vos dignastes
              robustecer com mystérios eternos. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
