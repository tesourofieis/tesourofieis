import { Link } from "expo-router";
import { Text, View } from "react-native";
import { H1, H3 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

export default function Page0716Beja() {
  return (
    <PageWrapper>
      <H1 text="S. Sisenando, Mártir, a 16 de Julho, Na Diocese de Beja" />
      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/4martirnaopontifice1">
          Missa In virtúte tua
        </Link>{" "}
        , excepto:
      </Text>
      <H3 text="Oração" />Ó omnipotente Deus, que ao B. Levita Sisenando destes
      coragem para abraçar e vencer o próprio martírio, concedei-nos, Vos
      pedimos, que virilmente abracemos o estreito caminho da salvação. Por
      nosso Senhor...
    </PageWrapper>
  );
}
