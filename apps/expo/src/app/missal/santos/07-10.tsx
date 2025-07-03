import { Link } from "expo-router";
import { Text, View } from "react-native";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";

export default function Page0710() {
  return (
    <PageWrapper>
      <Text className="h1">
        Os 7 Irmãos e S. S. Rufina e Secunda, Márts., a 10 de Julho
      </Text>

      <Text className="comment">
        A Igreja, celebrando hoje o triunfo dos 7 filhos de Santa Felicidade,
        martirizados em sua presença, louva a mulher forte (Ep.) que,
        exortando-os a morrer, «em todos foi ela própria vitoriosa». Estendeu às
        almas dos filhos a sua maternidade, fazendo-os cumprir a vontade de Deus
        (Ev., Com.) (Ver
        <Link href="/missal/santos/11-23#comemoração-de-santa-felicidade">
          Comemoração de Santa Felicidade
        </Link>
        ). Eles morreram no ano de 150, sob o imperador Antonino. Um século
        depois, Rufina e Segunda, irmãs pela natureza tornaram-se duplamente
        irmãs, misturando o seu sangue no mesmo suplício, para não perderem a
        virgindade, por elas consagrada a Jesus, seu esposo. Foram martirizadas
        em 257, em Roma, sob os imperadores Valeriano e Galiano.
      </Text>

      <Text className="h3">Intróito</Text>

      <Text className="em">Sl. 112, 1 & 9</Text>

      <Language>
        <Text className="latin">
          Laudáte, pueri, Dóminum, laudáte nomen Dómini: qui habitáre facit
          stérilem in domo, matrem filiórum lætántem.{" "}
          <Text className="latin">Ps. ibid., 2</Text> Sit nomen Dómini
          benedíctum: ex hoc nunc, ei usque in sǽculum.
          <Text className="versicle"> ℣. </Text>Gloria Patri...
        </Text>
        <Text className="vernacular">
          Louvai o Senhor, ó meninos; louvai o nome do Senhor; pois Ele fez
          habitar, cheia de alegria, na sua casa, como mãe de numerosos filhos,
          aquela que antes era estéril.{" "}
          <Text className="vernacular">Sl. ibid., 2</Text> Bendito seja o nome
          do Senhor, agora e em todos os séculos.
          <Text className="versicle"> ℣. </Text>Glória ao Pai...
        </Text>
      </Language>

      <Text className="h3">Oração</Text>

      <Language>
        <Text className="latin">
          Præsta, quǽsumus, omnípotens Deus: ut, qui gloriósos Martyres fortes
          in sua confessióne cognóvimus, pios apud te in nostra intercessióne
          sentiámus. Per Dóminum nostrum...
        </Text>
        <Text className="vernacular">
          Concedei-nos, Vos pedimos, ó Deus omnipotente, que, reconhecendo nós a
          fortaleza com que estes gloriosos Mártires confessaram a sua fé,
          sintamos quanto eles junto de Vós são fervorosos, intercedendo por
          nós. Por nosso Senhor...
        </Text>
      </Language>

      <Text className="h3">Epístola</Text>

      <LinkCard
        href="/missal/comum/24nemvirgensnemmartires#epístola"
        title="Nem Virgens nem Mártires - Missa Cognóvi, Dómine"
      />

      <Text className="h3">Gradual</Text>

      <Text className="em">Sl. 123, 7-8</Text>

      <Language>
        <Text className="latin">
          Anima nostra, sicut passer, erépta est de láqueo venántium.
          <Text className="versicle"> ℣. </Text>
          Láqueus contrítus est, et nos liberáti sumus: adjutórium nostrum in
          nómine Dómini, qui fecit cœlum et terram.
        </Text>
        <Text className="vernacular">
          A nossa alma livrou-se, como um pássaro, do laço dos caçadores.
          <Text className="versicle"> ℣. </Text>O laço quebrou-se e ficamos
          livres: o nosso auxílio está no nome do Senhor, que criou o céu e a
          terra.
        </Text>
        <Text className="latin">
          Allelúja, allelúja.<Text className="versicle"> ℣. </Text>Hæc est vera
          fratérnitas, quæ vicit mundi crímina: Christum secuta est, ínclita
          tenens regna cœléstia. Allelúja.
        </Text>
        <Text className="vernacular">
          Aleluia, aleluia.<Text className="versicle"> ℣. </Text>Eis a
          verdadeira fraternidade que venceu os perigos do mundo. Ela seguiu
          Cristo e possuirá com glória o reino celestial. Aleluia.
        </Text>
      </Language>

      <Text className="h3">Evangelho</Text>

      <Text className="em">Mt. 12, 46-50</Text>

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
          In illo témpore: Loquente Jesu ad turbas, ecce, Mater ejus et fratres
          stabant foris, quæréntes loqui ei. Dixit autem ei quidam: Ecce, mater
          tua et fratres tui foris stant, quæréntes te. At ipse respóndens
          dicénti sibi, ait: Quæ est mater mea et qui sunt fratres mei? Et
          exténdens manum in discípulos suos, dixit: Ecce mater mea et fratres
          mei. Quicúmque enim fécerit voluntátem Patris mei, qui in cœlis est:
          ipse meus frater et soror et mater est.
        </Text>
        <Text className="vernacular">
          Naquele tempo, enquanto Jesus falava às turbas, eis que sua mãe e seus
          irmãos estavam lá fora, procurando falar-Lhe. Disse-Lhe, pois, alguém:
          «Eis que vossa mãe e vossos irmãos estão lá fora e Vos procuram.
          Jesus, respondendo àqueles que Lhe falaram, disse: «Quem é a minha mãe
          e quem são os meus irmãos?». E, estendendo a mão para os seus
          discípulos, disse: «Eis a minha mãe e os meus irmãos, pois todo aquele
          que faz a vontade de meu Pai, que está nos céus, é meu irmão, minha
          irmã e minha mãe».
        </Text>
      </Language>

      <Text className="h3">Ofertório</Text>

      <Text className="em">Sl. 123, 7</Text>

      <Language>
        <Text className="latin">
          Anima nostra, sicut passer, erépta est de láqueo venántium: láqueus
          contrítus est, et nos liberáti sumus.
        </Text>
        <Text className="vernacular">
          A nossa alma livrou-se, como um pássaro, do laço dos caçadores. O laço
          quebrou-se e ficámos livres.
        </Text>
      </Language>

      <Text className="h3">Secreta</Text>

      <Language>
        <Text className="latin">
          Sacrifíciis præséntibus, quǽsumus, Dómine, inténde placátus: et,
          intercedéntibus Sanctis tuis, devotióni nostræ profíciant et salúti.
          Per Dóminum nostrum...
        </Text>
        <Text className="vernacular">
          Dignai-Vos olhar propício, Senhor, para o presente sacrifício, e que
          por intercessão dos vossos Santos ele nos sirva para aumentar a nossa
          devoção e para alcançar a salvação. Por nosso Senhor...
        </Text>
      </Language>

      <Text className="h3">Comúnio</Text>

      <Text className="em">Mt. 12, 50</Text>

      <Language>
        <Text className="latin">
          Quicumque fecerit voluntátem Patris mei, qui in cælis est: ipse meus
          frater et soror et mater est, dicit Dóminus.
        </Text>
        <Text className="vernacular">
          Todo aquele que faz a vontade de meu Pai, que está nos céus, é meu
          irmão, minha irmã e minha mãe, diz o Senhor.
        </Text>
      </Language>

      <Text className="h3">Postcomúnio</Text>

      <Language>
        <Text className="latin">
          Quǽsumus, omnípotens Deus: ut, intercedéntibus Sanctis tuis, illíus
          salutáris capiámus efféctum; cujus per heec mystéria pignus accépimus.
          Per Dóminum...
        </Text>
        <Text className="vernacular">
          Vos suplicamos, ó Deus omnipotente, que, pela intercessão dos vossos
          Santos, Vos digneis dispensar-nos o efeito da salvação, de que já
          recebemos o penhor nestes mystérios. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
