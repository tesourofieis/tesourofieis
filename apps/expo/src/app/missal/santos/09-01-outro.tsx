import { Link } from "expo-router";
import { Text, View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

export default function Page0901Outro() {
  return (
    <PageWrapper>
      <H1 text="S. S. Doze Irmãos, Mártires, a 1 de Setembro" />

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/santos/03-10">
          Missa de Os Quarenta Mártires
        </Link>{" "}
        , a 10 de Março, com a Oração, Secreta e Postcomúnio da
        <Link className="link" href="/missal/santos/08-01">
          Comemoração dos S. S. Macabeus, Mártires,
        </Link>{" "}
        a 1 de Agosto.
      </Text>
    </PageWrapper>
  );
}
