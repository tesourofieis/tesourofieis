import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0209() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Cirilo de Alexandria, B. Conf. e Dr., a 9 de Fevereiro
          </Text>

          <View className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/13doutores">
              Missa In médio Ecclésiae
            </Link>{" "}
            , excepto:
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, qui beátum Cyríllum Confessórem tuum atque Pontíficem divínæ
              maternitátis beatíssimæ Vírginis Maríæ assertórem invíctum
              effecísti: concéde, ipso intercedénte; ut, qui vere eam Genetrícem
              Dei crédimus, matérna ejúsdem protectióne salvémur. Per eúndem
              Dóminum nostrum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, que tornastes o B. Cirilo, vosso Confessor e Pontífice,
              defensor invencível da divina maternidade da S. S. Virgem Maria, a
              nós, que acreditamos que ela é verdadeiramente Mãe de Deus,
              concedei por sua intercessão que sejamos salvos pela sua maternal
              protecção. Pelo...
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Múnera nostra, omnípotens Deus, benígnus réspice: et, intercedénte
              beáto Cyríllo, præsta; ut unigénitum tuum Jesum Christum, Dóminum
              nostrum in tua tecum glória coætérnum, in córdibus nostris digne
              suscípere mereámur: Qui tecum...
            </Text>
            <Text className="text-base vernacular">
              Deus omnipotente, olhai benigno para os nossos dons; e por
              intercessão do B. Cirilo, concedei-nos que possamos receber
              dignamente nos nossos corações a N. S. Jesus Cristo, vosso Filho
              Unigénito, que é coeterno convosco na glória. Ele, que, sendo
              Deus...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Divínis, Dómine, refécti mystériis, te súpplices deprecámur: ut,
              exémplis et méritis beáti Cyrílli Pontíficis adjúti, sanctíssimæ
              Genetríci Unigéniti tui digne famulári valeámus: Qui tecum
              vivit...
            </Text>
            <Text className="text-base vernacular">
              Fortalecidos, Senhor, com os divinos mystérios, Vos imploramos
              instantemente que, auxiliados com os exemplos e méritos do B.
              Pontífice Cirilo, possamos servir dignamente a S. S. Mãe do vosso
              Filho Unigénito. Ele, que...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
