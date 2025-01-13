import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageMementorerumconditor() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Memento rerum conditor</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Memento rerum conditor, Nostri quod olim corporis Sacrata ab alvo
              Virginis, Nascendo formam sumpseris.
            </Text>
            <Text className="text-base vernacular">
              Ó Vós, que o mundo fizestes, lembrai-Vos, que quando nasceste do
              ventre sagrado da Virgem, tomastes a humana figura.
            </Text>
            <Text className="text-base latin">
              Maria Mater gratiæ, dulcis Parens clementiæ, tu nos ab hoste
              protege, et mortis hora suscipe.
            </Text>
            <Text className="text-base vernacular">
              Maria Mãe cheia de graça, doce Mãe de misericóridia, defende-nos
              do inimigo, e na última agonia tomai-nos.
            </Text>
            <Text className="text-base latin">
              Jesu, tibi sit gloria, qui natus es de Virgine, cum Patre, et almo
              Spiritu, in sempiterna sæcula. Amen.
            </Text>
            <Text className="text-base vernacular">
              Jesus seja glorificado, da virgem nascido, e o eterno Pai também,
              com o Espírito Santo, por todos os séculos. Amen.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
