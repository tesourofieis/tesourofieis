import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0430() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Santa Catarina de Sena, Virgem, a 30 de Abril
          </Text>

          <View className="aside">
            «A Santa Ordem dos Dominicanos que apresentava ontem uma rosa rubra
            a Jesus ressuscitado, oferece-Lhe hoje um lírio de brilhante
            alvura». Santa Catarina de Sena (1347-1380) foi a penúltima de 24
            filhos. Desde a infância, escolhera a Jesus por Esposo. Impondo ao
            corpo delicado tremendas mortificações, só buscava sustento, no meio
            dos jejuns prolongados, na Comunhão Eucarística. Recebeu os estigmas
            do Divino Crucificado e uma ciência infusa sobre os mystérios mais
            profundos da Religião. Persuadido por ela, Gregório XI deixou
            Avignon a fim de voltar para Roma. Atingindo a Santa o seu 33º ano
            de idade, entrou com o Divino Esposo no céu, para tomar parte no
            banquete nupcial, nas santas alegrias da Páscoa eterna. «Ofereçamos
            hoje a Deus a hóstia santa toda embalsamada no virginal odor da
            bem-aventurada Catarina» para recebermos do Senhor, em troca, a vida
            eterna.
          </View>

          <View className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/20virgemnaomartir1">
              Missa Dilexísti justitiam
            </Link>{" "}
            , excepto:
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Da, quǽsumus, omnípotens Deus: ut, qui beátæ Catharínæ Vírginis
              tuæ natalítia cólimus; et ánnua sollemnitáte lætámur, et tantæ
              virtútis proficiámus exémplo. Per Dóminum...
            </Text>
            <Text className="text-base">
              Permiti, ó Deus omnipotente, Vos rogamos, que, honrando nós o
              nascimento no céu da B. Catarina, vossa Virgem, nos alegremos
              nesta solenidade anual e aproveitemos com o exemplo de tão grande
              virtude. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Acéndant ad te, Dómine, quas in beátæ Catharínæ sollemnitáte
              offérimus, preces, et hóstia salutáris, virgíneo fragrans odóre.
              Per Dóminum...
            </Text>
            <Text className="text-base">
              Deixai subir até Vós, Senhor, as preces que Vos oferecemos na
              solenidade da B. Catarina, e aceitai também esta salutar hóstia,
              perfumada com seu virginal odor. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Æternitátem nobis, Dómine, cónferat, qua pasti sumus, mensa
              cœléstis: quæ beátæ Catharinæ Vírginis vitam étiam áluit
              temporálem. Per Dóminum...
            </Text>
            <Text className="text-base">
              Que este celestial banquete em que nos alimentámos, Senhor, nos
              comunique a vida eterna, como ele alentou também a vida temporal
              da B. Virgem Catarina. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
