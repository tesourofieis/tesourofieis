import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";

export default function Page0129() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Francisco de Sales, B. C. e Doutor, a 29 de Janeiro
          </Text>

          <Text className="comment">
            O Verbo feito carne nos manifesta, por sua doutrina, os mistérios da
            sabedoria divina e, por seus milagres, o seu amor eterno. S.
            Francisco de Sales, Doutor da Igreja (Intr.) participou desta
            ciência do Verbo Encarnado (Grad.) e operou como Ele, por sua doce
            caridade, (Or.) prodígios de conversão. Enviado a «pregar a palavra
            de Deus (Ep.) aos Calvinistas do Chablais, restituiu à fé católica
            sessenta mil desses hereges» (Breviário). Consagrado Bispo de
            Genebra e fundador da Ordem da Visitação, irradiou, sobre essa dupla
            familia (Com.), a influência de seu zelo apostólico e doce
            santidade. «Brilhe a vossa luz diante dos homens, céus» (Ev.). O
            Santo revelou especialmente a bondade de Deus. «Se houver algum
            excesso, dizia S. Francisco de Sales, antes seja do lado da doçura».
            «Quero amá-lo tanto, esse querido próximo, que amá-lo tanto! aprouve
            a Deus assim fazer o meu coração! Ah! quando estaremos todos
            embebidos na doçura e caridade para com o próximo?» S. Francisco de
            Sales morreu em Lyon no ano de 1622. Recordemos também a dupla
            palavra do Santo: «uma colherada de mel pega mais moscas do que cem
            barris de vinagre». «O bem não faz barulho, o barulho não faz o
            bem».
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/13doutores">
              Missa In médio Ecclésiae
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Deus, qui ad animárum salútem beátum Francíscum Confessórem tuum
              atque Pontíficem ómnibus ómnium factum esse voluísti: concéde
              propítius; ut, caritátis tuæ dulcédine perfúsi, ejus dirigéntibus
              mónitis ac suffragántibus méritis, ætérna gáudia consequámur. Per
              Dóminum nostrum...
            </Text>
            <Text className="vernacular">
              Ó Deus, que para a salvação das almas quisestes que o B.
              Francisco, vosso Confessor e Pontífice, se fizesse tudo para
              todos, concedei-nos benigno que, cheios da doçura do vosso amor,
              guiados pelos seus conselhos e protegidos pelos seus merecimentos,
              alcancemos as alegrias eternas. Por nosso Senhor...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
