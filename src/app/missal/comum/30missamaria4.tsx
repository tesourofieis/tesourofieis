import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page30Missamaria4() {
  return (
    <PageWrapper>
      <H1 text="4.ª Missa - Missa Salve, sancta Parens da Virgem Maria, desde a Páscoa até ao Pentecostes" />

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/29missamaria3">
          Missa Precedente
        </Link>{" "}
        , excepto o seguinte: Depois da Epístola diz-se:
      </Typography>

      <Language>
        <Typography className="latin">
          Allelúja, allelúja.<Typography className="versicle"> ℣. </Typography>
          <Typography className="latin">Num. 17, 8</Typography> Virga Jesse flóruit: Virgo Deum et
          hóminem génuit: pacem Deus réddidit, in se reconcílians ima summis. Allelúja.
          <Typography className="versicle"> ℣. </Typography>
          <Typography className="em">Luc. 1, 28</Typography> Ave, María, grátia plena; Dóminus
          tecum: benedícta tu in muliéribus. Allelúja.
        </Typography>
        <Typography className="vernacular">
          Aleluia, aleluia.<Typography className="versicle"> ℣. </Typography>
          <Typography className="vernacular">Nm. 17, 8</Typography> A vara de Jessé floresceu: e a
          Virgem deu à luz o Homem-Deus: restabeleceu Deus a paz, conciliando na sua pessoa a nossa
          baixeza com sua suprema grandeza. Aleluia.
          <Typography className="versicle"> ℣. </Typography>
          <Typography className="em">Lc. 1, 28</Typography> Ave, Maria, cheia de graça: o Senhor é
          convosco: bendita sois vós entre as mulheres. Aleluia.
        </Typography>
      </Language>

      <H3 text="Evangelho" />

      <Typography className="em">Jo. 19, 25-27</Typography>

      <Language>
        <Typography className="latin">
          <Typography className="cross"> ✠ </Typography> Sequéntia sancti Evangélii secúndum
          Joánnem.
        </Typography>
        <Typography className="vernacular">
          <Typography className="cross"> ✠ </Typography> Continuação do santo Evangelho segundo S.
          João.
        </Typography>
        <Typography className="latin">
          In illo témpore: Stabant juxta Crucem Jesu Mater ejus, et soror Matris ejus, María
          Cléophæ, et María Magdaléne. Cum vidísset ergo Jesus Matrem, et discípulum stantem, quem
          diligébat, dicit Matri suæ: Múlier, ecce fílius tuus. Deinde dicit discípulo: Ecce Mater
          tua. Et ex illa hora accépit eam discípulus in sua.
        </Typography>
        <Typography className="vernacular">
          Naquele tempo, estavam, junto à cruz de Jesus, sua Mãe e a irmã de sua Mãe, Maria, mulher
          de Cléofas, e Maria Madalena. Vendo Jesus sua Mãe e, perto dela, o discípulo Ele preferia,
          disse a sua Mãe: «Mulher, eis o vosso filho!». Depois disse ao discípulo: «Eis a tua
          Mãe!». E desde aquela hora levou-a o discípulo consigo.
        </Typography>
      </Language>

      <H3 text="Ofertório" />

      <Language>
        <Typography className="latin">
          Beáta es, Virgo María, quæ ómnium portásti Greatórem: genuísti qui te fecit, et in ætérnum
          pérmanes Virgo, allelúja.
        </Typography>
        <Typography className="vernacular">
          Sois bem-aventurada, ó Virgem Maria, pois fostes digna de trazer em vosso seio o Criador
          do mundo. Vós gerastes Aquele que vos criou e permanecestes eternamente Virgem. Aleluia.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
