import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


export default function PageCoracaosanto() {
  return (
    <PageWrapper>
      <H1 text="Coração Santo aqui nos tens prostrados" />

      <View className="not-content">
        <Text className="text-base">
          Coração Santo aqui nos tens prostrados és nosso Rei vimos render-te
          preito. Livra do mal os filhos resgatados com tanta dor no sangue do
          teu peito.
        </Text>
        <Text className="text-base">{"\n"}</Text>
        <Text className="text-base">
          Refrão: Protege ó Cristo o nosso Portugal. Que é seu brasão a chaga do
          teu lado, e sempre quis por timbre seu real, ser filho teu, teu mais
          fiel soldado.
        </Text>
        <Text className="text-base">{"\n"}</Text>
        <Text className="text-base">
          Ó Pátria, surge em prol do Seu reinado; vem defender o amor que te
          redime. Cale-se a voz do ímpio desvairado, só fale o amor, a esperança
          e a fé sublime.
        </Text>
        <Text className="text-base">{"\n"}</Text>
        <Text className="text-base">
          A ti pertence a terra portuguesa nossa rainha é Tua Mãe bendita. Somos
          cristãos não há maior nobreza Teu coração de amor por nós palpita.
        </Text>
        <Text className="text-base">{"\n"}</Text>
        <Text className="text-base">
          Tu reinarás, ó Coração ardente de amor por nós, que somos teus
          dilectos; não quer viver sem Ti a lusa gente, a Ti consagra o lis dos
          seus afectos.
        </Text>
      </View>
    </PageWrapper>
  );
}
