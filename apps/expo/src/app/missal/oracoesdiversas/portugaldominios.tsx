import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";
import { H1, H3 } from "~/components/Headings";


export default function PagePortugaldominios() {
  return (
    <PageWrapper>
      <H1 text="Para Portugal e seus Domínios" />
      <H3 text="Colecta" />
      <Text className="aside">
        Por Determinação da Sagrada Congregação dos Ritos (19 de Maio de 1952)
        em todas as Missas, excepto nas de Réquiem, a seguir à última Oração, à
        última Secreta e ao último Postcomúnio.
      </Text>
      <Text className="text-base">
        E livrai de todas as adversidades no ar, na terra e no mar os vossos
        servos: o nosso Papa
        <Text className="text-red-500">N.</Text> o nosso Patriarca{" "}
        <Text className="text-red-500">N.</Text> (Arcebispo{" "}
        <Text className="text-red-500">N.</Text> ou Bispo{" "}
        <Text className="text-red-500">N.</Text>) , o nosso Presidente e os
        nossos Governantes, assim como o povo que lhes foi confiado e o seu
        exército; concedei a paz e a prosperidade aos nossos tempos e afastai da
        nossa Igreja toda a maldade, destruindo a soberba dos pagãos e dos
        hereges com o poder da vossa dextra. (Por nosso Senhor... ou Pelo mesmo
        nosso Senhor segundo a conclusão da Oração, da Secreta ou do Postcomúnio
        a que fica acrescentada) ADVERTÊNCIAS:
      </Text>
      <Text className="aside">
        Se a Missa tiver uma única Oração, dir-se-á esta Colecta imediatamente à
        Oração e sob a mesma e única conclusão; o mesmo quanto à Secreta e
        Postcomúnio. Quando na Missa se recitar a Oração «Pelo Papa»,
        omitir-se-ão as Palavras «o nosso Papa»; o mesmo quanto ao nome do
        Antístite, quando a Sé Diocesana estiver vaga. Se se recitar a Oração «A
        Cunctis», omitir-se-ão as Palavras: «concedei a paz e a prosperidade aos
        nossos tempos e afastai da nossa Igreja toda a maldade». Quando se diz a
        Oração «Pela Igreja omitem-se estas Palavras: «afastai da nossa Igreja
        toda a maldade». Quando se diz a Oração «Pela Paz», omitem-se as
        Palavras: «concedei a paz e a prosperidade aos nossos tempos». Nas
        Secretas e Postcomúnios não há alteração.
      </Text>
    </PageWrapper>
  );
}
