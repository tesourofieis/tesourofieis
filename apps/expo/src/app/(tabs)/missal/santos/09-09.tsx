import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0909() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Gorgónio, Mártir, a 9 de Setembro</Text>

          <View className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/5martirnaopontifice2">
              Missa Lætábitur justus
            </Link>{" "}
            , excepto:
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Sanctus tuus, Dómine, Gorgónius sua nos intercessióne lætíficet:
              et pia fáciat sollemnitáte gaudére. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Alegre-nos, Senhor, o vosso Santo Gorgónio com sua intercessão; e
              nos faça sentir o gozo desta pia solenidade. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Grata tibi sit, Dómine, nostræ servitútis oblátio: pro qua sanctus
              Gorgónius Martyr intervéntor exsístat. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Que Vos seja agradável, Senhor, a oferta da nossa servidão, a qual
              Vo-la apresentamos pela intervenção do Santo Mártir Gorgónio. Por
              nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Famíliam tuam, Deus, suávitas ætérna contíngat et végetet: quæ in
              Mártyre tuo Gorgónio Christi, Fílii tui, bono júgiter odóre
              pascátur: Qui tecum...
            </Text>
            <Text className="text-base vernacular">
              Que a vossa família, ó Deus, seja alimentada e fortalecida com as
              delícias eternas; e que pelo vosso S. Mártir Gorgónio ela se
              alimente incessantemente com o bom odor de vosso Filho Jesus
              Cristo: Que convosco...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
