import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function PagePedropaulo() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Missa dos S. S. Apóstolos Pedro e Paulo</Text>

          <Text className="h3">Intróito</Text>

          <LinkCard
            href="/missal/santos/11-30#intróito"
            title="S. André, Apóstolo"
          />

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, cujus déxtera beátum Petrum, ambulántem in flúctibus, ne
              mergerétur, eréxit, et coapóstolum ejus Paulum, tértio
              naufragántem, de profúndo pélagi liberávit: exáudi nos propítius,
              et concéde; ut, ambórum méritis, æternitátis glóriam consequámur:
              Qui vivis et regnas...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, cuja mão poderosa sustentou o B. Pedro quando caminhava
              sobre as águas, não deixando que ele se afundasse, e salvou do
              fundo do mar o seu companheiro de apostolado, Paulo, quando este
              naufragou pela terceira vez, ouvi-nos propício, a fim de que,
              pelos méritos destes dois Apóstolos, obtenhamos a glória eterna. Ó
              Vós, que...
            </Text>
          </View>

          <Text className="h3">Epístola</Text>

          <Text className="em">Act. 5, 12-16</Text>

          <View className="side-by-side">
            <Text className="text-base latin">Léctio Actuum Apostolorum.</Text>
            <Text className="text-base vernacular">
              Lição dos Actos dos Apóstolos.
            </Text>
            <Text className="text-base latin">
              In diébus illis: Per manus Apostolórum fiébant signa et prodígia
              multa in plebe. Et erant unanímiter omnes in pórticu Salomónis.
              Ceterórum autem nemo audébat se conjúngere illis: sed magnificábat
              eos pópulus. Magis autem augebátur credéntium in Dómino multitúdo
              virórum ac mulíerum, ita ut in pláteas ejícerent infírmos, et
              pónerent in léctulis ac grabátis, ut, veniénte Petro, saltem umbra
              illíus obumbráret quemquam illórum, et liberaréntur ab
              infirmitátibus suis. Concurrébat autem et multitúdo vicinárum
              civitátum Jerúsalem, afferéntes ægros et vexátos a spirítibus
              immúndis: qui curabántur omnes.
            </Text>
            <Text className="text-base vernacular">
              Naqueles dias, os Apóstolos praticavam muitos milagres e prodígios
              no meio do povo, conservando-se todos nas galerias de Salomão com
              o mesmo pensamento. Nenhum dos outros ousava juntar-se a eles,
              embora o povo lhes tecesse muitos louvores. E o número daqueles,
              tantos homens como mulheres, que acreditavam no Senhor, aumentava
              cada vez mais. E conduziam os doentes para as praças em leitos e
              macas para que, quando Pedro passasse, ao menos a sua sombra
              cobrisse alguns deles e ficassem sarados de suas enfermidades.
              Acorriam até das cidades vizinhas de Jerusalém muitas pessoas,
              trazendo enfermos, vindo também outros que estavam atormentados
              pelos espíritos imundos. E todos eram curados.
            </Text>
          </View>

          <Text className="h3">Gradual</Text>

          <Text className="em">Sl. 44, 17 & 18</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Constítues eos príncipes super omnem terram: mémores erunt nóminis
              tui, Dómine. ℣. Pro pátribus tuis nati sunt tibi fílii: proptérea
              pópuli confitebúntur tibi.
            </Text>
            <Text className="text-base vernacular">
              Vós os instituístes príncipes em todo o universo: e eles
              perpetuarão a glória do vosso nome, Senhor, em toda a terra. ℣.
              Para substituir os vossos pais, nascer-vos-ão filhos: pelo que os
              povos vos louvarão.
            </Text>
            <Text className="text-base latin">
              Allelúja, allelúja. ℣.{" "}
              <Text className="text-base latin">Ps. 138, 17</Text> Nimis
              honoráti sunt amíci tui, Deus: nimis confortátus est principátus
              eórum. Allelúja.
            </Text>
            <Text className="text-base vernacular">
              Aleluia, aleluia. ℣.{" "}
              <Text className="text-base vernacular">Sl. 138, 17</Text> Honrais
              largamente os vossos amigos, ó Deus; o seu poder tem-se
              fortalecido extraordinariamente. Aleluia.
            </Text>
          </View>

          <Text className="aside">
            Depois da Septuagésima omite-se o Aleluia e o que se segue, e diz-se
            o:
          </Text>

          <Text className="h3">Trato</Text>

          <Text className="em">Sl. 125, 5-6</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Qui séminant in lácrimis, in gáudio metent. ℣. Eúntes ibant et
              flébant, mitténtes sémina sua. ℣. Veniéntes autem vénient cum
              exsultatióne, portántes manípulos suos.
            </Text>
            <Text className="text-base vernacular">
              Aqueles que semeiam com lágrimas, colherão com risos. ℣. Iam
              chorando e lançando à terra as suas sementes: ℣. Mas, quando
              regressaram, vinham alegres, transportando feixes do seu trigo.
            </Text>
          </View>

          <Text className="h3">Evangelho</Text>

          <LinkCard
            href="/missal/comum/16abades#evangelho"
            title="Abades - Missa Os justi"
          />

          <Text className="h3">Ofertório</Text>

          <Text className="em">Sl. 18, 5</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              In omnem terram exivit sonus eórum: et in fines orbis terræ verba
              eórum.
            </Text>
            <Text className="text-base vernacular">
              O som da sua voz ecoou por toda a terra: e as suas palavras
              estenderam-se até às extremidades da terra.
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Offérimus tibi, Dómine, preces et múnera: quæ ut tuo sint digna
              conspéctu. Apostolórum tuórum Petri et Pauli précibus adjuvémur.
              Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Senhor, Vos oferecemos as nossas orações e oblatas; e, para que
              sejam dignas dos vossos olhares, fazei que os vossos Apóstolos
              Pedro e Paulo as acompanhem com suas preces. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Comúnio</Text>

          <Text className="em">Mt. 19, 28</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Vos, qui secuti estis me, sedebitis super sedes, judicantes
              duodecim tribus Israel.
            </Text>
            <Text className="text-base vernacular">
              Ó vós, que me acompanhastes, assentar-vos-eis em doze tronos e
              julgareis as doze tribos de Israel.
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Prótege, Dómine, pópulum tuum: et Apostolórum tuórum Petri et
              Pauli patrocínio confidéntem, perpétua defensióne consérva. Per
              Dóminum nostrum...
            </Text>
            <Text className="text-base vernacular">
              Protegei o vosso povo, Senhor, e, visto que ele se coloca sob o
              patrocínio dos vossos Apóstolos Pedro e Paulo, dignai-Vos
              defendê-lo e guardá-lo perpetuamente. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
