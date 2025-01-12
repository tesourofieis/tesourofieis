import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Link } from "expo-router";
import React from "react";
import { TabItem, Tabs } from "~/components/Tabs";
import MementoRerumConditor from "./../../canticos/sacros/mementorerumconditor";
import Salmo119 from "./../salterio/119";
import Salmo120 from "./../salterio/120";
import Salmo121 from "./../salterio/121";

export default function PageTerca() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Terça</Text>

          <View className="aside">
            Meditemos na flagelação, na coroação de espinhos e na condenação à
            morte. Podemos ainda meditar na descida do Espírito Santo, que se
            deu nesta mesma hora.
          </View>

          <View className="side-by-side">
            <Text className="text-base">
              ℣. Deus <Text className="cross text-red-500">✠</Text> in
              adjutórium meum inténde.
            </Text>
            <Text className="text-base">
              ℣. Deus, <Text className="cross text-red-500">✠</Text> vinde em
              meu auxílio.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Dómine, ad adjuvándum me
              festína.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Senhor, apressai-Vos em
              socorrer-me.
            </Text>
            <Text className="text-base">
              ℣. Glória Patri, et Fílio, et Spíritui Sancto.
            </Text>
            <Text className="text-base">
              ℣. Glória ao Pai, e ao Filho e ao Espírito Santo.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Sicut erat in pricípio,
              et nunc, et semper, et in sǽcula sæculórum. Amen.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Assim como era no
              princípio, agora e sempre, e por todos os séculos dos séculos.
              Amen.
            </Text>
          </View>

          <Text className="h2">Memento rerum conditor</Text>

          <MementoRerumConditor />

          <View className="side-by-side">
            <Text className="text-base">
              <Text className="em">Ant.</Text> Maria Virgo assumpta est ad
              ætherum thalamum, in quo Rex regum stellato sedet solio.
            </Text>
            <Text className="text-base">
              <Text className="em">Ant.</Text> A Virgem Maria foi exaltada ao
              tálamo celeste, onde o Rei dos reis está sentado num trono de
              estrelas.
            </Text>
          </View>

          <Text className="h2">Salmo 119</Text>

          <Salmo119 />

          <Text className="h2">Salmo 120</Text>

          <Salmo120 />

          <Text className="h2">Salmo 121</Text>

          <Salmo121 />

          <Tabs>
            <TabItem label="Depois da Purificação">
              <View className="side-by-side">
                <Text className="text-base">
                  <Text className="em">Ant.</Text> Maria Virgo assumpta est ad
                  ætherum thalamum, in quo Rex regum stellato sedet solio.
                </Text>
                <Text className="text-base">
                  <Text className="em">Ant.</Text> A Virgem Maria foi exaltada
                  ao tálamo celeste, onde o Rei dos reis está sentado num trono
                  de estrelas.
                </Text>
              </View>

              <Text className="h2">Pequeno Capítulo</Text>

              <Text className="em">Ecl. 24, 15</Text>

              <View className="side-by-side">
                <Text className="text-base">
                  Et sic in Sion firmata sum, et in civitate sanctificata
                  similiter requievi, et in Jerúsalem potestas mea.
                </Text>
                <Text className="text-base">
                  E desta maneira estou fundada em Sião, e semelhantemente
                  repousei na cidade santificada, e em Jerúsalem é o meu poder.
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500">℟.</Text> Deo grátias.
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500">℟.</Text> Graças a Deus.
                </Text>
                <Text className="text-base">
                  ℣. Diffusa est gratia in labiis tuis.
                </Text>
                <Text className="text-base">
                  ℣. A graça derramou-se nos vossos lábios.
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500">℟.</Text> Propterea benedixit
                  te Deus in æternum.
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500">℟.</Text> Por isso vos abençoou
                  Deus para sempre.
                </Text>
              </View>

              <View className="side-by-side">
                <Text className="text-base">
                  <Text className="em">Hic genuflectitur</Text> Kyrie eleison
                </Text>
                <Text className="text-base">
                  <Text className="em">Genuflectir</Text> Senhor, tende piedade
                  de nós.
                </Text>
                <Text className="text-base">Christe, eléison.</Text>
                <Text className="text-base">Cristo, tende piedade de nós.</Text>
                <Text className="text-base">Kyrie, eléison.</Text>
                <Text className="text-base">Senhor, tende piedade de nós.</Text>
                <Text className="text-base">
                  ℣. Domine, exaudi orationem meam.
                </Text>
                <Text className="text-base">
                  ℣. Ouvi, Senhor, a minha oração.
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500">℟.</Text> Et clamor meus ad te
                  veniat.
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500">℟.</Text> E o meu clamor chegue
                  até Vós.
                </Text>
              </View>

              <View className="side-by-side">
                <Text className="text-base">
                  <Text className="text-red-500 text-center">Orémus.</Text>
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500 text-center">Oremos.</Text>
                </Text>
                <Text className="text-base">
                  Deus, qui salutis aeternae, beatae Mariae virginitate fecunda,
                  humano generi praemia praestitisti: tribue, quaesumus; ut
                  ipsam pro nobis intercedere sentiamus, per quam meruimus
                  auctorem vitae suscipere, Dominum nostrum Jesum Christum
                  Filium tuum: Qui tecum vivit et regnat...
                </Text>
                <Text className="text-base">
                  Ó Deus, que pela virgindade fecunda da B. Maria, participastes
                  ao género humano os prémios da salvação eterna: concedei-nos,
                  Vos rogamos, que experimentemos quanto é poderosa a nosso
                  favor a intercessão daquela Virgem, pela qual merecemos
                  receber o autor da vida nosso Senhor Jesus Cristo, Filho
                  vosso: que convosco Vive e reina...
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500">℟.</Text> Amen.
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500">℟.</Text> Amen.
                </Text>
              </View>
            </TabItem>

            <TabItem label="No Adveno">
              <View className="side-by-side">
                <Text className="text-base">
                  <Text className="em">Ant.</Text> Ave, María, grátia plena;
                  Dóminus tecum: benedícta tu in muliéribus.
                </Text>
                <Text className="text-base">
                  <Text className="em">Ant.</Text> Ave, Maria, cheia de graça, o
                  Senhor é convosco; bendita sois vós entre as mulheres.
                </Text>
              </View>

              <Text className="h2">Pequeno Capítulo</Text>

              <Text className="em">Is. 6, 1-2</Text>

              <View className="side-by-side">
                <Text className="text-base">
                  Egredietur virga de radice Jesse, et flos de radice ejus
                  ascendet. Et requiescet super eum Spiritus Domini.
                </Text>
                <Text className="text-base">
                  Sairá uma vara da raiz de Jessé, e subirá uma flor da sua
                  raiz, e descansará sobre ele o Espírito do Senhor.
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500">℟.</Text> Deo grátias.
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500">℟.</Text> Graças a Deus.
                </Text>
                <Text className="text-base">
                  ℣. Diffusa est gratia in labiis tuis.
                </Text>
                <Text className="text-base">
                  ℣. Estão cheios de graça vossos lábios.
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500">℟.</Text> Propterea benedixit
                  te Deum in æternum.
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500">℟.</Text> Por isso Deus vos
                  abençoou para sempre.
                </Text>
              </View>

              <View className="side-by-side">
                <Text className="text-base">
                  <Text className="em">Hic genuflectitur</Text> Kyrie eleison
                </Text>
                <Text className="text-base">
                  <Text className="em">Genuflectir</Text> Senhor, tende piedade
                  de nós.
                </Text>
                <Text className="text-base">Christe, eléison.</Text>
                <Text className="text-base">Cristo, tende piedade de nós.</Text>
                <Text className="text-base">Kyrie, eléison.</Text>
                <Text className="text-base">Senhor, tende piedade de nós.</Text>
                <Text className="text-base">
                  ℣. Domine, exaudi orationem meam.
                </Text>
                <Text className="text-base">
                  ℣. Ouvi, Senhor, a minha oração.
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500">℟.</Text> Et clamor meus ad te
                  veniat.
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500">℟.</Text> E o meu clamor chegue
                  até Vós.
                </Text>
              </View>

              <View className="side-by-side">
                <Text className="text-base">
                  <Text className="text-red-500 text-center">Orémus.</Text>
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500 text-center">Oremos.</Text>
                </Text>
                <Text className="text-base">
                  Deus, qui de beatæ Mariæ Virginis utero Verbum tuum, Angelo
                  nuntiante, carnem suscipere voluisti: præsta supplicibus tuis;
                  ut qui vere eam Genetricem Dei credimus, ejus apud te
                  intercessionibus adjuvemur. Per eundem Dominum nostrum Jesum
                  Christum.
                </Text>
                <Text className="text-base">
                  Ó Deus, que pela anunciação do Anjo quisestes que o vosso
                  Verbo se vestisse da nossa carne nas entranhas da
                  bem-aventurada Virgem Maria: nós, vossos humildes servos,
                  cremos ser ela a verdadeira Mãe de Deus, concedei-nos que nos
                  ajudem as suas intercessões para convosco. Pelo mesmo Jesus
                  Cristo Senhor Nosso.
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500">℟.</Text> Amen.
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500">℟.</Text> Amen.
                </Text>
              </View>
            </TabItem>

            <TabItem label="No Natal">
              <View className="side-by-side">
                <Text className="text-base">
                  <Text className="em">Ant.</Text> Quando natus es inefabilitre
                  ex Virgnine, tunc impletæ sunt Scripturæ: sicut pluvia in
                  vellus descendisti, ut salvum faceres genus humanum: te
                  laudamus, Deus noster.
                </Text>
                <Text className="text-base">
                  <Text className="em">Ant.</Text> Quando nascestes
                  misteriosamente da Virgem, então se cumpriram as Escrituras:
                  descestes como a chuva sobre a lã, para salvar a humanidade.
                  Nós Vos louvamos, ó Nosso Deus.
                </Text>
              </View>
            </TabItem>
          </Tabs>

          <View className="side-by-side">
            <Text className="text-base">℣. Domine, exaudi orationem meam.</Text>
            <Text className="text-base">℣. Ouvi, Senhor, a minha oração.</Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Et clamor meus ad te
              veniat.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> E o meu clamor chegue até
              Vós.
            </Text>
            <Text className="text-base">℣. Benedicamus Domino.</Text>
            <Text className="text-base">℣. Bendigamos o Senhor.</Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Deo gratias.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Graças a Deus.
            </Text>
            <Text className="text-base">
              ℣. Fidelium animæ per misericordiam Dei, requiescant in pace.
            </Text>
            <Text className="text-base">
              ℣. E que as almas dos fiéis, pela misericórdia de Deus, descansem
              em paz.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
          </View>

          <View className="aside">
            Acabar com uma{" "}
            <Link className="link" href="/devocionario/antifonas">
              Antífona de Nossa Senhora
            </Link>
            .
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
