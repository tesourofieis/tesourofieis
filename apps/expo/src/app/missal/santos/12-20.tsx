import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Missa from "../comum/1vigiliaapostolos";

export default function Page1221() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Vigília S. Tomé, Apóstolo, a 20 de Dezembro
          </Text>

          <Text className="comment">
            A festa de S. Tomé é precedida por uma Vigília, como quase todas as
            festas dos Apóstolos, para melhor preparação de nossa alma. O
            Evangelho lembra a vocação do grande Apóstolo que teve a felicidade
            de ouvir continuamente a palavra de Cristo e gozar de sua
            intimidade. «Eu vos chamei amigos porque tudo o que tenho ouvido de
            meu Pai, vos fiz conhecer». «Deus, acrescenta a Epístola, o escolheu
            entre todos os homens; deu-lhe os seus mandamentos, a lei de vida e
            ciência, e o elevou». O Ofertório declara-o escolhido por Jesus para
            ser um dos doze Príncipes, a governar a sua Igreja. «O Senhor, diz
            ainda a Epístola, deu-lhe a sua parte de herança entre as doze
            tribos». O pais dos Parthas e dos Persas coube a S. Tomé, quando os
            Apóstolos se dividiram o mundo. Em união com a Santa Igreja,
            preparemo-nos para a solenidade de amanhã.
          </Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
