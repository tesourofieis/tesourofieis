import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageParamentacaosacerdote() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Paramentação do Sacerdote</Text>
          <Text className="h1">Ao lavar as mãos</Text>
          Senhor, concedei às minhas mãos a graça de evitarem toda a espécies de
          mancha, a fim de que Vos possa servir com a alma e o corpo puros.
          <Text className="h1">Ao amicto</Text>
          Senhor, colocai sobre a minha cabeça o capacete da salvação, para que
          possa repelir todos os assaltos diabólicos.
          <Text className="h1">À alva</Text>
          Dealbai-me, Senhor, e purificai o meu coração, a fim de que, sendo
          lavado no Sangue do Cordeiro, possa gozar as alegrias eternas.
          <Text className="h1">Ao cíngulo</Text>
          Cingi-me, Senhor, com o cordão da pureza e extingui nos meus rins o
          ardor das paixões, para que as virtudes da continência e da castidade
          permaneçam em mim.
          <Text className="h1">Ao manípulo</Text>
          Permiti, Senhor, que possa envergar a insígnia das lágrimas e das
          dores, a fim de que receba com alegria a recompensa do meu trabalho.
          <Text className="h1">À estola</Text>
          Restituí-me, Senhor, a veste da imortalidade, que perdi pela
          prevaricação dos nossos primeiros pais; e, ainda que me aproxime
          indignamente dos vossos sagrados mystérios, permiti, contudo, que
          alcance o gozo das alegrias eternas.
          <Text className="h1">À casula</Text>
          Senhor, que dissestes «o meu jugo é suave e o meu ónus é leve»,
          permiti que possa desempenhar-me deles de modo a alcançar a vossa
          graça. Amen.
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
