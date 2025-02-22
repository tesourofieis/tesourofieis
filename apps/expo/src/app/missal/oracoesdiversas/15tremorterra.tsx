import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page15Tremorterra() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">15ª Quando há tremor de terra</Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="latin">
              Omnípotens sempitérne Deus, qui réspicis terram et facis eam
              trémere: parce metuéntibus, propitiáre supplícibus; ut, cujus iram
              terræ fundaménta concutiéntem expávimus, cleméntiam contritiónes
              ejus sanántem júgiter sentiámus. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Ó Deus Omnipotente e sempiterno, que olhais para a terra e a
              fazeis tremer, tende misericórdia do nosso pavor e Ouvi propício
              as nossas súplicas, a fim de que, depois de havermos experimentado
              com terror a vossa ira abalar a terra até aos seus fundamentos»
              sintamos também os efeitos da vossa bondade, sempre pronta a
              reparar os males. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="latin">
              Deus, qui fundásti terram super stabilitátem suam, súscipe
              oblatiónes et preces pópuli tui: ac, treméntis terræ perículis
              pénitus amoris, divínæ tuæ iracúndiæ terróres in humánæ salútis
              remédia convérte; ut, qui de terra sunt et in terram reverténtur,
              gaudeant se fíeri sancta conversatióne cœléstes. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Ó Deus, que estabelecestes a terra em bases sólidas, aceitai as
              oblatas e as preces do vosso povo; e, dignando-Vos terminar
              completamente os perigos deste tremor de terra, convertei os
              flagelos da vossa divina ira em remédios de salvação, a fim de que
              estes seres, que provêm da terra e nela devem, entretanto,
              permanecer, possam alcançar um dia a alegria da posse do reino dos
              céus pela santidade da sua vida, Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="latin">
              Tuére nos, Dómine, quǽsumus, tua sancta suméntes: et terram, quam
              vídimus nostris iniquitátibus treméntem, supérno munere firma; ut
              mortálium corda cognóscant, et te indignánte tália flagélla
              prodíre, et te miseránte cessáre. Per Dóminum nostrum...
            </Text>
            <Text className="vernacular">
              Senhor, Vos rogamos, visto que participamos dos vossos
              sacrossantos mystérios, protegei-nos; e, por um benefício
              especialíssimo da vossa bondade, tornai firme esta terra, que
              vimos tremer em punição das nossas iniquidades, a fim de que os
              corações humanos conheçam que, se a origem destes flagelos é a
              vossa indignação, também a vossa misericórdia pode extingui-los.
              Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
