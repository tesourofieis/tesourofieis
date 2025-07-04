import { Link } from "expo-router";
import { Text, View } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0210() {
  return (
    <PageWrapper>
      <H1 text="Santa Escolástica, Virgem, a 10 de Fevereiro" />

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/20virgemnaomartir1">
          Missa Dilexísti justitiam
        </Link>{" "}
        , excepto:
      </Text>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Deus, qui ánimam beátæ Vírginis tuæ Scholásticæ ad ostendéndam
          innocéntiæ viam in colúmbæ spécie cœlum penetráre fecísti: da nobis
          ejus méritis et précibus ita innocénter vívere; ut ad ætérna mereámur
          gáudia perveníre. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que para mostrar a vida inocente da vossa B. Virgem
          Escolástica fizestes entrar no céu a sua alma sob a figura de uma
          pomba, concedei-nos pelos seus méritos e preces que vivamos com tanta
          inocência que mereçamos alcançar os gozos eternos. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
