import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page10Perseguidoresigreja() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">10.ª Contra os perseguidores da Igreja</Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Ecclésiæ tuæ, quǽsumus, Dómine, preces placátus admítte: ut,
              destrúctis adversitátibus et erróribus univérsis, secúra tibi
              sérviat libertáte. Per Dóminum...
            </Text>
            <Text className="text-base">
              Senhor, Vos suplicamos, dignai-Vos acolher benigno as preces da
              vossa Igreja, para que, destruídas todas as adversidades e todos
              os obstáculos, ela Vos sirva com liberdade e segurança. Por nosso
              Senhor...
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Prótege nos, Dómine, tuis mystériis serviéntes: ut, divinis rebus
              inhæréntes, et córpore tibi famulémur et mente. Per Dóminum...
            </Text>
            <Text className="text-base">
              A nós, que celebramos os vossos mystérios, protegei-nos, Senhor, a
              fim de que, unindo-nos aos mystérios divinos, Vos sirvamos com o
              corpo e com a alma. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Quǽsumus, Dómine, Deus noster: ut, quos divína tríbuis
              participatióne gaudére, humánis non sinas subjacére perículis. Per
              Dóminum nostrum...
            </Text>
            <Text className="text-base">
              Ó Senhor, nosso Deus, Vos pedimos, não consintais que aqueles a
              quem concedestes a graça de participar do divino banquete sejam
              expostos aos perigos que ameaçam os homens. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
