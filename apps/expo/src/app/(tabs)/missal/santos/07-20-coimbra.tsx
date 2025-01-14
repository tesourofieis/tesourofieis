import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page0720Coimbra() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Santa Colomba, Virgem e Mártir, a 20 de Julho, Na Diocese de Coimbra
          </Text>
          <Text className="h3">Intróito</Text>
          <Text className="text-base">
            Quem me dará asas, como as da pomba! Então voarei e descansarei. Eis
            que me afastei, fugindo, e permaneci na solidão. Esperava Aquele que
            me salvou. Ouvi, ó Deus, a minha oração; não desprezeis a minha
            súplica; atendei-me e ouvi-me. ℣. Glória ao Pai...
          </Text>
          <Text className="h3">Oração</Text>
          <Text className="text-base">
            Ó omnipotente e eterno Deus, olhai propício para a nossa fraqueza;
            e, assim como concedestes a fortaleza à B. Colomba, vossa Virgem,
            para suportar o martírio da Cruz, assim também, protegendo-nos com
            sua intercessão, acolhei-nos à dextra da vossa majestade. Por nosso
            Senhor...
          </Text>
          <Text className="h3">Epístola</Text>
          <LinkCard
            href="/missal/comum/21virgemnaomartir2#epístola"
            title="Virgem não Mártir - Missa Vultum tuum"
          />
          <Text className="h3">Gradual</Text>
          <Text className="text-base">
            O meu inimigo arruinou as minhas veredas e afligiu-me até à
            desolação. Armou o seu arco, apontou-o para mim, como alvo da sua
            seta, e cravou nos meus rins as setas da sua aljava. Aleluia,
            aleluia. Suportei a dor das setas até à morte de cruz, para ser fiel
            ao meu Senhor Jesus. Aleluia.
          </Text>
          <Text className="h3">Evangelho</Text>
          <LinkCard
            href="/missal/comum/17virgensmartires1#evangelho"
            title="Virgens Mártires - Missa Loquébar"
          />
          <Text className="h3">Ofertório</Text>
          <Text className="text-base">
            Nunca Deus permita que me glorie senão na Cruz de nosso Senhor Jesus
            Cristo, por quem o mundo está crucificado para mim e eu para o
            mundo.
          </Text>
          <Text className="h3">Secreta</Text>
          <Text className="text-base">
            Senhor, que este sacrifício, que Vos é oferecido pelos auxílios dos
            méritos da B. Colomba, vossa Virgem e Mártir, nos conserve a vida e
            nos proteja. Por nosso Senhor...
          </Text>
          <Text className="h3">Comúnio</Text>
          <Text className="text-base">
            Ergue-te, minha amiga, minha única beleza, e vem. Ó minha pomba,
            escondida nas fendas das rochas e nas cavernas dos muros em ruínas,
            mostra-me o teu rosto e faz-me ouvir a tua voz. A tua voz é doce, o
            teu rosto é belo.
          </Text>
          <Text className="h3">Postcomúnio</Text>
          <Text className="text-base">
            Pela participação que tivemos neste mystério, Senhor, confirmai os
            vossos servos na confissão da verdadeira fé, pela qual a B. Colomba
            não duvidou sofrer o martírio da Cruz e derramar o sangue. Por nosso
            Senhor...
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
