import { Link } from "expo-router";
import { Text } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0928() {
  return (
    <PageWrapper>
      <H1 text="S. Venceslau, Mártir, a 28 de Setembro" />

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/4martirnaopontifice1">
          Missa In virtúte tua
        </Link>{" "}
        , excepto:
      </Text>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Deus, qui beátum Wencesláum per martýrii palmam a terréno principátu
          ad cœléstem glóriam transtulísti: ejus précibus nos ab omni
          adversitáte custódi; et ejúsdem tríbue gaudére consórtio. Per
          Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que pela palma do martírio trasladastes o B. Venceslau do
          principado terreno para a glória celestial, defendei-nos, pelas suas
          preces, de todas as adversidades e proporcionai-nos a alegria de
          compartilhar do seu glorioso destino. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
