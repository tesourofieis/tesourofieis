import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


export default function Page010() {
  return (
    <PageWrapper>
      <H1 text="Salmo 10" />

      <Language>
        <Text className="latin">
          In Dómino confído: quómodo dícitis ánimæ meæ: * Tránsmigra in montem
          sicut passer?
        </Text>
        <Text className="vernacular">
          No Senhor confio: porque dizeis à minha alma: * migra para o monte
          como a ave?
        </Text>
        <Text className="latin">
          Quóniam ecce peccatóres intendérunt arcum, paravérunt sagíttas suas in
          pháretra, * ut sagíttent in obscúro rectos corde.
        </Text>
        <Text className="vernacular">
          Eis que os pecadores mostraram o seu arco, prepararam as suas setas na
          aljava, * para no escuro dispararem aos rectos de coração.
        </Text>
        <Text className="latin">
          Quóniam quæ perfecísti, destruxérunt: * justus autem quid fecit?
        </Text>
        <Text className="vernacular">
          Porque eles destruíram o que fizestes de bom: * mas que fez o justo?
        </Text>
        <Text className="latin">
          Dóminus in templo sancto suo, * Dóminus in cælo sedes ejus.
        </Text>
        <Text className="vernacular">
          O Senhor habita no seu santo templo, * o trono do Senhor está no céu.
        </Text>
        <Text className="latin">
          Óculi ejus in páuperem respíciunt: * pálpebræ ejus intérrogant fílios
          hóminum.
        </Text>
        <Text className="vernacular">
          Seus olhos olham para o pobre: * suas pálpebras inquirem os filhos dos
          homens.
        </Text>
        <Text className="latin">
          Dóminus intérrogat justum et ímpium: * qui autem díligit iniquitátem,
          odit ánimam suam.
        </Text>
        <Text className="vernacular">
          O Senhor interroga o justo e o ímpio: * mas aquele que ama a
          iniquidade, odeia a sua alma.
        </Text>
        <Text className="latin">
          Pluet super peccatóres láqueos: * ignis, et sulphur, et spíritus
          procellárum pars cálicis eórum.
        </Text>
        <Text className="vernacular">
          Fará chover laços sobre os pecadores: * o fogo e o enxofre e as
          tempestades são a parte que lhes toca.
        </Text>
        <Text className="latin">
          Quóniam justus Dóminus, et justítias diléxit: * æquitátem vidit vultus
          ejus.
        </Text>
        <Text className="vernacular">
          Porque o Senhor é justo e ama a justiça: * o seu rosto olha para a
          equidade.
        </Text>
      </Language>
    </PageWrapper>
  );
}
