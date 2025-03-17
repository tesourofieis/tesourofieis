import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Language from "~/components/Language";

export default function Page022() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Salmo 22</Text>

          <Language>
            <Text className="latin">
              Dóminus regit me, et nihil mihi déerit: * in loco páscuæ ibi me
              collocávit.
            </Text>
            <Text className="vernacular">
              O Senhor é meu pastor e nada me faltará: * num lugar de pastos me
              colocou.
            </Text>
            <Text className="latin">
              Super aquam refectiónis educávit me: * ánimam meam convértit.
            </Text>
            <Text className="vernacular">
              Conduziu-me junto a uma água refrescante: * converteu a minha
              alma.
            </Text>
            <Text className="latin">
              Dedúxit me super sémitas justítiæ, * propter nomen suum.
            </Text>
            <Text className="vernacular">
              Levou-me por veredas de justiça, * por causa do seu nome.
            </Text>
            <Text className="latin">
              Nam, et si ambulávero in médio umbræ mortis, non timébo mala: *
              quóniam Tu mecum es.
            </Text>
            <Text className="vernacular">
              Pois, ainda que ande no meio da sombra da morte, não temerei mal
              algum: * porque Vós estais comigo.
            </Text>
            <Text className="latin">
              Virga tua, et báculus tuus: * ipsa me consoláta sunt.
            </Text>
            <Text className="vernacular">
              Vossa vara e o vosso báculo: * me consolaram.
            </Text>
            <Text className="latin">
              Parásti in conspéctu meo mensam, * advérsus eos, qui tríbulant me.
            </Text>
            <Text className="vernacular">
              Preparastes uma mesa ante mim, * à vista daqueles que me
              atribulam.
            </Text>
            <Text className="latin">
              Impinguásti in óleo caput meum: * et calix meus inébrians quam
              præclárus est!
            </Text>
            <Text className="vernacular">
              Ungistes com óleo a minha cabeça: * e quão precioso é o meu cálice
              farto!
            </Text>
            <Text className="latin">
              Et misericórdia tua subsequétur me * ómnibus diébus vitæ meæ:
            </Text>
            <Text className="vernacular">
              Vossa misericórdia seguir-me-á * todos os dias da minha vida:
            </Text>
            <Text className="latin">
              Et ut inhábitem in domo Dómini, * in longitúdinem diérum.
            </Text>
            <Text className="vernacular">
              A fim de que habite na casa do Senhor, * durante longos dias.
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
