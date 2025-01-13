import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page022() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Salmo 22</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Dóminus regit me, et nihil mihi déerit: * in loco páscuæ ibi me
              collocávit.
            </Text>
            <Text className="text-base vernacular">
              O Senhor é meu pastor e nada me faltará: * num lugar de pastos me
              colocou.
            </Text>
            <Text className="text-base latin">
              Super aquam refectiónis educávit me: * ánimam meam convértit.
            </Text>
            <Text className="text-base vernacular">
              Conduziu-me junto a uma água refrescante: * converteu a minha
              alma.
            </Text>
            <Text className="text-base latin">
              Dedúxit me super sémitas justítiæ, * propter nomen suum.
            </Text>
            <Text className="text-base vernacular">
              Levou-me por veredas de justiça, * por causa do seu nome.
            </Text>
            <Text className="text-base latin">
              Nam, et si ambulávero in médio umbræ mortis, non timébo mala: *
              quóniam Tu mecum es.
            </Text>
            <Text className="text-base vernacular">
              Pois, ainda que ande no meio da sombra da morte, não temerei mal
              algum: * porque Vós estais comigo.
            </Text>
            <Text className="text-base latin">
              Virga tua, et báculus tuus: * ipsa me consoláta sunt.
            </Text>
            <Text className="text-base vernacular">
              Vossa vara e o vosso báculo: * me consolaram.
            </Text>
            <Text className="text-base latin">
              Parásti in conspéctu meo mensam, * advérsus eos, qui tríbulant me.
            </Text>
            <Text className="text-base vernacular">
              Preparastes uma mesa ante mim, * à vista daqueles que me
              atribulam.
            </Text>
            <Text className="text-base latin">
              Impinguásti in óleo caput meum: * et calix meus inébrians quam
              præclárus est!
            </Text>
            <Text className="text-base vernacular">
              Ungistes com óleo a minha cabeça: * e quão precioso é o meu cálice
              farto!
            </Text>
            <Text className="text-base latin">
              Et misericórdia tua subsequétur me * ómnibus diébus vitæ meæ:
            </Text>
            <Text className="text-base vernacular">
              Vossa misericórdia seguir-me-á * todos os dias da minha vida:
            </Text>
            <Text className="text-base latin">
              Et ut inhábitem in domo Dómini, * in longitúdinem diérum.
            </Text>
            <Text className="text-base vernacular">
              A fim de que habite na casa do Senhor, * durante longos dias.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
