import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0724Outro() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Cristina, Virgem e Mártir, a 24 de Julho
          </Text>

          <Text className="comment">
            Santa Cristina, nascida na Toscana, tirou, na idade de dez anos, os
            ídolos de prata que se achavam em casa de seu pai, e os quebrou.
            Entregue, por esse motivo, aos perseguidores, foi presa a um poste e
            traspassada com flechas, acrescentando ao mérito da castidade o da
            força cristã (Or.). Foi sob Diocleciano, cerca do ano 300.
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/18virgensmartires2">
              Missa Me exspectavérunt
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Indulgéntiam nobis, quǽsumus, Dómine, beáta Christína Virgo et
              Martyr implóret: quæ tibi grata semper éxstitit, et merito
              castitátis, et tuæ professióne virtútis...
            </Text>
            <Text className="text-base vernacular">
              Concedei-nos, Senhor, Vos pedimos que alcancemos o perdão dos
              nossos pecados pela intercessão da B. Catarina, Virgem e Mártir,
              que sempre Vos foi agradável não só pelos méritos da castidade,
              mas também pela prática da vossa virtude..
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Hóstias tibi, Dómine, beátæ Christínæ Vírginis et Martyris tuæ
              dicátas méritis, benígnus assúme: et ad perpétuum nobis tríbue
              proveníre subsídium...
            </Text>
            <Text className="text-base vernacular">
              Aceitai benignamente, Senhor, as hóstias que Vos oferecemos pelos
              méritos da B. Cristina, Virgem e Mártir, e dignai-Vos permitir que
              nos sirvam de perpétuo socorro...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Divíni númeris largitáte satiáti, quǽsumus, Dómine, Deus noster:
              ut, intercedénte beáta Christína Vírgine et Mártyre tua, in ejus
              semper participatióne vivámus...
            </Text>
            <Text className="text-base vernacular">
              Saciados com a liberdade do dom divino, Senhor, nosso Deus, Vos
              suplicamos, permiti, pela intercessão da B. Catarina, vossa
              Virgem, que comparticipemos sempre deste dom durante a vida...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
