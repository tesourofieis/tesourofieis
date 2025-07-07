import { Link } from "expo-router";
import { Text } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page1116() {
  return (
    <PageWrapper>
      <H1 text="S. Gertrudes, Virgem, a 16 de Novembro" />

      <Text className="aside">
        Como na{" "}
        <Link href="/missal/comum/20virgemnaomartir1">
          Missa Dilexísti justitiam,
        </Link>
        excepto:
      </Text>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Deus, qui in corde beátæ Gertrudis Vírginis jucúndam tibi mansionem
          præparásti: ipsíus méritis et intercessióne; cordis nostri máculas
          cleménter abstérge, et ejúsdem tríbue gaudére consórtio. Per
          Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que para Vós preparastes uma morada agradável no coração da B.
          Virgem Gertrudes, atendendo aos seus méritos e intercessão, apagai
          misericordiosamente as máculas do nosso coração e concedei-nos o gozo
          da sua companhia. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
