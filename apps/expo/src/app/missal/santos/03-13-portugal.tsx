import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page0313Portugal() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            B. B. Sancha e Mafalda, Virgens, a 13 de Março
          </Text>

          <Text className="h3">Intróito</Text>

          <Text className="em">Sl. 44, 9 & 16</Text>

          <View className="side-by-side">
            <Text className="latin">
              Delectavérunt te, Deus, fíliæ regum in honóre tuo: afferéntur
              vírgines in lætítia et exultatióne: adducéntur in templum Regis
              Dómini. <Text className="latin">Ps. ibid., 2</Text> Eructávit cor
              meum verbum bonum: dico ego ópera mea Regi.
              <Text className="versicle"> ℣. </Text>
              Gloria Patri...
            </Text>
            <Text className="vernacular">
              Amam-Vos, ó Deus, as filhas dos reis e formam a vossa corte de
              honra: As virgens serão apresentadas com alegria e em transportes
              de júbilo e serão conduzidas ao templo do Pai: do Senhor.{" "}
              <Text className="vernacular">Sl. ibid., 2</Text> Meu coração
              exprimiu uma palavra sublime: «Consagro ao Rei as minhas obras».
              <Text className="versicle"> ℣. </Text>Glória ao Pai...
            </Text>
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="latin">
              Deus, qui beátas Virgines Sanciam et Mafáldam, mundáno principátu
              et sæculi pompa despéctis, a terrénis ad cæléstes Agni núptias
              evocásti: da nobis fámulis tuis; ut terréna despiciéntes,
              cæléstium bonórum fácias esse consórtes. Per eúmdem Dóminum...
            </Text>
            <Text className="vernacular">
              Ó Deus, que chamastes das bodas terrenas para, as núpcias
              celestiais do Cordeiro Imaculado as B. B. Sancha e Mafalda, que
              logo desprezaram as honras da realeza humana e outras pompas
              terrestres, permiti aos vossos servos que, desprezando também os
              interesses terrenos, possam compartilhar do gozo dos bens
              celestiais. Pelo mesmo nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Epístola</Text>

          <LinkCard
            href="/missal/comum/19muitasvirgensmartires#epístola"
            title="Muitas Virgens Mártires"
          />

          <Text className="h3">Gradual</Text>

          <Text className="em">Sl. 148, 12-13</Text>

          <View className="side-by-side">
            <Text className="latin">
              Vírgines laudent nomen Dómini: quia exaltátum est nomen ejus
              solíus.<Text className="versicle"> ℣. </Text>
              <Text className="latin">Ps. 23, 6</Text> Hæc est generátio
              quæréntium Dóminum, quærémtium fáciem Dei Jacbob.
            </Text>
            <Text className="vernacular">
              Que as virgens louvem o nome do Senhor: pois só o seu nome foi
              exaltado.<Text className="versicle"> ℣. </Text>Esta pertence à
              gereção das que procuram a face de Deus de Jacob.
            </Text>
          </View>

          <Text className="h3">Trato</Text>

          <Text className="em">Sl. 44, 7</Text>

          <View className="side-by-side">
            <Text className="latin">
              Sedes tua, Deus, in sæculum sæculi: virga directiónis virga regni
              tui. <Text className="latin">Ps. ibid., 13 & 10</Text> Vultum tuum
              deprecabúntur omnes divites plebis: filiæ regum in honóre tuo.
              <Text className="versicle"> ℣. </Text>
              <Text className="em">Ps. ibid., 16</Text> Afferéntur in lætítia et
              exsultatióne: adducéntur in templum Regi Dómino.
            </Text>
            <Text className="vernacular">
              Ó Deus, vosso trono é eterno: o ceptro da rectidão é o ceptro do
              vosso reino.{" "}
              <Text className="vernacular">Ps. ibid., 13 & 10</Text> Todos os
              ricos da terra implorarão o vosso olhar: as filhas dos reis
              formarão a vossa corte.<Text className="versicle"> ℣. </Text>
              <Text className="em">Ps. ibid., 16</Text> Virão em transportes de
              alegria e de júbilo: e serão conduzidas ao templo do Rei e Senhor.
            </Text>
          </View>

          <Text className="h3">Evangelho</Text>

          <LinkCard
            href="/missal/comum/17virgensmartires1#evangelho"
            title="Virgens Mártires - Missa Loquébar"
          />

          <Text className="h3">Ofertório</Text>

          <View className="side-by-side">
            <Text className="latin">
              Prudéntes virgines, apostáte vestras lámpades: Ecce Sponsus venit,
              exite óbviam Christo Dómino.
            </Text>
            <Text className="vernacular">
              Ó virgens prudentes, preparai as vossas lâmpadas: eis aí vem o
              Esposo; ide ao encontro de Cristo Senhor.
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="latin">
              Immaculátam hóstiam tibi Dómine offérimus deprecántes: ut beatárum
              Virginum Sánciæ et Mafáldæ interveniénte suffrágio, semper in
              nobis dilécti Fílii tui passiónis memória persevéret, et fructus.
              Per eúmdem Dóminum...
            </Text>
            <Text className="vernacular">
              Senhor, Vos oferecemos a Hóstia Imaculada, suplicando pela
              intercessão das Virgens Sancha e Mafalda a graça de gozarmos
              sempre a memória e o fruto da Paixão do vosso amado Filho. Pelo
              mesmo nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Comúnio</Text>

          <Text className="em">Pr. 4, 1</Text>

          <View className="side-by-side">
            <Text className="latin">
              O quam pulchra est casta generátio cum claritáte: immortális est
              enim memória illíus, quóniam et apud Deum nota est, et apud
              hómines.
            </Text>
            <Text className="vernacular">
              Oh! como é formosa a geração casta, quando é revestida com o
              brilho da virtude! Sua memória é imortal; pois ela é louvada
              diante de Deus e dos homens.
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="latin">
              Spíritum nobis, Dómine, humilitátis et caritátis tribuat hæc mensa
              cæléstis: qua reféctæ beátæ Virgines Sáncia et Mafálda, sæculi
              vanitátibus exútis, ad ætérna regna felíciter pervenérunt. Per
              Dóminum...
            </Text>
            <Text className="vernacular">
              Senhor, permiti que recebamos o espírito da humildade e caridade
              nesta mesa celestial, onde as B. B. Sancha e Mafalda encontraram
              força para se libertarem das vaidades do mundo e alcançarem a
              glória eterna. Por nosso Senhor Jesus Cristo...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
