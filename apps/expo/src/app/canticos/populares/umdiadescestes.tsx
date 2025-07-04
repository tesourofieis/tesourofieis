import { Text, View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

export default function PageUmdiadescestes() {
  return (
    <PageWrapper>
      <H1 text="Senhora, um dia descestes" />

      <View className="not-content">
        <Text className="text-base">
          Senhora, um dia descestes À terra que em vós confia: Descestes à Serra
          d’ Aire, Em plena Cova da Iria.
        </Text>
        <Text className="text-base">{"\n"}</Text>
        <Text className="text-base">
          Refrão: Salve, Regina! Salve, Regina! Ora pro nobis, Maria! (2x)
        </Text>
        <Text className="text-base">{"\n"}</Text>
        <Text className="text-base">
          Nas mãos trazíeis o terço, Que pende da vossa imagem: Na fronte uma
          estrela de ouro, Nos lábios doce mensagem.
        </Text>
        <Text className="text-base">{"\n"}</Text>
        <Text className="text-base">
          Falando a três pastorinhos De cima duma azinheira Pregastes a
          penitência Aos povos da terra inteira.
        </Text>
        <Text className="text-base">{"\n"}</Text>
        <Text className="text-base">
          Pedistes que nos uníssemos Em oração e concórdia, Com pena dos
          pecadores, Ó Mãe de misericórdia.
        </Text>
        <Text className="text-base">{"\n"}</Text>
        <Text className="text-base">
          Olhai, ó Virgem, do Céu O mundo que pede luz. Bendita sejais, Senhora!
          Bendito seja Jesus!
        </Text>
      </View>
    </PageWrapper>
  );
}
