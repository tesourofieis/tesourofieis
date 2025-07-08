import { Link } from "expo-router";
import { Text } from "react-native";
import { H1, H3 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

export default function Page0301Braga() {
  return (
    <PageWrapper>
      <H1 text="B. Miguel de Carvalho e Outros, Márts., a 1 de Março, Na Arquidiocese de Braga" />
      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/7muitosmartires2">
          Missa Sapiéntiam sanctórum
        </Link>{" "}
        , excepto:
      </Text>
      <H3 text="Oração" />
      <Text className="text-pretty">
        Senhor, que os vossos B. B. Miguel e seus Companheiros nos confortem com
        sua preciosa profissão de fé; e que pela sua piedosa intercessão sejamos
        continuamente favorecidos. Por nosso Senhor...
      </Text>
    </PageWrapper>
  );
}
