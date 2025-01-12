import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page012() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Salmo 12</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Úsquequo, Dómine, obliviscéris me in finem? * Úsquequo avértis
              fáciem tuam a me?
            </Text>
            <Text className="text-base">
              Até quando, ó Senhor, me esquecereis para sempre? * Até quando
              afastareis de mim a vossa face?
            </Text>
            <Text className="text-base">
              Quámdiu ponam consília in ánima mea, * dolórem in corde meo per
              diem?
            </Text>
            <Text className="text-base">
              Até quando trarei a minha alma com planos, * e o meu coração todo
              o dia em dor?
            </Text>
            <Text className="text-base">
              Úsquequo exaltábitur inimícus meus super me? * Réspice, et exáudi
              me, Dómine, Deus meus.
            </Text>
            <Text className="text-base">
              Até quando o meu inimigo será exaltado sobre mim? * Olhai para mim
              e escutai-me, ó Senhor meu Deus.
            </Text>
            <Text className="text-base">
              Illúmina óculos meos ne umquam obdórmiam in morte: * nequándo
              dicat inimícus meus: præválui advérsus eum.
            </Text>
            <Text className="text-base">
              Iluminai os meus olhos para que nunca durma na morte: * para que
              nunca o meu inimigo diga: prevaleci contra ele.
            </Text>
            <Text className="text-base">
              Qui tríbulant me, exsultábunt si motus fúero: * ego autem in
              misericórdia tua sperávi.
            </Text>
            <Text className="text-base">
              Os que me atribulam exultarão se for amotinado: * eu, porém,
              esperei na vossa misericórdia.
            </Text>
            <Text className="text-base">
              Exsultábit cor meum in salutári tuo: cantábo Dómino qui bona
              tríbuit mihi: * et psallam nómini Dómini altíssimi.
            </Text>
            <Text className="text-base">
              Meu coração exultará na vossa salvação: cantarei ao Senhor que bem
              me fez: * e salmos entoarei ao nome do altíssimo Senhor.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
