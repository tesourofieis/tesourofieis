import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Link } from "expo-router";
import React from "react";
import Language from "~/components/Language";

export default function Page0920() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Vigilia de S. Mateus, Apóstolo e Evangelista, a 20 de Setembro
          </Text>

          <Text className="aside">
            Como na
            <Link href="/missal/comum/1vigiliaapostolos">
              Missa da Vigília dos Apóstolos - Missa Ego autem,
            </Link>
            excepto:
          </Text>

          <Text className="h3">Evangelho</Text>

          <Text className="em">Lc. 5, 27-32</Text>

          <Language>
            <Text className="latin">
              <Text className="cross"> ✠ </Text> Sequéntia sancti Evangélii
              secúndum Lucam.
            </Text>
            <Text className="vernacular">
              <Text className="cross"> ✠ </Text> Continuação do santo Evangelho
              segundo S. Lucas.
            </Text>
            <Text className="latin">
              In illo témpore: Vidit Jesus publicánum nómine Levi, sedéntemad
              telónium, et ait illi: Séquere me. Et relíctis ómnibus, surgens
              secútus est eum. Et fecit ei convívium magnum Levi in domo sua: et
              erat turba multa publicanórum, et aliórum, qui cum illis erant
              discumbéntes. Et murmurábant Pharisæ et Scribæ eórum, dicéntes ad
              discípulos ejus: Quare cum publicánis et peccatóribus manducátis
              et bíbitis? Et respóndens Jesus, dixit ad illos: Non egent qui
              sani sunt médico, sed qui male habent. Non veni vocáre justus sed
              peccatóres ad pæniténtiam.
            </Text>
            <Text className="vernacular">
              Naquele tempo, Jesus viu um publicano, chamado Levi, assentado ao
              telónio, e disse-lhe: «Segue-me!». Ele, deixando tudo, levantou-se
              e seguiu-O. Ora Levi ofereceu-Lhe um grande banquete em sua casa,
              onde concorreram também muitos publicanos e outros que estavam
              assentados à mesa com eles. Porém, os fariseus e os escribas
              murmuravam, dizendo aos discípulos de Jesus: «Porque comeis e
              bebeis com os publicanos e com os pecadores?». Jesus, respondendo,
              disse-lhes: «Não são os que estão sãos que precisam de médico, mas
              os que têm doença. Não vim chamar à penitência os justos, mas os
              pecadores».
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
