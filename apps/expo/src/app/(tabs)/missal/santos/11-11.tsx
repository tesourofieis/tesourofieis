import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page1111() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Martinho, a 11 de Novembro</Text>

          <View className="aside">
            Comemoração de S. Mena como na [Missa In virtúte
            tua](/missal/comum/4martirnaopontifice1).
          </View>

          <Text className="h3">Intróito</Text>

          <LinkCard
            href="/missal/comum/2martirpontificeforapascal#intróito"
            title="Mártir Pontífice - Missa Státuit ei Dóminus"
          />

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, qui cónspicis, quia ex nulla nostra virtúte subsístimus:
              concéde propítius; ut, intercessióne beáti Martíni...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, que bem conheceis que não é pelo nosso poder que
              subsistimos, concedei-nos propício que, pela intercessão do B.
              Martinho, vosso Confessor e Pontífice, sejamos protegidos contra
              todas as adversidades. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Epístola</Text>

          <LinkCard
            href="/missal/comum/11confessorespontifices1#epístola"
            title="Confessores Pontífices - Missa Státuit ei Dóminus"
          />

          <Text className="h3">Gradual</Text>

          <Text className="em">Ecl. 44, 16</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Ecce sacérdos magnus, qui in diébus suis plácuit Deo. ℣.{" "}
              <Text className="text-base latin">ibid., 20</Text> Non est
              invéntus símilis illi, qui conserváret legem Excelsi.
            </Text>
            <Text className="text-base vernacular">
              Eis o grande sacerdote que nos dias da sua vida agradou a Deus. ℣.{" "}
              <Text className="text-base vernacular">ibid., 20</Text> Ninguém o
              igualou na observância das leis do Altíssimo.
            </Text>
            <Text className="text-base latin">
              Allelúja, allelúja. ℣. Beátus vir, sanctus Martínus, urbis Turónis
              Epíscopus, requiévit: quem suscéperunt Angeli atque Archángeli,
              Throni, Dominatiónes et Virtútes. Allelúja.
            </Text>
            <Text className="text-base vernacular">
              Aleluia, aleluia. ℣. O bem-aventurado varão Martinho, Bispo de
              Tours, dormiu no Senhor: e os Anjos, os Arcanjos, os Tronos, as
              Dominações e as Virtudes o acolheram. Aleluia.
            </Text>
          </View>

          <Text className="h3">Evangelho</Text>

          <Text className="em">Lc. 11, 33-36</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              <Text className="text-base latin">✠</Text> Sequéntia sancti
              Evangélii secúndum Lucam.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">✠</Text> Continuação do
              santo Evangelho segundo S. Lucas.
            </Text>
            <Text className="text-base latin">
              In illo témpore: Dixit Jesus discípulis suis: Nemo lucérnam
              accéndit, et in abscóndito ponit, neque sub módio: sed supra
              candelábrum, ut, qui ingrediúntur, lumen vídeant. Lucérna córporis
              tui est óculus tuus. Si óculus tuus fúerit simplex, totum corpus
              tuum lúcidum erit: si autem nequam fúerit, étiam corpus tuum
              tenebrósum erit. Vide ergo, ne lumen, quod in te est, ténebræ
              sint. Si ergo corpus tuum totum lúcidum fúerit, non habens áliquam
              partem tenebrárum, erit lúcidum totum, et sicut lucérna fulgóris
              illuminábit te.
            </Text>
            <Text className="text-base vernacular">
              Naquele tempo, disse Jesus aos seus discípulos: «Ninguém acende
              uma lâmpada para a colocar num lugar oculto ou sob um alqueire;
              mas coloca-a sobre o candelabro, para que aqueles que entrarem
              vejam a luz. A lâmpada do teu corpo é o teu olho. Se o teu olho
              for simples, todo teu corpo será luminoso; mas se ele for mau,
              também o teu corpo será tenebroso. Tem, pois, cuidado de que a
              luz, que está em ti, não se torne em trevas. Se, portanto, todo
              teu corpo for luminoso sem parte alguma nas trevas, será ele
              brilhante, como quando uma lâmpada te ilumina com seu brilho».
            </Text>
          </View>

          <Text className="h3">Ofertório</Text>

          <Text className="em">Sl. 88, 25</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Véritas mea et misericórdia mea cum ipso: et in nómine meo
              exaltábitur cornu ejus.
            </Text>
            <Text className="text-base vernacular">
              A minha fidelidade e a minha misericórdia estarão com ele; e o seu
              poder elevar-se-á pelo meu nome.
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Sanctífica, quǽsumus, Dómine Deus, hæc múnera, quæ in sollemnitáte
              sancti Antístitis tui Martíni offérimus: ut per ea vita nostra
              inter advérsa et próspera ubíque dirigátur. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Senhor e Deus, santificai, Vos rogamos, estes dons que Vos
              oferecemos na solenidade do Santo Bispo Martinho, vosso Mártir, a
              fim de que, graças a eles, a nossa vida se regule segundo a vossa
              vontade, tanto nas adversidades, como nas prosperidades. Por nosso
              Senhor...
            </Text>
          </View>

          <Text className="h3">Comúnio</Text>

          <Text className="em">Mt. 24,46-47</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Beátus servus, quem, cum vénerit dóminus, invénerit vigilántem:
              amen, dico vobis, super ómnia bona sua constítuet eum.
            </Text>
            <Text className="text-base vernacular">
              Bem-aventurado o servo que, quando o Senhor vier, encontrar
              vigilante. Em verdade vos digo que o encarregará de administrar
              todos seus bens.
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Præsta, quǽsumus, Dómine, Deus noster: ut, quorum festivitáte
              votíva sunt sacraménta, eórum intercessióne salutária nobis
              reddántur. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Fazei, Senhor, nosso Deus, que nos sejam salutares estes
              sacrossantos sacramentos, pela intercessão daqueles em cuja festa
              Vo-los apresentamos. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
