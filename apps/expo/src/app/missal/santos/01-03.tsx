import { Link } from "expo-router";

import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

export default function Page0103() {
  return (
    <PageWrapper>
      <Text className="h1">
        Oitava de S. João, Apóstolo e Evangelista, a 3 de Janeiro
      </Text>

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/santos/12-27">
          Missa S. João, Apóstolo e Evangelista
        </Link>
      </Text>
    </PageWrapper>
  );
}
