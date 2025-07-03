import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";


import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0424() {
  return (
    <PageWrapper>
      <H1 text="S. Fiel de Sigmaringen, Mártir, a 24 de Abril" />

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/9martir">
          Missa Protexísti me
        </Link>{" "}
        , excepto:
      </Text>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Deus, qui beátum Fidelem, seráphico spíritus ardore succénsum, in veræ
          fídei propagatióne martýrii palma et gloriósis miráculis decoráre
          dignátus es: ejus, quǽsumus, méritis et intercessióne, ita nos per
          grátiam tuam in fide et caritáte confírma; ut in serívtio tuo fidéles
          usque ad mortem inveníri mereámur. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que na propagação da fé Vos dignastes ilustrar com a palma do
          martírio e com gloriosos milagres o B. Fiel, cujo coração ardia de
          amor seráfico, Vos suplicamos, pela vossa graça e pelos seus méritos e
          intercessão, que arraigueis na nossa alma de tal modo a fé e a
          caridade que mereçamos ser fiéis no vosso serviço até à morte. Por
          nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
