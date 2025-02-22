import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page003() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Salmo 3</Text>

          <View className="side-by-side">
            <Text className="latin">
              Dómine, quid multiplicáti sunt qui tríbulant me? * Multi insúrgunt
              advérsum me.
            </Text>
            <Text className="vernacular">
              Senhor, porque tantos são os que me atribulam? * Muitos se
              insurgem contra mim.
            </Text>
            <Text className="latin">
              Multi dicunt ánimæ meæ: * Non est salus ipsi in Deo ejus.
            </Text>
            <Text className="vernacular">
              Muitos dizem à minha alma: * não há salvação para ele no seu Deus.
            </Text>
            <Text className="latin">
              Tu autem, Dómine, suscéptor meus es, * glória mea, et exáltans
              caput meum.
            </Text>
            <Text className="vernacular">
              Vós, porém, Senhor, sois o meu protector, * minha glória e
              exaltais a minha cabeça.
            </Text>
            <Text className="latin">
              Voce mea ad Dóminum clamávi: * et exaudívit me de monte sancto
              suo.
            </Text>
            <Text className="vernacular">
              Com minha voz ao Senhor clamei: * e Ele me ouviu do seu santo
              monte.
            </Text>
            <Text className="latin">
              Ego dormívi, et soporátus sum: * et exsurréxi, quia Dóminus
              suscépit me.
            </Text>
            <Text className="vernacular">
              Deitei-me para descansar e adormeci: * e levantei-me, pois me
              acolheu o Senhor.
            </Text>
            <Text className="latin">
              Non timébo míllia pópuli circumdántis me: * exsúrge, Dómine,
              salvum me fac, Deus meus.
            </Text>
            <Text className="vernacular">
              Não temerei milhares de pessoas me cercando: * levantai-Vos, ó
              Senhor, salvai-me, ó Deus meu!
            </Text>
            <Text className="latin">
              Quóniam Tu percussísti omnes adversántes mihi sine causa: * dentes
              peccatórum contrivísti.
            </Text>
            <Text className="vernacular">
              Porque Vós tendes ferido todos os que sem causa me perseguem: *
              quebrastes os dentes dos pecadores.
            </Text>
            <Text className="latin">
              Dómini est salus: * et super pópulum tuum benedíctio tua.
            </Text>
            <Text className="vernacular">
              A salvação é do Senhor: * e sua bênção está sobre seu povo.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
