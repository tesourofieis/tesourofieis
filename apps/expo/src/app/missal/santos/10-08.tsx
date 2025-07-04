import { Link } from "expo-router";
import { Text, View } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";

export default function Page1008() {
  return (
    <PageWrapper>
      <H1 text="Santa Brígida, Viúva, a 8 de Outubro" />

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/24nemvirgensnemmartires">
          Missa Cognóvi, Dómine
        </Link>{" "}
        , excepto:
      </Text>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Dómine, Deus noster, qui beátæ Birgíttæ per Fílium tuum unigénitum
          secreta cœléstia revelásti: ipsíus pia intercessióne da nobis, fámulis
          tuis; in revelatióne sempitérna glóriæ tuæ gaudére lætántes. Per
          eúndem Dóminum nostrum...
        </Text>
        <Text className="vernacular">
          Senhor, nosso Deus, que pelo vosso Unigénito Filho revelastes os
          segredos celestiais à B. Brígida, concedei-nos, já que somos vossos
          servos, que nos alegremos na felicidade da contemplação da vossa
          eterna glória. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Epístola" />

      <LinkCard
        href="/missal/santos/05-04#epístola"
        title="Santa Mónica, Viúva"
      />
    </PageWrapper>
  );
}
