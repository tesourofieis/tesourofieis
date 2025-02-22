import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page0809Outro() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Vigília de S. Lourenço, Mártir, a 9 de Agosto
          </Text>

          <Text className="h3">Intróito</Text>

          <Text className="em">Sl. 111, 9</Text>

          <View className="side-by-side">
            <Text className="latin">
              Dispérsit, dedit paupéribus: justítia ejus manet in sǽculum
              sǽculi: cornu ejus exaltábitur in glória.{" "}
              <Text className="latin">Ps. ibid., 1</Text> Beátus vir, qui timet
              Dóminum: in mandátis ejus cupit nimis.
              <Text className="versicle"> ℣. </Text>Gloria Patri...
            </Text>
            <Text className="vernacular">
              Distribuiu liberalmente os seus bens pelos pobres: a sua justiça
              subsistirá em todos os séculos dos séculos: e o seu poder será
              exaltado com glória.{" "}
              <Text className="vernacular">Sl. ibid., 1</Text> Bem-aventurado o
              varão que teme o Senhor e que põe todo seu zelo em cumprir os seus
              Mandamentos.<Text className="versicle"> ℣. </Text>Glória ao Pai...
            </Text>
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="latin">
              Adésto, Dómine, supplicatiónibus nostris: et intercessióne beáti
              Lauréntii Mártyris tui, cujus prǽvénimus festivitátem; perpétuam
              nobis misericórdiam benígnus impénde. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Ouvi as nossas súplicas, Senhor, e, pela intercessão do B.
              Lourenço, vosso Mártir, cuja festa antecipamos, concedei-nos
              benignamente a vossa perpétua misericórdia. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Epístola</Text>

          <LinkCard
            href="/missal/comum/17virgensmartires1#epístola"
            title="Virgens Mártires - Missa Loquébar"
          />

          <Text className="h3">Gradual</Text>

          <Text className="em">Sl. 111, 9 & 2</Text>

          <View className="side-by-side">
            <Text className="latin">
              Dispersit, dedit paupéribus: justítia ejus manet in sǽculum
              sǽculi.<Text className="versicle"> ℣. </Text>Potens in terra erit
              semen ejus: generátio rectórum benedicétur.
            </Text>
            <Text className="vernacular">
              Distribuiu liberalmente os seus bens pelos pobres: a sua justiça
              subsistirá em todos os séculos dos séculos.
              <Text className="versicle"> ℣. </Text>Sua descendência será
              poderosa na terra, pois a geração dos justos será abençoada.
            </Text>
          </View>

          <Text className="h3">Evangelho</Text>

          <LinkCard
            href="/missal/comum/3martirpontifice#evangelho"
            title="Mártir Pontífice - Missa Sacerdótes Dei"
          />

          <Text className="h3">Ofertório</Text>

          <Text className="em">Jb. 16, 20</Text>

          <View className="side-by-side">
            <Text className="latin">
              Orátio mea munda est: et ídeo peto, ut detur locus voci meæ in
              cœlo: quia ibi est judex meus, et cónscius meus in excélsis:
              ascéndat ad Dóminum deprecátio mea.
            </Text>
            <Text className="vernacular">
              A minha oração é pura: eis porque peço que minha voz seja escutada
              no céu, pois lá está o meu Juiz; é nas alturas dos céus que está
              Aquele que conhece o íntimo do meu coração. Que minha deprecação
              suba até ao Senhor.
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="latin">
              Hóstias, Dómine, quas tibi offérimus, propítius súscipe: et,
              intercedénte beáto Lauréntio Mártyre tuo, víncula peccatórum
              nostrorum absólve. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Recebei propício, Senhor, estas hóstias, que Vos oferecemos; e,
              pela intercessão do B. Lourenço, vosso Mártir, livrai-nos das
              cadeias dos nossos pecados. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Comúnio</Text>

          <Text className="em">Mt. 16, 24</Text>

          <View className="side-by-side">
            <Text className="latin">
              Qui vult veníre post me, ábneget semetípsum, et tollat crucem
              suam, et sequátur me.
            </Text>
            <Text className="vernacular">
              Se alguém quer vir após mim, negue-se a si mesmo, tome a sua cruz
              e siga-me!
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="latin">
              Da, quǽsumus, Dómine, Deus noster: ut, sicut beáti Lauréntii
              Mártyris tui commemoratióne, temporáli gratulámur offício; ita
              perpétuo lætémur aspéctu. Per Dóminum nostrum...
            </Text>
            <Text className="vernacular">
              Ó Senhor, nosso Deus, Vos suplicamos, assim como tivemos a alegria
              de honrar temporalmente com este ofício a memória do B. Lourenço,
              vosso Mártir, assim também gozemos perpetuamente a felicidade da
              sua presença. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
