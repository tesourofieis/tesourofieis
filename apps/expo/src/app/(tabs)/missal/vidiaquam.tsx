import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageVidiaquam() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Vidi aquam</Text>

          <Text className="aside">
            Desde a Páscoa até à Vigília da SS. Trindade, diz-se:
          </Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Vidi aquam egrediéntem de templo a látere dextro, allelúja: et
              omnes ad quos pervénit aqua ista salvi facti sunt et dicent:
              allelúja, allelúja.
            </Text>
            <Text className="text-base vernacular">
              Vi a água que saía do lado direito do Templo, aleluia: e todos
              aqueles em quem esta água tocou foram salvos; e dirão: aleluia,
              aleluia.
            </Text>
            <Text className="text-base latin">
              ℣. Osténde nobis, Dómine, misericórdiam tuam. Allelúja.
            </Text>
            <Text className="text-base vernacular">
              ℣. Mostrai, Senhor, a vossa misericórdia. Aleluia.
            </Text>
            <Text className="text-base latin">
              <Text className="text-base latin">℟.</Text> Et salutáre tuum da
              nobis. Allelúja.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">℟.</Text> E dai-nos a
              salvação. Aleluia.
            </Text>
            <Text className="text-base latin">
              ℣. Dómine, exáudi oratiónem meam.
            </Text>
            <Text className="text-base vernacular">
              ℣. Ouvi, Senhor, a minha oração.
            </Text>
            <Text className="text-base latin">
              <Text className="text-base latin">℟.</Text> Et clamor meus ad te
              véniat.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">℟.</Text> E que meu clamor
              chegue até Vós.
            </Text>
            <Text className="text-base latin">℣. Dóminus vobíscum.</Text>
            <Text className="text-base vernacular">
              ℣. O Senhor seja convosco.
            </Text>
            <Text className="text-base latin">
              <Text className="text-base latin">℟.</Text> Et cum spíritu tuo.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">℟.</Text> E com vosso
              espírito.
            </Text>
            <Text className="text-base latin">
              <Text className="text-base latin">Orémus.</Text>
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">Oremos.</Text>
            </Text>
            <Text className="text-base latin">
              Exáudi nos, Dómine sancte, Pater omnípotens, ætérne, Deus, et
              míttere dignéris Sanctum Angelum tuum de cælis, qui custódiat,
              fóveat, prótegat, vísitet atque deféndat omnes habitantes in hoc
              habitáculo. Per Christum Dóminum nostrum. Amen.
            </Text>
            <Text className="text-base vernacular">
              Ouvi-nos, Senhor santo, Pai omnipotente, Deus eterno, e dignai-Vos
              enviar do céu o vosso Santo Anjo, para que ele guarde, conserve,
              proteja, visite e defenda todos aqueles que se encontram neste
              templo. Por Cristo, nosso Senhor. Amen.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
