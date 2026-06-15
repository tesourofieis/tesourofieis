import { MissalRefLink as Link } from "~/components/MissalRefLink";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page1122() {
  return (
    <PageWrapper>
      <H1 text="Santa Cecília, Virgem e Mártir, a 22 de Novembro" />

      <Typography className="comment">
        Nascida em Roma, da illustre familia dos Cæcilii, Cecília, desde a infância, consagrou a
        Deus a sua virgindade. Mais tarde, constrangida a desposar Valeriano, jovem pagão, disse-lhe
        na tarde das núpcias: Valeriano, eu estou colocada sob a guarda de um Anjo que protege a
        minha virgindade; portanto, nada tenteis a meu respeito, a fim de não atrair sobre vós a
        cólera de Deus. Valeriano não ousou aproximar-se e declarou-lhe que acreditaria em Jesus
        Christo, se visse esse Anjo. Cecilia respondeu-lhe que isso não era possível sem primeiro
        ter recebido o baptismo e mandou-o ao Papa Urbano que se ocultara, por causa das
        perseguições, nas Catacumbas. Urbano baptizou-o e Valeriano viu junto à sua virginal esposa
        um anjo brilhante de claridade divina. Ela instruiu também a Tiburcio, irmão de Valeriano,
        na fé em Jesus Christo, e Tiburcio, baptizado, também viu o anjo de Cecilia. Pouco tempo
        depois, foram ambos martirizados sob o prefeito Almachio, o mesmo que mandou prender Cecilia
        e ordenou fosse morta em sua própria casa. Era pelo ano de 230. O seu corpo foi descoberto
        pelo Cardeal Sfondrati, em 1599, tal qual estava no momento de sua morte. Estevão Maderno
        esculpiu a sua celebre reprodução que se vê sob o altar-mor da igreja de Santa Cecilia em
        Roma. A casa onde morava foi transformada em santuário, no qual repousa o seu corpo. Desde
        muitos séculos, um coro de Virgens da Ordem de S. Bento vela sobre o precioso tesouro. Essa
        igreja é um dos dois ornamentos do Transtevere (o outro é Santa Maria do Transtevere). Ali é
        feita a Estação na Quarta-Feira da 2ª semana da Quaresma. Santa Cecilia tem o seu nome no
        Canon da Missa. Ao som dos instrumentos de música, diz o 1º responso de Matinas, a Virgem
        Cecilia dirigia do seu coração um cântico ao Senhor. Santa Cecilia é a padroeira dos
        musicos.
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/17virgensmartires1">
          Missa Loquébar
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui nos ánnua beátæ Caeciliae Vírginis et Mártyris tuæ sollemnitáte lætíficas: da,
          ut, quam venerámur offício, étiam piæ conversatiónis sequámur exémplo. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que nos alegrais com a solenidade anual da B. Cecília, vossa Virgem e Mártir,
          dignai-Vos permitir que, honrando-a com estes cultos, imitemos também os exemplos da sua
          piedosa vida. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Epístola" />

      <LinkCard
        href="/missal/comum/18virgensmartires2#epístola"
        title="Virgens Mártires - Missa Me exspectavérunt"
      />

      <H3 text="Gradual" />

      <Typography className="em">Sl. 44, 11 & 12</Typography>

      <Language>
        <Typography className="latin">
          Audi, fília, et vide, et inclína aurem tuam: quia concupívit Rex spéciem tuam.
          <Typography className="versicle"> ℣. </Typography>
          <Typography className="latin">ibid., 5</Typography> Spécie tua et pulchritúdine tua
          inténde, próspere procéde et regna.
        </Typography>
        <Typography className="vernacular">
          Escutai, ó minha filha, vede e inclinai o vosso ouvido; o Rei está cheio de amor por vós,
          por causa da vossa beleza!
          <Typography className="versicle"> ℣. </Typography>
          <Typography className="vernacular">ibid., 5</Typography> Com a vossa glória e com vossa
          formosura caminhai, triunfai e reinai.
        </Typography>
        <Typography className="latin">
          Allelúja, allelúja.<Typography className="versicle"> ℣. </Typography>
          <Typography className="latin">Matth. 25, 4 & 6</Typography> Quinque prudéntes vírgines
          accepérunt óleum in vasis suis cum lampádibus: média autem nocte clamor factus est: Ecce,
          sponsus venit: exíte óbviam Christo Dómino. Allelúja.
        </Typography>
        <Typography className="vernacular">
          Aleluia, aleluia.<Typography className="versicle"> ℣. </Typography>
          <Typography className="vernacular">Mt. 25, 4 & 6</Typography> As cinco virgens prudentes
          tomaram óleo em seus vasos para suas lâmpadas. No meio da noite uma voz soou: eis que
          chega o esposo: ide ao encontro de Cristo, Senhor. Aleluia.
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Hæc hóstia, Dómine, placatiónis et laudis, quǽsumus: ut, intercedénte beáta Cæcília
          Vírgine et Mártyre tua, nos propitiatióne tua dignos semper effíciat. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Que esta hóstia de propiciação e de louvor, Senhor, Vos rogamos, nos torne sempre dignos
          da vossa misericórdia, pela intercessão da B. Cecília, vossa Virgem e Mártir. Por nosso
          Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Satiásti, Dómine, famíliam tuam munéribus sacris: ejus, quǽsumus, semper interventióne nos
          réfove, cujus sollémnia celebrámus. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Saciastes, Senhor, a vossa família com vossos sacratíssimos dons; e dignai-Vos
          favorecer-nos sempre, Vos imploramos, pela intercessão daquela cuja festa celebramos. Por
          nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
