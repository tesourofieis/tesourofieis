import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";


import { Text, View } from "react-native";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";

export default function Page0922() {
  return (
    <PageWrapper>
      <H1 text="S. Tomás de Vilanova, B. e C., a 22 de Setembro" />

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/11confessorespontifices1">
          Missa Státuit ei
        </Link>{" "}
        , excepto:
      </Text>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Deus, qui beátum Thomam Pontíficem insígnis in páuperes misericórdiæ
          virtúte decorásti: quǽsumus; ut, ejus intercessióne, in omnes, qui te
          deprecántur, divítias misericórdiæ tuæ benígnus effúndas. Per
          Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que ilustrastes o B. Pontífice Tomás com a virtude de uma
          insigne compaixão para com os pobres, permiti, Vos rogamos, que sua
          intercessão alcance da vossa bondade a efusão dos tesouros da vossa
          misericórdia para com aqueles que Vo-la imploram. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Oração Comemoração S. Maurício e Outros" />

      <Language>
        <Text className="latin">
          Annue, quǽsumus, omnípotens Deus: ut sanctórum Martyrum tuórum
          Maurítii et Sociórum ejus nos lætíficet festíva sollémnitas; ut,
          quorum suffrágiis nítimur, eórum natalítiis gloriémur. Per Dóminum
          nostrum...
        </Text>
        <Text className="vernacular">
          Concedei-nos, ó Deus omnipotente, Vos rogamos, que a solene festa dos
          vossos Santos Mártires Maurício e seus Companheiros nos encha de
          alegria, a fim de que com o auxílio das suas orações participemos da
          glória do seu nascimento no céu. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Secreta" />

      <LinkCard
        href="/missal/comum/12confessorespontifices2#secreta"
        title="Confessores Pontífices - Missa Sacerdótes tui"
      />

      <H3 text="Secreta Comemoração S. Maurício e Outros" />

      <Language>
        <Text className="latin">
          Réspice, quǽsumus, Dómine, múnera, quæ in sanctórum Mártyrum tuórum
          Maurítii et Sociórum ejus commemoratióne deférimus: et præsta; ut,
          quorum honóre sunt grata, eórum nobis fiant intercessióne perpétua.
          Per Dóminum...
        </Text>
        <Text className="vernacular">
          Dignai-Vos olhar, Senhor, Vos rogamos, para os dons que Vos
          apresentamos em memória dos vossos Santos Mártires Maurício e seus
          Companheiros, e permiti que, sendo-Vos agradáveis, pois são oferecidos
          em sua honra, nos assegurem eternamente, pela sua intercessão, a
          felicidade. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <LinkCard
        href="/missal/comum/12confessorespontifices2#postcomúnio"
        title="Confessores Pontífices - Missa Sacerdótes tui"
      />

      <H3 text="Postcomúnio Comemoração S. Maurício e Outros" />

      <Language>
        <Text className="latin">
          Cœléstibus refécti sacraméntis et gáudiis: súpplices te rogámus,
          Dómine; ut, quorum gloriámur triúmphis, protegámur auxíliis. Per
          Dóminum nostrum...
        </Text>
        <Text className="vernacular">
          Confortados com estes sacramentos e com estas delícias celestiais,
          Senhor, Vos rogamos, dignai-Vos conceder-nos a protecção daqueles de
          cujos triunfos nos gloriamos. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
