import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0510() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Antonino, B. Conf., a 10 de Maio</Text>

          <View className="aside">
            Como na [Missa Státuit ei
            Dóminus](/missal/comum/11confessorespontifices1), excepto:
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Sancti Antonini, Dómine, Confessóris tui atque Pontíficis méritis
              adjuvémur: ut, sicut te in illo mirábilem prædicámus, ita in nos
              misericórdem fuísse gloriémur. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Que os méritos de Santo Antonino, vosso Confessor e Pontífice, nos
              auxiliem, Senhor, de modo que, assim como Vos louvamos pelas
              maravilhas que operastes em seu proveito, assim também possamos
              glorificar as vossas misericórdias para connosco. Por nosso
              Senhor...
            </Text>
          </View>

          <Text className="h2">
            Comemoração dos S. S. Mártires Gordiano e Epímaco
          </Text>

          <View className="aside">
            Aquando da celebração da Missa S. S. Mártires Gordiano e Epímaco
            Como na
            <Link className="link" href="/missal/comum/10martires">
              Missa Sancti tui
            </Link>{" "}
            , excepto:
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Da, quǽsumus, omnípotens Deus: ut, qui beatórum Mártyrum tuórum
              Gordiáni et Epimachi sollémnia cólimus, eórum apud te
              intercessiónibus adjuvémur. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Vos suplicamos, ó Deus omnipotente, permiti que, celebrando nós a
              festa dos vossos B. B. Mártires Gordiano e Epímaco, alcancemos o
              auxílio da sua intercessão junto de vós. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Hóstias tibi, Dómine, beatórum Martyrum tuórum Gordiáni et
              Epimáchi dicátas méritis, benígnus assúme: et ad perpétuum nobis
              tríbue proveníre subsídium. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Aceitai benigno, Senhor, as hóstias que Vos oferecemos pelos
              méritos dos vossos B. B. Mártires Gordiano e Epímaco e fazei que
              nos sirvam de perpétuo auxílio. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Quǽsumus, omnípotens Deus: ut, qui cœléstia aliménta percépimus,
              intercedéntibus sanctis Martýribus tuis Gordiáno et Epímacho, per
              hæc contra ómnia advérsa muniámur. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus omnipotente, Vos suplicamos, visto que recebemos o alimento
              celestial, dignai-Vos permitirm pela intercessão dos vossos Santos
              Mártires, que por este alimento sejamos robustecidos contra todas
              as adversidades. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
