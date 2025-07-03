import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


export default function PageGravaimeudeus() {
  return (
    <PageWrapper>
      <H1 text="Gravai, ó meu Deus" />
      <Text className="text-base">
        Gravai, ó meu Deus, a vossa lei no fundo do meu coração, fazei-me
        conhecer os vossos santos mandamentos, e dai-me a graça de os amar e a
        força de os praticar.
      </Text>
    </PageWrapper>
  );
}
