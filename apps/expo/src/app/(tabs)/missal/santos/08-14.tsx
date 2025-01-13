import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page0814() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Vigília da Assunção da B. Virgem Maria, a 14 de Agosto
          </Text>

          <Text className="h3">Intróito</Text>

          <LinkCard
            href="/missal/comum/21virgemnaomartir2#intróito"
            title="Virgem não Mártir - Missa Vultum tuum"
          />

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, qui virginálem aulam beátæ Maríæ, in qua habitáres, elígere
              dignátus es: da, quǽsumus; ut, sua nos defensióne munitos,
              jucúndos fácias suæ interésse festivitáti: Qui vivis...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, que escolhestes para vossa morada o seio virginal da B.
              Virgem Maria, concedei-nos, Vos rogamos, que, munidos com sua
              protecção, possamos com alegria associar-nos à sua festa. Ó Vós,
              que viveis e reinais...
            </Text>
          </View>

          <Text className="aside">
            Oração, Secreta e Postcomúnio S. Eusébio como na [Missa Os
            justi](/missal/comum/14confessoresnaopontifices1).
          </Text>

          <Text className="h3">Epístola</Text>

          <LinkCard
            href="/missal/santos/07-16#epístola"
            title="B. Virgem Maria do Monte Carmelo"
          />

          <Text className="h3">Gradual</Text>

          <LinkCard
            href="/missal/santos/07-02#gradual"
            title="Visitação da B. Virgem Maria"
          />

          <Text className="h3">Evangelho</Text>

          <LinkCard
            href="/missal/comum/26festasmaria1#evangelho"
            title="Festas da B. Virgem Maria - Missa Salve, sancta Parens"
          />

          <Text className="h3">Ofertório</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Beáta es, Virgo María, quæ ómnium portásti Creatórem: genuísti qui
              te fecit, et in ætérnum pérmanes Virgo.
            </Text>
            <Text className="text-base vernacular">
              Bem-aventurada sois, ó Virgem Maria, pois trouxestes no vosso seio
              o Criador de todas as coisas. Gerastes Aquele que vos criou; e
              permanecereis eternamente Virgem.
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Múnera nostra, Dómine, apud cleméntiam tuam Dei Genetrícis
              comméndet orátio: quam idcírco de praesénti sǽculo transtulísti;
              ut pro peccátis nostris apud te fiduciáliter intercédat. Per
              eúndem Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Que as nossas ofertas, Senhor, tenham como recomendação junto da
              vossa clemência as súplicas da Mãe de Deus, a qual arrebatastes
              deste mundo para interceder com confiança pelos nossos pecados
              junto de Vós. Pelo mesmo nosso S...
            </Text>
          </View>

          <Text className="h3">Comúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Beáta víscera Maríæ Vírginis, quæ portavérunt ætérni Patris
              Fílium.
            </Text>
            <Text className="text-base vernacular">
              Bem-aventuradas as entranhas da B. Virgem Maria, que trouxeram
              encerrado o Filho do Pai Eterno.
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Concéde, miséricors Deus, fragilitáti nostræ præsídium: ut, qui
              sanctæ Dei Genetrícis festivitátem prævénimus; intercessiónis ejus
              auxílio a nostris iniquitátibus resurgámus. Per eúndem Dóminum
              nostrum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus de misericórdia, dignai-Vos vir em auxílio da nossa
              fragilidade, a fim de que, antecipando a festividade da Santa Mãe
              de Deus, possamos, com o auxílio da sua intercessão, ressuscitar
              das nossas iniquidades. Pelo mesmo nosso...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
