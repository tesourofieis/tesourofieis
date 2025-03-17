import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Language from "~/components/Language";

export default function Page9Concordiacongregacao() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">9.ª Pela concórdia na Congregação</Text>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Deus, lárgiter pacis et amátor cantátis: da fámulis tuis veram cum
              tua voluntáte concórdiam; ut ab ómnibus, quæ nos pulsant,
              tentatiónibus liberémur. Per Dóminum nostrum...
            </Text>
            <Text className="vernacular">
              Ó Deus, que dais a paz e amais a caridade, concedei aos vossos
              servos a verdadeira união com vossa vontade a fim de que sejamos
              livres de todas as tentações que nos perseguem. Por nosso
              Senhor...
            </Text>
          </Language>

          <Text className="h3">Secreta</Text>

          <Language>
            <Text className="latin">
              His sacrifíciis, Dómine, quǽsumus, concéde placátus: ut, qui
              própriis orámus absólvi delíctis, non gravémur extérnis. Per
              Dóminum nostrum...
            </Text>
            <Text className="vernacular">
              Aplacado com este sacrifício, Senhor, concedei-nos, Vos pedimos,
              que nós, querendo ser absolvidos dos nossos próprios pecados, não
              sejamos sobrecarregados com os alheios. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Postcomúnio</Text>

          <Language>
            <Text className="latin">
              Spíritum nobis, Dómine, tuæ cantátis infúnde: ut, quos uno pane
              cœlésti satiásti, tua fácias pietáte concórdes. Per Dóminum... in
              unitáte ejusdem.
            </Text>
            <Text className="vernacular">
              Infundi em nós, Senhor, o espírito da vossa caridade, para que
              misericordiosamente torneis unidos de coração aqueles a quem
              saciastes com o mesmo Pão celestial. Por nosso Senhor...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
