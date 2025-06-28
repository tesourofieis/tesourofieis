import { Link } from "expo-router";

import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page30Missamaria4() {
  return (
    <PageWrapper>
      <Text className="h1">
        4.ª Missa - Missa Salve, sancta Parens da Virgem Maria, desde a Páscoa
        até ao Pentecostes
      </Text>

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/29missamaria3">
          Missa Precedente
        </Link>{" "}
        , excepto o seguinte: Depois da Epístola diz-se:
      </Text>

      <Language>
        <Text className="latin">
          Allelúja, allelúja.<Text className="versicle"> ℣. </Text>
          <Text className="latin">Num. 17, 8</Text> Virga Jesse flóruit: Virgo
          Deum et hóminem génuit: pacem Deus réddidit, in se reconcílians ima
          summis. Allelúja.
          <Text className="versicle"> ℣. </Text>
          <Text className="em">Luc. 1, 28</Text> Ave, María, grátia plena;
          Dóminus tecum: benedícta tu in muliéribus. Allelúja.
        </Text>
        <Text className="vernacular">
          Aleluia, aleluia.<Text className="versicle"> ℣. </Text>
          <Text className="vernacular">Nm. 17, 8</Text> A vara de Jessé
          floresceu: e a Virgem deu à luz o Homem-Deus: restabeleceu Deus a paz,
          conciliando na sua pessoa a nossa baixeza com sua suprema grandeza.
          Aleluia.<Text className="versicle"> ℣. </Text>
          <Text className="em">Lc. 1, 28</Text> Ave, Maria, cheia de graça: o
          Senhor é convosco: bendita sois vós entre as mulheres. Aleluia.
        </Text>
      </Language>

      <Text className="h3">Evangelho</Text>

      <Text className="em">Jo. 19, 25-27</Text>

      <Language>
        <Text className="latin">
          <Text className="cross"> ✠ </Text> Sequéntia sancti Evangélii secúndum
          Joánnem.
        </Text>
        <Text className="vernacular">
          <Text className="cross"> ✠ </Text> Continuação do santo Evangelho
          segundo S. João.
        </Text>
        <Text className="latin">
          In illo témpore: Stabant juxta Crucem Jesu Mater ejus, et soror Matris
          ejus, María Cléophæ, et María Magdaléne. Cum vidísset ergo Jesus
          Matrem, et discípulum stantem, quem diligébat, dicit Matri suæ:
          Múlier, ecce fílius tuus. Deinde dicit discípulo: Ecce Mater tua. Et
          ex illa hora accépit eam discípulus in sua.
        </Text>
        <Text className="vernacular">
          Naquele tempo, estavam, junto à cruz de Jesus, sua Mãe e a irmã de sua
          Mãe, Maria, mulher de Cléofas, e Maria Madalena. Vendo Jesus sua Mãe
          e, perto dela, o discípulo Ele preferia, disse a sua Mãe: «Mulher, eis
          o vosso filho!». Depois disse ao discípulo: «Eis a tua Mãe!». E desde
          aquela hora levou-a o discípulo consigo.
        </Text>
      </Language>

      <Text className="h3">Ofertório</Text>

      <Language>
        <Text className="latin">
          Beáta es, Virgo María, quæ ómnium portásti Greatórem: genuísti qui te
          fecit, et in ætérnum pérmanes Virgo, allelúja.
        </Text>
        <Text className="vernacular">
          Sois bem-aventurada, ó Virgem Maria, pois fostes digna de trazer em
          vosso seio o Criador do mundo. Vós gerastes Aquele que vos criou e
          permanecestes eternamente Virgem. Aleluia.
        </Text>
      </Language>
    </PageWrapper>
  );
}
