import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";

export default function Page062() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Salmo 62</Text>

          <Language>
            <Text className="latin">
              Deus, Deus meus, * ad Te de luce vígilo.
            </Text>
            <Text className="vernacular">
              Ó Deus, ó meu Deus, * a Vós vigio desde a aurora.
            </Text>
            <Text className="latin">
              Sitívit in Te ánima mea, * quam multiplíciter tibi caro mea.
            </Text>
            <Text className="vernacular">
              De Vós está sedenta a minha alma, * de quantas maneiras a minha
              carne.
            </Text>
            <Text className="latin">
              In terra desérta, et ínvia, et inaquósa: * sic in sancto appárui
              tibi, ut vidérem virtútem tuam, et glóriam tuam.
            </Text>
            <Text className="vernacular">
              Em terra deserta, intransitável e sem água: * no santuário me
              apresentei a Vós, para contemplar o vosso poder e a vossa glória.
            </Text>
            <Text className="latin">
              Quóniam mélior est misericórdia tua super vitas: * lábia mea
              laudábunt Te.
            </Text>
            <Text className="vernacular">
              Porque a vossa misericórdia é melhor que as vidas: * os meus
              lábios Vos louvarão.
            </Text>
            <Text className="latin">
              Sic benedícam Te in vita mea: * et in nómine tuo levábo manus
              meas.
            </Text>
            <Text className="vernacular">
              Assim Vos bendirei em minha vida: * e, invocando o vosso nome,
              levantarei as minhas mãos.
            </Text>
            <Text className="latin">
              Sicut ádipe et pinguédine repleátur ánima mea: * et lábiis
              exsultatiónis laudábit os meum.
            </Text>
            <Text className="vernacular">
              Como de banha e gordura seja farta a minha alma: * e com lábios de
              júbilo louvar-Vos-á a minha boca.
            </Text>
            <Text className="latin">
              Si memor fui tui super stratum meum, in matutínis meditábor in Te:
              * quia fuísti adjútor meus.
            </Text>
            <Text className="vernacular">
              Se me tenho lembrado de Vós sobre o meu leito, nas madrugadas
              meditarei em Vós: * pois fostes o meu defensor.
            </Text>
            <Text className="latin">
              Et in velaménto alárum tuárum exsultábo, adhǽsit ánima mea post
              Te: * me suscépit déxtera tua.
            </Text>
            <Text className="vernacular">
              À sombra de vossas asas me regozijarei, a minha alma está presa a
              Vós: * a vossa dextra me acolheu.
            </Text>
            <Text className="latin">
              Ipsi vero in vanum quæsiérunt ánimam meam, introíbunt in inferióra
              terræ: * tradéntur in manus gládii, partes vúlpium erunt.
            </Text>
            <Text className="vernacular">
              Eles em vão procuraram tirar-me a vida, entrarão nas profundidades
              da terra: * serão entregues ao poder da espada e virão a ser presa
              das raposas.
            </Text>
            <Text className="latin">
              Rex vero lætábitur in Deo, laudabúntur omnes qui jurant in eo: *
              quia obstrúctum est os loquéntium iníqua.
            </Text>
            <Text className="vernacular">
              Entretanto o rei alegrar-se-á em Deus, louvados serão todos os que
              juram por Ele: * pois foi fechada a boca aos que proferiam
              iniquidades.
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
