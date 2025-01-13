import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page112() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Salmo 112</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Laudáte, púeri, Dóminum: * laudáte nomen Dómini.
            </Text>
            <Text className="text-base vernacular">
              Louvai o Senhor, ó meninos: * louvai o nome do Senhor.
            </Text>
            <Text className="text-base latin">
              <Text className="text-base latin">fit reverentia</Text> Sit nomen
              Dómini benedíctum, * ex hoc nunc, et usque in sǽculum.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">inclinar a cabeça</Text>{" "}
              Seja bendito o nome do Senhor, * desde agora e para sempre.
            </Text>
            <Text className="text-base latin">
              A solis ortu usque ad occásum, * laudábile nomen Dómini.
            </Text>
            <Text className="text-base vernacular">
              Desde o nascer ao pôr do sol, * é digno de louvor o nome do
              Senhor.
            </Text>
            <Text className="text-base latin">
              Excélsus super omnes gentes Dóminus, * et super cælos glória ejus.
            </Text>
            <Text className="text-base vernacular">
              Excelso é o Senhor sobre todas as gentes, * e a sua glória sobre
              os céus.
            </Text>
            <Text className="text-base latin">
              Quis sicut Dóminus, Deus noster, qui in altis hábitat, * et
              humília réspicit in cælo et in terra?
            </Text>
            <Text className="text-base vernacular">
              Quem há como o Senhor nosso Deus, que habita nas alturas: * e
              atende os humildes no céu e na terra?
            </Text>
            <Text className="text-base latin">
              Súscitans a terra ínopem, * et de stércore érigens páuperem:
            </Text>
            <Text className="text-base vernacular">
              Levantando da terra o desvalido, * e tirando da imundície o pobre:
            </Text>
            <Text className="text-base latin">
              Ut cóllocet eum cum princípibus, * cum princípibus pópuli sui.
            </Text>
            <Text className="text-base vernacular">
              Para o colocar com os príncipes, * com os príncipes do seu povo.
            </Text>
            <Text className="text-base latin">
              Qui habitáre facit stérilem in domo, * matrem filiórum lætántem.
            </Text>
            <Text className="text-base vernacular">
              Que faz a mulher estéril viver em sua casa, * alegre mãe de
              filhos.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
