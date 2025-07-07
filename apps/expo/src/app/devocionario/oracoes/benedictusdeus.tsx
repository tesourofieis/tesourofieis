import { Text } from "react-native";
import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageBenedictusdeus() {
  return (
    <PageWrapper>
      <H1 text="Benedictus Deus" />

      <Language>
        <Text className="latin">
          Benedíctus Deus, et Pater Dómini nostri Jesu Christi, Pater
          misericordiárum, et Deus totíus consolationis, qui consolátur nos in
          omni tribulatióne nostra.
        </Text>
        <Text className="vernacular">
          Bendito seja Deus, e Pai de nosso Senhor Jesus Cristo, Pai de
          misericórdias e Deus de todas as consolações, O qual nos consola em
          toda nossa tribulação.
        </Text>
        <Text className="latin">Deo grátias.</Text>
        <Text className="vernacular">Graças a Deus.</Text>
      </Language>
    </PageWrapper>
  );
}
