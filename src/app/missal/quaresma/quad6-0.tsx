import { Link } from "expo-router";
import { H1, H2, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PageQuad60() {
  return (
    <PageWrapper>
      <H1 text="Domingo dos Ramos" />

      <Typography className="aside">
        A liturgia de hoje exprime em duas cerimónias, uma cheia de alegria, a
        outra de tristeza, os dois aspectos sob os quais a Igreja considera a
        Cruz. Primeiramente, a bênção e procissão dos ramos, a transbordar de
        santa alegria que nos permite, após vinte séculos, reviver a cena
        grandiosa da entrada triunfal de Jesus em Jerusalém. Depois entra a
        Missa, cujos cânticos e leituras se referem exclusivamente à dolorosa
        lembrança da Paixão do Salvador.
      </Typography>

      <H2 text="Bênção dos Ramos" />

      <H3 text="Antífona" />

      <Language>
        <Typography className="latin">
          Hosánna fílio David: benedíctus, qui venit in nómine Dómini. O Rex
          Israël: Hosánna in excélsis.
        </Typography>
        <Typography className="vernacular">
          Hosana ao filho de David! Bendito seja o que vem em nome do Senhor. Ó
          Rei de Israel! Hosana no alto dos céus!
        </Typography>
      </Language>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, quem dilígere et amáre justítia est, ineffábilis grátiæ tuæ in
          nobis dona multíplica: et qui fecísti nos in morte Fílii tui speráre
          quæ crédimus; fac nos eódem resurgénte perveníre quo téndimus: Qui
          tecum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, a quem devemos amar para sermos justos, multiplicai na nossa
          alma os dons da vossa inefável graça; e, já que pela morte do vosso
          Filho quisestes que tivéssemos esperança no que constitui o objecto da
          nossa Fé, permiti que pela sua ressurreição alcancemos o fim a que
          aspiramos: O qual, sendo Deus...
        </Typography>
      </Language>

      <H3 text="Epístola" />

      <Typography className="em">Ex. 15, 27; 16, 1-7</Typography>

      <Language>
        <Typography className="latin">Léctio libri Exodi.</Typography>
        <Typography className="vernacular">Lição do Livro do Êxodo.</Typography>
        <Typography className="latin">
          In diébus illis: Venérunt fílii Israël in Elim, ubi erant duódecim
          fontes aquárum et septuagínta palmæ: et castrametáti sunt juxta aquas.
          Profectíque sunt de Elim, et venit omnis multitúdo filiórum Israël in
          desértum Sin, quod est inter Elim et Sínai: quintodécimo die mensis
          secúndi, postquam egréssi sunt de terra Ægýpti. Et murmurávit omnis
          congregátio filiórum Israël contra Móysen et Aaron in solitúdine.
          Dixerúntque fílii Israël ad eos: Utinam mórtui essëmus per manum
          Dómini in terra Ægýpti, quando sedebámus super oílas cárnium, et
          comedebámus panem in saturitáte: cur eduxístis nos in desértum istud,
          ut occiderétis omnem multitúdinem fame? Dixit autem Dóminus ad Móysen:
          Ecce, ego pluam vobis panes de cœlo: egrediátur pópulus, et cólligat
          quæ suffíciunt per síngulos dies: ut tentem eum, utrum ámbulet in lege
          mea an non. Die autem sexto parent quod ínferant: et sit duplum, quam
          collígere sciébant per síngulos dies. Dixerúntque Móyses et Aaron ad
          omnes fílios Israël: Véspere sciétis, quod Dóminus edúxerit vos de
          terra Ægýpti: et mane vidébitis glóriam Dómini.
        </Typography>
        <Typography className="vernacular">
          Naqueles dias, chegaram os filhos de Israel a Elim, onde havia doze
          nascentes de água e setenta palmeiras, tendo acampado junto das águas.
          Partiu, então, de Elim toda a multidão dos filhos de Israel, havendo
          chegado ao deserto de Sin, que é situado entre Elim e o Sinai, no dia
          15 do segundo mês, depois que saíram da terra do Egipto. Apenas
          chegaram, começaram todos a murmurar contra Moisés e Aarão por estarem
          no deserto, dizendo: «Oxalá tivéssemos sido mortos pela mão do Senhor,
          quando na terra do Egipto nos assentávamos em frente das caçarolas,
          cheias de carne, e tínhamos pão em abundância! Porque nos conduzistes
          a este deserto? Para aqui morrer de fome esta multidão?». Então o
          Senhor disse a Moisés: «Vou mandar chover pães do céu. Que o povo,
          pois, saia e recolha a quantidade necessária para cada dia, a fim de
          que verifique se procede ou não segundo a minha lei; porém, no sexto
          dia, prepararão o que tiverem recolhido, que será o duplo do que
          costumam recolher em cada um dos outros dias». Disseram, pois, Moisés
          e Aarão a todos os filhos de Israel: «Esta tarde reconhecereis que foi
          o Senhor quem vos livrou da terra do Egipto e amanhã vereis
          resplandecer a glória do Senhor».
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography>{" "}
          <Typography className="em">Joann. 11, 47-49, 50 & 53</Typography>{" "}
          Collegérunt pontífices et pharisǽi concílium, et dixérunt: Quid
          fácimus, quia hic homo multa signa facit? Si dimíttimus eum sic, omnes
          credent in eum: Et vénient Románi, et tollent nostrum locum et gentem.
          <Typography className="versicle"> ℣. </Typography>
          Unus autem ex illis, Cáiphas nómine, cum esset póntifex anni illíus,
          prophetávit dicens: Expedit vobis, ut unus moriátur homo pro pópulo,
          et non tota gens péreat. Ab illo ergo die cogitavérunt interfícere
          eum, dicéntes. Et vénient...
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography>{" "}
          <Typography className="em">Jo. 11, 47-49, 50 & 53</Typography> Os
          pontífices e os fariseus reuniram-se em conselho e disseram: «Que
          faremos? Este homem faz muitos prodígios. Se o deixamos andar
          livremente, todos acreditarão n’Ele. E virão os romanos, e destruirão
          a nossa terra e o nosso povo».
          <Typography className="versicle"> ℣. </Typography>Mas um deles,
          chamado Caifás, que era o Pontífice naquele ano, disse profeticamente:
          «É melhor que morra um só homem pelo povo, do que pereça toda a
          nação». Desde aquele dia, pois, resolveram matá-l’O, dizendo: «E virão
          os romanos…»
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography>{" "}
          <Typography className="em">Mt. 28, 39 & 41</Typography> In monte
          Olivéti orávit ad Patrem: Pater, si fíeri potest, tránseat a me calix
          iste. Spíritus quidem promptus est, caro autem infírma: fiat volúntas
          tua.
          <Typography className="versicle"> ℣. </Typography>Vigiláte et oráte,
          ut non intrétis in tentatiónem. Spíritus quidem...
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography>{" "}
          <Typography className="em">Mt. 28, 39 & 41</Typography> No monte das
          Oliveiras orou a seu Pai: Meu pai, se é possível, afastai de mim este
          cálice! Na verdade, o espírito está pronto: mas a carne é fraca;
          contudo, faça-se a vossa vontade.
          <Typography className="versicle"> ℣. </Typography>Vigiai e orai, para
          não cairdes em tentação. Na verdade...
        </Typography>
      </Language>

      <H3 text="Evangelho" />

      <Typography className="em">Mt. 21, 1-9</Typography>

      <Language>
        <Typography className="latin">
          <Typography className="cross"> ✠ </Typography> Sequéntia sancti
          Evangélii secúndum Matthǽum.
        </Typography>
        <Typography className="vernacular">
          <Typography className="cross"> ✠ </Typography> Continuação do santo
          Evangelho segundo S. Mateus.
        </Typography>
        <Typography className="latin">
          In illo témpore: Cum appropinquásset Jesus Jerosólymis, et venísset
          Béthphage ad montem Olivéti: tunc misit duos discípulos suos, dicens
          eis: Ite in castéllum, quod contra vos est, et statim inveniétis
          ásinam alligátam et pullum cum ea: sólvite et addúcite mihi: et si
          quis vobis áliquid dixerit, dícite, quia Dóminus his opus habet, et
          conféstim dimíttet eos. Hoc autem totum factum est, ut adimplerétur,
          quod dictum est per Prophétam, dicéntem: Dícite fíliae Sion: Ecce, Rex
          tuus venit tibi mansuétus, sedens super ásinam et pullum, fílium
          subjugális. Eúntes autem discípuli, fecérunt, sicut præcépit illis
          Jesus. Et adduxérunt ásinam et pullum: et imposuérunt super eos
          vestiménta sua, et eum désuper sedére tecérunt. Plúrima autem turba
          stravérunt vestiménta sua in via: álii autem cædébant ramos de
          arbóribus, et sternébant in via: turbæ autem, quæ præcedébant et quæ
          sequebántur, clamábant, dicéntes: Hosánna fílio David: benedíctus, qui
          venit in nómine Dómini.
        </Typography>
        <Typography className="vernacular">
          Naquele tempo, como Jesus se aproximasse de Jerusalém e chegasse a
          Bétfage, já perto do monte das Oliveiras, mandou dois dos seus
          discípulos, dizendo-lhes: «Ide à aldeia fronteira e lá encontrareis
          uma jumenta presa e com ela um jumentinho. Desprendei-a e trazei-os.
          Se alguém vos disser alguma coisa, respondei: «O Senhor precisa
          deles». E logo os deixarão trazer». Tudo isto aconteceu para se
          cumprir o que fora anunciado pelo Profeta: «Dizei à filha de Sião:
          «Eis o teu Rei, que vem a ti com doçura, montado em uma jumenta e
          sobre um jumentinho, filho da que está sob o jugo». Foram os
          discípulos e fizeram tudo como Jesus lhes ordenara, trazendo a jumenta
          e o jumentinho. Então puseram em cima deles as suas capas e
          fizeram-n’O montar. Ora a multidão, que era numerosa, estendia as suas
          capas na estrada e cortava ramos das árvores, com que atapetava o
          caminho. E os da multidão, tanto os que O precediam, como os que O
          seguiam, clamavam: «Hosana ao Filho de David! Bendito seja o que vem
          em nome do Senhor!».
        </Typography>
      </Language>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Auge fidem in te sperántium, Deus, et súpplicum preces cleménter
          exáudi: véniat super nos múltiplex misericórdia tua: bene{" "}
          <Typography className="cross"> ✠ </Typography> dicántur et hi pálmites
          palmárum seu olivárum: et sicut in figúra Ecclésiæ multiplicásti Noë
          egrediéntem de arca, et Móysen exeúntem de Ægýpto cum fíliis Israël:
          ita nos, portántes palmas et ramos olivárum, bonis áctibus occurrámus
          óbviam Christo: et per ipsum in gáudium introëámus ætérnum: Qui
          tecum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, aumentai a fé daqueles que esperam em Vós e ouvi clemente as
          suas súplicas. Permiti que a vossa misericórdia desça sobre nós;
          dignai-Vos abençoar estes Ramos de palmeira e de oliveira; e, assim
          como, querendo figurar a Igreja, multiplicastes as vossas graças sobre
          Noé, saindo da arca, e sobre Moisés, saindo do Egipto com os filhos de
          Israel, assim também permiti que, levando nós estas palmas e Ramos de
          oliveira, caminhemos ao encontro de Cristo pelas nossas boas obras; e
          que com Ele entremos na alegria eterna: Ele que, sendo Deus...
        </Typography>
      </Language>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Pétimus, Dómine sancte, Pater omnípotens, ætérne Deus: ut hanc
          creatúram olívæ, quam ex ligni matéria prodíre jussísti, quamque
          colúmba rédiens ad arcam próprio pértulit ore, bene{" "}
          <Typography className="cross"> ✠ </Typography> dícere et sancti{" "}
          <Typography className="cross"> ✠ </Typography> ficáre dignéris: ut,
          quicúmque ex ea recéperint, accípiant sibi protectiónem ánimæ et
          córporis: fiátque, Dómine, nostræ salútis remédium tuæ grátiæ
          sacraméntum. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Vos imploramos, Senhor santo, Pai omnipotente, eterno Deus, que Vos
          digneis <Typography className="cross"> ✠ </Typography> abençoar e
          <Typography className="cross"> ✠ </Typography> santificar estes Ramos
          de oliveira, vossa Criatura, que fizestes nascer na árvore,
          semelhantes ao que a pomba levava no bico quando regressou à arca.
          Permiti que aqueles que receberam estes Ramos obtenham a vossa
          protecção na alma e no corpo; e que estes Ramos, Senhor, que são um
          sinal da vossa graça, se convertam em remédio eficaz para as nossas
          enfermidades. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui dispérsa cóngregas, et congregáta consérvas: qui pópulis,
          óbviam Jesu ramos portántibus, benedixísti: béne{" "}
          <Typography className="cross"> ✠ </Typography> dic étiam hos ramos
          palmæ et olívæ, quos tui fámuli ad honórem nóminis tui fidéliter
          suscípiunt; ut, in quemcúmque locum introdúcti fúerint, tuam
          benedictiónem habitatóres loci illíus consequántur: et, omni
          adversitáte effugáta, déxtera tua prótegat, quos rédemit Jesus
          Christus, Fílius tuus, Dóminus noster: Qui tecum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que reunis o que está disperso, e, depois de reunido, o
          conservais, Vós, que abençoastes o povo que saiu com ramos ao encontro
          de Jesus, abençoai <Typography className="cross"> ✠ </Typography>,
          também, estes Ramos de palmeira e de oliveira, que os vossos fiéis
          servos vão receber em honra do vosso nome, a fim de que, em qualquer
          lugar em que sejam colocados, aqueles que habitarem nesse lugar
          consigam a vossa bênção, e, afastada toda a adversidade, a vossa
          dextra proteja os que foram remidos por Jesus Cristo, vosso Filho,
          nosso Senhor: O qual, sendo Deus...
        </Typography>
      </Language>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui miro dispositiónis órdine, ex rebus étiam insensibílibus,
          dispensatiónem nostræ salútis osténdere voluísti: da, quǽsumus; ut
          devota tuórum corda fidélium salúbriter intéllegant, quid mýstice
          desígnet in facto, quod hódie, cœlésti lúmine affláta, Redemptóri
          óbviam procédens, palmárum atque olivárum ramos vestígiis ejus turba
          substrávit. Palmárum igitur rami de mortis príncipe triúmphos
          exspéctant; súrculi vero olivárum spirituálem unctiónem advenísse
          Quodámmodo clamant. Intelléxit enim jam tunc illa hóminum beáta
          multitúdo præfigurári: quia Redémptor noster, humánis cóndolens
          misériis, pro totíus mundi vita cum mortis príncipe esset pugnatúrus
          ac moriéndo triumphatúrus. Et ídeo tália óbsequens administrávit, quæ
          in illo ei triúmphos victóriæ et misericórdiæ pinguédinem declarárent.
          Quod nos quoque plena fide, et factum et significátum retinéntes, te,
          Dómine sancte, Pater omnípotens, ætérne Deus, per eúndem Dóminum
          nostrum Jesum Christum supplíciter exorámus: ut in ipso atque per
          ipsum, cujus nos membra fíeri voluísti, de mortis império victóriam
          reportántes, ipsíus gloriósæ resurrectiónis partícipes esse mereámur:
          Qui tecum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que por um maravilhoso desígnio da vossa providência quisestes
          utilizar-Vos das coisas mesmo insensíveis para mostrar a admirável
          economia da nossa salvação, ilustrai, Vos imploramos, os corações dos
          vossos fiéis servos, para que compreendam salutarmente o mystério
          apresentado na acção daquele povo que, levado por inspiração
          celestial, caminhou neste dia ao encontro do Redentor e atapetou com
          ramos de palmeira e de oliveira o caminho por onde Ele devia passar.
          Com efeito, os ramos de palmeira significavam a vitória que ia
          alcançar sobre o príncipe da morte e os de oliveira publicavam, de
          certo modo, a união espiritual que ia ser espalhada. Esta feliz
          multidão de homens pressentiu, então, que o nosso Redentor, comovido
          com as misérias da humanidade, ia travar combate com o príncipe da
          morte, para dar a vida ao mundo inteiro, e que Ele triunfaria pela sua
          própria morte. Por isso, o povo ofereceu ao Senhor a homenagem destes
          Ramos, dos quais uns significavam a vitória e o triunfo e os outros a
          efusão da sua misericórdia. Nós, pois, que possuímos a plenitude da
          fé, vendo neste acontecimento não só o facto mas ainda a significação,
          Vos pedimos, Senhor santo, Pai omnipotente, Deus eterno, pelo mesmo N.
          S. Jesus Cristo, de quem houvestes por graça fazer-nos membros, que
          n’Ele e por Ele triunfemos do império da morte e sejamos dignos de
          participar da sua gloriosa ressurreição: O qual...
        </Typography>
      </Language>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui, per olívæ ramum, pacem terris colúmbam nuntiáre jussísti:
          præsta, quǽsumus; ut hos olívæ ceterarúmque arbórum ramos cœlésti bene{" "}
          <Typography className="cross"> ✠ </Typography> dictióne sanctífices:
          ut cuncto pópulo tuo profíciant ad salútem. Per Christum, Dóminum
          nostrum. <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que quisestes que uma pomba anunciasse a paz ao mundo com um
          ramo de Oliveira, dignai-Vos santificar com vossa bênção{" "}
          <Typography className="cross"> ✠ </Typography> celestial, Vos pedimos,
          estes Ramos de oliveira e doutras árvores, a fim de que sirva de
          proveito a todo vosso povo para sua salvação. Por Cristo, nosso
          Senhor. <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
      </Language>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Bene <Typography className="cross"> ✠ </Typography> dic, quǽsumus,
          Dómine, hos palmárum seu olivárum ramos: et præsta; ut, quod pópulus
          tuus in tui veneratiónem hodiérna die corporáliter agit, hoc
          spirituáliter summa devotióne perfíciat, de hoste victóriam reportándo
          et opus misericórdiæ summópere diligéndo. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Abençoai <Typography className="cross"> ✠ </Typography>, Senhor, Vos
          imploramos, estes Ramos de palmeira e de oliveira, e concedei ao vosso
          povo a graça de realizar espiritualmente com ardente devoção a
          cerimónia exterior que hoje pratica em vossa honra; e que, triunfando
          do inimigo por meio dela, corresponda com amor à misericordiosa obra
          por Vós realizada para sua salvação. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui Fílium tuum Jesum Christum, Dóminum nostrum, pro salute
          nostra in hunc mundum misísti, ut se humiliáret ad nos et nos
          revocáret ad te: cui etiam, dum Jerúsalem veniret, ut adimpléret
          Scripturas, credentium populorum turba, fidelissima devotione,
          vestimenta sua cum ramis palmarum in via sternébant: præsta, quǽsumus;
          ut illi fídei viam præparémus, de qua, remoto lápide offensiónis et
          petra scándali, fróndeant apud te ópera nostra justítiæ ramis: ut ejus
          vestigia sequi mereámur: Qui tecum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que para nossa salvação enviastes a este mundo o vosso Filho,
          N. S. Jesus Cristo, a fim de que, humilhando-se Ele até nós, nos faça
          subir até Vós; e que quisestes, para se cumprirem as Escrituras, que,
          ao entrar Ele em Jerusalém, uma turba de povo fiel, cheia de sincera
          piedade, estendesse os seus vestidos e ramos de palmeira à sua
          passagem, concedei-nos a graça, Vos imploramos, de Lhe prepararmos
          pela fé um caminho onde não haja pedra, nem de tropeço, nem de
          escândalo, a fim de que das nossas acções brotem junto de Vós ramos de
          justiça, de sorte que mereçamos seguir os vestígios d’Aquele que,
          sendo Deus...
        </Typography>
      </Language>

      <H2 text="Distribuição dos Ramos" />

      <H3 text="Antífona" />

      <Typography className="em">Jo. 12, 13</Typography>

      <Language>
        <Typography className="latin">
          Pueri Hebræórum, portántes ramos olivárum, obviavérunt Dómino,
          clamántes et dicéntes: Hosánna in excélsis.
        </Typography>
        <Typography className="vernacular">
          Os meninos hebreus saíram com ramos de oliveira ao encontro do Senhor,
          clamando e dizendo: «Hosana no alto dos céus!».
        </Typography>
      </Language>

      <H3 text="Antífona" />

      <Typography className="em">Mt. 21, 8 & 9</Typography>

      <Language>
        <Typography className="latin">
          Pueri Hebræórum vestiménta prosternébant in via et clamábant,
          dicéntes: Hosánna fílio David: benedíctus, qui venit in nómine Dómini.
        </Typography>
        <Typography className="vernacular">
          Os meninos hebreus estendiam os seus vestidos pelos caminhos, clamando
          e dizendo: «Hosana ao Filho de David! Bendito seja o que vem em nome
          do Senhor!».
        </Typography>
      </Language>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Omnípotens sempitérne Deus, qui Dóminum nostrum Jesum Christum super
          pullum ásinæ sedére fecísti, et turbas populórum vestiménta vel ramos
          arbórum in via stérnere et Hosánna decantáre in laudem ipsíus
          docuísti: da, quǽsumus; ut illórum innocéntiam imitári póssimus, et
          eórum méritum cónsequi mereámur. Per eúndem Christum, Dóminum nostrum.{" "}
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          Omnipotente e eterno Deus, que enviastes a turba do povo ao encontro
          de N. S. Jesus Cristo, montado em um jumentinho, e que quisestes que
          ela estendesse seus vestidos, lançasse ramos de árvores no caminho e
          cantasse hosanas em seu louvor, concedei-nos a graça, Vos suplicamos,
          de imitar a inocência dessa turba e de ter parte nos seus
          merecimentos. Pelo mesmo nosso Senhor Jesus Cristo.{" "}
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
      </Language>

      <H2 text="Procissão dos Ramos" />

      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography> Procedámus in pace.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography> Caminhemos em paz.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> In nómine Christi.
          Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Em nome de Cristo.
          Amen.
        </Typography>
      </Language>

      <H3 text="Antífona" />

      <Typography className="em">Mt. 21, 1-3, 7, 8 & 9</Typography>

      <Language>
        <Typography className="latin">
          Cum appropinquáret Dóminus Jerosólymam, misit duos ex discípulis suis,
          dicens: Ite in castéllum, quod contra vos est: et inveniétis pullum
          ásinæ alligátum, super quem nullus hóminum sedit: sólvite et addúcite
          mihi. Si quis vos interrogáverit, dícite: Opus Dómino est. Solvéntes
          adduxérunt ad Jesum: et imposuérunt illi vestiménta sua, et sedit
          super eum: alii expandébant vestiménta sua in via: alii ramos de
          arbóribus sternébant: et qui sequebántur, clamábant: Hosánna,
          benedíctus, qui venit in nómine Dómini: benedíctum regnum patris
          nostri David: Hosánna in excélsis: miserére nobis, fili David.
        </Typography>
        <Typography className="vernacular">
          Quando o Senhor se aproximava de Jerusalém, mandou dois discípulos,
          dizendo-lhes: «Ide à aldeia fronteira e lá encontrareis preso um
          jumentinho, em o qual ninguém montou ainda. Desprendei-o e trazei-mo.
          Se alguém vos disser alguma coisa, respondei: «O Senhor precisa dele».
          Havendo-o desprendido, trouxeram-no a Jesus. Então, puseram as suas
          capas em cima do jumentinho e fizeram Jesus montá-lo. E alguns da
          multidão estendiam os vestidos no caminho, outros espalhavam ramos de
          árvores e todos que O acompanhavam clamavam: «Bendito seja o que vem
          em nome do Senhor! Bendito seja o reino de David, nosso Pai! Hosana no
          alto dos céus! Tende piedade de nós, Filho de David!».
        </Typography>
      </Language>

      <H3 text="Antífona" />

      <Typography className="em">Jo. 12, 12 & 13</Typography>

      <Language>
        <Typography className="latin">
          Cum audísset pópulus, quia Jesus venit Jerosólymam, accepérunt ramos
          palmárum: et exiérunt ei óbviam, et clamábant púeri, dicéntes: Hic
          est, qui ventúrus est in salútem pópuli. Hic est salus nostra et
          redémptio Israël. Quantus est iste, cui Throni et Dominatiónes
          occúrrunt! Noli timére, fília Sion: ecce, Rex tuus venit tibi, sedens
          super pullum ásinæ, sicut scriptum est, Salve, Rex, fabricátor mundi,
          qui venísti redímere nos.
        </Typography>
        <Typography className="vernacular">
          Havendo o povo sabido que Jesus vinha a Jerusalém, empunhou ramos de
          palmeiras e foi ao seu encontro. Os meninos clamavam, então: «Eis
          Aquele que vem salvar o seu povo! Este é a nossa salvação e a redenção
          de Israel! Como é grande Aquele diante de quem os Tronos e as
          Dominações se curvam para O receberem! Nada temas, ó filha de Sião,
          eis o teu Rei, que chega montado num jumentinho, como está escrito.
          Salve, ó Rei, criador do mundo, que viestes à terra para nos
          resgatar!».
        </Typography>
      </Language>

      <H3 text="Antífona" />

      <Language>
        <Typography className="latin">
          Ante sex dies sollémnis Paschæ, quando venit Dóminus in civitátem
          Jerúsalem, occurrérunt ei pueri: et in mánibus portábant ramos
          palmárum, et clamábant voce magna, dicéntes: Hosánna in excélsis:
          benedíctus, qui venísti in multitúdine misericórdiæ tuæ: Hosánna in
          excélsis.
        </Typography>
        <Typography className="vernacular">
          Seis dias antes da solenidade pascal, quando o Senhor veio à cidade de
          Jerusalém, saíram-lhe ao encontro os meninos, que empunhavam ramos de
          palmeiras e clamavam com voz forte: «Hosana no alto dos céus! Sede
          bendito; pois vindes a nós com a grandeza da vossa misericórdia!
          Hosana no alto dos céus!».
        </Typography>
      </Language>

      <H3 text="Antífona" />

      <Language>
        <Typography className="latin">
          Occúrrunt turbæ cum flóribus et palmis Redemptóri óbviam: et victóri
          triumphánti digna dant obséquia: Fílium Dei ore gentes prǽdicant: et
          in laudem Christi voces tonant per núbila: Hosánna in excélsis.
        </Typography>
        <Typography className="vernacular">
          As turbas do povo foram com flores e palmas ao encontro do Redentor,
          prestando-Lhe homenagem digna, como vencedor triunfante. Os povos
          anunciam hoje a grandeza do Filho de Deus. Reboam pelos ares as
          aclamações em honra de Cristo! Hosana no alto dos céus!
        </Typography>
      </Language>

      <H3 text="Antífona" />

      <Language>
        <Typography className="latin">
          Cum Angelis et púeris fidéles inveniántur, triumphatóri mortis
          damántes: Hosánna in excélsis.
        </Typography>
        <Typography className="vernacular">
          Fiéis, unamo-nos aos Anjos e aos meninos e aclamemos o triunfador da
          morte, dizendo: «Hosana no alto dos céus!».
        </Typography>
      </Language>

      <H3 text="Antífona" />

      <Language>
        <Typography className="latin">
          Turba multa, quæ convénerat ad diem festum, clamábat Dómino:
          Benedíctus, qui venit in nómine Dómini: Hosánna in excélsis.
        </Typography>
        <Typography className="vernacular">
          Uma grande turba de povo, que viera à festa, foi ao encontro do
          Senhor, clamando: Bendito o que vem em nome do Senhor! Hosana no alto
          dos céus!
        </Typography>
      </Language>

      <Language>
        <Typography className="latin">
          Glória, laus et honor tibi sit, Rex Christe, Redémptor: Cui pueríle
          decus prompsit Hosánna pium.
        </Typography>
        <Typography className="vernacular">
          Glória, louvor e honra Vos sejam dados, ó Cristo, Rei e Redentor! A
          quem a devoção dos meninos consagrou pios aplausos.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Glória, laus &
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Glória, louvor &
        </Typography>
        <Typography className="latin">
          Israël es tu Rex, Davidis et ínclita proles: Nómine qui in Dómini, Rex
          benedícte, venis.
        </Typography>
        <Typography className="vernacular">
          Sois o Rei de Israel, da ínclita prole de David, ó Rei bendito, que
          vindes em nome do Senhor!
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Glória, laus &
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Glória, louvor &
        </Typography>
        <Typography className="latin">
          Cœtus in excélsis te laudat cǽlicus omnis, Et mortális homo, et cuncta
          creáta simul.
        </Typography>
        <Typography className="vernacular">
          A multidão angelical, no alto dos céus, o homem mortal e todas as
          criaturas cantam em uníssono os vossos louvores.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Glória, laus &
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Glória, louvor &
          Plebs Hebrǽa tibi cum palmis óbvia venit:
        </Typography>
        <Typography className="latin">
          Cum prece, voto, hymnis, ádsumus ecce tibi.
        </Typography>
        <Typography className="vernacular">
          O povo hebreu saiu ao vosso encontro com palmas. E nós vimos diante de
          Vós com súplicas, votos e hinos.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Glória, laus &
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Glória, louvor &
        </Typography>
        <Typography className="latin">
          Hi tibi passúro solvébaní múnia laudis: Nos tibi regnánti pángimus
          ecce melos.
        </Typography>
        <Typography className="vernacular">
          Quando o povo Vos prestou homenagem, Vós íeis sofrer. E nós Vos
          oferecemos estes cânticos, agora, que reinais no céu.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Glória, laus &
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Glória, louvor &
        </Typography>
        <Typography className="latin">
          Hi placuére tibi, pláceat devótio nostra: Rex bone, Rex clemens, cui
          bona cuncta placent.
        </Typography>
        <Typography className="vernacular">
          Tais votos foram aceites. Que a nossa devoção o seja também, ó Rei de
          bondade, ó Rei de clemência, a quem agrada tudo quanto é bom.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Glória, laus &
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Glória, louvor &
        </Typography>
      </Language>

      <H3 text="Responsório" />

      <Language>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Ingrediénte Dómino
          in sanctam civitátem, Hebræórum púeri resurrectiónem vitæ
          pronuntiántes. Cum ramis palmárum: Hosánna, clamábant, in excélsis.
          <Typography className="versicle"> ℣. </Typography>Cum audísset
          pópulus, quod Jesus veníret Jerosólymam, exiérunt óbviam ei. Cum ramis
          palmárum: Hosánna, clamábant, in excélsis.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Quando o Senhor
          entrava na cidade santa, os meninos hebreus anunciavam antecipadamente
          a ressurreição d’Aquele que é a vida. * Empunhando ramos de palmeira,
          clamavam: «Hosana no alto dos céus!».
          <Typography className="versicle"> ℣. </Typography>E, tendo o povo
          notícia de que Jesus vinha a Jerusalém, saiu ao seu encontro.
          Empunhando ramos de palmeira, clamava: «Hosana no alto dos céus!».
        </Typography>
      </Language>

      <H2 text="Missa de Domingo de Ramos" />

      <H3 text="Intróito" />

      <Typography className="em">Sl. 21, 20 & 22</Typography>

      <Language>
        <Typography className="latin">
          Dómine, ne longe fácias auxílium tuum a me, ad defensiónem meam
          áspice: líbera me de ore leonis, et a córnibus unicórnium humilitátem
          meam. <Typography className="latin">Ps. ibid., 2</Typography> Deus,
          Deus meus, réspice in me: quare me dereliquísti? longe a salúte mea
          verba delictórum meórum.
        </Typography>
        <Typography className="vernacular">
          Senhor, não afasteis de mim o vosso auxílio; apressai-Vos em
          defender-me. Livrai-me da boca do leão e das pontas dos unicórnios,
          pois sou fraco.{" "}
          <Typography className="vernacular">Sl. ibid., 2</Typography> Meu Deus,
          meu Deus, lançai para mim vossos olhares. Porque me abandonastes? O
          clamor dos meus pecados afastou de mim a salvação.
        </Typography>
      </Language>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Omnípotens sempitérne Deus, qui humáno generi, ad imitandum
          humilitátis exémplum, Salvatórem nostrum carnem súmere et crucem
          subíre fecísti: concéde propítius; ut et patiéntiæ ipsíus habére
          documénta et resurrectiónis consórtia mereámur. Per eúndem Dóminum
          nostrum...
        </Typography>
        <Typography className="vernacular">
          Deus omnipotente e eterno, que, para dar ao género humano exemplo de
          humildade a imitar, quisestes que o Salvador assumisse a nossa carne e
          sofresse o suplício da Cruz, concedei-nos benigno a graça de seguirmos
          as lições da sua paciência para merecermos comparticipar da sua
          ressurreição. Pelo mesmo...
        </Typography>
      </Language>

      <H3 text="Epístola" />

      <Typography className="em">Fl. 2, 5-11</Typography>

      <Language>
        <Typography className="latin">
          Léctio Epístolæ beáti Pauli Apóstoli ad Philippénses.
        </Typography>
        <Typography className="vernacular">
          Lição da Ep.ª do B. Ap.º Paulo aos Filipenses.
        </Typography>
        <Typography className="latin">
          Fratres: Hoc enim sentíte in vobis, quod et in Christo Jesu: qui, cum
          in forma Dei esset, non rapínam arbitrátus est esse se æqualem Deo:
          sed semetípsum exinanívit, formam servi accípiens, in similitúdinem
          hóminum factus, et hábitu invéntus ut homo. Humiliávit semetípsum,
          factus obœdiens usque ad mortem, mortem autem crucis. Propter quod et
          Deus exaltávit illum: ei donávit illi nomen, quod est super omne
          nomen: <Typography className="em">(hic genuflectitur)</Typography> ut
          in nómine Jesu omne genu flectátur cœléstium, terréstrium et inférno
          rum: et omnis lingua confiteátur, quia Dóminus Jesus Christus in
          glória est Dei Patris.
        </Typography>
        <Typography className="vernacular">
          Meus irmãos: Tende os mesmos sentimentos que animaram Jesus Cristo, o
          qual, embora fosse Deus por natureza (e não era usurpação o julgar-se
          igual a Deus), contudo humilhou-se a si próprio, reduzindo-se à
          condição de servo, tornando-se semelhante aos homens e reconhecido
          como homem pelas aparências. Humilhou-se a si próprio, obedecendo até
          à morte, e morte na cruz. Por isso Deus O exaltou e deu-Lhe um nome
          que é superior a todo o nome{" "}
          <Typography className="em">(devemos genuflectir)</Typography> para que
          ao ser proferido o nome de Jesus todos os joelhos se dobrem nos céus,
          na terra e até nos infernos; e todas as línguas confessem que Nosso
          Senhor Jesus Cristo está na glória de Deus Pai!
        </Typography>
      </Language>

      <H3 text="Gradual" />

      <Typography className="em">Sl. 72, 24 et 1-3</Typography>

      <Language>
        <Typography className="latin">
          Tenuísti manum déxteram meam: et in voluntáte tua deduxísti me: et cum
          glória assumpsísti me.
          <Typography className="versicle"> ℣. </Typography>
          Quam bonus Israël Deus rectis corde! mei autem pæne moti sunt pedes:
          pæne effúsi sunt gressus mei: quia zelávi in peccatóribus, pacem
          peccatórum videns.
        </Typography>
        <Typography className="vernacular">
          Apoiastes-me com vossa dextra; conduzistes-me segundo a vossa vontade;
          e elevastes-me com glória.
          <Typography className="versicle"> ℣. </Typography>Como o Deus de
          Israel é bom para os que possuem coração recto! Meus pés estiveram
          vacilantes; estive quase a cair, pois eu olhava com indignação para os
          ímpios, vendo a paz que gozavam os pecadores.
        </Typography>
      </Language>

      <H3 text="Trato" />

      <Typography className="em">Sl. 21, 2-9, 18, 19, 22, 24 & 32</Typography>

      <Language>
        <Typography className="latin">
          Deus, Deus meus, réspice in me: quare me dereliquísti?
          <Typography className="versicle"> ℣. </Typography>Longe a salúte mea
          verba delictórum meórum.
          <Typography className="versicle"> ℣. </Typography>Deus meus, clamábo
          per diem, nec exáudies: in nocte, et non ad insipiéntiam mihi.
          <Typography className="versicle"> ℣. </Typography>Tu autem in sancto
          hábitas, laus Israël.
          <Typography className="versicle"> ℣. </Typography>In te speravérunt
          patres nostri: speravérunt, et liberásti eos.
          <Typography className="versicle"> ℣. </Typography>Ad te clamavérunt,
          et salvi facti sunt: in te speravérunt, et non sunt confusi.
          <Typography className="versicle"> ℣. </Typography>Ego autem sum
          vermis, et non homo: oppróbrium hóminum et abjéctio plebis.
          <Typography className="versicle"> ℣. </Typography>Omnes, qui vidébant
          me, aspernabántur me: locúti sunt lábiis et movérunt caput.
          <Typography className="versicle"> ℣. </Typography>Sperávit in Dómino,
          erípiat eum: salvum fáciat eum, quóniam vult eum.
          <Typography className="versicle"> ℣. </Typography>Ipsi vero
          consideravérunt et conspexérunt me: divisérunt sibi vestiménta mea, et
          super vestem meam misérunt mortem.
          <Typography className="versicle"> ℣. </Typography>Líbera me de ore
          leónis: et a córnibus unicórnium humilitátem meam.
          <Typography className="versicle"> ℣. </Typography>Qui timétis Dóminum,
          laudáte eum: univérsum semen Jacob, magnificáte eum.
          <Typography className="versicle"> ℣. </Typography>
          Annuntiábitur Dómino generátio ventúra: et annuntiábunt cœli justítiam
          ejus.<Typography className="versicle"> ℣. </Typography>Pópulo, qui
          nascétur, quem fecit Dóminus.
        </Typography>
        <Typography className="vernacular">
          Meu Deus, meu Deus, olhai para mim: Porque me abandonastes?
          <Typography className="versicle"> ℣. </Typography>O clamor dos meus
          pecados afastou de mim a salvação.
          <Typography className="versicle"> ℣. </Typography>
          Meu rei durante o dia e não me ouvi Deus, clama reis; clamarei durante
          a noite e não acharei consolação.
          <Typography className="versicle"> ℣. </Typography>Contudo, sois a
          glória de Israel e habitais no santuário.
          <Typography className="versicle"> ℣. </Typography>Os nossos pais
          esperaram em Vós: esperaram e fostes o seu libertador!
          <Typography className="versicle"> ℣. </Typography>Clamaram por Vós, e
          foram salvos; confiaram em Vós e não foram iludidos.
          <Typography className="versicle"> ℣. </Typography>Porém sou um verme e
          não um homem; sou o opróbrio dos homens, a irrisão do povo!
          <Typography className="versicle"> ℣. </Typography>Todos quantos me
          vêem, enchem-me de injúrias, murmuram de mim, abanando a cabeça e
          dizendo:
          <Typography className="versicle"> ℣. </Typography>«Esperou no Senhor;
          pois que venha salvá-l’O, já que O ama».
          <Typography className="versicle"> ℣. </Typography>Olharam para mim e
          desprezaram-me; repartiram entre si os meus vestidos e lançaram sortes
          sobre a minha túnica.
          <Typography className="versicle"> ℣. </Typography>
          Livrai-me, Senhor, da boca do leão e das pontas dos unicórnios, pois
          sou fraco.<Typography className="versicle"> ℣. </Typography>Louvai o
          Senhor, ó Vós, que O temeis! Cantai louvores em sua honra, ó filhos de
          Jacob.
          <Typography className="versicle"> ℣. </Typography>À geração futura
          será anunciado o Senhor; os céus proclamarão a sua justiça.
          <Typography className="versicle"> ℣. </Typography>Ao povo, que há-de
          nascer, ensinarão que o Senhor O fez aparecer.
        </Typography>
      </Language>

      <H3 text="Evangelho" />

      <Typography className="em">Mt. 26, 1-75; 27, 1-66</Typography>

      <Language>
        <Typography className="latin">
          <Typography className="cross"> ✠ </Typography> Passio Dómini nostri
          Jesu Christi secúndum Matthǽum.
        </Typography>
        <Typography className="vernacular">
          <Typography className="cross"> ✠ </Typography> Paixão de Nosso Senhor
          Jesus Cristo, segundo S. Mateus.
        </Typography>
        <Typography className="latin">
          In illo témpore: Dixit Jesus discípulis suis:{" "}
          <Typography className="cross"> ✠ </Typography> Scitis, quid post
          bíduum Pascha fiet, et Fílius hóminis tradétur, ut crucifigátur.{" "}
          <Typography className="bold text-red-500">C.</Typography> Tunc
          congregáti sunt príncipes sacerdótum et senióres pópuli in átrium
          príncipis sacerdótum, qui dicebátur Cáiphas: et consílium fecérunt, ut
          Jesum dolo tenérent et occíderent. Dicébant autem:{" "}
          <Typography className="bold text-red-500">S.</Typography> Non in
          die festo, ne forte tumúltus fíeret in pópulo.{" "}
          <Typography className="bold text-red-500">C.</Typography> Cum
          autem Jesus esset in Bethánia in domo Simónis leprósi, accéssit ad eum
          múlier habens alabástrum unguénti pretiósi, et effúdit super caput
          ipsíus recumbéntis. Vidéntes autem discípuli, indignáti sunt,
          dicéntes:{" "}
          <Typography className="bold text-red-500">S.</Typography> Ut quid
          perdítio hæc? pótuit enim istud venúmdari multo, et dari paupéribus.{" "}
          <Typography className="bold text-red-500">C.</Typography> Sciens
          autem Jesus, ait illis: <Typography className="cross"> ✠ </Typography>{" "}
          Quid molésti estis huic mulíeri? opus enim bonum operáta est in me.
          Nam semper páuperes habétis vobíscum: me autem non semper habétis.
          Mittens enim hæc unguéntum hoc in corpus meum, ad sepeliéndum me
          fecit. Amen, dico vobis, ubicúmque prædicátum fúerit hoc Evangélium in
          toto mundo, dicétur et, quod hæc fecit, in memóriam ejus.{" "}
          <Typography className="bold text-red-500">C.</Typography> Tunc
          ábiit unus de duódecim, qui dicebátur Judas Iscariótes, ad príncipes
          sacerdótum, et ait illis:{" "}
          <Typography className="bold text-red-500">S.</Typography> Quid
          vultis mihi dare, et ego vobis eum tradam?{" "}
          <Typography className="bold text-red-500">C.</Typography> At illi
          constituérunt ei trigínta argénteos. Et exínde quærébat
          opportunitátem, ut eum tráderet.
        </Typography>
        <Typography className="vernacular">
          Naquele tempo, disse Jesus aos discípulos:{" "}
          <Typography className="cross"> ✠ </Typography> «Sabeis que, passados
          dois dias, se celebrará a Páscoa e que o Filho do homem será entregue,
          para O crucificarem».{" "}
          <Typography className="bold text-red-500">C.</Typography> Então,
          reuniram-se os príncipes dos sacerdotes e os anciãos na sala do sumo
          Pontífice, que era chamado Caifás, e deliberaram prender Jesus,
          insidiosamente, e matarem-n’O. Mas diziam:{" "}
          <Typography className="bold text-red-500">S.</Typography> «Que
          isso, porém, não seja no dia da festa, para que o povo não faça
          tumulto».{" "}
          <Typography className="bold text-red-500">C.</Typography> Então,
          estando Jesus em Betânia, em casa de Simão, o leproso, aproximou-se
          d’Ele uma mulher, trazendo um vaso de alabastro, cheio de perfumes
          preciosos, derramando-os sobre a cabeça de Jesus, que estava assentado
          à mesa. Vendo isto, indignaram-se os discípulos, dizendo:{" "}
          <Typography className="bold text-red-500">S.</Typography> «Para
          que serve tal desperdício? Pois poderia ter-se vendido por elevada
          quantia este perfume e dar aos pobres o seu preço».{" "}
          <Typography className="bold text-red-500">C.</Typography>{" "}
          Conhecendo Jesus isto, disse-lhes:{" "}
          <Typography className="cross"> ✠ </Typography> «Para que causais pena
          a esta mulher? Foi uma boa obra para comigo, que ela praticou; pois
          pobres sempre os tereis convosco; porém a mim nem sempre me tereis.
          Espalhando este perfume sobre o meu corpo, ungiu-me para Eu ser
          sepultado. Em verdade vos digo: onde quer que seja pregado este
          Evangelho (no mundo inteiro) contar-se-á também em sua memória a acção
          que praticou».{" "}
          <Typography className="bold text-red-500">C.</Typography> Então
          um dos Doze, chamado Judas Iscariotes, foi ter com o príncipe dos
          sacerdotes e disse-lhe:{" "}
          <Typography className="bold text-red-500">S.</Typography> «Quanto
          quereis dar-me para que eu vo-l’O entregue?».{" "}
          <Typography className="bold text-red-500">C.</Typography> E
          combinaram dar-lhe trinta moedas de prata. Desde logo, procurou ele
          oportunidade para O entregar.
        </Typography>
        <Typography className="latin">
          Prima autem die azymórum accessérunt discípuli ad Jesum, dicéntes:{" "}
          <Typography className="bold text-red-500">S.</Typography> Ubi vis
          parémus tibi comédere pascha?{" "}
          <Typography className="bold text-red-500">C.</Typography> At
          Jesus dixit: <Typography className="cross"> ✠ </Typography> Ite in
          civitátem ad quendam, et dícite ei: Magíster dicit: Tempus meum prope
          est, apud te fácio pascha cum discípulis meis.{" "}
          <Typography className="bold text-red-500">C.</Typography> Et
          fecérunt discípuli, sicut constítuit illis Jesus, et paravérunt
          pascha. Véspere autem facto, discumbébat cum duódecim discípulis suis.
          Et edéntibus illis, dixit:{" "}
          <Typography className="cross"> ✠ </Typography> Amen, dico vobis, quia
          unus vestrum me traditúrus est.{" "}
          <Typography className="bold text-red-500">C.</Typography> Et
          contristáti valde, cœpérunt sínguli dícere:{" "}
          <Typography className="bold text-red-500">S.</Typography> Numquid
          ego sum, Dómine?{" "}
          <Typography className="bold text-red-500">C.</Typography> At ipse
          respóndens, ait: <Typography className="cross"> ✠ </Typography> Qui
          intíngit mecum manum in parópside, hic me tradet. Fílius quidem
          hóminis vadit, sicut scriptum est de illo: væ autem hómini illi, per
          quem Fílius hóminis tradétur: bonum erat ei, si natus non fuísset homo
          ille. <Typography className="bold text-red-500">C.</Typography>{" "}
          Respóndens autem Judas, qui trádidit eum, dixit:{" "}
          <Typography className="bold text-red-500">S.</Typography> Numquid
          ego sum, Rabbi?{" "}
          <Typography className="bold text-red-500">C.</Typography> Ait
          illi: <Typography className="cross"> ✠ </Typography> Tu dixísti.{" "}
          <Typography className="bold text-red-500">C.</Typography>{" "}
          Cenántibus autem eis, accépit Jesus panem, et benedíxit, ac fregit,
          dedítque discípulis suis, et ait:{" "}
          <Typography className="cross"> ✠ </Typography> Accípite et comédite:
          hoc est corpus meum.{" "}
          <Typography className="bold text-red-500">C.</Typography> Et
          accípiens cálicem, grátias egit: et dedit illis, dicens:{" "}
          <Typography className="cross"> ✠ </Typography> Bíbite ex hoc omnes.
          Hic est enim sanguis meus novi Testaménti, qui pro multis effundétur
          in remissiónem peccatórum. Dico autem vobis: non bibam ámodo de hoc
          genímine vitis usque in diem illum, cum illud bibam vobíscum novum in
          regno Patris mei.{" "}
          <Typography className="bold text-red-500">C.</Typography> Et
          hymno dicto, exiérunt in montem Olivéti. Tunc dicit illis Jesus:{" "}
          <Typography className="cross"> ✠ </Typography> Omnes vos scándalum
          patiémini in me in ista nocte. Scriptum est enim: Percútiam pastórem,
          et dispergéntur oves gregis. Postquam autem resurréxero, præcédam vos
          in Galilǽam.{" "}
          <Typography className="bold text-red-500">C.</Typography>{" "}
          Respóndens autem Petrus, ait illi:{" "}
          <Typography className="bold text-red-500">S.</Typography> Et si
          omnes scandalizáti fúerint in te, ego numquam scandalizábor.{" "}
          <Typography className="bold text-red-500">C.</Typography> Ait
          illi Jesus: <Typography className="cross"> ✠ </Typography> Amen, dico
          tibi, quia in hac nocte, antequam gallus cantet, ter me negábis.{" "}
          <Typography className="bold text-red-500">C.</Typography> Ait
          illi Petrus:{" "}
          <Typography className="bold text-red-500">S.</Typography> Etiam
          si oportúerit me mori tecum, non te negábo.{" "}
          <Typography className="bold text-red-500">C.</Typography>{" "}
          Simíliter et omnes discípuli dixérunt.
        </Typography>
        <Typography className="vernacular">
          No primeiro dia dos ázimos, vieram os discípulos ter com Jesus,
          dizendo-Lhe:{" "}
          <Typography className="bold text-red-500">S.</Typography> «Onde
          quereis que preparemos o que é necessário para comer a Páscoa?»{" "}
          <Typography className="bold text-red-500">C.</Typography> Jesus
          disse-lhes: <Typography className="cross"> ✠ </Typography> «Ide à
          cidade, a casa dum tal, e dizei-lhe: «O Mestre diz: «Meu tempo está
          próximo; quero celebrar a Páscoa com meus discípulos em tua casa».{" "}
          <Typography className="bold text-red-500">C.</Typography> Os
          discípulos fizeram o que Jesus lhes ordenara e prepararam a Páscoa.
          Chegada, pois, a tarde, achava-se Jesus à mesa com seus Doze
          Discípulos. E, estando eles a comer, disse-lhes:{" "}
          <Typography className="cross"> ✠ </Typography> «Em verdade vos digo
          que um de vós me trairá».{" "}
          <Typography className="bold text-red-500">C.</Typography> Então,
          cheios de profunda tristeza, começaram, individualmente, a dizer:{" "}
          <Typography className="bold text-red-500">S.</Typography> «Serei
          eu, Senhor?»{" "}
          <Typography className="bold text-red-500">C.</Typography> Ele
          disse: <Typography className="cross"> ✠ </Typography> «O que me há-de
          trair é aquele que mete comigo a mão no prato! Com efeito, o Filho do
          homem vai ser traído, segundo o que está escrito a seu respeito, mas
          infeliz daquele que O tiver traído! Melhor lhe fora não haver
          nascido!».{" "}
          <Typography className="bold text-red-500">C.</Typography> Ora
          Judas, o discípulo que O traiu, disse:{" "}
          <Typography className="bold text-red-500">S.</Typography> «Serei
          eu, porventura, Senhor?»{" "}
          <Typography className="bold text-red-500">C.</Typography> Jesus
          disse-lhe: <Typography className="cross"> ✠ </Typography> «Tu o
          disseste!».{" "}
          <Typography className="bold text-red-500">C.</Typography>{" "}
          Enquanto ceavam, tomou Jesus o pão, benzeu-o, partiu-o e deu-o aos
          discípulos, dizendo: <Typography className="cross"> ✠ </Typography>{" "}
          «Tomai e comei: Isto é o meu corpo».{" "}
          <Typography className="bold text-red-500">C.</Typography> E,
          pegando no cálice, deu graças e entregou-lho, dizendo-lhes:{" "}
          <Typography className="cross"> ✠ </Typography> «Bebei dele vós todos.
          Pois este é o meu sangue do Novo Testamento, que será derramado por
          muitos para remissão dos pecados. Digo-vos, porém, que não mais
          tornarei a beber deste fruto da videira, até ao dia em que o hei-de
          beber, novamente, convosco no reino de meu Pai».{" "}
          <Typography className="bold text-red-500">C.</Typography> Havendo
          dito o hino de graças, saíram para o monte das Oliveiras, Então,
          disse-lhes Jesus: <Typography className="cross"> ✠ </Typography> «Esta
          noite serei para vós todos motivo de escândalo; porque está escrito:
          «Ferirei o pastor e as ovelhas do rebanho serão dispersas». Mas,
          depois de ressuscitar, irei adiante de vós para a Galileia»{" "}
          <Typography className="bold text-red-500">C.</Typography> Porém,
          respondendo Pedro, disse-Lhe:{" "}
          <Typography className="bold text-red-500">S.</Typography> «Ainda
          que todos se escandalizem, eu nunca me escandalizarei».{" "}
          <Typography className="bold text-red-500">C.</Typography> E Jesus
          retorquiu-lhe: <Typography className="cross"> ✠ </Typography> «Em
          verdade te digo: esta noite, antes de o galo cantar, negar-me-ás três
          vezes». <Typography className="bold text-red-500">C.</Typography>{" "}
          edro disse-Lhe:{" "}
          <Typography className="bold text-red-500">S.</Typography> «Ainda
          que tenha de morrer convosco, não Vos negarei!».{" "}
          <Typography className="bold text-red-500">C.</Typography> O mesmo
          afirmaram todos os discípulos.
        </Typography>
        <Typography className="latin">
          Tunc venit Jesus cum illis in villam, quæ dícitur Gethsémani, et dixit
          discípulis suis: <Typography className="cross"> ✠ </Typography> Sedéte
          hic, donec vadam illuc et orem.{" "}
          <Typography className="bold text-red-500">C.</Typography> Et
          assúmpto Petro et duóbus fíliis Zebedǽi, cœpit contristári et mæstus
          esse. Tunc ait illis: <Typography className="cross"> ✠ </Typography>{" "}
          Tristis est ánima mea usque ad mortem: sustinéte hic, et vigilate
          mecum. <Typography className="bold text-red-500">C.</Typography>{" "}
          Et progréssus pusíllum, prócidit in fáciem suam, orans et dicens:{" "}
          <Typography className="cross"> ✠ </Typography> Pater mi, si possíbile
          est, tránseat a me calix iste: Verúmtamen non sicut ego volo, sed
          sicut tu.{" "}
          <Typography className="bold text-red-500">C.</Typography> Et
          venit ad discípulos suos, et invénit eos dormiéntes: et dicit Petro:{" "}
          <Typography className="cross"> ✠ </Typography> Sic non potuístis una
          hora vigiláre mecum? Vigiláte et oráte, ut non intrétis in
          tentatiónem. Spíritus quidem promptus est, caro autem infírma.{" "}
          <Typography className="bold text-red-500">C.</Typography> Iterum
          secúndo ábiit et orávit, dicens:{" "}
          <Typography className="cross"> ✠ </Typography> Pater mi, si non potest
          hic calix transíre, nisi bibam illum, fiat volúntas tua.{" "}
          <Typography className="bold text-red-500">C.</Typography> Et
          venit íterum, et invenit eos dormiéntes: erant enim óculi eórum
          graváti. Et relíctis illis, íterum ábiit et orávit tértio, eúndem
          sermónem dicens. Tunc venit ad discípulos suos, et dicit illis:{" "}
          <Typography className="cross"> ✠ </Typography> Dormíte jam et
          requiéscite: ecce, appropinquávit hora, et Fílius hóminis tradétur in
          manus peccatórum. Súrgite, eámus: ecce, appropinquávit, qui me tradet.
        </Typography>
        <Typography className="vernacular">
          Então, foi Jesus com eles para um sítio chamado Getsémani, e disse aos
          discípulos: <Typography className="cross"> ✠ </Typography>{" "}
          «Assentai-vos aqui, enquanto vou, ali, orar».{" "}
          <Typography className="bold text-red-500">C.</Typography> E,
          levando consigo Pedro e os filhos de Zebedeu, começou a entristecer-se
          e a angustiar-se. E disse-lhes:{" "}
          <Typography className="cross"> ✠ </Typography> «Minha alma está triste
          até à morte! Ficai aqui e vigiai comigo».{" "}
          <Typography className="bold text-red-500">C.</Typography> Depois,
          avançou um pouco e prostrou-se com o rosto no chão, orando e dizendo:{" "}
          <Typography className="cross"> ✠ </Typography> «Meu Pai, se é
          possível, fazei que este cálice se afaste de mim; contudo faça-se a
          vossa vontade e não a minha».{" "}
          <Typography className="bold text-red-500">C.</Typography> Em
          seguida, veio ter com os discípulos, encontrando-os a dormir. Disse,
          então, a Pedro: <Typography className="cross"> ✠ </Typography> «Pois
          não pudestes vigiar uma hora comigo?! Vigiai e orai para não entrardes
          em tentação. Na verdade, o espírito está pronto, porém a carne é
          fraca». <Typography className="bold text-red-500">C.</Typography>{" "}
          De novo se retirou Jesus e, pela segunda vez orou, dizendo:{" "}
          <Typography className="cross"> ✠ </Typography> «Meu Pai, se este
          cálice não pode passar sem que Eu o beba, faça-se a vossa vontade».{" "}
          <Typography className="bold text-red-500">C.</Typography> Depois
          veio outra vez ter com os discípulos, que achou dormindo (até tinham
          os olhos colados de sono!), e, deixando-os, foi pela terceira vez
          orar, repetindo as mesmas palavras. Depois, veio ter com os discípulos
          e disse-lhes: <Typography className="cross"> ✠ </Typography> «Dormi
          agora e repousai: eis que se aproxima a hora em que o Filho do homem
          será entregue às mãos dos pecadores. Erguei-vos; vamos! Eis que está
          próximo o que me trairá».
        </Typography>
        <Typography className="latin">
          <Typography className="bold text-red-500">C.</Typography> Adhuc
          eo loquénte, ecce, Judas, unus de duódecim, venit, et cum eo turba
          multa cum gládiis et fústibus, missi a princípibus sacerdótum et
          senióribus pópuli. Qui autem trádidit eum, dedit illis signum, dicens:{" "}
          <Typography className="bold text-red-500">S.</Typography>{" "}
          Quemcúmque osculátus fúero, ipse est, tenéte eum.{" "}
          <Typography className="bold text-red-500">C.</Typography> Et
          conféstim accédens ad Jesum, dixit:{" "}
          <Typography className="bold text-red-500">S.</Typography> Ave,
          Rabbi. <Typography className="bold text-red-500">C.</Typography>{" "}
          Et osculátus est eum. Dixítque illi Jesus:{" "}
          <Typography className="cross"> ✠ </Typography> Amíce, ad quid venísti?
        </Typography>
        <Typography className="vernacular">
          <Typography className="bold text-red-500">C.</Typography> Ainda
          Jesus falava, quando Judas, um dos Doze, chegou e com ele numerosa
          turba, armada com espadas e paus, que fora enviada pelos príncipes dos
          sacerdotes e anciãos do povo. Ora, aquele que O traíra, havia dado
          este sinal à turba:{" "}
          <Typography className="bold text-red-500">S.</Typography> «Aquele
          que eu beijar, é Esse; prendei-O».{" "}
          <Typography className="bold text-red-500">C.</Typography> Logo
          que Judas chegou, aproximou-se do Mestre e disse-Lhe:{" "}
          <Typography className="bold text-red-500">S.</Typography> «Salve,
          ó Mestre».{" "}
          <Typography className="bold text-red-500">C.</Typography> E
          osculou-O. Jesus disse-lhe:{" "}
          <Typography className="cross"> ✠ </Typography> «Amigo, a que vieste?».
        </Typography>
        <Typography className="latin">
          <Typography className="bold text-red-500">C.</Typography> Tunc
          accessérunt, et manus injecérunt in Jesum et tenuérunt eum. Et ecce,
          unus ex his, qui erant cum Jesu, exténdens manum, exémit gládium suum,
          et percútiens servum príncipis sacerdótum, amputávit aurículam ejus.
          Tunc ait illi Jesus: <Typography className="cross"> ✠ </Typography>{" "}
          Convérte gládium tuum in locum suum. Omnes enim, qui accéperint
          gládium, gládio períbunt. An putas, quia non possum rogáre Patrem
          meum, et exhibébit mihi modo plus quam duódecim legiónes Angelórum?
          Quómodo ergo implebúntur Scripturae, quia sic oportet fíeri?{" "}
          <Typography className="bold text-red-500">C.</Typography> In illa
          hora dixit Jesus turbis:{" "}
          <Typography className="cross"> ✠ </Typography> Tamquam ad latrónem
          exístis cum gládiis et fústibus comprehéndere me: cotídie apud vos
          sedébam docens in templo, et non me tenuístis.{" "}
          <Typography className="bold text-red-500">C.</Typography> Hoc
          autem totum factum est, ut adimpleréntur Scripturae Prophetárum. Tunc
          discípuli omnes, relícto eo, fugérunt.
        </Typography>
        <Typography className="vernacular">
          <Typography className="bold text-red-500">C.</Typography>{" "}
          Chegaram-se, então, a Ele os outros, lançaram-Lhe as mãos e
          prenderam-n’O. Mas, eis que um dos que estavam com Jesus, lançando mão
          da espada, desembainhou-a e acutilou um servo do príncipe dos
          sacerdotes, cortando-lhe uma orelha. Entretanto Jesus disse-lhe:{" "}
          <Typography className="cross"> ✠ </Typography> «Mete a espada no seu
          lugar; pois todos quantos se servem da espada morrerão pela espada.
          Acaso pensas que não posso rogar auxílio a meu Pai, que logo me
          enviaria mais de doze legiões de Anjos? Mas, como se cumpririam as
          Escrituras que anunciam que assim deveria suceder?».{" "}
          <Typography className="bold text-red-500">C.</Typography> Ao
          mesmo tempo, Jesus disse às turbas:{" "}
          <Typography className="cross"> ✠ </Typography> «Viestes com espadas e
          paus para me prender, como se Eu fora um ladrão?! Todos os dias estava
          assentado convosco, ensinando no templo, e não me prendestes?!{" "}
          <Typography className="bold text-red-500">C.</Typography> Tudo
          isto aconteceu assim, para que se cumprissem as Escrituras dos
          Profetas. E, naquela hora, todos os discípulos, havendo-O abandonado,
          fugiram.
        </Typography>
        <Typography className="latin">
          At illi tenéntes Jesum, duxérunt ad Cáipham, príncipem sacerdótum, ubi
          scribæ et senióres convénerant. Petrus autem sequebátur eum a longe,
          usque in átrium príncipis sacerdótum. Et ingréssus intro, sedébat cum
          minístris, ut vidéret finem. Príncipes autem sacerdótum et omne
          concílium quærébant falsum testimónium contra Jesum, ut eum morti
          tráderent: et non invenérunt, cum multi falsi testes accessíssent.
          Novíssime autem venérunt duo falsi testes et dixérunt:{" "}
          <Typography className="bold text-red-500">S.</Typography> Hic
          dixit: Possum destrúere templum Dei, et post tríduum reædificáre
          illud. <Typography className="bold text-red-500">C.</Typography>{" "}
          Et surgens princeps sacerdótum, ait illi:{" "}
          <Typography className="bold text-red-500">S.</Typography> Nihil
          respóndes ad ea, quæ isti advérsum te testificántur?{" "}
          <Typography className="bold text-red-500">C.</Typography> Jesus
          autem tacébat. Et princeps sacerdótum ait illi:{" "}
          <Typography className="bold text-red-500">S.</Typography> Adjúro
          te per Deum vivum, ut dicas nobis, si tu es Christus, Fílius Dei.{" "}
          <Typography className="bold text-red-500">C.</Typography> Dicit
          illi Jesus: <Typography className="cross"> ✠ </Typography> Tu dixísti.
          Verúmtamen dico vobis, ámodo vidébitis Fílium hóminis sedéntem a
          dextris virtútis Dei, et veniéntem in núbibus cœli.{" "}
          <Typography className="bold text-red-500">C.</Typography> Tunc
          princeps sacerdótum scidit vestiménta sua, dicens:{" "}
          <Typography className="bold text-red-500">S.</Typography>{" "}
          Blasphemávit: quid adhuc egémus téstibus? Ecce, nunc audístis
          blasphémiam: quid vobis vidétur?{" "}
          <Typography className="bold text-red-500">C.</Typography> At illi
          respondéntes dixérunt:{" "}
          <Typography className="bold text-red-500">S.</Typography> Reus
          est mortis.{" "}
          <Typography className="bold text-red-500">C.</Typography> Tunc
          exspuérunt in fáciem ejus, et cólaphis eum cecidérunt, álii autem
          palmas in fáciem ejus dedérunt, dicéntes:{" "}
          <Typography className="bold text-red-500">S.</Typography>{" "}
          Prophetíza nobis, Christe, quis est, qui te percússit?
        </Typography>
        <Typography className="vernacular">
          Tendo Jesus sido preso, foi conduzido a casa de Caifás, príncipe dos
          sacerdotes, onde estavam reunidos os escribas e os anciãos. Pedro foi
          seguindo Jesus ao longe, até ao pátio dos príncipes dos sacerdotes,
          havendo entrado e tomado lugar, junto com os criados, para ver o
          resultado. Entretanto, os príncipes dos sacerdotes e todos os do
          conselho buscavam algum falso testemunho contra Jesus para O
          condenarem à morte; mas o não achavam, ainda que se tivessem
          apresentado muitas testemunhas falsas. Por fim, vieram duas
          testemunhas falsas, que declararam:{" "}
          <Typography className="bold text-red-500">S.</Typography> «Ele
          disse: «Posso destruir o templo de Deus e reedificá-lo em três dias».{" "}
          <Typography className="bold text-red-500">C.</Typography> Logo se
          levantou o príncipe dos sacerdotes e disse:{" "}
          <Typography className="bold text-red-500">S.</Typography> «Nada
          respondeis ao que estes dizem contra Vós?».{" "}
          <Typography className="bold text-red-500">C.</Typography> Jesus,
          porém, nada dizia; pelo que o príncipe dos sacerdotes O instou:{" "}
          <Typography className="bold text-red-500">S.</Typography>{" "}
          «Conjuro-Vos, por Deus vivo, que nos digais se sois Cristo, Filho de
          Deus!». <Typography className="bold text-red-500">C.</Typography>{" "}
          Jesus respondeu: <Typography className="cross"> ✠ </Typography> «Tu o
          disseste; contudo digo-vos que haveis de ver daqui a pouco o Filho do
          homem assentar-se à direita do poder de Deus, caminhando sobre as
          nuvens do céu».{" "}
          <Typography className="bold text-red-500">C.</Typography> Então o
          príncipe dos sacerdotes rasgou os seus vestidos, dizendo:{" "}
          <Typography className="bold text-red-500">S.</Typography>{" "}
          «Blasfemou! Para que são precisas ainda testemunhas? Eis que acabais
          de ouvir uma blasfémia! Que vos parece?»{" "}
          <Typography className="bold text-red-500">C.</Typography> Eles
          responderam:{" "}
          <Typography className="bold text-red-500">S.</Typography> «É réu
          de morte».{" "}
          <Typography className="bold text-red-500">C.</Typography> Então,
          cuspiram-Lhe no rosto e deram-Lhe bofetadas, dizendo:{" "}
          <Typography className="bold text-red-500">S.</Typography>{" "}
          «Adivinhai, ó Cristo, quem Vos bateu?».
        </Typography>
        <Typography className="latin">
          <Typography className="bold text-red-500">C.</Typography> Petrus
          vero sedébat foris in átrio: et accéssit ad eum una ancílla, dicens:{" "}
          <Typography className="bold text-red-500">S.</Typography> Et tu
          cum Jesu Galilǽo eras.{" "}
          <Typography className="bold text-red-500">C.</Typography> At ille
          negávit coram ómnibus, dicens:{" "}
          <Typography className="bold text-red-500">S.</Typography> Néscio,
          quid dicis.{" "}
          <Typography className="bold text-red-500">C.</Typography> Exeúnte
          autem illo jánuam, vidit eum ália ancílla, et ait his, qui erant ibi:{" "}
          <Typography className="bold text-red-500">S.</Typography> Et hic
          erat cum Jesu Nazaréno.{" "}
          <Typography className="bold text-red-500">C.</Typography> Et
          íterum negávit cum juraménto: Quia non novi hóminem. Et post pusíllum
          accessérunt, qui stabant, et dixérunt Petro:{" "}
          <Typography className="bold text-red-500">S.</Typography> Vere et
          tu ex illis es: nam et loquéla tua maniféstum te facit.{" "}
          <Typography className="bold text-red-500">C.</Typography> Tunc
          cœpit detestári et juráre, quia non novísset hóminem. Et contínuo
          gallus cantávit. Et recordátus est Petrus verbi Jesu, quod díxerat:
          Priúsquam gallus cantet, ter me negábis. Et egréssus foras, flevit
          amáre.
        </Typography>
        <Typography className="vernacular">
          <Typography className="bold text-red-500">C.</Typography> Durante
          este tempo, continuava Pedro no pátio. Aproximou-se dele uma criada e
          disse-lhe:{" "}
          <Typography className="bold text-red-500">S.</Typography> «Tu
          também estavas com Jesus, o Galileu».{" "}
          <Typography className="bold text-red-500">C.</Typography> Pedro
          negou logo, diante de todos, dizendo:{" "}
          <Typography className="bold text-red-500">S.</Typography> «Não
          sei o que dizes».{" "}
          <Typography className="bold text-red-500">C.</Typography> Saindo,
          então, ele a porta, viu-o outra criada, que logo disse para os que
          estavam ali:{" "}
          <Typography className="bold text-red-500">S.</Typography> «Este
          também estava com Jesus Nazareno».{" "}
          <Typography className="bold text-red-500">C.</Typography> , Pedro
          negou segunda vez com juramento, afirmando: «Não conheço tal homem».
          Pouco depois chegaram os que ali estavam e disseram a Pedro:{" "}
          <Typography className="bold text-red-500">S.</Typography>{" "}
          «Verdadeiramente tu também és deles, pois, o teu modo de falar,
          manifestamente, o dá a conhecer».{" "}
          <Typography className="bold text-red-500">C.</Typography> Então,
          começou a proferir imprecações e a jurar que não conhecia tal homem.
          Subitamente, cantou o galo. E logo Pedro se recordou de que Jesus lhe
          dissera: «Antes de o galo cantar, negar-me-ás três vezes». Saiu, pois,
          para fora e chorou amargamente!...
        </Typography>
        <Typography className="latin">
          Mane autem facto, consílium iniérunt omnes príncipes sacerdótum et
          senióres pópuli advérsus Jesum, ut eum morti tráderent. Et vinctum
          adduxérunt eum, et tradidérunt Póntio Piláto prǽsidi. Tunc videns
          Judas, qui eum trádidit, quod damnátus esset, pæniténtia ductus,
          réttulit trigínta argénteos princípibus sacerdótum et senióribus,
          dicens: <Typography className="bold text-red-500">S.</Typography>{" "}
          Peccávi, tradens sánguinem justum.{" "}
          <Typography className="bold text-red-500">C.</Typography> At illi
          dixérunt:{" "}
          <Typography className="bold text-red-500">S.</Typography> Quid ad
          nos? Tu vidéris.{" "}
          <Typography className="bold text-red-500">C.</Typography> Et
          projéctis argénteis in templo, recéssit: et ábiens, láqueo se
          suspéndit. Príncipes autem sacerdótum, accéptis argénteis, dixérunt:{" "}
          <Typography className="bold text-red-500">S.</Typography> Non
          licet eos míttere in córbonam: quia prétium sánguinis est.{" "}
          <Typography className="bold text-red-500">C.</Typography>{" "}
          Consílio autem ínito, emérunt ex illis agrum fíguli, in sepultúram
          peregrinórum. Propter hoc vocátus est ager ille Hacéldama, hoc est,
          ager sánguinis, usque in hodiérnum diem. Tunc implétum est, quod
          dictum est per Jeremíam Prophétam, dicéntem: Et accepérunt trigínta
          argénteos prétium appretiáti, quem appretiavérunt a fíliis Israël: et
          dedérunt eos in agrum fíguli, sicut constítuit mihi Dóminus.
        </Typography>
        <Typography className="vernacular">
          Havendo rompido a manhã, todos os príncipes dos sacerdotes e os
          anciãos se reuniram em conselho contra Jesus, para O condenarem à
          morte. E, levando-O, conduziram-n’O e entregaram-n’O ao Governador
          Pôncio Pilatos. Então Judas, tendo atraiçoado Jesus e vendo que este
          havia sido condenado, foi logo, cheio de arrependimento, levar as
          trinta moedas de prata aos príncipes dos sacerdotes e aos anciãos,
          dizendo:{" "}
          <Typography className="bold text-red-500">S.</Typography>{" "}
          «Pequei, entregando-vos o sangue inocente!».{" "}
          <Typography className="bold text-red-500">C.</Typography> Mas
          eles disseram:{" "}
          <Typography className="bold text-red-500">S.</Typography> «Que
          nos importa isso? Tu poderias pensar no que fazias!».{" "}
          <Typography className="bold text-red-500">C.</Typography> Ele,
          então, arrojou as moedas para o templo, afastou-se e foi enforcar-se!
          Os príncipes dos sacerdotes recolheram o dinheiro e disseram:{" "}
          <Typography className="bold text-red-500">S.</Typography> «Não é
          lícito deitá-lo no cofre sagrado, pois é o preço do sangue».{" "}
          <Typography className="bold text-red-500">C.</Typography> E,
          havendo reunido o conselho a respeito disto, compraram com esse
          dinheiro o campo dum oleiro, para servir de cemitério dos peregrinos;
          por isso aquele campo é ainda hoje chamado «Hacéldama», isto é, campo
          do sangue. Com isto se cumpriu o que fora anunciado pelo Profeta
          Jeremias, quando dissera: «Recolheram as trinta moedas de prata, preço
          d’Aquele que foi posto a preço por alguns filhos de Israel, comprando
          com elas o campo dum oleiro, como o Senhor me ordenou».
        </Typography>
        <Typography className="latin">
          Jesus autem stetit ante prǽsidem, et interrogávit eum præses, dicens:{" "}
          <Typography className="bold text-red-500">S.</Typography> Tu es
          Rex Judæórum?{" "}
          <Typography className="bold text-red-500">C.</Typography> Dicit
          illi Jesus: <Typography className="cross"> ✠ </Typography> Tu dicis.{" "}
          <Typography className="bold text-red-500">C.</Typography> Et cum
          accusarétur a princípibus sacerdótum et senióribus, nihil respóndit.
          Tunc dicit illi Pilátus:{" "}
          <Typography className="bold text-red-500">S.</Typography> Non
          audis, quanta advérsum te dicunt testimónia?{" "}
          <Typography className="bold text-red-500">C.</Typography> Et non
          respóndit ei ad ullum verbum, ita ut mirarétur præses veheménter. Per
          diem autem sollémnem consuéverat præses pópulo dimíttere unum vinctum,
          quem voluíssent. Habébat autem tunc vinctum insígnem, qui dicebátur
          Barábbas. Congregátis ergo illis, dixit Pilátus:{" "}
          <Typography className="bold text-red-500">S.</Typography> Quem
          vultis dimíttam vobis: Barábbam, an Jesum, qui dícitur Christus?{" "}
          <Typography className="bold text-red-500">C.</Typography> Sciébat
          enim, quod per invídiam tradidíssent eum. Sedénte autem illo pro
          tribunáli, misit ad eum uxor ejus, dicens:{" "}
          <Typography className="bold text-red-500">S.</Typography> Nihil
          tibi et justo illi: multa enim passa sum hódie per visum propter eum.{" "}
          <Typography className="bold text-red-500">C.</Typography>{" "}
          Príncipes autem sacerdótum et senióres persuasérunt populis, ut
          péterent Barábbam, Jesum vero pérderent. Respóndens autem præses, ait
          illis: <Typography className="bold text-red-500">S.</Typography>{" "}
          Quem vultis vobis de duóbus dimítti?{" "}
          <Typography className="bold text-red-500">C.</Typography> At illi
          dixérunt:{" "}
          <Typography className="bold text-red-500">S.</Typography>{" "}
          Barábbam.{" "}
          <Typography className="bold text-red-500">C.</Typography> Dicit
          illis Pilátus:{" "}
          <Typography className="bold text-red-500">S.</Typography> Quid
          ígitur fáciam de Jesu, qui dícitur Christus?{" "}
          <Typography className="bold text-red-500">C.</Typography> Dicunt
          omnes: <Typography className="bold text-red-500">S.</Typography>{" "}
          Crucifigátur.{" "}
          <Typography className="bold text-red-500">C.</Typography> Ait
          illis præses:{" "}
          <Typography className="bold text-red-500">S.</Typography> Quid
          enim mali íecit?{" "}
          <Typography className="bold text-red-500">C.</Typography> At illi
          magis clamábant, dicéntes:{" "}
          <Typography className="bold text-red-500">S.</Typography>{" "}
          Crucifigátur.{" "}
          <Typography className="bold text-red-500">C.</Typography> Videns
          autem Pilátus, quia nihil profíceret, sed magis tumúltus fíeret:
          accépta aqua, lavit manus coram pópulo, dicens:{" "}
          <Typography className="bold text-red-500">S.</Typography>{" "}
          Innocens ego sum a sánguine justi hujus: vos vidéritis.{" "}
          <Typography className="bold text-red-500">C.</Typography> Et
          respóndens univérsus pópulus, dixit:{" "}
          <Typography className="bold text-red-500">S.</Typography> Sanguis
          ejus super nos et super fílios nostros.{" "}
          <Typography className="bold text-red-500">C.</Typography> Tunc
          dimísit illis Barábbam: Jesum autem flagellátum trádidit eis, ut
          crucifigerétur. Tunc mílites prǽsidis suscipiéntes Jesum in prætórium,
          congregavérunt ad eum univérsam cohórtem: et exuéntes eum, chlámydem
          coccíneam circumdedérunt ei: et plecténtes corónam de spinis,
          posuérunt super caput ejus, et arúndinem in déxtera ejus. Et genu
          flexo ante eum, illudébant ei, dicéntes:{" "}
          <Typography className="bold text-red-500">S.</Typography> Ave,
          Rex Judæórum.{" "}
          <Typography className="bold text-red-500">C.</Typography> Et
          exspuéntes in eum, accepérunt arúndinem, et percutiébant caput ejus.
          Et postquam illusérunt ei, exuérunt eum chlámyde et induérunt eum
          vestiméntis ejus, et duxérunt eum, ut crucifígerent.
        </Typography>
        <Typography className="vernacular">
          Ora Jesus compareceu perante o Governador, que O interrogou:{" "}
          <Typography className="bold text-red-500">S.</Typography> «Sois o
          Rei dos Judeus?».{" "}
          <Typography className="bold text-red-500">C.</Typography>{" "}
          Respondeu-lhe Jesus: «Tu o dizes».{" "}
          <Typography className="bold text-red-500">C.</Typography> E,
          sendo acusado pelos príncipes dos sacerdotes e pelos anciãos, nada
          respondeu. Disse-Lhe, então, Pilatos:{" "}
          <Typography className="bold text-red-500">S.</Typography> «Não
          ouvis as coisas de que Vos acusam?».{" "}
          <Typography className="bold text-red-500">C.</Typography> Mas Ele
          não respondeu, de modo que o Governador admirava-se deveras. No dia da
          festa, o Governador tinha o costume de soltar o preso que o povo
          quisesse. Havia, então, um preso notável, chamado Barrabás. Estando
          todos juntos, disse Pilatos:{" "}
          <Typography className="bold text-red-500">S.</Typography> «Qual
          quereis que solte? Barrabás ou Jesus, por apelido Cristo?».{" "}
          <Typography className="bold text-red-500">C.</Typography> Pois
          sabia que por inveja é que lh’O haviam entregado. Quando Pilatos
          estava assentado no seu tribunal, mandou-lhe dizer sua mulher:{" "}
          <Typography className="bold text-red-500">S.</Typography> «Não te
          ocupes desse justo, pois tive, hoje, sonhos, nos quais padeci muito
          por sua causa».{" "}
          <Typography className="bold text-red-500">C.</Typography>, Mas os
          príncipes dos sacerdotes e os anciãos persuadiram o povo que pedisse
          que Barrabás fosse solto e mandasse matar Jesus. Falando, pois, o
          Governador, disse-lhes:{" "}
          <Typography className="bold text-red-500">S.</Typography> «Qual
          dos dois quereis que solte?».{" "}
          <Typography className="bold text-red-500">C.</Typography>{" "}
          Responderam:{" "}
          <Typography className="bold text-red-500">S.</Typography>{" "}
          «Barrabás».{" "}
          <Typography className="bold text-red-500">C.</Typography> Pilatos
          observou:{" "}
          <Typography className="bold text-red-500">S.</Typography>, «Que
          hei-de fazer, então, de Jesus, que se chama Cristo?»{" "}
          <Typography className="bold text-red-500">C.</Typography>{" "}
          Responderam todos:{" "}
          <Typography className="bold text-red-500">S.</Typography>, «Seja
          crucificado!».{" "}
          <Typography className="bold text-red-500">C.</Typography> O
          Governador disse-lhes:{" "}
          <Typography className="bold text-red-500">S.</Typography> «Pois
          que mal fez Ele?».{" "}
          <Typography className="bold text-red-500">C.</Typography> Porém,
          cada vez mais alto, bradavam:{" "}
          <Typography className="bold text-red-500">S.</Typography> «Seja
          crucificado!».{" "}
          <Typography className="bold text-red-500">C.</Typography> Vendo
          Pilatos que nada conseguia, mas que o tumulto crescia, mandou vir água
          e lavou as mãos diante do povo, dizendo:{" "}
          <Typography className="bold text-red-500">S.</Typography> «Estou
          inocente do sangue deste justo; isso é lá convosco».{" "}
          <Typography className="bold text-red-500">C.</Typography> Todo o
          povo respondeu:{" "}
          <Typography className="bold text-red-500">S.</Typography> «Que o
          sangue caia sobre nós e nossos filhos!».{" "}
          <Typography className="bold text-red-500">C.</Typography> Então
          Pilatos soltou Barrabás, e, havendo mandado açoitar Jesus,
          entregou-lh’O para ser crucificado. Os soldados do governador
          conduziram Jesus ao Pretório, formaram em torno d’Ele toda a corte,
          despojaram-n’O dos vestidos e cobriram-n’O com um manto de púrpura.
          Depois, teceram uma coroa de espinhos, puseram-Lha na cabeça,
          meteram-Lhe na mão direita uma cana, como se fora um ceptro, e
          ajoelharam diante d’Ele, escarnecendo-O e dizendo:{" "}
          <Typography className="bold text-red-500">S.</Typography> «Salve,
          ó Rei dos judeus!».{" "}
          <Typography className="bold text-red-500">C.</Typography> E,
          cuspindo-Lhe nas faces, tiraram-Lhe a cana e bateram-Lhe com ela na
          cabeça. Depois, ainda O escarneceram, tiraram-Lhe o manto,
          vestiram-n’O, novamente, com seus vestidos e levaram-n’O para ser
          crucificado.
        </Typography>
        <Typography className="latin">
          Exeúntes autem, invenérunt hóminem Cyrenǽum, nómine Simónem: hunc
          angariavérunt, ut tólleret crucem ejus. Et venérunt in locum, qui
          dícitur Gólgotha, quod est Calváriæ locus. Et dedérunt ei vinum bíbere
          cum felle mixtum. Et cum gustásset, nóluit bibere. Postquam autem
          crucifixérunt eum, divisérunt vestiménta ejus, sortem mitténtes: ut
          implerétur, quod dictum est per Prophétam dicentem: Divisérunt sibi
          vestiménta mea, et super vestem meam misérunt sortem. Et sedéntes,
          servábant eum. Et imposuérunt super caput ejus causam ipsíus scriptam:
          Hic est Jesus, Rex Judæórum. Tunc crucifíxi sunt cum eo duo latrónes:
          unus a dextris et unus a sinístris. Prætereúntes autem blasphemábant
          eum, movéntes cápita sua et dicéntes:{" "}
          <Typography className="bold text-red-500">S.</Typography> Vah,
          qui déstruis templum Dei et in tríduo illud reædíficas: salva
          temetípsum. Si Fílius Dei es, descénde de cruce.{" "}
          <Typography className="bold text-red-500">C.</Typography>{" "}
          Simíliter et príncipes sacerdótum illudéntes cum scribis et
          senióribus, dicébant:{" "}
          <Typography className="bold text-red-500">S.</Typography> Alios
          salvos fecit, seípsum non potest salvum fácere: si Rex Israël est,
          descéndat nunc de cruce, et crédimus ei: confídit in Deo: líberet
          nunc, si vult eum: dixit enim: Quia Fílius Dei sum.{" "}
          <Typography className="bold text-red-500">C.</Typography> Idípsum
          autem et latrónes, qui crucifíxi erant cum eo, improperábant ei. A
          sexta autem hora ténebræ factæ sunt super univérsam terram usque ad
          horam nonam. Et circa horam nonam clamávit Jesus voce magna, dicens:{" "}
          <Typography className="cross"> ✠ </Typography> Eli, Eli, lamma
          sabactháni?{" "}
          <Typography className="bold text-red-500">C.</Typography> Hoc
          est: <Typography className="cross"> ✠ </Typography> Deus meus, Deus
          meus, ut quid dereliquísti me?{" "}
          <Typography className="bold text-red-500">C.</Typography> Quidam
          autem illic stantes et audiéntes dicébant:{" "}
          <Typography className="bold text-red-500">S.</Typography> Elíam
          vocat iste.{" "}
          <Typography className="bold text-red-500">C.</Typography> Et
          contínuo currens unus ex eis, accéptam spóngiam implévit acéto et
          impósuit arúndini, et dabat ei bíbere. Céteri vero dicébant:{" "}
          <Typography className="bold text-red-500">S.</Typography> Sine,
          videámus, an véniat Elías líberans eum.{" "}
          <Typography className="bold text-red-500">C.</Typography> Jesus
          autem íterum clamans voce magna, emísit spíritum.
        </Typography>
        <Typography className="vernacular">
          Ao sair da cidade encontraram um homem de Cirene, chamado Simão. Logo
          o obrigaram a levar a cruz de Jesus. E vieram para um lugar chamado
          Gólgota, que quer dizer: lugar do Calvário. Deram-Lhe vinho misturado
          com fel. Porém Ele, havendo-o provado, o não quis beber. Depois de O
          crucificarem, lançaram sortes sobre os seus vestidos (para se cumprir
          o que fora anunciado pelo Profeta): «Repartiram entre si os meus
          vestidos e lançaram sortes à minha túnica». Depois assentaram-se e
          assim O guardaram. Puseram, também, por cima da sua cabeça uma
          inscrição, indicando a causa da sua morte, assim escrita: «Este é
          Jesus, Rei dos Judeus». Simultaneamente, foram crucificados dois
          ladrões: um à direita e o outro à esquerda. E os que passavam por ali
          blasfemavam, movendo a cabeça e dizendo:{" "}
          <Typography className="bold text-red-500">S.</Typography> «Ah!
          dissestes que destruiríeis o templo de Deus e o reedificaríeis em três
          dias? Salvai-Vos, pois, agora! Se sois o Filho de Deus, descei da
          cruz». <Typography className="bold text-red-500">C.</Typography>{" "}
          Ao mesmo tempo os sacerdotes com os escribas e anciãos, escarneciam
          d’Ele, dizendo:{" "}
          <Typography className="bold text-red-500">S.</Typography> «Salvou
          os outros e não pode salvar-se a si próprio? Se Ele é o Rei de Israel,
          que desça da cruz, e acreditaremos n’Ele. Confiou em Deus?! Pois, se
          Deus O ama, que O livre, porquanto Ele disse: «Sou o Filho de Deus».{" "}
          <Typography className="bold text-red-500">C.</Typography> Os
          ladrões, que estavam crucificados com Ele, insultavam-n’O do mesmo
          modo. Desde a hora sexta até à nona, as trevas estenderam-se por toda
          a terra. Cerca da hora nona, exclamou Jesus em voz alta, dizendo:{" "}
          <Typography className="cross"> ✠ </Typography> «Elí, Elí, lamma
          sabatáni?».{" "}
          <Typography className="bold text-red-500">C.</Typography> Isto é:{" "}
          <Typography className="cross"> ✠ </Typography> «Meu Deus, meu Deus,
          porque me abandonastes?».{" "}
          <Typography className="bold text-red-500">C.</Typography> Alguns,
          porém, dos que ali estavam, ouvindo isto, diziam:{" "}
          <Typography className="bold text-red-500">S. </Typography> «Chama
          por Elias».{" "}
          <Typography className="bold text-red-500">C.</Typography> Logo,
          correndo um deles, foi buscar uma esponja, ensopou-a em vinagre, pô-la
          sobre uma cana e apresentou-Lha para beber. Os outros diziam:{" "}
          <Typography className="bold text-red-500">S.</Typography> «Deixa;
          vejamos se Elias vem livrá-l’O».{" "}
          <Typography className="bold text-red-500">C.</Typography> Porém
          Jesus, soltando de novo um grande brado, expirou!
        </Typography>
        <Typography className="latin">
          <Typography className="em">
            (Hic genuflectitur, et pausatur aliquántulum)
          </Typography>
        </Typography>
        <Typography className="vernacular">
          <Typography className="em">
            (Todos devem ajoelhar e recolher-se em meditação durante algum
            tempo.)
          </Typography>
        </Typography>
        <Typography className="latin">
          Et ecce, velum templi scissum est in duas partes a summo usque
          deórsum: et terra mota est, et petræ scissæ sunt, et monuménta apérta
          sunt: et multa córpora sanctórum, qui dormíerant, surrexérunt. Et
          exeúntes de monuméntis post resurrectiónem ejus, venérunt in sanctam
          civitátem, et apparuérunt multis. Centúrio autem et qui cum eo erant,
          custodiéntes Jesum, viso terræmótu et his, quæ fiébant, timuérunt
          valde, dicéntes:{" "}
          <Typography className="bold text-red-500">S.</Typography> Vere
          Fílius Dei erat iste.{" "}
          <Typography className="bold text-red-500">C.</Typography> Erant
          autem ibi mulíeres multæ a longe, quæ secútæ erant Jesum a Galilǽa,
          ministrántes ei: inter quas erat María Magdaléne, et María Jacóbi, et
          Joseph mater, et mater filiórum Zebedǽi.
        </Typography>
        <Typography className="vernacular">
          Imediatamente, o véu do santuário se rasgou em duas partes, de alto a
          baixo; a terra tremeu nos seus alicerces; as pedras partiram-se; os
          sepulcros abriram-se e muitos corpos dos santos, que haviam morrido,
          ressuscitaram; e, saindo dos seus sepulcros, depois da ressurreição de
          Jesus, vieram à cidade santa e apareceram a muitos. O centurião e os
          que com ele estavam para guardar Jesus, vendo o tremor de terra e tudo
          quanto se passava, tiveram medo e diziam:{" "}
          <Typography className="bold text-red-500">S.</Typography>{" "}
          «Realmente, Este era o Filho de Deus!».{" "}
          <Typography className="bold text-red-500">C.</Typography>{" "}
          Achavam-se também, ali, a distância, algumas mulheres, que haviam
          seguido Jesus desde a Galileia para O servirem, em cujo número se
          contavam Maria Madalena, Maria, mãe de Tiago e de José, e a mãe dos
          filhos de Zebedeu.
        </Typography>
        <Typography className="latin">
          Cum autem sero factum esset, venit quidam homo dives ab Arimathǽa,
          nómine Joseph, qui et ipse discípulus erat Jesu. Hic accéssit ad
          Pilátum, et pétiit corpus Jesu. Tunc Pilátus jussit reddi corpus. Et
          accépto córpore, Joseph invólvit illud in síndone munda. Et pósuit
          illud in monuménto suo novo, quod excíderat in petra. Et advólvit
          saxum magnum ad óstium monuménti, et ábiit. Erat autem ibi María
          Magdaléne et áltera María, sedéntes contra sepúlcrum.
        </Typography>
        <Typography className="vernacular">
          Quando já era tarde, chegou um homem rico de Arimateia, chamado José,
          que também era discípulo de Jesus. Este homem foi ter com Pilatos e
          pediu-lhe o corpo de Jesus. Pilatos mandou que lhe fosse entregue o
          cadáver; e, levando-O José, amortalhou-O em um lençol limpo e
          depositou-O em um sepulcro novo, que havia mandado abrir na rocha.
          Depois, colocou uma pedra pesada à entrada do sepulcro e se retirou.
          Estavam, ali, Maria Madalena e a outra Maria, assentadas, defronte do
          sepulcro.
        </Typography>
      </Language>

      <Typography className="aside">
        Interrompe-se aqui a leitura e diz-se o
        <Link href="/ordo#munda-cor">MUNDA COR MEUM...</Link>
        Depois continua-se:
      </Typography>

      <Language>
        <Typography className="latin">
          Altera autem die, quæ est post Parascéven, convenérunt príncipes
          sacerdótum et pharisǽi ad Pilátum, dicéntes: Dómine, recordáti sumus,
          quia sedúctor ille dixit adhuc vivens: Post tres dies resúrgam. Jube
          ergo custodíri sepúlcrum usque in diem tértium: ne forte véniant
          discípuli ejus, et furéntur eum, et dicant plebi: Surréxit a mórtuis;
          et erit novíssimus error pejor prióre. Ait illis Pilátus: Habétis
          custódiam, ite, custodíte, sicut scitis. Illi autem abeúntes,
          muniérunt sepúlcrum, signántes lápidem, cum custódibus.
        </Typography>
        <Typography className="vernacular">
          No dia seguinte, depois do Parasceve, os príncipes dos sacerdotes e os
          fariseus reuniram-se e foram ter com Pilatos, dizendo: «Senhor,
          lembramo-nos de que Aquele sedutor, quando era vivo, disse: «Depois de
          três dias, ressuscitarei». Ordenai, pois, que seu sepulcro seja
          guardado, até ao terceiro dia, pois não seja o caso que os discípulos
          roubem o cadáver e digam depois à plebe: «Ressuscitou dos mortos!».
          Então, seria o último embuste pior do que o primeiro». Pilatos
          respondeu-lhes: «Tendes aí guardas; ide e guardai-o, como
          entenderdes». Eles, pois, foram, cimentaram o sepulcro, selaram a
          pedra e puseram-lhe guardas.
        </Typography>
      </Language>

      <H3 text="Ofertório" />

      <Typography className="em">Sl. 68, 21-22</Typography>

      <Language>
        <Typography className="latin">
          Impropérium exspectávit cor meum et misériam: et sustínui, qui simul
          mecum contristarétur, et non fuit: consolántem me quæsívi, et non
          invéni: et dedérunt in escam meam fel, et in siti mea potavérunt me
          acéto.
        </Typography>
        <Typography className="vernacular">
          As humilhações e os opróbrios aniquilaram-me o coração; procurei quem
          se compadecesse de mim e não apareceu ninguém; procurei quem me
          consolasse e não achei ninguém! E deram-me fel para comer e vinagre
          para mitigar a sede!
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Concéde, quǽsumus, Dómine: ut oculis tuæ majestátis munus oblátum, et
          grátiam nobis devotionis obtineat, et efféctum beátæ perennitátis
          acquírat. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Concedei-nos, Senhor, Vos suplicamos, que este sacrifício, que
          oferecemos à vossa divina majestade, nos obtenha a graça de uma pia
          devoção e nos assegure a posse da eterna felicidade. Por nosso
          Senhor...
        </Typography>
      </Language>

      <H3 text="Comúnio" />

      <Typography className="em">Mt. 26, 42</Typography>

      <Language>
        <Typography className="latin">
          Pater, si non potest hic calix transíre, nisi bibam illum: fiat
          volúntas tua.
        </Typography>
        <Typography className="vernacular">
          Meu Pai, se este cálice não pode passar sem que Eu o beba, faça-se a
          vossa vontade.
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Per hujus, Dómine, operatiónem mystérii: et vitia nostra purgéntur, et
          justa desidéria compleántur. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Senhor, pela virtude deste mystério, fazei que sejamos purificados dos
          nossos vícios e cumulados de desejos santos. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Último Evangelho" />

      <Typography className="em">Mt. 21, 1-9</Typography>

      <Language>
        <Typography className="latin">
          <Typography className="cross"> ✠ </Typography> Sequéntia sancti
          Evangélii secúndum Lucam.
        </Typography>
        <Typography className="vernacular">
          <Typography className="cross"> ✠ </Typography> Continuação do santo
          Evangelho segundo S. Mateus.
        </Typography>
        <Typography className="latin">
          In illo témpore: Cum appropinquásset Jesus Jerosólymis, et venísset
          Béthphage ad montem Olivéti: tunc misit duos discípulos suos, dicens
          eis: Ite in castéllum, quod contra vos est, et statim inveniétis
          ásinam alligátam et pullum cum ea: sólvite et addúcite mihi: et si
          quis vobis áliquid dixerit, dícite, quia Dóminus his opus habet, et
          conféstim dimíttet eos. Hoc autem totum factum est, ut adimplerétur,
          quod dictum est per Prophétam, dicéntem: Dícite fíliae Sion: Ecce, Rex
          tuus venit tibi mansuétus, sedens super ásinam et pullum, fílium
          subjugális. Eúntes autem discípuli, fecérunt, sicut præcépit illis
          Jesus. Et adduxérunt ásinam et pullum: et imposuérunt super eos
          vestiménta sua, et eum désuper sedére tecérunt. Plúrima autem turba
          stravérunt vestiménta sua in via: álii autem cædébant ramos de
          arbóribus, et sternébant in via: turbæ autem, quæ præcedébant et quæ
          sequebántur, clamábant, dicéntes: Hosánna fílio David: benedíctus, qui
          venit in nómine Dómini.
        </Typography>
        <Typography className="vernacular">
          Naquele tempo, como Jesus se aproximasse de Jerusalém e chegasse a
          Bétfage, já perto do monte das Oliveiras, mandou dois dos seus
          discípulos, a quem disse: «Ide à aldeia fronteira e lá encontrareis
          uma jumenta presa e com ela um jumentinho. Desprendei-a e trazei-os.
          Se alguém vos disser alguma coisa, respondei: «O Senhor precisa
          deles». E logo os deixarão trazer». Tudo isto aconteceu para se
          cumprir o que fora anunciado pelo Profeta: «Dizei à filha de Sião:
          «Eis o teu Rei que vem a ti com doçura, montado em uma jumenta e sobre
          um jumentinho, filho da que está sob o jugo». Foram os discípulos e
          fizeram tudo como Jesus lhes ordenara, trazendo a jumenta e o
          jumentinho. Então, puseram em cima deles as suas capas e fizeram-n’O
          montar. Ora a multidão, que era numerosa estendia as suas capas na
          estrada e cortava ramos das árvores com que atapetavam o caminho. E os
          da multidão, tanto os que O precediam, como os que O seguiam,
          clamavam: «Hosana ao Filho de David. Bendito seja O que vem em nome do
          Senhor!».
        </Typography>
      </Language>
    </PageWrapper>
  );
}
