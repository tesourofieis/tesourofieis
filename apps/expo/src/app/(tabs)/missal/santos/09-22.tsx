import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page0922() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Tomás de Vilanova, B. e C., a 22 de Setembro
          </Text>

          <View className="aside">
            Como na{" "}
            <Link
              className="link"
              href="/missal/comum/11confessorespontifices1"
            >
              Missa Státuit ei
            </Link>{" "}
            , excepto:
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, qui beátum Thomam Pontíficem insígnis in páuperes
              misericórdiæ virtúte decorásti: quǽsumus; ut, ejus intercessióne,
              in omnes, qui te deprecántur, divítias misericórdiæ tuæ benígnus
              effúndas. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, que ilustrastes o B. Pontífice Tomás com a virtude de uma
              insigne compaixão para com os pobres, permiti, Vos rogamos, que
              sua intercessão alcance da vossa bondade a efusão dos tesouros da
              vossa misericórdia para com aqueles que Vo-la imploram. Por nosso
              Senhor...
            </Text>
          </View>

          <Text className="h3">Oração Comemoração S. Maurício e Outros</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Annue, quǽsumus, omnípotens Deus: ut sanctórum Martyrum tuórum
              Maurítii et Sociórum ejus nos lætíficet festíva sollémnitas; ut,
              quorum suffrágiis nítimur, eórum natalítiis gloriémur. Per Dóminum
              nostrum...
            </Text>
            <Text className="text-base vernacular">
              Concedei-nos, ó Deus omnipotente, Vos rogamos, que a solene festa
              dos vossos Santos Mártires Maurício e seus Companheiros nos encha
              de alegria, a fim de que com o auxílio das suas orações
              participemos da glória do seu nascimento no céu. Por nosso
              Senhor...
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <LinkCard
            href="/missal/comum/12confessorespontifices2#secreta"
            title="Confessores Pontífices - Missa Sacerdótes tui"
          />

          <Text className="h3">Secreta Comemoração S. Maurício e Outros</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Réspice, quǽsumus, Dómine, múnera, quæ in sanctórum Mártyrum
              tuórum Maurítii et Sociórum ejus commemoratióne deférimus: et
              præsta; ut, quorum honóre sunt grata, eórum nobis fiant
              intercessióne perpétua. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Dignai-Vos olhar, Senhor, Vos rogamos, para os dons que Vos
              apresentamos em memória dos vossos Santos Mártires Maurício e seus
              Companheiros, e permiti que, sendo-Vos agradáveis, pois são
              oferecidos em sua honra, nos assegurem eternamente, pela sua
              intercessão, a felicidade. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <LinkCard
            href="/missal/comum/12confessorespontifices2#postcomúnio"
            title="Confessores Pontífices - Missa Sacerdótes tui"
          />

          <Text className="h3">
            Postcomúnio Comemoração S. Maurício e Outros
          </Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Cœléstibus refécti sacraméntis et gáudiis: súpplices te rogámus,
              Dómine; ut, quorum gloriámur triúmphis, protegámur auxíliis. Per
              Dóminum nostrum...
            </Text>
            <Text className="text-base vernacular">
              Confortados com estes sacramentos e com estas delícias celestiais,
              Senhor, Vos rogamos, dignai-Vos conceder-nos a protecção daqueles
              de cujos triunfos nos gloriamos. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
