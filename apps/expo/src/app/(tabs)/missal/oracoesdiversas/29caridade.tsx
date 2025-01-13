import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page29Caridade() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">29.ª Para pedir a caridade</Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, qui diligéntibus te facis cuncta prodésse: da córdibus
              nostris inviolábilem tuæ cantátis afféctum; ut desidéria, de tua
              inspiratióne concépta, nulla possint tentatióne imitári. Per
              Dóminum nostrum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, que fazeis tender todas as coisas para benefício daqueles
              que Vos amam, gravai perpetuamente nos nossos corações os afectos
              da vossa caridade, a fim de que os desejos, que concebemos por
              vossa inspiração, permaneçam invariavelmente em nós, a despeito de
              todas as tentações. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, qui nos ad imáginem tuam sacraméntis rénovas et præcéptis:
              pérfice gressus nostros in sémitis tuis; ut cantátis donum, quod
              fecísti a nobis sperári, per hæc, quæ offérimus sacrifícia, fácias
              veráciter apprehéndi. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, que com vossos sacramentos e preceitos nos renovais à
              «Vossa imagem», fazei-nos avançar no caminho da vossa perfeição, a
              fim de que, pela virtude deste sacrifício, que Vos oferecemos,
              possamos alcançar verdadeiramente o dom da caridade, que nos
              ensinastes a esperar de Vós. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Sancti Spíritus grátia, quǽsumus, Dómine, corda nostra illúminet:
              et perféctæ cantátis dulcédine abundánter refíciat. Per Dóminum...
              in unitáte ejusdem Spíritus Sancti.
            </Text>
            <Text className="text-base vernacular">
              Senhor, Vos suplicamos, que a graça do vosso Espírito Santo
              ilumine os nossos corações e os reconforte e sacie com a doçura da
              caridade perfeita. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
