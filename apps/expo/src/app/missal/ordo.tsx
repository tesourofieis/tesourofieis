import { getCalendarDay } from "@tesourofieis/cal/getCalendar";
import { yyyyMMDD } from "@tesourofieis/cal/utils";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";

export default function PageOrdo() {
  const mass = getCalendarDay(yyyyMMDD(new Date()))?.mass;

  if (!mass?.length)
    return (
      <View className="mt-2 flex flex-col items-center justify-center">
        <ActivityIndicator className="text-red-500" />
      </View>
    );

  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Ordo Missæ</Text>

          <Text className="h2">Missa dos Catecúmenos</Text>

          <Text className="h3">Orações ao pé do altar</Text>

          <Text className="aside">
            De pé, diante dos degraus do altar, o Sacerdote começa a Missa,
            fazendo o sinal da cruz e com uma voz clara e audível diz:
          </Text>

          <Language>
            <Text className="latin">
              <Text className="cross"> ✠ </Text> In nómine Patris, et Fílii, et
              Spíritus Sancti.
            </Text>
            <Text className="vernacular">
              <Text className="cross"> ✠ </Text> Em nome do Pai, e do Filho, e
              do Espírito Santo.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
          </Language>

          <Text className="aside">
            Juntando as mãos no peito, começa a antífona:
          </Text>

          <Language>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text> Introíbo ad altáre Dei.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Eu irei até ao altar de
              Deus.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Ad Deum, qui lætíficat
              juventútem meam.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Até Deus, que é a alegria
              da minha juventude.
            </Text>
          </Language>

          <Text className="h3">Salmo 42</Text>

          <Text className="aside">
            O Sacerdote e os Acólitos recitam o salmo alternadamente. Nas Missas
            de Defuntos e do Tempo da Paixão este salmo omite-se.
          </Text>

          <Language>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Júdica me, Deus, et discérne
              causam meam de gente non sancta: ab hómine iníquo et dolóso érue
              me.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Julgai-me, ó Deus, e
              defendei a minha causa da gente infiel; livrai-me do homem iníquo
              e ardiloso.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Quia tu es, Deus, fortitudo
              mea: quare me reppulísti, et quare tristis incédo, dum afflígit me
              inimícus?
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Pois que Vós, ó Deus, sois
              a minha fortaleza, porque me repelistes? E porque ando triste
              enquanto o meu inimigo me aflige?
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Emítte lucem tuam et
              veritátem tuam: ipsa me deduxérunt, et adduxérunt in montem
              sanctum tuum et in tabernácula tua.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Enviai a vossa luz e a vossa
              verdade; elas me guiarão e conduzirão até ao vosso santo monte,
              até aos vossos tabernáculos.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Et introíbo ad altáre Dei:
              ad Deum, qui lætíficat juventútem meam.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> E irei até ao Altar de
              Deus; até Deus, que é a alegria da minha juventude.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Confitébor tibi in cíthara,
              Deus, Deus meus: quare tristis es, ánima mea, et quare contúrbas
              me?
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Ó Deus, ó meu Deus,
              louvar-Vos-ei com a cítara. Porque estás triste, ó minha alma?
              Porque te perturbas?
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Spera in Deo, quóniam adhuc
              confitébor illi: salutáre vultus mei, et Deus meus.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Confia em Deus, pois ainda
              O louvarei. Ele é a minha salvação e o meu Deus.
            </Text>
          </Language>

          <Text className="aside">
            Pequena inclinação da cabeça quando se dá glória ao Pai, ao Filho e
            ao Espírito Santo.
          </Text>

          <Language>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Glória Patri, et Fílio, et
              Spirítui Sancto.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Glória ao Pai, e ao Filho, e
              ao Espírito Santo.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Sicut erat in princípio, et
              nunc, et semper: et in sǽcula sæculórum. Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Assim como era no
              princípio, e agora, e sempre, por todos os séculos dos séculos.
              Amen.
            </Text>
          </Language>

          <Text className="aside">O Sacerdote repete a Antífona:</Text>

          <Language>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text> Introíbo ad altáre Dei.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Eu irei até ao altar de
              Deus.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Ad Deum, qui lætíficat
              juventútem meam.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Até Deus, que é a alegria
              da minha juventude.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Adjutórium nostrum{" "}
              <Text className="cross"> ✠ </Text> in nómine Dómini.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>O nosso auxílio está{" "}
              <Text className="cross"> ✠ </Text> no nome do Senhor.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Qui fecit cœlum et terram.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Que criou o céu e a terra.
            </Text>
          </Language>

          <Text className="aside">
            Profundamente inclinado, o Sacerdote diz o Confíteor, humilhando-se
            publicamente, e depois dele, os ajudantes.
          </Text>

          <Language>
            <Text className="latin">
              <Text className="latin"> Orémus.</Text>
            </Text>
            <Text className="vernacular">
              <Text className="vernacular"> Oremos.</Text>
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text> Confíteor Deo...
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Eu me confesso a Deus...
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Misereátur vestri
              omnípotens Deus, et, dimíssis peccátis vestris, perdúcat vos ad
              vitam ætérnam.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Compadeça-se de vós o
              Senhor omnipotente; vos perdoe os pecados e guie até à vida
              eterna.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text> Amen.
            </Text>
          </Language>

          <Text className="aside">Confissão dos Acólitos e dos fiéis:</Text>

          <Language>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Confíteor Deo omnipoténti,
              beátæ Maríæ semper Vírgini, beáto Michǽli Archángelo, beáto Joánni
              Baptístæ, sanctis Apóstolis Petro et Paulo, ómnibus Sanctis, et
              tibi, pater: quia peccávi nimis cogitatióne, verbo et ópere:
              <Text className="em">Percutit sibi pectus ter, dicens:</Text>
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Eu me confesso a Deus, todo
              poderoso, à bem-aventurada sempre Virgem Maria, ao bem-aventurado
              S. Miguel Arcanjo, ao bem-aventurado S. João Baptista, aos Santos
              Apóstolos S. Pedro e S. Paulo, a todos os santos, e a vós, Padre:
              que pequei muitas vezes por pensamentos, palavras e obras:
              <Text className="em">Baterá no peito três vezes, dizendo:</Text>
            </Text>
            <Text className="latin">
              <Text className="latin">
                Mea culpa, mea culpa, mea máxima culpa.
              </Text>
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">
                Por minha culpa, por minha culpa, por minha tão grande culpa.
              </Text>
            </Text>
            <Text className="latin">
              Ideo precor beátam Maríam semper Vírginem, beátum Michǽlem
              Archángelum, beátum Joánnem Baptístam, sanctos Apóstolos Petrum et
              Paulum, omnes Sanctos, et te, pater, orare pro me ad Dóminum, Deum
              nostrum.
            </Text>
            <Text className="vernacular">
              Portanto rogo à bem-aventurada sempre Virgem Maria, ao
              bem-aventurado S. Miguel Arcanjo, ao bem-aventurado S. João
              Baptista, aos Santos Apóstolos S. Pedro e S. Paulo, a todos os
              Santos e a vós, Padre, que rogueis a Deus, nosso Senhor, por mim.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Misereátur vestri omnípotens
              Deus, et, dimíssis peccátis vestris, perdúcat vos ad vitam
              ætérnam.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Compadeça-se de vós o Senhor
              omnipotente; vos perdoe os pecados e guie até à vida eterna.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Indulgéntiam,{" "}
              <Text className="cross"> ✠ </Text> absolutionem et remissiónem
              peccatórum nostrórum tríbuat nobis omnípotens et miséricors
              Dóminus.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Que o Senhor{" "}
              <Text className="cross"> ✠ </Text> omnipotente e misericordioso
              nos conceda o perdão, a absolvição e a remissão dos nossos
              pecados.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Deus, tu convérsus
              vivificábis nos.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Ó Deus, volvei-Vos para nós,
              e alcançaremos a vida.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Et plebs tua lætábitur in
              te.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> E o vosso povo se alegrará
              convosco.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Osténde nobis, Dómine,
              misericórdiam tuam.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Senhor, mostrai-nos a vossa
              misericórdia.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Et salutáre tuum da nobis.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> E concedei-nos a vossa
              salvação.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Dómine, exáudi oratiónem
              meam.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Senhor, atendei à minha
              oração.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Et clamor meus ad te
              véniat.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> E que meu clamor chegue até
              Vós.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text> Dóminus vobíscum.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>O Senhor esteja convosco.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Et cum spíritu tuo.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> E com vosso espírito.
            </Text>
          </Language>

          <Text className="aside">O Sacerdote sobe ao altar, dizendo:</Text>

          <Language>
            <Text className="latin">
              Aufer a nobis, quǽsumus, Dómine, iniquitátes nostras: ut ad Sancta
              sanctórum puris mereámur méntibus introíre. Per Christum, Dóminum
              nostrum. Amen.
            </Text>
            <Text className="vernacular">
              Afastai de nós, Senhor, Vos imploramos, as nossas iniquidades,
              para que mereçamos entrar no santuário com as almas purificadas.
              Por Cristo, nosso Senhor. Amen.
            </Text>
            <Text className="latin">
              <Text className="latin"> Orémus.</Text>
            </Text>
            <Text className="vernacular">
              <Text className="vernacular"> Oremos.</Text>
            </Text>
          </Language>

          <Text className="aside">
            O Sacerdote, inclinado, diz a seguinte oração:
          </Text>

          <Language>
            <Text className="latin">
              Orámus, Dómine, per mérita Sanctórum tuórum, quorum relíquiæ hic
              sunt, et ómnium Sanctórum: ut indulgére dignéris ómnia peccáta
              mea. Amen.
            </Text>
            <Text className="vernacular">
              Vos pedimos, Senhor, pelos méritos dos vossos Santos, cujas
              relíquias estão aqui, e de todos os Santos, que Vos digneis
              perdoar os nossos pecados. Amen.
            </Text>
          </Language>

          <Text className="h3">Intróito do dia</Text>

          <Text className="aside">
            Nas Missas solenes, incensa-se o altar. O Sacerdote vai para o lado
            da Epístola, e lê o Intróito. Canto solene de entrada, o Intróito
            como que enuncia o tema geral da Missa ou solenidade do dia. Às
            primeiras palavras, todos se benzem, ao mesmo tempo que o
            celebrante.
          </Text>

          <LinkCard mass={mass[0]} description="Intróito" />

          <Text className="h3">Kyrie Eleison</Text>

          <Text className="aside">
            Os Kyries, são nove clamores dirigidos à Santíssima trindade. O
            Sacerdote, no meio do altar, diz, alternadamente com os Acólitos:
          </Text>

          <Language>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text> Kýrie eléison.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Senhor, tende piedade de
              nós.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Kýrie eléison.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Senhor, tende piedade de
              nós.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text> Kýrie eléison.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Senhor, tende piedade de
              nós.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Christe eléison.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Cristo, tende piedade de
              nós.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text> Christe eléison.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Cristo, tende piedade de
              nós.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Christe eléison.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Cristo, tende piedade de
              nós.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text> Kýrie eléison.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Senhor, tende piedade de
              nós.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Kýrie eléison.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Senhor, tende piedade de
              nós.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text> Kýrie eléison.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Senhor, tende piedade de
              nós.
            </Text>
          </Language>

          <Text className="h3">Glória in Excélsis</Text>

          <Text className="aside">
            Canto de alegria, a Glória só se diz nas Missas de carácter festivo:
            Domingos (fora do Advento, Septuagésima e Quaresma), Tempos do
            Natal, Tempo Pascal, festas de Nosso Senhor, da Santíssima Virgem,
            dos Anjos e dos Santos, e Missas votivas solenes. Omite-se em todas
            as outras Missas.
          </Text>

          <Language>
            <Text className="latin">
              Glória in excélsis Deo. Et in terra pax homínibus bonæ voluntátis.
              Laudámus te. Benedícimus te. Adorámus te. Glorificámus te. Grátias
              ágimus tibi propter magnam glóriam tuam. Dómine Deus, Rex
              cœléstis, Deus Pater omnípotens. Dómine Fili unigénite, Jesu
              Christe. Dómine Deus, Agnus Dei, Fílius Patris. Qui tollis peccáta
              mundi, miserére nobis. Qui tollis peccáta mundi, súscipe
              deprecatiónem nostram. Qui sedes ad déxteram Patris, miserére
              nobis. Quóniam tu solus Sanctus. Tu solus Dóminus. Tu solus
              Altíssimus, Jesu Christe. Cum Sancto Spíritu{" "}
              <Text className="cross"> ✠ </Text> in glória Dei Patris.
            </Text>
            <Text className="vernacular">
              Glória a Deus nas alturas e paz na terra aos homens de boa
              vontade. Nós Vos louvamos. Nós Vos bendizemos. Nós Vos adoramos.
              Nós Vos glorificamos. Nós Vos damos graças pela vossa imensa
              glória. Ó Senhor Deus, Rei dos céus, Deus Pai todo-o-poderoso.
              Senhor Jesus Cristo, Filho Unigénito, Senhor Deus, Cordeiro de
              Deus, Filho de Deus Pai. Vós que tirais os pecados do mundo, tende
              misericórdia de nós. Vós, que tirais os pecados do mundo, atendei
              à nossa súplica. Vós, que estais sentado à direita do Pai, tende
              misericórdia de nós. Só Vós sois o Santo; só Vós, o Senhor; só
              Vós, o Altíssimo, Jesus Cristo: com o Espírito Santo{" "}
              <Text className="cross"> ✠ </Text> na glória de Deus Pai.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
          </Language>

          <Text className="aside">
            O Sacerdote benze-se, beija o altar, volta-se para os fiéis e diz:
          </Text>

          <Language>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text> Dóminus vobíscum.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>O Senhor esteja convosco.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Et cum spíritu tuo.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> E com vosso espírito.
            </Text>
          </Language>

          <Text className="h3">Colecta do dia</Text>

          <Text className="aside">
            O Sacerdote, diante do missal, recita a Colecta. Breve oração que
            resume e apresenta a Deus os votos de todos os fiéis, votos estes
            sugeridos pelo mystério ou solenidade do dia.
          </Text>

          <Language>
            <Text className="latin">
              <Text className="latin"> Orémus.</Text>
            </Text>
            <Text className="vernacular">
              <Text className="vernacular"> Oremos.</Text>
            </Text>
          </Language>

          <LinkCard mass={mass[0]} description="Oração" />

          <Language>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>...per ómnia sǽculua
              sæculórum.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>...por todos os séculos dos
              séculos.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
          </Language>

          <Text className="h3">Epístola do dia</Text>

          <LinkCard mass={mass[0]} description="Epístola" />

          <Language>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Deo grátias.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Graças a Deus.
            </Text>
          </Language>

          <Text className="h3">Gradual do dia</Text>

          <Text className="aside">
            A oração curta de acção de graças, consiste geralmente de dois ou
            três versos retirados dos Salmos ou do Antigo Testamento.
          </Text>

          <LinkCard mass={mass[0]} description="Gradual" />

          <Text className="aside">
            No Tempo da Septuagésima, o Allelúja é substituído pelo Trato. No
            Tempo Pascal, omite-se o Gradual, e dizem-se dois Allelúja.
          </Text>

          <Text className="h3">Munda cor</Text>

          <Text className="aside">
            Enquanto o Acólito muda o Missal, o Sacerdote inclina-se
            profundamente no meio do Altar, dizendo:
          </Text>

          <Language>
            <Text className="latin">
              Munda cor meum ac labia mea, omnípotens Deus, qui labia Isaíæ
              Prophétæ cálculo mundásti igníto: ita me tua grata miseratióne
              dignáre mundáre, ut sanctum Evangélium tuum digne váleam nuntiáre.
              Per Christum, Dóminum nostrum. Amen.
            </Text>
            <Text className="vernacular">
              Ó omnipotente Deus, assim como purificastes os lábios do Profeta
              Isaías com uma brasa de fogo, assim também purificais agora o meu
              coração e os meus lábios. Dignai-Vos, pela vossa benigna
              misericórdia, purificar-me inteiramente, para que possa dignamente
              anunciar o vosso Evangelho. Amen.
            </Text>
          </Language>

          <Text className="aside">
            Seguidamente recita-se a fórmula da Bênção, a qual só se omite nas
            Missas de Réquiem e na Sexta-Feira Santa:
          </Text>

          <Language>
            <Text className="latin">
              Jube Dómine benedícere. Dóminus sit in corde meo, et in lábiis
              meis: ut dine et competénter annúntiem. Evangélium suum. Amen.
            </Text>
            <Text className="vernacular">
              Dignai-Vos, Senhor, abençoar-me. Que o Senhor esteja no meu
              coração e nos meus lábios, para que possa digna e devidamente
              anunciar seu Evangelho. Amen.
            </Text>
          </Language>

          <Text className="aside">
            Às primeiras palavras - Sequéntia, etc. faz-se o sinal da cruz na
            testa, na boca e no peito, declarando a ausência de vergonha na
            palavra de Deus, a prontidão para confessá-la e o amor, de todo o
            coração, que a ela têm. Nesta proclamação, ponto culminante desta
            primeira parte da Missa, a leitura ou canto do Evangelho é revestida
            da maior solenidade. O respeito para com ele, exige que seja
            escutado de pé. Nas Missas solenes, o livro é levado honorificamente
            em procissão. É incensado antes de começar, e, terminada a leitura,
            é reverentemente beijado pelo Sacerdote.
          </Text>

          <Text className="h3">Evangelho do dia</Text>

          <Text className="aside">
            É um momento solene! Toda a assistência está de pé.
          </Text>

          <Language>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text> Dóminus vobíscum.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>O Senhor esteja convosco.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Et cum spíritu tuo.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> E com vosso espírito.
            </Text>
          </Language>

          <LinkCard mass={mass[0]} description="Evangelho" />

          <Language>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Glória tibi, Dómine.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Glória a Vós, Senhor.
            </Text>
          </Language>

          <Text className="aside">
            O celebrante beija o sagrado texto, dizendo:
          </Text>

          <Language>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Per evangélica dicta
              deleántur nostra delícta.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Que pelas palavras do
              Evangelho nos sejam perdoados os nossos pecados.
            </Text>
          </Language>

          <Text className="aside">Digamos solenemente:</Text>

          <Language>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Laus tibi, Christe.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Louvores a Vós, ó Cristo.
            </Text>
          </Language>

          <Text className="h3">Credo</Text>

          <Text className="aside">
            Aos Domingos e certos dias de festa, o celebrante vai ao meio do
            altar e diz o Credo. Este só se diz aos Domingos, e em algumas
            festas de 1ª. Classe. É cantado em Missas Solenes.
          </Text>

          <Language>
            <Text className="latin">
              Credo ín unum Deum. Patrem omnipoténtem, factórem cœli et terræ,
              visibílium ómnium et invisibílium. Et in unum Dóminum Jesum
              Christum, Fílium Dei unigénitum. Et ex Patre natum ante ómnia
              sǽcula. Deum de Deo, lumen de lúmine, Deum verum de Deo vero.
              Génitum, non factum, consubstantiálem Patri: per quem ómnia facta
              sunt. Qui propter nos hómines et propter nostram salútem descéndit
              de cœlis. <Text className="em">(Hic genuflectitur).</Text>
            </Text>
            <Text className="vernacular">
              Creio em um só Deus. Pai, todo poderoso, criador do Céu e da
              Terra, de todas as coisas visíveis e invisíveis. E creio em um só
              Senhor, Jesus Cristo, Filho Unigénito de Deus, nascido do Pai
              antes de todos os séculos. Deus de Deus, Luz da Luz, Deus
              verdadeiro de Deus verdadeiro. Gerado, não criado, consubstancial
              ao Pai: por Ele todas as coisas foram feitas. E por nós, homens, e
              para nossa salvação desceu dos céus.{" "}
              <Text className="em">(todos se ajoelham).</Text>
            </Text>
            <Text className="latin">
              Et incarnátus est de Spíritu Sancto ex María Vírgine:{" "}
              <Text className="latin">Et homo factus est.</Text>
            </Text>
            <Text className="vernacular">
              E encarnou pelo Espírito Santo, no seio da Virgem Maria:{" "}
              <Text className="vernacular">E foi feito homem.</Text>
            </Text>
            <Text className="latin">
              Crucifíxus étiam pro nobis: sub Póntio Piláto passus, et sepúltus
              est. Et resurréxit tértia die, secúndum Scriptúras. Et ascéndit in
              cœlum: sedet ad déxteram Patris. Et íterum ventúrus est cum glória
              judicáre vivos et mórtuos: cujus regni non erit finis. Et in
              Spíritum Sanctum, Dóminum et vivificántem: qui ex Patre Filióque
              procédit. Qui cum Patre et Fílio simul adorátur et
              conglorificátur: qui locútus est per Prophétas. Et unam sanctam
              cathólicam et apostolicam Ecclésiam. Confíteor unum baptísma in
              remissiónem peccatórum. Et exspécto resurrectiónem mortuórum. Et{" "}
              <Text className="cross"> ✠ </Text> vitam ventúri sǽculi.
            </Text>
            <Text className="vernacular">
              Também por nós foi crucificado sob Pôncio Pilatos, padeceu e foi
              sepultado. Ressuscitou ao terceiro dia, conforme as Escrituras, e
              subiu aos céus, onde está sentado à direita do Pai. De novo há-de
              vir em sua glória, para julgar os vivos e os mortos; e o seu reino
              não terá fim. Creio no Espírito Santo, Senhor que dá a vida, e
              procede do Pai e do Filho; e com o Pai e o Filho é adorado e
              glorificado: Ele que falou pelos Profetas. Creio na Igreja una,
              santa, católica e apostólica. Confesso um só baptismo para a
              remissão dos pecados. E espero a ressurreição dos mortos, e{" "}
              <Text className="cross"> ✠ </Text> a vida do mundo que há-de vir.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
          </Language>

          <Text className="h2">Missa dos Fiéis</Text>

          <Text className="h3">Sacrifício Ofertório</Text>

          <Text className="aside">
            Com o Ofertório, começa a segunda parte da Missa ou Sacrifício
            propriamente dito. O celebrante beija o Altar e voltado para o povo
            diz:
          </Text>

          <Language>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text> Dóminus vobíscum.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>O Senhor esteja convosco.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Et cum spíritu tuo.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> E com vosso espírito.
            </Text>
          </Language>

          <Language>
            <Text className="latin">
              <Text className="latin">
                <Text className="versicle"> ℣. </Text> Orémus.
              </Text>
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">
                <Text className="versicle"> ℣. </Text> Oremos.
              </Text>
            </Text>
          </Language>

          <Text className="h3">Ofertório do dia</Text>

          <LinkCard mass={mass[0]} description="Ofertório" />

          <Text className="h4">Oferecimento do pão:</Text>

          <Text className="aside">
            Terminada esta leitura, o Sacerdote descobre o Cálice e toma nas
            mãos a patena com o pão, que vai ser consagrado. (O Acólito vai
            buscar o vinho e a água à credência, levando-os Altar). O Sacerdote
            oferece-os a Deus, dizendo:
          </Text>

          <Language>
            <Text className="latin">
              Súscipe, sancte Pater, omnipotens ætérne Deus, hanc immaculátam
              hóstiam, quam ego indígnus fámulus tuus óffero tibi Deo meo vivo
              et vero, pro innumerabílibus peccátis, et offensiónibus, et
              neglegéntiis meis, et pro ómnibus circumstántibus, sed et pro
              ómnibus fidélibus christiánis vivis atque defúnctis: ut mihi, et
              illis profíciat ad salútem in vitam ætérnam. Amen.
            </Text>
            <Text className="vernacular">
              Recebei, ó Pai santo, Deus omnipotente e eterno, esta hóstia
              imaculada, que eu, vosso indigno servo, Vos ofereço, ó meu Deus
              vivo e verdadeiro, pelos meus inumeráveis pecados, ofensas e
              negligências, por todos os assistentes e por todos os cristãos
              vivos e mortos, a fim de que sirva de proveito para a minha
              salvação, para a deles e para a vida eterna. Amen.
            </Text>
          </Language>

          <Text className="aside">
            Ao lado direito do altar, o celebrante deita vinho no cálice, a que
            mistura umas gotas de água, dizendo a seguinte oração:
          </Text>

          <Language>
            <Text className="latin">
              Deus, qui humánæ substántiæ dignitátem mirabíliter condidísti, et
              mirabílius reformásti: da nobis per hujus aquæ et vini mystérium,
              ejus divinitátis esse consórtes, qui humanitátis nostræ fíeri
              dignátus est párticeps, Jesus Christus, Fílius tuus, Dóminus
              noster: Qui tecum vivit et regnat in unitáte Spíritus Sancti Deus:
              per ómnia sǽcula sæculórum. Amen.
            </Text>
            <Text className="vernacular">
              Ó Deus, que maravilhosamente criastes a dignidade da natureza
              humana e que mais prodigiosamente ainda a reformastes, permiti que
              pela mistura simbólica desta água e deste vinho sejamos
              participantes da divindade daquele que quis assumir a nossa
              humanidade, Jesus Cristo, vosso Filho, nosso Senhor, que, sendo
              Deus, vive e reina convosco em unidade do Espírito Santo, em todos
              os séculos dos séculos. Amen.
            </Text>
          </Language>

          <Text className="aside">
            No meio do altar, o celebrante faz o oferecimento do cálice:
          </Text>

          <Language>
            <Text className="latin">
              Offérimus tibi, Dómine, cálicem salutáris, tuam deprecántes
              cleméntiam: ut in conspéctu divínæ majestátis tuæ, pro nostra et
              totíus mundi salúte, cum odóre suavitátis ascéndat. Amen.
            </Text>
            <Text className="vernacular">
              Vos oferecemos, Senhor, o Cálice da salvação; e Vos suplicamos que
              misericordiosamente o façais subir, como suave perfume, diante da
              vossa divina majestade, para nossa salvação e de todo o mundo.
              Amen.
            </Text>
          </Language>

          <Text className="aside">Depois, inclinando-se diz:</Text>

          <Language>
            <Text className="latin">
              In spíritu humilitátis et in ánimo contríto suscipiámur a te,
              Dómine: et sic fiat sacrifícium nostrum in conspéctu tuo hódie, ut
              pláceat tibi, Dómine Deus.
            </Text>
            <Text className="vernacular">
              Em humildade e contrição, sejamos recebidos por Vós, Senhor; e
              assim este sacrifício, ó Deus, se torne agradável aos vossos
              olhos.
            </Text>
          </Language>

          <Text className="aside">Invocação do Espírito Santo:</Text>

          <Language>
            <Text className="latin">
              Veni, sanctificátor omnípotens ætérne Deus: et bene{" "}
              <Text className="cross"> ✠ </Text> dic hoc sacrifícium, tuo sancto
              nómini præparátum.
            </Text>
            <Text className="vernacular">
              Vinde, ó Santificador omnipotente, Deus eterno, e abençoai{" "}
              <Text className="cross"> ✠ </Text> este sacrifício, preparado para
              a glória do vosso Santo Nome.
            </Text>
          </Language>

          <Text className="h4">Incensão</Text>

          <Text className="aside">
            Segue-se, nas Missas solenes, o rito da incensão. Tudo o que é
            oferecido a Deus é incensado. Logo, são incensados o Pão, o Vinho e
            todos os fiéis presentes.
          </Text>

          <Text className="h4">Bênção do Incenso:</Text>

          <Language>
            <Text className="latin">
              Per intercessiónem beáti Michǽlis Archángeli, stantis a dextris
              altáris incénsi, et ómnium electórum suórum, incénsum istud
              dignétur Dóminus bene <Text className="cross"> ✠ </Text> dícere,
              et in odórem suavitátis accípere. Per Christum, Dóminum nostrum.
              Amen.
            </Text>
            <Text className="vernacular">
              Dignai-Vos Senhor, pela intercessão do bem-aventurado Arcanjo
              Miguel, que está de pé à direita do altar do incenso, e de todos
              vossos eleitos, abençoar <Text className="cross"> ✠ </Text> este
              incenso e aceitá-lo como odor de suavidade. Por Cristo, Senhor
              nosso. Amen.
            </Text>
          </Language>

          <Text className="aside">
            O Sacerdote incensa primeiro as oblatas:
          </Text>

          <Language>
            <Text className="latin">
              Incénsum istud a te benedíctum ascéndat ad te, Dómine: et
              descéndat super nos misericórdia tua.
            </Text>
            <Text className="vernacular">
              Que este incenso, por Vós abençoado, suba até Vós, Senhor; e desça
              sobre nós a vossa misericórdia.
            </Text>
          </Language>

          <Text className="aside">
            Em seguida incensa a cruz e o altar, dizendo, entretanto, os
            seguintes versículos, retirados do Salmo 140:
          </Text>

          <Language>
            <Text className="latin">
              Dirigátur, Dómine, orátio mea, sicut incénsum, in conspéctu tuo:
              elevátio mánuum meárum sacrifícium vespertínum. Pone, Dómine,
              custódiam ori meo, et óstium circumstántiæ lábiis meis: ut non
              declínet cor meum in verba malítiæ, ad excusándas excusatiónes in
              peccátis.
            </Text>
            <Text className="vernacular">
              Suba como incenso até Vós, Senhor, a minha oração: a elevação das
              minhas mãos seja como o sacrifício vespertino. Colocai, Senhor,
              uma guarda em minha boca, e uma porta em volta de meus lábios. Não
              deixes que meu coração se deixe arrastar por palavras de maldade,
              procurando desculpas para pecar.
            </Text>
          </Language>

          <Text className="aside">
            O celebrante entrega o turíbulo ao Diácono, dizendo:
          </Text>

          <Language>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Accéndat in nobis Dóminus
              ignem sui amóris, et flammam ætérnæ caritátis. Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Que o Senhor acenda em nós
              o fogo do seu amor e a chama da eterna caridade. Amen.
            </Text>
          </Language>

          <Text className="aside">
            O Diácono incensa o Sacerdote, e depois todos os outros por ordem.
            Nas Missas de defuntos, é incensado só o Sacerdote.
          </Text>

          <Text className="h4">Lavabo</Text>

          <Text className="aside">
            O lavar as mãos simboliza a pureza da alma, necessária para oferecer
            o santo Sacrifício. O Sacerdote vai à direita do altar e lava as
            mãos, dizendo, entretanto, os seguintes versículos do salmo 25:
          </Text>

          <Language>
            <Text className="latin">
              Lavábo inter innocéntes manus meas: et circúmdabo altáre tuum.
              Dómine: Lavarei as minhas mãos, como os inocentes, e rodearei,
              Senhor o vosso altar: Ut áudiam vocem laudis, et enárrem univérsa
              mirabília tua. Dómine, diléxi decórem domus tuæ et locum
              habitatiónis glóriæ tuæ.
            </Text>
            <Text className="vernacular">
              Para ouvir a voz dos vossos louvores e publicar todas as vossas
              maravilhas. Amei, Senhor, o decoro da vossa casa e o lugar onde
              reside a vossa glória.
            </Text>
            <Text className="latin">
              Ne perdas cum ímpiis, Deus, ánimam meam, et cum viris sánguinum
              vitam meam:
            </Text>
            <Text className="vernacular">
              Não deixeis, ó meu Deus, a minha alma perder-se com os ímpios, nem
              a minha vida com os homens sanguinários:
            </Text>
            <Text className="latin">
              In quorum mánibus iniquitátes sunt: déxtera eórum repléta est
              munéribus. Ego autem in innocéntia mea ingréssus sum: rédime me et
              miserére mei. Pes meus stetit in dirécto: in ecclésiis benedícam
              te, Dómine.
            </Text>
            <Text className="vernacular">
              Que têm as mãos manchadas de iniquidades e a mão direita cheia de
              dádivas. Pois que tenho vivido na inocência, salvai-me e tende
              misericórdia de mim. Meus pés continuam firmes no caminho direito:
              e hei-de bendizer-Vos, Senhor, em todas as assembleias.
            </Text>
            <Text className="latin">
              Glória Patri, et Fílio, et Spirítui Sancto. Sicut erat in
              princípio, et nunc, et semper: et in sǽcula sæculórum. Amen.
            </Text>
            <Text className="vernacular">
              Glória ao Pai, e ao Filho, e ao Espírito Santo. Assim como era no
              princípio, e agora, e sempre, por todos os séculos dos séculos.
              Amen.
            </Text>
          </Language>

          <Text className="aside">
            Nas Missas de defuntos e do Tempo da Paixão omite-se o Glória Patri.
          </Text>

          <Text className="h4">Oração à Santíssima Trindade</Text>

          <Text className="aside">
            Inclinado, ao meio do altar, o Sacerdote diz:
          </Text>

          <Language>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Súscipe, sancta Trinitas,
              hanc oblatiónem, quam tibi offérimus ob memóriam passiónis,
              resurrectiónis, et ascensiónis Jesu Christi, Dómini nostri: et in
              honórem beátæ Maríæ semper Vírginis, et beáti Joannis Baptistæ, et
              sanctórum Apostolórum Petri et Pauli, et istórum et ómnium
              Sanctórum: ut illis profíciat ad honórem, nobis autem ad salútem:
              et illi pro nobis intercédere dignéntur in cœlis, quorum memóriam
              ágimus in terris. Per eúndem Christum, Dóminum nostrum. Amen.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Recebei, ó Santíssima
              Trindade, esta oblação, que Vos oferecemos em memória da Paixão,
              da Ressurreição e da Ascensão de N. S. Jesus Cristo: e em honra da
              bem-aventurada sempre Virgem Maria, do bem-aventurado João
              Baptista e dos Santos Apóstolos Pedro e Paulo, e destes, que estão
              aqui, e de todos os Santos: para que esta oblação lhes sirva de
              glória e a nós de salvação: e aqueles, cuja memória honramos na
              terra, se dignem interceder por nós no céu. Pelo mesmo Jesus
              Cristo, nosso Senhor. Amen.
            </Text>
          </Language>

          <Text className="aside">
            Beija o Altar e voltando-se para os fiéis, o Sacerdote convida-os a
            orar com ele:
          </Text>

          <Text className="h4">Orate Frates</Text>

          <Language>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Oráte, fratres: ut meum ac
              vestrum sacrifícium acceptábile fiat apud Deum Patrem
              omnipoténtem.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Orai, meus irmãos, a fim de
              que meu sacrifício, que é também vosso, seja recebido por Deus Pai
              omnipotente.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Suscípiat Dóminus
              sacrifícium de mánibus tuis ad laudem et glóriam nominis sui, ad
              utilitátem quoque nostram, totiúsque Ecclésiæ suæ sanctæ.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Que o Senhor receba por
              vossas mãos este sacrifício para a honra e glória de seu Nome, e
              também para a nossa utilidade e de toda sua santa Igreja.
            </Text>
          </Language>

          <Text className="aside">O Sacerdote responde, em voz baixa:</Text>

          <Language>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text> Amen.
            </Text>
          </Language>

          <Text className="aside">
            Em seguida lê a Secreta. À Secreta principal, podem, em certas
            Missas, ajuntar-se outras, em número igual e segundo as mesmas
            regras da Colecta.
          </Text>

          <Text className="h3">Secreta do dia</Text>

          <LinkCard mass={mass[0]} description="Secreta" />

          <Language>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>...Per ómnia sǽcula
              sæculórum.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>...Por todos os séculos dos
              séculos.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
          </Language>

          <Text className="h3">Canon Missæ</Text>

          <Text className="aside">
            O Cânon constitui a parte central da Missa. Com o Prefácio, começa a
            grande, a solene oração sacerdotal da Igreja e oblação propriamente
            dita do Sacrifício. Curto diálogo introdutório entre o Sacerdote e
            os fiéis desperta nas almas os sentimentos de acção de graças que
            convêm à celebração dos santos mystérios.
          </Text>

          <Language>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text> Dóminus vobíscum.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>O Senhor esteja convosco.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Et cum spíritu tuo.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> E com vosso espírito.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text> Sursum corda.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text> Corações ao alto.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Habémus ad Dóminum.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Assim os temos para o
              Senhor.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Grátias agámus Dómino, Deo
              nostro.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Demos graças ao Senhor,
              Nosso Deus.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Dignum et justum est.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Assim é digno e justo.
            </Text>
          </Language>

          <Text className="h3">Prefácio do dia</Text>

          <LinkCard href="/missal/prefacios" description="Prefácios" />

          <Text className="h3">Sanctus</Text>

          <Language>
            <Text className="latin">
              Sanctus, Sanctus, Sanctus Dóminus, Deus Sábaoth. Pleni sunt cœli
              et terra glória tua. Hosánna in excélsis.
            </Text>
            <Text className="vernacular">
              Santo, Santo, Santo, Senhor Deus do Universo. O céu e a terra
              proclamam a vossa glória. Hossana nas alturas.
            </Text>
            <Text className="latin">
              Benedíctus, <Text className="cross"> ✠ </Text> qui venit in nómine
              Dómini. Hosánna in excélsis.
            </Text>
            <Text className="vernacular">
              Bendito <Text className="cross"> ✠ </Text> o que vem em nome do
              Senhor. Hosana nas alturas.
            </Text>
          </Language>

          <Text className="h3">Cânon</Text>

          <Text className="aside">
            O Sacerdote, levanta os olhos para o céu, inclina-se, beija o altar
            e continua a grande oração sacerdotal.
          </Text>

          <Language>
            <Text className="latin">
              Te Igitur clementíssime Pater, per Jesum Christum, Fílium tuum,
              Dóminum nostrum, súpplices rogámus, ac pétimus, uti accepta habeas
              et benedícas, hæc <Text className="cross"> ✠ </Text> dona, hæc{" "}
              <Text className="cross"> ✠ </Text> múnera, hæc{" "}
              <Text className="cross"> ✠ </Text> sancta sacrifícia illibáta, in
              primis, quæ tibi offérimus pro Ecclésia tua sancta cathólica: quam
              pacificáre, custodíre, adunáre et régere dignéris toto orbe
              terrárum: una cum fámulo tuo Papa nostro{" "}
              <Text className="text-red-500">N.</Text> et Antístite nostro{" "}
              <Text className="text-red-500">N.</Text> et ómnibus orthodóxis,
              atque cathólicæ et apostólicæ fídei cultóribus.
            </Text>
            <Text className="vernacular">
              A Vós, pois, rogamos e pedimos, ó clementíssimo Pai, por Jesus
              Cristo, vosso Filho e nosso Senhor, que estes{" "}
              <Text className="cross"> ✠ </Text> dons, estas{" "}
              <Text className="cross"> ✠ </Text> ofertas, estes{" "}
              <Text className="cross"> ✠ </Text> sacrifícios santos e imaculados
              Vos sejam agradáveis e os abençoeis, os quais, antes de tudo, Vos
              oferecemos pela nossa santa Igreja Católica: dignai-Vos
              conceder-lhe a paz, guardá-la, uni-la e governá-la por toda a
              terra, em comunhão com vosso servo, nosso Papa{" "}
              <Text className="text-red-500">N.</Text> com o nosso Bispo{" "}
              <Text className="text-red-500">N.</Text> e com todos os ortodoxos
              e os que professam a fé católica e apostólica.
            </Text>
          </Language>

          <Text className="h4">Memento dos vivos</Text>

          <Language>
            <Text className="latin">
              Meménto, Dómine, famulórum famularúmque tuarum{" "}
              <Text className="latin">N.</Text> et{" "}
              <Text className="text-red-500">N.</Text> et ómnium circumstántium,
              quorum tibi fides cógnita est et nota devótio, pro quibus tibi
              offérimus: vel qui tibi ófferunt hoc sacrifícium laudis, pro se
              suísque ómnibus: pro redemptióne animárum suárum, pro spe salútis
              et incolumitátis suæ: tibíque reddunt vota sua ætérno Deo, vivo et
              vero.
            </Text>
            <Text className="vernacular">
              Lembrai-Vos, Senhor, dos vossos servos{" "}
              <Text className="vernacular">N.</Text>e{" "}
              <Text className="text-red-500">N.</Text> e de todos os que aqui
              estão presentes, cuja fé Vos é conhecida e a piedade é notória:
              pelos quais Vos oferecemos, ou eles Vos oferecem, este sacrifício
              de louvor por si próprios e por todos seus, pela redenção das suas
              almas, pela esperança da sua salvação: é a Vós que oferecem as
              homenagens, como Deus eterno, vivo e verdadeiro, que sois.
            </Text>
          </Language>

          <Text className="h4">Memória dos Santos</Text>

          <Text className="aside">
            Para além destes Comunicantes, existem também para o Natal,
            Epifania, Quinta-Feira Santa, Sábado de Aleluia e Páscoa, Ascensão e
            Pentecostes.
          </Text>

          <Language>
            <Text className="latin">
              Communicántes, et memóriam venerántes, in primis gloriósæ semper
              Vírginis Maríæ, Genitrícis Dei et Dómini nostri Jesu Christi: sed
              et beatórum Apostolórum ac Mártyrum tuórum, Petri et Pauli,
              Andréæ, Jacóbi, Joánnis, Thomæ, Jacóbi, Philíppi, Bartholomǽi,
              Matthǽi, Simónis et Thaddǽi: Lini, Cleti, Cleméntis, Xysti,
              Cornélii, Cypriáni, Lauréntii, Chrysógoni, Joánnis et Pauli, Cosmæ
              et Damiáni: et ómnium Sanctórum tuórum; quorum méritis precibúsque
              concédas, ut in ómnibus protectiónis tuæ muniámur auxílio. Per
              eúndem Christum, Dóminum nostrum. Amen.
            </Text>
            <Text className="vernacular">
              Unidos em uma mesma comunhão, primeiramente honramos a memória da
              gloriosa sempre Virgem Maria, Mãe de Jesus Cristo, nosso Deus e
              Senhor, e depois também a dos vossos bem-aventurados Apóstolos e
              Mártires: Pedro e Paulo, André, Tiago, João, Tomé, Tiago, Filipe,
              Bartolomeu, Mateus, Simão e Tadeu: Lino, Cleto, Clemente, Xisto,
              Cornélio, Cipriano, Lourenço, Crisógono, João e Paulo, Cosme e
              Damião: e de todos vossos Santos. Dignai-Vos permitir que por seus
              méritos e preces gozemos o poderoso auxílio da vossa protecção.
              Pelo mesmo Cristo, nosso Senhor. Amen.
            </Text>
          </Language>

          <Text className="h3">Orações na Consagração</Text>

          <Text className="aside">
            Estendendo as mãos sobre as oblatas, o celebrante diz:
          </Text>

          <Language>
            <Text className="latin">
              Hanc igitur oblatiónem servitutis nostræ, sed et cunctæ famíliæ
              tuæ, quǽsumus, Dómine, ut placátus accípias: diésque nostros in
              tua pace dispónas, atque ab ætérna damnatióne nos éripi, et in
              electórum tuórum júbeas grege numerári. Per Christum, Dóminum
              nostrum. Amen.
            </Text>
            <Text className="vernacular">
              Por este motivo, Senhor, Vos rogamos que Vos dignais receber
              favoravelmente esta oferta que eu, vosso indigno servo, e toda a
              vossa família Vos fazemos; concedei-nos o gozo da vossa paz nos
              nossos dias, livrai-nos da condenação eterna e admiti-nos ao
              número dos vossos escolhidos. Por Cristo, nosso Senhor. Amen.
            </Text>
          </Language>

          <Text className="aside">O Sacerdote abençoa as oblatas dizendo:</Text>

          <Language>
            <Text className="latin">
              Quam oblatiónem tu, Deus, in ómnibus, quǽsumus, bene{" "}
              <Text className="cross"> ✠ </Text> díctam, adscríp{" "}
              <Text className="cross"> ✠ </Text> tam, ra{" "}
              <Text className="cross"> ✠ </Text> tam, rationábilem,
              acceptabilémque fácere dignéris: ut nobis Cor{" "}
              <Text className="cross"> ✠ </Text> pus, et San{" "}
              <Text className="cross"> ✠ </Text> guis fiat dilectíssimi Fílii
              tui, Dómini nostri Jesu Christi.
            </Text>
            <Text className="vernacular">
              Que esta oblação, ó Deus, Vos imploramos, seja abençoada,
              aprovada, confirmada, digna e aceitável, a fim de que se converta
              para nós no Corpo e no Sangue de vosso amado Filho, nosso Senhor
              Jesus Cristo.
            </Text>
          </Language>

          <Text className="h4">Consagração e Elevação da Hóstia</Text>

          <Text className="aside">
            Inclina-se sobre o altar, e profere as palavras da consagração da
            Hóstia. Em seguida adora-a, e eleva-a aos olhos dos fiéis, para que
            todos a adorem em silêncio. O mesmo faz, depois, para a consagração
            do Cálice.
          </Text>

          <Language>
            <Text className="latin">
              Qui prídie quam paterétur, accépit panem in sanctas ac venerábiles
              manus suas, et elevátis óculis in cœlum ad te Deum, Patrem suum
              omnipoténtem, tibi grátias agens, bene{" "}
              <Text className="cross"> ✠ </Text> dixit, fregit, dedítque
              discípulis suis, dicens: Accípite, et manducáte ex hoc omnes.
            </Text>
            <Text className="vernacular">
              O qual, na véspera da sua paixão tomou o pão em suas santas e
              veneráveis mãos: e, erguendo os olhos ao céu, a Vós, Deus seu Pai
              omnipotente, e dando-Vos graças, abençoou-o{" "}
              <Text className="cross"> ✠ </Text>, partiu-o e deu-o aos seus
              discípulos, dizendo: Tomai todos e comei:
            </Text>
          </Language>

          <Language>
            <Text className="latin">
              <Text className="latin">Hoc est enim Corpus meum.</Text>
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Pois isto é o meu Corpo.</Text>
            </Text>
          </Language>

          <Text className="h4">Consagração e Elevação do Cálice:</Text>

          <Language>
            <Text className="latin">
              Símili modo postquam cœnátum est, accípiens et hunc præclárum
              Cálicem in sanctas ac venerábiles manus suas: tibi grátias agens,
              bene <Text className="cross"> ✠ </Text> dixit, dedítque discípulis
              suis, dicens: Accípite, et bíbite ex eo omnes.
            </Text>
            <Text className="vernacular">
              Do mesmo modo, Jesus, após a Ceia, tomou em suas santas e
              veneráveis mãos este precioso Cálice, e, novamente, dando-Vos
              graças, abençoou-o <Text className="cross"> ✠ </Text> e deu-o aos
              seus discípulos dizendo:
            </Text>
            <Text className="latin">
              <Text className="latin">
                Hic est enim Calix Sánguinis mei, novi et ætérni testaménti:
                mystérium fídei: qui pro vobis et pro multis effundétur in
                remissiónem peccatórum.{" "}
              </Text>
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">
                {" "}
                Pois isto é o Cálice do meu Sangue do novo e eterno testamento,
                mystério da fé, que será derramado por vós e por muitos, para a
                remissão dos pecados.{" "}
              </Text>
            </Text>
          </Language>

          <Text className="aside">
            Depois da consagração do Cálice, o Sacerdote diz com uma voz baixa:
          </Text>

          <Language>
            <Text className="latin">
              Hæc quotiescúmque fecéritis, in mei memóriam faciétis.
            </Text>
            <Text className="vernacular">
              Todas as vezes que fizerdes isto, fazei-o em memória de mim.
            </Text>
          </Language>

          <Text className="h4">Oblação da Vítima a Deus</Text>

          <Text className="aside">
            O Sacerdote continua depois as orações do Cânon:
          </Text>

          <Language>
            <Text className="latin">
              Unde et mémores, Dómine, nos servi tui, sed et plebs tua sancta,
              ejusdem Christi Fílii tui, Dómini nostri, tam beátæ passiónis, nec
              non et ab ínferis resurrectiónis, sed et in cœlos gloriósæ
              ascensiónis: offérimus præcláræ majestáti tuæ de tuis donis ac
              datis, hóstiam <Text className="cross"> ✠ </Text> puram, hóstiam{" "}
              <Text className="cross"> ✠ </Text> sanctam, hóstiam{" "}
              <Text className="cross"> ✠ </Text> immaculátam, Panem{" "}
              <Text className="cross"> ✠ </Text> sanctum vitæ ætérnæ, et Calicem{" "}
              <Text className="cross"> ✠ </Text> salútis perpétuæ.
            </Text>
            <Text className="vernacular">
              Por este motivo, Senhor, nós, vossos servos, e o vosso povo santo,
              lembrando-nos da bem-aventurada Paixão do mesmo Cristo, vosso
              Filho e Senhor nosso, assim como também da sua Ressurreição dos
              mortos e da sua gloriosa Ascensão aos céus, oferecemos à vossa
              divina majestade os mesmos dons que nos foram dados: a Hóstia{" "}
              <Text className="cross"> ✠ </Text> pura, a Hóstia{" "}
              <Text className="cross"> ✠ </Text> santa, a Hóstia{" "}
              <Text className="cross"> ✠ </Text> imaculada, o Pão{" "}
              <Text className="cross"> ✠ </Text> santo da vida eterna e o Cálice{" "}
              <Text className="cross"> ✠ </Text> da salvação perpétua.
            </Text>
          </Language>

          <Text className="aside">Com as mãos afastadas, contínua:</Text>

          <Language>
            <Text className="latin">
              Supra quæ propítio ac seréno vultu respícere dignéris: et accépta
              habére, sicúti accépta habére dignátus es múnera púeri tui justi
              Abel, et sacrifícium Patriárchæ nostri Abrahæ: et quod tibi
              óbtulit summus sacérdos tuus Melchísedech, sanctum sacrifícium,
              immaculátam hóstiam.
            </Text>
            <Text className="vernacular">
              Sobre estas ofertas dignai-Vos lançar um olhar propício e benévolo
              e aceitá-las, como Vos dignastes receber os dons do justo Abel,
              vosso servo, o sacrifício do nosso Patriarca Abraão e o que Vos
              ofereceu o Sumo sacerdote Melquisedeque, pois este é um sacrifício
              santo, uma hóstia imaculada.
            </Text>
          </Language>

          <Text className="aside">
            Profundamente inclinado, o Sacerdote diz:
          </Text>

          <Language>
            <Text className="latin">
              Súpplices te rogámus, omnípotens Deus: jube hæc perférri per manus
              sancti Ángeli tui in sublíme altáre tuum, in conspéctu divínæ
              majestátis tuæ: ut, quotquot ex hac altáris participatióne
              sacrosánctum Fílii tui Cor <Text className="cross"> ✠ </Text> pus,
              et Sán <Text className="cross"> ✠ </Text> guinem sumpsérimus, omni
              benedictióne cœlésti et grátia repleámur. Per eúndem Christum,
              Dóminum nostrum. Amen.
            </Text>
            <Text className="vernacular">
              Humildemente Vos rogamos, ó Deus omnipotente, ordeneis que estas
              ofertas sejam apresentadas no altar sublime pelas mãos do vosso
              Santo Anjo, na presença da vossa divina majestade, a fim de que
              todos aqueles que participam deste Altar pela recepção do
              Santíssimo Corpo <Text className="cross"> ✠ </Text> e Sangue{" "}
              <Text className="cross"> ✠ </Text> de vosso Filho sejam repletos
              de todas as bênçãos do céu e de todas as graças. Pelo mesmo
              Cristo, nosso Senhor. Amen.
            </Text>
          </Language>

          <Text className="h3">Orações depois da Consagração</Text>

          <Text className="h4">Memento dos defuntos:</Text>

          <Language>
            <Text className="latin">
              Meménto étiam, Dómine, famulórum famularúmque tuárum{" "}
              <Text className="latin">N.</Text> et{" "}
              <Text className="text-red-500">N.</Text> , qui nos præcessérunt
              cum signo fídei, et dórmiunt in somno pacis.
            </Text>
            <Text className="vernacular">
              Lembrai-Vos também Senhor, dos vossos servos e servas{" "}
              <Text className="vernacular">N.</Text> e{" "}
              <Text className="text-red-500">N.</Text>, que partiram antes de
              nós, marcados com o sinal da fé, e agora dormem o sono da paz.
            </Text>
            <Text className="latin">
              Ipsis, Dómine, et ómnibus in Christo quiescéntibus locum
              refrigérii, lucis pacis ut indúlgeas, deprecámur. Per eúndem
              Christum, Dóminum nostrum. Amen.
            </Text>
            <Text className="vernacular">
              Vos suplicamos, Senhor, dignai-Vos conceder a estes, assim como a
              todos os que descansam em Cristo, um lugar de consolação, de luz e
              de paz. Pelo mesmo Cristo, nosso Senhor. Amen.
            </Text>
          </Language>

          <Text className="h4">Invocação dos Santos</Text>

          <Text className="aside">O Sacerdote bate no peito, dizendo:</Text>

          <Language>
            <Text className="latin">
              Nobis quoque peccatóribus Extensis manibus ut prius, secrete
              prosequitur: fámulis tuis, de multitúdine miseratiónum tuárum
              sperántibus, partem áliquam et societátem donáre dignéris, cum
              tuis sanctis Apóstolis et Martýribus: cum Joánne, Stéphano,
              Matthía, Bárnaba, Ignátio, Alexándro, Marcellíno, Petro,
              Felicitáte, Perpétua, Agatha, Lúcia, Agnéte, Cæcília, Anastásia,
              et ómnibus Sanctis tuis: intra quorum nos consórtium, non
              æstimátor mériti, sed véniæ, quǽsumus, largítor admítte. Per
              Christum, Dóminum nostrum.
            </Text>
            <Text className="vernacular">
              E também a nós, pecadores, vossos servos, que esperamos na
              grandeza das vossas misericórdias, dignai-Vos conceder-nos alguma
              parte na vossa herança e sociedade com vossos Santos Apóstolos e
              Mártires: João, Estêvão, Matias, Barnabé, Inácio, Alexandre,
              Marcelino, Pedro, Felicidade, Perpétua, Águeda, Luzia, Inês,
              Cecília, Anastácia e com todos os Santos, em cuja companhia, Vos
              pedimos, nos recebais, não em consideração dos nossos
              merecimentos, mas segundo a liberalidade da vossa misericórdia.
              Por Cristo, nosso Senhor.
            </Text>
            <Text className="latin">
              Per quem hæc ómnia, Dómine, semper bona creas, sanctí{" "}
              <Text className="cross"> ✠ </Text> ficas, viví{" "}
              <Text className="cross"> ✠ </Text> ficas, bene{" "}
              <Text className="cross"> ✠ </Text> dícis et præstas nobis.
            </Text>
            <Text className="vernacular">
              Por quem, Senhor, sempre criais estes bens e os santificais{" "}
              <Text className="cross"> ✠ </Text>, vivificais{" "}
              <Text className="cross"> ✠ </Text>, abençoais{" "}
              <Text className="cross"> ✠ </Text> e no-los concedeis.
            </Text>
          </Language>

          <Text className="h4">Doxologia Final</Text>

          <Language>
            <Text className="latin">
              Per ip <Text className="cross"> ✠ </Text> sum, et cum ip{" "}
              <Text className="cross"> ✠ </Text> so, et in ip{" "}
              <Text className="cross"> ✠ </Text> so, est tibi Deo Patri{" "}
              <Text className="cross"> ✠ </Text> omnipotenti, in unitáte
              Spíritus <Text className="cross"> ✠ </Text> Sancti, omnis honor,
              et glória.
            </Text>
            <Text className="vernacular">
              Por Ele <Text className="cross"> ✠ </Text>, com Ele{" "}
              <Text className="cross"> ✠ </Text> e n’Ele{" "}
              <Text className="cross"> ✠ </Text>, a Vós, ó Deus Pai
              todo-o-poderoso <Text className="cross"> ✠ </Text>, na unidade do
              Espírito <Text className="cross"> ✠ </Text> Santo, pertence, e Vos
              é dada, toda a honra e glória.
            </Text>
          </Language>

          <Text className="aside">O Sacerdote termina em voz alta:</Text>

          <Language>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Per ómnia sǽcula sæculórum.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Por todos os séculos dos
              séculos.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
          </Language>

          <Text className="h3">Rito da Comunhão</Text>

          <Text className="aside">Participação no Sacrifício</Text>

          <Text className="aside">
            Terminado o Cânon, o Sacerdote diz em voz alta:
          </Text>

          <Language>
            <Text className="latin">
              <Text className="latin"> Orémus.</Text>
            </Text>
            <Text className="vernacular">
              <Text className="vernacular"> Oremos.</Text>
            </Text>
            <Text className="latin">
              Præcéptis salutáribus móniti, et divína institutióne formáti,
              audémus dícere:
            </Text>
            <Text className="vernacular">
              Instruídos com os salutares preceitos do Salvador e dirigidos
              pelos seus divinos ensinamentos, ousamos dizer:
            </Text>
          </Language>

          <Text className="h3">Pater Noster</Text>

          <Language>
            <Text className="latin">
              Pater noster, qui es in cælis: sanctificétur nomen tuum: advéniat
              regnum tuum: fiat volúntas tua, sicut in cælo, et in terra. Panem
              nostrum quotidiánum da nobis hódie: et dimítte nobis débita
              nostra, sicut et nos dimíttimus debitóribus nostris. Et ne nos
              indúcas in tentatiónem.
            </Text>
            <Text className="vernacular">
              Pai nosso que estais nos céus; santificado seja o vosso nome;
              venha a nós o vosso reino; seja feita a vossa vontade, assim na
              terra como no céu. O pão nosso de cada dia nos dai hoje;
              perdoai-nos as nossas dívidas, assim como nós perdoamos aos nossos
              devedores e não nos deixeis cair em tentação:
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Sed líbera nos a malo.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Mas livrai-nos do mal.
            </Text>
          </Language>

          <Text className="aside">
            O Sacerdote diz Amen em voz baixa, e continua:
          </Text>

          <Text className="h4">Líbera nos</Text>

          <Language>
            <Text className="latin">
              Libera nos, quǽsumus, Dómine, ab ómnibus malis, prætéritis,
              præséntibus et futúris: et intercedénte beáta et gloriósa semper
              Vírgine Dei Genetríce María, cum beátis Apóstolis tuis Petro et
              Paulo, atque Andréa, et ómnibus Sanctis, da propítius pacem in
              diébus nostris: ut, ope misericórdiæ tuæ adjúti, et a peccáto
              simus semper líberi et ab omni perturbatióne secúri.
            </Text>
            <Text className="vernacular">
              Livrai-nos, Senhor, Vos suplicamos, de todos os males passados,
              presentes e futuros; e, pela intercessão da bem-aventurada e
              gloriosa sempre Virgem Maria, Mãe de Deus, e dos bem-aventurados
              Apóstolos Pedro e Paulo e André, e de todos os Santos, dai-nos,
              benignamente, a paz nos nossos dias, a fim de que auxiliados com
              vossa misericórdia, sejamos sempre livres do pecado e seguros de
              toda a perturbação.
            </Text>
          </Language>

          <Text className="aside">
            O Sacerdote descobre o Cálice, genuflecte e segura com os dedos
            polegar e indicador da mão direita a Hóstia, que ergue até ao cimo
            do cálice.
          </Text>

          <Text className="h4">Fracção da Hóstia</Text>

          <Text className="aside">
            O Sacerdote parte a Hóstia ao meio, de uma das partes tira um
            pequeno fragmento que deita no preciosíssimo Sangue, traçando antes,
            com ele, sobre o Cálice, três vezes, o sinal da cruz, e dizendo:
          </Text>

          <Language>
            <Text className="latin">
              Per eúndem Dóminum nostrum Jesum Christum, Fílium tuum. Qui tecum
              vivit et regnat in unitáte Spíritus Sancti Deus.
            </Text>
            <Text className="vernacular">
              Pelo mesmo nosso Senhor Jesus Cristo, vosso Filho: que convosco
              vive e reina em unidade de Deus Espírito Santo.
            </Text>
          </Language>

          <Text className="aside">
            Depois, o Sacerdote, tendo entre os dedos da mão direita a
            Partícula, que fraccionou, coloca-a sobre o Cálice, que segura pelo
            nós, e acrescenta em voz alta:
          </Text>

          <Language>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Per ómnia sæcula sæculórum.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Por todos os séculos dos
              séculos.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
          </Language>

          <Text className="aside">
            O Sacerdote faz três vezes o sinal da Cruz com a Divina Partícula
            sobre o Cálice:
          </Text>

          <Language>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Pax{" "}
              <Text className="cross"> ✠ </Text> Dómini sit{" "}
              <Text className="cross"> ✠ </Text> semper{" "}
              <Text className="cross"> ✠ </Text> vobíscum.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Que a paz{" "}
              <Text className="cross"> ✠ </Text> do Senhor esteja{" "}
              <Text className="cross"> ✠ </Text> sempre{" "}
              <Text className="cross"> ✠ </Text> convosco.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Et cum spíritu tuo.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> E com vosso espírito.
            </Text>
            <Text className="latin">
              Hæc commíxtio, et consecrátio Córporis et Sánguinis Dómini nostri
              Jesu Christi, fiat accipiéntibus nobis in vitam ætérnam. Amen.
            </Text>
            <Text className="vernacular">
              Que esta mistura e esta consagração do Corpo e do Sangue de nosso
              Senhor Jesus Cristo sejam penhor de vida eterna para nós que a
              receberemos. Amen.
            </Text>
          </Language>

          <Text className="h3">Agnus Dei</Text>

          <Text className="aside">
            O Sacerdote bate três vezes no peito, e diz a oração seguinte. Nas
            Missas de Defuntos, não se bate no peito e em vez de miserére nobis,
            diz-se: Dona eis requiem; na terceira parte: dona eis requiem
            sempiternam.
          </Text>

          <Language>
            <Text className="latin">
              Agnus Dei, qui tollis peccáta mundi: miserére nobis.
            </Text>
            <Text className="vernacular">
              Cordeiro de Deus, que tirais o pecado do mundo, tende piedade de
              nós.
            </Text>
            <Text className="latin">
              Agnus Dei, qui tollis peccáta mundi: miserére nobis.
            </Text>
            <Text className="vernacular">
              Cordeiro de Deus, que tirais o pecado do mundo, tende piedade de
              nós.
            </Text>
            <Text className="latin">
              Agnus Dei, qui tollis peccáta mundi: dona nobis pacem.
            </Text>
            <Text className="vernacular">
              Cordeiro de Deus, que tirais o pecado do mundo, dai-nos a paz.
            </Text>
          </Language>

          <Text className="h3">Orações para a Comunhão</Text>

          <Text className="aside">
            Inclinado, recita as três orações seguintes, pela paz, santificação
            e graça da Igreja.
          </Text>

          <Language>
            <Text className="latin">
              Dómine Jesu Christe, qui dixísti Apóstolis tuis: Pacem relínquo
              vobis, pacem meam do vobis: ne respícias peccáta mea, sed fidem
              Ecclésiæ tuæ; eámque secúndum voluntátem tuam pacifícáre et
              coadunáre dignéris: Qui vivis et regnas Deus per ómnia sǽcula
              sæculórum. Amen.
            </Text>
            <Text className="vernacular">
              Senhor Jesus Cristo, que dissestes aos vossos Apóstolos: «Eu vos
              deixo a paz, dou-vos a minha paz», não olheis para os meus
              pecados, mas para a fé da vossa Igreja: concedei-lhe paz e união,
              segundo a vossa vontade: Vós, que, sendo Deus, viveis e reinais em
              todos os séculos dos séculos. Amen.
            </Text>
            <Text className="latin">
              Dómine Jesu Christe, Fili Dei vivi, qui ex voluntáte Patris,
              cooperánte Spíritu Sancto, per mortem tuam mundum vivificásti:
              líbera me per hoc sacrosánctum Corpus et Sánguinem tuum ab ómnibus
              iniquitátibus meis, et univérsis malis: et fac me tuis semper
              inhærére mandátis, et a te numquam separári permíttas: Qui cum
              eódem Deo Patre et Spíritu Sancto vivis et regnas Deus in sǽcula
              sæculórum. Amen.
            </Text>
            <Text className="vernacular">
              Senhor Jesus Cristo, Filho de Deus vivo, que, por vontade do Pai,
              cooperando o Espírito Santo, pela vossa morte, destes a vida ao
              mundo: livrai-nos de todos os males por este vosso sacrossanto
              Corpo e Sangue. Permiti que cumpra sempre os vossos preceitos e
              nunca me afaste de Vós: que sendo Deus, viveis e reinais com o
              mesmo Deus Pai e Espírito Santo em todos os séculos dos séculos.
              Amen.
            </Text>
            <Text className="latin">
              Percéptio Córporis tui, Dómine Jesu Christe, quod ego indígnus
              súmere præsúmo, non mihi provéniat in judícium et condemnatiónem:
              sed pro tua pietáte prosit mihi ad tutaméntum mentis et córporis,
              et ad medélam percipiéndam: Qui vivis et regnas cum Deo Patre in
              unitáte Spíritus Sancti Deus, per ómnia sǽcula sæculórum. Amen.
            </Text>
            <Text className="vernacular">
              Senhor Jesus Cristo, que este vosso Corpo, que, eu, ainda que
              indigno, vou receber, não seja para meu juízo e condenação, mas
              que, pela vossa misericórdia, sirva à minha alma e ao meu corpo de
              defesa e de remédio salutar: Vós, que, sendo Deus, viveis e
              reinais com Deus Pai em unidade de Deus Espírito Santo em todos os
              séculos dos séculos. Amen.
            </Text>
          </Language>

          <Text className="h3">Comunhão do celebrante</Text>

          <Text className="aside">
            O Sacerdote genuflecte e pegando depois na sagrada Hóstia.
          </Text>

          <Language>
            <Text className="latin">
              Panem cœléstem accipiam, et nomen Dómini invocábo.
            </Text>
            <Text className="vernacular">
              Tomarei o Pão do céu e invocarei o nome do Senhor.
            </Text>
          </Language>

          <Text className="aside">Em seguida bate três vezes no peito.</Text>

          <Language>
            <Text className="latin">
              Dómine, non sum dignus, ut intres sub tectum meum: sed tantum dic
              verbo, et sanábitur ánima mea.
            </Text>
            <Text className="vernacular">
              Senhor, eu não sou digno de que entreis na minha morada, mas dizei
              uma só palavra e a minha alma será salva.
            </Text>
          </Language>

          <Text className="aside">
            Faz sobre si o sinal da cruz com a sagrada Hóstia, antes de a
            comungar.
          </Text>

          <Language>
            <Text className="latin">
              Corpus Dómini nostri Jesu Christi custódiat ánimam meam in vitam
              ætérnam. Amen.
            </Text>
            <Text className="vernacular">
              Que o Corpo de nosso Senhor Jesus Cristo guarde a minha alma para
              a vida eterna. Amen.
            </Text>
          </Language>

          <Text className="aside">
            Recolhe-se por uns instantes. Toma o preciosíssimo Sangue, fazendo
            antes sobre si o sinal da cruz.
          </Text>

          <Language>
            <Text className="latin">
              Quid retríbuam Dómino pro ómnibus, quæ retríbuit mihi? Cálicem
              salutáris accípiam, et nomen Dómini invocábo. Laudans invocábo
              Dóminum, et ab inimícis meis salvus ero.
            </Text>
            <Text className="vernacular">
              Como retribuirei ao Senhor os bens que Ele se dignou dispensar-me?
              Tomarei o Cálice da salvação e invocarei o nome do Senhor,
              louvando-O, e ficarei livre dos meus inimigos.
            </Text>
          </Language>

          <Text className="aside">
            Depois segura com a mão direita o Cálice pelo nó (enquanto a não
            esquerda empunha a patena), traça com o Cálice o sinal da Cruz e
            bebe o Sangue Divino! Neste momento diz:
          </Text>

          <Language>
            <Text className="latin">
              Sanguis Dómini nostri Jesu Christi custódiat ánimam meam in vitam
              ætérnam. Amen.
            </Text>
            <Text className="vernacular">
              Que o Sangue de nosso Senhor Jesus Cristo guarde a minha alma para
              a vida eterna. Amen.
            </Text>
          </Language>

          <Text className="h4">Comunhão dos fiéis</Text>

          <Text className="aside">
            Os fiéis, ou o acólito por eles, recitam o Confíteor:
          </Text>

          <Language>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Confíteor Deo omnipoténti,
              beátæ Maríæ semper Vírgini, beáto Michǽli Archángelo, beáto Joánni
              Baptístæ, sanctis Apóstolis Petro et Paulo, ómnibus Sanctis, et
              tibi, pater: quia peccávi nimis cogitatióne, verbo et ópere:
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Eu me confesso a Deus, todo
              poderoso, à bem-aventurada sempre Virgem Maria, ao bem-aventurado
              S. Miguel Arcanjo, ao bem-aventurado S. João Baptista, aos Santos
              Apóstolos S. Pedro e S. Paulo, a todos os santos, e a vós, Padre:
              que pequei muitas vezes por pensamentos, palavras e obras:
            </Text>
          </Language>

          <Text className="aside">Batendo três vezes no peito:</Text>

          <Language>
            <Text className="latin">
              <Text className="latin">
                Mea culpa, mea culpa, mea máxima culpa.
              </Text>
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">
                Por minha culpa, por minha culpa, por minha tão grande culpa.
              </Text>
            </Text>
            <Text className="latin">
              Ideo precor beátam Maríam semper Vírginem, beátum Michǽlem
              Archángelum, beátum Joánnem Baptístam, sanctos Apóstolos Petrum et
              Paulum, omnes Sanctos, et te, pater, orare pro me ad Dóminum, Deum
              nostrum.
            </Text>
            <Text className="vernacular">
              Portanto rogo à bem-aventurada sempre Virgem Maria, ao
              bem-aventurado S. Miguel Arcanjo, ao bem-aventurado S. João
              Baptista, aos Santos Apóstolos S. Pedro e S. Paulo, a todos os
              Santos e a vós, Padre, que rogueis a Deus, nosso Senhor, por mim.
            </Text>
          </Language>

          <Text className="aside">
            Voltando-se para os fiéis, o Sacerdote dá a absolvição em voz alta:
          </Text>

          <Language>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Misereátur vestri omnípotens
              Deus, et, dimíssis peccátis vestris, perdúcat vos ad vitam
              ætérnam.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Compadeça-se de vós o Senhor
              omnipotente; vos perdoe os pecados e guie até à vida eterna.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
          </Language>

          <Text className="aside">Fazendo o Sinal da Cruz, diz:</Text>

          <Language>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Indulgéntiam,{" "}
              <Text className="cross"> ✠ </Text> absolutionem et remissiónem
              peccatórum nostrórum tríbuat nobis omnípotens et miséricors
              Dóminus.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Que o Senhor{" "}
              <Text className="cross"> ✠ </Text> omnipotente e misericordioso
              nos conceda o perdão, a absolvição e a remissão dos nossos
              pecados.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
          </Language>

          <Text className="aside">
            O Sacerdote volta-se para o altar, genuflecte e voltando-se para os
            fiéis ergue a Hóstia, dizendo:
          </Text>

          <Language>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Ecce Agnus Dei, ecce qui
              tollit peccáta mundi.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Eis o Cordeiro de Deus; eis
              Aquele que tira os pecados do mundo.
            </Text>
          </Language>

          <Text className="aside">
            E em seguida, três vezes batendo no peito e dizendo:
          </Text>

          <Language>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Dómine, non sum dignus, ut
              intres sub tectum meum: sed tantum dic verbo, et sanábitur ánima
              mea.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Senhor, eu não sou digno de
              que entreis na minha morada, mas dizei uma só palavra e a minha
              alma será salva.
            </Text>
          </Language>

          <Text className="aside">
            Estando convenientemente preparado aquele que quiser Comungar,
            aproximar-se-á do Comungatório, ajoelhando e recebendo a Divina
            Hóstia na língua. O Sacerdote diz a cada um dos comungantes:
          </Text>

          <Language>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Corpus Dómini nostri Jesu
              Christi custódiat ánimam tuam in vitam ætérnam. Amen.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Que o Corpo de nosso Senhor
              Jesus Cristo guarde a tua alma para a vida eterna. Amen.
            </Text>
          </Language>

          <Text className="h3">Acção de Graças</Text>

          <Text className="h4">Abluções</Text>

          <Text className="aside">
            O Sacerdote purifica primeiro o cálice e depois os dedos, e toma as
            abluções. Entretanto vai dizendo:
          </Text>

          <Language>
            <Text className="latin">
              Quod ore súmpsimus, Dómine, pura mente capiámus: et de munere
              temporáli fiat nobis remédium sempitérnum.
            </Text>
            <Text className="vernacular">
              Que conservemos com pureza de coração, Senhor, o que a boca acaba
              de receber; e que esta dádiva temporal se torne para nós remédio
              sempiterno.
            </Text>
            <Text className="latin">
              Corpus tuum, Dómine, quod sumpsi, et Sanguis, quem potávi,
              adhǽreat viscéribus meis: et præsta; ut in me non remáneat
              scélerum mácula, quem pura et sancta refecérunt sacraménta: Qui
              vivis et regnas in sǽcula sæculórum.. Amen.
            </Text>
            <Text className="vernacular">
              Senhor, que o vosso Corpo, que recebi, e o vosso sangue, que bebi,
              se unam intimamente ás minhas entranhas; dignai-Vos permitir,
              Senhor, que não fique em mim mancha alguma de pecado, agora que
              estou confortado com sacramentos tão puros e santos: Vós, que
              viveis e reinais em todos os séculos. Amen.
            </Text>
          </Language>

          <Text className="aside">
            Purifica o cálice e deixa-o, coberto, no meio do altar. Nas Missas
            solenes, é o subdiácono quem purifica o cálice e o leva para a
            credencia.
          </Text>

          <Text className="h3">Comúnio do dia</Text>

          <Text className="aside">
            O Sacerdote passa para o lado direito do altar, e recita a antífona
            da Comunhão.
          </Text>

          <LinkCard mass={mass[0]} description="Comúnio" />

          <Language>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text> Dóminus vobíscum.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>O Senhor esteja convosco.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Et cum spíritu tuo.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> E com vosso espírito.
            </Text>
          </Language>

          <Text className="h3">Postcomúnio do dia</Text>

          <LinkCard mass={mass[0]} description="Postcomúnio" />

          <Text className="h3">Despedida e Bênção</Text>

          <Text className="aside">
            O Sacerdote volta ao meio do altar, beija-o, e, voltando-se para os
            fiéis saúda-os:
          </Text>

          <Language>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text> Dóminus vobíscum.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>O Senhor esteja convosco.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Et cum spíritu tuo.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> E com vosso espírito.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text> Ite, Missa est.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Ide-vos, acabou a Missa.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Deo grátias.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Graças a Deus.
            </Text>
          </Language>

          <Text className="aside">
            Se alguma acção litúrgica se segue à Missa, diz-se:
          </Text>

          <Language>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text> Benedicámus Dómino.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Bendigamos o Senhor.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Deo Grátias.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Graças a Deus.
            </Text>
          </Language>

          <Text className="aside">Nas Missas dos Defuntos:</Text>

          <Language>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text> Requiéscant in pace.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Que descansem em paz.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
          </Language>

          <Text className="aside">
            Voltando-se para o altar, recita a seguinte oração:
          </Text>

          <Language>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Pláceat tibi, sancta
              Trínitas, obséquium servitútis meæ: et præsta; ut sacrifícium,
              quod óculis tuæ majestátis indígnus óbtuli, tibi sit acceptábile,
              mihíque et ómnibus, pro quibus illud óbtuli, sit, te miseránte,
              propitiábile. Per Christum, Dóminum nostrum. Amen.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Santíssima Trindade,
              seja-Vos agradável a homenagem da minha escravidão, a fim de que
              este sacrifício, que, ainda indignamente, ofereci à vossa divina
              majestade, seja aceite por Vós, e, pela vossa misericórdia, se
              torne propiciatório para mim e para todos aqueles por quem o
              ofereci. Por Cristo, Nosso Senhor. Amen.
            </Text>
          </Language>

          <Text className="aside">
            Beija o altar, volta-se para a assistência, e dá a bênção, dizendo:
          </Text>

          <Language>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Benedícat vos omnípotens
              Deus, Pater, et Fílius, <Text className="cross"> ✠ </Text> et
              Spíritus Sanctus.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Que desça sobre vós a bênção
              do omnipotente Deus: Pai, e Filho,{" "}
              <Text className="cross"> ✠ </Text> e Espírito Santo.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
          </Language>

          <Text className="h3">Último Evangelho</Text>

          <Text className="aside">
            O Sacerdote passa para o lado esquerdo do altar e recita, como
            último Evangelho, o princípio do Evangelho de S. João (que se omite
            na Quinta-feira Santa e na Vigília pascal).
          </Text>

          <Language>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text> Dóminus vobíscum.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>O Senhor esteja convosco.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Et cum spíritu tuo.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> E com vosso espírito.
            </Text>
          </Language>

          <Text className="aside">
            Despois faz o sinal da Cruz na Sacra (ou no Missal) e na sua testa,
            boca e peito, dizendo:
          </Text>

          <Language>
            <Text className="latin">
              <Text className="cross"> ✠ </Text> Initium sancti Evangélii
              secúndum Joánnem.
            </Text>
            <Text className="vernacular">
              <Text className="cross"> ✠ </Text> Princípio do santo Evangelho
              segundo S. João.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Glória tibi, Dómine.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Glória a Vós, Senhor.
            </Text>
            <Text className="latin">
              In princípio erat Verbum, et Verbum erat apud Deum, et Deus erat
              Verbum. Hoc erat in princípio apud Deum. Omnia per ipsum facta
              sunt: et sine ipso factum est nihil, quod factum est: in ipso vita
              erat, et vita erat lux hóminum: et lux in ténebris lucet, et
              ténebræ eam non comprehendérunt. Fuit homo missus a Deo, cui nomen
              erat Joánnes. Hic venit in testimónium, ut testimónium perhibéret
              de lúmine, ut omnes créderent per illum. Non erat ille lux, sed ut
              testimónium perhibéret de lúmine. Erat lux vera, quæ illúminat
              omnem hóminem veniéntem in hunc mundum. In mundo erat, et mundus
              per ipsum factus est, et mundus eum non cognóvit. In própria
              venit, et sui eum non recepérunt. Quotquot autem recepérunt eum,
              dedit eis potestátem fílios Dei fíeri, his, qui credunt in nómine
              ejus: qui non ex sanguínibus, neque ex voluntáte carnis, neque ex
              voluntáte viri, sed ex Deo nati sunt.{" "}
              <Text className="em">(Hic genuflectitur)</Text> Et Verbum caro
              factum est, et habitávit in nobis: et vídimus glóriam ejus,
              glóriam quasi Unigéniti a Patre, plenum grátiæ et veritátis.
            </Text>
            <Text className="vernacular">
              No princípio existia o Verbo, e o Verbo estava com Deus, e o Verbo
              era Deus. Este estava no princípio com Deus. Todas as coisas foram
              por Ele criadas, e nada daquilo que foi criado teria sido criado
              sem Ele. N’Ele havia vida, e a vida era a luz dos homens. A luz
              resplandeceu nas trevas, mas as trevas a não receberam. Apareceu
              um homem, mandado por Deus, e o seu nome era João, o qual veio
              como testemunha, para dar testemunho da luz, a fim de que por ele
              todos acreditassem. Ele não era a luz, mas aquele que havia de dar
              testemunho da luz. Existia a luz verdadeira, a luz que ilumina
              todo o homem que vem a este mundo. Ele estava no mundo, e o mundo,
              embora houvesse sido criado por Ele, O não conheceu. Veio ao que
              era seu, e os seus O não receberam. Porém, Ele a todos quantos O
              receberam e aos que acreditaram no seu nome deu o poder de serem
              filhos de Deus, os quais não nasceram do sangue, nem do desejo da
              carne, mas somente da vontade de Deus. E o Verbo fez-se carne{" "}
              <Text className="em">(genuflecte-se)</Text> e habitou entre nós; e
              contemplamos a sua glória, como era própria do Filho Unigénito do
              Pai, cheio de graça e de verdade.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Deo grátias.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Graças a Deus.
            </Text>
          </Language>

          <Text className="h2">Orações Leoninas</Text>

          <LinkCard title="Orações Leoninas" href="/missal/oracoesleoninas" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
