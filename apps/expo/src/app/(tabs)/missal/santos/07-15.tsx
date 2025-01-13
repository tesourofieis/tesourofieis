import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0715() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Henrique, Imperador e Confessor, a 15 de Julho
          </Text>

          <View className="aside">
            Henrique II, cognominado o Piedoso, foi rei da Baviera em 972, rei
            da Germânia em 1002, e Chefe do Império Romano de 1014 a 1024.
            Prestou a Bento VIII, que o havia sagrado, o juramento «de
            guardar-lhe, bem como aos seus sucessores, a fidelidade em todas as
            coisas». Aplicou-se cuidadosamente em estender a religião,
            reedificado as igrejas destruídas e fundando mosteiros que
            enriqueceu com donativos (Ep.). Retido no Monte Cassino por grave
            moléstia, foi curado milagrosamente, graças à intercessão de S.
            Bento. Desejoso de preparar-se para a vinda do divino Mestre (Ev.,
            Com.), voltou da Itália pela França, fez-se agregar à de S. Vanno de
            Verdun. O Abade recebeu-o, ordenando-lhe imediatamente, em nome da
            obediência religiosa, voltar ao trono imperial. Amou tanto a lei de
            Deus (Intr.) que guardou absoluta virgindade no matrimónio e
            resolveu, de acordo com sua santa esposa Cunegundes, fazer a Jesus
            Cristo seu herdeiro. Fundou, com esse fim, o bispado de Bamberg
            deixando-lhe todos os seus bens. Foi inhumado nessa igreja, em 1024.
          </View>

          <View className="aside">
            Como na{" "}
            <Link
              className="link"
              href="/missal/comum/14confessoresnaopontifices1"
            >
              Missa Os justi
            </Link>{" "}
            , excepto:
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, qui hodiérna die beátum Henrícum Confessórem tuum e terréni
              cúlmine impérii ad regnum ætérnum transtulísti: te súpplices
              exorámus; ut, sicut illum, grátiæ tuæ ubertáte prævéntum,
              illécebras sǽculi superáre fecísti, ita nos fácias, ejus
              imitatióne, mundi hujus blandiménta vitáre, et ad te puris
              méntibus perveníre. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus que neste dia fizestes passar o nosso confessor S. Henrique
              de um trono da terra ao reino dos céus, nós Vos pedimos
              humildemente, que, como preservando-o pela abundância de nossa
              graça Vós o fizestes triunfar dos atractivos do século, assim
              também fazei-nos, à sua imitação, evitar as seduções do mundo e
              chegar até a Vós com os corações puros. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
