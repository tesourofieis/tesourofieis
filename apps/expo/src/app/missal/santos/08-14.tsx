import { Link } from "expo-router";
import { Text, View } from "react-native";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";
import { H1, H3 } from "~/components/Headings";


export default function Page0814() {
  return (
    <PageWrapper>
      <H1 text="Vigília da Assunção da B. Virgem Maria, a 14 de Agosto" />

      <H3 text="Intróito" />

      <LinkCard
        href="/missal/comum/21virgemnaomartir2#intróito"
        title="Virgem não Mártir - Missa Vultum tuum"
      />

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Deus, qui virginálem aulam beátæ Maríæ, in qua habitáres, elígere
          dignátus es: da, quǽsumus; ut, sua nos defensióne munitos, jucúndos
          fácias suæ interésse festivitáti: Qui vivis...
        </Text>
        <Text className="vernacular">
          Ó Deus, que escolhestes para vossa morada o seio virginal da B. Virgem
          Maria, concedei-nos, Vos rogamos, que, munidos com sua protecção,
          possamos com alegria associar-nos à sua festa. Ó Vós, que viveis e
          reinais...
        </Text>
      </Language>

      <Text className="aside">
        Oração, Secreta e Postcomúnio S. Eusébio como na
        <Link href="/missal/comum/14confessoresnaopontifices1">
          Missa Os justi.
        </Link>
      </Text>

      <H3 text="Epístola" />

      <LinkCard
        href="/missal/santos/07-16#epístola"
        title="B. Virgem Maria do Monte Carmelo"
      />

      <H3 text="Gradual" />

      <LinkCard
        href="/missal/santos/07-02#gradual"
        title="Visitação da B. Virgem Maria"
      />

      <H3 text="Evangelho" />

      <LinkCard
        href="/missal/comum/26festasmaria1#evangelho"
        title="Festas da B. Virgem Maria - Missa Salve, sancta Parens"
      />

      <H3 text="Ofertório" />

      <Language>
        <Text className="latin">
          Beáta es, Virgo María, quæ ómnium portásti Creatórem: genuísti qui te
          fecit, et in ætérnum pérmanes Virgo.
        </Text>
        <Text className="vernacular">
          Bem-aventurada sois, ó Virgem Maria, pois trouxestes no vosso seio o
          Criador de todas as coisas. Gerastes Aquele que vos criou; e
          permanecereis eternamente Virgem.
        </Text>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Text className="latin">
          Múnera nostra, Dómine, apud cleméntiam tuam Dei Genetrícis comméndet
          orátio: quam idcírco de praesénti sǽculo transtulísti; ut pro peccátis
          nostris apud te fiduciáliter intercédat. Per eúndem Dóminum...
        </Text>
        <Text className="vernacular">
          Que as nossas ofertas, Senhor, tenham como recomendação junto da vossa
          clemência as súplicas da Mãe de Deus, a qual arrebatastes deste mundo
          para interceder com confiança pelos nossos pecados junto de Vós. Pelo
          mesmo nosso S...
        </Text>
      </Language>

      <H3 text="Comúnio" />

      <Language>
        <Text className="latin">
          Beáta víscera Maríæ Vírginis, quæ portavérunt ætérni Patris Fílium.
        </Text>
        <Text className="vernacular">
          Bem-aventuradas as entranhas da B. Virgem Maria, que trouxeram
          encerrado o Filho do Pai Eterno.
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Concéde, miséricors Deus, fragilitáti nostræ præsídium: ut, qui sanctæ
          Dei Genetrícis festivitátem prævénimus; intercessiónis ejus auxílio a
          nostris iniquitátibus resurgámus. Per eúndem Dóminum nostrum...
        </Text>
        <Text className="vernacular">
          Ó Deus de misericórdia, dignai-Vos vir em auxílio da nossa
          fragilidade, a fim de que, antecipando a festividade da Santa Mãe de
          Deus, possamos, com o auxílio da sua intercessão, ressuscitar das
          nossas iniquidades. Pelo mesmo nosso...
        </Text>
      </Language>
    </PageWrapper>
  );
}
