import { Link } from "expo-router";
import { Text } from "react-native";
import { H1, H3 } from "~/components/Headings";

import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0831() {
  return (
    <PageWrapper>
      <H1 text="S. Raimundo Nonato, Conf., a 31 de Agosto" />

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/14confessoresnaopontifices1">
          Missa Os justi
        </Link>{" "}
        , excepto:
      </Text>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Deus, qui in liberándis fidélibus tuis ab impiórum captivitáte beátum
          Raymúndum Confessórem tuum mirábilem effecísti: ejus nobis
          intercessióne concéde; ut, a peccatórum vínculis absolúti, quæ tibi
          sunt plácita, líberis méntibus exsequámur. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que ao B. Raimundo, vosso Confessor, tornastes admirável na
          dedicação com que libertava os vossos fiéis do cativeiro dos ímpios,
          concedei-nos pela sua intercessão que, livres dos vínculos dos
          pecados, cumpramos com liberdade de espírito o que Vos é agradável.
          Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
