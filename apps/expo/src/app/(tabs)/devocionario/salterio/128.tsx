import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page128() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Salmo 128</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Sæpe expugnavérunt me a juventúte mea, * dicat nunc Israël.
            </Text>
            <Text className="text-base vernacular">
              Amiúde me combateram desde a minha mocidade, * diga-o agora
              Israel.
            </Text>
            <Text className="text-base latin">
              Sæpe expugnavérunt me a juventúte mea: * étenim non potuérunt
              mihi.
            </Text>
            <Text className="text-base vernacular">
              Muitas vezes me combateram desde a minha mocidade: * todavia, não
              prevaleceram contra mim.
            </Text>
            <Text className="text-base latin">
              Supra dorsum meum fabricavérunt peccatóres: * prolongavérunt
              iniquitátem suam.
            </Text>
            <Text className="text-base vernacular">
              Sobre o meu dorso fabricaram os pecadores: * prolongaram a sua
              iniquidade.
            </Text>
            <Text className="text-base latin">
              Dóminus justus concídit cervíces peccatórum: * confundántur et
              convertántur retrórsum omnes, qui odérunt Sion.
            </Text>
            <Text className="text-base vernacular">
              O Senhor que é justo cortou os pescoços dos pecadores: * fiquem
              confundidos e retrocedam todos os que odeiam Sião.
            </Text>
            <Text className="text-base latin">
              Fiant sicut fænum tectórum: * quod priúsquam evellátur, exáruit:
            </Text>
            <Text className="text-base vernacular">
              Sejam como a erva dos telhados: * a qual seca antes de ser
              arrancada:
            </Text>
            <Text className="text-base latin">
              De quo non implévit manum suam qui metit, * et sinum suum qui
              manípulos cólligit.
            </Text>
            <Text className="text-base vernacular">
              Da qual o ceifeiro não encheu a mão, * nem seus braços o que
              apanha seus feixes.
            </Text>
            <Text className="text-base latin">
              Et non dixérunt qui præteríbant: benedíctio Dómini super vos: *
              benedíximus vobis in nómine Dómini.
            </Text>
            <Text className="text-base vernacular">
              Não disseram os que passavam: a bênção do Senhor seja sobre vós: *
              nós vos abençoamos no nome do Senhor.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
