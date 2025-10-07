import { Text } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

import Missa from "../comum/6muitosmartires1";

export default function Page0916() {
  return (
    <PageWrapper>
      <H1 text="S. S. Cornélio e Cipriano, Mártires, a 16 de Setembro" />

      <Text className="comment">
        Cornélio era romano, e exerceu o soberano pontificado sob os imperadores
        Gallo e Volusiano. Teve de combater Novaciano, o primeiro dos
        anti-papas. Retirou das catacumbas os corpos dos Apóstolos Pedro e
        Paulo, a fim de transladá-los respeitosamente aos lugares onde tinham
        sido martirizados. Os imperadores o prenderam e foi decapitado em 253.
        Cypriano era advogado em Cartago, quando se converteu ao cristianismo.
        Pouco depois foi elevado ao sacerdócio e sagrado Bispo de Cartago. Seria
        supérfluo, diz S. Jerónimo, falar de seu talento, visto serem as suas
        obras mais brilhantes do que o sol. Este ilustre Padre da Igreja latina
        representa um dos períodos mais atormentados da Igreja da África. Sofreu
        o martírio cinco annos depois de S. Cornélio, no dia da transladação do
        Santo Papa para Roma. A litúria uniu-lhes os nomes no Canon da Missa.
      </Text>

      <Missa />
    </PageWrapper>
  );
}
