import { Link } from "expo-router";
import { H1 } from "~/components/Headings";


import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

export default function Page0104() {
  return (
    <PageWrapper>
      <H1 text="Oitava dos Santos Inocentes, a 4 de Janeiro" />

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/santos/12-28">
          Missa Santos Inocentes
        </Link>{" "}
      </Text>
    </PageWrapper>
  );
}
