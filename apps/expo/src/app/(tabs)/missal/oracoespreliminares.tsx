import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Salmo83 from "./../devocionario/salterio/083";
import Salmo84 from "./../devocionario/salterio/084";
import Salmo85 from "./../devocionario/salterio/085";
import Salmo115 from "./../devocionario/salterio/115";
import Salmo129 from "./../devocionario/salterio/129";

export default function PageOracoespreliminares() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Orações Preliminares</Text>
          <Text className="h1">Preparação para a Missa</Text>
          <Text className="text-base">
            Antes de se Paramentar, o Sacerdote recita estas Preces:
          </Text>
          <View className="side-by-side">
            <Text className="text-base latin">
              <Text className="text-base latin">Ant.</Text> Ne reminiscáris,
              Dómine, delícta nostra vel paréntum nostrórum, neque vindíctam
              sumas de peccátis nostris. (T. P. Allelúja.)
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">Ant.</Text> Não Vos
              recordeis, Senhor, dos nossos delitos, nem dos delitos de nossos
              pais; não queirais vingar-Vos dos nossos pecados. (T. P. Aleluia.)
            </Text>
          </View>
          <Salmo83 />
          <Salmo84 />
          <Salmo85 />
          <Salmo115 />
          <Salmo129 />
          <View className="side-by-side">
            <Text className="text-base latin">
              <Text className="text-base latin">Ant.</Text> Ne reminiscáris,
              Dómine, delícta nostra vel paréntum nostrórum, neque vindíctam
              sumas de peccátis nostris. (T. P. Allelúja.)
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">Ant.</Text> Não Vos
              recordeis, Senhor, dos nossos delitos, nem dos delitos de nossos
              pais; não queirais vingar-Vos dos nossos pecados. (T. P. Aleluia.)
            </Text>
            <Text className="text-base latin">
              ℣. Kyrie, eléison. Christe, eléison. Kyrie, eléison.
            </Text>
            <Text className="text-base vernacular">
              ℣. Senhor, tende piedade de nós. Cristo, tende piedade de nós.
              Senhor, tende piedade de nós.
            </Text>
            <Text className="text-base latin">
              Pater noster... (secreto usque ad) ℣. Et ne nos indúcas in
              tentatiónem. <Text className="text-red-500">℟.</Text> Sed líbera
              nos a malo.
            </Text>
            <Text className="text-base vernacular">
              Pai-nosso... (em silêncio). ℣. E não nos deixeis cair em tentação.{" "}
              <Text className="text-red-500">℟.</Text> Mas livrai-nos do mal.
            </Text>
            <Text className="text-base latin">
              ℣. Ego dixit: Dómine, miserére mei.{" "}
              <Text className="text-red-500">℟.</Text> Sana ánimam meam, quia
              peccávi tibi.
            </Text>
            <Text className="text-base vernacular">
              ℣. Eu disse: Senhor, tende piedade de mim.{" "}
              <Text className="text-red-500">℟.</Text> Curai a minha alma, pois
              pequei contra Vós.
            </Text>
            <Text className="text-base latin">
              ℣. Convértere, Dómine, aliquántulum.{" "}
              <Text className="text-red-500">℟.</Text> Et deprecáre super servos
              tuos.
            </Text>
            <Text className="text-base vernacular">
              ℣. Senhor, volvei-Vos um pouco para nós.{" "}
              <Text className="text-red-500">℟.</Text> Enchei-Vos de piedade
              para com vossos servos.
            </Text>
            <Text className="text-base latin">
              ℣. Fiat misericórdia tua, Dómine, super nos.{" "}
              <Text className="text-red-500">℟.</Text> Quemádmodum sperávimus in
              te.
            </Text>
            <Text className="text-base vernacular">
              ℣. Senhor, venha a nós a vossa misericórdia.{" "}
              <Text className="text-red-500">℟.</Text> Pois esperamos em Vós.
            </Text>
            <Text className="text-base latin">
              ℣. Sacerdótes tui induántur justítiam.{" "}
              <Text className="text-red-500">℟.</Text> Et Sancti tui exsúltent.
            </Text>
            <Text className="text-base vernacular">
              ℣. Que os vossos sacerdotes se revistam de justiça.{" "}
              <Text className="text-red-500">℟.</Text> E os vossos santos
              exultem de alegria.
            </Text>
            <Text className="text-base latin">
              ℣. Ab occúltis meis munda me, Dómine.{" "}
              <Text className="text-red-500">℟.</Text> Et ab aliénis parce servo
              tuo.
            </Text>
            <Text className="text-base vernacular">
              ℣. Senhor, lavai-me das minhas faltas ocultas.{" "}
              <Text className="text-red-500">℟.</Text> E perdoai ao vosso servo
              as faltas alheias.
            </Text>
            <Text className="text-base latin">
              ℣. Dómine, exáudi oratiónem meam.{" "}
              <Text className="text-red-500">℟.</Text> Et clamor meus ad te
              véniat.
            </Text>
            <Text className="text-base vernacular">
              ℣. Senhor, ouvi a minha oração.{" "}
              <Text className="text-red-500">℟.</Text> E que meu clamor chegue
              até Vós.
            </Text>
            <Text className="text-base latin">℣. Dóminus vobíscum.</Text>
            <Text className="text-base vernacular">
              ℣. O Senhor seja convosco.
            </Text>
            <Text className="text-base latin">
              <Text className="text-red-500">℟.</Text> Et cum spíritu tuo.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-red-500">℟.</Text> E com vosso espírito.
            </Text>
            <Text className="text-base latin">
              <Text className="text-base latin">Orémus.</Text>
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">Oremos.</Text>
            </Text>
            <Text className="text-base latin">
              Aures tuæ pietátis, mitíssime Deus, inclína précibus nostris, et
              grátia Sancti Spíritus illúmina cor nostrum: ut tuis mystériis
              digne ministráre, teque ætérna caritáte dilígere mereámur.
            </Text>
            <Text className="text-base vernacular">
              Ó Deus clementíssimo, ouvi benignamente as nossas preces e
              iluminai o nosso coração com a graça do Espírito Santo, a fim de
              que mereçamos ser dignos ministros dos vossos mystérios e de Vos
              amarmos com caridade eterna.
            </Text>
            <Text className="text-base latin">
              Deus, cui omne cor patet et omnis volúntas lóquitur, et quem
              nullum latet secrétum: purífica per infusiónem Sancti Spíritus
              cogitatiónes cordis nostri; ut te perfécte dilígere, et digne
              laudáre mereámur.
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, que penetrais em todos os corações, conheceis todas as
              vontades e para quem nada é oculto, purificai com a efusão do
              vosso Espírito Santo os pensamentos do nosso coração, a fim de que
              possamos amar-Vos perfeitamente e louvar-Vos dignamente.
            </Text>
            <Text className="text-base latin">
              Ure igne Sancti Spíritus renes nostros et cor nostrum, Dómine: ut
              tibi casto córpore serviámus, et mundo corde placeámus.
            </Text>
            <Text className="text-base vernacular">
              Senhor, queimai com o fogo do vosso Espírito Santo os nossos rins
              e os nossos corações, a fim de que Vos sirvamos com o corpo casto
              e Vos alegremos com o coração puro.
            </Text>
            <Text className="text-base latin">
              Mentes nostras, quǽsumus, Dómine, Paráclitus, qui a te procédit,
              illúminet: et indúcat in omnem, sicut tuus promísit Fílius,
              veritátem.
            </Text>
            <Text className="text-base vernacular">
              Que o Divino Paracleto, que procede de Vós, ó Senhor, Vos
              suplicamos, ilumine os nossos espíritos, e os guie ao conhecimento
              da verdade, como prometeu o vosso Filho.
            </Text>
            <Text className="text-base latin">
              Adsit nobis, quǽsumus, Dómine, virtus Spíritus Sancti: quæ et
              corda nostra cleménter expúrget et ab ómnibus tueátur advérsis.
            </Text>
            <Text className="text-base vernacular">
              Senhor, dignai-Vos assistir-nos com a virtude do Espírito Santo, a
              fim de que Ele purifique clementemente os nossos corações e nos
              defenda de todas as adversidades.
            </Text>
            <Text className="text-base latin">
              Deus, qui corda fidélium Sancti Spíritus illustratióne docuísti:
              da nobis in eódem Spíritu recta sápere; et de ejus semper
              consolatióne gaudere.
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, que instruístes os corações dos fiéis com a luz do
              Espírito Santo, concedei-nos, pelo mesmo Espírito, que amemos o
              que é recto e gozemos sempre as suas consolações.
            </Text>
            <Text className="text-base latin">
              Consciéntias nostras, quǽsumus, Dómine, visitándo purífica: ut
              véniens Dóminus noster Jesus Christus, Fílius tuus, parátam sibi
              in nobis invéniat mansiónem: Qui tecum vivit et regnat in unitáte
              Spíritus Sancti Deus, per ómnia sǽcula sæculórum. Amen.
            </Text>
            <Text className="text-base vernacular">
              Purificai, Senhor, Vos imploramos, as nossas consciências com
              vossa visita, para que, quando N. S. Jesus Cristo, vosso Filho,
              desça até nós, encontre uma digna morada preparada para Ele: Que
              convosco vive e reina em unidade do Espírito Santo, Deus, por
              todos os séculos dos séculos. Amen.
            </Text>
          </View>
          <Text className="h2">Oração Santo Ambrósio</Text>
          <View className="side-by-side">
            <Text className="text-base latin">
              Ad mensam dulcíssimi convívii tui, pie Dómine Jesu Christe, ego
              peccátor de própriis meis méritis nihil præsúmens, sed de tua
              confídens misericórdia et bonitáte, accédere véreor et
              contremísco.
            </Text>
            <Text className="text-base vernacular">
              Ó clementíssimo Senhor Jesus Cristo, eu, indigno pecador,
              desconfiando profundamente dos meus próprios merecimentos, e
              confiando absolutamente na vossa misericórdia e bondade, receio e
              tremo ao aproximar-me da mesa do vosso suavíssimo e dulcíssimo
              banquete.
            </Text>
            <Text className="text-base latin">
              Nam cor et corpus hábeo multis crimínibus maculátum, mentem et
              línguam non caute custodítam.
            </Text>
            <Text className="text-base vernacular">
              É que, Senhor, apesar de Vos haver consagrado o meu coração e o
              meu corpo, reconheço que muitas vezes os tenho manchado com
              numerosos pecados, pois não tenho vigiado e guardado
              cuidadosamente a minha inteligência e as minhas palavras.
            </Text>
            <Text className="text-base latin">
              Ergo, o pia Déitas, o treménda Maiéstas, ego miser, inter
              angústias deprehénsus, ad te fontem misericórdiæ recúrro, ad te
              festíno sanándus, sub tuam protectiónem fúgio: et, quem Iúdicem
              sustinére néqueo, Salvatórem habére suspíro.
            </Text>
            <Text className="text-base vernacular">
              Eis por que, ó Bondade infinita, ó Majestade incomparável,
              encontrando-me reduzido ao último extremo da miséria, venho a Vós,
              que sois a fonte da misericórdia, para ser curado; e, não podendo
              suportar os rigores do meu Juiz, confio na vossa protecção, ó meu
              Salvador, e invoco ardentemente as vossas misericórdias.
            </Text>
            <Text className="text-base latin">
              Tibi, Dómine, plagas meas osténdo, tibi verecúndiam meam détego.
              Scío peccáta mea multa et magna, pro quibus tímeo. Spero in
              misericórdias tuas, quarum non est númerus.
            </Text>
            <Text className="text-base vernacular">
              A Vós, Senhor, revelo as minhas chagas; a Vós, Senhor, confesso
              toda minha vergonha. Sei que meus pecados são grandes e numerosos,
              o que me enche de temor; mas também confio absolutamente na vossa
              misericórdia, que sei ser infinita.
            </Text>
            <Text className="text-base latin">
              Réspice ergo in me óculis misericórdiæ tuæ, Dómine Jesu Christe,
              Rex ætérne, Deus et homo, crucifíxus propter hóminem. Exáudi me
              sperántem in te: miserére mei pleni misériis et peccátis, tu qui
              fontem miseratiónis numquam manáre cessábis.
            </Text>
            <Text className="text-base vernacular">
              Lançai sobre mim os vossos olhares misericordiosos, ó Senhor
              Jesus, Rei eterno, Deus e homem, que fostes crucificado por causa
              dos mesmos homens. Escutai-me, pois espero em Vós. Tende piedade
              de mim, que sou miserável pecador, Vós que nunca deixais de
              espalhar pela Terra as águas de misericórdia.
            </Text>
            <Text className="text-base latin">
              Salve, salutáris víctima, pro me et omni humáno génere in patíbulo
              Crucis obláta. Salve, nóbilis et pretióse Sanguis, de vulnéribus
              crucifíxi Dómini mei Jesu Christi prófluens, et peccáta totíus
              mundi ábluens.
            </Text>
            <Text className="text-base vernacular">
              Eu Vos saúdo, ó Vítima da salvação, oferecida no madeiro da Cruz,
              pelo resgate do género humano e por mim! Eu Vos saúdo, ó Sangue
              nobre e preciosíssimo brotando das Chagas do Crucificado, meu
              Senhor Jesus Cristo, e lavando os pecados do mundo inteiro!
            </Text>
            <Text className="text-base latin">
              Recordáre, Dómine, creatúræ tuæ, quam tuo Sánguine redemísti.
              Pœnitet me peccásse, cúpio emmendáre quod feci.
            </Text>
            <Text className="text-base vernacular">
              Ó Senhor, lembrai-Vos desta vossa indigníssima criatura que
              resgatastes com vosso Sangue. Arrependo-me de haver pecado, e
              desejo ardentemente emendar-me.
            </Text>
            <Text className="text-base latin">
              Aufer ergo a me, clementíssime Pater, omnes iniquitátes et peccáta
              mea, ut, purificátus mente et córpore, digne degustáre mérear
              Sancta sanctórum.
            </Text>
            <Text className="text-base vernacular">
              Arrancai de mim todas minhas iniquidades e pecados, a fim de que,
              puro de coração e de corpo, possa amar dignamente o Santo dos
              santos.
            </Text>
            <Text className="text-base latin">
              Et concéde, ut hæc sancta prælibátio Córporis et Sánguinis tui,
              quam ego indígnus súmere inténdo, sit peccatórum meórum remíssio,
              sit delictórum perfécta purgátio, sit túrpium cog­tatiónum
              effugátio, ac bonórum sénsuum regenerátio, operúmque tibi
              placéntium salúbris efficácia, ánimæ quoque et córporis contra
              inimicórum meórum insídias firmíssima tuítio.{" "}
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
            <Text className="text-base vernacular">
              Permiti, pela vossa graça, que a Hóstia santíssima do vosso Corpo
              e Sangue que, apesar de indigno, me preparo para receber, seja
              para remissão dos meus pecados, purifique-me inteiramente das
              minhas faltas, afaste de mim os maus pensamentos, desperte na
              minha alma bons sentimentos, obrigue-me a praticar salutares
              acções, segundo a vossa vontade, seja, enfim, para minha alma e
              para meu corpo, um abrigo seguro contra todas as ciladas dos meus
              inimigos. <Text className="text-red-500">℟.</Text> Amen.
            </Text>
          </View>
          <Text className="h2">Oração São Tomás Aquino</Text>
          <View className="side-by-side">
            <Text className="text-base latin">
              Omnípotens sempiterne Deus, ecce, accédo ad sacraméntum unigéniti
              Fílii tui, Dómini nostri Jesu Christi; accédo tamquam infírmus ad
              médicum vitæ, immúndus ad fontem misericórdiæ, cæcus ad lumen
              claritátis ætérnæ, pauper et egénus ad Dóminum cæli et terræ.
            </Text>
            <Text className="text-base vernacular">
              Deus omnipotente e eterno, eis que me vou aproximar do Sacramento
              de vosso Filho Unigénito, N. S. Jesus Cristo. E eis que venho como
              enfermo, ao médico da vida, como manchado, à fonte de
              misericórdia; como um cego à luz da eterna claridade; e como pobre
              indigente, ao Senhor do céu e da terra.
            </Text>
            <Text className="text-base latin">
              Rogo ergo imménsæ largitátis tuæ abundántiam, quátenus meam curáre
              dignéris infirmitátem, laváre fœditátem, illumináre cæcitátem,
              ditáre paupertátem, vestíre nuditátem: ut panem Angelórum, Regem
              regum et Dóminum dominántium, tanta suscípiam reveréntia et
              humilítate, tanta contritióne et devotióne, tanta puritáte et
              fíde, tali propósito et intentióne, sicut éxpedit salúti ánimæ
              meæ.
            </Text>
            <Text className="text-base vernacular">
              Invoco, pois, a abundância de vossas generosidades, que são sem
              limites, a fim de que Vos digneis curar a minha enfermidade, lavar
              as minhas máculas, iluminar a minha cegueira, enriquecer a minha
              pobreza, e vestir a minha nudez, de forma que receba o Pão dos
              Anjos, o Rei dos reis e o Senhor dos senhores, com tanto respeito
              e humildade, com uma contrição e uma devoção tão vivas, com uma
              pureza e uma fé tão grandes, com um bom propósito e uma intenção
              tais, como o exige a salvação da minha alma.
            </Text>
            <Text className="text-base latin">
              Da mihi, quǽso, Domínici Córporis et Sánguinis non solum suscípere
              sacraméntum, sed étiam rem et virtútem sacraménti.
            </Text>
            <Text className="text-base vernacular">
              Concedei-me, Vos suplico, a graça de receber, não somente o
              Sacramento do Corpo e do Sangue do Senhor, como também o efeito e
              a virtude deste Sacramento.
            </Text>
            <Text className="text-base latin">
              O mitíssime Deus, da mihi corpus unigéniti Fílii tui, Dómini
              nostri Jesu Christi, quod traxit de Vírgine Maria, sic suscípere,
              ut córpori suo mýstico mérear incorporári, et ínter ejus membra
              connumerári.
            </Text>
            <Text className="text-base vernacular">
              Ó Deus clementíssimo, visto que me é dado receber o Corpo de vosso
              Filho único, N. S. Jesus Cristo, esse Corpo que Ele assumiu no
              seio da Virgem Maria, fazei que O receba com disposições tão
              perfeitas que mereça ser incorporado no seu Corpo Místico e
              contado entre seus membros.
            </Text>
            <Text className="text-base latin">
              O amantíssime Pater, concede mihi diléctum Fílium tuum, quem nunc
              velátum in via suscípere propóno, reveláta tandem fácie perpétuo
              contemplári.
            </Text>
            <Text className="text-base vernacular">
              Ó Pai amantíssimo, concedei-me, enfim, a graça de contemplar face
              a face, durante toda a eternidade, o vosso Filho amantíssimo, que
              me proponho receber hoje, nesta viagem terrestre, debaixo dos véus
              do Sacramento.
            </Text>
            <Text className="text-base latin">
              Qui tecum vivit et regnat in unitáte Spíritus Sancti Deus, per
              ómnia sǽcula sæculórum. Amen.
            </Text>
            <Text className="text-base vernacular">
              Ele que, sendo Deus, convosco vive e reina, em união com o
              Espírito Santo, por todos os séculos dos séculos. Amen.
            </Text>
          </View>
          <Text className="h2">Oração à Santíssima Virgem</Text>
          <View className="side-by-side">
            <Text className="text-base latin">
              O Mater pietátis et misericórdiæ, beatíssima Virgo María, ego
              miser et indígnus peccátor ad te confúgio toto corde et afféctu;
              et precor pietátem tuam, ut, sicut dulcíssimo Fílio tuo in Cruce
              pendénti astítisti, ita et mihi, mísero peccatóri, et sacerdótibus
              ómnibus, hic et in tota sancta Ecclésia hódie offeréntibus,
              cleménter assístere dignéris, ut, tua grátia adjúti, dignam et
              acceptábilem hóstiam in conspéctu summæ et indivíduæ Trinitátis
              offérre valeámus. Amen.
            </Text>
            <Text className="text-base vernacular">
              Ó Mãe de bondade e de misericórdia, Santíssima Virgem Maria, eu,
              miserável e indigno pecador, a Vós recorro de todo o coração e com
              todo o amor; e Vos suplico que, assim como estivestes de pé junto
              ao vosso amabilíssimo Filho pendente da Cruz, me assistais também
              a mim, mísero pecador, e a todos os sacerdotes que hoje na Santa
              Igreja oferecem o Santo Sacrifício. Auxiliados pela vossa graça,
              possamos nós apresentar à suprema e indivisível Trindade a Vítima
              verdadeiramente digna de lhe ser oferecida. Amen.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
