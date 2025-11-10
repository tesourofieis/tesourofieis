import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0710() {
  return (
    <PageWrapper>
      <H1 text="Os 7 Irmãos e S. S. Rufina e Secunda, Márts., a 10 de Julho" />

      <Typography className="comment">
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
      </Typography>

      <H3 text="Intróito" />

      <Typography className="em">Sl. 112, 1 & 9</Typography>

      <Language>
        <Typography className="latin">
          Laudáte, pueri, Dóminum, laudáte nomen Dómini: qui habitáre facit
          stérilem in domo, matrem filiórum lætántem.{" "}
          <Typography className="latin">Ps. ibid., 2</Typography> Sit nomen
          Dómini benedíctum: ex hoc nunc, ei usque in sǽculum.
          <Typography className="versicle"> ℣. </Typography>Gloria Patri...
        </Typography>
        <Typography className="vernacular">
          Louvai o Senhor, ó meninos; louvai o nome do Senhor; pois Ele fez
          habitar, cheia de alegria, na sua casa, como mãe de numerosos filhos,
          aquela que antes era estéril.{" "}
          <Typography className="vernacular">Sl. ibid., 2</Typography> Bendito
          seja o nome do Senhor, agora e em todos os séculos.
          <Typography className="versicle"> ℣. </Typography>Glória ao Pai...
        </Typography>
      </Language>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Præsta, quǽsumus, omnípotens Deus: ut, qui gloriósos Martyres fortes
          in sua confessióne cognóvimus, pios apud te in nostra intercessióne
          sentiámus. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Concedei-nos, Vos pedimos, ó Deus omnipotente, que, reconhecendo nós a
          fortaleza com que estes gloriosos Mártires confessaram a sua fé,
          sintamos quanto eles junto de Vós são fervorosos, intercedendo por
          nós. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Epístola" />

      <LinkCard
        href="/missal/comum/24nemvirgensnemmartires#epístola"
        title="Nem Virgens nem Mártires - Missa Cognóvi, Dómine"
      />

      <H3 text="Gradual" />

      <Typography className="em">Sl. 123, 7-8</Typography>

      <Language>
        <Typography className="latin">
          Anima nostra, sicut passer, erépta est de láqueo venántium.
          <Typography className="versicle"> ℣. </Typography>
          Láqueus contrítus est, et nos liberáti sumus: adjutórium nostrum in
          nómine Dómini, qui fecit cœlum et terram.
        </Typography>
        <Typography className="vernacular">
          A nossa alma livrou-se, como um pássaro, do laço dos caçadores.
          <Typography className="versicle"> ℣. </Typography>O laço quebrou-se e
          ficamos livres: o nosso auxílio está no nome do Senhor, que criou o
          céu e a terra.
        </Typography>
        <Typography className="latin">
          Allelúja, allelúja.<Typography className="versicle"> ℣. </Typography>
          Hæc est vera fratérnitas, quæ vicit mundi crímina: Christum secuta
          est, ínclita tenens regna cœléstia. Allelúja.
        </Typography>
        <Typography className="vernacular">
          Aleluia, aleluia.<Typography className="versicle"> ℣. </Typography>Eis
          a verdadeira fraternidade que venceu os perigos do mundo. Ela seguiu
          Cristo e possuirá com glória o reino celestial. Aleluia.
        </Typography>
      </Language>

      <H3 text="Evangelho" />

      <Typography className="em">Mt. 12, 46-50</Typography>

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
          In illo témpore: Loquente Jesu ad turbas, ecce, Mater ejus et fratres
          stabant foris, quæréntes loqui ei. Dixit autem ei quidam: Ecce, mater
          tua et fratres tui foris stant, quæréntes te. At ipse respóndens
          dicénti sibi, ait: Quæ est mater mea et qui sunt fratres mei? Et
          exténdens manum in discípulos suos, dixit: Ecce mater mea et fratres
          mei. Quicúmque enim fécerit voluntátem Patris mei, qui in cœlis est:
          ipse meus frater et soror et mater est.
        </Typography>
        <Typography className="vernacular">
          Naquele tempo, enquanto Jesus falava às turbas, eis que sua mãe e seus
          irmãos estavam lá fora, procurando falar-Lhe. Disse-Lhe, pois, alguém:
          «Eis que vossa mãe e vossos irmãos estão lá fora e Vos procuram.
          Jesus, respondendo àqueles que Lhe falaram, disse: «Quem é a minha mãe
          e quem são os meus irmãos?». E, estendendo a mão para os seus
          discípulos, disse: «Eis a minha mãe e os meus irmãos, pois todo aquele
          que faz a vontade de meu Pai, que está nos céus, é meu irmão, minha
          irmã e minha mãe».
        </Typography>
      </Language>

      <H3 text="Ofertório" />

      <Typography className="em">Sl. 123, 7</Typography>

      <Language>
        <Typography className="latin">
          Anima nostra, sicut passer, erépta est de láqueo venántium: láqueus
          contrítus est, et nos liberáti sumus.
        </Typography>
        <Typography className="vernacular">
          A nossa alma livrou-se, como um pássaro, do laço dos caçadores. O laço
          quebrou-se e ficámos livres.
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Sacrifíciis præséntibus, quǽsumus, Dómine, inténde placátus: et,
          intercedéntibus Sanctis tuis, devotióni nostræ profíciant et salúti.
          Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Dignai-Vos olhar propício, Senhor, para o presente sacrifício, e que
          por intercessão dos vossos Santos ele nos sirva para aumentar a nossa
          devoção e para alcançar a salvação. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Comúnio" />

      <Typography className="em">Mt. 12, 50</Typography>

      <Language>
        <Typography className="latin">
          Quicumque fecerit voluntátem Patris mei, qui in cælis est: ipse meus
          frater et soror et mater est, dicit Dóminus.
        </Typography>
        <Typography className="vernacular">
          Todo aquele que faz a vontade de meu Pai, que está nos céus, é meu
          irmão, minha irmã e minha mãe, diz o Senhor.
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Quǽsumus, omnípotens Deus: ut, intercedéntibus Sanctis tuis, illíus
          salutáris capiámus efféctum; cujus per heec mystéria pignus accépimus.
          Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Vos suplicamos, ó Deus omnipotente, que, pela intercessão dos vossos
          Santos, Vos digneis dispensar-nos o efeito da salvação, de que já
          recebemos o penhor nestes mystérios. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
