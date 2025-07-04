import { Text, View } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0923Outro() {
  return (
    <PageWrapper>
      <H1 text="Santa Tecla, Virgem e Mártir, a 23 de Setembro" />

      <H3 text="Oração" />

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

      <H3 text="Secreta e Postcomúnio" />
    </PageWrapper>
  );
}
