import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageQuemterra() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Quem terra</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Quem terra, pontus, sidera Colunt, adorant, praedicant, Trinan
              regentem machinam, Claustrum Mariae bajula.
            </Text>
            <Text className="text-base vernacular">
              Quem terra, mar, estrelas, amplia, adora, louva, reinando com
              tecido triplo, encerra-se no ventre de Maria.
            </Text>
            <Text className="text-base latin">
              Cui Luna, Sol, et omnia deserviunt per tempora, perfusa cæli
              gratia, gestant Puellæ viscera.
            </Text>
            <Text className="text-base vernacular">
              A quem a lua, o sol e todas as coisas servem pelos tempos, pela
              graça enviada do céu, no ventre da Jovem é gestado.
            </Text>
            <Text className="text-base latin">
              Beata Mater, munere, cuius supernus Artifex, mundum pugillo
              continens, ventris sub arca clausus est.
            </Text>
            <Text className="text-base vernacular">
              Feliz Mãe que recebe o dom, em cujo santuário o Artista, que o
              mundo na mão contém, na arca do ventre dorme.
            </Text>
            <Text className="text-base latin">
              Beata cæli nuntio, fecunda Sancto Spiritu, desideratus Gentibus,
              cuius per alvum fusus est.
            </Text>
            <Text className="text-base vernacular">
              Feliz anúncio celeste, fecundado pelo Santo Espírito, O desejado
              das nações, que do ventre viria.
            </Text>
            <Text className="text-base latin">
              Jesu, Tibi sit gloria, qui natus es de Virgine, cum Patre, et almo
              Spiritu, in sempiterna sæcula. Amen.
            </Text>
            <Text className="text-base vernacular">
              Glória a Vós, Jesus, que nascestes da Virgem, com o Pai Eterno e o
              Espírito, pelos séculos sem fim. Amen.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
