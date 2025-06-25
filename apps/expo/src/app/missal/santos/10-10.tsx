import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";

export default function Page1010() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Francisco de Bórgia, a 10 de Outubro</Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/16abades">
              Missa Os justi
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Dómine Jesu Christe, veræ humilitátis et exémplar et prǽmium:
              quǽsumus; ut, sicut beátum Francíscum in terréni honóris contémptu
              imitatórem tui gloriósum effecísti, ita nos ejúsdem imitatiónis et
              glóriæ tríbuas esse consórtes: Qui vivis...
            </Text>
            <Text className="vernacular">
              Senhor Jesus Cristo, prémio e modelo da verdadeira humildade,
              concedei-nos, Vos rogamos, que, assim como permitistes que o B.
              Francisco se tornasse vosso glorioso imitador no desprezo das
              honras terrenas, assim também nos façais imitar as suas virtudes e
              compartilhar da sua glória. Ó Vós, que, sendo...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
