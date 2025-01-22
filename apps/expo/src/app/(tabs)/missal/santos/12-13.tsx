import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page1213() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Santa Luzia, Virgem e Mártir, a 13 de Dezembro
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/20virgemnaomartir1">
              Missa Dilexísti justitiam
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Gradual</Text>

          <Text className="em">Sl. 44, 8</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Dilexísti justítiam, et odísti iniquitátem. ℣. Proptérea unxit te
              Deus, Deus tuus, óleo lætítiæ.
            </Text>
            <Text className="text-base vernacular">
              Amastes a justiça e odiastes a iniquidade. ℣. Por isso o Senhor,
              vosso Deus, ungiu-vos com o óleo da alegria, de preferência às
              vossas companheiras.
            </Text>
            <Text className="text-base latin">
              Allelúja, allelúja. ℣.{" "}
              <Text className="text-base latin">ibid., 3</Text> Diffúsa est
              grátia in lábiis tuis: proptérea benedíxit te Deus in ætérnum.
              Allelúja.
            </Text>
            <Text className="text-base vernacular">
              Aleluia, aleluia. ℣.{" "}
              <Text className="text-base vernacular">ibid., 3</Text> A graça
              espalhou-se nos vossos lábios; por isso Deus vos abençoou por
              todos os séculos. Aleluia.
            </Text>
          </View>

          <Text className="h3">Evangelho</Text>

          <LinkCard
            href="/missal/comum/21virgemnaomartir2#evangelho"
            title="Virgem não Mártir - Missa Vultum tuum"
          />

          <Text className="h3">Ofertório</Text>

          <Text className="em">Sl. 44, 15-16</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Afferéntur Regi Vírgines post eam: próximæ ejus afferéntur tibi in
              lætítia et exsultatióne: adducéntur in templum Regi Dómino.
            </Text>
            <Text className="text-base vernacular">
              Após ela serão apresentadas virgens ao Rei; as suas companheiras
              serão introduzidas no meio da alegria e júbilo: serão conduzidas
              ao Senhor no templo do Rei.
            </Text>
          </View>

          <Text className="h3">Comúnio</Text>

          <Text className="em">Sl. 118, 161-162</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Príncipes persecúti sunt me gratis, et a verbis tuis formidávit
              cor meum: lætábor ego super elóquia tua, quasi qui invénit spólia
              multa.
            </Text>
            <Text className="text-base vernacular">
              Os príncipes perseguiram-me injustamente, mas o meu coração não
              temeu senão as vossas palavras. Regozijar-me-ei com vossas
              palavras, como se um homem houvera achado ricos despojos.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
