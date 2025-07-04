import { Text, View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

import Missa from "./12-08";

export default function Page1214() {
  return (
    <PageWrapper>
      <H1 text="Sétimo Dia na Oitava, a 14 de Dezembro" />

      <Text className="comment">
        Para simbolizar a pureza da Santíssima Virgem, o Sacerdote reveste
        paramentos brancos, outrora os únicos usados. Os antigos diziam ser o
        branco uma cor divina. Daniel (7, 9) descreve Deus aparecendo vestido de
        branco. Os Evangelistas nos dizem que, na Transfiguração, as vestes de
        Jesus eram «de brilhante alvura» (Marcos 9,2). A liturgia da festa da
        Imaculada aplica o mesmo texto à Santíssima Virgem, dizendo ser «essa a
        veste de Salvação» (Intr.), com a qual Deus a revestiu «veste branca
        como a neve» (Segunda Ant. das Vésperas). Peçamos com a Igreja. ma Festa
        da Santíssima Virgem, a graça de sermos «por sua intercessão,
        purificados de todas as nossas faltas» (Or.) e estejamos prontos para
        receber a Jesus.
      </Text>

      <Missa />
    </PageWrapper>
  );
}
