import { Link } from "expo-router";

import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

export default function Page1027Evora() {
  return (
    <PageWrapper>
      <Text className="h1">
        S. S. Vicente, Sabina e Cristeta, Márts, a 27 de Outubro, Na
        Arquidiocese de Évora
      </Text>
      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/7muitosmartires2">
          Missa Sapiéntiam sanctórum
        </Link>{" "}
        , excepto:
      </Text>
      <Text className="h3">Oração</Text>
      <Text className="text-base">
        Ó Deus, que aos três beatíssimos Irmãos vossos Mártires Vicente, Sabina
        e Cristeta, já unidos em amor fraternal, ainda mais os unistes pelo
        martírio na confissão da divina Trindade, concedei-nos por sua
        intercessão que pratiquemos o verdadeiro amor e sempre nos mantenhamos
        na unidade da Fé. Por nosso Senhor...
      </Text>
      <Text className="h3">Gradual</Text>
      <Text className="text-base">
        A nossa alma livrou-se, como um pássaro do laço dos caçadores; O laço
        quebrou-se e ficámos livres: o nosso auxílio está no nome do Senhor: que
        criou o céu e a terra. Aleluia, aleluia. Eis a verdadeira fraternidade
        que venceu os perigos do mundo. Ela seguiu Cristo e possuirá com glória
        o reino celestial. Aleluia.
      </Text>
    </PageWrapper>
  );
}
