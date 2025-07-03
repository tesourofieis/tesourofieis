import { Link } from "expo-router";

import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0610() {
  return (
    <PageWrapper>
      <Text className="h1">S. Margarida, Rainha, Viúva, a 10 de Junho</Text>

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/24nemvirgensnemmartires">
          Missa Cognóvi, Dómine
        </Link>{" "}
        , excepto:
      </Text>

      <Text className="h3">Oração</Text>

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
