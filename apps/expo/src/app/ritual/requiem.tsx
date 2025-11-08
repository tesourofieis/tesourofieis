import { Typography } from "~/components/typography";
import { Link } from "expo-router";
import { H1, H2 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageRequiem() {
  return (
    <PageWrapper>
      <H1 text="Missa de Requiem, Ritual do Funeral" />

      <H1 text="No dia do óbito ou do Funeral" />

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/santos/11-02">
          Comemoração dos Fiéis Defuntos
        </Link>{" "}
        , excepto:
      </Typography>

      <H2 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, cui próprium est miseréri semper et párcere, te súpplices
          exorámus pro ánima fámuli tui{" "}
          <Typography className="latin">N.</Typography> (fámulæ tuæ{" "}
          <Typography className="text-red-500">N.</Typography>), quam hódie de
          hoc sǽculo migráre jussísti: ut non tradas eam in manus inimíci, neque
          obliviscáris in finem, sed júbeas eam a sanctis Angelis suscipi et ad
          pátriam paradísi perdúci; ut, quia in te sperávit et crédidit, non
          pœnas inférni sustíneat, sed gáudia ætérna possídeat. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, de quem é próprio sempre usar de misericórdia e perdoar, Vos
          rogamos humildemente pela alma do vosso servo (ou vossa serva){" "}
          <Typography className="vernacular">N.</Typography> que mandastes sair
          deste mundo: a não abandoneis, Senhor, nas mãos do inimigo, nem a
          esqueçais para sempre, mas dignai-Vos ordenar aos vossos Santos Anjos
          que a acolham e introduzam na pátria do paraíso, a fim de que, depois
          de haver acreditado e esperado em Vós, não seja condenada ao
          sofrimento das penas do inferno, mas goze as alegrias eternas. Por
          nosso Senhor...
        </Typography>
      </Language>

      <H2 text="Epístola" />

      <Typography className="em">1 Ts. 4, 13-18</Typography>

      <Language>
        <Typography className="latin">
          Léctio Epístolæ beáti Pauli Apóstoli ad Thessalonicénses.
        </Typography>
        <Typography className="vernacular">
          Lição da Ep.ª do B. Ap.º Paulo aos Tessalonicenses.
        </Typography>
        <Typography className="latin">
          Fratres: Nólumus vos ignoráre de dormiéntibus, ut non contristémini,
          sicut et céteri, qui spem non habent. Si enim crédimus, quod Jesus
          mórtuus est et resurréxit: ita et Deus eos, qui dormiérunt per Jesum,
          addúcet cum eo. Hoc enim vobis dícimus in verbo Dómini, quia nos, qui
          vívimus, qui resídui sumus in advéntum Dómini, non præveniémus eos,
          qui dormiérunt. Quóniam ipse Dóminus in jussu, et in voce Archángeli,
          et in tuba Dei descéndet de cœlo: et mórtui, qui in Christo sunt,
          resúrgent primi. Deinde nos, qui vívimus, qui relínquimur, simul
          rapiémur cum illis in núbibus óbviam Christo in aëra, et sic semper
          cum Dómino érimus. Itaque consolámini ínvicem in verbis istis.
        </Typography>
        <Typography className="vernacular">
          Meus irmãos: Não queremos que ignoreis o que diz respeito aos mortais,
          para que vos não sepulteis na tristeza, como aqueles que não têm
          esperança; pois se cremos que Jesus morreu e ressuscitou, devemos
          também acreditar (acreditemos também) que Deus reunirá a Jesus aqueles
          que morrem n’Ele. Eis o que vos ensinamos em nome do Senhor; nós, os
          vivos, que estamos reservados para a vinda do Senhor, não precederemos
          aqueles que antes adormeceram. Porquanto o mesmo Senhor, desde que
          tenham soado a voz do Anjo e a trombeta divina, descerá do céu, e os
          que morreram em Cristo ressuscitarão primeiramente; em seguida nós, os
          vivos, que ficámos na terra, então, seremos arrebatados juntamente com
          eles nas nuvens pelos ares, ao encontro de Cristo, e permaneceremos
          eternamente com o Senhor. Confortai-vos, pois, uns aos outros com
          estas palavras.
        </Typography>
      </Language>

      <H2 text="Evangelho" />

      <Typography className="em">Jo. 11, 21-27</Typography>

      <Language>
        <Typography className="latin">
          <Typography className="cross"> ✠ </Typography> Sequéntia sancti
          Evangélii secúndum Joánnem.
        </Typography>
        <Typography className="vernacular">
          <Typography className="cross"> ✠ </Typography> Continuação do santo
          Evangelho segundo S. João.
        </Typography>
        <Typography className="latin">
          In illo témpore: Dixit Martha ad Jesum: Dómine, si fuísses hic, frater
          meus non fuísset mórtuus: sed et nunc scio, quia, quæcúmque popósceris
          a Deo, dabit tibi Deus. Dicit illi Jesus: Resúrget frater tuus. Dicit
          ei Martha: Scio, quia resúrget in resurrectióne in novíssimo die.
          Dixit ei Jesus: Ego sum resurréctio et vita: qui credit in me, étiam
          si mórtuus fúerit, vivet: et omnis, qui vivit et credit in me, non
          moriétur in ætérnum. Credis hoc? Ait illi: Utique, Dómine, ego
          crédidi, quia tu es Christus, Fílius Dei vivi, qui in hunc mundum
          venísti.
        </Typography>
        <Typography className="vernacular">
          Naquele tempo, disse Maria a Jesus: «Senhor, se estivésseis aqui, meu
          irmão não teria morrido; mas também agora sei que este mesmo Deus Vos
          concederá tudo quanto Lhe pedirdes». Respondeu-lhe Jesus: «O teu irmão
          ressuscitará». Marta disse-Lhe: «Bem sei que ressuscitará na
          ressurreição do último dia». Então Jesus continuou: «Eu sou a
          ressurreição e a vida; aquele que acredita em mim, ainda que haja
          morrido, viverá. Aquele que vive e crê em mim não morrerá eternamente.
          Acreditas nisto?». Ela respondeu-Lhe: «Sim, Senhor, creio que sois
          Cristo, Filho de Deus vivo, que viestes a este mundo».
        </Typography>
      </Language>

      <H2 text="Secreta" />

      <Language>
        <Typography className="latin">
          Propitiáre, quǽsumus, Dómine, ánimæ famuli tui{" "}
          <Typography className="latin">N.</Typography> (fámulæ tuæ{" "}
          <Typography className="text-red-500">N.</Typography>), pro qua hóstiam
          laudis tibi immolámus, majestátem tuam supplíciter deprecántes: ut,
          per hæc piæ placatiónis offícia, perveníre mereátur ad réquiem
          sempitérnam. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Vos suplicamos, Senhor, tende piedade da alma do vosso servo (ou vossa
          serva) <Typography className="vernacular">N.</Typography>, em favor da
          qual Vos oferecemos esta hóstia de louvor, suplicando humildemente à
          vossa majestade que, por intercessão deste sacrifício de expiação, lhe
          concedais o descanso eterno. Por nosso Senhor...
        </Typography>
      </Language>

      <H2 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Præsta, quǽsumus, omnípotens Deus: ut ánima fámuli tui{" "}
          <Typography className="latin">N.</Typography> (fámulæ tuæ{" "}
          <Typography className="text-red-500">N.</Typography>), quæ hódie de
          hoc sǽculo migrávit, his sacrifíciis purgáta et a peccátis expedíta,
          indulgéntiam páriter et réquiem cápiat sempitérnam. Per Dóminum
          nostrum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus omnipotente, Vos suplicamos, concedei-nos que a alma do vosso
          servo (ou vossa serva){" "}
          <Typography className="vernacular">N.</Typography>, que deixou hoje
          este mundo, uma vez purificada e livre dos seus pecados pela virtude
          deste sacrifício, alcance misericordiosamente de Vós o perdão das
          culpas e o repouso eterno. Por nosso Senhor...
        </Typography>
      </Language>

      <H1 text="No 3.º, 7.º ou 30.º dia do Óbito" />

      <Typography className="aside">
        Como na{" "}
        <Link
          className="link"
          href="/ritual/requiem#no-dia-do-óbito-ou-do-funeral"
        >
          Missa precedente
        </Link>{" "}
        , excepto:
      </Typography>

      <H2 text="Oração" />

      <Language>
        <Typography className="latin">
          Quǽsumus, Dómine, ut ánimæ fámuli tui{" "}
          <Typography className="latin">N.</Typography> (fámulæ tuæ{" "}
          <Typography className="text-red-500">N.</Typography>), cujus
          depositiónis diem tértium (vel séptimum, vel trigésimum) commemorámus,
          Sanctórum atque electórum tuórum largíri dignéris consórtium: et rorem
          misericórdiæ tuæ perénnem infúndas. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Senhor, Vos suplicamos, permiti que a alma do vosso servo (ou vossa
          serva) <Typography className="vernacular">N.</Typography>, cujo...
          (terceiro ou sétimo ou trigésimo) dia da deposição comemoramos, vá
          gozar a companhia dos vossos Santos escolhidos; e espalhai sobre ela o
          orvalho perpétuo da vossa misericórdia. Por nosso Senhor...
        </Typography>
      </Language>

      <H2 text="Secreta" />

      <Language>
        <Typography className="latin">
          Múnera, quǽsumus, Dómine, quæ tibi pro ánima fámuli tui{" "}
          <Typography className="latin">N.</Typography> (fámulæ tuæ{" "}
          <Typography className="text-red-500">N.</Typography>) offérimus,
          placátus inténde: ut, remédiis purgáta cœléstibus, in tua pietáte
          requiéscat. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Aceitai benignamente, Senhor, Vos imploramos, as oblatas que Vos
          oferecemos pela alma do vosso servo (ou vossa serva){" "}
          <Typography className="vernacular">N.</Typography>, a fim de que,
          purificada com estes remédios celestiais, descanse no seio da vossa
          misericórdia. Por nosso Senhor...
        </Typography>
      </Language>

      <H2 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Súscipe, Dómine, preces nostras pro ánima fámuli tui{" "}
          <Typography className="latin">N.</Typography> (fámulæ tuæ{" "}
          <Typography className="text-red-500">N.</Typography>): ut, si quæ ei
          máculæ de terrénis contágiis adhæsérunt, remissiónis tuæ misericórdia
          deleántur. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Recebei, Senhor, estas nossas preces, que Vos oferecemos em favor da
          alma do vosso servo (ou vossa serva){" "}
          <Typography className="vernacular">N.</Typography>, a fim de que, se
          ainda está contaminada com algumas nódoas contraídas com o contágio
          deste mundo, todas sejam apagadas com vosso misericordioso perdão. Por
          nosso Senhor...
        </Typography>
      </Language>

      <H1 text="No dia do Aniversário" />

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/santos/11-02">
          Comemoração dos Fiéis Defuntos
        </Link>{" "}
        , excepto:
      </Typography>

      <H2 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, indulgentiárum Dómine: da ánimæ famuli tui{" "}
          <Typography className="latin">N.</Typography> (fámulæ tuæ{" "}
          <Typography className="text-red-500">N.</Typography>, vel animábus
          famulórum famularúmque tuárum), cujus (quorum) anniversárium
          depositiónis diem commemorámus, refrigérii sedem, quiétis beatitúdinem
          et lúminis claritátem. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, Senhor das misericórdias, concedei às almas do vosso servo (ou
          vossa serva <Typography className="vernacular">N.</Typography>), de
          cujo dia da morte celebramos o aniversário, o lugar do refrigério, a
          bem-aventurança do repouso e o esplendor da luz. Por nosso Senhor...
        </Typography>
      </Language>

      <H2 text="Epístola" />

      <Typography className="em">2 Mac. 12, 43-46</Typography>

      <Language>
        <Typography className="latin">Léctio libri Machabæórum.</Typography>
        <Typography className="vernacular">
          Lição do livro dos Macabeus.
        </Typography>
        <Typography className="latin">
          In diébus illis: Vir fortíssimus Judas, facta collatióne, duódecim
          mília drachmas argénti misit Jerosólymam, offérri pro peccátis
          mortuórum sacrifícium, bene et religióse de resurrectióne cógitans
          (nisi enim eos, qui cecíderant, resurrectúros speráret, supérfluum
          viderétur et vanum oráre pro mórtuis): et quia considerábat, quod hi,
          qui cum pietáte dormitiónem accéperant, óptimam habérent repósitam
          grátiam. Sancta ergo et salúbris est cogitátio pro defunctis exoráre,
          ut a peccátis solvántur.
        </Typography>
        <Typography className="vernacular">
          Naqueles dias, um varão forte chamado Judas, havendo feito um
          peditório, recolheu a quantia de doze mil dracmas de prata, que enviou
          para Jerusalém, para ser oferecido um sacrifício pelos pecados dos
          mortos; pois ele possuía bons e religiosos pensamentos acerca da
          ressurreição (e, com efeito, se ele não esperasse que aqueles que
          haviam sucumbido ressuscitassem um dia, teria pensado que era vão e
          supérfluo orar pelos mortos). Assim, acreditava que abundante
          misericórdia estava reservada para aqueles que morressem piedosamente.
          Na verdade, é um santo e salutar pensamento orar pelos mortos, para
          que sejam livres dos seus pecados.
        </Typography>
      </Language>

      <H2 text="Evangelho" />

      <Typography className="em">Jo. 6, 37-40</Typography>

      <Language>
        <Typography className="latin">
          <Typography className="cross"> ✠ </Typography> Sequéntia sancti
          Evangélii secúndum Joánnem.
        </Typography>
        <Typography className="vernacular">
          <Typography className="cross"> ✠ </Typography> Continuação do santo
          Evangelho segundo S. João.
        </Typography>
        <Typography className="latin">
          In illo témpore: Dixit Jesus turbis Judæórum: Omne, quod dat mihi
          Pater, ad me véniet: et eum, qui venit ad me, non ejíciam foras: quia
          descéndi de cælo, non ut fáciam voluntátem meam, sed voluntátem ejus,
          qui misit me. Hæc est autem volúntas ejus, qui misit me, Patris: ut
          omne, quod dedit mihi, non perdam ex eo, sed resúscitem illud in
          novíssimo die. Hæc est autem volúntas Patris mei, qui misit me: ut
          omnis, qui videt Fílium et credit in eum, hábeat vitam ætérnam, et ego
          resuscitábo eum in novíssimo die.
        </Typography>
        <Typography className="vernacular">
          Naquele tempo, disse Jesus à multidão dos judeus: «Todo o que o Pai me
          dá, virá a mim; e o que vem a mim o não desprezarei; porquanto desci
          do céu, não para fazer a minha vontade, mas de quem me enviou. Ora, a
          vontade de meu Pai, que me enviou, é que não perca nenhum daqueles que
          me deu, mas que os ressuscite no último dia. Esta é a vontade de meu
          Pai, que me enviou: que todo aquele que vê o Filho e acredita n’Ele
          alcance a vida eterna; e Eu o ressuscitarei no último dia».
        </Typography>
      </Language>

      <H2 text="Secreta" />

      <Language>
        <Typography className="latin">
          Propitiáre, Dómine, supplicatiónibus nostris, pro anima famuli tui{" "}
          <Typography className="latin">N.</Typography> (fámulæ tuæ{" "}
          <Typography className="text-red-500">N.</Typography>, vel animábus
          famulórum famularúmque tuárum), cujus (quorum) hódie ánnua dies
          ágitur: pro qua (quibus) tibi off érimus sacrifícium laudis; ut eam
          (eas) Sanctórum tuórum consórtio soci áre dignéris. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Sede propício, Senhor, às nossas súplicas em favor da alma do vosso
          servo (ou vossa serva){" "}
          <Typography className="vernacular">N.</Typography>, cujo aniversário
          da sua morte hoje comemoramos; nós Vos oferecemos por ela este
          sacrifício de louvor, a fim de que Vos digneis admiti-la na companhia
          dos vossos santos. Por nosso Senhor...
        </Typography>
      </Language>

      <H2 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Præsta, quǽsumus, Dómine: ut ánima fámuli tui{" "}
          <Typography className="latin">N.</Typography> (fámulæ tuæ{" "}
          <Typography className="text-red-500">N.</Typography>, vel ánimæ
          famulórum famularúmque tuárum), cujus (quorum) anniversárium
          depositiónis diem commemorámus; his purgáta (purgátæ) sacrifíciis,
          indulgéntiam páriter et réquiem cápiat (cápiant) sempitérnam. Per
          Dóminum...
        </Typography>
        <Typography className="vernacular">
          Senhor, Vos rogamos, permiti que a alma do vosso servo (ou vossa
          serva) <Typography className="vernacular">N.</Typography>, cujo
          aniversário da sua morte hoje comemoramos, havendo sido purificada
          pela virtude destes sacrifícios, receba ao mesmo tempo a indulgência e
          o sempiterno perdão. Por nosso Senhor...
        </Typography>
      </Language>

      <H1 text="Quotidiana" />

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/santos/11-02">
          Comemoração dos Fiéis Defuntos
        </Link>{" "}
        , excepto:
      </Typography>

      <H2 text="Oração" />

      <Typography className="aside">Bispos e Padres</Typography>

      <Language>
        <Typography className="latin">
          Deus, qui inter apostólicos Sacerdotes fámulos tuos pontificáli seu
          sacerdotáli fecísti dignitáte vigére: præsta, quǽsumus; ut eórum
          quoque perpetuo aggregéntur consórtio. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que elevastes os vossos servos à dignidade de Pontífices e de
          Presbíteros, permitindo-lhes que tomassem parte no sacerdócio dos
          Apóstolos, concedei-lhes, Vos suplicamos, a graça de gozarem com eles
          a glória eterna. Por nosso Senhor...
        </Typography>
      </Language>

      <H2 text="Oração" />

      <Typography className="aside">Irmãos, Parentes e Benfeitores</Typography>

      <Language>
        <Typography className="latin">
          Deus, véniæ largítor et humánæ salútis amátor: quǽsumus cleméntiam
          tuam; ut nostræ congregatiónis fratres, propínquos et benefactóres,
          qui ex hoc sǽculo transiérunt, beáta María semper Vírgine intercedénte
          cum ómnibus Sanctis tuis, ad perpétuæ beatitúdinis consórtium
          perveníre concédas. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que perdoais aos pecadores e desejais a salvação dos homens,
          imploramos a vossa clemência, por intercessão da bem-aventurada Maria,
          sempre Virgem, e de todos os Santos, em favor dos nossos irmãos,
          parentes e benfeitores, que saíram deste mundo, a fim de que alcancem
          a bem-aventurança eterna. Por nosso Senhor...
        </Typography>
      </Language>

      <H2 text="Oração" />

      <Typography className="aside">Fiéis</Typography>

      <Language>
        <Typography className="latin">
          Fidélium, Deus, ómnium Cónditor et Redémptor: animábus famulórum
          famularúmque tuárum remissiónem cunctórum tríbue peccatórum; ut
          indulgéntiam, quam semper optavérunt, piis supplicatiónibus
          consequántur: Qui vivis...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, criador e redentor de todos os fiéis, concedei às almas dos
          vossos servos e servas a remissão de todos seus pecados, a fim de que
          pelas nossas humilíssimas orações alcancem da vossa misericórdia o
          perdão que sempre desejaram. Ó Vós, que, sendo Deus, viveis e...
        </Typography>
      </Language>

      <H2 text="Epístola" />

      <Typography className="em">Ap. 14, 13</Typography>

      <Language>
        <Typography className="latin">
          Léctio libri Apocalýpsis beáti Joánnis Apóstoli.
        </Typography>
        <Typography className="vernacular">
          Lição do Apocalipse do B. Ap.º João.
        </Typography>
        <Typography className="latin">
          In diébus illis: Audívi vocem de cœlo, dicéntem mihi: Scribe: Beáti
          mórtui, qui in Dómino moriúntur. Amodo jam dicit Spíritus, ut
          requiéscant a labóribus suis: ópera enim illórum sequúntur illos.
        </Typography>
        <Typography className="vernacular">
          Naqueles dias, ouvi uma voz do céu que me dizia: «Escreve:
          Bem-aventurados os mortos, que morrem no Senhor; porquanto, diz o
          Espírito, eles vão logo descansar no Senhor, visto que suas obras os
          acompanham».
        </Typography>
      </Language>

      <H2 text="Gradual" />

      <Typography className="em">4 Esd. 2, 34 & 35</Typography>

      <Language>
        <Typography className="latin">
          Réquiem ætérnam dona eis, Dómine: et lux perpétua lúceat eis.
          <Typography className="versicle"> ℣. </Typography>
          <Typography className="latin">Ps. 111, 7</Typography> In memória
          ætérna erit justus: ab auditióne mala non timébit.
        </Typography>
        <Typography className="vernacular">
          Dai-lhes, Senhor, o eterno repouso, e que lhes resplandeça a luz
          perpétua.<Typography className="versicle"> ℣. </Typography>
          <Typography className="vernacular">Sl. 111, 7</Typography> A
          recordação do homem justo permanecerá eternamente; este não temerá
          ouvir as sentenças más dos homens.
        </Typography>
      </Language>

      <H2 text="Trato" />

      <Language>
        <Typography className="latin">
          Absólve, Dómine, ánimas ómnium fidélium defunctórum ab omni vínculo
          delictórum.<Typography className="versicle"> ℣. </Typography>Et grátia
          tua illis succurrénte, mereántur evádere judícium ultiónis.
          <Typography className="versicle"> ℣. </Typography>Et lucis ætérnæ
          beatitúdine pérfrui.
        </Typography>
        <Typography className="vernacular">
          Livrai, Senhor, as almas dos fiéis defuntos das cadeias dos seus
          pecados:<Typography className="versicle"> ℣. </Typography>E que com o
          socorro da vossa graça consigam evitar o juízo da vingança:
          <Typography className="versicle"> ℣. </Typography>E alcancem a
          bem-aventurança da luz eterna.
        </Typography>
      </Language>

      <H2 text="Evangelho" />

      <Typography className="em">Jo. 6, 51-55</Typography>

      <Language>
        <Typography className="latin">
          <Typography className="cross"> ✠ </Typography> Sequéntia sancti
          Evangélii secúndum Joánnem.
        </Typography>
        <Typography className="vernacular">
          <Typography className="cross"> ✠ </Typography> Continuação do santo
          Evangelho segundo S. João.
        </Typography>
        <Typography className="latin">
          In illo témpore: Dixit Jesus turbis Judæórum: Ego sum panis vivus, qui
          de cœlo descéndi. Si quis manducáverit ex hoc pane, vivet in ætérnum:
          et panis, quem ego dabo, caro mea est pro mundi vita. Litigábant ergo
          Judǽi ad ínvicem, dicéntes: Quómodo potest hic nobis carnem suam dare
          ad manducándum? Dixit ergo eis Jesus: Amen, amen, dico vobis: nisi
          mandu-cavéritis carnem Fílii hóminis et bibéritis ejus sánguinem, non
          habébitis vitam in vobis. Qui mánducat meam carnem et bibit meum
          sánguinem, habet vitam ætérnam: et ego resuscitábo eum in novíssimo
          die.
        </Typography>
        <Typography className="vernacular">
          Naquele tempo, disse Jesus às turbas dos judeus: «Eu sou o pão vivo,
          que desci do céu. Se alguém comer deste pão, viverá eternamente; pois
          o pão que dou é a minha carne para a vida do mundo». Porém os judeus
          discutiam uns com os outros, dizendo: «Como pode Ele dar-nos a comer a
          sua carne?». Jesus respondeu-lhes: «Em verdade, em verdade vos digo:
          se não comerdes a carne do Filho do homem e não beberdes o seu sangue,
          não tereis a vida em vós. Aquele que come a minha carne e bebe o meu
          sangue tem a vida eterna, e Eu o ressuscitarei no último dia».
        </Typography>
      </Language>

      <H2 text="Secreta" />

      <Typography className="aside">Bispos e Padres</Typography>

      <Language>
        <Typography className="latin">
          Súscipe, Dómine, quǽsumus, pro animábus famulórum tuórum Pontíficum
          seu Sacerdótum, quas offérimus, hóstias: ut, quibus in hoc sǽculo
          pontificále seu sacerdotále donásti méritum, in cœlésti regno
          Sanctórum tuórum júbeas jungi consórtio. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Aceitai, Senhor, Vos rogamos, a hóstia que Vos oferecemos pelas almas
          dos vossos servos Pontífices e Presbíteros, e ordenai que aqueles a
          quem neste mundo concedestes a dignidade de Pontífices e de
          Presbíteros sejam admitidos no reino celestial a compartilhar da
          felicidade dos vossos Santos. Por nosso Senhor...
        </Typography>
      </Language>

      <H2 text="Secreta" />

      <Typography className="aside">Irmãos, Parentes e Benfeitores</Typography>

      <Language>
        <Typography className="latin">
          Deus, cujus misericórdiæ non est númerus, súscipe propítius preces
          humilitátis nostræ: et animábus fratrum, propinquórum et benefactórum
          nostrórum, quibus tui nóminis dedísti confessiónem, per hæc sacraménta
          salútis nostræ, cunctórum remissiónem tríbue peccatórum. Per
          Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, cuja misericórdia é infinita, ouvi benigno as nossas humildes
          preces, e concedei, pela virtude deste sacramento da nossa salvação, o
          perdão dos seus pecados às almas dos nossos irmãos, parentes e
          benfeitores, aos quais permitistes a graça de confessarem o vosso
          nome. Por nosso Senhor...
        </Typography>
      </Language>

      <H2 text="Secreta" />

      <Typography className="aside">Fiéis</Typography>

      <Language>
        <Typography className="latin">
          Hóstias, quǽsumus, Dómine, quas tibi pro animábus famulórum
          famularúmque tuárum offérimus, propitiátus inténde: ut, quibus fídei
          christiánæ méritum contulísti, dones et prǽmium. Per Dóminum
          nostrum...
        </Typography>
        <Typography className="vernacular">
          Olhai benigno, Senhor, Vos suplicamos, para a hóstia que Vos
          oferecemos pelas almas dos vossos servos, a fim de que, depois de lhes
          haverdes concedido o dom da fé cristã, lhes proporcioneis a
          recompensa. Por nosso Senhor...
        </Typography>
      </Language>

      <H2 text="Postcomúnio" />

      <Typography className="aside">Bispos e Padres</Typography>

      <Language>
        <Typography className="latin">
          Prosit, quǽsumus, Dómine, animábus famulórum tuórum Pontíficum seu
          Sacerdótum misericórdiæ tuæ imploráta cleméntia: ut ejus, in quo
          speravérunt et credidérunt, ætérnum cápiant, te miseránte, consórtium.
          Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Senhor, tornai úteis às almas dos Pontífices e dos Presbíteros, vossos
          servos, as orações com que imploramos a vossa misericordiosa bondade,
          a fim de que Vós, em quem eles puseram a fé e a esperança, os
          associeis à vossa eterna e gloriosa companhia. Por nosso Senhor...
        </Typography>
      </Language>

      <H2 text="Postcomúnio" />

      <Typography className="aside">Irmãos, Parentes e Benfeitores</Typography>

      <Language>
        <Typography className="latin">
          Præsta, quǽsumus, omnípotens et miséricors Deus: ut ánimæ fratrum,
          propinquórum et benefactórum nostrórum, pro quibus hoc sacrifícium
          laudis tuæ obtúlimus majestáti; per hujus virtútem sacraménti a
          peccátis ómnibus expiátæ, lucis perpétuæ, te miseránte, recípiant
          beatitúdinem. (Per Dóminum nostrum.)...
        </Typography>
        <Typography className="vernacular">
          Ó Deus omnipotente e misericordioso, Vos pedimos, concedei às almas
          dos nossos irmãos, parentes e benfeitores, pelos quais oferecemos à
          vossa majestade este sacrifício de louvor, a graça de alcançarem da
          vossa misericórdia, pela virtude deste sacramento, a expiação dos
          pecados e a felicidade da luz eterna. Por nosso Senhor...
        </Typography>
      </Language>

      <H2 text="Postcomúnio" />

      <Typography className="aside">Fiéis</Typography>

      <Language>
        <Typography className="latin">
          Animábus, quǽsumus, Dómine, famulórum famularúmque tuárum orátio
          profíciat supplicántium: ut eas et a peccátis ómnibus éxuas, et tuæ
          redemptiónis fácias esse partícipes: Qui vivis...
        </Typography>
        <Typography className="vernacular">
          Que as nossas humildes preces sejam proveitosas às almas dos vossos
          servos e servas, a fim de que, livres das cadeias dos seus pecados,
          participem dos frutos da vossa redenção. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
