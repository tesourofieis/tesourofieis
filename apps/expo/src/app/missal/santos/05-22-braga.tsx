import { Link } from "expo-router";

import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

export default function Page0522Braga() {
  return (
    <PageWrapper>
      <Text className="h1">
        B. B. João B. Machado e Outros, Ms., a 22 de Maio, Na Arquidiocese de
        Braga e noutros lugares
      </Text>
      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/10martires">
          Missa Sancti tui
        </Link>{" "}
        , excepto: Fora do Tempo Pascal como na{" "}
        <Link className="link" href="/missal/comum/7muitosmartires2">
          Missa Sapiéntiam sanctórum
        </Link>
        , excepto:
      </Text>
      <Text className="h3">Oração</Text>
      <Text className="text-base">
        Deixai-Vos aplacar, Senhor, Vos pedimos, e concedei-nos o vosso auxílio;
        e pela intercessão dos vossos B. B. Mártires João Baptista e seus
        Companheiros estendei sobre nós a vossa mão misericordiosa. Por nosso
        Senhor...
      </Text>
    </PageWrapper>
  );
}
