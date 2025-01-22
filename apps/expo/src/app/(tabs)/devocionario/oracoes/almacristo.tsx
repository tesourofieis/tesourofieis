import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageAlmacristo() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Alma de Cristo</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Anima Christi, sanctífica me. Corpus Christi, salve me.
            </Text>
            <Text className="text-base vernacular">
              Alma de Cristo, santificai-me. Corpo de Cristo, salvai-me.
            </Text>
            <Text className="text-base latin">
              Sanguis Christi, inébria me.
            </Text>
            <Text className="text-base vernacular">
              Sangue de Cristo, inebriai-me.
            </Text>
            <Text className="text-base latin">
              Aqua láteris Christi, lava me.
            </Text>
            <Text className="text-base vernacular">
              Água do lado de Cristo, lavai-me.
            </Text>
            <Text className="text-base latin">
              Pássio Christi, conforta me.
            </Text>
            <Text className="text-base vernacular">
              Paixão de Cristo, confortai-me.
            </Text>
            <Text className="text-base latin">O bone Jesu, exáudi me.</Text>
            <Text className="text-base vernacular">Ó bom Jesus, ouvi-me.</Text>
            <Text className="text-base latin">
              Intra tua vúlnera abscónde me.
            </Text>
            <Text className="text-base vernacular">
              Dentro das vossas Chagas, escondei-me.
            </Text>
            <Text className="text-base latin">
              Ne permittas me separári a te.
            </Text>
            <Text className="text-base vernacular">
              Não permitais que de Vós me separe.
            </Text>
            <Text className="text-base latin">
              Ab hoste maligno defénde me.
            </Text>
            <Text className="text-base vernacular">
              Do espírito maligno, defendei-me.
            </Text>
            <Text className="text-base latin">In hora mortis meæ voca me.</Text>
            <Text className="text-base vernacular">
              Na hora da minha morte, chamai-me.
            </Text>
            <Text className="text-base latin">
              Et jube me venire ad te, ut cum Sanctis tuis laudem te in sǽcula
              sæculórum.
            </Text>
            <Text className="text-base vernacular">
              E mandai-me ir para Vós, para que Vos louve com vossos Santos, por
              todos os séculos.
            </Text>
            <Text className="text-base latin">Amen.</Text>
            <Text className="text-base vernacular">Amen.</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
