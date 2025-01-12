import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function PageAnjos() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Missa dos Anjos</Text>
          <View className="aside">Para a Terça-feira</View>
          <Text className="h3">Intróito</Text>
          <LinkCard
            href="/missal/santos/03-24#intróito"
            title="S. Gabriel, Arcanjo"
          />
          <Text className="h3">Oração</Text>
          <LinkCard
            href="/missal/santos/05-08#oração"
            title="Aparição de Arcanjo S. Miguel"
          />
          <Text className="h3">Epístola</Text>
          <Text className="em">Ap. 5, 11-14</Text>
          <View className="side-by-side">
            <Text className="text-base">
              Léctio libri Apocalýpsis beáti Joánnis Apóstoli.
            </Text>
            <Text className="text-base">
              Lição do Apocalipse do B. Ap.º João.
            </Text>
            <Text className="text-base">
              In diébus illis: Audívi vocem Angelórum multórum in circúitu
              throni, et animálium, et seniórum: et erat númerus eórum mília
              mílium, dicéntium voce magna: Dignus est Agnus, qui occísus est,
              accípere virtútem, et divinitátem, et sapiéntiam, et fortitúdinem,
              et honórem, et glóriam, et benedictiónem. Et omnem creatúram, quæ
              in cœlo est, et super terram, et sub terra, et quæ sunt in mari,
              et quæ in eo: omnes audívi dicéntes: Sedénti in throno, et Agno:
              benedíctio, et honor, et glória, et potéstas in sǽcula sæculórum.
              Et quátuor animália dicébant: Amen. Et vigínti quátuor senióres
              cecidérunt in fácies suas: et adoravérunt vivéntem in sǽcula
              sæculórum.
            </Text>
            <Text className="text-base">
              Naqueles dias, ouvi em tomo do trono a voz de muitos Anjos e de
              anciãos. Havia milhares e milhares deles, os quais diziam com voz
              forte: «O Cordeiro, que foi morto, é digno de receber o poder, a
              divindade, a sabedoria, a força, a honra, a glória e as bênçãos!»
              E ouvi todas as criaturas, que estão no céu, na terra, debaixo da
              terra, no mar e em toda sua extensão que diziam: «Àquele que está
              assentado no trono e ao Cordeiro bênçãos, honra, glória em todos
              os séculos dos séculos!» E ouvi os quatro animais que diziam:
              «Amen!» E os vinte e quatro anciãos prostraram a face em terra e
              adoraram Aquele que vive em todos os séculos dos séculos!
            </Text>
          </View>
          <Text className="h3">Gradual</Text>
          <Text className="em">Sl. 148,1-2</Text>
          <View className="side-by-side">
            <Text className="text-base">
              Laudáte Dóminum de cœlis: laudáte eum in excélsis. ℣. Laudáte eum,
              omnes Angeli ejus: laudáte eum, omnes virtútes ejus.
            </Text>
            <Text className="text-base">
              Louvai o Senhor nos céus! Louvai-O nas alturas celestiais. ℣.
              Louvai-O vós, Anjos; louvai-O vós, que constituís o seu exército.
            </Text>
            <Text className="text-base">
              Allelúja, allelúja. ℣. <Text className="em">Ps. 137, 1-2</Text> In
              conspéctu Angelórum psallam tibi: adorábo ad templum sanctum tuum,
              et confitébor nómini tuo. Allelúja.
            </Text>
            <Text className="text-base">
              Aleluia, aleluia. ℣. <Text className="em">Sl. 137, 1-2</Text>{" "}
              Cantarei louvores em vossa honra diante dos Anjos; adorar-Vos-ei
              no vosso santo templo: e glorificarei o vosso nome. Aleluia.
            </Text>
          </View>
          Depois da Septuagésima omite-se o Aleluia e o Verso que se segue, e
          diz-se:
          <Text className="h3">Trato</Text>
          <Text className="em">Sl. 102, 20</Text>
          <View className="side-by-side">
            <Text className="text-base">
              Benedícite Dóminum, omnes Angeli ejus: potentes virtúte, qui
              fácitis verbum ejus. ℣. <Text className="em">ibid., 21-22</Text>{" "}
              Benedícite Dómino, omnes virtútes ejus: minístri ejus, qui fácitis
              voluntátem ejus. ℣. Benedicite Dómino, ómnia ópera ejus: in omni
              loco dominatiónis ejus, bénedic, ánima mea, Dómino.
            </Text>
            <Text className="text-base">
              Bendizei o Senhor, ó vós, todos os Anjos, heróis poderosos,
              executores das suas ordens e sempre fiéis aos seus chamamentos. ℣.{" "}
              <Text className="em">ibid., 21-22</Text> Bendizei o Senhor, vós
              todos, que formais o seu exército; sois os seus ministros e
              cumpris a sua vontade! Bendizei o Senhor, ó obras todas do mesmo
              Senhor! Bendizei o Senhor em todos os lugares do seu domínio, ó
              minha alma.
            </Text>
          </View>
          <View className="aside">
            No Tempo Pascal omite-se o Gradual e o Trato, e diz-se:
          </View>
          <View className="side-by-side">
            <Text className="text-base">
              Allelúja, allelúja. ℣. <Text className="em">Ps. 137, 1-2</Text> In
              conspéctu Angelórum psallam tibi: adorábo ad templum sanctum tuum,
              et confitébor nómini tuo Allelúja. ℣.{" "}
              <Text className="em">Matth. 28, 2</Text> Angelus Dómini descéndit
              de cœlo, et accédens revólvit lápidem, et sedébat super eum.
              Allelúja.
            </Text>
            <Text className="text-base">
              Aleluia, aleluia. ℣. <Text className="em">Sl. 137, 1-2</Text>{" "}
              Cantarei louvores em vossa honra diante dos Anjos; adorar-Vos-ei
              no vosso santo templo; e glorificarei o vosso nome. Aleluia. ℣.{" "}
              <Text className="em">Mt. 28, 2</Text> Um Anjo do Senhor, havendo
              descido do céu, afastou a pedra e assentou-se sobre ela. Aleluia.
            </Text>
          </View>
          <Text className="h3">Evangelho</Text>
          <Text className="em">Jo. 1, 47-51</Text>
          <View className="side-by-side">
            <Text className="text-base">
              <Text className="cross text-red-500">✠</Text> Sequéntia sancti
              Evangélii secúndum Joánnem.
            </Text>
            <Text className="text-base">
              <Text className="cross text-red-500">✠</Text> Continuação do santo
              Evangelho segundo S. João.
            </Text>
            <Text className="text-base">
              In illo témpore: Vidit Jesus Nathánaël veniéntem ad se, et dicit
              de eo: Ecce vere Israëlíta, in quo dolus non est. Dicit ei
              Nathánaël: Unde me nosti? Respóndit Jesus et dixit ei: Priúsquam
              te Philíppus vocáret, cum esses sub ficu, vidi te. Respóndit ei
              Nathánaël et ait: Rabbi, tu es Fílius Dei, tu es Rex Israël.
              Respóndit Jesus et dixit ei: Quia dixi tibi: Vidi te sub ficu,
              credis: majus his vidébis. Et dicit ei: Amen, amen, dico vobis,
              vidébitis cœlum apértum, et Angelos Dei ascendéntes, et
              descendéntes supra Fílium hóminis.
            </Text>
            <Text className="text-base">
              Naquele tempo, Jesus viu Natánael que vinha para Ele, e disse a
              seu respeito: «Eis aí um verdadeiro Israelita no qual não há
              dolo». E Natánael disse-Lhe: «Donde me conheceis?». Jesus
              respondeu-lhe, dizendo: «Antes que Filipe te chamasse, vi-te Eu
              quando tu estavas debaixo da figueira». Respondeu então Natánael:
              «Rabi (Mestre) sois o filho de Deus; sois o Rei de Israel?». E
              Jesus disse-lhe: «Porque te disse: vi-te debaixo da figueira,
              acreditaste; pois ainda verás coisas maiores». Depois acrescentou:
              «Em verdade, em verdade te digo: verás o céu aberto e os Anjos de
              Deus, subindo e descendo sobre o Filho do homem».
            </Text>
          </View>
          <Text className="h3">Ofertório</Text>
          <LinkCard
            href="/missal/santos/05-08#ofertório"
            title="Aparição de Arcanjo S. Miguel"
          />
          <Text className="h3">Secreta</Text>
          <LinkCard
            href="/missal/santos/05-08#secreta"
            title="Aparição de Arcanjo S. Miguel"
          />
          <Text className="h3">Comúnio</Text>
          <View className="side-by-side">
            <Text className="text-base">
              Angeli, Archángeli, Throni et Dominatiónes, Principátus et
              Potestátes, Virtútes cœlórum, Chérubim atque Séraphim, Dóminum
              benedícite in ætérnum. (T. P. Allelúja.)
            </Text>
            <Text className="text-base">
              Bendizei o Senhor em todos os séculos, ó Anjos, Arcanjos, Tronos e
              Dominações, Principados, Potestades, Virtudes do céu, Querubins e
              Serafins. (T. P. Aleluia.)
            </Text>
          </View>
          <Text className="h3">Postcomúnio</Text>
          <View className="side-by-side">
            <Text className="text-base">
              Repléti, Dómine, benedictióne cœlésti, supplíciter implorámus: ut,
              quod fragili celebrámus offício, sanctórum Angelórum atque
              Archangelórum nobis prodésse sentiámus auxílio. Per Dóminum
              nostrum...
            </Text>
            <Text className="text-base">
              Senhor, estando nós, agora, repletos com a bênção celestial,
              permiti Vos suplicamos, que este sacrifício, que celebramos apesar
              da nossa fragilidade, nos seja útil com o auxílio dos vossos
              Santos Anjos e Arcanjos. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
