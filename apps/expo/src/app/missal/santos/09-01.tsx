import { Link } from "expo-router";
import { Text, View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

export default function Page0901() {
  return (
    <PageWrapper>
      <H1 text="S. Egídio (ou Gil), Abade, a 1 de Setembro" />

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/16abades">
          Missa Os justi.
        </Link>{" "}
        A Comemoração dos S. S. Doze Irmãos como na
        <Link href="/missal/santos/08-01">
          Missa Comemoração dos S. S. Macabeus, Mártires.
        </Link>
      </Text>
    </PageWrapper>
  );
}
