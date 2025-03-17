import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Language from "~/components/Language";

export default function Page114() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Salmo 114</Text>

          <Language>
            <Text className="latin">
              Diléxi, quóniam exáudiet Dóminus * vocem oratiónis meæ.
            </Text>
            <Text className="vernacular">
              Amei, porque o Senhor ouvirá * a voz da minha oração.
            </Text>
            <Text className="latin">
              Quia inclinávit aurem suam mihi: * et in diébus meis invocábo.
            </Text>
            <Text className="vernacular">
              Pois inclinou para mim o seu ouvido: * e O invocarei todos meus
              dias.
            </Text>
            <Text className="latin">
              Circumdedérunt me dolóres mortis: * et perícula inférni invenérunt
              me.
            </Text>
            <Text className="vernacular">
              Dores de morte me cercaram: * e perigos do inferno vieram sobre
              mim.
            </Text>
            <Text className="latin">
              Tribulatiónem et dolórem invéni: * et nomen Dómini invocávi.
            </Text>
            <Text className="vernacular">
              Encontrei-me na tribulação e na dor: * e invoquei o nome do
              Senhor.
            </Text>
            <Text className="latin">
              O Dómine, líbera ánimam meam: * miséricors Dóminus, et justus, et
              Deus noster miserétur.
            </Text>
            <Text className="vernacular">
              Ó Senhor, livrai a minha alma: * o Senhor é misericordioso e justo
              e o nosso Deus é compassivo.
            </Text>
            <Text className="latin">
              Custódiens párvulos Dóminus: * humiliátus sum, et liberávit me.
            </Text>
            <Text className="vernacular">
              O Senhor é que guarda os pequeninos: * fui humilhado e Ele me
              livrou.
            </Text>
            <Text className="latin">
              Convértere, ánima mea, in réquiem tuam: * quia Dóminus benefécit
              tibi.
            </Text>
            <Text className="vernacular">
              Volta, ó minha alma, ao teu repouso: * pois o Senhor te cumulou de
              bens.
            </Text>
            <Text className="latin">
              Quia erípuit ánimam meam de morte: * óculos meos a lácrimis, pedes
              meos a lapsu.
            </Text>
            <Text className="vernacular">
              Porque livrou da morte a minha alma: * os meus olhos das lágrimas,
              os meus pés da queda.
            </Text>
            <Text className="latin">Placébo Dómino * in regióne vivórum.</Text>
            <Text className="vernacular">
              Agradarei ao Senhor * na região dos vivos.
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
