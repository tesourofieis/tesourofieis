import { Text } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

import Missa from "../comum/sumospontifices";

export default function Page1026() {
  return (
    <PageWrapper>
      <H1 text="S. Evaristo, Papa e Mártir, a 26 de Outubro" />

      <Text className="comment">
        Evaristo, grego de nascimento, foi unanimemente eleito Papa por ocasião
        da vacância da Santa Sé pela morte de Anacleto 1º. Foi o primeiro a
        dividir a cidade de Roma em titulos ou paróquias, designando para cada
        uma um sacerdote. Para honrar mais a palavra de Deus e a dignidade
        episcopal, instituiu o costume de ser o bispo rodeado por sete diáconos,
        ao exercer o ministério da pregação. S. Evaristo sofreu o martyrio no
        anno 109, sob o imperador Trajano.
      </Text>

      <Missa />
    </PageWrapper>
  );
}
