import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page33Mareantes() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">33.ª Pelos mareantes</Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, qui transtulísti patres nostros per Mare Rubrum, et
              transvexísti eos per aquam nímiam, laudem tui nóminis decantántes:
              te supplíciter deprecámur; ut in navi fámulos tuos, repúlsis
              adversitátibus, portu semper optábili cursúque tranquíllo tueáris.
              Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, que permitistes que os nossos pais atravessassem o mar
              Vermelho e os transportastes de uma à outra margem, através da
              profundeza das águas, durante o que eles cantaram louvores em
              honra do vosso nome, dignai-Vos acolher sob a vossa protecção os
              vossos servos, que neste momento estão embarcados, e afastar deles
              todos os perigos, conduzindo-os, após uma viagem feliz, ao porto
              tão desejado. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Súscipe, quǽsumus, Dómine, preces famulórum tuórum, cum
              oblatiónibus hostiárum: et eos, pro quibus tua mystéria
              celebrámus, ab ómnibus defénde perículis. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Aceitai, Senhor, Vos pedimos, a oferta da oblação destes vossos
              servos, juntamente com suas orações, e protegei contra todos os
              perigos os viajantes, por cuja salvação celebramos os vossos
              sacrossantos mystérios. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Sanctificáti divíno mystério, majestátem tuam, Dómine, supplíciter
              deprecámur et pétimus: ut fámulos tuos, quos donis facis
              cœléstibus memorári; per lignum sanctæ Crucis, et a peccátis
              ábstrahas, et a perículis cunctis miserátus erípias. Per Dóminum
              nostrum...
            </Text>
            <Text className="text-base vernacular">
              Santificados com estes divinos mystérios, invocamos humildemente a
              vossa suprema majestade, ó Senhor, e, pelo Lenho Sagrado da vossa
              Cruz, Vos suplicamos que aqueles de quem permitistes nos
              lembrássemos durante este banquete celestial sejam retirados do
              caminho do pecado, e, pela vossa misericórdia, sejam livres de
              todos os perigos, Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
