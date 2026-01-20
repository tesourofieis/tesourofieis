import { H1, H2, H3, H4 } from "~/components/Headings";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";
import { useCalendar } from "~/providers/calendar";

export default function PageOrdo() {
  const { mass } = useCalendar();

  return (
    <PageWrapper>
      <H1 text="Ordo Missæ" />

      <H2 text="Missa dos Catecúmenos" />

      <H3 text="Orações ao pé do altar" />

      <Typography className="aside">
        De pé, diante dos degraus do altar, o Sacerdote começa a Missa, fazendo
        o sinal da cruz e com uma voz clara e audível diz:
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="cross"> ✠ </Typography> In nómine Patris, et
          Fílii, et Spíritus Sancti.
        </Typography>
        <Typography className="vernacular">
          <Typography className="cross"> ✠ </Typography> Em nome do Pai, e do
          Filho, e do Espírito Santo.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
      </Language>

      <Typography className="aside">
        Juntando as mãos no peito, começa a antífona:
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography> Introíbo ad altáre
          Dei.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Eu irei até ao altar
          de Deus.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Ad Deum, qui
          lætíficat juventútem meam.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Até Deus, que é a
          alegria da minha juventude.
        </Typography>
      </Language>

      <H3 text="Salmo 42" />

      <Typography className="aside">
        O Sacerdote e os Acólitos recitam o salmo alternadamente. Nas Missas de
        Defuntos e do Tempo da Paixão este salmo omite-se.
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Júdica me, Deus, et
          discérne causam meam de gente non sancta: ab hómine iníquo et dolóso
          érue me.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Julgai-me, ó Deus, e
          defendei a minha causa da gente infiel; livrai-me do homem iníquo e
          ardiloso.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Quia tu es, Deus,
          fortitudo mea: quare me reppulísti, et quare tristis incédo, dum
          afflígit me inimícus?
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Pois que Vós, ó
          Deus, sois a minha fortaleza, porque me repelistes? E porque ando
          triste enquanto o meu inimigo me aflige?
        </Typography>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Emítte lucem tuam et
          veritátem tuam: ipsa me deduxérunt, et adduxérunt in montem sanctum
          tuum et in tabernácula tua.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Enviai a vossa luz e
          a vossa verdade; elas me guiarão e conduzirão até ao vosso santo
          monte, até aos vossos tabernáculos.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Et introíbo ad
          altáre Dei: ad Deum, qui lætíficat juventútem meam.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> E irei até ao Altar
          de Deus; até Deus, que é a alegria da minha juventude.
        </Typography>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Confitébor tibi in
          cíthara, Deus, Deus meus: quare tristis es, ánima mea, et quare
          contúrbas me?
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Ó Deus, ó meu Deus,
          louvar-Vos-ei com a cítara. Porque estás triste, ó minha alma? Porque
          te perturbas?
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Spera in Deo,
          quóniam adhuc confitébor illi: salutáre vultus mei, et Deus meus.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Confia em Deus,
          pois ainda O louvarei. Ele é a minha salvação e o meu Deus.
        </Typography>
      </Language>

      <Typography className="aside">
        Pequena inclinação da cabeça quando se dá glória ao Pai, ao Filho e ao
        Espírito Santo.
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Glória Patri, et
          Fílio, et Spirítui Sancto.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Glória ao Pai, e ao
          Filho, e ao Espírito Santo.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Sicut erat in
          princípio, et nunc, et semper: et in sǽcula sæculórum. Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Assim como era no
          princípio, e agora, e sempre, por todos os séculos dos séculos. Amen.
        </Typography>
      </Language>

      <Typography className="aside">O Sacerdote repete a Antífona:</Typography>

      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography> Introíbo ad altáre
          Dei.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Eu irei até ao altar
          de Deus.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Ad Deum, qui
          lætíficat juventútem meam.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Até Deus, que é a
          alegria da minha juventude.
        </Typography>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Adjutórium nostrum{" "}
          <Typography className="cross"> ✠ </Typography> in nómine Dómini.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>O nosso auxílio está{" "}
          <Typography className="cross"> ✠ </Typography> no nome do Senhor.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Qui fecit cœlum et
          terram.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Que criou o céu e a
          terra.
        </Typography>
      </Language>

      <Typography className="aside">
        Profundamente inclinado, o Sacerdote diz o Confíteor, humilhando-se
        publicamente, e depois dele, os ajudantes.
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="latin"> Orémus.</Typography>
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular"> Oremos.</Typography>
        </Typography>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography> Confíteor Deo...
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Eu me confesso a
          Deus...
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Misereátur vestri
          omnípotens Deus, et, dimíssis peccátis vestris, perdúcat vos ad vitam
          ætérnam.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Compadeça-se de vós
          o Senhor omnipotente; vos perdoe os pecados e guie até à vida eterna.
        </Typography>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography> Amen.
        </Typography>
      </Language>

      <Typography className="aside">
        Confissão dos Acólitos e dos fiéis:
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Confíteor Deo
          omnipoténti, beátæ Maríæ semper Vírgini, beáto Michǽli Archángelo,
          beáto Joánni Baptístæ, sanctis Apóstolis Petro et Paulo, ómnibus
          Sanctis, et tibi, pater: quia peccávi nimis cogitatióne, verbo et
          ópere:
          <Typography className="em">
            Percutit sibi pectus ter, dicens:
          </Typography>
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Eu me confesso a
          Deus, todo poderoso, à bem-aventurada sempre Virgem Maria, ao
          bem-aventurado S. Miguel Arcanjo, ao bem-aventurado S. João Baptista,
          aos Santos Apóstolos S. Pedro e S. Paulo, a todos os santos, e a vós,
          Padre: que pequei muitas vezes por pensamentos, palavras e obras:
          <Typography className="em">
            Baterá no peito três vezes, dizendo:
          </Typography>
        </Typography>
        <Typography className="latin">
          Mea culpa, mea culpa, mea máxima culpa.
        </Typography>
        <Typography className="vernacular">
          Por minha culpa, por minha culpa, por minha tão grande culpa.
        </Typography>
        <Typography className="latin">
          Ideo precor beátam Maríam semper Vírginem, beátum Michǽlem
          Archángelum, beátum Joánnem Baptístam, sanctos Apóstolos Petrum et
          Paulum, omnes Sanctos, et te, pater, orare pro me ad Dóminum, Deum
          nostrum.
        </Typography>
        <Typography className="vernacular">
          Portanto rogo à bem-aventurada sempre Virgem Maria, ao bem-aventurado
          S. Miguel Arcanjo, ao bem-aventurado S. João Baptista, aos Santos
          Apóstolos S. Pedro e S. Paulo, a todos os Santos e a vós, Padre, que
          rogueis a Deus, nosso Senhor, por mim.
        </Typography>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Misereátur vestri
          omnípotens Deus, et, dimíssis peccátis vestris, perdúcat vos ad vitam
          ætérnam.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Compadeça-se de vós
          o Senhor omnipotente; vos perdoe os pecados e guie até à vida eterna.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Indulgéntiam,{" "}
          <Typography className="cross"> ✠ </Typography> absolutionem et
          remissiónem peccatórum nostrórum tríbuat nobis omnípotens et
          miséricors Dóminus.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Que o Senhor{" "}
          <Typography className="cross"> ✠ </Typography> omnipotente e
          misericordioso nos conceda o perdão, a absolvição e a remissão dos
          nossos pecados.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Deus, tu convérsus
          vivificábis nos.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Ó Deus, volvei-Vos
          para nós, e alcançaremos a vida.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Et plebs tua
          lætábitur in te.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> E o vosso povo se
          alegrará convosco.
        </Typography>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Osténde nobis,
          Dómine, misericórdiam tuam.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Senhor, mostrai-nos
          a vossa misericórdia.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Et salutáre tuum da
          nobis.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> E concedei-nos a
          vossa salvação.
        </Typography>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Dómine, exáudi
          oratiónem meam.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Senhor, atendei à
          minha oração.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Et clamor meus ad
          te véniat.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> E que meu clamor
          chegue até Vós.
        </Typography>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography> Dóminus vobíscum.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>O Senhor esteja
          convosco.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Et cum spíritu tuo.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> E com vosso
          espírito.
        </Typography>
      </Language>

      <Typography className="aside">
        O Sacerdote sobe ao altar, dizendo:
      </Typography>

      <Language>
        <Typography className="latin">
          Aufer a nobis, quǽsumus, Dómine, iniquitátes nostras: ut ad Sancta
          sanctórum puris mereámur méntibus introíre. Per Christum, Dóminum
          nostrum. Amen.
        </Typography>
        <Typography className="vernacular">
          Afastai de nós, Senhor, Vos imploramos, as nossas iniquidades, para
          que mereçamos entrar no santuário com as almas purificadas. Por
          Cristo, nosso Senhor. Amen.
        </Typography>
        <Typography className="latin">
          <Typography className="latin"> Orémus.</Typography>
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular"> Oremos.</Typography>
        </Typography>
      </Language>

      <Typography className="aside">
        O Sacerdote, inclinado, diz a seguinte oração:
      </Typography>

      <Language>
        <Typography className="latin">
          Orámus, Dómine, per mérita Sanctórum tuórum, quorum relíquiæ hic sunt,
          et ómnium Sanctórum: ut indulgére dignéris ómnia peccáta mea. Amen.
        </Typography>
        <Typography className="vernacular">
          Vos pedimos, Senhor, pelos méritos dos vossos Santos, cujas relíquias
          estão aqui, e de todos os Santos, que Vos digneis perdoar os nossos
          pecados. Amen.
        </Typography>
      </Language>

      <H3 text="Intróito do dia" />

      <Typography className="aside">
        Nas Missas solenes, incensa-se o altar. O Sacerdote vai para o lado da
        Epístola, e lê o Intróito. Canto solene de entrada, o Intróito como que
        enuncia o tema geral da Missa ou solenidade do dia. Às primeiras
        palavras, todos se benzem, ao mesmo tempo que o celebrante.
      </Typography>

      {mass.map((i) => (
        <LinkCard key={i.id} mass={i} description="Intróito" />
      ))}

      <H3 text="Kyrie Eleison" />

      <Typography className="aside">
        Os Kyries, são nove clamores dirigidos à Santíssima trindade. O
        Sacerdote, no meio do altar, diz, alternadamente com os Acólitos:
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography> Kýrie eléison.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Senhor, tende
          piedade de nós.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Kýrie eléison.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Senhor, tende
          piedade de nós.
        </Typography>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography> Kýrie eléison.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Senhor, tende
          piedade de nós.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Christe eléison.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Cristo, tende
          piedade de nós.
        </Typography>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography> Christe eléison.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Cristo, tende
          piedade de nós.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Christe eléison.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Cristo, tende
          piedade de nós.
        </Typography>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography> Kýrie eléison.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Senhor, tende
          piedade de nós.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Kýrie eléison.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Senhor, tende
          piedade de nós.
        </Typography>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography> Kýrie eléison.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Senhor, tende
          piedade de nós.
        </Typography>
      </Language>

      <H3 text="Glória in Excélsis" />

      <Typography className="aside">
        Canto de alegria, a Glória só se diz nas Missas de carácter festivo:
        Domingos (fora do Advento, Septuagésima e Quaresma), Tempos do Natal,
        Tempo Pascal, festas de Nosso Senhor, da Santíssima Virgem, dos Anjos e
        dos Santos, e Missas votivas solenes. Omite-se em todas as outras
        Missas.
      </Typography>

      <Language>
        <Typography className="latin">
          Glória in excélsis Deo. Et in terra pax homínibus bonæ voluntátis.
          Laudámus te. Benedícimus te. Adorámus te. Glorificámus te. Grátias
          ágimus tibi propter magnam glóriam tuam. Dómine Deus, Rex cœléstis,
          Deus Pater omnípotens. Dómine Fili unigénite, Jesu Christe. Dómine
          Deus, Agnus Dei, Fílius Patris. Qui tollis peccáta mundi, miserére
          nobis. Qui tollis peccáta mundi, súscipe deprecatiónem nostram. Qui
          sedes ad déxteram Patris, miserére nobis. Quóniam tu solus Sanctus. Tu
          solus Dóminus. Tu solus Altíssimus, Jesu Christe. Cum Sancto Spíritu{" "}
          <Typography className="cross"> ✠ </Typography> in glória Dei Patris.
        </Typography>
        <Typography className="vernacular">
          Glória a Deus nas alturas e paz na terra aos homens de boa vontade.
          Nós Vos louvamos. Nós Vos bendizemos. Nós Vos adoramos. Nós Vos
          glorificamos. Nós Vos damos graças pela vossa imensa glória. Ó Senhor
          Deus, Rei dos céus, Deus Pai todo-o-poderoso. Senhor Jesus Cristo,
          Filho Unigénito, Senhor Deus, Cordeiro de Deus, Filho de Deus Pai. Vós
          que tirais os pecados do mundo, tende misericórdia de nós. Vós, que
          tirais os pecados do mundo, atendei à nossa súplica. Vós, que estais
          sentado à direita do Pai, tende misericórdia de nós. Só Vós sois o
          Santo; só Vós, o Senhor; só Vós, o Altíssimo, Jesus Cristo: com o
          Espírito Santo <Typography className="cross"> ✠ </Typography> na
          glória de Deus Pai.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
      </Language>

      <Typography className="aside">
        O Sacerdote benze-se, beija o altar, volta-se para os fiéis e diz:
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography> Dóminus vobíscum.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>O Senhor esteja
          convosco.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Et cum spíritu tuo.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> E com vosso
          espírito.
        </Typography>
      </Language>

      <H3 text="Colecta do dia" />

      <Typography className="aside">
        O Sacerdote, diante do missal, recita a Colecta. Breve oração que resume
        e apresenta a Deus os votos de todos os fiéis, votos estes sugeridos
        pelo mystério ou solenidade do dia.
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="latin"> Orémus.</Typography>
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular"> Oremos.</Typography>
        </Typography>
      </Language>

      {mass.map((i) => (
        <LinkCard key={i.id} mass={i} description="Oração" />
      ))}

      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>...per ómnia sǽculua
          sæculórum.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>...por todos os
          séculos dos séculos.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
      </Language>

      <H3 text="Epístola do dia" />

      {mass.map((i) => (
        <LinkCard key={i.id} mass={i} description="Epístola" />
      ))}

      <Language>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Deo grátias.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Graças a Deus.
        </Typography>
      </Language>

      <H3 text="Gradual do dia" />

      <Typography className="aside">
        A oração curta de acção de graças, consiste geralmente de dois ou três
        versos retirados dos Salmos ou do Antigo Testamento.
      </Typography>

      {mass.map((i) => (
        <LinkCard key={i.id} mass={i} description="Gradual" />
      ))}

      <Typography className="aside">
        No Tempo da Septuagésima, o Allelúja é substituído pelo Trato. No Tempo
        Pascal, omite-se o Gradual, e dizem-se dois Allelúja.
      </Typography>

      <H3 text="Munda cor" />

      <Typography className="aside">
        Enquanto o Acólito muda o Missal, o Sacerdote inclina-se profundamente
        no meio do Altar, dizendo:
      </Typography>

      <Language>
        <Typography className="latin">
          Munda cor meum ac labia mea, omnípotens Deus, qui labia Isaíæ Prophétæ
          cálculo mundásti igníto: ita me tua grata miseratióne dignáre mundáre,
          ut sanctum Evangélium tuum digne váleam nuntiáre. Per Christum,
          Dóminum nostrum. Amen.
        </Typography>
        <Typography className="vernacular">
          Ó omnipotente Deus, assim como purificastes os lábios do Profeta
          Isaías com uma brasa de fogo, assim também purificais agora o meu
          coração e os meus lábios. Dignai-Vos, pela vossa benigna misericórdia,
          purificar-me inteiramente, para que possa dignamente anunciar o vosso
          Evangelho. Amen.
        </Typography>
      </Language>

      <Typography className="aside">
        Seguidamente recita-se a fórmula da Bênção, a qual só se omite nas
        Missas de Réquiem e na Sexta-Feira Santa:
      </Typography>

      <Language>
        <Typography className="latin">
          Jube Dómine benedícere. Dóminus sit in corde meo, et in lábiis meis:
          ut dine et competénter annúntiem. Evangélium suum. Amen.
        </Typography>
        <Typography className="vernacular">
          Dignai-Vos, Senhor, abençoar-me. Que o Senhor esteja no meu coração e
          nos meus lábios, para que possa digna e devidamente anunciar seu
          Evangelho. Amen.
        </Typography>
      </Language>

      <Typography className="aside">
        Às primeiras palavras - Sequéntia, etc. faz-se o sinal da cruz na testa,
        na boca e no peito, declarando a ausência de vergonha na palavra de
        Deus, a prontidão para confessá-la e o amor, de todo o coração, que a
        ela têm. Nesta proclamação, ponto culminante desta primeira parte da
        Missa, a leitura ou canto do Evangelho é revestida da maior solenidade.
        O respeito para com ele, exige que seja escutado de pé. Nas Missas
        solenes, o livro é levado honorificamente em procissão. É incensado
        antes de começar, e, terminada a leitura, é reverentemente beijado pelo
        Sacerdote.
      </Typography>

      <H3 text="Evangelho do dia" />

      <Typography className="aside">
        É um momento solene! Toda a assistência está de pé.
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography> Dóminus vobíscum.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>O Senhor esteja
          convosco.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Et cum spíritu tuo.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> E com vosso
          espírito.
        </Typography>
      </Language>

      {mass.map((i) => (
        <LinkCard key={i.id} mass={i} description="Evangelho" />
      ))}

      <Language>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Glória tibi,
          Dómine.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Glória a Vós,
          Senhor.
        </Typography>
      </Language>

      <Typography className="aside">
        O celebrante beija o sagrado texto, dizendo:
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Per evangélica dicta
          deleántur nostra delícta.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Que pelas palavras
          do Evangelho nos sejam perdoados os nossos pecados.
        </Typography>
      </Language>

      <Typography className="aside">Digamos solenemente:</Typography>

      <Language>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Laus tibi, Christe.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Louvores a Vós, ó
          Cristo.
        </Typography>
      </Language>

      <H3 text="Credo" />

      <Typography className="aside">
        Aos Domingos e certos dias de festa, o celebrante vai ao meio do altar e
        diz o Credo. Este só se diz aos Domingos, e em algumas festas de 1ª.
        Classe. É cantado em Missas Solenes.
      </Typography>

      <Language>
        <Typography className="latin">
          Credo ín unum Deum. Patrem omnipoténtem, factórem cœli et terræ,
          visibílium ómnium et invisibílium. Et in unum Dóminum Jesum Christum,
          Fílium Dei unigénitum. Et ex Patre natum ante ómnia sǽcula. Deum de
          Deo, lumen de lúmine, Deum verum de Deo vero. Génitum, non factum,
          consubstantiálem Patri: per quem ómnia facta sunt. Qui propter nos
          hómines et propter nostram salútem descéndit de cœlis.{" "}
          <Typography className="em">(Hic genuflectitur).</Typography>
        </Typography>
        <Typography className="vernacular">
          Creio em um só Deus. Pai, todo poderoso, criador do Céu e da Terra, de
          todas as coisas visíveis e invisíveis. E creio em um só Senhor, Jesus
          Cristo, Filho Unigénito de Deus, nascido do Pai antes de todos os
          séculos. Deus de Deus, Luz da Luz, Deus verdadeiro de Deus verdadeiro.
          Gerado, não criado, consubstancial ao Pai: por Ele todas as coisas
          foram feitas. E por nós, homens, e para nossa salvação desceu dos
          céus. <Typography className="em">(todos se ajoelham).</Typography>
        </Typography>
        <Typography className="latin">
          Et incarnátus est de Spíritu Sancto ex María Vírgine:{" "}
          <Typography className="latin">Et homo factus est.</Typography>
        </Typography>
        <Typography className="vernacular">
          E encarnou pelo Espírito Santo, no seio da Virgem Maria:{" "}
          <Typography className="vernacular">E foi feito homem.</Typography>
        </Typography>
        <Typography className="latin">
          Crucifíxus étiam pro nobis: sub Póntio Piláto passus, et sepúltus est.
          Et resurréxit tértia die, secúndum Scriptúras. Et ascéndit in cœlum:
          sedet ad déxteram Patris. Et íterum ventúrus est cum glória judicáre
          vivos et mórtuos: cujus regni non erit finis. Et in Spíritum Sanctum,
          Dóminum et vivificántem: qui ex Patre Filióque procédit. Qui cum Patre
          et Fílio simul adorátur et conglorificátur: qui locútus est per
          Prophétas. Et unam sanctam cathólicam et apostolicam Ecclésiam.
          Confíteor unum baptísma in remissiónem peccatórum. Et exspécto
          resurrectiónem mortuórum. Et{" "}
          <Typography className="cross"> ✠ </Typography> vitam ventúri sǽculi.
        </Typography>
        <Typography className="vernacular">
          Também por nós foi crucificado sob Pôncio Pilatos, padeceu e foi
          sepultado. Ressuscitou ao terceiro dia, conforme as Escrituras, e
          subiu aos céus, onde está sentado à direita do Pai. De novo há-de vir
          em sua glória, para julgar os vivos e os mortos; e o seu reino não
          terá fim. Creio no Espírito Santo, Senhor que dá a vida, e procede do
          Pai e do Filho; e com o Pai e o Filho é adorado e glorificado: Ele que
          falou pelos Profetas. Creio na Igreja una, santa, católica e
          apostólica. Confesso um só baptismo para a remissão dos pecados. E
          espero a ressurreição dos mortos, e{" "}
          <Typography className="cross"> ✠ </Typography> a vida do mundo que
          há-de vir.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
      </Language>

      <H2 text="Missa dos Fiéis" />

      <H3 text="Sacrifício Ofertório" />

      <Typography className="aside">
        Com o Ofertório, começa a segunda parte da Missa ou Sacrifício
        propriamente dito. O celebrante beija o Altar e voltado para o povo diz:
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography> Dóminus vobíscum.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>O Senhor esteja
          convosco.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Et cum spíritu tuo.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> E com vosso
          espírito.
        </Typography>
      </Language>

      <Language>
        <Typography className="latin">
          <Typography className="latin">
            <Typography className="versicle"> ℣. </Typography> Orémus.
          </Typography>
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">
            <Typography className="versicle"> ℣. </Typography> Oremos.
          </Typography>
        </Typography>
      </Language>

      <H3 text="Ofertório do dia" />

      {mass.map((i) => (
        <LinkCard key={i.id} mass={i} description="Ofertório" />
      ))}

      <H4 text="Oferecimento do pão:" />

      <Typography className="aside">
        Terminada esta leitura, o Sacerdote descobre o Cálice e toma nas mãos a
        patena com o pão, que vai ser consagrado. (O Acólito vai buscar o vinho
        e a água à credência, levando-os Altar). O Sacerdote oferece-os a Deus,
        dizendo:
      </Typography>

      <Language>
        <Typography className="latin">
          Súscipe, sancte Pater, omnipotens ætérne Deus, hanc immaculátam
          hóstiam, quam ego indígnus fámulus tuus óffero tibi Deo meo vivo et
          vero, pro innumerabílibus peccátis, et offensiónibus, et neglegéntiis
          meis, et pro ómnibus circumstántibus, sed et pro ómnibus fidélibus
          christiánis vivis atque defúnctis: ut mihi, et illis profíciat ad
          salútem in vitam ætérnam. Amen.
        </Typography>
        <Typography className="vernacular">
          Recebei, ó Pai santo, Deus omnipotente e eterno, esta hóstia
          imaculada, que eu, vosso indigno servo, Vos ofereço, ó meu Deus vivo e
          verdadeiro, pelos meus inumeráveis pecados, ofensas e negligências,
          por todos os assistentes e por todos os cristãos vivos e mortos, a fim
          de que sirva de proveito para a minha salvação, para a deles e para a
          vida eterna. Amen.
        </Typography>
      </Language>

      <Typography className="aside">
        Ao lado direito do altar, o celebrante deita vinho no cálice, a que
        mistura umas gotas de água, dizendo a seguinte oração:
      </Typography>

      <Language>
        <Typography className="latin">
          Deus, qui humánæ substántiæ dignitátem mirabíliter condidísti, et
          mirabílius reformásti: da nobis per hujus aquæ et vini mystérium, ejus
          divinitátis esse consórtes, qui humanitátis nostræ fíeri dignátus est
          párticeps, Jesus Christus, Fílius tuus, Dóminus noster: Qui tecum
          vivit et regnat in unitáte Spíritus Sancti Deus: per ómnia sǽcula
          sæculórum. Amen.
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que maravilhosamente criastes a dignidade da natureza humana e
          que mais prodigiosamente ainda a reformastes, permiti que pela mistura
          simbólica desta água e deste vinho sejamos participantes da divindade
          daquele que quis assumir a nossa humanidade, Jesus Cristo, vosso
          Filho, nosso Senhor, que, sendo Deus, vive e reina convosco em unidade
          do Espírito Santo, em todos os séculos dos séculos. Amen.
        </Typography>
      </Language>

      <Typography className="aside">
        No meio do altar, o celebrante faz o oferecimento do cálice:
      </Typography>

      <Language>
        <Typography className="latin">
          Offérimus tibi, Dómine, cálicem salutáris, tuam deprecántes
          cleméntiam: ut in conspéctu divínæ majestátis tuæ, pro nostra et
          totíus mundi salúte, cum odóre suavitátis ascéndat. Amen.
        </Typography>
        <Typography className="vernacular">
          Vos oferecemos, Senhor, o Cálice da salvação; e Vos suplicamos que
          misericordiosamente o façais subir, como suave perfume, diante da
          vossa divina majestade, para nossa salvação e de todo o mundo. Amen.
        </Typography>
      </Language>

      <Typography className="aside">Depois, inclinando-se diz:</Typography>

      <Language>
        <Typography className="latin">
          In spíritu humilitátis et in ánimo contríto suscipiámur a te, Dómine:
          et sic fiat sacrifícium nostrum in conspéctu tuo hódie, ut pláceat
          tibi, Dómine Deus.
        </Typography>
        <Typography className="vernacular">
          Em humildade e contrição, sejamos recebidos por Vós, Senhor; e assim
          este sacrifício, ó Deus, se torne agradável aos vossos olhos.
        </Typography>
      </Language>

      <Typography className="aside">Invocação do Espírito Santo:</Typography>

      <Language>
        <Typography className="latin">
          Veni, sanctificátor omnípotens ætérne Deus: et bene{" "}
          <Typography className="cross"> ✠ </Typography> dic hoc sacrifícium,
          tuo sancto nómini præparátum.
        </Typography>
        <Typography className="vernacular">
          Vinde, ó Santificador omnipotente, Deus eterno, e abençoai{" "}
          <Typography className="cross"> ✠ </Typography> este sacrifício,
          preparado para a glória do vosso Santo Nome.
        </Typography>
      </Language>

      <H4 text="Incensão" />

      <Typography className="aside">
        Segue-se, nas Missas solenes, o rito da incensão. Tudo o que é oferecido
        a Deus é incensado. Logo, são incensados o Pão, o Vinho e todos os fiéis
        presentes.
      </Typography>

      <H4 text="Bênção do Incenso:" />

      <Language>
        <Typography className="latin">
          Per intercessiónem beáti Michǽlis Archángeli, stantis a dextris
          altáris incénsi, et ómnium electórum suórum, incénsum istud dignétur
          Dóminus bene <Typography className="cross"> ✠ </Typography> dícere, et
          in odórem suavitátis accípere. Per Christum, Dóminum nostrum. Amen.
        </Typography>
        <Typography className="vernacular">
          Dignai-Vos Senhor, pela intercessão do bem-aventurado Arcanjo Miguel,
          que está de pé à direita do altar do incenso, e de todos vossos
          eleitos, abençoar <Typography className="cross"> ✠ </Typography> este
          incenso e aceitá-lo como odor de suavidade. Por Cristo, Senhor nosso.
          Amen.
        </Typography>
      </Language>

      <Typography className="aside">
        O Sacerdote incensa primeiro as oblatas:
      </Typography>

      <Language>
        <Typography className="latin">
          Incénsum istud a te benedíctum ascéndat ad te, Dómine: et descéndat
          super nos misericórdia tua.
        </Typography>
        <Typography className="vernacular">
          Que este incenso, por Vós abençoado, suba até Vós, Senhor; e desça
          sobre nós a vossa misericórdia.
        </Typography>
      </Language>

      <Typography className="aside">
        Em seguida incensa a cruz e o altar, dizendo, entretanto, os seguintes
        versículos, retirados do Salmo 140:
      </Typography>

      <Language>
        <Typography className="latin">
          Dirigátur, Dómine, orátio mea, sicut incénsum, in conspéctu tuo:
          elevátio mánuum meárum sacrifícium vespertínum. Pone, Dómine,
          custódiam ori meo, et óstium circumstántiæ lábiis meis: ut non
          declínet cor meum in verba malítiæ, ad excusándas excusatiónes in
          peccátis.
        </Typography>
        <Typography className="vernacular">
          Suba como incenso até Vós, Senhor, a minha oração: a elevação das
          minhas mãos seja como o sacrifício vespertino. Colocai, Senhor, uma
          guarda em minha boca, e uma porta em volta de meus lábios. Não deixes
          que meu coração se deixe arrastar por palavras de maldade, procurando
          desculpas para pecar.
        </Typography>
      </Language>

      <Typography className="aside">
        O celebrante entrega o turíbulo ao Diácono, dizendo:
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Accéndat in nobis
          Dóminus ignem sui amóris, et flammam ætérnæ caritátis. Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Que o Senhor acenda
          em nós o fogo do seu amor e a chama da eterna caridade. Amen.
        </Typography>
      </Language>

      <Typography className="aside">
        O Diácono incensa o Sacerdote, e depois todos os outros por ordem. Nas
        Missas de defuntos, é incensado só o Sacerdote.
      </Typography>

      <H4 text="Lavabo" />

      <Typography className="aside">
        O lavar as mãos simboliza a pureza da alma, necessária para oferecer o
        santo Sacrifício. O Sacerdote vai à direita do altar e lava as mãos,
        dizendo, entretanto, os seguintes versículos do salmo 25:
      </Typography>

      <Language>
        <Typography className="latin">
          Lavábo inter innocéntes manus meas: et circúmdabo altáre tuum. Dómine:
          Lavarei as minhas mãos, como os inocentes, e rodearei, Senhor o vosso
          altar: Ut áudiam vocem laudis, et enárrem univérsa mirabília tua.
          Dómine, diléxi decórem domus tuæ et locum habitatiónis glóriæ tuæ.
        </Typography>
        <Typography className="vernacular">
          Para ouvir a voz dos vossos louvores e publicar todas as vossas
          maravilhas. Amei, Senhor, o decoro da vossa casa e o lugar onde reside
          a vossa glória.
        </Typography>
        <Typography className="latin">
          Ne perdas cum ímpiis, Deus, ánimam meam, et cum viris sánguinum vitam
          meam:
        </Typography>
        <Typography className="vernacular">
          Não deixeis, ó meu Deus, a minha alma perder-se com os ímpios, nem a
          minha vida com os homens sanguinários:
        </Typography>
        <Typography className="latin">
          In quorum mánibus iniquitátes sunt: déxtera eórum repléta est
          munéribus. Ego autem in innocéntia mea ingréssus sum: rédime me et
          miserére mei. Pes meus stetit in dirécto: in ecclésiis benedícam te,
          Dómine.
        </Typography>
        <Typography className="vernacular">
          Que têm as mãos manchadas de iniquidades e a mão direita cheia de
          dádivas. Pois que tenho vivido na inocência, salvai-me e tende
          misericórdia de mim. Meus pés continuam firmes no caminho direito: e
          hei-de bendizer-Vos, Senhor, em todas as assembleias.
        </Typography>
        <Typography className="latin">
          Glória Patri, et Fílio, et Spirítui Sancto. Sicut erat in princípio,
          et nunc, et semper: et in sǽcula sæculórum. Amen.
        </Typography>
        <Typography className="vernacular">
          Glória ao Pai, e ao Filho, e ao Espírito Santo. Assim como era no
          princípio, e agora, e sempre, por todos os séculos dos séculos. Amen.
        </Typography>
      </Language>

      <Typography className="aside">
        Nas Missas de defuntos e do Tempo da Paixão omite-se o Glória Patri.
      </Typography>

      <H4 text="Oração à Santíssima Trindade" />

      <Typography className="aside">
        Inclinado, ao meio do altar, o Sacerdote diz:
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Súscipe, sancta
          Trinitas, hanc oblatiónem, quam tibi offérimus ob memóriam passiónis,
          resurrectiónis, et ascensiónis Jesu Christi, Dómini nostri: et in
          honórem beátæ Maríæ semper Vírginis, et beáti Joannis Baptistæ, et
          sanctórum Apostolórum Petri et Pauli, et istórum et ómnium Sanctórum:
          ut illis profíciat ad honórem, nobis autem ad salútem: et illi pro
          nobis intercédere dignéntur in cœlis, quorum memóriam ágimus in
          terris. Per eúndem Christum, Dóminum nostrum. Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Recebei, ó
          Santíssima Trindade, esta oblação, que Vos oferecemos em memória da
          Paixão, da Ressurreição e da Ascensão de N. S. Jesus Cristo: e em
          honra da bem-aventurada sempre Virgem Maria, do bem-aventurado João
          Baptista e dos Santos Apóstolos Pedro e Paulo, e destes, que estão
          aqui, e de todos os Santos: para que esta oblação lhes sirva de glória
          e a nós de salvação: e aqueles, cuja memória honramos na terra, se
          dignem interceder por nós no céu. Pelo mesmo Jesus Cristo, nosso
          Senhor. Amen.
        </Typography>
      </Language>

      <Typography className="aside">
        Beija o Altar e voltando-se para os fiéis, o Sacerdote convida-os a orar
        com ele:
      </Typography>

      <H4 text="Orate Frates" />

      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Oráte, fratres: ut
          meum ac vestrum sacrifícium acceptábile fiat apud Deum Patrem
          omnipoténtem.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Orai, meus irmãos, a
          fim de que meu sacrifício, que é também vosso, seja recebido por Deus
          Pai omnipotente.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Suscípiat Dóminus
          sacrifícium de mánibus tuis ad laudem et glóriam nominis sui, ad
          utilitátem quoque nostram, totiúsque Ecclésiæ suæ sanctæ.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Que o Senhor receba
          por vossas mãos este sacrifício para a honra e glória de seu Nome, e
          também para a nossa utilidade e de toda sua santa Igreja.
        </Typography>
      </Language>

      <Typography className="aside">
        O Sacerdote responde, em voz baixa:
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography> Amen.
        </Typography>
      </Language>

      <Typography className="aside">
        Em seguida lê a Secreta. À Secreta principal, podem, em certas Missas,
        ajuntar-se outras, em número igual e segundo as mesmas regras da
        Colecta.
      </Typography>

      <H3 text="Secreta do dia" />

      {mass.map((i) => (
        <LinkCard key={i.id} mass={i} description="Secreta" />
      ))}

      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>...Per ómnia sǽcula
          sæculórum.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>...Por todos os
          séculos dos séculos.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
      </Language>

      <H3 text="Canon Missæ" />

      <Typography className="aside">
        O Cânon constitui a parte central da Missa. Com o Prefácio, começa a
        grande, a solene oração sacerdotal da Igreja e oblação propriamente dita
        do Sacrifício. Curto diálogo introdutório entre o Sacerdote e os fiéis
        desperta nas almas os sentimentos de acção de graças que convêm à
        celebração dos santos mystérios.
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography> Dóminus vobíscum.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>O Senhor esteja
          convosco.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Et cum spíritu tuo.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> E com vosso
          espírito.
        </Typography>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography> Sursum corda.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography> Corações ao alto.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Habémus ad Dóminum.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Assim os temos para
          o Senhor.
        </Typography>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Grátias agámus
          Dómino, Deo nostro.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Demos graças ao
          Senhor, Nosso Deus.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Dignum et justum
          est.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Assim é digno e
          justo.
        </Typography>
      </Language>

      <H3 text="Prefácio do dia" />

      <LinkCard href="/missal/prefacios" description="Prefácios" />

      <H3 text="Sanctus" />

      <Language>
        <Typography className="latin">
          Sanctus, Sanctus, Sanctus Dóminus, Deus Sábaoth. Pleni sunt cœli et
          terra glória tua. Hosánna in excélsis.
        </Typography>
        <Typography className="vernacular">
          Santo, Santo, Santo, Senhor Deus do Universo. O céu e a terra
          proclamam a vossa glória. Hossana nas alturas.
        </Typography>
        <Typography className="latin">
          Benedíctus, <Typography className="cross"> ✠ </Typography> qui venit
          in nómine Dómini. Hosánna in excélsis.
        </Typography>
        <Typography className="vernacular">
          Bendito <Typography className="cross"> ✠ </Typography> o que vem em
          nome do Senhor. Hosana nas alturas.
        </Typography>
      </Language>

      <H3 text="Cânon" />

      <Typography className="aside">
        O Sacerdote, levanta os olhos para o céu, inclina-se, beija o altar e
        continua a grande oração sacerdotal.
      </Typography>

      <Language>
        <Typography className="latin">
          Te Igitur clementíssime Pater, per Jesum Christum, Fílium tuum,
          Dóminum nostrum, súpplices rogámus, ac pétimus, uti accepta habeas et
          benedícas, hæc <Typography className="cross"> ✠ </Typography> dona,
          hæc <Typography className="cross"> ✠ </Typography> múnera, hæc{" "}
          <Typography className="cross"> ✠ </Typography> sancta sacrifícia
          illibáta, in primis, quæ tibi offérimus pro Ecclésia tua sancta
          cathólica: quam pacificáre, custodíre, adunáre et régere dignéris toto
          orbe terrárum: una cum fámulo tuo Papa nostro{" "}
          <Typography className="text-red-500">N.</Typography> et Antístite
          nostro <Typography className="text-red-500">N.</Typography> et ómnibus
          orthodóxis, atque cathólicæ et apostólicæ fídei cultóribus.
        </Typography>
        <Typography className="vernacular">
          A Vós, pois, rogamos e pedimos, ó clementíssimo Pai, por Jesus Cristo,
          vosso Filho e nosso Senhor, que estes{" "}
          <Typography className="cross"> ✠ </Typography> dons, estas{" "}
          <Typography className="cross"> ✠ </Typography> ofertas, estes{" "}
          <Typography className="cross"> ✠ </Typography> sacrifícios santos e
          imaculados Vos sejam agradáveis e os abençoeis, os quais, antes de
          tudo, Vos oferecemos pela nossa santa Igreja Católica: dignai-Vos
          conceder-lhe a paz, guardá-la, uni-la e governá-la por toda a terra,
          em comunhão com vosso servo, nosso Papa{" "}
          <Typography className="text-red-500">N.</Typography> com o nosso Bispo{" "}
          <Typography className="text-red-500">N.</Typography> e com todos os
          ortodoxos e os que professam a fé católica e apostólica.
        </Typography>
      </Language>

      <H4 text="Memento dos vivos" />

      <Language>
        <Typography className="latin">
          Meménto, Dómine, famulórum famularúmque tuarum{" "}
          <Typography className="latin">N.</Typography> et{" "}
          <Typography className="text-red-500">N.</Typography> et ómnium
          circumstántium, quorum tibi fides cógnita est et nota devótio, pro
          quibus tibi offérimus: vel qui tibi ófferunt hoc sacrifícium laudis,
          pro se suísque ómnibus: pro redemptióne animárum suárum, pro spe
          salútis et incolumitátis suæ: tibíque reddunt vota sua ætérno Deo,
          vivo et vero.
        </Typography>
        <Typography className="vernacular">
          Lembrai-Vos, Senhor, dos vossos servos{" "}
          <Typography className="vernacular">N.</Typography>e{" "}
          <Typography className="text-red-500">N.</Typography> e de todos os que
          aqui estão presentes, cuja fé Vos é conhecida e a piedade é notória:
          pelos quais Vos oferecemos, ou eles Vos oferecem, este sacrifício de
          louvor por si próprios e por todos seus, pela redenção das suas almas,
          pela esperança da sua salvação: é a Vós que oferecem as homenagens,
          como Deus eterno, vivo e verdadeiro, que sois.
        </Typography>
      </Language>

      <H4 text="Memória dos Santos" />

      <Typography className="aside">
        Para além destes Comunicantes, existem também para o Natal, Epifania,
        Quinta-Feira Santa, Sábado de Aleluia e Páscoa, Ascensão e Pentecostes.
      </Typography>

      <Language>
        <Typography className="latin">
          Communicántes, et memóriam venerántes, in primis gloriósæ semper
          Vírginis Maríæ, Genitrícis Dei et Dómini nostri Jesu Christi: sed et
          beatórum Apostolórum ac Mártyrum tuórum, Petri et Pauli, Andréæ,
          Jacóbi, Joánnis, Thomæ, Jacóbi, Philíppi, Bartholomǽi, Matthǽi,
          Simónis et Thaddǽi: Lini, Cleti, Cleméntis, Xysti, Cornélii, Cypriáni,
          Lauréntii, Chrysógoni, Joánnis et Pauli, Cosmæ et Damiáni: et ómnium
          Sanctórum tuórum; quorum méritis precibúsque concédas, ut in ómnibus
          protectiónis tuæ muniámur auxílio. Per eúndem Christum, Dóminum
          nostrum. Amen.
        </Typography>
        <Typography className="vernacular">
          Unidos em uma mesma comunhão, primeiramente honramos a memória da
          gloriosa sempre Virgem Maria, Mãe de Jesus Cristo, nosso Deus e
          Senhor, e depois também a dos vossos bem-aventurados Apóstolos e
          Mártires: Pedro e Paulo, André, Tiago, João, Tomé, Tiago, Filipe,
          Bartolomeu, Mateus, Simão e Tadeu: Lino, Cleto, Clemente, Xisto,
          Cornélio, Cipriano, Lourenço, Crisógono, João e Paulo, Cosme e Damião:
          e de todos vossos Santos. Dignai-Vos permitir que por seus méritos e
          preces gozemos o poderoso auxílio da vossa protecção. Pelo mesmo
          Cristo, nosso Senhor. Amen.
        </Typography>
      </Language>

      <H3 text="Orações na Consagração" />

      <Typography className="aside">
        Estendendo as mãos sobre as oblatas, o celebrante diz:
      </Typography>

      <Language>
        <Typography className="latin">
          Hanc igitur oblatiónem servitutis nostræ, sed et cunctæ famíliæ tuæ,
          quǽsumus, Dómine, ut placátus accípias: diésque nostros in tua pace
          dispónas, atque ab ætérna damnatióne nos éripi, et in electórum tuórum
          júbeas grege numerári. Per Christum, Dóminum nostrum. Amen.
        </Typography>
        <Typography className="vernacular">
          Por este motivo, Senhor, Vos rogamos que Vos dignais receber
          favoravelmente esta oferta que eu, vosso indigno servo, e toda a vossa
          família Vos fazemos; concedei-nos o gozo da vossa paz nos nossos dias,
          livrai-nos da condenação eterna e admiti-nos ao número dos vossos
          escolhidos. Por Cristo, nosso Senhor. Amen.
        </Typography>
      </Language>

      <Typography className="aside">
        O Sacerdote abençoa as oblatas dizendo:
      </Typography>

      <Language>
        <Typography className="latin">
          Quam oblatiónem tu, Deus, in ómnibus, quǽsumus, bene{" "}
          <Typography className="cross"> ✠ </Typography> díctam, adscríp{" "}
          <Typography className="cross"> ✠ </Typography> tam, ra{" "}
          <Typography className="cross"> ✠ </Typography> tam, rationábilem,
          acceptabilémque fácere dignéris: ut nobis Cor{" "}
          <Typography className="cross"> ✠ </Typography> pus, et San{" "}
          <Typography className="cross"> ✠ </Typography> guis fiat dilectíssimi
          Fílii tui, Dómini nostri Jesu Christi.
        </Typography>
        <Typography className="vernacular">
          Que esta oblação, ó Deus, Vos imploramos, seja abençoada, aprovada,
          confirmada, digna e aceitável, a fim de que se converta para nós no
          Corpo e no Sangue de vosso amado Filho, nosso Senhor Jesus Cristo.
        </Typography>
      </Language>

      <H4 text="Consagração e Elevação da Hóstia" />

      <Typography className="aside">
        Inclina-se sobre o altar, e profere as palavras da consagração da
        Hóstia. Em seguida adora-a, e eleva-a aos olhos dos fiéis, para que
        todos a adorem em silêncio. O mesmo faz, depois, para a consagração do
        Cálice.
      </Typography>

      <Language>
        <Typography className="latin">
          Qui prídie quam paterétur, accépit panem in sanctas ac venerábiles
          manus suas, et elevátis óculis in cœlum ad te Deum, Patrem suum
          omnipoténtem, tibi grátias agens, bene{" "}
          <Typography className="cross"> ✠ </Typography> dixit, fregit, dedítque
          discípulis suis, dicens: Accípite, et manducáte ex hoc omnes.
        </Typography>
        <Typography className="vernacular">
          O qual, na véspera da sua paixão tomou o pão em suas santas e
          veneráveis mãos: e, erguendo os olhos ao céu, a Vós, Deus seu Pai
          omnipotente, e dando-Vos graças, abençoou-o{" "}
          <Typography className="cross"> ✠ </Typography>, partiu-o e deu-o aos
          seus discípulos, dizendo: Tomai todos e comei:
        </Typography>
      </Language>

      <Language>
        <Typography className="latin">
          <Typography className="latin">Hoc est enim Corpus meum.</Typography>
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">
            Pois isto é o meu Corpo.
          </Typography>
        </Typography>
      </Language>

      <H4 text="Consagração e Elevação do Cálice:" />

      <Language>
        <Typography className="latin">
          Símili modo postquam cœnátum est, accípiens et hunc præclárum Cálicem
          in sanctas ac venerábiles manus suas: tibi grátias agens, bene{" "}
          <Typography className="cross"> ✠ </Typography> dixit, dedítque
          discípulis suis, dicens: Accípite, et bíbite ex eo omnes.
        </Typography>
        <Typography className="vernacular">
          Do mesmo modo, Jesus, após a Ceia, tomou em suas santas e veneráveis
          mãos este precioso Cálice, e, novamente, dando-Vos graças, abençoou-o{" "}
          <Typography className="cross"> ✠ </Typography> e deu-o aos seus
          discípulos dizendo:
        </Typography>
        <Typography className="latin">
          <Typography className="latin">
            Hic est enim Calix Sánguinis mei, novi et ætérni testaménti:
            mystérium fídei: qui pro vobis et pro multis effundétur in
            remissiónem peccatórum.{" "}
          </Typography>
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">
            {" "}
            Pois isto é o Cálice do meu Sangue do novo e eterno testamento,
            mystério da fé, que será derramado por vós e por muitos, para a
            remissão dos pecados.{" "}
          </Typography>
        </Typography>
      </Language>

      <Typography className="aside">
        Depois da consagração do Cálice, o Sacerdote diz com uma voz baixa:
      </Typography>

      <Language>
        <Typography className="latin">
          Hæc quotiescúmque fecéritis, in mei memóriam faciétis.
        </Typography>
        <Typography className="vernacular">
          Todas as vezes que fizerdes isto, fazei-o em memória de mim.
        </Typography>
      </Language>

      <H4 text="Oblação da Vítima a Deus" />

      <Typography className="aside">
        O Sacerdote continua depois as orações do Cânon:
      </Typography>

      <Language>
        <Typography className="latin">
          Unde et mémores, Dómine, nos servi tui, sed et plebs tua sancta,
          ejusdem Christi Fílii tui, Dómini nostri, tam beátæ passiónis, nec non
          et ab ínferis resurrectiónis, sed et in cœlos gloriósæ ascensiónis:
          offérimus præcláræ majestáti tuæ de tuis donis ac datis, hóstiam{" "}
          <Typography className="cross"> ✠ </Typography> puram, hóstiam{" "}
          <Typography className="cross"> ✠ </Typography> sanctam, hóstiam{" "}
          <Typography className="cross"> ✠ </Typography> immaculátam, Panem{" "}
          <Typography className="cross"> ✠ </Typography> sanctum vitæ ætérnæ, et
          Calicem <Typography className="cross"> ✠ </Typography> salútis
          perpétuæ.
        </Typography>
        <Typography className="vernacular">
          Por este motivo, Senhor, nós, vossos servos, e o vosso povo santo,
          lembrando-nos da bem-aventurada Paixão do mesmo Cristo, vosso Filho e
          Senhor nosso, assim como também da sua Ressurreição dos mortos e da
          sua gloriosa Ascensão aos céus, oferecemos à vossa divina majestade os
          mesmos dons que nos foram dados: a Hóstia{" "}
          <Typography className="cross"> ✠ </Typography> pura, a Hóstia{" "}
          <Typography className="cross"> ✠ </Typography> santa, a Hóstia{" "}
          <Typography className="cross"> ✠ </Typography> imaculada, o Pão{" "}
          <Typography className="cross"> ✠ </Typography> santo da vida eterna e
          o Cálice <Typography className="cross"> ✠ </Typography> da salvação
          perpétua.
        </Typography>
      </Language>

      <Typography className="aside">
        Com as mãos afastadas, contínua:
      </Typography>

      <Language>
        <Typography className="latin">
          Supra quæ propítio ac seréno vultu respícere dignéris: et accépta
          habére, sicúti accépta habére dignátus es múnera púeri tui justi Abel,
          et sacrifícium Patriárchæ nostri Abrahæ: et quod tibi óbtulit summus
          sacérdos tuus Melchísedech, sanctum sacrifícium, immaculátam hóstiam.
        </Typography>
        <Typography className="vernacular">
          Sobre estas ofertas dignai-Vos lançar um olhar propício e benévolo e
          aceitá-las, como Vos dignastes receber os dons do justo Abel, vosso
          servo, o sacrifício do nosso Patriarca Abraão e o que Vos ofereceu o
          Sumo sacerdote Melquisedeque, pois este é um sacrifício santo, uma
          hóstia imaculada.
        </Typography>
      </Language>

      <Typography className="aside">
        Profundamente inclinado, o Sacerdote diz:
      </Typography>

      <Language>
        <Typography className="latin">
          Súpplices te rogámus, omnípotens Deus: jube hæc perférri per manus
          sancti Ángeli tui in sublíme altáre tuum, in conspéctu divínæ
          majestátis tuæ: ut, quotquot ex hac altáris participatióne
          sacrosánctum Fílii tui Cor{" "}
          <Typography className="cross"> ✠ </Typography> pus, et Sán{" "}
          <Typography className="cross"> ✠ </Typography> guinem sumpsérimus,
          omni benedictióne cœlésti et grátia repleámur. Per eúndem Christum,
          Dóminum nostrum. Amen.
        </Typography>
        <Typography className="vernacular">
          Humildemente Vos rogamos, ó Deus omnipotente, ordeneis que estas
          ofertas sejam apresentadas no altar sublime pelas mãos do vosso Santo
          Anjo, na presença da vossa divina majestade, a fim de que todos
          aqueles que participam deste Altar pela recepção do Santíssimo Corpo{" "}
          <Typography className="cross"> ✠ </Typography> e Sangue{" "}
          <Typography className="cross"> ✠ </Typography> de vosso Filho sejam
          repletos de todas as bênçãos do céu e de todas as graças. Pelo mesmo
          Cristo, nosso Senhor. Amen.
        </Typography>
      </Language>

      <H3 text="Orações depois da Consagração" />

      <H4 text="Memento dos defuntos:" />

      <Language>
        <Typography className="latin">
          Meménto étiam, Dómine, famulórum famularúmque tuárum{" "}
          <Typography className="latin">N.</Typography> et{" "}
          <Typography className="text-red-500">N.</Typography> , qui nos
          præcessérunt cum signo fídei, et dórmiunt in somno pacis.
        </Typography>
        <Typography className="vernacular">
          Lembrai-Vos também Senhor, dos vossos servos e servas{" "}
          <Typography className="vernacular">N.</Typography> e{" "}
          <Typography className="text-red-500">N.</Typography>, que partiram
          antes de nós, marcados com o sinal da fé, e agora dormem o sono da
          paz.
        </Typography>
        <Typography className="latin">
          Ipsis, Dómine, et ómnibus in Christo quiescéntibus locum refrigérii,
          lucis pacis ut indúlgeas, deprecámur. Per eúndem Christum, Dóminum
          nostrum. Amen.
        </Typography>
        <Typography className="vernacular">
          Vos suplicamos, Senhor, dignai-Vos conceder a estes, assim como a
          todos os que descansam em Cristo, um lugar de consolação, de luz e de
          paz. Pelo mesmo Cristo, nosso Senhor. Amen.
        </Typography>
      </Language>

      <H4 text="Invocação dos Santos" />

      <Typography className="aside">
        O Sacerdote bate no peito, dizendo:
      </Typography>

      <Language>
        <Typography className="latin">
          Nobis quoque peccatóribus Extensis manibus ut prius, secrete
          prosequitur: fámulis tuis, de multitúdine miseratiónum tuárum
          sperántibus, partem áliquam et societátem donáre dignéris, cum tuis
          sanctis Apóstolis et Martýribus: cum Joánne, Stéphano, Matthía,
          Bárnaba, Ignátio, Alexándro, Marcellíno, Petro, Felicitáte, Perpétua,
          Agatha, Lúcia, Agnéte, Cæcília, Anastásia, et ómnibus Sanctis tuis:
          intra quorum nos consórtium, non æstimátor mériti, sed véniæ,
          quǽsumus, largítor admítte. Per Christum, Dóminum nostrum.
        </Typography>
        <Typography className="vernacular">
          E também a nós, pecadores, vossos servos, que esperamos na grandeza
          das vossas misericórdias, dignai-Vos conceder-nos alguma parte na
          vossa herança e sociedade com vossos Santos Apóstolos e Mártires:
          João, Estêvão, Matias, Barnabé, Inácio, Alexandre, Marcelino, Pedro,
          Felicidade, Perpétua, Águeda, Luzia, Inês, Cecília, Anastácia e com
          todos os Santos, em cuja companhia, Vos pedimos, nos recebais, não em
          consideração dos nossos merecimentos, mas segundo a liberalidade da
          vossa misericórdia. Por Cristo, nosso Senhor.
        </Typography>
        <Typography className="latin">
          Per quem hæc ómnia, Dómine, semper bona creas, sanctí{" "}
          <Typography className="cross"> ✠ </Typography> ficas, viví{" "}
          <Typography className="cross"> ✠ </Typography> ficas, bene{" "}
          <Typography className="cross"> ✠ </Typography> dícis et præstas nobis.
        </Typography>
        <Typography className="vernacular">
          Por quem, Senhor, sempre criais estes bens e os santificais{" "}
          <Typography className="cross"> ✠ </Typography>, vivificais{" "}
          <Typography className="cross"> ✠ </Typography>, abençoais{" "}
          <Typography className="cross"> ✠ </Typography> e no-los concedeis.
        </Typography>
      </Language>

      <H4 text="Doxologia Final" />

      <Language>
        <Typography className="latin">
          Per ip <Typography className="cross"> ✠ </Typography> sum, et cum ip{" "}
          <Typography className="cross"> ✠ </Typography> so, et in ip{" "}
          <Typography className="cross"> ✠ </Typography> so, est tibi Deo Patri{" "}
          <Typography className="cross"> ✠ </Typography> omnipotenti, in unitáte
          Spíritus <Typography className="cross"> ✠ </Typography> Sancti, omnis
          honor, et glória.
        </Typography>
        <Typography className="vernacular">
          Por Ele <Typography className="cross"> ✠ </Typography>, com Ele{" "}
          <Typography className="cross"> ✠ </Typography> e n’Ele{" "}
          <Typography className="cross"> ✠ </Typography>, a Vós, ó Deus Pai
          todo-o-poderoso <Typography className="cross"> ✠ </Typography>, na
          unidade do Espírito <Typography className="cross"> ✠ </Typography>{" "}
          Santo, pertence, e Vos é dada, toda a honra e glória.
        </Typography>
      </Language>

      <Typography className="aside">
        O Sacerdote termina em voz alta:
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Per ómnia sǽcula
          sæculórum.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Por todos os séculos
          dos séculos.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
      </Language>

      <H3 text="Rito da Comunhão" />

      <Typography className="aside">Participação no Sacrifício</Typography>

      <Typography className="aside">
        Terminado o Cânon, o Sacerdote diz em voz alta:
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="latin"> Orémus.</Typography>
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular"> Oremos.</Typography>
        </Typography>
        <Typography className="latin">
          Præcéptis salutáribus móniti, et divína institutióne formáti, audémus
          dícere:
        </Typography>
        <Typography className="vernacular">
          Instruídos com os salutares preceitos do Salvador e dirigidos pelos
          seus divinos ensinamentos, ousamos dizer:
        </Typography>
      </Language>

      <H3 text="Pater Noster" />

      <Language>
        <Typography className="latin">
          Pater noster, qui es in cælis: sanctificétur nomen tuum: advéniat
          regnum tuum: fiat volúntas tua, sicut in cælo, et in terra. Panem
          nostrum quotidiánum da nobis hódie: et dimítte nobis débita nostra,
          sicut et nos dimíttimus debitóribus nostris. Et ne nos indúcas in
          tentatiónem.
        </Typography>
        <Typography className="vernacular">
          Pai nosso que estais nos céus; santificado seja o vosso nome; venha a
          nós o vosso reino; seja feita a vossa vontade, assim na terra como no
          céu. O pão nosso de cada dia nos dai hoje; perdoai-nos as nossas
          dívidas, assim como nós perdoamos aos nossos devedores e não nos
          deixeis cair em tentação:
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Sed líbera nos a
          malo.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Mas livrai-nos do
          mal.
        </Typography>
      </Language>

      <Typography className="aside">
        O Sacerdote diz Amen em voz baixa, e continua:
      </Typography>

      <H4 text="Líbera nos" />

      <Language>
        <Typography className="latin">
          Libera nos, quǽsumus, Dómine, ab ómnibus malis, prætéritis,
          præséntibus et futúris: et intercedénte beáta et gloriósa semper
          Vírgine Dei Genetríce María, cum beátis Apóstolis tuis Petro et Paulo,
          atque Andréa, et ómnibus Sanctis, da propítius pacem in diébus
          nostris: ut, ope misericórdiæ tuæ adjúti, et a peccáto simus semper
          líberi et ab omni perturbatióne secúri.
        </Typography>
        <Typography className="vernacular">
          Livrai-nos, Senhor, Vos suplicamos, de todos os males passados,
          presentes e futuros; e, pela intercessão da bem-aventurada e gloriosa
          sempre Virgem Maria, Mãe de Deus, e dos bem-aventurados Apóstolos
          Pedro e Paulo e André, e de todos os Santos, dai-nos, benignamente, a
          paz nos nossos dias, a fim de que auxiliados com vossa misericórdia,
          sejamos sempre livres do pecado e seguros de toda a perturbação.
        </Typography>
      </Language>

      <Typography className="aside">
        O Sacerdote descobre o Cálice, genuflecte e segura com os dedos polegar
        e indicador da mão direita a Hóstia, que ergue até ao cimo do cálice.
      </Typography>

      <H4 text="Fracção da Hóstia" />

      <Typography className="aside">
        O Sacerdote parte a Hóstia ao meio, de uma das partes tira um pequeno
        fragmento que deita no preciosíssimo Sangue, traçando antes, com ele,
        sobre o Cálice, três vezes, o sinal da cruz, e dizendo:
      </Typography>

      <Language>
        <Typography className="latin">
          Per eúndem Dóminum nostrum Jesum Christum, Fílium tuum. Qui tecum
          vivit et regnat in unitáte Spíritus Sancti Deus.
        </Typography>
        <Typography className="vernacular">
          Pelo mesmo nosso Senhor Jesus Cristo, vosso Filho: que convosco vive e
          reina em unidade de Deus Espírito Santo.
        </Typography>
      </Language>

      <Typography className="aside">
        Depois, o Sacerdote, tendo entre os dedos da mão direita a Partícula,
        que fraccionou, coloca-a sobre o Cálice, que segura pelo nós, e
        acrescenta em voz alta:
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Per ómnia sæcula
          sæculórum.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Por todos os séculos
          dos séculos.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
      </Language>

      <Typography className="aside">
        O Sacerdote faz três vezes o sinal da Cruz com a Divina Partícula sobre
        o Cálice:
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Pax{" "}
          <Typography className="cross"> ✠ </Typography> Dómini sit{" "}
          <Typography className="cross"> ✠ </Typography> semper{" "}
          <Typography className="cross"> ✠ </Typography> vobíscum.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Que a paz{" "}
          <Typography className="cross"> ✠ </Typography> do Senhor esteja{" "}
          <Typography className="cross"> ✠ </Typography> sempre{" "}
          <Typography className="cross"> ✠ </Typography> convosco.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Et cum spíritu tuo.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> E com vosso
          espírito.
        </Typography>
        <Typography className="latin">
          Hæc commíxtio, et consecrátio Córporis et Sánguinis Dómini nostri Jesu
          Christi, fiat accipiéntibus nobis in vitam ætérnam. Amen.
        </Typography>
        <Typography className="vernacular">
          Que esta mistura e esta consagração do Corpo e do Sangue de nosso
          Senhor Jesus Cristo sejam penhor de vida eterna para nós que a
          receberemos. Amen.
        </Typography>
      </Language>

      <H3 text="Agnus Dei" />

      <Typography className="aside">
        O Sacerdote bate três vezes no peito, e diz a oração seguinte. Nas
        Missas de Defuntos, não se bate no peito e em vez de miserére nobis,
        diz-se: Dona eis requiem; na terceira parte: dona eis requiem
        sempiternam.
      </Typography>

      <Language>
        <Typography className="latin">
          Agnus Dei, qui tollis peccáta mundi: miserére nobis.
        </Typography>
        <Typography className="vernacular">
          Cordeiro de Deus, que tirais o pecado do mundo, tende piedade de nós.
        </Typography>
        <Typography className="latin">
          Agnus Dei, qui tollis peccáta mundi: miserére nobis.
        </Typography>
        <Typography className="vernacular">
          Cordeiro de Deus, que tirais o pecado do mundo, tende piedade de nós.
        </Typography>
        <Typography className="latin">
          Agnus Dei, qui tollis peccáta mundi: dona nobis pacem.
        </Typography>
        <Typography className="vernacular">
          Cordeiro de Deus, que tirais o pecado do mundo, dai-nos a paz.
        </Typography>
      </Language>

      <H3 text="Orações para a Comunhão" />

      <Typography className="aside">
        Inclinado, recita as três orações seguintes, pela paz, santificação e
        graça da Igreja.
      </Typography>

      <Language>
        <Typography className="latin">
          Dómine Jesu Christe, qui dixísti Apóstolis tuis: Pacem relínquo vobis,
          pacem meam do vobis: ne respícias peccáta mea, sed fidem Ecclésiæ tuæ;
          eámque secúndum voluntátem tuam pacifícáre et coadunáre dignéris: Qui
          vivis et regnas Deus per ómnia sǽcula sæculórum. Amen.
        </Typography>
        <Typography className="vernacular">
          Senhor Jesus Cristo, que dissestes aos vossos Apóstolos: «Eu vos deixo
          a paz, dou-vos a minha paz», não olheis para os meus pecados, mas para
          a fé da vossa Igreja: concedei-lhe paz e união, segundo a vossa
          vontade: Vós, que, sendo Deus, viveis e reinais em todos os séculos
          dos séculos. Amen.
        </Typography>
        <Typography className="latin">
          Dómine Jesu Christe, Fili Dei vivi, qui ex voluntáte Patris,
          cooperánte Spíritu Sancto, per mortem tuam mundum vivificásti: líbera
          me per hoc sacrosánctum Corpus et Sánguinem tuum ab ómnibus
          iniquitátibus meis, et univérsis malis: et fac me tuis semper inhærére
          mandátis, et a te numquam separári permíttas: Qui cum eódem Deo Patre
          et Spíritu Sancto vivis et regnas Deus in sǽcula sæculórum. Amen.
        </Typography>
        <Typography className="vernacular">
          Senhor Jesus Cristo, Filho de Deus vivo, que, por vontade do Pai,
          cooperando o Espírito Santo, pela vossa morte, destes a vida ao mundo:
          livrai-nos de todos os males por este vosso sacrossanto Corpo e
          Sangue. Permiti que cumpra sempre os vossos preceitos e nunca me
          afaste de Vós: que sendo Deus, viveis e reinais com o mesmo Deus Pai e
          Espírito Santo em todos os séculos dos séculos. Amen.
        </Typography>
        <Typography className="latin">
          Percéptio Córporis tui, Dómine Jesu Christe, quod ego indígnus súmere
          præsúmo, non mihi provéniat in judícium et condemnatiónem: sed pro tua
          pietáte prosit mihi ad tutaméntum mentis et córporis, et ad medélam
          percipiéndam: Qui vivis et regnas cum Deo Patre in unitáte Spíritus
          Sancti Deus, per ómnia sǽcula sæculórum. Amen.
        </Typography>
        <Typography className="vernacular">
          Senhor Jesus Cristo, que este vosso Corpo, que, eu, ainda que indigno,
          vou receber, não seja para meu juízo e condenação, mas que, pela vossa
          misericórdia, sirva à minha alma e ao meu corpo de defesa e de remédio
          salutar: Vós, que, sendo Deus, viveis e reinais com Deus Pai em
          unidade de Deus Espírito Santo em todos os séculos dos séculos. Amen.
        </Typography>
      </Language>

      <H3 text="Comunhão do celebrante" />

      <Typography className="aside">
        O Sacerdote genuflecte e pegando depois na sagrada Hóstia.
      </Typography>

      <Language>
        <Typography className="latin">
          Panem cœléstem accipiam, et nomen Dómini invocábo.
        </Typography>
        <Typography className="vernacular">
          Tomarei o Pão do céu e invocarei o nome do Senhor.
        </Typography>
      </Language>

      <Typography className="aside">
        Em seguida bate três vezes no peito.
      </Typography>

      <Language>
        <Typography className="latin">
          Dómine, non sum dignus, ut intres sub tectum meum: sed tantum dic
          verbo, et sanábitur ánima mea.
        </Typography>
        <Typography className="vernacular">
          Senhor, eu não sou digno de que entreis na minha morada, mas dizei uma
          só palavra e a minha alma será salva.
        </Typography>
      </Language>

      <Typography className="aside">
        Faz sobre si o sinal da cruz com a sagrada Hóstia, antes de a comungar.
      </Typography>

      <Language>
        <Typography className="latin">
          Corpus Dómini nostri Jesu Christi custódiat ánimam meam in vitam
          ætérnam. Amen.
        </Typography>
        <Typography className="vernacular">
          Que o Corpo de nosso Senhor Jesus Cristo guarde a minha alma para a
          vida eterna. Amen.
        </Typography>
      </Language>

      <Typography className="aside">
        Recolhe-se por uns instantes. Toma o preciosíssimo Sangue, fazendo antes
        sobre si o sinal da cruz.
      </Typography>

      <Language>
        <Typography className="latin">
          Quid retríbuam Dómino pro ómnibus, quæ retríbuit mihi? Cálicem
          salutáris accípiam, et nomen Dómini invocábo. Laudans invocábo
          Dóminum, et ab inimícis meis salvus ero.
        </Typography>
        <Typography className="vernacular">
          Como retribuirei ao Senhor os bens que Ele se dignou dispensar-me?
          Tomarei o Cálice da salvação e invocarei o nome do Senhor, louvando-O,
          e ficarei livre dos meus inimigos.
        </Typography>
      </Language>

      <Typography className="aside">
        Depois segura com a mão direita o Cálice pelo nó (enquanto a mão
        esquerda empunha a patena), traça com o Cálice o sinal da Cruz e bebe o
        Sangue Divino! Neste momento diz:
      </Typography>

      <Language>
        <Typography className="latin">
          Sanguis Dómini nostri Jesu Christi custódiat ánimam meam in vitam
          ætérnam. Amen.
        </Typography>
        <Typography className="vernacular">
          Que o Sangue de nosso Senhor Jesus Cristo guarde a minha alma para a
          vida eterna. Amen.
        </Typography>
      </Language>

      <H4 text="Comunhão dos fiéis" />

      <Typography className="aside">
        Os fiéis, ou o acólito por eles, recitam o Confíteor:
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Confíteor Deo
          omnipoténti, beátæ Maríæ semper Vírgini, beáto Michǽli Archángelo,
          beáto Joánni Baptístæ, sanctis Apóstolis Petro et Paulo, ómnibus
          Sanctis, et tibi, pater: quia peccávi nimis cogitatióne, verbo et
          ópere:
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Eu me confesso a
          Deus, todo poderoso, à bem-aventurada sempre Virgem Maria, ao
          bem-aventurado S. Miguel Arcanjo, ao bem-aventurado S. João Baptista,
          aos Santos Apóstolos S. Pedro e S. Paulo, a todos os santos, e a vós,
          Padre: que pequei muitas vezes por pensamentos, palavras e obras:
        </Typography>
      </Language>

      <Typography className="aside">Batendo três vezes no peito:</Typography>

      <Language>
        <Typography className="latin">
          <Typography className="latin">
            Mea culpa, mea culpa, mea máxima culpa.
          </Typography>
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">
            Por minha culpa, por minha culpa, por minha tão grande culpa.
          </Typography>
        </Typography>
        <Typography className="latin">
          Ideo precor beátam Maríam semper Vírginem, beátum Michǽlem
          Archángelum, beátum Joánnem Baptístam, sanctos Apóstolos Petrum et
          Paulum, omnes Sanctos, et te, pater, orare pro me ad Dóminum, Deum
          nostrum.
        </Typography>
        <Typography className="vernacular">
          Portanto rogo à bem-aventurada sempre Virgem Maria, ao bem-aventurado
          S. Miguel Arcanjo, ao bem-aventurado S. João Baptista, aos Santos
          Apóstolos S. Pedro e S. Paulo, a todos os Santos e a vós, Padre, que
          rogueis a Deus, nosso Senhor, por mim.
        </Typography>
      </Language>

      <Typography className="aside">
        Voltando-se para os fiéis, o Sacerdote dá a absolvição em voz alta:
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Misereátur vestri
          omnípotens Deus, et, dimíssis peccátis vestris, perdúcat vos ad vitam
          ætérnam.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Compadeça-se de vós
          o Senhor omnipotente; vos perdoe os pecados e guie até à vida eterna.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
      </Language>

      <Typography className="aside">Fazendo o Sinal da Cruz, diz:</Typography>

      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Indulgéntiam,{" "}
          <Typography className="cross"> ✠ </Typography> absolutionem et
          remissiónem peccatórum nostrórum tríbuat nobis omnípotens et
          miséricors Dóminus.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Que o Senhor{" "}
          <Typography className="cross"> ✠ </Typography> omnipotente e
          misericordioso nos conceda o perdão, a absolvição e a remissão dos
          nossos pecados.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
      </Language>

      <Typography className="aside">
        O Sacerdote volta-se para o altar, genuflecte e voltando-se para os
        fiéis ergue a Hóstia, dizendo:
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Ecce Agnus Dei, ecce
          qui tollit peccáta mundi.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Eis o Cordeiro de
          Deus; eis Aquele que tira os pecados do mundo.
        </Typography>
      </Language>

      <Typography className="aside">
        E em seguida, três vezes batendo no peito e dizendo:
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Dómine, non sum
          dignus, ut intres sub tectum meum: sed tantum dic verbo, et sanábitur
          ánima mea.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Senhor, eu não sou
          digno de que entreis na minha morada, mas dizei uma só palavra e a
          minha alma será salva.
        </Typography>
      </Language>

      <Typography className="aside">
        Estando convenientemente preparado aquele que quiser Comungar,
        aproximar-se-á do Comungatório, ajoelhando e recebendo a Divina Hóstia
        na língua. O Sacerdote diz a cada um dos comungantes:
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Corpus Dómini nostri
          Jesu Christi custódiat ánimam tuam in vitam ætérnam. Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Que o Corpo de nosso
          Senhor Jesus Cristo guarde a tua alma para a vida eterna. Amen.
        </Typography>
      </Language>

      <H3 text="Acção de Graças" />

      <H4 text="Abluções" />

      <Typography className="aside">
        O Sacerdote purifica primeiro o cálice e depois os dedos, e toma as
        abluções. Entretanto vai dizendo:
      </Typography>

      <Language>
        <Typography className="latin">
          Quod ore súmpsimus, Dómine, pura mente capiámus: et de munere
          temporáli fiat nobis remédium sempitérnum.
        </Typography>
        <Typography className="vernacular">
          Que conservemos com pureza de coração, Senhor, o que a boca acaba de
          receber; e que esta dádiva temporal se torne para nós remédio
          sempiterno.
        </Typography>
        <Typography className="latin">
          Corpus tuum, Dómine, quod sumpsi, et Sanguis, quem potávi, adhǽreat
          viscéribus meis: et præsta; ut in me non remáneat scélerum mácula,
          quem pura et sancta refecérunt sacraménta: Qui vivis et regnas in
          sǽcula sæculórum.. Amen.
        </Typography>
        <Typography className="vernacular">
          Senhor, que o vosso Corpo, que recebi, e o vosso sangue, que bebi, se
          unam intimamente ás minhas entranhas; dignai-Vos permitir, Senhor, que
          não fique em mim mancha alguma de pecado, agora que estou confortado
          com sacramentos tão puros e santos: Vós, que viveis e reinais em todos
          os séculos. Amen.
        </Typography>
      </Language>

      <Typography className="aside">
        Purifica o cálice e deixa-o, coberto, no meio do altar. Nas Missas
        solenes, é o subdiácono quem purifica o cálice e o leva para a
        credencia.
      </Typography>

      <H3 text="Comúnio do dia" />

      <Typography className="aside">
        O Sacerdote passa para o lado direito do altar, e recita a antífona da
        Comunhão.
      </Typography>

      {mass.map((i) => (
        <LinkCard key={i.id} mass={i} description="Comúnio" />
      ))}

      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography> Dóminus vobíscum.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>O Senhor esteja
          convosco.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Et cum spíritu tuo.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> E com vosso
          espírito.
        </Typography>
      </Language>

      <H3 text="Postcomúnio do dia" />

      {mass.map((i) => (
        <LinkCard key={i.id} mass={i} description="Postcomúnio" />
      ))}

      <H3 text="Despedida e Bênção" />

      <Typography className="aside">
        O Sacerdote volta ao meio do altar, beija-o, e, voltando-se para os
        fiéis saúda-os:
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography> Dóminus vobíscum.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>O Senhor esteja
          convosco.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Et cum spíritu tuo.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> E com vosso
          espírito.
        </Typography>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography> Ite, Missa est.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Ide-vos, acabou a
          Missa.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Deo grátias.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Graças a Deus.
        </Typography>
      </Language>

      <Typography className="aside">
        Se alguma acção litúrgica se segue à Missa, diz-se:
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography> Benedicámus Dómino.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Bendigamos o Senhor.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Deo Grátias.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Graças a Deus.
        </Typography>
      </Language>

      <Typography className="aside">Nas Missas dos Defuntos:</Typography>

      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography> Requiéscant in
          pace.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Que descansem em
          paz.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
      </Language>

      <Typography className="aside">
        Voltando-se para o altar, recita a seguinte oração:
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Pláceat tibi, sancta
          Trínitas, obséquium servitútis meæ: et præsta; ut sacrifícium, quod
          óculis tuæ majestátis indígnus óbtuli, tibi sit acceptábile, mihíque
          et ómnibus, pro quibus illud óbtuli, sit, te miseránte, propitiábile.
          Per Christum, Dóminum nostrum. Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Santíssima Trindade,
          seja-Vos agradável a homenagem da minha escravidão, a fim de que este
          sacrifício, que, ainda indignamente, ofereci à vossa divina majestade,
          seja aceite por Vós, e, pela vossa misericórdia, se torne
          propiciatório para mim e para todos aqueles por quem o ofereci. Por
          Cristo, Nosso Senhor. Amen.
        </Typography>
      </Language>

      <Typography className="aside">
        Beija o altar, volta-se para a assistência, e dá a bênção, dizendo:
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Benedícat vos
          omnípotens Deus, Pater, et Fílius,{" "}
          <Typography className="cross"> ✠ </Typography> et Spíritus Sanctus.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Que desça sobre vós
          a bênção do omnipotente Deus: Pai, e Filho,{" "}
          <Typography className="cross"> ✠ </Typography> e Espírito Santo.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
      </Language>

      <H3 text="Último Evangelho" />

      <Typography className="aside">
        O Sacerdote passa para o lado esquerdo do altar e recita, como último
        Evangelho, o princípio do Evangelho de S. João (que se omite na
        Quinta-feira Santa e na Vigília pascal).
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography> Dóminus vobíscum.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>O Senhor esteja
          convosco.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Et cum spíritu tuo.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> E com vosso
          espírito.
        </Typography>
      </Language>

      <Typography className="aside">
        Despois faz o sinal da Cruz na Sacra (ou no Missal) e na sua testa, boca
        e peito, dizendo:
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="cross"> ✠ </Typography> Initium sancti
          Evangélii secúndum Joánnem.
        </Typography>
        <Typography className="vernacular">
          <Typography className="cross"> ✠ </Typography> Princípio do santo
          Evangelho segundo S. João.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Glória tibi,
          Dómine.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Glória a Vós,
          Senhor.
        </Typography>
        <Typography className="latin">
          In princípio erat Verbum, et Verbum erat apud Deum, et Deus erat
          Verbum. Hoc erat in princípio apud Deum. Omnia per ipsum facta sunt:
          et sine ipso factum est nihil, quod factum est: in ipso vita erat, et
          vita erat lux hóminum: et lux in ténebris lucet, et ténebræ eam non
          comprehendérunt. Fuit homo missus a Deo, cui nomen erat Joánnes. Hic
          venit in testimónium, ut testimónium perhibéret de lúmine, ut omnes
          créderent per illum. Non erat ille lux, sed ut testimónium perhibéret
          de lúmine. Erat lux vera, quæ illúminat omnem hóminem veniéntem in
          hunc mundum. In mundo erat, et mundus per ipsum factus est, et mundus
          eum non cognóvit. In própria venit, et sui eum non recepérunt.
          Quotquot autem recepérunt eum, dedit eis potestátem fílios Dei fíeri,
          his, qui credunt in nómine ejus: qui non ex sanguínibus, neque ex
          voluntáte carnis, neque ex voluntáte viri, sed ex Deo nati sunt.{" "}
          <Typography className="em">(Hic genuflectitur)</Typography> Et Verbum
          caro factum est, et habitávit in nobis: et vídimus glóriam ejus,
          glóriam quasi Unigéniti a Patre, plenum grátiæ et veritátis.
        </Typography>
        <Typography className="vernacular">
          No princípio existia o Verbo, e o Verbo estava com Deus, e o Verbo era
          Deus. Este estava no princípio com Deus. Todas as coisas foram por Ele
          criadas, e nada daquilo que foi criado teria sido criado sem Ele.
          N’Ele havia vida, e a vida era a luz dos homens. A luz resplandeceu
          nas trevas, mas as trevas a não receberam. Apareceu um homem, mandado
          por Deus, e o seu nome era João, o qual veio como testemunha, para dar
          testemunho da luz, a fim de que por ele todos acreditassem. Ele não
          era a luz, mas aquele que havia de dar testemunho da luz. Existia a
          luz verdadeira, a luz que ilumina todo o homem que vem a este mundo.
          Ele estava no mundo, e o mundo, embora houvesse sido criado por Ele, O
          não conheceu. Veio ao que era seu, e os seus O não receberam. Porém,
          Ele a todos quantos O receberam e aos que acreditaram no seu nome deu
          o poder de serem filhos de Deus, os quais não nasceram do sangue, nem
          do desejo da carne, mas somente da vontade de Deus. E o Verbo fez-se
          carne <Typography className="em">(genuflecte-se)</Typography> e
          habitou entre nós; e contemplamos a sua glória, como era própria do
          Filho Unigénito do Pai, cheio de graça e de verdade.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Deo grátias.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Graças a Deus.
        </Typography>
      </Language>

      <H2 text="Orações Leoninas" />

      <LinkCard title="Orações Leoninas" href="/missal/oracoesleoninas" />
    </PageWrapper>
  );
}
