import { Text, View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

export default function PageBendizemosoteunome() {
  return (
    <PageWrapper>
      <H1 text="Bendizemos o Teu Nome" />

      <View className="not-content">
        <Text className="vernacular">
          Bendizemos o Teu nome, Mãe do céu, Virgem Maria, Bendizemos à porfia O
          Teu Filho Salvador.
        </Text>
        <Text className="vernacular">{"\n"}</Text>
        <Text className="vernacular">
          Refrão: Aqui vimos, Mãe Querida, Consagra-Te o nosso Amor. (bis)
        </Text>
        <Text className="vernacular">{"\n"}</Text>
        <Text className="vernacular">
          Esmagaste, ó Virgem Santa, Toda bela e Imaculada, A cabeça envenenada,
          Do dragão enganador.
        </Text>
        <Text className="vernacular">{"\n"}</Text>
        <Text className="vernacular">
          Todo o mundo, ó Mãe bendita, Cheio está das Tuas glórias, De perpétuas
          memórias, De Teu nome e Teu louvor.
        </Text>
        <Text className="vernacular">{"\n"}</Text>
        <Text className="vernacular">
          Advogada poderosa, O universo em Ti confia, Porque és Tu refúgio e
          guia, Para o justo e pecador.
        </Text>
        <Text className="vernacular">{"\n"}</Text>
        <Text className="vernacular">
          És conforto dos aflitos, És das graças dispenseira, És da paz a
          mensageira, Nossa esp’rança e nosso amor.
        </Text>
      </View>
    </PageWrapper>
  );
}
