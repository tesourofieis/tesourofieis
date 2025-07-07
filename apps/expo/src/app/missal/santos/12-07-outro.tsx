import { Text } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

export default function Page1207() {
  return (
    <PageWrapper>
      <H1 text="Vigilia Imaculada Conceição da SS. Virgem" />

      <Text className="comment">
        Uma novena de preces prepara ordinariamente as almas à grande festa de
        amanhã, cuja vigilia Leão XIII, em 1879, estendeu a toda a Igreja.
        Peçamos neste dia à Imaculada que se digne purificar mais os nossos
        corações, para a solenidade de amanhã (Or.).
      </Text>
    </PageWrapper>
  );
}
