import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


export default function Page116() {
  return (
    <PageWrapper>
      <H1 text="Salmo 116" />

      <Language>
        <Text className="latin">
          Laudáte Dóminum, omnes gentes: * laudáte eum, omnes pópuli:
        </Text>
        <Text className="vernacular">
          Ó gentes, louvai todas o Senhor: * louvai-O todos, ó povos:
        </Text>
        <Text className="latin">
          Quóniam confirmáta est super nos misericórdia ejus: * et véritas
          Dómini manet in ætérnum.
        </Text>
        <Text className="vernacular">
          Porque sobre nós foi confirmada a sua misericórdia: * e a verdade do
          Senhor permanece eternamente.
        </Text>
      </Language>
    </PageWrapper>
  );
}
