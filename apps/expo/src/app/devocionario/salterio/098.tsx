import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Language from "~/components/Language";

export default function Page098() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Salmo 98</Text>

          <Language>
            <Text className="latin">
              Dóminus regnávit, irascántur pópuli: * qui sedet super Chérubim,
              moveátur terra.
            </Text>
            <Text className="vernacular">
              O Senhor reinou, irritem-se os povos: * reina O que está sentado
              sobre Querubins, agite-se a terra.
            </Text>
            <Text className="latin">
              Dóminus in Sion magnus: * et excélsus super omnes pópulos.
            </Text>
            <Text className="vernacular">
              O Senhor é grande em Sião: * e está elevado sobre todos os povos.
            </Text>
            <Text className="latin">
              Confiteántur nómini tuo magno: quóniam terríbile, et sanctum est:
              * et honor regis judícium díligit.
            </Text>
            <Text className="vernacular">
              Dêem glória ao vosso grande nome, porque é terrível e santo: * e a
              honra do rei está em amar a justiça.
            </Text>
            <Text className="latin">
              Tu parásti directiónes: * judícium et justítiam in Jacob Tu
              fecísti.
            </Text>
            <Text className="vernacular">
              Vós preparastes direcções: * Vós exercestes o julgamento e a
              justiça em Jacob.
            </Text>
            <Text className="latin">
              Exaltáte Dóminum, Deum nostrum, et adoráte scabéllum pedum ejus: *
              quóniam sanctum est.
            </Text>
            <Text className="vernacular">
              Exaltai o Senhor nosso Deus e adorai o escabelo de seus pés: *
              pois santo é.
            </Text>
            <Text className="latin">
              Móyses et Aaron in sacerdótibus ejus: * et Sámuel inter eos, qui
              ínvocant nomen ejus:
            </Text>
            <Text className="vernacular">
              Moisés e Arão estavam entre os seus sacerdotes: * e Samuel entre
              aqueles que invocam o seu nome:
            </Text>
            <Text className="latin">
              Invocábant Dóminum, et ipse exaudiébat eos: * in colúmna nubis
              loquebátur ad eos.
            </Text>
            <Text className="vernacular">
              Invocavam o Senhor e Ele os atendia: * falava-lhes na coluna de
              nuvem.
            </Text>
            <Text className="latin">
              Custodiébant testimónia ejus, * et præcéptum quod dedit illis.
            </Text>
            <Text className="vernacular">
              Guardavam os seus mandamentos, * e o preceito que lhes tinha dado.
            </Text>
            <Text className="latin">
              Dómine, Deus noster, Tu exaudiébas eos: * Deus, Tu propítius
              fuísti eis, et ulcíscens in omnes adinventiónes eórum.
            </Text>
            <Text className="vernacular">
              Senhor nosso Deus, Vós os ouvíeis: * ó Deus, Vós lhes fostes
              propício, até em punir todas suas maquinações.
            </Text>
            <Text className="latin">
              Exaltáte Dóminum, Deum nostrum, et adoráte in monte sancto ejus: *
              quóniam sanctus Dóminus, Deus noster.
            </Text>
            <Text className="vernacular">
              Exaltai o Senhor nosso Deus e adorai-O sobre o seu santo monte: *
              pois santo é o Senhor nosso Deus.
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
