import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page0526() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Filipe de Néri, a 26 de Maio</Text>

          <Text className="comment">
            S. Filipe nasceu na Florença no século XVI; tudo deixou para servir
            ao divino Mestre (Evangelho) e fundou a Congregação do Oratório. O
            Espírito Santo o inflamára com tanto amor de Deus (Intróito,
            Aleluia, Secreta), que as palpitações do coração lhe quebraram duas
            costelas (Comúnio). Passava as noites inteiras na contemplação das
            coisas celestes e o «Espírito de verdade» lhe ensinava a verdadeira
            sabedoria (Epístola). Suas conferências com Jesus o cumulavam de tal
            alegria que exclamava: «Basta, Senhor, basta». Amava os jovens:
            «Diverti-vos, lhes dizia, mas não ofendendo a Deus». Morreu em 1595,
            na festa do Santíssimo Sacramento. Semelhante a S. Filipe, corramos,
            com o coração dilatado de santa e amorosa alegria, na senda dos
            mandamentos de Deus (Oração).
          </Text>

          <Text className="h3">Intróito</Text>

          <Text className="em">Rm. 5, 5</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Cáritas Dei diffúsa est in córdibus nostris per inhabitántem
              Spíritum ejus in nobis. (T.P. Allelúja, allelúja.){" "}
              <Text className="text-base latin">Ps. 102, 1</Text> Benedic, ánima
              mea, Dómino: et ómnia, quæ intra me sunt, nómini sancto ejus. ℣.
              Gloria Patri...
            </Text>
            <Text className="text-base vernacular">
              O amor de Deus difundiu-se nos nossos corações pelo seu Espírito
              que habita em nós. (T.P. Aleluia, aleluia.){" "}
              <Text className="text-base vernacular">Sl. 102, 1</Text> Bendizei,
              ó minha alma, o Senhor: que tudo quanto me pertence bendiga o seu
              santo nome. ℣. Glória ao Pai...
            </Text>
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, qui beátum Philippum Confessórem tuum Sanctórum tuórum
              glória sublimásti: concéde propítius; ut, cujus sollemnitáte
              lætámur, ejus virtútum proficiámus exémplo. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, que elevastes o B. Filipe, vosso Confessor, à sublime
              glória dos vossos Santos, concedei-nos propício que, celebrando
              com alegria esta festa, alcancemos proveito com o exemplo das suas
              virtudes. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Epístola</Text>

          <LinkCard
            title="Epístola S. Tomás Aquino"
            href="/missal/santos/03-07#epístola"
          />

          <Text className="h3">Gradual</Text>

          <Text className="em">Sl. 33, 12 & 6</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Veníte, fílii, audíte me: timórem Dómini docébo vos. ℣. Accédite
              ad eum, et illuminámini: et fácies vestræ non confundéntur.
            </Text>
            <Text className="text-base vernacular">
              Vinde, meus filhos, e escutai-me: Ensinar-vos-ei a temer o Senhor.
              ℣. Aproximai-Vos d’Ele e ficareis iluminados: então a vossa face
              não ficará envergonhada.
            </Text>
            <Text className="text-base latin">
              Allelúja, allelúja. ℣.{" "}
              <Text className="text-base latin">Thren. 1, 13</Text> De excélso
              misit ignem in óssibus meis, et erudívit me. Allelúja.
            </Text>
            <Text className="text-base vernacular">
              Aleluia, aleluia. ℣.{" "}
              <Text className="text-base vernacular">Lm. 1, 13</Text> Do alto
              dos céus enviou e fogo sobre os meus ossos e instruiu-me. Aleluia.
            </Text>
          </View>

          <Text className="aside">
            Durante o Tempo Pascal omite-se o Gradual e diz-se a seguinte
            Aleluia:
          </Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Allelúja, allelúja. ℣.{" "}
              <Text className="text-base latin">Thren. 1, 13</Text> De excélso
              misit ignem in óssibus meis, et erudívit me. Allelúja. ℣.{" "}
              <Text className="em">Ps. 38, 4</Text> Concáluit cor meum intra me:
              et in meditatióne mea exardéscet ignis. Allelúja.
            </Text>
            <Text className="text-base vernacular">
              Aleluia, aleluia. ℣.{" "}
              <Text className="text-base vernacular">Lm. 1, 13</Text> Do alto
              dos céus enviou e fogo sobre os meus ossos e instruiu-me. Aleluia.
              ℣. <Text className="em">Sl. 38, 4</Text> Meu coração inflamou-se
              no meu peito. Enquanto eu meditava, o fogo abrasou-me. Aleluia.
            </Text>
          </View>

          <Text className="h3">Evangelho</Text>

          <LinkCard
            title="Evangelho Confessores não Pontífices"
            href="/missal/comum/14confessoresnaopontifices1#evangelho"
          />

          <Text className="h3">Ofertório</Text>

          <Text className="em">Sl. 18, 32</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Viam mandatórum tuórum cucúrri, cum dilatásti cor meum. (T.P.
              Allelúja.)
            </Text>
            <Text className="text-base vernacular">
              Eu corri pelo caminho dos vossos mandamentos, porquanto dilatastes
              o meu coração. (T.P. Aleluia.)
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Sacrifíciis præséntibus, quǽsumus, Dómine, inténde placatus: et
              præsta; ut illo nos igne Spíritus Sanctus inflámmet, quo beáti
              Phílippi cor mirabíliter penetrávit. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Olhai aplacado para o presente sacrifício, Senhor, Vos suplicamos,
              e fazei que o Espírito Santo nos inflame naquele fogo que penetrou
              maravilhosamente no coração do B. Filipe. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Comúnio</Text>

          <Text className="em">Sl. 83, 3</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Cor meum et caro mea exsultavérunt in Deum vivum. (T.P. Allelúja.)
            </Text>
            <Text className="text-base vernacular">
              O meu coração e a minha carne exultaram em Deus vivo. (T.P.
              Aleluia.)
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Cœléstibus, Dómine, pasti delíciis: quǽsumus; ut beáti Philippi
              Confessóris tui méritis et imitatióne, semper eadem, per quæ
              veráciter vívimus, appetámus. Per Dóminum nostrum...
            </Text>
            <Text className="text-base vernacular">
              Alimentados com as celestiais delícias, Senhor, Vos pedimos que,
              pelos méritos do B. Filipe, vosso Confessor, e imitando os seus
              exemplos, aspiremos sempre a este alimento, que nos dará a
              verdadeira vida. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
