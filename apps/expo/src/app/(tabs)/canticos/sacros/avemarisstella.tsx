import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageAvemarisstella() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Ave maris stella</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Ave maris stella, Dei Mater alma, atque semper Virgo, felix caeli
              porta.
            </Text>
            <Text className="text-base vernacular">
              Ave, Estrela do mar, Mãe de Deus sagrada, Que sempre Virgem sois,
              Porta feliz do Céu.
            </Text>
            <Text className="text-base latin">
              Sumens illud Ave, Gabriélis ore, Funda nos in pace, Mutans Evæ
              nomen.
            </Text>
            <Text className="text-base vernacular">
              Ouvistes aquele «Ave», Dos lábios de Gabriel, Estabelecei-nos na
              paz, Mudando o nome de Eva.
            </Text>
            <Text className="text-base latin">
              Solve vincla reis, Profer lumen cæcis, Mala nostra pelle, Bona
              cuncta posce.
            </Text>
            <Text className="text-base vernacular">
              Libertai dos grilhões os pecadores, Mandai luz aos cegos, Afastai
              de nós os males, E obtém-nos todos os bens.
            </Text>
            <Text className="text-base latin">
              Monstra te esse matrem, Sumat per te preces, Qui pro nobis natus,
              Tulit esse tuus.
            </Text>
            <Text className="text-base vernacular">
              Mostrai que sois nossa Mãe; por Vós, ouça as nossas preces, Aquele
              que, para nos salvar, Quis ser vosso Filho.
            </Text>
            <Text className="text-base latin">
              Virgo singuláris, Inter omnes mitis, Nos culpis solutos, Mites fac
              et castos.
            </Text>
            <Text className="text-base vernacular">
              Ó Virgem sem igual, Entre todas a mais doce, Libertando-nos de
              nossas culpas, Fazei-os mansos e castos.
            </Text>
            <Text className="text-base latin">
              Vitam præsta puram, Iter para tutum, Ut videntes Jesum, Semper
              collætemur.
            </Text>
            <Text className="text-base vernacular">
              Concedei-nos uma vida pura, Fazei seguros os nossos caminhos, Para
              que, contemplando a Jesus, Exultemos eternamente.
            </Text>
            <Text className="text-base latin">
              Sit laus Deo Patri, Summo Christo décus, Spirítui Sancto, Tribus
              honor unus.
            </Text>
            <Text className="text-base vernacular">
              Seja louvado Deus Pai, A Cristo também, e ao Espírito Santo; Seja
              prestada honra igual.
            </Text>
            <Text className="text-base latin">Amen.</Text>
            <Text className="text-base vernacular">Amen.</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
