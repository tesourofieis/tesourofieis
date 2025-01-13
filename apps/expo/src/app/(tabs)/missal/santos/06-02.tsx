import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page0602() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. S. Marcelino e Outros, Mártires, a 2 de Junho
          </Text>

          <Text className="h3">Intróito</Text>

          <LinkCard
            href="/missal/santos/03-10#intróito"
            title="Os Quarenta Mártires"
          />

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, qui nos ánnua beatórum Mártyrum tuórum Marcellíni, Petri
              atque Erásmi sollemnitáte lætíficas: præsta, quǽsumus; ut, quorum
              gaudémus méritis, accendámur exémplis. Per Dóminum nostrum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, que nos alegrais com a festa anual dos vosso Santos
              Mártires Marcelino, Pedro e Erasmo, concedei-nos, Vos suplicamos,
              que sejamos inflamados pelos exemplos daqueles cujos méritos nos
              alegram. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Epístola</Text>

          <Text className="em">Rm. 8, 18-23</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Léctio Epístolæ beáti Pauli Apóstoli ad Romános.
            </Text>
            <Text className="text-base vernacular">
              Lição da Ep.ª do B. Ap.º Paulo aos Romanos.
            </Text>
            <Text className="text-base latin">
              Fratres: Exístimo, quod non sunt condignæ passiónes hujus
              ttémporis ad futúram glóriam, quæ revelábitur in nobis. Nam
              exspectátio creatúra revelatiónem filiórum Dei exspéctat. Vanitáti
              enim creatúra subjécta est non volens, sed propter eum, qui
              subjécit eam in spe: quia et ipsa creatúra liberábitur a servitúte
              corruptiónis, in libertátem glóriæ filiórum Dei. Scimus enim, quod
              omnis creatúra ingemíscit et párturit usque adhuc. Non solum autem
              illa, sed et nos ipsi primítias spíritus habéntes: et ipsi intra
              nos gémimus adoptiónem filiórum Dei exspectántes, redemptiónem
              córporis nostri: in Christo Jesu, Dómino nostro.
            </Text>
            <Text className="text-base vernacular">
              Meus irmãos: Os sofrimentos da vida presente não têm proporção
              alguma com a glória que um dia deveremos possuir. Assim, as
              criaturas esperam com vivo desejo a manifestação dos filhos de
              Deus; pois estão sujeitos à vaidade (não voluntariamente, mas por
              vontade daquele que as sujeitou) com a esperança de que serão
              livres da servidão da corrupção, para participarem da liberdade e
              da glória dos filhos de Deus. Porquanto sabemos que presentemente
              todas as criaturas gemem e estão com as dores da maternidade; e
              não só elas, mas nós, também, apesar de possuirmos as primícias do
              Espírito. Sim; também gememos dentro de nós, esperando a adopção
              dos filhos de Deus, a redenção do nosso corpo, em Jesus Cristo.
            </Text>
          </View>

          <Text className="h3">Gradual</Text>

          <Text className="em">Sl. 33, 18-19</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Clamavérunt justi, et Dóminus exaudívit eos: et ex ómnibus
              tribulatiónibus eórum liberávit eos. ℣. Juxta est Dóminus his, qui
              tribuláto sunt corde: et húmiles spíritu salvabit.
            </Text>
            <Text className="text-base vernacular">
              Os justos clamaram e o Senhor ouviu-os, livrando-os de todas as
              tribulações. ℣. O Senhor está próximo daqueles cujo coração está
              aflito; e salvará os que possuem espírito humilde.
            </Text>
            <Text className="text-base latin">
              Allelúja, allelúja. ℣.{" "}
              <Text className="text-base latin">Joann. 15, 16</Text> Ego vos
              elégi de mundo, ut eátis, et fructum afferátis; et fructus vester
              máneat. Allelúja.
            </Text>
            <Text className="text-base vernacular">
              Aleluia, aleluia. ℣.{" "}
              <Text className="text-base vernacular">Jo. 15, 16</Text> Eu vos
              escolhi no meio do mundo, para que possais ir e alcanceis fruto; e
              para que esse fruto permaneça. Aleluia.
            </Text>
          </View>

          <Text className="h3">Evangelho</Text>

          <LinkCard
            href="/missal/comum/6muitosmartires1#evangelho"
            title="Muitos Mártires - Missa Intret in"
          />

          <LinkCard
            href="/missal/comum/6muitosmartires1#evangelho"
            title="Muitos Mártires - Missa Intret in"
          />

          <Text className="h3">Ofertório</Text>

          <Text className="em">Sl. 31, 11</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Lætámini in Dómino et exsultáte, justi: et gloriámini, omnes recti
              corde.
            </Text>
            <Text className="text-base vernacular">
              Ó justos, alegrai-vos no Senhor e exultai: ó vós, que tendes o
              coração recto, glorificai-vos no Senhor. (T. P. Aleluia.)
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Hæc hóstia, quǽsumus, Dómine, quam sanctórum Martyrum tuórum
              natalítia recenséntes offérimus: et víncula nostræ pravitátis
              absólvat, et tuæ nobis misericórdiæ dona concíliet. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Permiti, Senhor, Vos suplicamos, que esta hóstia, que Vos
              oferecemos em honra do nascimento no céu dos vossos Santos
              Mártires, nos livre dos laços dos nossos pecados e nos obtenha os
              dons da vossa misericórdia. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Comúnio</Text>

          <Text className="em">Sb. 3, 1, 2 & 3</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Justórum ánimæ in manu Dei sunt, et non tanget illos torméntum
              malítiæ visi sunt óculis insipiéntium mori: illi autem sunt in
              pace.
            </Text>
            <Text className="text-base vernacular">
              As almas dos justos estão na mão de Deus, e o tormento da malícia
              as não atingirá: aos olhos dos insensatos pareciam mortos, porém
              estão em paz. (T. P. Aleluia.)
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Sacro múnere satiáti, súpplices te, Dómine, deprecámur: ut, quod
              débitæ servitútis celebrámus offício, salvatiónis tuæ sentiámus
              augméntum. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Saciados com o sacrossanto dom, humildemente Vos imploramos, ó
              Senhor, que pela celebração deste sacrifício, que é um tributo da
              nossa dependência, sintamos aumentar em nós os efeitos da vossa
              redenção. Por nosso Senhor...
            </Text>
          </View>

          <Text className="aside">
            No T. Pascal será a{" "}
            <Link className="link" href="/missal/comum/10martires">
              Missa Sancti tui
            </Link>{" "}
            , com as Orações e Epístola da Missa Precedente; e, em vez do
            Gradual, diz-se:
          </Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Allelúja, allelúja. ℣.{" "}
              <Text className="text-base latin">Joann. 15, 16</Text> Ego vos
              elégi de mundo, ut eátis, et fructum afferátis; et fructus vester
              máneat. Allelúja. ℣. <Text className="em">Ps. 115, 15</Text>{" "}
              Pretiósa in conspéctu Dómini mors Sanctórum ejus. Allelúja.
            </Text>
            <Text className="text-base vernacular">
              Aleluia, aleluia. ℣.{" "}
              <Text className="text-base vernacular">Jo. 15, 16</Text>{" "}
              Escolhi-vos no meio do mundo, para que possais ir e alcanceis
              fruto: e o vosso fruto permaneça. Aleluia. ℣.{" "}
              <Text className="em">Sl. 115, 15</Text> Preciosa na presença do
              Senhor é a morte dos seus Santos. Aleluia.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
