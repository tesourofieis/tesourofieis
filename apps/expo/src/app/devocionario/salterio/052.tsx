import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Language from "~/components/Language";

export default function Page052() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Salmo 52</Text>

          <Language>
            <Text className="latin">
              Dixit insípiens in corde suo: * Non est Deus.
            </Text>
            <Text className="vernacular">
              Disse o parvo no seu coração: * não há Deus.
            </Text>
            <Text className="latin">
              Corrúpti sunt, et abominábiles facti sunt in iniquitátibus: * non
              est qui fáciat bonum.
            </Text>
            <Text className="vernacular">
              São corruptos e tornaram-se abomináveis nas suas iniquidades: *
              não há quem o bem faça.
            </Text>
            <Text className="latin">
              Deus de cælo prospéxit super fílios hóminum: * ut vídeat si est
              intéllegens, aut requírens Deum.
            </Text>
            <Text className="vernacular">
              Deus olhou do céu sobre os filhos dos homens: * para ver se há
              inteligentes, ou quem a Deus busque.
            </Text>
            <Text className="latin">
              Omnes declinavérunt, simul inútiles facti sunt: * non est qui
              fáciat bonum, non est usque ad unum.
            </Text>
            <Text className="vernacular">
              Todos se extraviaram, juntos tornaram-se inúteis: * não há quem o
              bem faça, não há sequer um só.
            </Text>
            <Text className="latin">
              Nonne scient omnes qui operántur iniquitátem, * qui dévorant
              plebem meam ut cibum panis?
            </Text>
            <Text className="vernacular">
              Porventura se não lembrarão todos os obreiros da iniquidade, * os
              que devoram o meu povo como quem pão come?
            </Text>
            <Text className="latin">
              Deum non invocavérunt: * illic trepidavérunt timóre, ubi non erat
              timor.
            </Text>
            <Text className="vernacular">
              Não invocaram a Deus: * tremeram de medo onde não havia que temer.
            </Text>
            <Text className="latin">
              Quóniam Deus dissipávit ossa eórum qui homínibus placent: *
              confúsi sunt, quóniam Deus sprevit eos.
            </Text>
            <Text className="vernacular">
              Porque dissipou Deus os ossos daqueles que aos homens agradam: *
              foram confundidos, porque Deus os desprezou.
            </Text>
            <Text className="latin">
              Quis dabit ex Sion salutáre Israël? * Cum convérterit Deus
              captivitátem plebis suæ, exsultábit Jacob, et lætábitur Israël.
            </Text>
            <Text className="vernacular">
              Quem enviará de Sião a salvação de Israel? * Quando Deus puser fim
              ao cativeiro do seu povo, regozijar-se-á Jacob e alegrar-se-á
              Israel.
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
