import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";

export default function PagePent20() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Segundo Domingo depois de Pentecostes</Text>

          <Text className="h3">Intróito</Text>

          <Text className="em">Sl. 17, 19-20</Text>

          <Language>
            <Text className="latin">
              Factus est Dóminus protéctor meus, et edúxit me in latitúdinem:
              salvum me fecit, quóniam vóluit me.{" "}
              <Text className="latin">Ps. ib., 2-3</Text> Díligam te, Dómine,
              virtus mea: Dóminus firmaméntum meum et refúgium meum et liberátor
              meus.<Text className="versicle"> ℣. </Text>Gloria Patri...
            </Text>
            <Text className="vernacular">
              O Senhor fez-se o meu protector e conduziu-me para o largo: E,
              porque me amava, salvou-me.{" "}
              <Text className="vernacular">Sl. ib., 2-3</Text> Amar-Vos-ei,
              Senhor, pois sois a minha fortaleza. Sim, o Senhor é o meu
              sustentáculo, refúgio e libertador.
              <Text className="versicle"> ℣. </Text>Glória ao Pai...
            </Text>
          </Language>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Sancti nóminis tui, Dómine, timórem páriter et amórem fac nos
              habére perpétuum: quia numquam tua gubernatióne destítuis, quos in
              soliditáte tuæ dilectiónis instítuis. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Fazei, Senhor, que possuamos perpetuamente o temor e o amor do
              vosso santo nome, porquanto nunca cessais de inspirar e dirigir
              aqueles em quem infundistes solidamente o vosso amor. Por nosso
              Senhor...
            </Text>
          </Language>

          <Text className="h3">Epístola</Text>

          <Text className="em">1 Jo. 3, 13-18</Text>

          <Language>
            <Text className="latin">
              Léctio Epístolæ beáti Joánnis Apóstoli.
            </Text>
            <Text className="vernacular">Lição da Ep.ª do B. Ap.º João.</Text>
            <Text className="latin">
              Caríssimi: Nolíte mirári, si odit vos mundus. Nos scimus, quóniam
              transláti sumus de morte ad vitam, quóniam dilígimus fratres. Qui
              non díligit, manet in morte: omnis, qui odit fratrem suum,
              homícida est. Et scitis, quóniam omnis homícida non habet vitam
              ætérnam in semetípso manéntem. In hoc cognóvimus caritátem Dei,
              quóniam ille ánimam suam pro nobis pósuit: et nos debémus pro
              frátribus ánimas pónere. Qui habúerit substántiam hujus mundi, et
              víderit fratrem suum necessitátem habére, et cláuserit víscera sua
              ab eo: quómodo cáritas Dei manet in eo? Filíoli mei, non diligámus
              verbo neque lingua, sed ópere et veritáte.
            </Text>
            <Text className="vernacular">
              Caríssimos: Não vos admireis se porventura o mundo vos odeia.
              Sabemos que passámos da morte à vida, porque amamos os nossos
              irmãos. Aquele que não ama, permanece na morte. Aquele que odiar o
              seu irmão, é homicida; e bem sabeis que em nenhum homicida
              permanece a vida eterna. Por este sinal conhecemos o amor de Deus:
              É que, assim como Ele deu a vida por nós, assim também devemos dar
              a vida pelos nossos irmãos. Se alguém, tendo bens neste mundo e
              vendo seu irmão com necessidade, lhe fecha o coração, porventura
              permanece nele o amor de Deus? Meus filhinhos: Não amemos somente
              com palavras e com desejos, mas com obras e verdade.
            </Text>
          </Language>

          <Text className="h3">Gradual</Text>

          <Text className="em">Sl. 119, 1-2</Text>

          <Language>
            <Text className="latin">
              Ad Dóminum, cum tribulárer, clamávi, et exaudívit me.
              <Text className="versicle"> ℣. </Text>Dómine, libera ánimam meam a
              lábiis iníquis, et a lingua dolósa.
            </Text>
            <Text className="vernacular">
              Quando estava na tribulação, clamei pelo Senhor, que me ouviu.
              <Text className="versicle"> ℣. </Text>
              Livrai, Senhor, a minha alma dos lábios mentirosos e da língua
              traiçoeira.
            </Text>
            <Text className="latin">
              Allelúja, allelúja.<Text className="versicle"> ℣. </Text>
              <Text className="latin">Ps. 7, 2</Text> Dómine, Deus meus, in te
              sperávi: salvum me fac ex ómnibus persequéntibus me et líbera me.
              Allelúja.
            </Text>
            <Text className="vernacular">
              Aleluia, aleluia.<Text className="versicle"> ℣. </Text>
              <Text className="vernacular">Sl. 7, 2</Text> Senhor, meu Deus,
              refugio-me em Vós: salvai-me das mãos dos meus perseguidores:
              livrai-me. Aleluia.
            </Text>
          </Language>

          <Text className="h3">Evangelho</Text>

          <Text className="em">Lc. 14, 16-24</Text>

          <Language>
            <Text className="latin">
              <Text className="cross"> ✠ </Text> Sequéntia sancti Evangélii
              secúndum Lucam.
            </Text>
            <Text className="vernacular">
              <Text className="cross"> ✠ </Text> Continuação do santo Evangelho
              segundo S. Lucas.
            </Text>
            <Text className="latin">
              In illo témpore: Dixit Jesus pharisǽis parábolam hanc: Homo quidam
              fecit cœnam magnam, et vocávit multos. Et misit servum suum hora
              cœnæ dícere invitátis, ut venírent, quia jam paráta sunt ómnia. Et
              cœpérunt simul omnes excusáre. Primus dixit ei: Villam emi, et
              necésse hábeo exíre et vidére illam: rogo te, habe me excusátum.
              Et alter dixit: Juga boum emi quinque et eo probáre illa: rogo te,
              habe me excusátum. Et álius dixit: Uxórem duxi, et ídeo non possum
              veníre. Et revérsus servus nuntiávit hæc dómino suo. Tunc irátus
              paterfamílias, dixit servo suo: Exi cito in pláteas et vicos
              civitátis: et páuperes ac débiles et cœcos et claudos íntroduc
              huc. Et ait servus: Dómine, factum est, ut imperásti, et adhuc
              locus est. Et ait dóminus servo: Exi in vias et sepes: et compélle
              intrare, ut impleátur domus mea. Dico autem vobis, quod nemo
              virórum illórum, qui vocáti sunt, gustábit cœnam meam.
            </Text>
            <Text className="vernacular">
              Naquele tempo, disse Jesus aos fariseus esta parábola: «Um homem
              fez uma lauta ceia, convidando para assistir muitas pessoas. À
              hora da comida, mandou um servo dizer aos convidados que viessem,
              porque estava tudo preparado. Então, todos, unanimemente, se
              escusaram. O primeiro disse-lhe: Comprei um campo e tenho
              necessidade de ir vê-lo; rogo-te, pois, me dês como escusado,
              segundo disse: Comprei cinco juntas de bois, e vou
              experimentá-las; peço-te, pois, me escuses. Um outro disse: Eu
              casei-me; portanto, não posso assistir. Voltando o servo, contou
              ao senhor todas estas coisas. Então este indignou-se e disse ao
              servo: Vai depressa por essas praças e ruas da cidade, e conduz
              para aqui os pobres, os aleijados, os cegos e os coxos. Depois
              disse o servo: Senhor, fiz o que me mandastes e ainda há lugar.
              Respondeu ele ao servo: «Vai pelos caminhos e valados e obriga-os
              a entrar, porque quero que minha casa fique cheia. Eu vos afirmo
              que nenhum do que haviam sido convidados provará a minha ceia».
            </Text>
          </Language>

          <Text className="h3">Ofertório</Text>

          <Text className="em">Sl. 6, 5</Text>

          <Language>
            <Text className="latin">
              Dómine, convértere, et éripe ánimam meam: salvum me fac propter
              misericórdiam tuam.
            </Text>
            <Text className="vernacular">
              Senhor, volvei para mim a vossa face: e livrai a minha alma:
              salvai-me pela vossa misericórdia.
            </Text>
          </Language>

          <Text className="h3">Secreta</Text>

          <Language>
            <Text className="latin">
              Oblátio nos, Dómine, tuo nómini dicánda puríficet: et de die in
              diem ad cœléstis vitæ tránsferat actiónem. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Senhor, que a oblação que vai ser consagrada ao vosso nome nos
              purifique; e que dia a dia nos aperfeiçoe na prática de uma vida
              toda celestial. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Comúnio</Text>

          <Text className="em">Sl. 12, 6</Text>

          <Language>
            <Text className="latin">
              Cantábo Dómino, qui bona tríbuit mihi: et psallam nómini Dómini
              altíssimi.
            </Text>
            <Text className="vernacular">
              Cantarei hinos ao Senhor, porque me cumulou de benefícios.
              Cantarei salmos ao nome do altíssimo Senhor.
            </Text>
          </Language>

          <Text className="h3">Postcomúnio</Text>

          <Language>
            <Text className="latin">
              Sumptis munéribus sacris, quǽsumus, Dómine: ut cum frequentatióne
              mystérii, crescat nostræ salútis efféctus. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Havendo recebido estes dons sacratíssimos. Vos imploramos, Senhor,
              fazei que pela recepção frequente deste mystério nos sejam
              aumentados os frutos da salvação. Por nosso Senhor...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
