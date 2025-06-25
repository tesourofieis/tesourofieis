import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";

export default function PageSaomiguel() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">São Miguel Arcanjo</Text>

          <Language>
            <Text className="latin">
              Sancte Míchaël Archángele, defénde nos in prælio; contra nequitiam
              et insidias diáboli esto præsídium. Imperet illi Deus, súpplices
              deprecámur: tuque, Princeps milítiæ cæléstis, Sátanam aliosque
              Spíritus malignos, qui ad perditionem animarum pervagantur in
              mundo, divina virtúte in inférnum detrude. Amen.
            </Text>
            <Text className="vernacular">
              São Miguel Arcanjo, defendei-nos no combate, sede o nosso auxílio
              contra as maldades e as ciladas do demónio. Instantemente vos
              pedimos que Deus sobre ele impere; e vós, Príncipe da Milícia
              Celeste, pelo poder divino, precipitai no inferno a Satanás e aos
              outros espíritos malignos que vagueiam pelo mundo para perdição
              das almas. Amen.
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
