import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0124() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Timóteo, B. e Márt., a 24 de Janeiro</Text>

          <View className="aside">
            Como na [Missa Státuit ei
            Dóminus](/missal/comum/2martirpontificeforapascal), excepto:
          </View>

          <Text className="h3">Epístola</Text>

          <Text className="em">1 Tm. 6, 11-16</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Léctio Epístolæ beáti Pauli Apóstoli ad Timótheum.
            </Text>
            <Text className="text-base">
              Lição da Ep.ª do B. Ap.º Paulo a Timóteo.
            </Text>
            <Text className="text-base">
              Caríssime: Sectáre justítiam, pietátem, fidem, caritátem,
              patiéntiam, mansuetúdinem. Certa bonum certámen fídei, apprehénde
              vitam ætérnam, in qua vocátus es, et conféssus bonam confessionem
              coram multis téstibus. Præcípio tibi coram Deo, qui vivíficat
              ómnia, et Christo Jesu, qui testimónium réddidit sub Póntio
              Piláto, bonam confessiónem: ut serves mandátum sine mácula,
              irreprehensíbile usque in advéntum Dómini nostri Jesu Christi,
              quem suis tempóribus osténdet beátus et solus potens, Rex regum et
              Dóminus dominántium: qui solus habet immortalitátem, et lucem
              inhábitat inaccessíbilem: quem nullus hóminum vidit, sed nec
              vidére potest: cui honor et impérium sempitérnum. Amen.
            </Text>
            <Text className="text-base">
              Caríssimos: Procurai a justiça, a piedade, a fé, a caridade, a
              paciência e a mansidão. Combatei o bom combate da fé; esforçai-vos
              em alcançar a vida eterna, para a qual fostes chamado e para a
              qual fizestes esta boa profissão de fé diante de muitos
              testemunhos. Eu vos ordeno diante de Deus, que dá a vida a todas
              as coisas, e perante Jesus Cristo, que deu testemunho por uma boa
              profissão de fé, sob Pôncio Pilatos, que oportunamente mostrará o
              Bem-aventurado e o único Soberano, o Rei dos reis e o Senhor dos
              senhores, que só possui a imortalidade e goza uma luz inacessível,
              que ninguém nunca viu, nem ainda pode ver e a quem seja dada a
              honra e poder eterno. Amen.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
