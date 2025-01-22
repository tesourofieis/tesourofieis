import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PagePentecostes() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Prefácio do Pentecostes</Text>

          <Text className="aside">
            Diz-se desde a Vigília de Pentecostes até ao fim do Oitavário.
            Diz-se também nas Missas Votivas do Espírito Santo, mas omitem-se as
            palavras: neste dia.
          </Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Vere dignum et justum est, æquum et salutáre, nos tibi semper et
              ubíque grátias ágere: Dómine sancte, Pater omnípotens, ætérne
              Deus: per Christum, Dóminum nostrum. Qui, ascéndens super omnes
              cœlos sedénsque ad déxteram tuam, promíssum Spíritum Sanctum
              (hodiérna die) in fílios adoptiónis effúdit. Quaprópter profúsis
              gáudiis totus in orbe terrárum mundus exsúltat. Sed et supérnæ
              Virtútes atque angélicæ Potestátes hymnum glóriæ tuæ cóncinunt,
              sine fine dicéntes:
            </Text>
            <Text className="text-base vernacular">
              É verdadeiramente digno e justo, racional e salutar dar-Vos
              graças, em todos os lugares e sempre, Senhor santo, Pai
              omnipotente, eterno Deus, por nosso Senhor Jesus Cristo, que,
              subindo ao mais alto dos céus e estando sentado à vossa direita,
              fez descer, (neste dia) sobre os seus filhos adoptivos o Espírito
              Santo, como havia prometido. Por isso o mundo inteiro, em
              transportes de alegria, exulta de contentamento, enquanto as
              Virtudes do céu e as Potestades angelicais cantam um hino à vossa
              glória, dizendo incessantemente:
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
