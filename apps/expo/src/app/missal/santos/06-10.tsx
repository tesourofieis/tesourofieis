import { Link } from "expo-router";
import { Text, View } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0610() {
  return (
    <PageWrapper>
      <H1 text="S. Margarida, Rainha, Viúva, a 10 de Junho" />

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
          Deus, qui beátam Margarítam regínam exímia in páuperes caritáte
          inirábilem effecísti: da; ut, ejus intercessióne et exémplo, tua in
          córdibus nostris cáritas júgiter augeátur. Per Dóminum nostrum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que tornastes admirável a B. Margarida, rainha, concedendo-lhe
          uma caridade extraordinária para com os pobres, permiti que, pelo seu
          exemplo e intercessão, a vossa caridade cresça continuamente nos
          nossos corações. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
