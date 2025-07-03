import { Link } from "expo-router";
import { H1 } from "~/components/Headings";


import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

export default function Page1230() {
  return (
    <PageWrapper>
      <H1 text="Sexto dia da Oitava do Natal, a 30 de Dezembro" />

      <Text className="aside">
        Intróito, Oração, Gradual, Ofertório, Comúnio e Postcomúnio como na
        <Link className="link" href="/missal/santos/12-25-2">
          Terceira Missa do Natal
        </Link>{" "}
        . Epístola e Evangelho como na{" "}
        <Link className="link" href="/missal/santos/12-25-1">
          Segunda Missa do Natal
        </Link>{" "}
        .
      </Text>
    </PageWrapper>
  );
}
