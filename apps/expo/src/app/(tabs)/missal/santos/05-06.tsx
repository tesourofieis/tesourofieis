import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0506() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. João (diante da porta latina), a 6 de Maio
          </Text>

          <Text className="comment">
            Jesus prometera a Tiago e a João, filhos de Zebedeu, que beberiam o
            cálice de sua paixão a fim de poderem participar do triunfo da sua
            ressurreição. O Imperador Domiciano chamou João a Roma, condenando-o
            a ser mergulhado numa caldeira de azeite fervendo. S. João, por um
            milagre extraordinário, saiu ileso e ainda mais vigoroso.
            Construíram naquele lugar um santuário junto à Porta Latina, o qual
            foi consagrado ao Santo Apóstolo. Aí se faz a Estação do Sábado da
            Paixão.
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/17virgensmartires1">
              Missa Loquébar
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, qui cónspicis, quia nos úndique mala nostra pertúrbant:
              præsta, quǽsumus; ut beáti Joánnis Apóstoli tui et Evangelístæ
              intercéssio gloriósa nos prótegat. Per Dominum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, que tão bem conheceis como estamos perturbados pelos males
              que nos cercam, concedei-nos, Vos suplicamos, que nos proteja a
              gloriosa intercessão do B. João, Vosso Apóstolo e Evangelista. Por
              nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Gradual</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Allelúja, allelúja. ℣.{" "}
              <Text className="text-base latin">Ps 91:13</Text> Justus ut palma
              florébit: sicut cedrus Líbani multiplicábitur. Allelúja
            </Text>
            <Text className="text-base vernacular">
              Aleluia, aleluia. ℣.{" "}
              <Text className="text-base vernacular">Sl. 91:13</Text> O justo
              florescerá, como a palmeira, e crescerá, como o cedro do Líbano.
              Aleluia.
            </Text>
            <Text className="text-base latin">
              <Text className="text-base latin">Ps 14:6</Text>
              ℣. Justus germinábit sicut lílium: et florébit in ætérnum ante
              Dóminum. Allelúja.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">Sl. 14:6</Text>
              ℣. O justo despontará, como o lírio, e florescerá eternamente na
              presença do Senhor. Aleluia.
            </Text>
          </View>

          <Text className="h3">Evangelho</Text>

          <Text className="em">Mt. 20, 20-23</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              <Text className="text-base latin">✠</Text> Sequéntia sancti
              Evangélii secúndum Matthǽum.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">✠</Text> Continuação do
              santo Evangelho segundo S. Mateus.
            </Text>
            <Text className="text-base latin">
              In llo témpore: Accessit ad Jesum mater filiórum Zebedǽi cum
              fíliis suis, adórans et petens áliquid ab eo. Qui dixit ei: Quid
              vis? Ait illi: Dic, ut sédeant hi duo fílii mei, unus ad déxteram
              tuam et unus ad sinístram in regno tuo. Respóndens autem Jesus,
              dixit: Néscitis, quid petátis. Potéstis bíbere cálicem, quem ego
              bibitúrus sum? Dicunt ei: Póssumus. Ait illis: Cálicem quidem meum
              bibétis: sédere autem ad déxteram meam vel sinístram, non est meum
              dare vobis, sed quibus parátum est a Patre meo.
            </Text>
            <Text className="text-base vernacular">
              Naquele tempo, a mãe dos filhos de Zebedeu aproximou-se de Jesus
              com seus dois filhos, adorando-O e querendo pedir-Lhe alguma
              coisa. Jesus disse-lhe: «Que quereis?». Ela respondeu: «Ordenai
              que estes meus dois filhos se assentem, um à vossa direita e o
              outro à vossa esquerda, no vosso reino». Jesus respondeu-lhe: «Não
              sabeis o que pedis. Podeis beber o cálice que Eu devo beber?».
              Eles responderam: «Podemos». E Jesus disse-lhes: «Bebereis, com
              efeito, o meu cálice; porém não depende de mim conceder-vos um
              lugar à minha direita ou à minha esquerda, pois isso é para
              aqueles para quem meu Pai o preparou».
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Refécti, Dómine, pane cœlésti: ad vitam, quǽsumus, nutriámur
              ætérnam. Per Dominum...
            </Text>
            <Text className="text-base vernacular">
              Havendo sido alimentados com o pão celestial, Vos rogamos, Senhor,
              fazei que com ele sejamos nutridos para a vida eterna. Por nosso
              Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
