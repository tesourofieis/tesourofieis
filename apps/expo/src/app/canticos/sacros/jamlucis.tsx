import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageJamlucis() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Jam lucis</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Jam lucis orto sídere, Deum precémur súpplices, Ut in diúrnis
              áctibus Nos servet a nocéntibus.
            </Text>
            <Text className="text-base vernacular">
              Com o sol que se alevanta, A Deus se elevam nossas súplicas, Nos
              actos diurnos, Nos preserve de todo o mal.
            </Text>
            <Text className="text-base latin">
              Linguam refrénans témperet, Ne litis horror ínsonet: Visum fovéndo
              cóntegat, Ne vanitátes háuriat.
            </Text>
            <Text className="text-base vernacular">
              Moderai a nossa língua, A mentira nos não manche, Nos anime e
              guarde a vista, Para em vaidades se não perder.
            </Text>
            <Text className="text-base latin">
              Sint pura cordis íntima, Absístat et vecórdia; Carnis terat
              supérbiam Potus cibíque párcitas.
            </Text>
            <Text className="text-base vernacular">
              Seja puro em nosso peito o coração, E banida a loucura: A carne
              nos tempere a suberba, E a bebida reprima o orgulho.
            </Text>
            <Text className="text-base latin">
              Ut, cum dies abscésserit, Noctémque sors redúxerit, Mundi per
              abstinéntiam Ipsi canámus glóriam.
            </Text>
            <Text className="text-base vernacular">
              E quando a tarde descer, E quando a noite chegar, Esquecendo-nos
              do mundo, Cantemos a vossa glória.
            </Text>
            <Text className="text-base latin">
              Deo Patri sit glória, Eiúsque soli Fílio, Cum Spíritu Paráclito,
              Nunc et per omne sǽculum.
            </Text>
            <Text className="text-base vernacular">
              A Deus Pai se dê glória, E ao seu Filho também, Assim como ao
              Espírito Paráclito, Agora e para todo o sempre.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
