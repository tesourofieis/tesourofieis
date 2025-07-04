import { Text, View } from "react-native";
import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PagePainosso() {
  return (
    <PageWrapper>
      <H1 text="Pai Nosso" />

      <Language>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text>Pater noster, qui es in cælis:
          sanctificétur nomen tuum: advéniat regnum tuum: fiat volúntas tua,
          sicut in cælo, et in terra.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>Pai Nosso, que estais nos céus,
          santificado seja o Vosso Nome, venha a nós o Vosso Reino; seja feita a
          Vossa vontade assim na terra como no Céu.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Panem nostrum quotidiánum da
          nobis hódie: et dimítte nobis débita nostra, sicut et nos dimíttimus
          debitóribus nostris. Et ne nos indúcas in tentatiónem. Sed líbera nos
          a malo.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> O pão nosso de cada dia nos dai
          hoje; perdoai-nos as nossas dívidas, assim como nós perdoamos aos
          nossos devedores; e não nos deixeis cair em tentação; mas livrai-nos
          do mal.
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
