import { Link } from "expo-router";
import { Text } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0215Portugal() {
  return (
    <PageWrapper>
      <H1 text="Trasladação de S. António de Lisboa, a 15 de Fevereiro" />

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/santos/06-13">
          Missa de Santo António de Lisboa
        </Link>{" "}
        , excepto:
      </Text>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Sancti Confessórisóris tui Antónii tribue nos, Dómine, intercessióne
          adjuvári: ut cujus Translatiónem ánnua celebitáte recólimus; ejus apud
          te précibus et méritis, post hujus vitæ exsílium, ad consórtium
          transférri merámur Beatórum. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Concedei-nos, Senhor, que sejamos auxiliados pela intercessão do vosso
          Santo Confessor António, a fim de que, celebrando anualmente a sua
          Trasladação, por suas preces e méritos junto de Vós, mereçamos ser
          levados, após o exílio desta vida, ao consórcio dos bem-aventurados.
          Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
