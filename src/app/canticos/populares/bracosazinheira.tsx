import { View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PageBracosazinheira() {
  return (
    <PageWrapper>
      <H1 text="Sobre os braços da azinheira" />

      <View className="not-content">
        <Typography className="vernacular">
          Sobre os braços da azinheira Tu vieste, ó Mãe clemente Visitar a lusa
          gente, De quem és Padroeira.
        </Typography>
        <Typography className="vernacular">
          Refrão: Avé, Avé, Avé Mãe celestial Avé, Avé, Avé, canta Portugal!
        </Typography>
        <Typography className="vernacular">
          Foi na Cova da Iria Quando o terço Te rezavam, Quando os sinos
          convidavam A orar , era meio-dia.
        </Typography>
        <Typography className="vernacular">
          Que desceste lá dos Céus A falar aos pastorinhos, Inocentes
          pobrezinhos, Mãe dos homens, Mãe de Deus.
        </Typography>
        <Typography className="vernacular">
          Penitência, oração, Se fizesse, lhes pedias; Do Rosário que trazias,
          Mais pediste a devoção.
        </Typography>
        <Typography className="vernacular">
          Seja pois o Santo Terço, Do Céu querida oração; Terna e viva devoção
          Que Te oferte o luso berço.
        </Typography>
      </View>
    </PageWrapper>
  );
}
