import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PageObjectosperdidos() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Objectos Perdidos, Santo António</Text>
          <Text className="text-base">
            Eu, vos saúdo, glorioso Santo António, fiel protector dos que em vós
            esperam. Já que recebestes de Deus o poder especial de fazer achar
            os objectos perdidos, socorrei-me neste momento, a fim de que,
            mediante vosso auxílio, eu encontre o objecto que procuro...
            Alcançai-me, sobretudo, uma fé viva, uma esperança firme, uma
            caridade ardente e uma docilidade sempre pronta aos desejos de Deus.
            Que eu me não detenha apenas nas coisas deste mundo. Saiba
            valorizá-las e utilizá-las como algo que nos foi emprestado e lute
            sobretudo por aquelas coisas que ladrão nenhum pode nos arrebatar e
            nem iremos perder jamais. Amen.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
