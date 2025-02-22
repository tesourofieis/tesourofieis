import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page0816() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Joaquim, a 16 de Agosto</Text>

          <Text className="h3">Intróito</Text>

          <Text className="em">Sl. 111, 9</Text>

          <View className="side-by-side">
            <Text className="latin">
              Dispérsit, dedit paupéribus: justítia ejus manet in sǽculum
              sǽculi: cornu ejus exaltábitur in glória.{" "}
              <Text className="latin">Ps. ibid., 1</Text> Beátus vir, qui timet
              Dóminum: in mandátis ejus cupit nimis.
              <Text className="versicle"> ℣. </Text>Gloria Patri...
            </Text>
            <Text className="vernacular">
              Distribuiu liberalmente os seus bens pelos pobres: a sua justiça
              subsistirá em todos os séculos dos séculos: e o seu poder será
              exaltado com glória.{" "}
              <Text className="vernacular">Sl. ibid., 1</Text> Bem-aventurado o
              varão que teme o Senhor e que põe todo o zelo em cumprir os
              mandamentos.<Text className="versicle"> ℣. </Text>Glória ao Pai...
            </Text>
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="latin">
              Deus, qui præ ómnibus Sanctis tuis beátum Jóachim Genetrícis Fílii
              tui patrem esse voluísti: concéde, quǽsumus; ut, cujus festa
              venerámur, ejus quoque perpétuo patrocínia sentiámus. Per eúndem
              Dóminum...
            </Text>
            <Text className="vernacular">
              Ó Deus, que, de preferência a todos vossos Santos, quisestes que o
              B. Joaquim fosse o Pai da Mãe de vosso Filho, concedei-nos, Vos
              suplicamos, que experimentemos o perpétuo patrocínio daquele cuja
              festa celebramos. Pelo mesmo nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Epístola</Text>

          <LinkCard
            href="/missal/comum/14confessoresnaopontifices1#epístola"
            title="Confessores não Pontífices - Missa Os justi"
          />

          <Text className="h3">Gradual</Text>

          <Text className="em">Sl. 111, 9 & 2</Text>

          <View className="side-by-side">
            <Text className="latin">
              Dispérsit, dedit paupéribus: justítia ejus manet in sǽculum
              sǽculi.<Text className="versicle"> ℣. </Text>Potens in terra erit
              semen ejus: generátio rectórum benedicétur.
            </Text>
            <Text className="vernacular">
              Distribuiu liberalmente os seus bens pelos pobres: a sua justiça
              permanecerá em todos os séculos dos séculos.
              <Text className="versicle"> ℣. </Text>Sua descendência será
              poderosa na terra, pois a geração dos justos será abençoada.
            </Text>
            <Text className="latin">
              Allelúja, allelúja.<Text className="versicle"> ℣. </Text>O
              Jóachim, sanctæ conjux Annæ, pater almæ Vírginis, hic fámulis
              ferto salútis opem. Allelúja.
            </Text>
            <Text className="vernacular">
              Aleluia, aleluia.<Text className="versicle"> ℣. </Text>Ó S.
              Joaquim, Esposo de Santa Ana, Pai da Virgem-Mãe, concedei na terra
              aos vossos os socorros necessários para a salvação. Aleluia.
            </Text>
          </View>

          <Text className="h3">Evangelho</Text>

          <Text className="em">Mt, 1, 1-16</Text>

          <View className="side-by-side">
            <Text className="latin">
              <Text className="cross"> ✠ </Text> Initium sancti Evangélii
              secúndum Matthǽum.
            </Text>
            <Text className="vernacular">
              <Text className="cross"> ✠ </Text> Início do santo Evangelho
              segundo S. Mateus.
            </Text>
            <Text className="latin">
              Liber generatiónis Jesu Christi, fílii David, fílii Abralam.
              Abraham génuit Isaac, Isaac autem génuit Jacob. Jacob autem génuit
              Judam et fratres ejus. Judas autem génuit Phares et Zaram de
              Thamar. Phares autem génuit Esron. Esron autem génuit Aram. Aram
              autem génuit Amínadab. Amínadab autem génuit Naásson. Naásson
              autem génuit Salmon. Salmon autem génuit Booz de Rahab. Booz autem
              génuit Obed ex Ruth. Obed autem génuit Jesse. Jesse autem génuit
              David regem. David autem rex génuit Salomónem ex ea, quæ fuit
              Uriæ. Sálomon autem génuit Róboam. Róboam autem génuit Abíam.
              Abías autem génuit Asa. Asa autem génuit Jósaphat. Jósaphat autem
              génuit Joram. Joram autem génuit Ozíam. Ozías autem génuit
              Jóatham. Jóatham autem génuit Achaz. Achaz autem génuit Ezechíam.
              Ezechias autem génuit Manássen. Manásses autem génuit Amen. Amon
              autem génuit Josíatn. Josías autem génuit Jechoníam et fratres
              ejus in transmigratióne Babylónis. Et post transmigratiónem
              Babylónis: Jeehonías génuit Saláthiel. Saláthiel autem génuit
              Zoróbabel. Zoróbabel autem génuit Abiud. Abiud autem génuit
              Elíacim. Elíacim autem génuit Azor. Azor autem génuit Sadoc. Sadoc
              autem génuit Achim. Achim autem génuit Eliud. Eliud autem génuit
              Eleázar. Eleázar autem génuit Mathan. Mathan autem génuit Jacob.
              Jacob autem génuit Joseph, virum Mariæ, de qua natus est Jesus,
              qui vocátur Christus.
            </Text>
            <Text className="vernacular">
              Livro da geração de Jesus Cristo, filho de David, filho de Abraão.
              Abraão gerou Isaque. Isaque gerou Jacob. Jacob gerou Judas e seus
              irmãos. Judas gerou Fares e Zarão de Tamar. Fares gerou Esron.
              Esron gerou Aarão. Aarão gerou Aminadabe. Aminadabe gerou Naássão.
              Naássão gerou Salmão. Salmão gerou Booz de Raabe. Booz gerou Obede
              de Rute. Obede gerou Jesse. Jesse gerou o Rei David. David gerou
              Salomão daquela que fora mulher de Urias. Salomão gerou Roboão.
              Roboão gerou Abias. Abias gerou Asa. Asa gerou Josafá. Josafá
              gerou Jorão. Jorão gerou Ozias. Ozias gerou Joatão. Joatão gerou
              Acás. Acás gerou Ezequias. Ezequias gerou Manasses. Manasses gerou
              Amão. Amão gerou Josias. Josias gerou Jeconias e os seus irmãos,
              na deportação da Babilónia. E depois da deportação da Babilónia
              Jeconias gerou Salátiel. Salátiel gerou Zoróbabel. Zoróbabel gerou
              Abiude. Abiude gerou Eliacim. Eliacim gerou Azor. Azor gerou
              Sadoc. Sadoc gerou Aquim. Aquim gerou Éliude. Éliude gerou
              Eleazar. Eleazar gerou Matam. Matam gerou Jacob. E Jacob gerou
              José, esposo de Maria, da qual nasceu Jesus, que é chamado Cristo.
            </Text>
          </View>

          <Text className="h3">Ofertório</Text>

          <Text className="em">Sl. 8, 6-7</Text>

          <View className="side-by-side">
            <Text className="latin">
              Glória et honóre coronásti eum: et constituísti eum super ópera
              mánuum tuárum, Dómine.
            </Text>
            <Text className="vernacular">
              Vós o coroastes, Senhor, com glória e honras; Vós o estabelecestes
              acima das obras das vossas mãos.
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="latin">
              Súscipe, clementíssime Deus, sacrifícium in honórem sancti
              Patriarchæ Jóachim, patris Maríæ Vírginis, majestáti tuæ oblátum:
              ut, ipso cum cónjuge sua et beatíssima prole intercedénte,
              perféctam cónsequi mereámur remissiónem peccatórum et glóriam
              sempitérnam. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Recebei, ó clementíssimo Deus, o sacrifício que oferecemos à vossa
              majestade em honra do santo Patriarca Joaquim, Pai da Virgem
              Maria, a fim de que, pela sua intercessão, unida à de sua esposa e
              à de sua B. Filha, mereçamos alcançar a plena remissão dos nossos
              pecados e a glória eterna. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Comúnio</Text>

          <Text className="em">Lc. 12, 42</Text>

          <View className="side-by-side">
            <Text className="latin">
              Fidélis servus et prudens, quem constítuit dóminus super famíliam
              suam: ut det illis in témpore trítici mensuram.
            </Text>
            <Text className="vernacular">
              Eis o servo fiel e prudente que o Senhor estabeleceu acima da sua
              família para distribuir oportunamente a cada um a sua medida de
              trigo.
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="latin">
              Quæsumus, omnípotens Deus: ut per hæc sacraménta, quæ súmpsimus,
              intercedéntibus méritis et précibus beáti Jóachim patris
              Genetrícis dilécti Fílii tui, Dómini nostri Jesu Christi, tuæ
              grátiæ in præsénti et ætérnæ glóriæ in futúro partícipes esse
              mereámur. Per eúndem Dóminum...
            </Text>
            <Text className="vernacular">
              Fazei, ó Deus omnipotente, Vos suplicamos, que pelas preces e
              méritos do B. Joaquim, Pai da Mãe do vosso amado Filho, nosso
              Senhor Jesus Cristo, estes sacramentos, que recebemos, nos tornem
              comparticipantes da vossa graça na vida presente e da vossa eterna
              glória na vida futura. Pelo mesmo nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
