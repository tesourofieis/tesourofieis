import { Link } from "expo-router";
import { Text } from "react-native";
import { H1, H3 } from "~/components/Headings";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";

export default function Page0215() {
  return (
    <PageWrapper>
      <H1 text="S. S. Faustino e Jovita, Mártires, a 15 de Fevereiro" />

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/8muitosmartires3">
          Missa Salus autem
        </Link>{" "}
        , excepto:
      </Text>

      <H3 text="Secreta e Postcomúnio" />

      <LinkCard
        href="/missal/comum/6muitosmartires1#secreta"
        title="Muitos Mártires - Missa Intret in"
      />
    </PageWrapper>
  );
}
