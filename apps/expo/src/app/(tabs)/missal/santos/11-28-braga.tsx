import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page1128Braga() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Tiago Intercísio, Mártir, a 28 de Novembro, Na Arquidiocese de
            Braga e noutros lugares
          </Text>
          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/5martirnaopontifice2">
              Missa Lætábitur justus
            </Link>{" "}
            , excepto:
          </Text>
          <Text className="h3">Oração</Text>
          <Text className="text-base">
            A nós, Senhor, que somos vossos servos, sede propício pelos méritos
            do vosso Mártir Tiago, Vo-lo rogamos, a fim de que pela sua piedosa
            intercessão sejamos protegidos contra todas as adversidades. Por
            nosso Senhor...
          </Text>
          <Text className="h3">Secreta</Text>
          <Text className="text-base">
            Vos suplicamos, Senhor, que pela vossa clemência aceiteis de nossas
            mãos a dádiva apresentada; e pela oração do vosso Santo Mártir Tiago
            purificai-nos de todos os pecados. Por nosso Senhor...
          </Text>
          <Text className="h3">Postcomúnio</Text>
          <Text className="text-base">
            Depois de libarmos os divinos mystérios, que, em veneração do vosso
            Santo Mártir Tiago oferecemos à vossa majestade, concedei-nos,
            Senhor, Vos suplicamos, a graça de por eles merecermos o perdão de
            nossos pecados e o conforto da celestial graça. Por nosso Senhor...
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
