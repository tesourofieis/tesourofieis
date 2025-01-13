import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0122() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. S. Vicente e Anastácio, Márts., a 22 de Janeiro
          </Text>

          <View className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/6muitosmartires1">
              Missa Intret in
            </Link>{" "}
            , excepto:
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Adésto, Dómine, supplicatiónibus nostris: ut, qui ex iniquitáte
              nostra reos nos esse cognóscimus, beatórum Mártyrum tuórum
              Vincéntii et Anastásii intercessióne liberémur. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Senhor, dignai-Vos ouvir as nossas súplicas, a fim de que,
              reconhecendo-nos réus diante de Vós pelas nossas iniquidades,
              sejamos livres delas por intercessão dos vossos B. B. Mártires
              Vicente e Anastácio. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Múnera tibi, Dómine, nostræ devotiónis offérimus: quæ et pro
              tuórum tibi grata sint honóre Justórum, et nobis salutária, te
              miseránte, reddántur. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Senhor, Vos oferecemos estes dons da nossa devoção; e que em
              consideração dos vossos Santos eles Vos sejam agradáveis, e pela
              vossa misericórdia nos sejam salutares. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Quǽsumus, omnípotens Deus: ut, qui cœléstia aliménta percépimus,
              intercedéntibus beátis Martýribus tuis Vincéntio et Anastásio, per
              hæc contra ómnia advérsa muniámur. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus omnipotente, Vos suplicamos, fazei que, havendo nós
              recebido os alimentos celestiais, sejamos fortalecidos contra
              todas as adversidades por intercessão dos vossos B. B. Mártires
              Vicente e Anastácio. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
