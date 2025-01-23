import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageBenedictus() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Benedíctus</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Benedíctus Dóminus, Deus Israël: * quia visitávit, et fecit
              redemptiónem plebis suæ:
            </Text>
            <Text className="text-base vernacular">
              Bendito seja o Senhor, Deus de Israel: * porque visitou e remiu
              seu povo:
            </Text>
            <Text className="text-base latin">
              Et eréxit cornu salútis nobis: * in domo David, púeri sui.
            </Text>
            <Text className="text-base vernacular">
              E preparou para nós uma poderosa salvação: * na casa deseu servo
              David.
            </Text>
            <Text className="text-base latin">
              Sicut locútus est per os sanctórum, * qui a sǽculo sunt,
              prophetárum ejus:
            </Text>
            <Text className="text-base vernacular">
              Quando prometeu, pela boca dos seus Santos, * que outrora foram
              seus Profetas:
            </Text>
            <Text className="text-base latin">
              Salútem ex inimícis nostris, * et de manu ómnium, qui odérunt nos.
            </Text>
            <Text className="text-base vernacular">
              Que nos salvaria dos nossos dos nossos inimigos, * e das mãos de
              todos os que nos odeiam.
            </Text>
            <Text className="text-base latin">
              Ad faciéndam misericórdiam cum pátribus nostris: * et memorári
              testaménti sui sancti.
            </Text>
            <Text className="text-base vernacular">
              Para praticar a sua misericórdia para com os nossos pais: * e em
              recordação da sua sagrada aliança.
            </Text>
            <Text className="text-base latin">
              Jusjurándum, quod jurávit ad Ábraham patrem nostrum, * datúrum se
              nobis:
            </Text>
            <Text className="text-base vernacular">
              Segundo o juramento que prestara a Abraão, nosso pai: * que nos
              concederia:
            </Text>
            <Text className="text-base latin">
              Ut sine timóre, de manu inimicórum nostrórum liberáti, * serviámus
              illi.
            </Text>
            <Text className="text-base vernacular">
              Sermos livres das mãos dos nos inimigos, * para O servirmos sem
              temor.
            </Text>
            <Text className="text-base latin">
              In sanctitáte, et justítia coram ipso, * ómnibus diébus nostris.
            </Text>
            <Text className="text-base vernacular">
              Na santidade e justiça, na sua presença, * em todos os dias da
              nossa vida.
            </Text>
            <Text className="text-base latin">
              Et tu, puer, Prophéta Altíssimi vocáberis: * præíbis enim ante
              fáciem Dómini, paráre vias ejus:
            </Text>
            <Text className="text-base vernacular">
              E tu, menino, serás chamado profeta do Altíssimo: * pois irás ante
              a face do Senhor, a preparar os seus caminhos:
            </Text>
            <Text className="text-base latin">
              Ad dandam sciéntiam salútis plebi ejus: * in remissiónem
              peccatórum eórum:
            </Text>
            <Text className="text-base vernacular">
              E dar aoseu povo o conhecimento da salvação: * a fim de alcançar a
              remissão dos seus pecados:
            </Text>
            <Text className="text-base latin">
              Per víscera misericórdiæ Dei nostri: * in quibus visitávit nos,
              óriens ex alto:
            </Text>
            <Text className="text-base vernacular">
              Pelas entranhas da misericórdia do nosso Deus: * pela qual nos
              visitará um Sol, nascendo do alto:
            </Text>
            <Text className="text-base latin">
              Illumináre his, qui in ténebris, et in umbra mortis sedent: * ad
              dirigéndos pedes nostros in viam pacis.
            </Text>
            <Text className="text-base vernacular">
              Para iluminar aqueles que jazem nas trevas e na sombra da morte: *
              e dirigir nossos passos no caminho da paz.
            </Text>
            <Text className="text-base latin">
              ℣. Glória Patri, et Fílio, et Spíritui Sancto.
            </Text>
            <Text className="text-base vernacular">
              ℣. Glória ao Pai, e ao Filho e ao Espírito Santo.
            </Text>
            <Text className="text-base latin">
              <Text className="text-red-500">℟.</Text> Sicut erat in pricípio,
              et nunc, et semper, et in sǽcula sæculórum. Amen.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-red-500">℟.</Text> Assim como era no
              princípio, agora e sempre, e por todos os séculos dos séculos.
              Amen.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
