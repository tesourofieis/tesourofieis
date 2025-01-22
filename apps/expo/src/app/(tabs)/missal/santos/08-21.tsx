import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0821() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Santa Joana de Chantal, Viúva, a 21 de Agosto
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/24nemvirgensnemmartires">
              Missa Cognóvi, Dómine
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Omnípotens et miséricors Deus, qui beátam Joánnam Francíscam, tuo
              amóre succénsam, admirábili spíritus fortitúdine per omnes vitæ
              sémitas in via perfectiónis donásti, quique per illam illustráre
              Ecclésiam tuam nova prole voluísti: ejus méritis et précibus
              concéde; ut, qui infirmitátis nostræ cónscii de tua virtúte
              confídimus, cœléstis grátiæ auxílio cuncta nobis adversántia
              vincámus. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Deus omnipotente e eterno, que, havendo abrasado no vosso amor a
              B. Joana Francisca, lhe destes um admirável espírito de fortaleza
              para seguir em todos os caminhos da vida «a via da perfeição» , e
              que por ela quisestes ornar a vossa Igreja com uma nova família,
              permiti, pelos seus méritos e preces, que, tendo nós consciência
              da nossa fraqueza e pondo a nossa confiança no vosso poder,
              triunfemos com o auxílio da graça celestial de tudo o que nos é
              contrário. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Illo nos amóris igne, quǽsumus. Dómine, hæc hóstia salutáris
              inflámmet: quo beátæ Joannæ Francíscæ cor veheménter incéndit, et
              flammis adússit ætérnæ caritátis. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Senhor, Vos suplicamos, permiti que esta hóstia salutar nos
              inflame no fogo daquele amor que abrasou com tanto ardor o coração
              da B. Joana Francisca e o consumiu nas chamas da eterna caridade.
              Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Spíritum nobis, Dómine, tuæ caritátis infúnde: ut, quos cœléstis
              panis virtúte satiásti, beáta Joánna Francisca intercedénte,
              fácias terréna despícere, et te solum Deum pura mente sectári. Per
              Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Infundi em nós, Senhor, o espírito da vossa caridade, a fim de que
              pela intercessão da B. Joana Francisca aqueles que saciastes com o
              celestial Pão dos fortes desprezem os bens da terra e com o
              coração puro se unam somente a Vós, ó Deus. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
