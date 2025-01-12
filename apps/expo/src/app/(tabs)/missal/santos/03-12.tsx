import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0312() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Gregório, a 12 de Março</Text>

          <View className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/sumospontifices">
              Missa Si díligis me
            </Link>{" "}
            , excepto:
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Deus, qui ánimæ fámuli tui Gregórii ætérnæ beatitúdinis prǽmia
              contulísti: concéde propítius; ut, qui peccatórum nostrórum
              póndere prémimur, ejus apud te précibus sublevémur. Per Dóminum...
            </Text>
            <Text className="text-base">
              Ó Deus, que concedestes à alma do vosso servo Gregório a
              recompensa da bem-aventurança eterna, permiti benigno que pelos
              seus rogos junto de Vós sejamos aliviados do peso dos nossos
              pecados, que tanto nos oprimem. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Annue nobis, quǽsumus, Dómine: ut intercessióne beáti Gregórii hæc
              nobis prosit oblátio, quam immolándo totíus mundi tribuísti
              relaxári delícta. Per Dóminum...
            </Text>
            <Text className="text-base">
              Senhor, concedei-nos, Vos imploramos, que por intercessão do B.
              Gregório nos seja Proveitosa esta oblação, em virtude de cuja
              imolação nos alcançastes o perdão dos pecados do mundo inteiro.
              Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Deus, qui beátum Gregórium Pontíficem Sanctórum tuórum méritis
              coæquásti: concéde propítius; ut, qui commemoratiónis ejus festa
              percólimus, vitæ quoque imitémur exémpla. Per Dóminum...
            </Text>
            <Text className="text-base">
              Ó Deus, que igualastes o B. Gregório aos merecimentos dos vossos
              Santos, concedei-nos benigno que, celebrando solenemente a sua
              festa, possamos também imitar os exemplos da sua vida. Por nosso
              Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
