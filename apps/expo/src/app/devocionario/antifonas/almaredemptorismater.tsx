import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageAlmaredemptorismater() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Alma Redemptóris Mater</Text>

          <View className="side-by-side">
            <Text className="latin">
              Alma Redemptóris Mater, quæ pérvia cæli porta manes, et stella
              maris, succúrre cadénti, Súrgere qui curat, pópulo: tu quæ
              genuísti, Natúra miránte, tuum sanctum Genitórem, Virgo prius ac
              postérius, Gabriélis ab ore Sumens illud Ave, peccatórum miserére.
            </Text>
            <Text className="vernacular">
              Santa Mãe do Redentor, Porta do Céu, Estrela do Mar, socorrei o
              povo cristão que procura levantar-se do abysmo da culpa. Vós que,
              acolhendo a saudação do Anjo, gerastes, com admiração da natureza,
              o vosso santo Criador, ó sempre Virgem Maria, tende misericórdia
              dos pecadores.
            </Text>
          </View>

          <Text className="aside">Durante o Advento:</Text>

          <View className="side-by-side">
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Angelus Dómini nuntiávit
              Maríæ.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>O Anjo do Senhor anunciou a
              Maria.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Et concépit de Spíritu
              Sancto.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> E Ela concebeu do Espírito
              Santo.
            </Text>
            <Text className="latin">
              <Text className="latin">Orémus.</Text>
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Oremos.</Text>
            </Text>
            <Text className="latin">
              Grátiam tuam, quǽsumus, Dómine, méntibus nostris infúnde: ut qui,
              Angelo nuntiánte, Christi Fílii tui incarnatiónem cognóvimus, per
              passiónem ejus et crucem ad resurrectiónis glóriam perducámur. Per
              eumdem Christum, Dóminum nostrum.
            </Text>
            <Text className="vernacular">
              Infundi, Senhor, Vos suplicamos, a vossa graça em nossas almas,
              para que nós, que pela anunciação do Anjo conhecemos a Incarnação
              do vosso Filho, sejamos conduzidos à glória da ressurreição pela
              sua Paixão e Cruz. Pelo mesmo Jesus Cristo Senhor Nosso.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
          </View>

          <Text className="aside">
            A partir das Vésperas do Natal até à Purificação:
          </Text>

          <View className="side-by-side">
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Post partum Virgo invioláta
              permansísti.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Despois do parto, Virgem,
              permaneceste inviolada.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Dei Génitrix, intercéde pro
              nobis.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Mãe de Deus, intercedei por
              nós.
            </Text>
            <Text className="latin">
              <Text className="latin">Orémus.</Text>
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Oremos.</Text>
            </Text>
            <Text className="latin">
              Deus, qui salútis ætérnæ beátæ Maríæ virginitáte fecúnda humáno
              géneri práemia præstitísti: tríbue, quáesumus, ut ipsam pro nobis
              intercédere sentiámus, per quam merúimus, Auctórem vitæ suscípere
              Dóminum nostrum Jesum Christum Fílium tuum.
            </Text>
            <Text className="vernacular">
              Deus, que prestastes ao género humano o prémio da salvação eterna,
              pela fecunda virgindade da bem-aventurada Maria, dai, pedimos, que
              a sintamos interceder por nós, por quem merecemos receber o autor
              da vida, nosso Senhor Jesus Cristo, vosso Filho.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
