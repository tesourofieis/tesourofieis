import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page1004() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Francisco, a 4 de Outubro</Text>

          <View className="aside">
            Como na{" "}
            <Link className="link" href="/missal/santos/07-17">
              Missa Imp. dos Estigmas em S. Francisco
            </Link>{" "}
            , a 17 de Setembro, excepto:
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Deus, qui Ecclésiam tuam, beáti Francisci méritis fœtu novæ prolis
              amplíficas: tríbue nobis; ex ejus imitatióne, terréna despícere et
              cœléstium donórum semper participatióne gaudére. Per Dóminum...
            </Text>
            <Text className="text-base">
              Ó Deus, que pelos méritos do B. Francisco enriquecestes a vossa
              Igreja, dando-lhe uma nova família, concedei-nos a graça de
              imitá-lo, desprezando os bens terrenos, e de sempre nos alegrarmos
              com a participação dos dons celestiais. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Evangelho</Text>

          <View className="aside">
            Como na [Missa S. Paulo, 1.º Eremita,
            Conf.](/missal/santos/01-15-1#evangelho)
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Ecclésiam tuam, quǽsumus, Dómine, grátia cœléstis amplíficet: quam
              beáti Francísci Confessóris tui illumináre voluísti gloriósis
              méritis et exémplis. Per Dóminum nostrum...
            </Text>
            <Text className="text-base">
              Dignai-Vos, Senhor, Vos suplicamos, com a graça celestial dilatar
              a vossa Igreja, a qual quisestes ilustrar com os gloriosos méritos
              e exemplos do B. Francisco, vosso Confessor. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
