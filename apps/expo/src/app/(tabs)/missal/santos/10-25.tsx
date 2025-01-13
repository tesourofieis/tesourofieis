import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page1025() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. S. Crisanto e Daria, Mártires, a 25 de Outubro
          </Text>

          <View className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/6muitosmartires1">
              Missa Intret in
            </Link>{" "}
            , excepto:
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Beatórum Mártyrum tuórum, Dómine, Chrysánthi et Dáriæ, quǽsumus,
              adsit nobis orátio: ut, quos venerámur obséquio, eórum pium
              júgiter experiámur auxílium. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Que a oração dos vossos B. B. Mártires Crisanto e Daria nos
              assista sempre, Senhor, Vos rogamos, a fim de que, venerando-os
              com as nossas homenagens, experimentemos incessantemente o seu
              piedoso auxílio. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Evangelho</Text>

          <Text className="em">Lc. 11, 47-51</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              <Text className="text-base latin">✠</Text> Sequéntia sancti
              Evangélii secúndum Lucam.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">✠</Text> Continuação do
              santo Evangelho segundo S. Lucas.
            </Text>
            <Text className="text-base latin">
              In illo témpore: Dicébat Jesus scribis et pharisǽis: Væ vobis, qui
              ædificátis monuménta prophetárum: patres autem vestri occidérunt
              illos. Profécto testificámini, quod consentítis opéribus patrum
              vestrórum: quóniam ipsi quidem eos occidérunt, vos autem
              ædificátis eórum sepúlcra. Proptérea et sapiéntia Dei dixit:
              Mittam ad illos prophétas et apóstolos, et ex illis occídent et
              persequántur: ut inquirátur sanguis ómnium prophetárum, qui
              effúsus est a constitutióne mundi a generatióne ista, a sánguine
              Abel usque ad sánguinem Zacharíæ, qui périit inter altáre et ædem.
              Ita dico vobis, requirétur ab hac generatióne.
            </Text>
            <Text className="text-base vernacular">
              Naquele tempo, disse Jesus aos escribas e fariseus: «Ai de vós,
              que edificais túmulos aos Profetas, que vossos pais mataram. Deste
              modo servis de testemunho e aplaudis as obras dos vossos pais,
              pois mataram-nos; e edificais túmulos em sua honra. Eis porque a
              sabedoria de Deus disse: enviar-lhes-ei Profetas e Apóstolos; mas
              matarão uns e expulsarão outros, a fim de que a esta geração seja
              tomada conta do sangue dos profetas, que derramou desde a criação
              do mundo e do sangue de Abel, até ao sangue de Zacarias, morto
              entre o altar e o santuário. Sim, eu vo-lo digo: disto será pedida
              conta a esta geração».
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Póuli tui, quǽsumus, Dómine, tibi grata sit hóstia, quæ in
              natalítiis sanctórum Mártyrum tuórum Chrysánthi et Dáriæ
              sollémniter immolátur. Per Dóminum nostrum...
            </Text>
            <Text className="text-base vernacular">
              Senhor, Vos rogamos, fazei que Vos seja agradável esta hóstia, que
              solenemente é imolada em honra dos vossos Santos Mártires Crisanto
              e Daria. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Mýsticis, Dómine, repléti sumus votis et gáudiis: præsta,
              quǽsumus; ut, intercessiónibus sanctórum Mártyrum tuórum
              Chrysánthi et Dáriæ, quæ temporáliter ágimus, spirituáliter
              consequámur. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Havendo sido repletos com os gozos místicos, qual era o objecto
              dos nossos votos, Senhor, Vos suplicamos, concedei-nos que por
              intercessão dos vossos Santos Mártires Crisanto e Daria alcancemos
              espiritualmente o que agora celebrámos. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
