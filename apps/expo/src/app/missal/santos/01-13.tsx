import { Typography } from "~/components/typography";
import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0113() {
  return (
    <PageWrapper>
      <H1 text="Dia da oitava da Epifania" />

      <Typography className="aside">
        Como no dia da{" "}
        <Link className="link" href="/missal/santos/01-06">
          Festa da Epifania
        </Link>{" "}
        , excepto o seguinte:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, cujus Unigénitus in substántia nostræ carnis appáruit: præsta,
          quǽsumus; ut per eum, quem símilem nobis foris agnóvimus, intus
          reformári mereámur: Qui tecum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, cujo Filho Unigénito apareceu na terra revestido com a
          substância da nossa carne, permiti, Vos rogamos, que mereçamos a graça
          de sermos reformados interiormente por Aquele que reconhecemos
          semelhante a nós exteriormente. Ele, que, sendo Deus...
        </Typography>
      </Language>

      <H3 text="Evangelho" />

      <Typography className="em">Jo. 1, 29-34</Typography>

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
          In illo témpore: Vidit Joánnes Jesum veniéntem ad se, et ait: Ecce
          Agnus Dei, ecce, qui tollit peccátum mundi. Hic est, de quo dixi: Post
          me venit vir, qui ante me factus est: quia prior me erat. Et ego
          nesciébam eum, sed ut manifestétur in Israël, proptérea veni ego in
          aqua baptízans. Et testimónium perhíbuit Joánnes, dicens: Quia vidi
          Spíritum descendéntem quasi colúmbam de cœlo, et mansit super eum. Et
          ego nesciébam eum: sed qui misit me baptizáre in aqua, ille mihi
          dixit: Super quem víderis Spíritum descendéntem, et manéntem super
          eum, hic est, qui baptízat in Spíritu Sancto. Et ego vidi: et
          testimónium perhíbui, quia hic est Fílius Dei.
        </Typography>
        <Typography className="vernacular">
          Naquele tempo, João viu Jesus, que caminhava para ele, e disse: «Eis o
          Cordeiro de Deus, eis o que tira o pecado do mundo. Este é Aquele de
          quem eu disse: «Depois de mim vem um homem, que me precedeu, porque já
          existia antes de mim. Eu O não conhecia, mas foi para que Ele fosse
          manifestado a Israel que vim baptizar na água». E João deu este
          testemunho, dizendo: «Eu vi o Espírito descer do céu, sob a forma de
          uma pomba, e pousar sobre Ele. Eu O não conhecia, mas Aquele que me
          enviou a baptizar na água disse-me: «Aquele sobre quem vires o
          Espírito descer e pousar é o que baptiza no Espírito Santo». Eu vi
          isto e afirmo que Ele é o Filho de Deus».
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Hóstias tibi, Dómine, pro nati Fílii tui apparitióne deférimus,
          supplíciter exorántes: ut, sicut ipse nostrórum auctor est múnerum,
          ita sit ipse miséricors et suscéptor, Jesus Christus, Dóminus noster:
          Qui tecum...
        </Typography>
        <Typography className="vernacular">
          Senhor, Vos oferecemos sacrifícios em memória da manifestação do vosso
          Filho, que nasceu no mundo, suplicando-Vos que, assim como Jesus
          Cristo, nosso Senhor, é o autor destes dons, assim também os aceites
          misericordiosamente. Ele, que, sendo Deus...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Cœlésti lúmine, quǽsumus, Dómine, semper et ubíque nos prǽveni: ut
          mystérium, cujus nos partícipes esse voluísti, et puro cernámus
          intúitu, et digno percipiámus affectu. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Dignai-Vos assistir-nos sempre e em toda a parte com vossa celestial
          luz, Senhor, Vos pedimos, a fim de que, assim como quisestes que
          participássemos deste mystério, assim também possamos contemplá-lo com
          olhos puros e recebê-lo com afecto digno. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
