import { Text, View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

export default function PageSalvenobrepadroeira() {
  return (
    <PageWrapper>
      <H1 text="Salve, nobre Padroeira" />

      <View className="not-content">
        <Text className="vernacular">
          Salve, nobre Padroeira Do Povo, teu protegido, Entre todos escolhido,
          Para povo do Senhor.
        </Text>
        <Text className="vernacular">{"\n"}</Text>
        <Text className="vernacular">
          Refrão: Ó glória da nossa terra, Que tens salvado mil vezes, Enquanto
          houver Portugueses, Tu serás o seu amor.
        </Text>
        <Text className="vernacular">{"\n"}</Text>
        <Text className="vernacular">
          Com tua graça e beleza Um jardim não ornas só, Linda flor de Jericó,
          De Portugal és a Flor!
        </Text>
        <Text className="vernacular">{"\n"}</Text>
        <Text className="vernacular">
          Flor de suave perfume Para toda a Lusa Gente, Entre nós, em cada
          crente Tens esmerado cultor.
        </Text>
        <Text className="vernacular">{"\n"}</Text>
        <Text className="vernacular">
          És a obra mais sublime Que saiu das mãos de Deus. Nem na terra nem nos
          céus, Há criatura maior!
        </Text>
        <Text className="vernacular">{"\n"}</Text>
        <Text className="vernacular">
          A Tua glória é valer-nos, Não tens maior alegria; Ninguém chama por
          Maria, Que não alcance favor.
        </Text>
        <Text className="vernacular">{"\n"}</Text>
        <Text className="vernacular">
          És a nossa padroeira Não largues o padroado Do rebanho confiado Ao eu
          poder protector.
        </Text>
        <Text className="vernacular">{"\n"}</Text>
        <Text className="vernacular">
          Portugal, qual outra Fénix, À vida torne outra vez: Não se chame
          português Quem cristão de fé não for.
        </Text>
      </View>
    </PageWrapper>
  );
}
