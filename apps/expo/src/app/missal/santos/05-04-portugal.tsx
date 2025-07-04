import { Link } from "expo-router";
import { Text, View } from "react-native";
import { H1, H3 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

export default function Page0504Portugal() {
  return (
    <PageWrapper>
      <H1 text="Trasl. das Relíquias de S. Vicente, a 4 de Maio, Nalguns lugares" />
      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/9martir">
          Missa Protexísti me
        </Link>{" "}
        , excepto:
      </Text>
      <H3 text="Oração" />
      <Text className="text-base">
        Que a fé da ressurreição, Senhor, cresça em nós em virtude das
        maravilhas que operais pelas Relíquias do vosso Santo Mártir Vicente; e
        fazei que alcancemos a glória imortal, de que estas cinzas, que
        veneramos, nos servem de penhor. Por nosso Senhor...
      </Text>
    </PageWrapper>
  );
}
