import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0123() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Raimundo de Penhafort, a 23 de Janeiro</Text>

          <Text className="comment">
            S. Raimundo nasceu em 1175 da nobre família de Penhafort, na
            Espanha. Foi por sua doutrina e milagres, que o Cristo se mostrou
            Filho de Deus: Hoje, pela ciência e pelos milagres de S. Raimundo, é
            o que a Igreja nos mostrará como, graças aos seus Santos, também ela
            participa da divindade do Verbo. Tendo abandonado tudo (Ep.) para
            entrar na Ordem de S. Domingos, da qual é uma das glórias, S.
            Raimundo «meditou a lei de Deus» (Intr.) e escreveu a Summa dos
            casos de consciência, compêndio de moral cristã muito apreciado. Por
            isso a Igreja lhe dá título de «insigne ministro do sacramento da
            penitência» (Or.). A oração alude ao milagre pelo qual o Santo,
            tendo desdobrado o seu manto sobre as águas, atravessou em seis
            horas as 53 léguas de mar que separam a ilha de Maiorca de
            Barcelona. Ele persuadiu a S. Pedro Nolasco que sacrificasse a sua
            fortuna em favor da obra do resgate dos cristãos cativos, nos
            estados barbarescos, e, para esse fim, obteve a instituição da Ordem
            das Mercês. S. Raimundo, não querendo ser surpreendido pela chegada
            inesperada do Senhor (Ev.), entregou-se, durante os últimos 35 anos
            de sua vida especialmente, à preparação para a morte. Morreu
            santamente, na idade de 99 anos, em 1275. Pela intercessão de S.
            Raimundo, que foi insigne ministro do sacramento da penitência e
            atravessou milagrosamente o mar, façamos dignos frutos de penitência
            para chegarmos ao porto da salvação eterna (Or.).
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/16abades">
              Missa Os justi
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, qui beátum Raymúndum pœniténtiæ sacraménti insígnem
              minístrum elegísti, et per maris undas mirabíliter traduxísti:
              concéde; ut ejus intercessióne dignos pœniténtiæ fructus fácere,
              et ad ætérnæ salútis portum perveníre valeámus. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, que Vos dignastes escolher o B. Raimundo para o tornar em
              um insigne ministro do sacramento da penitência e que
              milagrosamente o fizestes atravessar as águas do mar, concedei-nos
              que por sua intercessão «façamos frutos dignos de penitência» e
              possamos chegar ao porto da salvação eterna. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
