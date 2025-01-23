import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0613() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Santo António de Lisboa, a 13 de Junho</Text>

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
              Ecclésiam tuam, Deus, beáti Antónii Confessóris tui atque Doctóris
              solémnitas votiva lætíficet: ut spirituálibus semper muniátur
              auxíliis et gáudiis pérfrui mereátur ætérnis. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Que a festa anual do B. António, vosso Confessor e Doutor, alegre
              a vossa Igreja, Senhor, a fim de que, fortalecida sempre com os
              auxílios espirituais, mereça desfrutar os gozos eternos. Por nosso
              Senhor...
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Præsens oblátio fiat, Dómine, pópulo tuo salutáris: pro quo
              dignátus es Patri tuo te vivéntem hóstiam immoláre: Qui cum eódem
              Deo Patre et Spíritu Sancto vivis et regnas...
            </Text>
            <Text className="text-base vernacular">
              Fazei, Senhor, que a presente oblação seja salutar ao vosso povo,
              pelo qual Vos dignastes imolar-Vos ao vosso Pai, como hóstia viva.
              Ó Vós, que, sendo Deus...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Divínis, Dómine, munéribus satiáti: quǽsumus; ut, beáti Antónii
              Confessóris tui atque Doctóris méritis et intercessióne, salutáris
              sacrifícii sentiámus efféctum. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Saciados com os divinos dons, Vos suplicamos, Senhor, que pela
              intercessão e méritos do B. António, vosso Confessor e Doutor,
              sintamos o efeito deste salutar sacrifício. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
