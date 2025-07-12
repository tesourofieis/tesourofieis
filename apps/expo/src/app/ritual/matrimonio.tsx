import { Text } from "react-native";
import { H1, H2 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageMatrimonio() {
  return (
    <PageWrapper>
      <H1 text="Matrimónio" />
      <Text className="text-pretty">
        Os noivos, tendo entrado na igreja e depois de haverem feito oração
        diante do Altar do Santíssimo Sacramento dirigem-se para o Altar onde
        será celebrado o Matrimónio, ficando o noivo à direita da noiva, com a
        face para o Altar, e aguardando a chegada do Sacerdote. Se os noivos
        usarem luvas devem tirá-las. As testemunhas do Matrimónio tomarão lugar
        ao lado ou atrás dos noivos. Tendo chegado o Sacerdote, convenientemente
        preparado, todos se erguem excepto os noivos. Aquele, após uma curta
        oração, em particular, volta-se para o noivo, interrogando-o:
      </Text>
      <H2 text="Consentimento dos Noivos" />
      <Text className="versicle"> ℣. </Text>
      <Text className="text-red-500">N.</Text>
      <Text className="text-pretty">quereis receber </Text>
      <Text className="text-red-500">N.</Text>
      <Text className="text-pretty">
        , aqui presente, como vossa legítima esposa, segundo o rito da Santa
        Madre Igreja?
      </Text>
      <Text className="response"> ℟. </Text>
      <Text className="text-pretty">
        Quero! E logo, dirigindo-se à noiva, interroga-a também:
        <Text className="versicle"> ℣. </Text>
      </Text>
      <Text className="text-red-500">N.</Text>{" "}
      <Text className="text-pretty">quereis receber</Text>{" "}
      <Text className="text-red-500">N.</Text>
      <Text className="text-pretty">
        , aqui presente, como vossa legítima esposo, segundo o rito da Santa
        Madre Igreja?{" "}
      </Text>
      <Text className="response"> ℟. </Text>
      <Text className="text-pretty">Quero!</Text>
      <H2 text="União das Mãos" />
      <Text className="aside">
        Após este consentimento mútuo, os nubentes unem as suas mãos direitas,
        pelo lado palmar destas. E o Sacerdote diz:
      </Text>
      <Language>
        <Text className="latin">
          Ego conjúngo vos in matrimónium, in nómine Patris,{" "}
          <Text className="cross"> ✠ </Text> et Fílii, et Spíritus Sancti.
        </Text>
        <Text className="vernacular">
          Eu vos uno em Matrimónio, em Nome do Pai, e do Filho{" "}
          <Text className="cross"> ✠ </Text>, e do Espírito Santo.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
      </Language>
      <Text className="aside">
        O Sacerdote asperge com Água benta os noivos.
      </Text>
      <H2 text="Bênção do Anel" />
      <Language>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text>Adjutórium nostrum in nómine
          Dómini.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>O nosso auxílio está no Nome do
          Senhor.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Qui fecit cœlum et terram.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Que criou o céu e a terra.
        </Text>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text>Dómine, exáudi oratiónem meam.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>Senhor, ouvi a minha oração.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Et clamor meus ad te véniat.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> E que meu clamor chegue até
          Vós.
        </Text>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text> Dominus vobíscum.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>O Senhor seja convosco.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Et cum spíritu tuo.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> E com vosso espírito.
        </Text>
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
        <Text className="latin">
          Benedic, <Text className="cross"> ✠ </Text> Dómine, ánnulum hunc, quem
          nos in tuo nómine benedícimus, <Text className="cross"> ✠ </Text> ut
          quæ eum gestáverit, fidelitátem íntegram suo sponso tenens, in pace et
          voluntáte tua permáneat atque in mútua caritáte semper vivat. Per
          Christum Dóminum nostrum.
        </Text>
        <Text className="vernacular">
          Abençoai, <Text className="cross"> ✠ </Text> Senhor, este anel, que
          nós benzemos <Text className="cross"> ✠ </Text> em vosso Nome, a fim
          de que aquela que vai usá-lo, guardando a seu esposo uma fidelidade
          inteira, permaneça na paz e na vossa vontade e viva sempre no amor
          recíproco. Por Cristo, nosso Senhor.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
      </Language>
      <Text className="aside">
        O Sacerdote asperge o anel com Água benta; depois entrega este mesmo
        anel ao marido, que o põe no dedo anelar da mão esquerda da cônjugue. Ao
        mesmo tempo o Sacerdote diz, fazendo com a mão o Sinal da Cruz sobre o
        anel:
      </Text>
      <Language>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text>Confírma hoc, Deus, quod
          operátus es in nobis.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>Confirmai, Senhor, aquilo que
          acabais de operar em nós.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> A templo sancto tuo, quod est
          in Jerúsalem.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Do vosso templo Santo, que é a
          celestial Jerusalém.
        </Text>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text> Kyrie eléison.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>Senhor, tende piedade de nós.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Christe eléison.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Cristo, tende piedade de nós.
        </Text>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text> Kyrie eléison.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>Senhor, tende piedade de nós.
        </Text>
        <Text className="latin">Pater noster... (secreto)</Text>
        <Text className="vernacular">Pai nosso... (silêncio)</Text>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text>Et ne nos indúcas in
          tentatiónem.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>E não nos deixeis cair em
          tentação.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Sed líbera nos a malo.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Mas livrai-nos do mal.
        </Text>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text> Salvus fac servos tuos.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>Senhor, salvai os vossos servos.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Deus meus, sperántes in te.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Que esperam em Vós, ó Deus.
        </Text>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text>Mitte eis, Dómine, auxílium de
          sancto.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>Do vosso santuário, enviai-lhes,
          Senhor, auxílio.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Et de Sion tuére eos.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> E de Sião, amparai-os.
        </Text>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text>Esto eis, Dómine, turris
          fortitúdinis.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>Sede para eles como uma torre
          fortificada.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> A fácie inimíci.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Contra o inimigo.
        </Text>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text>Dómine, exáudi oratiónem meam.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>Senhor, ouvi a minha oração.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Et clamor meus ad te véniat.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> E que meu clamor chegue até
          Vós.
        </Text>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text> Dominus vobíscum.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>O Senhor seja convosco.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Et cum spíritu tuo.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> E com vosso espírito.
        </Text>
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
        <Text className="latin">
          Respice, quǽsumus, Dómine, super hos fámulos tuos et institútis tuis,
          quibus propagatiónem humáni géneris ordinásti, benígnus assíste, ut
          qui te auctóre jungúntur, te auxiliánte servéntur. Per Christum
          Dóminum nostrum.
        </Text>
        <Text className="vernacular">
          Senhor, Vos suplicamos, olhai misericordioso para estes esposos, que
          são vossos servos, e, visto que destinastes esta instituição para a
          propagação do género humano, auxiliai-o benignamente, a fim de que
          aqueles que se unem em Vós, que sois o seu Criador, sejam sempre
          protegidos por Vós, que sois também o seu sustentáculo. Por Cristo,
          nosso Senhor.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
      </Language>
      <H1 text="Missa do Matrimónio" />
      <H2 text="Intróito" />
      <Text className="em">Tb. 7, 15; 8, 19</Text>
      <Language>
        <Text className="latin">
          Deus Israël conjúngat vos: et ipse sit vobíscum, qui misértus est
          duóbus únicis: et nunc, Dómine, fac eos plénius benedícere te. (T. P.
          Allelúja, allelúja.) <Text className="latin">Ps. 127, 1</Text> Beáti
          omnes, qui timent Dóminum: qui ámbulant in viis ejus.
          <Text className="versicle"> ℣. </Text>Gloria Patri...
        </Text>
        <Text className="vernacular">
          Que Deus de Israel vos una: que Ele permaneça convosco e tenha piedade
          destes dois filhos únicos. De agora em diante. Senhor, fazei que Vos
          louvem plenamente. (T. P. Aleluia, aleluia.){" "}
          <Text className="vernacular">Sl. 127, 1</Text> Bem-aventurados aqueles
          que temem o Senhor: e que seguem os seus caminhos.
          <Text className="versicle"> ℣. </Text>Glória ao Pai...
        </Text>
      </Language>
      <H2 text="Oração" />
      <Language>
        <Text className="latin">
          Exáudi nos, omnípotens et misericors Deus: ut, quod nostro ministrate
          officio, tua benedictióne potius impleatur. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Atendei-nos, ó Deus omnipotente e misericordioso, a fim de que aquilo
          que iniciámos com o nosso ministério alcance complemento perfeito com
          vossa bênção. Por nosso Senhor...
        </Text>
      </Language>
      <H2 text="Epístola" />
      <Text className="em">Ef. 5, 22-33</Text>
      <Language>
        <Text className="latin">
          Léctio Epístolæ beáti Pauli Apóstoli ad Ephésios.
        </Text>
        <Text className="vernacular">
          Lição da Ep.ª do B. Ap.º Paulo aos Efésios.
        </Text>
        <Text className="latin">
          Fratres: Mulíeres viris suis súbditae sint, sicut Dómino; quóniam vir
          caput est mulíeris, sicut Christus caput est Ecclésiæ: Ipse, salvátor
          córporis ejus. Sed sicut Ecclésia subjécta est Christo, ita et
          mulíeres viris suis in ómnibus. Viri, dilígite uxóres vestras, sicut
          et Christus diléxit Ecclésiam, et seípsum trádidit pro ea, ut illam
          sanctificáret, mundans lavácro aquæ in verbo vitæ, ut exhibéret ipse
          sibi gloriósam Ecclésiam, non habéntem máculam, aut rugam, aut áliquid
          hujúsmodi, sed ut sit sancta et immaculáta. Ita et viri debent
          dilígere uxóres suas, ut córpora sua. Qui suam uxórem díligit, seípsum
          díligit. Nemo enim umquam carnem suam ódio hábuit, sed nutrit, et
          fovet eam, sicut et Christus Ecclésiam: quia membra sumus córporis
          ejus, de carne ejus et de óssibus ejus. Propter hoc relínquet homo
          patrem et matrem suam, et adhærébit uxóri suæ: et erunt duo in carne
          una. Sacraméntum hoc magnum est, ego autem dico in Christo, et in
          Ecclésia. Verúmtamen et vos sínguli, unusquísque uxórem suam, sicut
          seípsum díligat: uxor autem tímeat virum suum.
        </Text>
        <Text className="vernacular">
          Meus irmãos: Que as mulheres estejam sujeitas a seus maridos, como ao
          Senhor; pois o marido é a cabeça da mulher, como Cristo é a cabeça da
          Igreja, e o Salvador do seu corpo. Ora, assim como a Igreja está
          sujeita a Cristo, assim também as mulheres devem estar sujeitas a seus
          maridos, em todas as coisas. Maridos, amai vossas mulheres, como
          Cristo amou a sua Igreja e se entregou por ela, para a santificar,
          purificando-a na água baptismal pela palavra da vida, para a conduzir
          diante de si, como Igreja gloriosa, sem mácula, nem ruga, nem coisa
          semelhante; mas santa e imaculada. Assim devem os maridos amar suas
          mulheres, como os seus corpos. Quem ama sua mulher, ama-se a si mesmo;
          pois nunca ninguém tem ódio ao seu próprio corpo; mas nutre-o e
          sustenta-o, como Cristo faz à sua Igreja; pois somos membros do seu
          corpo, formados da sua carne e dos seus ossos. Por essa razão deixará
          o homem seu pai e sua mãe, e se unirá a sua mulher; e os dois formarão
          uma só carne. Grande é este mystério! Digo-o diante de Cristo e da
          Igreja. Portanto, vós outros, cada um em particular, ame sua mulher,
          como a si mesmo, e a mulher respeite o seu marido.
        </Text>
      </Language>
      <H2 text="Gradual" />
      <Text className="em">Sl. 127, 3</Text>
      <Language>
        <Text className="latin">
          Uxor tua sicut vitis abúndans in latéribus domus tuæ.
          <Text className="versicle"> ℣. </Text>Fílii tui sicut novéllæ olivárum
          in circúitu mensæ tuæ.
        </Text>
        <Text className="vernacular">
          A vossa esposa será como uma vinha fecunda no seio da vossa casa:
          <Text className="versicle"> ℣. </Text>E os vossos filhos como rebentos
          de oliveira, em torno da vossa mesa.
        </Text>
        <Text className="latin">
          Allelúja, allelúja.<Text className="versicle"> ℣. </Text>
          <Text className="latin">Ps. 19, 3</Text> Mittat vobis Dóminus auxílium
          de sancto: et de Sion tueátur vos. Allelúja.
        </Text>
        <Text className="vernacular">
          Aleluia, aleluia.<Text className="versicle"> ℣. </Text>
          <Text className="vernacular">Ps. 19, 3</Text> Que a graça do Senhor
          desça do seu santuário e de Sião, e vos socorra e proteja. Aleluia.
        </Text>
      </Language>
      <Text className="aside">
        Após a Septuagésima, omite-se o Aleluia e o seguinte, e diz-se:
      </Text>
      <H2 text="Trato" />
      <Text className="em">Sl. 127, 4-6</Text>
      <Language>
        <Text className="latin">
          Ecce, sic benedicétur omnis homo, qui timet Dóminum.
          <Text className="versicle"> ℣. </Text>Benedícat tibi Dóminus ex Sion:
          et vídeas bona Jerúsalem ómnibus diébus vitae tuæ.
          <Text className="versicle"> ℣. </Text>Et vídeas fílios filiórum
          tuórum: pax super Israël.
        </Text>
        <Text className="vernacular">
          Assim será abençoado o homem que teme o Senhor.
          <Text className="versicle"> ℣. </Text>O Senhor vos abençoe lá de Sião,
          e possais gozar a felicidade de Jerusalém todos os dias da vossa vida.
          <Text className="versicle"> ℣. </Text>E ver os filhos dos vossos
          filhos e a paz em Israel.
        </Text>
      </Language>
      <Text className="aside">
        No T. Pascal omite-se o Gradual e o Trato e diz-se:
      </Text>
      <Language>
        <Text className="latin">
          Allelúja, allelúja.<Text className="versicle"> ℣. </Text>
          <Text className="latin">Ps. 19, 3</Text> Mittat vobis Dóminus auxílium
          de sancto: et de Sion tueátur vos. Allelúja.
          <Text className="versicle"> ℣. </Text>
          <Text className="em">Ps. 133, 3</Text> Benedícat vobis Dóminus ex
          Sion: qui fecit cœlum et terram. Allelúja.
        </Text>
        <Text className="vernacular">
          Aleluia, aleluia.<Text className="versicle"> ℣. </Text>
          <Text className="vernacular">Sl. 19, 3</Text> Que a graça do Senhor
          desça do seu santuário e de Sião e vos socorra e proteja. Aleluia.
          <Text className="versicle"> ℣. </Text>
          <Text className="em">Sl. 133, 3</Text> Que o Senhor, que criou o céu e
          a terra, vos abençoe lá de Sião. Aleluia.
        </Text>
      </Language>
      <H2 text="Evangelho" />
      <Text className="em">Mt. 19, 3-6</Text>
      <Language>
        <Text className="latin">
          <Text className="cross"> ✠ </Text> Sequéntia sancti Evangélii secúndum
          Matthǽum.
        </Text>
        <Text className="vernacular">
          <Text className="cross"> ✠ </Text> Continuação do santo Evangelho
          segundo S. Mateus.
        </Text>
        <Text className="latin">
          In illo témpore: Accessérunt ad Jesum pharisǽi, tentántes eum et
          dicéntes: Si licet hómini dimíttere uxórem suam quacúmque ex causa?
          Qui respóndens, ait eis: Non legístis, quia qui fecit hóminem ab
          inítio, másculum et féminam fecit eos? et dixit: Propter hoc dimíttet
          homo patrem et matrem, et adhærébit uxóri suæ, et erunt duo in carne
          una. Itaque jam non sunt duo, sed una caro. Quod ergo Deus conjúnxit,
          homo non séparet.
        </Text>
        <Text className="vernacular">
          Naquele tempo, os fariseus aproximaram-se de Jesus para O tentar,
          dizendo: «É lícito ao homem repudiar sua mulher por qualquer causa?».
          Ele respondeu: «Não lestes que Aquele que criou o homem no princípio
          do mundo, criou um homem e uma mulher e disse: «Por causa disto o
          homem deixará seu pai e sua mãe e se unirá a sua mulher, e serão dois
          em uma só carne?». Assim, eles não são já dois, mas uma só carne.
          Portanto que o homem não separe o que Deus uniu».
        </Text>
      </Language>
      <H2 text="Ofertório" />
      <Text className="em">Sl. 30, 15-16</Text>
      <Language>
        <Text className="latin">
          In te sperávi, Dómine: dixi: Tu es Deus meus: in mánibus tuis témpora
          mea. (T. P. Allelúja.)
        </Text>
        <Text className="vernacular">
          Em Vós, senhor, pus toda minha confiança. Eu disse: sois o meu Deus:
          nas vossas mãos está o meu destino. (T. P. Aleluia.)
        </Text>
      </Language>
      <H2 text="Secreta" />
      <Language>
        <Text className="latin">
          Suscipe, quǽsumus, Dómine, pro sacra conúbii lege munus oblátum: et,
          cujus largítor es óperis, esto dispósitor. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Senhor, vos suplicamos, aceitai o sacrifício que Vos oferecemos para
          consagrar este pacto matrimonial e, visto que fostes o autor dele,
          sede também o seu guarda. Por nosso Senhor...
        </Text>
      </Language>
      <Text className="aside">
        Após o Pater Noster... e antes do Libera-nos... os cônjuges ajoelham
        diante do Altar, próximo do Celebrante, enquanto este diz:
      </Text>
      <H2 text="Bênção dos cônjuges" />
      <Language>
        <Text className="latin">
          Propitiáre, Dómine, supplicatiónibus nostris, et institútis tuis,
          quibus propagatiónem humáni géneris ordinásti, benígnus assíste: ut,
          quod te auctóre júngitur, te auxiliánte servétur. Per Dóminum
          nostrum...
        </Text>
        <Text className="vernacular">
          Sede propício, Senhor, às nossas súplicas e, visto que instituístes
          este sacramento para a propagação do género humano, assisti-nos
          benignamente, a fim de que produza a sua graça e se conserve a união
          de que fostes autor. Por nosso Senhor...
        </Text>
      </Language>
      <H2 text="Oração" />
      <Language>
        <Text className="latin">
          Deus, qui potestáte virtútis tuæ de níhilo cuncta fecísti: qui
          dispósitis universitátis exórdiis, hómini, ad imáginem Dei facto, ídeo
          inseparábile mulíeris adjutórium condidísti, ut femíneo córpori de
          viríli dares carne princípium, docens, quod ex uno placuísset
          instítui, numquam licére disjúngi: Deus, qui tam excellénti mystério
          conjugálem cópulam consecrásti, ut Christi et Ecclésiæ sacraméntum
          præsignáres in fǿdere nuptiárum: Deus, per quem múlier júngitur viro,
          et socíetas principáliter ordináta ea benedictióne donátur, quæ sola
          nec per originális peccáti pœnam nec per dilúvii est abláta
          senténtiam: réspice propítius super hanc fámulam tuam, quæ, maritáli
          jungénda consórtio, tua se éxpetit protectióne muníri: sit in ea jugum
          dilectiónis et pacis: fidélis et casta nubat in Christo, imitatríxque
          sanctárum permáneat feminárum: sit amábilis viro suo, ut Rachel:
          sápiens, ut Rebécca: longǽva et fidélis, ut Sara: nihil in ea ex
          áctibus suis ille auctor prævaricatiónis usúrpet: nexa fídei
          mandatísque permáneat: uni thoro juncta, contáctus illícitos fúgiat:
          múniat infirmitátem suam robóre disciplínæ: sit verecúndia gravis,
          pudóre venerábilis, doctrínis cœléstibus erudíta: sit fœcunda in
          sóbole, sit probáta et ínnocens: et ad Beatórum réquiem atque ad
          cœléstia regna pervéniat: et vídeant ambo fílios filiórum suórum,
          usque in tártiam et quartam generatiónem, et ad optátam pervéniant
          senectútem. Per eúndem Dóminum nostrum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que por vosso poder e virtude formastes o mundo do nada, e,
          postos em ordem todos estes elementos, criastes o homem à vossa imagem
          e depois lhe concedestes o dom da mulher, como auxílio inseparável:
          Vós, ó Deus, que tirastes o corpo da mulher da própria carne do homem,
          ensinando-nos assim que não é lícito separar aquilo que por vossa
          Vontade teve um só princípio; ó Deus, que consagrastes a união
          conjugal com um tão excelente mystério, de tal modo que esta aliança
          nupcial representa a união de Cristo com a Igreja, ó Deus, por quem a
          mulher se une ao homem e em cuja aliança está organizada a sociedade,
          concedei-lhe aquela bênção que foi a única de que não fomos privados,
          nem pela pena do pecado original, nem pela sentença do dilúvio: olhai
          propício para esta vossa serva, que, destinada ao consórcio marital,
          implora socorro da vossa protecção: que ela goze os dons do amor e da
          paz; que, consorciada em Cristo, seja sempre casta e fiel e imite as
          santas mulheres: seja amável para com seu marido, como Raquel;
          prudente, como Rebeca; de longa vida e fiel, como Sara. Que o autor do
          pecado não tenha poder algum nela, nem nos seus actos; que permaneça
          na fé e seja exacta na prática dos Mandamentos; que seja fiel ao
          marido no débito conjugal e fuja de todo o comércio carnal ilícito;
          que fortaleça a sua fraqueza com o vigor da doutrina: seja grave pela
          sua modéstia, venerável pelo seu pudor, instruída na doutrina do céu,
          fecunda na prole, honrada e inocente, e alcance a paz dos
          bem-aventurados e o gozo do reino celestial: que ambos os cônjuges
          vejam os filhos de seus filhos até à terceira e à quarta geração e
          cheguem à velhice que desejam. Por nosso Senhor...
        </Text>
      </Language>
      <Text className="aside">
        Os cônjuges retiram-se para os seus lugares e o Celebrante continua
        LIBERA NOS...
      </Text>
      <H2 text="Comúnio" />
      <Text className="em">Sl. 127, 4 & 6</Text>
      <Language>
        <Text className="latin">
          Ecce, sic benedicétur omnis homo, qui timet Dóminum: et vídeas fílios
          filiórum tuórum: pax super Israël. (T. P. Allelúja.)
        </Text>
        <Text className="vernacular">
          Eis como será abençoado o homem que teme o Senhor: «que goze a
          felicidade de ver os filhos dos seus filhos e a paz em Israel». (T. P.
          Aleluia.)
        </Text>
      </Language>
      <H2 text="Postcomúnio" />
      <Language>
        <Text className="latin">
          Quǽsumus, omnípotens Deus: institúta providéntiæ tuæ pio favóre
          comitáre; ut, quos legítima societáte conéctis, longǽva pace
          custódias. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Vos suplicamos, ó Deus omnipotente, acompanhai com os favores da vossa
          bondade aquilo que pela vossa providência instituístes, a fim de que
          aqueles, que unistes para um fim legítimo, vivam em longa paz. Por
          nosso Senhor...
        </Text>
      </Language>
      <Text className="aside">
        Antes da Bênção da Missa os cônjuges vão ajoelhar ao pé do Altar, e o
        Sacerdote diz:
      </Text>
      <Language>
        <Text className="latin">
          Deus Abraham, Deus Isaac et Deus Jacob sit vobíscum: et ipse adímpleat
          benedictiónem suam in vobis: ut videátis fílios filiórum vestrórum
          usque ad tértiam et quartam generatiónem, et póstea vitam ætérnam
          habeátis sine fine: adjuvánte Dómino nostro Jesu Christo, qui cum
          Patre et Spíritu Sancto vivit et regnat...
        </Text>
        <Text className="vernacular">
          Deus de Abraão, Deus de Isaque, Deus de Jacob esteja convosco; e que
          sua bênção desça sobre vós, para que vejais os filhos de vossos filhos
          até à terceira e quarta geração, e em seguida alcanceis a vida eterna
          para sempre pela graça de nosso Senhor Jesus Cristo: Que, com o Pai e
          o Espírito Santo, sendo Deus, vive...
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
      </Language>
    </PageWrapper>
  );
}
