import { Link } from "expo-router";
import { Text } from "react-native";
import { H1, H3 } from "~/components/Headings";

import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0831() {
  return (
    <PageWrapper>
      <H1 text="S. Raimundo Nonato, Conf., a 31 de Agosto" />

      <Text className="comment">
        A Igreja celebra a 23 e a 31 de Janeiro as festas de São Raymundo de
        Pennafort e de S. Pedro Nolasco, que instituíram a Ordem de Nossa
        Senhora das Mercês; festeja hoje S. Raymundo Nonnato uma das suas
        glórias. A 24 de Setembro celebrará a aparição de Maria, a fundadora
        dessa familia religiosa. S. Raymundo jamais conheceu sua mãe, de quem a
        morte o havia prematuramente privado; rogou á Santíssima Virgem que o
        adoptasse por filho, e Maria lhe revelou, um dia, que, para lhe ser
        agradável, devia consagrar-se à libertação dos cativos (Or.). Raymundo
        logo renunciou aos bens deste mundo, resolvido a usar deles somente em
        favor do próximo (Ep.). Entrou para a Ordem de Nossa Senhora das Mercês
        sendo enviado à África com a missão de resgatar os cristãos caídos em
        poder dos Muçulmanos. Libertou grande numero e ofereceu-se como penhor,
        a fim de não expôr à apostasia aqueles que ainda restavam, por falta de
        resgate. Fecharam-lhe a boca com um cadeado cujo anel lhe traspassava
        cruelmente os lábios, e lançaram-no em estreita masmorra, morreu em
        1240.
      </Text>

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
