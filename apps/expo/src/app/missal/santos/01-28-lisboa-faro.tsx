import { Link } from "expo-router";
import { Text, View } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0128LisboaFaro() {
  return (
    <PageWrapper>
      <H1 text="Sétimo dia dentro da Oitava de S. Vicente, Mártir, a 28 de Janeiro" />

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/santos/01-22-lisboa-faro">
          Missa de Festa
        </Link>{" "}
        , e comemoração de Santa Inês:
      </Text>

      <H3 text="Oração Comemoração Santa Inês" />

      <Language>
        <Text className="latin">
          Deus, qui nos ánnua beátæ Agnetis Vírginis et Martyris tuæ
          sollemnitáte lætíficas: da, quǽsumus; ut, quam venerámur officio,
          étiam piæ conversatiónis sequámur exémplo. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que nos alegrais com a solenidade anual da B. Inês, vossa
          Virgem e Mártir, concedei-nos a graça, Vos suplicamos, de imitar os
          exemplos daquela cuja festa celebramos. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Secreta Comemoração Santa Inês" />

      <Language>
        <Text className="latin">
          Super has, quǽsumus, Dómine, hóstias benedíctio copiósa descéndat: quæ
          et sanctificatiónem nobis cleménter operétur, et de Mártyrum nos
          sollemnitáte lætíficet. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Que estas hóstias, Senhor, que Vos oferecemos façam descer sobre nós
          uma bênção abundante, a qual produza em nós por vossa clemência nossa
          santificação e nos alegre com a solenidade dos vossos Mártires. Por
          nosso Senhor...
        </Text>
      </Language>

      <H3 text="Postcomúnio Comemoração Santa Inês" />

      <Language>
        <Text className="latin">
          Súmpsimus, Dómine, celebritátis ánnuæ votiva sacraménta: præsta,
          quǽsumus; ut et temporális vitæ nobis remédia prǽbeant et ætérnæ. Per
          Dóminum...
        </Text>
        <Text className="vernacular">
          Senhor, havendo recebido os sacramentos que Vos são oferecidos nesta
          festa anual, concedei-nos, Vos suplicamos, que eles nos alcancem os
          remédios para a vida presente e para a eterna. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
