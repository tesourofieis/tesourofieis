import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function PageEleicaopapa() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Para a Eleição do Sumo Pontífice</Text>

          <Text className="h3">Intróito</Text>

          <Text className="em">1 Sm. 2, 35</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Suscitábo mihi sacerdótem fidélem, qui juxta cor meum et ánimam
              meam fáciet: et ædificábo ei domum fidélem, et ambulábit coram
              Christo meo cunctis diébus. (T. P. Allelúja, allelúja.){" "}
              <Text className="text-base latin">Ps. 131, 1</Text> Meménto,
              Dómine, David: et omnis mansuetúdinis ejus. ℣. Gloria Patri...
            </Text>
            <Text className="text-base vernacular">
              Farei aparecer um sacerdote fiel que tudo fará segundo o meu
              coração e a minha alma: e por ele edificarei uma casa fiel e
              estará sempre na presença do meu Cristo em todos os dias. (T. P.
              Aleluia, aleluia.){" "}
              <Text className="text-base vernacular">Sl. 131, 1</Text>{" "}
              Lembrai-Vos, Senhor, de David e de toda sua mansidão. ℣. Glória ao
              Pai...
            </Text>
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Súpplici, Dómine, humilitáte depóscimus: ut sacrosánctæ Románæ
              Ecclésiæ concédat Pontíficem illum tua imménsa píetas; qui et pio
              in nos stúdio semper tibi plácitus, et tuo pópulo pro salúbri
              regímine sit assidue ad glóriam tui nóminis reveréndus. Per
              Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Da vossa misericórdia, Senhor, imploramos, súplices, que, pela
              vossa infinita bondade, à vossa Igreja Romana concedais um tal
              Pontífice que sempre Vos agrade pelo seu zelo e piedade e que pelo
              seu sábio governo em honra do vosso nome atraia a assídua
              veneração do vosso povo. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Epístola</Text>

          <Text className="em">Heb. 4, 16; 5, 1-7</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Léctio Epístolæ beáti Pauli Apóstoli ad Hebrǽos.
            </Text>
            <Text className="text-base vernacular">
              Lição da Epístola do bem-aventurado Apóstolo Paulo aos Hebreus.
            </Text>
            <Text className="text-base latin">
              Fratres: Adeámus cum fidúcia ad thronum grátiæ, ut misericórdiam
              conséquimur et grátiam inveniámus in auxílio opportúno. Omnis
              namque póntifex ex homínibus assúmptus, pro homínibus constitúitur
              in iis, quæ sunt ad Deum, ut ófferat dona, et sacrifícia pro
              peccátis: qui condolére possit iis, qui ígnorant et errant:
              quóniam et ipse circúmdatus est infirmitáte: et proptérea debet,
              quemádmodum pro pópulo, ita étiam et pro semetípso offérre pro
              peccátis. Nec quisquam sumit sibi honórem, sed qui vocátur a Deo,
              tamquam Aaron. Sic et Christus non semetípsum clarificávit, ut
              póntifex fíeret, sed qui locútus est ad eum: Fílius meus es tu,
              ego hódie génui te. Quemádmodum et in álio loco dicit: Tu es
              sacérdos in ætérnum, secúndum órdinem Melchísedech. Qui in diébus
              carnis suæ preces supplicationésque ad eum, qui possit illum
              salvum fácere a morte, cum clamóre válido et lácrimis ófferens,
              exaudítus est pro sua reveréntia.
            </Text>
            <Text className="text-base vernacular">
              Acerquemo-nos confiadamente do trono da graça, a fim de
              alcançarmos misericórdia e encontrarmos graça para nosso auxílio
              em ocasião oportuna. Porquanto todo o Pontífice é escolhido entre
              os homens, em favor dos quais é instituído para o que respeita a
              Deus, Para oferecer dons e sacrifícios pelos pecados, para se
              compadecer dos ignorantes e extraviados; e porque ele está também
              cercado de fraqueza, e por causa dela, deve oferecer sacrifícios,
              tanto por si Próprio como pelo povo. Ninguém procure para si esta
              honra, mas aguarde que seja chamado como Aarão. E assim aconteceu
              com Cristo, que se não exaltou a Si próprio, fazendo-se Pontífice,
              mas foi glorificado por Aquele que Lhe disse: «Tu és o meu Filho;
              hoje te gerei». E do mesmo modo disse em outra ocasião: «Tu és
              Sacerdote, eternamente, segundo a ordem de Melquisedeque». O qual,
              havendo oferecido nos dias da sua vida mortal orações e súplicas
              com fortes clamores e lágrimas Àquele que podia salvá-l’O da
              morte, foi atendido pela devida reverência.
            </Text>
          </View>

          <Text className="h3">Gradual</Text>

          <Text className="em">Lv. 21, 10</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Póntifex sacérdos magnus inter fratres suos, super cujus caput
              fusum est unctiónis óleum, et cujus manus in sacerdótio consecrátæ
              sunt, vestitúsque est sanctis véstibus: débuit per ómnia frátribus
              similári. ℣. <Text className="text-base latin">Hebr. 2, 17</Text>{" "}
              Ut miséricors fíeret, et fidélis póntifex ad Deum: ut
              repropitiáret delícta pópuli.
            </Text>
            <Text className="text-base vernacular">
              O Pontífice é o sacerdote magno entre os seus irmãos, sobre cuja
              cabeça foi lançado o óleo da unção e cujas mãos foram consagradas
              para o sacerdócio: está revestido com as vestes sagradas e em tudo
              deverá assemelhar-se a seus irmãos: ℣.{" "}
              <Text className="text-base vernacular">Heb. 2, 17</Text> A fim de
              ser um Pontífice misericordioso e fiel junto de Deus, para expiar
              os pecados do povo.
            </Text>
            <Text className="text-base latin">
              Allelúja, allelúja. ℣.{" "}
              <Text className="text-base latin">Levit. 21, 8</Text> Sacerdos sit
              sanctus, sicut et ego sanctus sum, Dóminus, qui sanctífico vos.
              Allelúja.
            </Text>
            <Text className="text-base vernacular">
              Aleluia, aleluia. ℣.{" "}
              <Text className="text-base vernacular">Lv. 21, 8</Text> Que o
              Sacerdote seja santo, como Eu, o Senhor, que vos santifico, sou
              santo. Aleluia.
            </Text>
          </View>

          <Text className="aside">
            Após a Septuagésima, omite-se o Aleluia e o seguinte e diz-se:
          </Text>

          <Text className="h3">Trato</Text>

          <Text className="em">Sl. 131, 8-10</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Surge, Dómine, in réquiem tuam: tu et arca sanctificatiónis tuæ.
              ℣. Sacerdótes tui induántur justítiam, et sancti tui exsúltent. ℣.
              Propter David, servum tuum, non avértas fáciem Christi tui.
            </Text>
            <Text className="text-base vernacular">
              Erguei-Vos, Senhor, e ide onde Vós repousais: Vós e a arca da
              vossa santificação. ℣. Que os vossos Sacerdotes se revistam de
              justiça e que os vossos Santos rejubilem. ℣. Por causa de David,
              vosso servo, não afasteis a face do vosso Cristo.
            </Text>
          </View>

          <Text className="aside">
            No Tempo Pascal omite-se o Gradual e o Trato e diz-se:
          </Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Allelúja, allelúja. ℣.{" "}
              <Text className="text-base latin">Levit. 21, 8</Text> Sacérdos sit
              sanctus, sicut et ego sanctus sum, Dóminus, qui sanctífico vos.
              Allelúja. ℣. <Text className="em">Joann. 10, 14</Text> Ego sum
              pastor bonus: et cognósco oves meas, et cognóscunt me meæ.
              Allelúja.
            </Text>
            <Text className="text-base vernacular">
              Aleluia, aleluia. ℣.{" "}
              <Text className="text-base vernacular">Lv. 21, 8</Text> Que o
              Sacerdote seja santo, como Eu, o Senhor, que vos santifico, sou
              santo. Aleluia. ℣. <Text className="em">Jo. 10, 14</Text> Eu sou o
              bom pastor: e conheço as minhas ovelhas e elas conhecem-me.
              Aleluia.
            </Text>
          </View>

          <Text className="h3">Evangelho</Text>

          <LinkCard
            title="Missa da Vigília de Pentecostes"
            href="/missal/pentecostes/pasc6-6#evangelho"
          />

          <Text className="h3">Ofertório</Text>

          <Text className="em">3 Esd. 5, 40</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Non participéntur sancta, donec exsúrgat póntifex in ostensiónem
              et veritátem. (T. P. Allelúja.)
            </Text>
            <Text className="text-base vernacular">
              Que se não celebre o sacrifício enquanto não surgir o Pontífice
              que há-de mostrar a verdade. (T. P. Aleluia.)
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Tuæ nobis, Dómine, abundántia pietátis indúlgeat: ut per sacra
              múnera, quæ tibi reverénter offérimus, gratum majestáti tuæ
              Pontíficem sanctæ matris Ecclésiæ regímini præésse gaudeámus. Per
              Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Que a vossa grande clemência seja indulgente para connosco,
              Senhor, e, pela reverente oferta destes sagrados dons, permiti que
              gozemos a alegria de ver presidir ao governo da santa Madre Igreja
              um Pontífice agradável à vossa majestade. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Comúnio</Text>

          <Text className="em">Ex. 29,29-30</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Veste sancta utétur póntifex, qui fúerit constitútus, et
              ingrediétur tabernáculum testimónii, ut minístret in sanctuário.
              (T. P. Allelúja.)
            </Text>
            <Text className="text-base vernacular">
              O Pontífice que for escolhido use vestes sagradas e entre no
              tabernáculo da aliança para ministrar no santuário. (T. P.
              Aleluia.)
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Pretiósi Córporis et Sánguinis tui nos, Dómine, sacraménto
              reféctos, mirífica tuæ majestátis grátia de illíus Summi
              Pontíficis concessióne lætíficet: qui et plebem tuam virtútibus
              ínstruat, et fidélium mentes spirituálium aromátum odóre
              perfúndat: Qui vivis et regnas...
            </Text>
            <Text className="text-base vernacular">
              Havendo sido saciados com vosso precioso corpo e sangue, Senhor,
              alegre-nos a admirável graça da vossa majestade, concedendo-nos um
              Pontífice que instrua o vosso povo na virtude e embalsame as almas
              dos fiéis com o perfume das graças espirituais. Ó Vós, que viveis
              e reinais...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
