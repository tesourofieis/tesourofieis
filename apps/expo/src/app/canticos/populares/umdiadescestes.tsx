import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PageUmdiadescestes() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Senhora, um dia descestes</Text>

          <View className="not-content">
            <Text className="text-base">
              Senhora, um dia descestes À terra que em vós confia: Descestes à
              Serra d’ Aire, Em plena Cova da Iria.
            </Text>
            <Text className="text-base">{"\n"}</Text>
            <Text className="text-base">
              Refrão: Salve, Regina! Salve, Regina! Ora pro nobis, Maria! (2x)
            </Text>
            <Text className="text-base">{"\n"}</Text>
            <Text className="text-base">
              Nas mãos trazíeis o terço, Que pende da vossa imagem: Na fronte
              uma estrela de ouro, Nos lábios doce mensagem.
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
              Olhai, ó Virgem, do Céu O mundo que pede luz. Bendita sejais,
              Senhora! Bendito seja Jesus!
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
