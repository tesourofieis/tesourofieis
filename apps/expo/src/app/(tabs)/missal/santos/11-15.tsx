import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page1115() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Alberto Magno, B. C. e Doutor, a 15 de Novembro
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/13doutores">
              Missa In médio Ecclésiae
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, qui beátum Albértum Pontíficem tuum atque Doctórem in humána
              sapiéntia divínæ fídei subjiciénda magnum effecísti: da nobis,
              quǽsumus; ita ejus magistérii inhærére vestígiis, ut luce perfécta
              fruámur in cœlis. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, que ao B. Alberto, vosso Pontífice e Doutor, tornastes
              grande na arte de sujeitar a sabedoria humana à fé divina,
              concedei-nos, Vos suplicamos, que de tal modo sigamos as lições do
              seu magistério que nos céus gozemos a luz perfeita. Por nosso
              Senhor...
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Sacrifíciis præséntibus, Dómine, quǽsumus, inténde placátus: ut
              quod Passiónis Fílii tui Dómini nostri mystério gérimus, beáti
              Alberti intercessióne et exémplo, pio consequámur afféctu. Per
              eumdem Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Pelos presentes sacrifícios, Senhor, Vos suplicamos, olhai
              aplacado para nós, a fim de que com o exemplo e intercessão do B.
              Alberto consigamos alcançar piedosos afectos pelo mystério, que
              celebramos, da paixão do vosso Filho e nosso Senhor. Pelo mesmo
              nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Per hæc sancta quæ súmpsimus, ab hóstium nos, Dómine, impugnatióne
              defénde: et intercedénte beáto Albérto Confessóre tuo atque
              Pontífice, perpétua pace respiráre concéde; Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Por estes sacrossantos sacramentos, que recebemos, Senhor,
              defendei-nos dos ataques dos nossos inimigos, e, intercedendo o B.
              Alberto, vosso Confessor e Pontífice, permiti que gozemos a paz
              perpétua. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
