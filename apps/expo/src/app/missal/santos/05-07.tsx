import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0507() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Estanislau, B. e Mártir, a 7 de Maio</Text>

          <Text className="comment">
            Nascido na Polónia, Estanislau foi nomeado bispo de Cracóvia em
            1072. Boleslau II, cuja tirania e desregramento de costumes
            censurava, votou-lhe grande ódio. Um dia, ao celebrar Estanislau a
            Santa Missa, o príncipe agarrou-o pela garganta, sufocando-o. Era o
            ano de 1079. Este Santo é o padroeiro da Polónia.
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/9martir">
              Missa Protexísti me
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, pro cujus honóre gloriósus Póntifex Stanisláus gládiis
              impiórum occúbuit: præsta, quǽsumus; ut omnes, qui ejus implórant
              auxílium, petitiónis suæ salutárem consequántur efféctum. Per
              Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, em cuja honra o glorioso Pontífice Estanislau sucumbiu sob
              o gládio dos ímpios, permiti, Vos suplicamos, que todos aqueles
              que implorarem o seu socorro obtenham efeito salutar em seus
              pedidos. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Múnera tibi, Dómine, dicáta sanctífica: et, intercedénte beáto
              Stanisláo Mártyre tuo atque Pontífice, per eadem nos placátus
              inténde. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Santificai, Senhor, estes dons que Vos são oferecido; e por
              intercessão do B. Estanislau, vosso Mártir e Pontífice, olhai
              aplacado para nós. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Hæc nos commúnio, Dómine, purget a crímine: et, intercedénte beáto
              Stanisláo Mártyre tuo atque Pontifice, cœléstis remédii fáciat
              esse consórtes. Per Dóminum nostrum...
            </Text>
            <Text className="text-base vernacular">
              Que esta comunhão, Senhor, nos purifique de todos nossos crimes, e
              que por intercessão do B. Estanislau, vosso Mártir e Pontífice,
              nos torne participantes dos remédios celestiais. Por nosso
              Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
