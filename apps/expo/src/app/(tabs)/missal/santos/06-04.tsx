import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page0604() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Francisco Caracíolo, Conf., a 4 de Junho
          </Text>

          <Text className="h3">Intróito</Text>

          <Text className="em">Sl. 21, 15; 68, 10</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Factum est cor meum tamquam cera liquéscens in médio ventris mei:
              quóniam zelus domus tuæ comédit me. (T.P. Allelúja, allelúja.){" "}
              <Text className="text-base latin">Ps. 72, 1</Text> Quam bonus
              Israël Deus: his, qui recto sunt corde! ℣. Gloria Patri...
            </Text>
            <Text className="text-base vernacular">
              O meu coração é como a cera: funde-se no meio do meu peito, pois o
              zelo da vossa Casa devora-me. (T. P. Aleluia, aleluia.){" "}
              <Text className="text-base vernacular">Sl. 72, 1</Text> Como Deus
              é bom para com Israel! e para com aqueles que possuem coração
              recto! ℣. Glória ao Pai...
            </Text>
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, qui beátum Francíscum, novi órdinis institutórem, orándi
              stúdio et pœniténtiæ amóre decorásti: da fámulis tuis in ejus
              imitatióne ita profícere; ut, semper orántes et corpus in
              servitútem redigéntes, ad cœléstem glóriam perveníre mereántur.
              Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, que ilustrastes o B. Francisco, destinando-o para fundador
              de uma nova ordem e dotando-o com o zelo da oração e amor à
              penitência, concedei aos vossos servos a graça de aproveitarem de
              tal modo com seus exemplos que, rezando sempre e reduzindo os
              corpos à servidão, mereçam alcançar a glória celestial. Por nosso
              Senhor...
            </Text>
          </View>

          <Text className="h3">Epístola</Text>

          <Text className="em">Sb. 4, 7-14</Text>

          <View className="side-by-side">
            <Text className="text-base latin">Léctio libri Sapiéntiæ.</Text>
            <Text className="text-base vernacular">
              Lição do Livro da Sabedoria.
            </Text>
            <Text className="text-base latin">
              Justus, si morte præoccupátus fúerit, in refrigério erit. Senéctus
              enim venerábilis est non diutúrna, neque annórum número computáta:
              cani autem sunt sensus hóminis, et ætas senectútis vita
              immaculáta. Placens Deo Jactus est diléctus, et vivens inter
              peccatóres translátus est. Raptus est, ne malítia mutáret
              intelléctum ejus, aut ne fíctio decíperet ánimam illíus.
              Fascinátio enim nugacitátis obscúrat bona, et inconstántia
              concupiscéntia? transvértit sensum sine malítia. Consummátus in
              brevi explévit témpora multa, plácita enim erat Deo ánima illíus:
              propter hoc properávit edúcere illum de médio iniquitátum.
            </Text>
            <Text className="text-base vernacular">
              Ainda que o justo morra prematuramente, alcançará repouso. O que
              torna a velhice venerável não é a vida longa nem o número dos
              anos, mas a prudência do homem; pois as cãs do homem não são os
              seus sentimentos. Sua vida imaculada, sim, é uma verdadeira
              velhice. Tendo-se (o justo) tornado agradável a Deus, foi por Ele
              amado; e Deus o tirou do meio dos pecadores com quem vivia. Deus
              elevou-o, receando que a malícia corrompesse o seu espírito ou a
              ilusão seduzisse a sua alma; pois a fascinação da frivolidade
              obscurece o bem, e a inconstância transtorna o espírito ainda que
              não possua malícia. Ainda que tenha vivido pouco, preencheu a
              carreira com larga vida, pois a sua alma era agradável a Deus;
              pelo que Deus se apressou em o tirar do meio da iniquidade.
            </Text>
          </View>

          <Text className="h3">Gradual</Text>

          <Text className="em">Sl. 41, 2</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Quemádmodum desíderat cervus ad fontes aquárum: ita desíderat
              ánima mea ad te, Deus. ℣.{" "}
              <Text className="text-base latin">Ps. ibid., 3</Text> Sitívit
              ánima mea ad Deum fortem vivum.
            </Text>
            <Text className="text-base vernacular">
              Assim como o veado suspira pelas fontes das águas, assim a minha
              alma suspira por Vós, ó Deus. ℣.{" "}
              <Text className="text-base vernacular">Sl. ibid., 3</Text> Minha
              alma tem sede de Deus forte e vivo.
            </Text>
            <Text className="text-base latin">
              Allelúja, allelúja. ℣.{" "}
              <Text className="text-base latin">Ps. 72, 26</Text> Defécit caro
              mea et cor meum: Deus cordis mei, et pars mea Deus in ætérnum.
              Allelúja.
            </Text>
            <Text className="text-base vernacular">
              Aleluia, aleluia. ℣.{" "}
              <Text className="text-base vernacular">Sl. 72, 26</Text> Minha
              carne e o meu coração desfalecem! Ó Deus, sois o Deus do meu
              coração e a minha herança na eternidade. Aleluia.
            </Text>
          </View>

          <Text className="aside">
            No T. Pascal omite-se o Gradual, e diz-se:
          </Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Allelúja, allelúja. ℣.{" "}
              <Text className="text-base latin">Ps. 64, 5</Text> Beátus, quem
              elegísti et assumpsísti: inhabitábit in átriis tuis. Allelúja. ℣.{" "}
              <Text className="em">Ps. 111, 9</Text> Dispérsit, dedit
              paupéribus: justítia ejus manet in sǽculum sǽculi. Allelúja.
            </Text>
            <Text className="text-base vernacular">
              Aleluia, aleluia. ℣.{" "}
              <Text className="text-base vernacular">Sl. 64, 5</Text>{" "}
              Bem-aventurado aquele que escolhestes e elevastes, para que
              habitasse nos vossos átrios. Aleluia. ℣.{" "}
              <Text className="em">Sl. 111, 9</Text> Distribuiu e deu esmola aos
              pobres e a sua justiça permanecerá em todos os séculos. Aleluia.
            </Text>
          </View>

          <Text className="h3">Evangelho</Text>

          <LinkCard
            href="/missal/comum/14confessoresnaopontifices1#evangelho"
            title="Confessores não Pontífices - Missa Os justi"
          />

          <Text className="h3">Ofertório</Text>

          <Text className="em">Sl. 91, 13</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Justus ut palma florébit: sicut cedrus Líbani multiplicábitur.
              (T.P. Allelúja.)
            </Text>
            <Text className="text-base vernacular">
              O justo florescerá, como a palmeira, e crescerá, como o cedro do
              Líbano. (T. P. Aleluia.)
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Da nobis, clementíssime Jesu: ut præclára beáti Francísci mérita
              recoléntes, eódem nos, ac ille, caritátis igne succénsi, digne in
              circúitu sacræ hujus mensæ tuæ esse valeámus: Qui vivis...
            </Text>
            <Text className="text-base vernacular">
              Clementíssimo Jesus, honrando os preclaros méritos do B. Francisco
              e sendo abrasados, como ele, no fogo da caridade, concedei-nos que
              possamos tomar lugar dignamente junto da vossa sacrossanta mesa. Ó
              Vós, que viveis e...
            </Text>
          </View>

          <Text className="h3">Comúnio</Text>

          <Text className="em">Sl. 30, 20</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Quam magna multitúdo dulcédinis tuæ, Dómine, quam abscondísti
              timéntibus te! (T.P. Allelúja.)
            </Text>
            <Text className="text-base vernacular">
              Como é grande, Senhor, a felicidade que reservais para aqueles que
              Vos temem! (T. P. Aleluia.)
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Sacrosáncta sacrifícii, quǽsumus, Dómine, quod hódie in
              sollemnitáte beáti Francísci tuæ obtúlimus majestáti, grata semper
              in méntibus nostris memória persevéret et fructus. Per Dóminum
              nostrum...
            </Text>
            <Text className="text-base vernacular">
              Permiti, Senhor, Vos suplicamos, que o nosso espírito conserve
              sempre, cheio de reconhecimento, a recordação e os frutos do
              sacrossanto sacrifício que hoje oferecemos à vossa majestade em
              honra do B. Francisco. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
