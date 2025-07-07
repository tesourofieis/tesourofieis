import { Text } from "react-native";
import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page086() {
  return (
    <PageWrapper>
      <H1 text="Salmo 86" />

      <Language>
        <Text className="latin">
          Fundaménta ejus in móntibus sanctis: * díligit Dóminus portas Sion
          super ómnia tabernácula Jacob.
        </Text>
        <Text className="vernacular">
          Os seus fundamentos estão sobre os montes santos: * o Senhor ama as
          portas de Sião mais que todos os tabernáculos de Jacob.
        </Text>
        <Text className="latin">Gloriósa dicta sunt de te, * cívitas Dei.</Text>
        <Text className="vernacular">
          Coisas gloriosas se têm dito de ti, * ó cidade de Deus.
        </Text>
        <Text className="latin">
          Memor ero Rahab, et Babylónis * sciéntium me.
        </Text>
        <Text className="vernacular">
          Lembrar-me-ei de Raab e de Babilónia, * que me conhecem.
        </Text>
        <Text className="latin">
          Ecce, alienígenæ, et Tyrus, et pópulus Æthíopum, * hi fuérunt illic.
        </Text>
        <Text className="vernacular">
          Eis os estrangeiros, Tiro e o povo dos Etíopes, * todos estes estarão
          lá.
        </Text>
        <Text className="latin">
          Numquid Sion dicet: homo, et homo natus est in ea: * et ipse fundávit
          eam Altíssimus?
        </Text>
        <Text className="vernacular">
          Porventura se não dirá a Sião: um grande número de homens nasceu nela:
          * e a fundou o mesmo Altíssimo?
        </Text>
        <Text className="latin">
          Dóminus narrábit in scriptúris populórum, et príncipum: * horum, qui
          fuérunt in ea.
        </Text>
        <Text className="vernacular">
          O Senhor poderá contar, no registo dos povos e dos príncipes: * o
          número daqueles que nela estiveram.
        </Text>
        <Text className="latin">
          Sicut lætántium ómnium * habitátio est in te.
        </Text>
        <Text className="vernacular">
          Estão todos cheios de alegria* os que habitam dentro de ti.
        </Text>
      </Language>
    </PageWrapper>
  );
}
