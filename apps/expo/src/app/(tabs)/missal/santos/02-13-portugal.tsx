import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0213Portugal() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Cinco Chagas de N. S. Jesus Cristo, a 13 de Fevereiro
          </Text>

          <View className="aside">
            Como na{" "}
            <Link className="link" href="/missal/votivas/paixao">
              Missa Votiva da Paixão
            </Link>{" "}
            , excepto:
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, qui unigéniti Fílii tui passióne, et per quinque Vúlnera
              ejus sánguinis effusióne, humánam natúram peccáto pérditam
              reparásti: tríbue nobis, quæsumus; ut qui ab eo suscépta Vúlnera
              venerámur in terris, ejúsdem pretiosíssimi sánguinis fructum
              cónsequi mereámur in cælis. Per eúmdem Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, que pela Paixão do vosso Filho Unigénito e pela efusão do
              sangue das suas Cinco Sagradas Chagas reparastes a natureza
              humana, perdida pelo pecado, concedei-nos, Vos imploramos, que,
              venerando na terra as suas Cinco Chagas, mereçamos alcançar no céu
              o fruto do mesmo preciosíssimo Sangue. Pelo mesmo nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Majestáti tuæ, quæsumus, Dómine, accépta sint dona, in quibus ipso
              Unigéniti tui Vúlnera tibi offérimus, nostræ prétia libertátis.
              Per eúmdem Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Que a vossa majestade, Senhor, Vos imploramos, aceite as ofertas
              que Vos apresentamos, nas quais estão as próprias Cinco Chagas do
              vosso Unigénito, que são o preço da nossa liberdade. Pelo mesmo
              nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Refécti vitálibus alimóniis, quæsumus, Dómine Deus noster: ut qui
              Vúlnera Dómini nostri Jesu Christi hódie devóte cólimus; hæc in
              nostris córdibus impréssa, móribus et vita teneámus. Per eúmdem
              Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Agora, que fomos refeitos com os alimentos da vida, Vos
              suplicamos, ó Senhor, nosso Deus, que, venerando hoje devotamente
              as Chagas de N. S. Jesus Cristo, mostremos na nossa vida e
              costumes que as temos impressas nos nossos corações. Pelo mesmo
              nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
