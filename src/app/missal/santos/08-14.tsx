import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0814() {
  return (
    <PageWrapper>
      <H1 text="Vigília da Assunção da B. Virgem Maria, a 14 de Agosto" />

      <Typography className="comment">
        O Cristo não descansou senão três dias no túmulo, ressuscitou em seguida e subiu ao Céu. A
        morte de Maria também se assemelha a um curto sono, donde seu nome de Dormitio. Antes que a
        corrupção pudesse atingir seu corpo, Deus a ressuscitou e glorificou no céu. É o tríplice
        objecto da festa da Assunção, como a consequência lógica do privilégio da Imaculada
        Conceição e do Mistério da Encarnação. O pecado jamais tendo atingido a alma de Maria,
        convinha ao seu corpo, isento de toda mancha e no qual o Verbo se encarnara, não passar pela
        corrupção do túmulo.
      </Typography>

      <H3 text="Intróito" />

      <LinkCard
        href="/missal/comum/21virgemnaomartir2#intróito"
        title="Virgem não Mártir - Missa Vultum tuum"
      />

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui virginálem aulam beátæ Maríæ, in qua habitáres, elígere dignátus es: da,
          quǽsumus; ut, sua nos defensióne munitos, jucúndos fácias suæ interésse festivitáti: Qui
          vivis...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que escolhestes para vossa morada o seio virginal da B. Virgem Maria,
          concedei-nos, Vos rogamos, que, munidos com sua protecção, possamos com alegria
          associar-nos à sua festa. Ó Vós, que viveis e reinais...
        </Typography>
      </Language>

      <Typography className="aside">
        Oração, Secreta e Postcomúnio S. Eusébio como na
        <Link className="link" href="/missal/comum/14confessoresnaopontifices1">
          Missa Os justi.
        </Link>
      </Typography>

      <H3 text="Epístola" />

      <LinkCard href="/missal/santos/07-16#epístola" title="B. Virgem Maria do Monte Carmelo" />

      <H3 text="Gradual" />

      <LinkCard href="/missal/santos/07-02#gradual" title="Visitação da B. Virgem Maria" />

      <H3 text="Evangelho" />

      <LinkCard
        href="/missal/comum/26festasmaria1#evangelho"
        title="Festas da B. Virgem Maria - Missa Salve, sancta Parens"
      />

      <H3 text="Ofertório" />

      <Language>
        <Typography className="latin">
          Beáta es, Virgo María, quæ ómnium portásti Creatórem: genuísti qui te fecit, et in ætérnum
          pérmanes Virgo.
        </Typography>
        <Typography className="vernacular">
          Bem-aventurada sois, ó Virgem Maria, pois trouxestes no vosso seio o Criador de todas as
          coisas. Gerastes Aquele que vos criou; e permanecereis eternamente Virgem.
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Múnera nostra, Dómine, apud cleméntiam tuam Dei Genetrícis comméndet orátio: quam idcírco
          de praesénti sǽculo transtulísti; ut pro peccátis nostris apud te fiduciáliter intercédat.
          Per eúndem Dóminum...
        </Typography>
        <Typography className="vernacular">
          Que as nossas ofertas, Senhor, tenham como recomendação junto da vossa clemência as
          súplicas da Mãe de Deus, a qual arrebatastes deste mundo para interceder com confiança
          pelos nossos pecados junto de Vós. Pelo mesmo nosso S...
        </Typography>
      </Language>

      <H3 text="Comúnio" />

      <Language>
        <Typography className="latin">
          Beáta víscera Maríæ Vírginis, quæ portavérunt ætérni Patris Fílium.
        </Typography>
        <Typography className="vernacular">
          Bem-aventuradas as entranhas da B. Virgem Maria, que trouxeram encerrado o Filho do Pai
          Eterno.
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Concéde, miséricors Deus, fragilitáti nostræ præsídium: ut, qui sanctæ Dei Genetrícis
          festivitátem prævénimus; intercessiónis ejus auxílio a nostris iniquitátibus resurgámus.
          Per eúndem Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus de misericórdia, dignai-Vos vir em auxílio da nossa fragilidade, a fim de que,
          antecipando a festividade da Santa Mãe de Deus, possamos, com o auxílio da sua
          intercessão, ressuscitar das nossas iniquidades. Pelo mesmo nosso...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
