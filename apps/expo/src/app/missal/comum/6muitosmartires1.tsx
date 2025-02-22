import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Link } from "expo-router";
import React from "react";

export default function Page6Muitosmartires1() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Muitos Mártires</Text>

          <Text className="h3">Intróito</Text>

          <Text className="em">Sl. 78, 11, 12 & 10</Text>

          <View className="side-by-side">
            <Text className="latin">
              Intret in conspéctu tuo, Dómine, gémitus compeditórum: redde
              vicínis nostris séptuplum in sinu eórum: víndica sánguinem
              Sanctórum tuórum, qui effúsus est.{" "}
              <Text className="latin">Ps. ibid., 1</Text> Deus, venérunt gentes
              in hereditátem tuam: polluérunt templum sanctum tuum: posuérunt
              Jerúsalem in pomórum custódiam.
              <Text className="versicle"> ℣. </Text>Gloria Patri...
            </Text>
            <Text className="vernacular">
              Que os gemidos dos cativos cheguem à vossa presença, Senhor.
              Castigai os nossos inimigos sete vezes por cada injúria que nos
              têm feito: vingai o sangue que os vossos Santos derramaram.{" "}
              <Text className="vernacular">Ps. ibid., 1</Text> Ó Deus, os povos
              invadiram a vossa herança, profanaram o vosso sagrado templo e
              reduziram Jerusalém a um monte de ruínas!
              <Text className="versicle"> ℣. </Text>Glória ao Pai...
            </Text>
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="latin">
              Beatórum Mártyrum paritérque Pontíficum nos, quǽsumus, Dómine,
              festa tueántur: et eórum comméndet orátio veneránda. Per
              Dóminum...
            </Text>
            <Text className="vernacular">
              Vos suplicamos, Senhor, que a festa dos vossos B. B. Mártires e
              Pontífices <Text className="vernacular">N.</Text> e{" "}
              <Text className="text-red-500">N.</Text>, nos proteja, e que sua
              veneranda oração nos sirva de recomendação junto de Vós. Por nosso
              Senhor...
            </Text>
          </View>

          <Text className="aside">
            Não sendo Pontífice, diz-se a
            <Link href="/missal/comum/7muitosmartires2#oração">
              Oração da Missa seguinte.
            </Link>
          </Text>

          <Text className="h3">Epístola</Text>

          <Text className="em">Sb. 3, 1-8</Text>

          <View className="side-by-side">
            <Text className="latin">Léctio libri Sapiéntiæ.</Text>
            <Text className="vernacular">Lição do Livro da Sabedoria.</Text>
            <Text className="latin">
              Justorum ánimæ in manu Dei sunt, et non tanget illos torméntum
              mortis. Visi sunt oculis insipiéntium mori: et æstimála est
              afflíctio exitus illórum: et quod a nobis est iter, extermínium:
              illi autem sunt in pace. Et si coram homínibus torménta passi
              sunt, spes illórum immortalitáte plena est. In paucis vexáti, in
              multis bene disponéntur: quóniam Deus tentávit eos, et invenit
              illos dignos se. Tamquam aurum in fornáce probávit illos, et quasi
              holocáusti hóstiam accépit illos, et in témpore erit respéctus
              illorum. Fulgébunt justi, et tamquam scintíllæ in arundinéto
              discúrrent. Judicábunt natiónes, et dominabúntur pópulis, et
              regnábit Dóminus illórum in perpétuum.
            </Text>
            <Text className="vernacular">
              As almas dos justos estão nas mãos de Deus; por isso o tormento da
              morte os não tocará. Pareciam mortos aos olhos dos insensatos: a
              sua saída do mundo parecia uma aflição; a sua separação de nós uma
              calamidade; mas, agora, estão em paz; e, ainda que tenham sofrido
              diante dos homens, a sua esperança está toda na imortalidade.
              Depois de haverem sofrido uma pena ligeira, receberam uma grande
              recompensa, pois Deus provou-os e achou-os dignos de si.
              Provou-os, como ao ouro, na fornalha; recebeu-os, como uma hóstia
              de holocausto; e para eles olhará benigno, quando vier o seu
              tempo. Os justos brilharão e resplandecerão, como as chamas, que
              se ateiam entre os canaviais. Eles julgarão as nações e dominarão
              os povos; e o Senhor reinará com eles para sempre.
            </Text>
          </View>

          <Text className="h3">Gradual</Text>

          <Text className="em">Ex. 15,11</Text>

          <View className="side-by-side">
            <Text className="latin">
              Gloriósus Deus in Sanctis suis: mirábilis in majestáte, fáciens
              prodígia.<Text className="versicle"> ℣. </Text>
              <Text className="latin">ibid., 6</Text> Déxtera tua, Dómine,
              glorificáta est in virtúte: déxtera manus tua confrégit inimícos.
            </Text>
            <Text className="vernacular">
              Deus é glorioso em seus Santos: e admirável na sua majestade,
              praticando prodígios.<Text className="versicle"> ℣. </Text>
              <Text className="vernacular">ibid., 6</Text> Senhor, a vossa
              dextra engrandeceu-se pela sua força: a vossa dextra esmagou os
              inimigos.
            </Text>
            <Text className="latin">
              Allelúja, allelúja.<Text className="versicle"> ℣. </Text>
              <Text className="latin">Eccli. 44, 14</Text> Córpora Sanctórum in
              pace sepúlta sunt, et nómina eórum vivent in generatiónem et
              generatiónem. Allelúja.
            </Text>
            <Text className="vernacular">
              Aleluia, aleluia.<Text className="versicle"> ℣. </Text>
              <Text className="vernacular">Ecl. 44, 14</Text> Senhor, os corpos
              dos vossos Santos foram sepultados em paz e o seu nome subsistirá
              de geração em geração. Aleluia.
            </Text>
          </View>

          <Text className="aside">
            Após a Septuagésima omite-se o Aleluia e o seguinte e diz-se:
          </Text>

          <Text className="h3">Trato</Text>

          <Text className="em">Sl. 125, 5-6</Text>

          <View className="side-by-side">
            <Text className="latin">
              Qui séminant in lácrimis, in gáudio metent.
              <Text className="versicle"> ℣. </Text>Eúntes ibant et flébant,
              mitténtes sémina sua.<Text className="versicle"> ℣. </Text>
              Veniéntes autem vénient cum exsultatióne, portántes manípulos
              suos.
            </Text>
            <Text className="vernacular">
              Aqueles que semeiam com lágrimas ceifarão com júbilo.
              <Text className="versicle"> ℣. </Text>Iam, caminhavam e lançavam a
              semente à terra, chorando.<Text className="versicle"> ℣. </Text>
              Porém, quando voltavam, exultavam de alegria, trazendo os seus
              molhos de trigo.
            </Text>
          </View>

          <Text className="h3">Evangelho</Text>

          <Text className="em">Lc. 21, 9-19</Text>

          <View className="side-by-side">
            <Text className="latin">
              <Text className="cross"> ✠ </Text> Sequéntia sancti Evangélii
              secúndum Lucam.
            </Text>
            <Text className="vernacular">
              <Text className="cross"> ✠ </Text> Continuação do santo Evangelho
              segundo S. Lucas.
            </Text>
            <Text className="latin">
              In illo témpore: Dixit Jesus discípulis suis: Cum audieritis
              prǿlia et seditiónes, nolíte terréri: opórtet primum hæc fíeri,
              sed nondum statim finis. Tunc dicébat illis: Surget gens contra
              gentem, et regnum advérsus regnum. Et terræmótus magni erunt per
              loca, et pestiléntiæ, et fames, terrorésque de cœlo, et signa
              magna erunt. Sed ante hæc ómnia injícient vobis manus suas, et
              persequéntur tradéntes in synagógas et custódias, trahéntes ad
              reges et prǽsides propter nomen meum: contínget autem vobis in
              testimónium. Pónite ergo in córdibus vestris non præmeditári,
              quemádmodum respondeátis. Ego enim dabo vobis os et sapiéntiam,
              cui non potérunt resístere et contradícere omnes adversárii
              vestri. Tradémini autem a paréntibus, et frátribus, et cognátis,
              et amícis, et morte affícient ex vobis: et éritis ódio ómnibus
              propter nomen meum: et capíllus de cápite vestro non períbit. In
              patiéntia vestra possidébitis ánimas vestras.
            </Text>
            <Text className="vernacular">
              Naquele tempo, disse Jesus aos discípulos: «Quando ouvirdes falar
              em guerras e sedições, não vos assusteis; pois é necessário que
              estas coisas aconteçam, primeiramente; mas isto não será logo o
              fim». «Então, dizia-lhes Ele, levantar-se-á povo contra povo e
              reino contra reino; em diversos lugares haverá tremores de terra,
              peste, fome e também aparecerão coisas espantosas, grandes sinais
              no céu e outros prodígios. Mas, antes que tudo isto aconteça,
              lançar-vos-ão as mãos e perseguir-vos-ão, entregando-vos às
              sinagogas, lançando-vos nas prisões e conduzindo-vos à força
              diante dos reis e dos governadores, por causa do meu nome. Isto
              acontecerá para que deis testemunho da verdade. Gravai, pois, no
              vosso coração este pensamento: não premediteis de que modo haveis
              de responder, porque vos darei palavras e sabedoria, a que os
              vossos inimigos não poderão resistir, nem responder. Sereis
              entregues pelos vossos próprios pais, irmãos, parentes e amigos,
              que darão a morte a alguns de vós. Sereis aborrecidos de todos,
              por causa do meu nome; todavia, não se perderá nem um só cabelo
              das vossas cabeças. Com a vossa paciência possuireis as vossas
              almas».
            </Text>
          </View>

          <Text className="h3">Ofertório</Text>

          <Text className="em">Sl. 67, 36</Text>

          <View className="side-by-side">
            <Text className="latin">
              Mirábilis Deus in Sanctis suis: Deus Israël, ipse dabit virtútem
              et fortitúdinem plebi suæ: benedíctus Deus, allelúja.
            </Text>
            <Text className="vernacular">
              Deus é admirável em seus Santos. Deus de Israel dará ao seu povo a
              força e a coragem. Bendito Ele seja, pois. Aleluia.
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="latin">
              Adésto, Dómine, supplicatiónibus nostris, quas in Sanctórum tuórum
              commemoratióne deférimus: ut, qui nostræ justítiæ fidúciam non
              habémus, eórum, qui tibi placuérunt, méritis adjuvémur. Per
              Dóminum...
            </Text>
            <Text className="vernacular">
              Atendei, Senhor, às súplicas que Vos dirigimos em memória dos
              vossos Santos, a fim de que nós, que não temos confiança na nossa
              própria justiça, sejamos auxiliados pelos méritos daqueles que Vos
              agradaram nesta vida. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Comúnio</Text>

          <Text className="em">Sb. 3, 4, 5 & 6</Text>

          <View className="side-by-side">
            <Text className="latin">
              Et si coram homínibus torménta passi sunt, Deus tentávit eos:
              tamquam aurum in fornáce probávit eos, et quasi holocáusta accépit
              eos.
            </Text>
            <Text className="vernacular">
              Se sofreram tormentos diante dos homens, foi para Deus os provar.
              Deus provou-os na fornalha, como ao ouro, e recebeu-os, como
              hóstia de holocausto.
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="latin">
              Quǽsumus, Dómine, salutáribus repléti mystériis: ut, quorum
              sollémnia celebrámus, eórum oratiónibus adjuvémur. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Fortificados com vossos salutares mystérios, dignai-Vos
              conceder-nos, Senhor, a graça da assistência das orações daqueles
              cuja festa celebrámos. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
