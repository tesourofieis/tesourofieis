import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";


import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

export default function Page0523() {
  return (
    <PageWrapper>
      <H1 text="S. Basileu, B. e Mártir, a 23 de Maio, Na Diocese do Porto" />
      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/9martir">
          Missa Protexísti me
        </Link>{" "}
        , excepto:
      </Text>
      <H3 text="Oração" />
      <Text className="text-base">
        Dignai-Vos acolher em vossa clemência, Senhor, Vos suplicamos, as preces
        do vosso povo, a fim de que sejamos auxiliados pelos méritos do B.
        Basileu, vosso Mártir e Pontífice, que nos conforta com a recordação dos
        seus sofrimentos. Por nosso Senhor...
      </Text>
      <H3 text="Secreta" />
      <Text className="text-base">
        Recebei, Senhor, os dons que devidamente Vos oferecemos; e, tendo Vós em
        atenção os méritos do B. Basileu, vosso Mártir e Pontífice, permiti que
        nos sirvam de auxílio para alcançarmos a salvação. Por nosso Senhor...
      </Text>
      <H3 text="Postcomúnio" />
      <Text className="text-base">
        Havendo Vós, Senhor, saciado a vossa família com os sacrossantos dons,
        confortai-nos constantemente, Vos suplicamos, com a intercessão daquele
        cuja solenidade celebramos. Por nosso Senhor...
      </Text>
    </PageWrapper>
  );
}
