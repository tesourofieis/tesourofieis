import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";


import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

export default function Page0727Outro() {
  return (
    <PageWrapper>
      <H1 text="B. Rodolfo Água-Viva e Outros, Márts, a 27 de Julho" />
      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/7muitosmartires2">
          Missa Sapiéntiam sanctórum
        </Link>{" "}
        , excepto:
      </Text>
      <H3 text="Oração" />
      <Text className="text-base">
        Vos pedimos, permiti que a veneranda oblação dos vossos B. B. Mártires
        Rodolfo, Afonso, Pedro, António e Francisco Vos recomende as nossas
        orações, a fim de que, pelo seu exemplo e intercessão, também nos
        imolemos, como hóstia viva por Vós recebida, em honra do vosso santo
        nome. Por nosso Senhor...
      </Text>
    </PageWrapper>
  );
}
