import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0120() {
  return (
    <PageWrapper>
      <H1 text="S. S. Fabião e Sebastião, Márts., a 20 de Janeiro" />

      <Typography className="comment">
        Os dois grandes mártires romanos, Fabiano e Sebastião, manifestaram, por sua coragem, o
        primeiro no ano de 250, sob a perseguição de Decio, o segundo em 284, sob a de Diocleciano,
        o poder divino do Cristo «que neles operou maravilhas» (Gr.). Os antigos martirológico unem
        os seus nomes. A aparição do Espírito Santo, sob a forma de pomba, havia atestado a
        divindade de Jesus no dia de seu Baptismo. Uma pomba, esvoaçando sobre a cabeça de Fabiano,
        o designou à escolha da Igreja, como Vigário de Jesus Cristo. São Sebastião, oficial da casa
        imperial e chefe de uma coorte, sustentava a coragem de seus irmãos de armas, no meio dos
        tormentos sofridos pela fé. Diocleciano mandou traspassarem-no com flechas. Sebastião,
        escapando à morte, reapareceu diante do imperador, exprobando-lhe os crimes. Foi condenado à
        morte pelas varas. Como os Mártires de que fala a Epístola, os dois Santos «foram
        encontrados perfeitos no testemunho que prestaram à sua fé em Jesus Cristo», pois, «pela
        causa do Filho do Homem, foram perseguidos» (Ev.). Inúmeras são as curas operadas por S.
        Sebastião, ou antes, pela virtude de Cristo que estava nele (Ev. e Com.). Recorramos em
        nossa fraqueza (Or.) à poderosa protecção desses gloriosos mártires.
      </Typography>

      <H3 text="Intróito" />
      <LinkCard
        href="/missal/comum/6muitosmartires1#intróito"
        title="Muitos Mártires - Missa Intret in"
      />
      <H3 text="Oração" />
      <Language>
        <Typography className="latin">
          Infirmitátem nostram réspice, omnípotens Deus: et, quia pondus própriæ actiónis gravat,
          beatórum Mártyrum tuórum Fabiáni et Sebastiáni intercéssio gloriósa nos prótegat. Per
          Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus omnipotente, olhai para a nossa fraqueza, e, visto que estamos oprimidos sob o peso
          dos nossos pecados, fazei que sejamos protegidos pela gloriosa intercessão dos vossos B.
          B. Mártires Fabião e Sebastião. Por nosso Senhor...
        </Typography>
      </Language>
      <H3 text="Epístola" />
      <Typography className="em">Heb. 11, 33-39</Typography>
      <Language>
        <Typography className="latin">Léctio Epístolæ beáti Pauli Apóstoli ad Hebrǽos.</Typography>
        <Typography className="vernacular">
          Lição da Epístola do B. Ap.º Paulo aos Hebreus.
        </Typography>
        <Typography className="latin">
          Fratres: Sancti per fidem vicérunt regna, operáti sunt justítiam, adépti sunt
          repromissiónes, obturavérunt ora leónum, exstinxérunt ímpetum ignis, effugérunt áciem
          gládii, convaluérunt de infirmitáte, fortes facti sunt in bello, castra vertérunt
          exterórum: accepérunt mulíeres de resurrectióne mórtuos suos: álii autem disténti sunt,
          non suscipiéntes redemptiónem, ut meliórem invenírent resurrectiónem: alii vero ludíbria
          et vérbera expérti, ínsuper et víncula et cárceres: lapidáti sunt, secti sunt, tentáti
          sunt, in occisióne gládii mórtui sunt: circuiérunt in melótis, in péllibus caprínis,
          egéntes, angustiáti, afflicti: quibus dignus non erat mundus: in solitudínibus errantes,
          in móntibus et spelúncis et in cavérnis terræ. Et hi omnes testimónio fídei probáti,
          invénti sunt in Christo Jesu, Dómino nostro.
        </Typography>
        <Typography className="vernacular">
          Meus irmãos: Pela Fé os santos conquistaram os reinos, praticaram a justiça, alcançaram a
          realização das promessas, fecharam a boca dos leões, apagaram as chamas do fogo, escaparam
          ao fio das espadas, convalesceram de suas enfermidades, foram fortes nas batalhas e
          puseram em debandada as forças inimigas. Pela Fé as mulheres receberam, já ressuscitados,
          os seus mortos, outros aceitaram a tortura sem desejarem livrar-se, a fim de alcançarem
          uma ressurreição melhor; e outros ainda foram escarnecidos e açoitados e até algemados e
          presos. Pela Fé muitos foram apedrejados, serrados, tentados, passados à espada,
          decapitados, levaram vida errante, vestidos com peles de ovelhas e de cabras, despojados
          de tudo, perseguidos e maltratados. Pela Fé houve homens (de quem o mundo não era digno)
          que andaram errantes nos desertos e nas montanhas e escondidos nas Covas e nas cavernas da
          terra. Todos foram provados para testemunho da sua Fé em N. S. Jesus Cristo.
        </Typography>
      </Language>
      <H3 text="Gradual" />
      <Typography className="em">Ex. 15, 11</Typography>
      <Language>
        <Typography className="latin">
          Gloriósus Deus in Sanctis suis: mirábilis in majestáte, fáciens prodígia.
          <Typography className="versicle"> ℣. </Typography>
          <Typography className="latin">ibid., 6</Typography> Déxtera tua, Dómine, glorificáta est
          in virtúte: déxtera manus tua confrégit inimícos.
        </Typography>
        <Typography className="vernacular">
          Deus é glorioso em seus Santos: e admirável na sua majestade, praticando prodígios.
          <Typography className="versicle"> ℣. </Typography>
          <Typography className="vernacular">ibid., 6</Typography> Senhor, a vossa mão direita
          engrandeceu-se pela força: a vossa mão direita esmagou os inimigos.
        </Typography>
        <Typography className="latin">
          Allelúja, allelúja.<Typography className="versicle"> ℣. </Typography>
          <Typography className="latin">Ps. 144, 10-11</Typography> Sancti tui, Dómine, benedícent
          te: glóriam regni tui dicent. Allelúja.
        </Typography>
        <Typography className="vernacular">
          Aleluia, aleluia.<Typography className="versicle"> ℣. </Typography>
          <Typography className="vernacular">Sl. 144, 10-11</Typography> Vossos Santos Vos bendirão,
          Senhor: e proclamarão a glória do vosso reino. Aleluia.
        </Typography>
      </Language>
      <Typography className="aside">
        Depois da Septuagésima, a Aleluia é omitida e é dito o Trato da{" "}
        <Link className="link" href="/missal/comum/6muitosmartires1#trato">
          Missa Intret in.
        </Link>
      </Typography>
      <H3 text="Evangelho" />
      <LinkCard
        href="/missal/comum/7muitosmartires2#evangelho"
        title="Muitos Mártires - Missa Sapiéntiam sanctórum"
      />
      <H3 text="Ofertório" />
      <Typography className="em">Sl. 31, 11</Typography>
      <Language>
        <Typography className="latin">
          Lætámini in Dómino et exsultáte, justi: et gloriámini, omnes recti corde.
        </Typography>
        <Typography className="vernacular">
          Alegrai-vos no Senhor, ó justos. Todos aqueles que possuem o coração recto serão
          glorificados.
        </Typography>
      </Language>
      <H3 text="Secreta" />
      <Language>
        <Typography className="latin">
          Hóstias tibi, Dómine, beatórum Mártyrum tuórum Fabiáni et Sebastiáni dicátas méritis,
          benígnus assúme: et ad perpétuum nobis tríbue proveníre subsídium. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Recebei benigno, Senhor, as hóstias que Vos oferecemos pelos méritos dos vossos B. B.
          Mártires Fabião e Sebastião e dignai-Vos permitir que em virtude delas alcancemos o vosso
          perpétuo socorro. Por nosso Senhor...
        </Typography>
      </Language>
      <H3 text="Comúnio" />
      <Typography className="em">Lc. 6, 18 & 19</Typography>
      <Language>
        <Typography className="latin">
          Multitúdo languéntium, et qui vexabántur a spirítibus immúndis, veniébant ad eum: quia
          virtus de illo exíbat, et sanábat omnes.
        </Typography>
        <Typography className="vernacular">
          Numerosos enfermos e possessos de espíritos imundos vinham ter com Ele, pois de si saía
          uma tal virtude que a todos curava.
        </Typography>
      </Language>
      <H3 text="Postcomúnio" />
      <Language>
        <Typography className="latin">
          Refécti participatióne múneris sacri, quǽsumus, Dómine, Deus noster: ut, cujus exséquimur
          cultum, intercedéntibus sanctis Martýribus tuis Fabiáno et Sebastiáno, sentiámus efféctum.
          Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Fortalecidos com a participação deste dom sacratíssimo, Vos suplicamos, Senhor, nosso
          Deus, que, por intercessão dos vossos B. B. Mártires Fabião e Sebastião, sintamos o efeito
          do mystério que hoje celebrámos. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
