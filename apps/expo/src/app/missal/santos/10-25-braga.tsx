import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";


import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

export default function Page1025Braga() {
  return (
    <PageWrapper>
      <H1 text="Trasl. de S. Martinho de Dume, a 25 de Outubro, Na Arquidiocese de Braga" />
      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/13doutores">
          Missa In médio Ecclésiae
        </Link>{" "}
        , excepto:
      </Text>
      <H3 text="Oração" />Ó Deus, que Vos gloriais com as festivas
      solenidades em honra dos vossos Santos, celebrando nós devotadamente a
      Trasladação do B. Martinho, vosso Pontífice e Doutor, concedei-nos
      propício a graça de nos instruirmos com o esplendor da sua doutrina e de
      sentirmos os auxílios da sua intercessão. Por nosso Senhor...
    </PageWrapper>
  );
}
