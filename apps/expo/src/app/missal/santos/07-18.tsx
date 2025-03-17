import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Link } from "expo-router";
import React from "react";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";

export default function Page0718() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Camilo de Lélis, Conf., a 18 de Julho</Text>

          <Text className="comment">
            O Espírito Santo, que se manifestou de todos os modos na alma dos
            Santos cujos nomes apareceram no Ciclo desde a festa de Pentecostes,
            faz-nos admirar hoje a S. Camilo, cuja caridade teve especialmente
            por objecto a Jesus no próximo (Com.). Nascido em 1550, no reino de
            Nápoles, da nobre família dos Lélis, S. Camilo entrou para os
            Capuchinhos mas uma chaga na perna obrigou-o a sair por duas vezes.
            Deus o destinava a fundar uma Congregação de Clérigos regulares,
            consagrados ao serviço dos doentes. Obteve da Sé Apostólica a
            aprovação de sua Ordem. Inspirando-se no exemplo de Jesus, que
            morreu por nós (Ep.) e declarou não haver maior prova de amor do que
            dar a vida pelos outros (Intr., Ev.), os religiosos se obrigam a
            assistir os doentes, mesmo os pestíferos. S. Camilo, bem como o seu
            Instituto, recebeu de Deus a graça todo especial de ajudar
            vitoriosamente as almas na suprema luta da agonia (Or., Secre.),
            pelo que o nome do Santo foi inserido pela Igreja nas Ladainhas dos
            agonizantes. S. Camilo morreu em Roma a 14 de Julho de 1624.
          </Text>

          <Text className="aside">
            Comemoração de Santa Sinforoza e seus Filhos como na
            <Link href="/missal/comum/7muitosmartires2">
              Missa Sapiéntiam sanctórum.
            </Link>
          </Text>

          <Text className="h3">Intróito</Text>

          <Text className="em">Jo. 15, 13</Text>

          <Language>
            <Text className="latin">
              Majórem hac dilectiónem nemo habet, ut ánimam suam ponat quis pro
              amícis suis. <Text className="latin">Ps. 40, 2</Text> Beátus, qui
              intéllegit super egénum et páuperem: in dic mala liberábit eum
              Dóminus.<Text className="versicle"> ℣. </Text>Gloria Patri...
            </Text>
            <Text className="vernacular">
              Ninguém pode dar maior prova de amor do que dar a sua vida pelos
              seus amigos. <Text className="vernacular">Sl. 40, 2</Text>{" "}
              Bem-aventurado aquele que atende às necessidades do pobre e do
              indigente, pois o Senhor o livrará no dia da aflição.
              <Text className="versicle"> ℣. </Text>Glória ao Pai...
            </Text>
          </Language>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Deus, qui sanctum Camíllum, ad animárum in extrémo agóne
              luctántium subsídium, singulári caritátis prærogatíva decorásti:
              ejus, quǽsumus, méritis, spíritum nobis tuæ dilectiónis infúnde;
              ut in hora éxitus nostri hostem víncere, et ad cœléstem mereámur
              corónam perveníre. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Ó Deus, que dotastes S. Camilo com a prerrogativa de uma singular
              caridade para auxiliar as almas nas derradeiras lutas da agonia,
              infundi-nos pelos seus méritos, Vos suplicamos, o espírito do
              vosso amor, a fim de que, na hora da nossa morte, mereçamos vencer
              o inimigo e alcançar a coroa celestial. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Epístola</Text>

          <LinkCard
            href="/missal/pentecostes/pent2-0#epístola"
            title="Segundo Domingo depois de Pentecostes"
          />

          <Text className="h3">Gradual</Text>

          <LinkCard
            href="/missal/comum/15confessoresnaopontifices2#gradual"
            title="Confessores não Pontífices - Missa Justus ut palma"
          />

          <Text className="h3">Evangelho</Text>

          <Text className="em">Jo. 15, 12-16</Text>

          <Language>
            <Text className="latin">
              <Text className="cross"> ✠ </Text> Sequéntia sancti Evangélii
              secúndum Joánnem.
            </Text>
            <Text className="vernacular">
              <Text className="cross"> ✠ </Text> Continuação do santo Evangelho
              segundo S. João.
            </Text>
            <Text className="latin">
              In illo témpore: Dixit Jesus discípulis suis: Hoc est præcéptum
              meum, ut diligátis ínvicem, sicut diléxi vos. Majorem hac
              dilectiónem nemo habet, ut ánimam suam ponat quis pro amícis suis.
              Vos amíci mei estis, si fecéritis quæ ego præcípio vobis. Jam non
              dicam vos servos: quia servus nescit, quid fáciat dóminus ejus.
              Vos autem dixi amícos: quia ómnia, quæcúmque audívi a Patre meo,
              nota feci vobis. Non vos me elegístis: sed ego elegi vos, et pósui
              vos, ut eátís, et fructum afferátis: et fructus vester maneat: ut,
              quodcúmque petiéritis Patrem in nómine meo, det vobis.
            </Text>
            <Text className="vernacular">
              Naquele tempo, disse Jesus aos seus discípulos: «Este é o meu
              mandamento: «Que vos ameis uns aos outros, como vos amei». Ninguém
              pode ter maior amor do que dar a sua vida pelos seus amigos. Vós
              sereis meus amigos se fizerdes o que vos mando. Já vos não
              chamarei servos, porque o servo ignora o que faz o seu senhor.
              Chamo-vos meus amigos, porque tudo quanto ouvi a meu Pai vo-lo
              tenho feito conhecer. Não fostes vós que me escolhestes a mim, mas
              Eu é que vos escolhi e vos destinei, para que caminheis e
              alcanceis fruto. Que este fruto, pois, permaneça, para que meu Pai
              vos conceda tudo quanto Lhe pedirdes em meu nome».
            </Text>
          </Language>

          <Text className="h3">Ofertório</Text>

          <Text className="em">Sl. 20, 2-3</Text>

          <Language>
            <Text className="latin">
              In virtúte tua, Dómine, lætábitur justus, et super salutáre tuum
              exsultábit veheménter: desidérium ánimæ ejus tribuísti ei.
            </Text>
            <Text className="vernacular">
              Com o vosso poder, Senhor, se alegrará o justo, o qual exultará de
              alegria, vendo-se salvo por Vós. Concedestes-lhe, Senhor, o desejo
              da sua alma.
            </Text>
          </Language>

          <Text className="h3">Secreta</Text>

          <Language>
            <Text className="latin">
              Hóstia immaculáta, qua illud Dómini nostri Jesu Christi imménsæ
              caritátis opus renovámus, sit, Deus Pater omnípotens, sancto
              Gamíllo intercedénte, contra omnes córporis et animae infirmitates
              salutáre remedium, et in extrémo agóne solátium et tutela. Per
              eúndem Dóminum...
            </Text>
            <Text className="vernacular">
              Que a hóstia imaculada pela qual renovamos esta instituição da
              imensa caridade de nosso Senhor Jesus Cristo seja para nós, pela
              intercessão de S. Camilo, remédio salutar contra todas as
              enfermidades da alma e do corpo e na extrema agonia nos sirva de
              consolação e de protecção. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Comúnio</Text>

          <Text className="em">Mt. 25, 36 & 40</Text>

          <Language>
            <Text className="latin">
              Infírmus fui, et visitástis me. Amen, amen, dico vobis: Quámdiu
              fecístis uni ex his frátribus meis minimis, mihi fecístis.
            </Text>
            <Text className="vernacular">
              Estive enfermo e visitastes-me. Em verdade, em verdade vos digo:
              todas as vezes que fizerdes isto mesmo a um destes meus irmãos
              mais pequeninos, a mim mesmo o fizestes.
            </Text>
          </Language>

          <Text className="h3">Postcomúnio</Text>

          <Language>
            <Text className="latin">
              Per hæc cœléstia aliménta, quæ, sancti Camílli Confessóris tui
              sollémnia celebrántes, pia devotióne suscépimus: da, quǽsumus.
              Dómine; ut, in hora mortis nostræ sacraméntis refécti et culpis
              ómnibus expiáti, in sinum misericórdiæ tuæ læti súscipi mereámur:
              Qui vivis...
            </Text>
            <Text className="vernacular">
              Por estes alimentos celestiais, que recebemos com pia devoção
              celebrando a festa de S. Camilo, vosso Confessor, concedei-nos,
              Senhor, Vos suplicamos, que à hora da morte, munidos com os
              sacramentos e limpos de todas as culpas, mereçamos ser recebidos
              com alegria no seio da vossa misericórdia. Ó Vós, que, sendo
              Deus...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
