import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import PaiNosso from "./../devocionario/oracoes/painosso";

export default function PageBaptismo() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Baptismo</Text>

          <Text className="h1">Apresentação do neófito e interrogatório</Text>

          <Text className="aside">
            Aquele que vai receber o Baptismo, estacionará à entrada do Templo,
            diante do Sacerdote, ficando o Padrinho ao lado direito e a Madrinha
            ao lado esquerdo. O Ministro apresenta-se e começa o interrogatório
            a que devem responder o Padrinho e a Madrinha.
          </Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              <Text className="text-base latin">Sac.</Text>{" "}
              <Text className="text-red-500">N.</Text> Quid petis ab Ecclésia
              Dei?
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">Sac.</Text>{" "}
              <Text className="text-red-500">N.</Text> O que pedes à Igreja de
              Deus?
            </Text>
            <Text className="text-base latin">
              <Text className="text-red-500">℟.</Text> Fidem.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-red-500">℟.</Text> A Fé.
            </Text>
            <Text className="text-base latin">
              <Text className="text-base latin">Sac.</Text> Fides, quid tibi
              præstat?
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">Sac.</Text> Para que te
              serve a Fé?
            </Text>
            <Text className="text-base latin">
              <Text className="text-red-500">℟.</Text> Vitam ætérnam.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-red-500">℟.</Text> Para alcançar a vida
              eterna.
            </Text>
            <Text className="text-base latin">
              <Text className="text-base latin">Sac.</Text> Si ígitur vis ad
              vitam íngredi, serva mandáta. Díliges Dóminum Deum tuum ex toto
              corde tuo, et ex tota ánima tua, et ex tota mente tua, et próximum
              tuum sicut teípsum.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">Sac.</Text> Se, portanto,
              queres alcançar a vida eterna, observa os Mandamentos. Amarás o
              Senhor, teu Deus, com todo teu coração, com toda tua alma e com
              toda tua inteligência, e amarás o próximo como a ti próprio.
            </Text>
          </View>

          <Text className="h1">Exorcismos e Ritos preparatórios</Text>

          <Text className="h2">Insuflação</Text>

          <Text className="aside">
            O Sacerdote sopra levemente três vezes sobre a cabeça do Neófito:
          </Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Exi ab eo (ea), immúnde spíritus, et da locum Spirítui Sancto
              Paráclito.
            </Text>
            <Text className="text-base vernacular">
              Espírito impuro, sai deste (ou desta) e dá o teu lugar ao Espírito
              Santo Paráclito!
            </Text>
          </View>

          <Text className="h2">Assinalação da Cruz no peito</Text>

          <Text className="aside">
            O Sacerdote fará o sinal da Cruz na testa e no peito do Neófito:
          </Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Accipe signum Crucis tam in fron{" "}
              <Text className="text-base latin">✠</Text> te, quam in cor{" "}
              <Text className="cross text-red-500">✠</Text> de, sume fidem
              cæléstium præceptórum: et talis esto móribus, ut templum Dei jam
              esse possis.
            </Text>
            <Text className="text-base vernacular">
              Recebe o sinal da Cruz, na fronte{" "}
              <Text className="text-base vernacular">✠</Text> e no coração{" "}
              <Text className="cross text-red-500">✠</Text> ; abraça a fé nos
              preceitos divinos; e procede de tal modo que desde já possas ser
              um templo de Deus.
            </Text>
          </View>

          <Text className="aside">O Sacerdote continua:</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              <Text className="text-base latin">Orémus.</Text>
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">Oremos.</Text>
            </Text>
            <Text className="text-base latin">
              Preces nostras, quæsumus, Dómine, cleménter exáudi: et hunc
              eléctum tuum <Text className="text-base latin">N.</Text> (hanc
              eléctam tuam <Text className="text-red-500">N.</Text>) crucis
              Domínicæ impressióne signátum (signátam) perpétua virtúte custódi:
              ut magnitúdinis glóriæ tuæ rudiménta servans, per custódiam
              mandatórum tuórum ad regeneratiónis glóriam perveníre mereátur.
              Per Christum Dóminum nostrum.
            </Text>
            <Text className="text-base vernacular">
              Pela vossa clemência, Vos suplicamos, Senhor, dignai-Vos ouvir as
              nossas preces; e com vosso poder guardai sempre este vosso
              escolhido <Text className="text-base vernacular">N.</Text> (ou
              esta vossa escolhida <Text className="text-red-500">N.</Text>) que
              acaba de ser assinalado (a) com a Cruz do Senhor, a fim de que,
              conservando as primeiras instruções da vossa infinita glória,
              possa alcançar a glória da regeneração pela prática dos vossos
              Mandamentos. Por Cristo, nosso Senhor.
            </Text>
            <Text className="text-base latin">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
          </View>

          <Text className="h2">Imposição da mão</Text>

          <Text className="aside">
            O Sacerdote coloca a sua mão direita sobre a cabeça do Neófito:
          </Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              <Text className="text-base latin">Orémus.</Text>
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">Oremos.</Text>
            </Text>
            <Text className="text-base latin">
              Omnípotens, sempitérne Deus, Pater Dómini nostri Jesu Christi,
              respícere dignáre super hunc fámulum tuum{" "}
              <Text className="text-base latin">N.</Text> (hanc fámulam tuam{" "}
              <Text className="text-red-500">N.</Text>) quem (quam) ad rudiménta
              fídei vocáre dignátus es; omnem cæcitátem cordis ab eo (ea)
              expélle; disrúmpe omnes láqueos sátanæ, quibus fúerat colligátus
              (colligáta); áperi ei, Dómine, jánuam pietátis tuæ, ut signo
              sapiéntiæ tuæ imbútus (imbúta), ómnium cupiditátum fœtóribus
              cáreat, et ad suávem odórem præceptórum tuórum lætus (læta) tibi
              in Ecclésia tua desérviat, et profíciat de die in diem. Per eúmdem
              Christum Dóminum nostrum.
            </Text>
            <Text className="text-base vernacular">
              Deus omnipotente e sempiterno, Pai de nosso Senhor Jesus Cristo,
              dignai-Vos olhar propício para este vosso servo (ou para esta
              vossa serva) <Text className="text-base vernacular">N.</Text>, que
              Vos dignastes chamar à iniciação da Fé; afastai para longe dele
              (ou dela) a cegueira do coração; quebrai todos os laços com que
              Satanás o (ou a) havia prendido. Abri-lhe, Senhor, a porta da
              vossa misericórdia, a fim de que, marcado (a) com o sinal da vossa
              sabedoria, seja preservado (a) da corrupção de todas as más
              paixões e, atraído (a) pelo suave odor dos vossos Mandamentos, Vos
              sirva com alegria na vossa Igreja de dia para dia. Pelo mesmo
              Cristo, nosso Senhor.
            </Text>
            <Text className="text-base latin">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
          </View>

          <Text className="h2">Bênção do sal</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Exorcízo te, creatúra salis, in nómine Dei{" "}
              <Text className="text-base latin">✠</Text> Patris omnipoténtis, et
              in caritáte Dómini nostri Jesu{" "}
              <Text className="cross text-red-500">✠</Text> Christi, et in
              virtúte Spíritus <Text className="cross text-red-500">✠</Text>{" "}
              Sancti. Exorcízo te per Deum{" "}
              <Text className="cross text-red-500">✠</Text> vivum, per Deum{" "}
              <Text className="cross text-red-500">✠</Text> verum, per Deum{" "}
              <Text className="cross text-red-500">✠</Text> sanctum, per Deum{" "}
              <Text className="cross text-red-500">✠</Text> qui te ad tutélam
              humáni géneris procreávit, et pópulo veniénti ad credulitátem per
              servos suos consecrári præcépit, ut in nómine sanctæ Trinitátis
              efficiáris salutáre sacraméntum ad effugándum inimícum. Proínde
              rogámus te, Dómine Deus noster, ut hanc creatúram salis
              sanctificándo sanctí <Text className="cross text-red-500">✠</Text>{" "}
              fices, et benedicéndo bene{" "}
              <Text className="cross text-red-500">✠</Text> dícas, ut fiat
              ómnibus accipiéntibus perfécta medicína, pérmanens in viscéribus
              eórum, in nómine ejúsdem Dómini nostri Jesu Christi, qui ventúrus
              est judicáre vivos et mórtuos, et sæculum per ignem.
            </Text>
            <Text className="text-base vernacular">
              Eu te exorcizo, criatura de sal, em Nome de Deus{" "}
              <Text className="text-base vernacular">✠</Text> Pai omnipotente,
              na caridade de nosso Senhor Jesus{" "}
              <Text className="cross text-red-500">✠</Text> Cristo, e com o
              poder do Espírito <Text className="cross text-red-500">✠</Text>{" "}
              Santo. Eu te exorcizo em Nome do span{" "}
              <Text className="cross text-red-500">✠</Text> vivo, do Deus{" "}
              <Text className="cross text-red-500">✠</Text> verdadeiro, do Deus{" "}
              <Text className="cross text-red-500">✠</Text> santo, do Deus{" "}
              <Text className="cross text-red-500">✠</Text> que te criou para
              proveito do género humano, e ordenou aos seus servos te
              consagrassem para o povo chamado à Fé, a fim de que em Nome da
              Santíssima Trindade possas ser instrumento salutar para afugentar
              o inimigo. Por isso, Senhor, nosso Deus, Vos rogamos que
              santifiqueis <Text className="cross text-red-500">✠</Text> e
              abençoeis <Text className="cross text-red-500">✠</Text> esta
              criatura de sal, para que se torne em medicina salutar daquelas
              que o tomarem, e permaneça nas suas entranhas, em Nome de nosso
              Senhor Jesus Cristo, que há-de vir a julgar os vivos e os mortos,
              e o mundo pelo fogo.
            </Text>
            <Text className="text-base latin">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
          </View>

          <Text className="aside">
            O Sacerdote introduz alguns grãos deste Sal na boca do baptizado:
          </Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              <Text className="text-base latin">N.</Text> Accipe sal sapiéntiæ:
              propitiátio sit tibi in vitam ætérnam.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">N.</Text> Recebe o sal da
              sabedoria; que ele te seja propício para a vida eterna.
            </Text>
            <Text className="text-base latin">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
            <Text className="text-base latin">
              <Text className="text-base latin">Sac.</Text> Pax tecum.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">Sac.</Text> A paz seja
              contigo.
            </Text>
            <Text className="text-base latin">
              <Text className="text-red-500">℟.</Text> Et cum spíritu tuo.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-red-500">℟.</Text> E com vosso espírito.
            </Text>
          </View>

          <Text className="aside">
            Dada a paz, o Sacerdote recita a seguinte oração:
          </Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              <Text className="text-base latin">Orémus.</Text>
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">Oremos.</Text>
            </Text>
            <Text className="text-base latin">
              Deus patrum nostrórum, Deus univérsæ cónditor veritátis, te
              súpplices exorámus, ut hunc fámulum tuum{" "}
              <Text className="text-base latin">N.</Text> (hanc fámulam tuam
              <Text className="text-red-500">N.</Text>) respícere dignéris
              propítius, et hoc primum pábulum salis gustántem, non diútius
              esuríre permíttas, quo minus cibo expleátur cælésti, quátenus sit
              semper spíritu fervens, spe gaudens, tuo semper nómini sérviens.
              Perduc eum (eam), Dómine, quæsumus, ad novæ regeneratiónis
              lavácrum, ut cum fidélibus tuis promissiónum tuárum ætérna præmia
              cónsequi mereátur. Per Christum Dóminum nostrum.
            </Text>
            <Text className="text-base vernacular">
              Deus de nossos pais, ó Deus, Autor de toda a verdade, Vos pedimos
              e suplicamos que Vos digneis olhar benignamente para o vosso servo{" "}
              <Text className="text-base vernacular">N.</Text> (para a vossa
              serva <Text className="text-red-500">N.</Text>) que, que havendo
              provado pela primeira vez este sal, não sofra por mais tempo fome,
              antes permiti que seja sustentado (a) com o alimento celestial,
              conservando-se sempre ao serviço do vosso Nome, animado (a) com
              constante fervor espiritual e alegre esperança. Conduzi-o (a),
              Senhor, Vos suplicamos, à fonte da regeneração, para que consiga
              alcançar com os demais fiéis as recompensas eternas por Vós
              prometidas. Por Cristo, nosso Senhor.
            </Text>
            <Text className="text-base latin">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
          </View>

          <Text className="h2">Abjuração</Text>

          <Text className="aside">
            O Sacerdote continua, em tom imperativo:
          </Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Exorcízo te, creatúra salis, in nómine Dei{" "}
              <Text className="text-base latin">✠</Text> Patris omnipoténtis, et
              in caritáte Dómini nostri Jesu{" "}
              <Text className="cross text-red-500">✠</Text> Christi, et in
              virtúte Spíritus <Text className="cross text-red-500">✠</Text>{" "}
              Sancti. Exorcízo te per Deum{" "}
              <Text className="cross text-red-500">✠</Text> vivum, per Deum{" "}
              <Text className="cross text-red-500">✠</Text> verum, per Deum{" "}
              <Text className="cross text-red-500">✠</Text> sanctum, per Deum{" "}
              <Text className="cross text-red-500">✠</Text> qui te ad tutélam
              humáni géneris procreávit, et pópulo veniénti ad credulitátem per
              servos suos consecrári præcépit, ut in nómine sanctæ Trinitátis
              efficiáris salutáre sacraméntum ad effugándum inimícum. Proínde
              rogámus te, Dómine Deus noster, ut hanc creatúram salis
              sanctificándo sanctí <Text className="cross text-red-500">✠</Text>{" "}
              fices, et benedicéndo bene{" "}
              <Text className="cross text-red-500">✠</Text> dícas, ut fiat
              ómnibus accipiéntibus perfécta medicína, pérmanens in viscéribus
              eórum, in nómine ejúsdem Dómini nostri Jesu Christi, qui ventúrus
              est judicáre vivos et mórtuos, et sæculum per ignem.
            </Text>
            <Text className="text-base vernacular">
              Eu te exorcizo, criatura de sal, em Nome de Deus{" "}
              <Text className="text-base vernacular">✠</Text> Pai omnipotente,
              na caridade de nosso Senhor Jesus{" "}
              <Text className="cross text-red-500">✠</Text> Cristo, e com o
              poder do Espírito <Text className="cross text-red-500">✠</Text>{" "}
              Santo. Eu te exorcizo em Nome do Deus{" "}
              <Text className="cross text-red-500">✠</Text> vivo, do Deus{" "}
              <Text className="cross text-red-500">✠</Text> verdadeiro, do Deus{" "}
              <Text className="cross text-red-500">✠</Text> santo, do Deus{" "}
              <Text className="cross text-red-500">✠</Text> que te criou para
              proveito do género humano, e ordenou aos seus servos te
              consagrassem para o povo chamado à Fé, a fim de que em Nome da
              Santíssima Trindade possas ser instrumento salutar para afugentar
              o inimigo. Por isso, Senhor, nosso Deus, Vos rogamos que
              santifiqueis <Text className="cross text-red-500">✠</Text> e
              abençoeis <Text className="cross text-red-500">✠</Text> esta
              criatura de sal, para que se torne em medicina salutar daquelas
              que o tomarem, e permaneça nas suas entranhas, em Nome de nosso
              Senhor Jesus Cristo, que há-de vir a julgar os vivos e os mortos,
              e o mundo pelo fogo.
            </Text>
            <Text className="text-base latin">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
          </View>

          <Text className="h2">Assinalação da Cruz na Testa</Text>

          <Text className="aside">
            O Sacerdote impõe o sinal da Cruz na testa do Neófito:
          </Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Et hoc signum sanctæ Cru{" "}
              <Text className="text-base latin">✠</Text> cis, quod nos fronti
              ejus damus, tu, maledícte diábole, numquam áudeas violáre. Per
              eúmdem Christum Dóminum nostrum.
            </Text>
            <Text className="text-base vernacular">
              E te não atrevas nunca, ó demónio maldito, a violar este sinal{" "}
              <Text className="text-base vernacular">✠</Text> da santa Cruz que
              imprimimos na sua fronte. Pelo mesmo Cristo, nosso Senhor.
            </Text>
            <Text className="text-base latin">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
          </View>

          <Text className="h2">Imposição da mão</Text>

          <Text className="aside">
            O Sacerdote impõe sobre a cabeça do Neófito a sua mão direita:
          </Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              <Text className="text-base latin">Orémus.</Text>
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">Oremos.</Text>
            </Text>
            <Text className="text-base latin">
              Aetérnam ac justíssimam pietátem tuam déprecor, Dómine sancte,
              Pater omnípotens, ætérne Deus, auctor lúminis et veritátis, super
              hunc fámulum tuum <Text className="text-base latin">N.</Text>{" "}
              (hanc fámulam tuam <Text className="text-red-500">N.</Text>) ut
              dignéris eum (eam) illumináre lúmine intelligéntiæ tuæ: munda eum
              (eam) et sanctífica: da ei sciéntiam veram, ut dignus (digna)
              grátia Baptísmi tui efféctus (effécta), téneat firmam spem,
              consílium rectum, doctrínam sanctam. Per Christum Dóminum nostrum.
            </Text>
            <Text className="text-base vernacular">
              Senhor santo, Pai omnipotente, Deus eterno, autor da luz e da
              verdade, imploro a vossa eterna e justíssima bondade em favor
              deste vosso servo (ou serva){" "}
              <Text className="text-base vernacular">N.</Text>, a fim de que Vos
              digneis ilustrá-lo (ou ilustrá-la) com a luz da vossa
              inteligência, purificá-lo (ou purificá-la) e santificá-lo (ou
              santificá-la). Concedei-lhe, Senhor, a verdadeira ciência, para
              que, tornando-se digno (ou digna) da graça do Baptismo, conserve
              sempre uma esperança bem firme, um conselho bem recto e doutrina
              santa.
            </Text>
            <Text className="text-base latin">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
          </View>

          <Text className="h1">Entrada no Templo</Text>

          <Text className="h2">Imposição da estola</Text>

          <Text className="aside">
            O Sacerdote impõe a Estola sobre a cabeça do Neófito e entra com ele
            e com os Padrinhos no Templo.
          </Text>

          <Text className="aside">Entretanto, o Sacerdote diz:</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              <Text className="text-base latin">N.</Text> Ingrédere in templum
              Dei, ut hábeas partem cum Christo in vitam ætérnam.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">N.</Text> Entra no Templo
              de Deus, a fim de que tenhas parte com Cristo na vida eterna.
            </Text>
            <Text className="text-base latin">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
          </View>

          <Text className="h1">Iniciação na fé</Text>

          <Text className="aside">
            O cortejo caminha até próximo da Fonte Baptismal e recitam em voz
            alta o Credo e o Pater Noster.
          </Text>

          <Text className="h2">Creio em Deus</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Credo in Deum, Patrem omnipoténtem, Creatórem cæli et terræ. Et in
              Jesum Christum, Fílium ejus únicum, Dóminum nostrum: qui concéptus
              est de Spíritu Sancto, natus ex María Vírgine, passus sub Póntio
              Piláto, crucifíxus, mórtuus, et sepúltus: descéndit ad ínferos;
              tértia die resurréxit a mórtuis; ascéndit ad cælos; sedet ad
              déxteram Dei Patris omnipoténtis: inde ventúrus est judicáre vivos
              et mórtuos. Credo in Spíritum Sanctum, sanctam Ecclésiam
              cathólicam, Sanctórum communiónem, remissiónem peccatórum, carnis
              resurrectiónem, vitam ætérnam.
            </Text>
            <Text className="text-base vernacular">
              Creio em Deus, Pai todo-poderoso, Criador do céu e da terra; e em
              Jesus Cristo, seu único Filho, nosso Senhor; o qual foi concebido
              pelo poder do Espírito Santo; nasceu da Virgem Maria; padeceu sob
              Pôncio Pilatos; foi crucificado, morto e sepultado; desceu aos
              infernos; ao terceiro dia ressuscitou dos mortos; subiu aos céus;
              está assentado à direita de Deus Pai todo-poderoso, donde há-de
              vir a julgar os vivos e os mortos. Creio no Espírito Santo; na
              Santa Igreja Católica; na comunicação dos Santos; na remissão dos
              pecados; na ressurreição da carne; na vida eterna. Amen.
            </Text>
          </View>

          <Text className="h2">Pai-Nosso</Text>

          <PaiNosso />

          <Text className="aside">O Sacerdote faz o:</Text>

          <Text className="h1">Último Exorcismo</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Exorcízo te, omnis spíritus immúnde, in nómine Dei{" "}
              <Text className="text-base latin">✠</Text> Patris omnipoténtis, et
              in nómine Jesu <Text className="text-red-500">✠</Text> Christi
              Fílii ejus, Dómini et Júdicis nostri, et in virtúte Spíritus{" "}
              <Text className="cross text-red-500">✠</Text> Sancti, ut discédas
              ab hoc plásmate Dei <Text className="text-red-500">N.</Text>, quod
              Dóminus noster ad templum sanctum suum vocáre dignátus est, ut
              fiat templum Dei vivi, et Spíritus Sanctus hábitet in eo. Per
              eúmdem Christum Dóminum nostrum, qui ventúrus est judicáre vivos
              et mórtuos, et sæculum per ignem.
            </Text>
            <Text className="text-base vernacular">
              Eu te exorcizo, ó espírito imundo, qualquer que sejas, em Nome de
              Deus <Text className="text-base vernacular">✠</Text> Pai
              omnipotente, e em nome de Jesus{" "}
              <Text className="cross text-red-500">✠</Text> Cristo, seu Filho,
              nosso Senhor e nosso Juiz, e pelo poder do Espírito{" "}
              <Text className="cross text-red-500">✠</Text> Santo, para que
              saias desta criatura de Deus,{" "}
              <Text className="text-red-500">N.</Text>, que nosso Senhor se
              dignou chamar ao seu sagrado templo, a fim de que se torne em
              templo do Deus vivo e morada do Espírito Santo. Pelo mesmo Cristo,
              nosso Senhor, que há-de vir a julgar os vivos e os mortos, e o
              mundo pelo fogo.
            </Text>
            <Text className="text-base latin">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
          </View>

          <Text className="h2">Insalivação</Text>

          <Text className="aside">
            O Sacerdote com a saliva da sua boca toca nas orelhas do Neófito:
          </Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Ephpheta, quod est, Adaperire.
            </Text>
            <Text className="text-base vernacular">
              Éfeta, isto é: Abre-te.
            </Text>
          </View>

          <Text className="aside">
            Imediatamente, tocando no nariz do Neófito, acrescenta:
          </Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              In odórem suavitátis. Tu autem effugáre, diábole; appropinquábit
              enim judícium Dei.
            </Text>
            <Text className="text-base vernacular">
              Em odor de suavidade. Tu, porém, ó demónio, foge, porque se
              aproxima o reino de Deus.
            </Text>
          </View>

          <Text className="h1">Renúncia a Satanás</Text>

          <Text className="aside">
            O Sacerdote começa o interrogatório, ao qual devem responder com voz
            clara e firme: são feitas no singular, porque se referem ao Neófito.
          </Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              <Text className="text-base latin">Sac.</Text>{" "}
              <Text className="text-red-500">N.</Text> Abrenúntias sátanæ?
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">Sac.</Text>{" "}
              <Text className="text-red-500">N.</Text> Renuncias a Satanás?
            </Text>
            <Text className="text-base latin">
              <Text className="text-red-500">℟.</Text> Abrenúntio.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-red-500">℟.</Text> Renuncio!
            </Text>
            <Text className="text-base latin">
              <Text className="text-base latin">Sac.</Text> Et ómnibus opéribus
              ejus?
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">Sac.</Text> E a todas suas
              obras?
            </Text>
            <Text className="text-base latin">
              <Text className="text-red-500">℟.</Text> Abrenúntio.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-red-500">℟.</Text> Renuncio!
            </Text>
            <Text className="text-base latin">
              <Text className="text-base latin">Sac.</Text> Et ómnibus pompis
              ejus?
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">Sac.</Text> E a todas suas
              seduções?
            </Text>
            <Text className="text-base latin">
              <Text className="text-red-500">℟.</Text> Abrenúntio.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-red-500">℟.</Text> Renuncio!
            </Text>
          </View>

          <Text className="h1">Unção Catecumenal</Text>

          <Text className="aside">
            O Sacerdote unge no peito e entre as espáduas o Neófito. Para que
            estas Unções possam ser feitas sobre a pele do Neófito, ser-lhe-ão
            descobertos o peito e depois as espáduas, ao pé do pescoço.
          </Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              <Text className="text-base latin">Sac.</Text> Ego te línio{" "}
              <Text className="cross text-red-500">✠</Text> óleo salútis in
              Christo Jesu Dómino nostro, ut hábeas vitam ætérnam.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">Sac.</Text> Eu te unjo{" "}
              <Text className="cross text-red-500">✠</Text> com o Óleo da
              salvação em nosso Senhor Jesus Cristo, para que possas possuir a
              vida eterna.
            </Text>
            <Text className="text-base latin">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
          </View>

          <Text className="aside">
            Chegado a este ponto, o Sacerdote depõe a Estola de cor violácea e
            substitui-a pela Estola de cor branca.
          </Text>

          <Text className="h1">Confissão da Fé</Text>

          <Text className="aside">
            O Sacerdote entra no Baptistério, acompanhado pelo Neófito e pelos
            Padrinhos, faz as três interrogações do Ritual, às quais todos devem
            responder com convicção e firmeza:
          </Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              <Text className="text-base latin">Sac.</Text>{" "}
              <Text className="text-red-500">N.</Text> Credis in Deum Patrem
              omnipoténtem, Creatórem cæli et terræ?
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">Sac.</Text>{" "}
              <Text className="text-red-500">N.</Text> Crês em Deus, Pai
              omnipotente, Criador do céu e da terra?
            </Text>
            <Text className="text-base latin">
              <Text className="text-red-500">℟.</Text> Credo.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-red-500">℟.</Text> Creio.
            </Text>
            <Text className="text-base latin">
              <Text className="text-base latin">Sac.</Text> Credis in Jesum
              Christum, Fílium ejus únicum, Dóminum nostrum, natum, et passum?
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">Sac.</Text> Crês em Jesus
              Cristo, seu Filho único, nosso Senhor, que nasceu e padeceu?
            </Text>
            <Text className="text-base latin">
              <Text className="text-red-500">℟.</Text> Credo.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-red-500">℟.</Text> Creio.
            </Text>
            <Text className="text-base latin">
              <Text className="text-base latin">Sac.</Text> Credis et in
              Spíritum Sanctum, sanctam Ecclésiam cathólicam, Sanctórum
              communiónem, remissiónem peccatórum, carnis resurrectiónem, et
              vitam ætérnam?
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">Sac.</Text> Crês no
              Espírito Santo, na Santa Igreja Católica, na comunicação dos
              Santos, na remissão dos pecados, na ressurreição da carne e na
              vida eterna?
            </Text>
            <Text className="text-base latin">
              <Text className="text-red-500">℟.</Text> Credo.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-red-500">℟.</Text> Creio.
            </Text>
          </View>

          <Text className="h1">Ablução Baptismal</Text>

          <Text className="aside">
            Terminada a Confissão da Fé, o Sacerdote interroga:
          </Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              <Text className="text-base latin">Sac.</Text>{" "}
              <Text className="text-red-500">N.</Text> Vis baptizári?
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">Sac.</Text>{" "}
              <Text className="text-red-500">N.</Text> Queres ser baptizado?
            </Text>
            <Text className="text-base latin">
              <Text className="text-red-500">℟.</Text> Volo.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-red-500">℟.</Text> Quero.
            </Text>
          </View>

          <Text className="aside">
            O Padrinho (ou a Madrinha) ou ambos seguram o Neófito e sustentam-no
            sobre a Pia baptismal, com o rosto para baixo. Se o Padrinho segurar
            o Neófito, a Madrinha coloca a mão direita nas costas do Neófito.
          </Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              <Text className="text-base latin">Sac.</Text>{" "}
              <Text className="text-red-500">N.</Text> Ego te baptízo in nómine
              Pa <Text className="cross text-red-500">✠</Text> tris, fundit
              primo, et Fí <Text className="cross text-red-500">✠</Text> lii,
              fundit secundo, et Spíritus{" "}
              <Text className="cross text-red-500">✠</Text> Sancti, fundit
              tertio.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">Sac.</Text>{" "}
              <Text className="text-red-500">N.</Text> Eu te baptizo em Nome do
              Pai <Text className="cross text-red-500">✠</Text> e do Filho{" "}
              <Text className="cross text-red-500">✠</Text> e do Espírito{" "}
              <Text className="cross text-red-500">✠</Text> Santo.
            </Text>
          </View>

          <Text className="aside">
            Se, porém, se duvidar se o Neófito tinha sido já baptizado,
            usar-se-á a seguinte forma:
          </Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              <Text className="text-base latin">Sac.</Text>{" "}
              <Text className="text-red-500">N.</Text> Si non es baptizátus
              (-a), ego te baptízo in nómine Pa{" "}
              <Text className="cross text-red-500">✠</Text> tris, et Fí{" "}
              <Text className="cross text-red-500">✠</Text> lii, et Spíritus{" "}
              <Text className="cross text-red-500">✠</Text> Sancti.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">Sac.</Text>{" "}
              <Text className="text-red-500">N.</Text> Se não és baptizado (a),
              eu te baptizo em Nome do Pai{" "}
              <Text className="cross text-red-500">✠</Text>, e do Fi{" "}
              <Text className="cross text-red-500">✠</Text> lho, e do Espírito{" "}
              <Text className="cross text-red-500">✠</Text> Santo.
            </Text>
          </View>

          <Text className="h1">Unção Crismal</Text>

          <Text className="aside">
            O Sacerdote dirige a Deus a seguinte súplica:
          </Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              <Text className="text-base latin">Orémus.</Text>
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">Oremos.</Text>
            </Text>
            <Text className="text-base latin">
              Deus omnípotens, Pater Dómini nostri Jesu Christi, qui te
              regenerávit ex aqua et Spíritu Sancto, quique dedit tibi
              remissiónem ómnium peccatórum (hic inungit), ipse te líniat{" "}
              <Text className="text-base latin">✠</Text> Chrísmate salútis in
              eódem Christo Jesu Dómino nostro in vitam ætérnam.
            </Text>
            <Text className="text-base vernacular">
              Que o Deus omnipotente, Pai de nosso Senhor Jesus Cristo, que te
              regenerou pela água e pelo Espírito Santo e te concedeu a graça da
              remissão de todos os pecados, te unja Ele próprio com o Crisma da
              salvação <Text className="text-base vernacular">✠</Text> para a
              vida eterna, em o mesmo nosso Senhor Jesus Cristo.
            </Text>
            <Text className="text-base latin">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
            <Text className="text-base latin">
              <Text className="text-base latin">Sac.</Text> Pax tibi.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">Sac.</Text> A paz seja
              contigo.
            </Text>
            <Text className="text-base latin">
              <Text className="text-red-500">℟.</Text> Et cum spíritu tuo.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-red-500">℟.</Text> E com vosso espírito.
            </Text>
          </View>

          <Text className="h2">Veste Branca</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              <Text className="text-base latin">Sac.</Text> Accipe vestem
              cándidam, quam pérferas immaculátam ante tribúnal Dómini nostri
              Jesu Christi, ut hábeas vitam ætérnam.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">Sac.</Text> Recebe a Veste
              branca, a qual apresentarás imaculada ante o tribunal de nosso
              Senhor Jesus Cristo, a fim de alcançares a vida eterna.
            </Text>
            <Text className="text-base latin">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
          </View>

          <Text className="h2">Vela Acesa</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              <Text className="text-base latin">Sac.</Text> Accipe lámpadem
              ardéntem, et irreprehensíbilis custódi Baptísmum tuum: serva Dei
              mandáta, ut, cum Dóminus vénerit ad núptias, possis occúrrere ei
              una cum ómnibus Sanctis in aula cælésti, et vivas in sæcula
              sæculórum.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">Sac.</Text> Recebe esta
              Vela acesa e guarda a graça do teu Baptismo com fidelidade
              irrepreensível: cumpre os Mandamentos de Deus, a fim de que,
              quando o Senhor vier para as bodas, possas ir ao seu encontro com
              todos os Santos na corte celestial, e assim permaneças em todos os
              séculos dos séculos.
            </Text>
            <Text className="text-base latin">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
          </View>

          <Text className="h2">Despedida</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              <Text className="text-base latin">Sac.</Text>{" "}
              <Text className="text-red-500">N.</Text> Vade in pace, et Dóminus
              sit tecum.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">Sac.</Text>{" "}
              <Text className="text-red-500">N.</Text> Vai em paz, que o Senhor
              seja contigo.
            </Text>
            <Text className="text-base latin">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
          </View>

          <Text className="aside">
            Lavra-se o Assento do Baptismo, que os Padrinhos assinam, e todos se
            retiram.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
