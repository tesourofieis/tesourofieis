import { Text } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

import Missa from "../comum/sumospontifices";

export default function Page0729Outro() {
  return (
    <PageWrapper>
      <H1 text="S. Félix II, Papa e Mártir, a 29 de Julho" />

      <Text className="comment">
        O Santo Pontífice Félix II foi Papa, no IV século; sofreu o martírio na
        Toscana, no tempo dos Arianos (A. D. 365). Simplícío e Faustino
        denunciados como cristãos, aos perseguidores, foram condenados à morte
        em Roma, sob Diocleciano, em 304. Beatriz, sua irmã, foi presa e
        estrangulada na prisão. Leão II colocou as relíquias desses três
        mártires numa igreja contruida em Roma, sob a sua invocação.
      </Text>

      <Missa />
    </PageWrapper>
  );
}
