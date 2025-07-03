import { Link } from "expo-router";

import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

export default function Page1025Braga() {
  return (
    <PageWrapper>
      <Text className="h1">
        Trasl. de S. Martinho de Dume, a 25 de Outubro, Na Arquidiocese de Braga
      </Text>
      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/13doutores">
          Missa In médio Ecclésiae
        </Link>{" "}
        , excepto:
      </Text>
      <Text className="h3">Oração</Text>Ó Deus, que Vos gloriais com as festivas
      solenidades em honra dos vossos Santos, celebrando nós devotadamente a
      Trasladação do B. Martinho, vosso Pontífice e Doutor, concedei-nos
      propício a graça de nos instruirmos com o esplendor da sua doutrina e de
      sentirmos os auxílios da sua intercessão. Por nosso Senhor...
    </PageWrapper>
  );
}
