import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0514() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Bonifácio, Mártir, a 14 de Maio</Text>

          <Text className="comment">
            Comemoração S. Bonifácio, Mártir. A vitória de Jesus ressuscitado e
            da sua Ascensão, estende-se a todos os membros de seu corpo místico,
            a Ele unidos como os ramos da vinha ao cepo, e por ele produzindo
            inúmeros frutos. Preso em Tarso, Bonifácio «mostrou-se corajoso na
            presença dos carrascos». Estes lhe despedaçaram o corpo com unhas de
            ferro, enfiaram-lhe nas unhas caniços pontudos, e na boca derramaram
            chumbo derretido. Decapitado em 275, sob o imperador Galério, a 14
            de Maio, em Tarso, seus despojos foram transladados para o monte
            Aventino em Roma, cuja igreja tomou o seu nome, vindo a ser, em
            seguida, a igreja de Santo Aleixo.
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/9martir">
              Missa Protexísti me
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Da, quǽsumus, omnípotens Deus: ut, qui beáti Bonifátii Mártyris
              tui sollémnia cólimus, ejus apud te intercessiónibus adjuvémur.
              Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus omnipotente, Vos rogamos, visto que celebramos a festa do
              vosso B. Mártir Bonifácio, concedei-nos que sejamos auxiliados com
              sua intercessão. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Munéribus nostris, quǽsumus, Dómine, precibúsque suscéptis: et
              cœléstibus nos munda mystériis, et cleménter exáudi. Per Dóminum
              nostrum...
            </Text>
            <Text className="text-base vernacular">
              Havendo Vós recebido os nossos dons e as nossas orações,
              dignai-Vos purificar-nos com vossos celestiais mystérios e
              ouvir-nos clementemente. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Refécti participatióne múneris sacri, quǽsumus, Dómine, Deus
              noster: ut, cujus exséquimur cultum, intercedénte beáto Bonifátio
              Mártyre tuo, sentiámus efféctum. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Confortados com a participação do dom sagrado, Vos suplicamos, ó
              Senhor, nosso Deus, fazei-nos sentir por intercessão do B.
              Bonifácio, vosso Mártir, o efeito do mystério que celebramos. Por
              nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
