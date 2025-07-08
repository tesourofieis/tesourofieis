import { Text } from "react-native";
import { H1, H3 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

export default function Page0412() {
  return (
    <PageWrapper>
      <H1 text="S. Vítor, Mártir, a 12 de Abril, Na Arquidiocese de Braga e noutros lugares" />
      <H3 text="Oração" />
      <Text className="text-pretty">
        Ó Deus, que pela pompa do martírio triunfal fizestes entrar glorioso na
        pátria celestial o B. Vítor, concedei-nos propício que, pugnando nós à
        sua imitação contra os nossos vícios, consigamos alcançar aquelas
        vitórias que Vítor nos ensinou. Por nosso Senhor...
      </Text>
      <H3 text="Secreta" />
      <Text className="text-pretty">
        Santificai, Senhor, os dons que Vos apresentamos, e pela intercessão do
        B. Vítor, vosso Mártir, permiti que em virtude deles olheis aplacado
        para nós. Por nosso Senhor...
      </Text>
      <H3 text="Postcomúnio" />
      <Text className="text-pretty">
        Que o sacramento, que acabámos de receber, nos santifique, Senhor; e
        pela intercessão dos vossos Santos fazei que sejamos participantes do
        remédio celestial. Por nosso Senhor...
      </Text>
    </PageWrapper>
  );
}
