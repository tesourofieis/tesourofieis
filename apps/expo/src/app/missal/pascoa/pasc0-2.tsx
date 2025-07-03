import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { H1, H3 } from "~/components/Headings";


export default function PagePasc02() {
  return (
    <PageWrapper>
      <H1 text="Terça-feira Pascal" />

      <H3 text="Intróito" />

      <Text className="em">Ecl. 15, 3 & 4</Text>

      <Language>
        <Text className="latin">
          Aqua sapiéntiæ potávit eos, allelúja: firmábitur in illis et non
          flectétur, allelúja: et exaltábit eos in ætérnum, allelúja, allelúja.{" "}
          <Text className="latin">Ps. 104, 1</Text> Confitémini Dómino et
          invocáte nomen ejus: annuntiáte inter gentes ópera ejus.
          <Text className="versicle"> ℣. </Text>Gloria Patri...
        </Text>
        <Text className="vernacular">
          O Senhor deu-lhes a beber a água da sabedoria, aleluia: Ela
          permanecerá neles e não vacilarão, aleluia: e ela os exaltará para
          sempre, aleluia, aleluia.{" "}
          <Text className="vernacular">Sl. 104, 1</Text> Louvai o Senhor e
          aclamai o seu nome: publicai as suas obras em todos os povos.
          <Text className="versicle"> ℣. </Text>Glória ao Pai...
        </Text>
      </Language>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Deus, qui Ecclésiam tuam novo semper fetu multíplicas: concéde fámulis
          tuis; ut sacraméntum vivéndo téneant, quod fide percepérunt. Per
          Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que aumentais incessantemente a vossa Igreja com novos filhos,
          concedei aos vossos servos a graça de mostrarem, pela sã conduta de
          sua vida, o efeito do sacramento que receberam pela fé. Por nosso
          Senhor...
        </Text>
      </Language>

      <H3 text="Epístola" />

      <Text className="em">Act. 13, 16 & 26-33</Text>

      <Language>
        <Text className="latin">Léctio Actuum Apostolórum.</Text>
        <Text className="vernacular">Lição dos Actos dos Apóstolos.</Text>
        <Text className="latin">
          In diébus illis: Surgens Paulus et manu silentium índicens, ait: Viri
          fratres, fílii generis Abraham, et qui in vobis timent Deum, vobis
          verbum salútis hujus missum est. Qui enim habitábant Jerúsalem, et
          príncipes ejus, ignorántes Jesum et voces Prophetárum, quæ per omne
          sábbatum legúntur, judicántes implevérunt: et nullam causam mortis
          inveniéntes in eo, petiérunt a Piláto, ut interfícerent eum. Cumque
          consummássent ómnia, quæ de eo scripta erant, deponéntes eum de ligno,
          posuérunt eum in monuménto. Deus vero suscitávit eum a mórtuis tértia
          die: qui visus est per dies multos his, qui simul ascénderant cum eo
          de Galilǽa in Jerúsalem, qui usque nunc sunt testes ejus ad plebem. Et
          nos vobis annuntiámus eam, quæ ad patres nostros repromíssio facta
          est: quóniam hanc Deus adimplévit fíliis nostris, resúscitans Jesum
          Christum, Dóminum nostrum.
        </Text>
        <Text className="vernacular">
          Naqueles dias, levantando-se Paulo e fazendo sinal com a mão, a pedir
          silêncio, disse: «Varões, meus irmãos, descendentes de Abraão, e
          aqueles de vós que temem Deus: é a vós que esta palavra de salvação é
          dirigida. Os habitantes de Jerusalém e seus discípulos, havendo
          desprezado Jesus e as palavras dos Profetas, que lhes foram lidas em
          cada sábado, as cumpriram, condenando-O; e, ainda que não tivessem
          encontrado n’Ele nada que merecesse a morte, pediram a Pilatos que
          mandasse matá-l’O. Quando se cumpriu tudo quanto estava escrito a seu
          respeito, desceram-n’O da cruz e depositaram-n’O no sepulcro. Mas Deus
          ressuscitou-O dos mortos ao terceiro dia; e, durante vários dias, em
          seguida, foi visto por aqueles que haviam subido com Ele da Galileia
          para Jerusalém, os quais agora são suas testemunhas junto do povo.
          Nós, pois, vos anunciamos que a promessa feita a nossos pais, Deus já
          a cumpriu para os nossos filhos, ressuscitando nosso Senhor Jesus
          Cristo».
        </Text>
      </Language>

      <H3 text="Gradual" />

      <Text className="em">Sl. 117, 24</Text>

      <Language>
        <Text className="latin">
          Hæc dies, quam fecit Dóminus: exsultémus et lætémur in ea.
          <Text className="versicle"> ℣. </Text>
          <Text className="latin">Ps. 106, 2</Text> Dicant nunc, qui redémpti
          sunt a Dómino: quos rédemit de manu inimíci, et de regiónibus
          congregávit eos.
        </Text>
        <Text className="vernacular">
          Eis o dia que o Senhor fez: exultemos e alegremo-nos nele.
          <Text className="versicle"> ℣. </Text>
          <Text className="vernacular">Sl. 106, 2</Text> Assim devem cantar
          agora aqueles que o Senhor resgatou e tirou das mãos dos inimigos, e
          que, sendo de muitas regiões, os congregou em um só povo.
        </Text>
        <Text className="latin">
          Allelúja, allelúja.<Text className="versicle"> ℣. </Text>Surrexit
          Dóminus de sepúlcro, qui pro nobis pepéndit in ligno.
        </Text>
        <Text className="vernacular">
          Aleluia, aleluia.<Text className="versicle"> ℣. </Text>Ressuscitou do
          sepulcro o Senhor, que havia sido pregado no madeiro por nossa causa.
        </Text>
      </Language>

      <H3 text="Evangelho" />

      <Text className="em">Lc. 24, 36-47</Text>

      <Language>
        <Text className="latin">
          <Text className="cross"> ✠ </Text> Sequéntia sancti Evangélii secúndum
          Lucam.
        </Text>
        <Text className="vernacular">
          <Text className="cross"> ✠ </Text> Continuação do santo Evangelho
          segundo S. Lucas.
        </Text>
        <Text className="latin">
          In illo témpore: Stetit Jesus in médio discipulórum suórum et dicit
          eis: Pax vobis: ego sum, nolíte timére. Conturbáti vero et contérriti,
          existimábant se spíritum vidére. Et dixit eis: Quid turbáti estis, et
          cogitatiónes ascéndunt in corda vestra? Vidéte manus meas et pedes,
          quia ego ipse sum: palpáte et vidéte: quia spíritus carnem et ossa non
          habet, sicut me vidétis habére. Et cum hoc dixísset, osténdit eis
          manus et pedes. Adhuc autem illis non credéntibus et mirántibus præ
          gáudio, dixit: Habétis hic aliquid, quod manducétur? At illi
          obtulérunt ei partem piscis assi et favum mellis. Et cum manducásset
          coram eis, sumens relíquias, dedit eis. Et dixit ad eos: Hæc sunt
          verba, quæ locútus sum ad vos, cum adhuc essem vobíscum, quóniam
          necésse est impléri ómnia, quæ scripta sunt in lege Móysi et Prophétis
          et Psalmis de me. Tunc apéruit illis sensum, ut intellégerent
          Scriptúras. Et dixit eis: Quóniam sic scriptum est, et sic oportébat
          Christum pati, et resúrgere a mórtuis tértia die: et prædicári in
          nómine ejus pœniténtiam, et remissiónem peccatórum in omnes gentes.
        </Text>
        <Text className="vernacular">
          Naquele tempo, apareceu Jesus no meio dos discípulos e disse-lhes: «A
          paz seja convosco! Sou Eu, não tenhais receio». Admirados e atónitos,
          os discípulos pensavam que viam algum espírito! Mas Ele disse-lhes:
          «Porque vos perturbais e porque se levantam pensamentos de dúvida nos
          vossos corações? Vede as minhas mãos e os meus pés; sou Eu mesmo.
          Apalpai e vede; pois um espírito não tem carne, nem ossos, como Eu
          tenho». Depois que lhes disse isto, mostrou-lhes as mãos e os pés.
          Então, como não acreditassem ainda (na cegueira da alegria em que
          estavam), disse-lhes: «Tendes aí alguma coisa para comer?».
          Apresentaram-Lhe um bocado de peixe assado e um favo de mel. E,
          havendo comido perante eles, tomou os restos e deu-lhos. Depois
          disse-lhes: «Eis o que vos dizia quando ainda estava convosco: que era
          preciso que se cumprisse, tudo o que estava escrito a meu respeito na
          lei de Moisés, nos Profetas e nos Salmos». Então iluminou-lhes o
          espírito, para que compreendessem as Escrituras. Depois disse-lhes:
          «Está também escrito: «Convinha que Cristo padecesse, ressuscitasse
          dos mortos ao terceiro dia e em seu nome fosse pregada a penitência e
          a remissão dos pecados em todas as nações».
        </Text>
      </Language>

      <H3 text="Ofertório" />

      <Text className="em">Sl. 17, 14 & 16</Text>

      <Language>
        <Text className="latin">
          Intónuit de cœlo Dóminus, et Altíssimus dedit vocem suam: et
          apparuérunt fontes aquárum, allelúja.
        </Text>
        <Text className="vernacular">
          Lá no céu o Senhor trovejou e o Altíssimo fez ouvir a sua voz. Então
          irromperam as fontes das águas, aleluia.
        </Text>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Text className="latin">
          Súscipe, Dómine, fidélium preces cum oblatiónibus hostiárum: ut, per
          hæc piæ devotiónis offícia, ad cœléstem glóriam transeámus. Per
          Dóminum...
        </Text>
        <Text className="vernacular">
          Recebei, Senhor, as preces dos vossos fiéis, unidas às oblações destas
          hóstias, a fim de que, por meio destes cultos de devoção piedosa,
          alcancemos glória celestial. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Comúnio" />

      <Text className="em">Cl. 3, 1-2</Text>

      <Language>
        <Text className="latin">
          Si consurrexístis cum Christo, quæ sursum sunt quǽrite, ubi Christus
          est in déxtera Dei sedens, allelúja: quæ sursum sunt sápite, allelúja.
        </Text>
        <Text className="vernacular">
          Se já ressuscitastes com Cristo, procurai as coisas do céu, onde
          Cristo está assentado à mão direita de Deus, aleluia; meditai nas
          coisas do céu, aleluia.
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Concéde, quǽsumus, omnípotens Deus: ut paschális percéptio sacraménti,
          contínua in nostris méntibus persevéret. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus omnipotente, Vos rogamos, fazei que a virtude do sacramento
          pascal, que recebemos, permaneça perpetuamente nas nossas almas. Por
          nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
