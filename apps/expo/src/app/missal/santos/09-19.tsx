import { Link } from "expo-router";
import { Text, View } from "react-native";
import { H1, H3 } from "~/components/Headings";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";

export default function Page0919() {
  return (
    <PageWrapper>
      <H1 text="S. Januário e Outros, Mártires, a 19 de Setembro" />

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/8muitosmartires3">
          Missa Salus autem
        </Link>{" "}
        , excepto:
      </Text>

      <H3 text="Evangelho" />

      <LinkCard
        href="/missal/comum/8muitosmartires3#evangelho2"
        title="Muitos Mártires - Missa Salus autem"
      />
    </PageWrapper>
  );
}
