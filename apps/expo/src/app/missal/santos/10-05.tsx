import { Link } from "expo-router";

import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

export default function Page1005() {
  return (
    <PageWrapper>
      <Text className="h1">S. Plácido e Comps. Mártires, a 5 de Outubro</Text>

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/8muitosmartires3">
          Missa Salus autem
        </Link>{" "}
        , excepto
        <Link className="link" href="/missal/comum/7muitosmartires2#oração">
          Oração
        </Link>{" "}
        ,
        <Link className="link" href="/missal/comum/7muitosmartires2#secreta">
          Secreta
        </Link>{" "}
        e
        <Link
          className="link"
          href="/missal/comum/7muitosmartires2#postcomúnio"
        >
          Postcomúnio
        </Link>{" "}
        da
        <Link className="link" href="/missal/comum/7muitosmartires2">
          Missa Sapiéntiam sanctórum.
        </Link>
      </Text>
    </PageWrapper>
  );
}
