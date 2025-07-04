import { Text, View } from "react-native";
import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageGloria() {
  return (
    <PageWrapper>
      <H1 text="Glória" />

      <Language>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text>Glória Patri, et Fílio, et
          Spíritui Sancto.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>Glória ao Pai, e ao Filho e ao
          Espírito Santo.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Sicut erat in pricípio, et
          nunc, et semper, et in sǽcula sæculórum.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Assim como era no princípio,
          agora e sempre, e por todos os séculos dos séculos.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
      </Language>
    </PageWrapper>
  );
}
