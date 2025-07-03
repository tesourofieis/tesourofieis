import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";


import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0516() {
  return (
    <PageWrapper>
      <H1 text="S. Ubaldo, B. e Conf., a 16 de Maio" />

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/11confessorespontifices1">
          Missa Státuit ei
        </Link>{" "}
        , excepto:
      </Text>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Auxílium Confessóris tui atque Pontíficis, contra omnes diáboli
          nequítias déxteram super nos tuæ propitiatiónis exténde. Per Dóminum
          nostrum...
        </Text>
        <Text className="vernacular">
          Deixai-Vos aplacar, Senhor, Vos suplicamos, e concedei-nos o vosso
          auxílio; e pela intercessão do B. Ubaldo, vosso Confessor e Pontífice,
          estendei sobre nós a vossa mão misericordiosa, a fim de que nos
          defenda de todas as perfídias do demónio. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
