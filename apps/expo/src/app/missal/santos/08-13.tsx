import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";

export default function Page0813() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. S. Hipólito e Cassiano, Mártires, a 13 de Agosto
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/8muitosmartires3">
              Missa Salus autem
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Da, quǽsumus, omnípotens Deus: ut beatórum Mártyrum tuórum
              Hippolýti et Cassiáni veneránda sollémnitas, et devotiónem nobis
              áugeat et salútem. Per Dóminum nostrum...
            </Text>
            <Text className="vernacular">
              Concedei-nos, ó Deus omnipotente, Vos rogamos, que a veneranda
              festa dos vossos B. B. Mártires Hipólito e Cassiano aumente a
              nossa piedade e nos faça alcançar a salvação. Por n...
            </Text>
          </Language>

          <Text className="h3">Secreta</Text>

          <Language>
            <Text className="latin">
              Réspice, Dómine, múnera pópuli tui, Sanctórum festivitáte votíva:
              et tuæ testificátio veritátis nobis profíciat ad salútem. Per
              Dóminum...
            </Text>
            <Text className="vernacular">
              Dignai-Vos olhar, Senhor, para as oblatas que o vosso povo Vos
              oferece nesta festa dos vossos Santos, e fazei que o testemunho,
              por eles dado à vossa verdade, nos seja útil para a salvação. Por
              nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Postcomúnio</Text>

          <Language>
            <Text className="latin">
              Sacramentórum tuórum, Dómine, commúnio sumpta nos salvet: et in
              tuæ veritátis luce confírmet. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Que a comunhão dos vossos sacramentos, que recebemos, Senhor, nos
              alcance a salvação e nos confirme na profissão da vossa doutrina.
              Por nosso Senhor...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
