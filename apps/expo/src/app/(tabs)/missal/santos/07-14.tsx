import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page0714() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Boaventura, B. Confessor e Doutor, a 14 de Julho
          </Text>

          <View className="aside">
            S. Boaventura nasceu na Toscana, em 1221. Entrou para a Ordem
            franciscan após uma cura milagrosa, devida à intercessão de São
            Francisco de Assis. Teve por mestre Alexandre de Hales o qual
            gostava de dizer, referindo-se ao seu discípulo virginal, que
            parecia ter sido preservado do pecado original. Aos trinta anos
            tornou-se doutor (Or.) e foi professor na Universidade de Paris ao
            mesmo tempo que Santo Tomás Aquino, a quem era muito unido.
            Deram-lhe o título de Doutor seráfico. Nomeado Geral da Ordem,
            depois Cardeal da Igreja (Com., Ale.), morreu em 1274 por ocasião do
            Concílio geral de Lião, em que Gregos e Latinos lhe admiravam
            imensamente o ardor e clareza que dele fazia um astro de fé.
          </View>

          <View className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/13doutores">
              Missa In médio Ecclésiae
            </Link>{" "}
            , excepto:
          </View>

          <Text className="h3">Gradual</Text>

          <Text className="em">Sl. 36, 30-31</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Os justi meditábitur sapiéntiam, et lingua ejus loquétur judícium.
              ℣. Lex Dei ejus in corde ipsíus: et non supplantabúntur gressus
              ejus.
            </Text>
            <Text className="text-base">
              A boca do justo falará com sabedoria e a sua língua proclamará a
              justiça. ℣. A lei do seu Deus está no seu coração e os seus pés
              não tropeçarão.
            </Text>
            <Text className="text-base">
              Allelúja, allelúja. ℣. <Text className="em">Ps. 109, 4</Text>{" "}
              Jurávit Dóminus, et non pœnitébit eum: Tu es sacérdos in ætérnum,
              secúndum órdinem Melchísedech. Allelúja.
            </Text>
            <Text className="text-base">
              Aleluia, aleluia. ℣. <Text className="em">Ps. 109, 4</Text> O
              Senhor jurou, e não se arrependerá: tu és sacerdote para sempre
              segundo a ordem de Melquisedeque. Aleluia.
            </Text>
          </View>

          <Text className="h3">Ofertório</Text>

          <Text className="em">Sl. 88, 25</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Veritas mea et misericórdia mea cum ipso: et in nómine meo
              exaltábitur cornu ejus.
            </Text>
            <Text className="text-base">
              A minha fidelidade e a minha misericórdia estarão com ele: e o seu
              poder exaltar-se-á pelo meu nome.
            </Text>
          </View>

          <Text className="h3">Secreta e Postcomúnio</Text>

          <LinkCard
            href="/missal/comum/12confessorespontifices2"
            title="Confessores Pontífices - Missa Sacerdótes tui"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
