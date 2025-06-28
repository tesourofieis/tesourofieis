import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0923Outro() {
  return (
    <PageWrapper>
      <Text className="h1">Santa Tecla, Virgem e Mártir, a 23 de Setembro</Text>

      <Text className="h3">Oração</Text>

      <Language>
        <Text className="latin">
          Da, quǽsumus, omnípotens Deus: ut, qui beátæ Theclæ Vírginis et
          Mártyris tuæ natalítia cólimus; et ánnua sollemnitáte lætémur, et
          tantæ fídei proficiámus exémplo. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus omnipotente, celebrando nós o nascimento da B. Tecla, vossa
          Virgem e Mártir, concedei-nos, Vos suplicamos, que nos alegremos com
          sua festa anual e nos sejam proveitosos os exemplos da sua grande fé.
          Por nosso Senhor...
        </Text>
      </Language>

      <Text className="h3">Secreta e Postcomúnio</Text>
    </PageWrapper>
  );
}
