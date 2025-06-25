import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";

export default function Page12Algumanecessidade() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">12.ª Por alguma necessidade</Text>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Deus, refúgium nostrum et virtus: adésto piis Ecclésiæ tuæ
              précibus, auctor ipse pietátis, et præsta; ut, quod fidéliter
              pétimus, efficáciter consequámur. Per Dóminum nostrum...
            </Text>
            <Text className="vernacular">
              Ó Deus, nosso refúgio e fortaleza e autor da piedade, atendei às
              preces devotas da vossa Igreja, para que obtenhamos eficazmente o
              que Vos suplicamos confiadamente. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Secreta</Text>

          <Language>
            <Text className="latin">
              Da, miséricors Deus: ut hæc salutáris oblátio et a própriis nos
              reátibus indesinénter expédiat, et ab ómnibus tueátur advérsis.
              Per Dóminum...
            </Text>
            <Text className="vernacular">
              Concedei-nos, ó Deus misericordioso, que esta salutar oblação nos
              livre urgentemente das nossas próprias faltas e nos defenda de
              todas as adversidades. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Postcomúnio</Text>

          <Language>
            <Text className="latin">
              Súmpsimus, Dómine, sacri dona mystérii, humíliter deprecántes: ut,
              quæ in tui commemoratiónem nos fácere præcepísti, in nostræ
              profíciant infirmitátis auxílium: Qui vivis...
            </Text>
            <Text className="vernacular">
              Senhor, recebemos os dons dos vossos sagrados mystérios; e,
              humildemente Vos suplicamos, permiti que seja proveitoso para a
              nossa fraqueza aquilo que ordenastes fizéssemos em vossa memória.
              Por nosso Senhor...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
