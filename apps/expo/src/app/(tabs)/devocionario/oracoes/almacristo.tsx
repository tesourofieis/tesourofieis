import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageAlmacristo() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Alma de Cristo</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Anima Christi, sanctífica me. Corpus Christi, salve me.
            </Text>
            <Text className="text-base">
              Alma de Cristo, santificai-me. Corpo de Cristo, salvai-me.
            </Text>
            <Text className="text-base">Sanguis Christi, inébria me.</Text>
            <Text className="text-base">Sangue de Cristo, inebriai-me.</Text>
            <Text className="text-base">Aqua láteris Christi, lava me.</Text>
            <Text className="text-base">Água do lado de Cristo, lavai-me.</Text>
            <Text className="text-base">Pássio Christi, conforta me.</Text>
            <Text className="text-base">Paixão de Cristo, confortai-me.</Text>
            <Text className="text-base">O bone Jesu, exáudi me.</Text>
            <Text className="text-base">Ó bom Jesus, ouvi-me.</Text>
            <Text className="text-base">Intra tua vúlnera abscónde me.</Text>
            <Text className="text-base">
              Dentro das vossas Chagas, escondei-me.
            </Text>
            <Text className="text-base">Ne permittas me separári a te.</Text>
            <Text className="text-base">
              Não permitais que de Vós me separe.
            </Text>
            <Text className="text-base">Ab hoste maligno defénde me.</Text>
            <Text className="text-base">Do espírito maligno, defendei-me.</Text>
            <Text className="text-base">In hora mortis meæ voca me.</Text>
            <Text className="text-base">
              Na hora da minha morte, chamai-me.
            </Text>
            <Text className="text-base">
              Et jube me venire ad te, ut cum Sanctis tuis laudem te in sǽcula
              sæculórum.
            </Text>
            <Text className="text-base">
              E mandai-me ir para Vós, para que Vos louve com vossos Santos, por
              todos os séculos.
            </Text>
            <Text className="text-base">Amen.</Text>
            <Text className="text-base">Amen.</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
