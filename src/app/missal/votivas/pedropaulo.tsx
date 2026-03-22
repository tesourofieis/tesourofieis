import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PagePedropaulo() {
  return (
    <PageWrapper>
      <H1 text="Missa dos S. S. Apóstolos Pedro e Paulo" />

      <H3 text="Intróito" />

      <LinkCard href="/missal/santos/11-30#intróito" title="S. André, Apóstolo" />

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, cujus déxtera beátum Petrum, ambulántem in flúctibus, ne mergerétur, eréxit, et
          coapóstolum ejus Paulum, tértio naufragántem, de profúndo pélagi liberávit: exáudi nos
          propítius, et concéde; ut, ambórum méritis, æternitátis glóriam consequámur: Qui vivis et
          regnas...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, cuja mão poderosa sustentou o B. Pedro quando caminhava sobre as águas, não
          deixando que ele se afundasse, e salvou do fundo do mar o seu companheiro de apostolado,
          Paulo, quando este naufragou pela terceira vez, ouvi-nos propício, a fim de que, pelos
          méritos destes dois Apóstolos, obtenhamos a glória eterna. Ó Vós, que...
        </Typography>
      </Language>

      <H3 text="Epístola" />

      <Typography className="em">Act. 5, 12-16</Typography>

      <Language>
        <Typography className="latin">Léctio Actuum Apostolorum.</Typography>
        <Typography className="vernacular">Lição dos Actos dos Apóstolos.</Typography>
        <Typography className="latin">
          In diébus illis: Per manus Apostolórum fiébant signa et prodígia multa in plebe. Et erant
          unanímiter omnes in pórticu Salomónis. Ceterórum autem nemo audébat se conjúngere illis:
          sed magnificábat eos pópulus. Magis autem augebátur credéntium in Dómino multitúdo virórum
          ac mulíerum, ita ut in pláteas ejícerent infírmos, et pónerent in léctulis ac grabátis,
          ut, veniénte Petro, saltem umbra illíus obumbráret quemquam illórum, et liberaréntur ab
          infirmitátibus suis. Concurrébat autem et multitúdo vicinárum civitátum Jerúsalem,
          afferéntes ægros et vexátos a spirítibus immúndis: qui curabántur omnes.
        </Typography>
        <Typography className="vernacular">
          Naqueles dias, os Apóstolos praticavam muitos milagres e prodígios no meio do povo,
          conservando-se todos nas galerias de Salomão com o mesmo pensamento. Nenhum dos outros
          ousava juntar-se a eles, embora o povo lhes tecesse muitos louvores. E o número daqueles,
          tantos homens como mulheres, que acreditavam no Senhor, aumentava cada vez mais. E
          conduziam os doentes para as praças em leitos e macas para que, quando Pedro passasse, ao
          menos a sua sombra cobrisse alguns deles e ficassem sarados de suas enfermidades. Acorriam
          até das cidades vizinhas de Jerusalém muitas pessoas, trazendo enfermos, vindo também
          outros que estavam atormentados pelos espíritos imundos. E todos eram curados.
        </Typography>
      </Language>

      <H3 text="Gradual" />

      <Typography className="em">Sl. 44, 17 & 18</Typography>

      <Language>
        <Typography className="latin">
          Constítues eos príncipes super omnem terram: mémores erunt nóminis tui, Dómine.
          <Typography className="versicle"> ℣. </Typography>Pro pátribus tuis nati sunt tibi fílii:
          proptérea pópuli confitebúntur tibi.
        </Typography>
        <Typography className="vernacular">
          Vós os instituístes príncipes em todo o universo: e eles perpetuarão a glória do vosso
          nome, Senhor, em toda a terra.
          <Typography className="versicle"> ℣. </Typography>
          Para substituir os vossos pais, nascer-vos-ão filhos: pelo que os povos vos louvarão.
        </Typography>
        <Typography className="latin">
          Allelúja, allelúja.<Typography className="versicle"> ℣. </Typography>
          <Typography className="latin">Ps. 138, 17</Typography> Nimis honoráti sunt amíci tui,
          Deus: nimis confortátus est principátus eórum. Allelúja.
        </Typography>
        <Typography className="vernacular">
          Aleluia, aleluia.<Typography className="versicle"> ℣. </Typography>
          <Typography className="vernacular">Sl. 138, 17</Typography> Honrais largamente os vossos
          amigos, ó Deus; o seu poder tem-se fortalecido extraordinariamente. Aleluia.
        </Typography>
      </Language>

      <Typography className="aside">
        Depois da Septuagésima omite-se o Aleluia e o que se segue, e diz-se o:
      </Typography>

      <H3 text="Trato" />

      <Typography className="em">Sl. 125, 5-6</Typography>

      <Language>
        <Typography className="latin">
          Qui séminant in lácrimis, in gáudio metent.
          <Typography className="versicle"> ℣. </Typography>Eúntes ibant et flébant, mitténtes
          sémina sua.
          <Typography className="versicle"> ℣. </Typography>
          Veniéntes autem vénient cum exsultatióne, portántes manípulos suos.
        </Typography>
        <Typography className="vernacular">
          Aqueles que semeiam com lágrimas, colherão com risos.
          <Typography className="versicle"> ℣. </Typography>Iam chorando e lançando à terra as suas
          sementes:
          <Typography className="versicle"> ℣. </Typography>Mas, quando regressaram, vinham alegres,
          transportando feixes do seu trigo.
        </Typography>
      </Language>

      <H3 text="Evangelho" />

      <LinkCard href="/missal/comum/16abades#evangelho" title="Abades - Missa Os justi" />

      <H3 text="Ofertório" />

      <Typography className="em">Sl. 18, 5</Typography>

      <Language>
        <Typography className="latin">
          In omnem terram exivit sonus eórum: et in fines orbis terræ verba eórum.
        </Typography>
        <Typography className="vernacular">
          O som da sua voz ecoou por toda a terra: e as suas palavras estenderam-se até às
          extremidades da terra.
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Offérimus tibi, Dómine, preces et múnera: quæ ut tuo sint digna conspéctu. Apostolórum
          tuórum Petri et Pauli précibus adjuvémur. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Senhor, Vos oferecemos as nossas orações e oblatas; e, para que sejam dignas dos vossos
          olhares, fazei que os vossos Apóstolos Pedro e Paulo as acompanhem com suas preces. Por
          nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Comúnio" />

      <Typography className="em">Mt. 19, 28</Typography>

      <Language>
        <Typography className="latin">
          Vos, qui secuti estis me, sedebitis super sedes, judicantes duodecim tribus Israel.
        </Typography>
        <Typography className="vernacular">
          Ó vós, que me acompanhastes, assentar-vos-eis em doze tronos e julgareis as doze tribos de
          Israel.
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Prótege, Dómine, pópulum tuum: et Apostolórum tuórum Petri et Pauli patrocínio
          confidéntem, perpétua defensióne consérva. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Protegei o vosso povo, Senhor, e, visto que ele se coloca sob o patrocínio dos vossos
          Apóstolos Pedro e Paulo, dignai-Vos defendê-lo e guardá-lo perpetuamente. Por nosso
          Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
