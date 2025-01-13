import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageAspergesme() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Asperges me</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Asperges me, Dómine, hyssópo et mundabor: lávabis me, et super
              nivem dealbábor.
            </Text>
            <Text className="text-base vernacular">
              Aspergir-me-eis, Senhor, com o hissope e ficarei puro;
              lavar-me-eis e ficarei alvo, como a neve.
            </Text>
            <Text className="text-base latin">
              ℣. Osténde nobis, Dómine, misericórdiam tuam.
            </Text>
            <Text className="text-base vernacular">
              ℣. Mostrai, Senhor, a vossa misericórdia.
            </Text>
            <Text className="text-base latin">
              <Text className="text-base latin">℟.</Text> Et salutáre tuum da
              nobis.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">℟.</Text> E dai-nos a
              salvação.
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
