import { Text, View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

export default function PageUmdiadescestes() {
  return (
    <PageWrapper>
      <H1 text="Senhora, um dia descestes" />

      <View className="not-content">
        <Text className="vernacular">
          Senhora, um dia descestes À terra que em vós confia: Descestes à Serra
          d’ Aire, Em plena Cova da Iria.
        </Text>
        <Text className="vernacular">{"\n"}</Text>
        <Text className="vernacular">
          Refrão: Salve, Regina! Salve, Regina! Ora pro nobis, Maria! (2x)
        </Text>
        <Text className="vernacular">{"\n"}</Text>
        <Text className="vernacular">
          Nas mãos trazíeis o terço, Que pende da vossa imagem: Na fronte uma
          estrela de ouro, Nos lábios doce mensagem.
        </Text>
        <Text className="vernacular">{"\n"}</Text>
        <Text className="vernacular">
          Falando a três pastorinhos De cima duma azinheira Pregastes a
          penitência Aos povos da terra inteira.
        </Text>
        <Text className="vernacular">{"\n"}</Text>
        <Text className="vernacular">
          Pedistes que nos uníssemos Em oração e concórdia, Com pena dos
          pecadores, Ó Mãe de misericórdia.
        </Text>
        <Text className="vernacular">{"\n"}</Text>
        <Text className="vernacular">
          Olhai, ó Virgem, do Céu O mundo que pede luz. Bendita sejais, Senhora!
          Bendito seja Jesus!
        </Text>
      </View>
    </PageWrapper>
  );
}
