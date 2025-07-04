import { Text, View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

export default function PageBracosazinheira() {
  return (
    <PageWrapper>
      <H1 text="Sobre os braços da azinheira" />

      <View className="not-content">
        <Text className="text-base">
          Sobre os braços da azinheira Tu vieste, ó Mãe clemente Visitar a lusa
          gente, De quem és Padroeira.
        </Text>
        <Text className="text-base">{"\n"}</Text>
        <Text className="text-base">
          Refrão: Avé, Avé, Avé Mãe celestial Avé, Avé, Avé, canta Portugal!
        </Text>
        <Text className="text-base">{"\n"}</Text>
        <Text className="text-base">
          Foi na Cova da Iria Quando o terço Te rezavam, Quando os sinos
          convidavam A orar , era meio-dia.
        </Text>
        <Text className="text-base">{"\n"}</Text>
        <Text className="text-base">
          Que desceste lá dos Céus A falar aos pastorinhos, Inocentes
          pobrezinhos, Mãe dos homens, Mãe de Deus.
        </Text>
        <Text className="text-base">{"\n"}</Text>
        <Text className="text-base">
          Penitência, oração, Se fizesse, lhes pedias; Do Rosário que trazias,
          Mais pediste a devoção.
        </Text>
        <Text className="text-base">{"\n"}</Text>
        <Text className="text-base">
          Seja pois o Santo Terço, Do Céu querida oração; Terna e viva devoção
          Que Te oferte o luso berço.
        </Text>
      </View>
    </PageWrapper>
  );
}
