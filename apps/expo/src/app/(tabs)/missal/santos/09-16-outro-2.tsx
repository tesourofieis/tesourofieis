import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page0916Outro2() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Santa Eufémia e Outros, Mártires, a 16 de Setembro
          </Text>
          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/6muitosmartires1">
              Missa Intret in
            </Link>{" "}
            , excepto:
          </Text>
          <Text className="h3">Oração</Text>
          <Text className="text-base">
            Concedei aos vossos servos, Senhor, um jubiloso socorro, a fim de
            que, celebrando devotamente neste dia, em cada ano, a paixão dos
            vossos S. S. Mártires Eufémia, Lúcia e Geminiano, imitemos também a
            constância da sua fé. Por nosso Senhor...
          </Text>
          <Text className="h3">Evangelho</Text>
          <LinkCard
            title="Evangelho Muitos Mártires "
            href="/missal/santos/7muitosmartires2#evangelho"
          />
          <Text className="h3">Secreta</Text>
          <Text className="text-base">
            Atendei propício aos votos do vosso povo, Senhor, Vos rogamos, e
            permiti que gozemos a protecção dos sufrágios daqueles de quem pela
            vossa graça celebramos esta solenidade. Por nosso Senhor...
          </Text>
          <Text className="h3">Postcomúnio</Text>
          <Text className="text-base">
            Ouvi as nossas preces, Senhor, e permiti que sejamos protegidos
            incessantemente com os auxílios daqueles cuja solenidade celebramos.
            Por nosso Senhor...
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
