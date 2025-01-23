import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page0605() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Bonifácio, B. e Mártir, a 5 de Junho</Text>

          <Text className="h3">Intróito</Text>

          <Text className="em">Is. 65, 19 & 23</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Exsultábo in Jerúsalem et gaudébo in pópulo meo: et non audiétur
              in eo ultra vos fletus et vox clamóris. Elécti mei non laborábunt
              frustra neque generábunt in conturbatióne: quia semen benedictórum
              Dómini est, et nepótes eórum cum eis. (T.P. Allelúja, allelúja.){" "}
              <Text className="text-base latin">Ps. 43, 2</Text> Deus, áuribus
              nostris audívimus: patres nostri narravérunt opus, quod operátus
              es in diébus eórum. ℣. Gloria Patri...
            </Text>
            <Text className="text-base vernacular">
              Exultarei tem Jerusalém e alegrar-me-ei com meu povo: e nunca mais
              se ouvirá a voz das lágrimas, nem do clamor. Meus eleitos não
              trabalharão baldadamente, nem frutificarão na perturbação, pois
              constituem a geração bendita do Senhor: e os seus netos serão
              abençoados com eles. (T. P. Aleluia, aleluia.){" "}
              <Text className="text-base vernacular">Sl. 43, 2</Text> Ó Deus,
              ouvimos com os nossos ouvidos; os nossos pais contaram-nos o que
              fizestes nos seus dias. ℣. Glória ao Pai...
            </Text>
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, qui multitúdinem populórum, beáti Bonifátii Mártyris tui
              atque Pontíficis zelo, ad agnitiónem tui nóminis vocáre dignátus
              es: concéde propítius; ut, cujus sollémnia cólimus, étiam
              patrocínia sentiámus. Per Dóminum nostrum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, que Vos dignastes chamar uma multidão de povos ao
              conhecimento do vosso nome pelo zelo do B. Bonifácio, vosso Mártir
              e Pontífice, concedei-nos propício que alcancemos o Patrocínio
              daquele cuja festa celebramos. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Epístola</Text>

          <LinkCard
            href="/missal/santos/02-12#epístola"
            title="Os Fundadores da Ordem dos Servitas"
          />

          <Text className="h3">Gradual</Text>

          <Text className="em">1 Pe. 4, 13-14</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Communicántes Christi passiónibus gaudéte, ut in revelatióne
              glóriæ ejus gaudeátis exsultántes. ℣. Si exprobrámini in nómine
              Christi, beáti éritis: quóniam, quod est honóris, glóriæ et
              virtútis Dei, et qui est ejus Spíritus, super vos requiéscet.
            </Text>
            <Text className="text-base vernacular">
              Havendo tomado parte nos sofrimentos de Cristo, regozijai-vos, a
              fim de que, quando a sua glória seja manifestada, sejais cumulados
              de alegria. ℣. Se sois ultrajados por causa do nome de Cristo,
              sereis bem-aventurados; pois a honra, a glória e a virtude de Deus
              e o seu Espírito repousarão sobre vós.
            </Text>
            <Text className="text-base latin">
              Allelúja, allelúja. ℣.{" "}
              <Text className="text-base latin">Is. 66, 12</Text> Declinábo
              super eum quasi flúvium pacis, et quasi torréntem inundántem
              glóriam. Allelúja.
            </Text>
            <Text className="text-base vernacular">
              Aleluia, aleluia. ℣.{" "}
              <Text className="text-base vernacular">Is. 66, 12</Text> Farei
              correr sobre ele como que um rio de paz, e como que uma torrente a
              trasbordar de glória. Aleluia.
            </Text>
          </View>

          <Text className="aside">
            No T. Pascal omite-se o Gradual, e diz-se:
          </Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Allelúja, allelúja. ℣.{" "}
              <Text className="text-base latin">Is. 66, 10 & 14</Text> Lætámini
              cum Jerúsalem, et exsultáte in ea, omnes, qui dilígitis Dóminum.
              Allelúja. ℣. Vidébitis, et gaudébit cor vestrum: cognoscétur manus
              Dómini servis ejus. Allelúja.
            </Text>
            <Text className="text-base vernacular">
              Aleluia, aleluia. ℣.{" "}
              <Text className="text-base vernacular">Is. 66, 10 & 14</Text>{" "}
              Alegrai-vos e exultai com Jerusalém, ó vós, que amais o Senhor.
              Aleluia. ℣. Vereis e alegrar-se-á o vosso coração. A mão do Senhor
              manifestar-se-á nos seus servos. Aleluia.
            </Text>
          </View>

          <Text className="h3">Evangelho</Text>

          <Text className="em">Mt. 5, 1-12</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              <Text className="text-base latin">✠</Text> Sequéntia sancti
              Evangélii secúndum Matthǽum.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">✠</Text> Continuação do
              santo Evangelho segundo S. Mateus.
            </Text>
            <Text className="text-base latin">
              In illo témpore: Videns Jesus turbas, ascéndit in montem, et cum
              sedísset, accessérunt ad eum discípuli ejus, et apériens os suum,
              docébat eos, dicens: Beáti páuperes spíritu: quóniam ipsórum est
              regnum cœlórum. Beáti mites: quóniam ipsi possidébunt terram.
              Beáti, qui lugent: quóniam ipsi consolabúntur. Beáti, qui esúriunt
              et sítiunt justítiam: quóniam ipsi saturabúntur. Beáti
              misericórdes: quóniam ipsi misericórdiam consequántur. Beáti mundo
              corde: quóniam ipsi Deum vidébunt. Beáti pacífici: quóniam fílii
              Dei vocabúntur. Beáti, qui persecutiónem patiúntur propter
              justítiam: quóniam ipsórum est regnum cœlórum. Beáti estis, cum
              maledíxerint vobis et persecúti vos fúerint, et díxerint omne
              malum advérsum vos, mentiéntes, propter me: gaudete et exsultáte,
              quóniam merces vestra copiósa est in cœlis.
            </Text>
            <Text className="text-base vernacular">
              Naquele tempo, vendo Jesus as turbas do povo que O seguiam, subiu
              para uma montanha. Então assentou-se, aproximando-se d’Ele os
              discípulos. Depois, tomando a palavra, pregou assim aos seus
              discípulos: «Bem-aventurados os pobres de espírito, porque deles é
              o reino dos céus. Bem-aventurados os mansos, porque possuirão a
              terra. Bem-aventurados os que choram, porque serão consolados.
              Bem-aventurados os que têm fome e sede de justiça, porque serão
              saciados. Bem-aventurados os misericordiosos, porque serão
              tratados com misericórdia. Bem-aventurados os que possuem o
              coração puro, porque verão Deus. Bem-aventurados os pacíficos,
              porque serão chamados filhos de Deus. Bem-aventurados os que
              sofrem perseguição por amor da justiça, porque lhes pertencerá o
              reino dos céus. Bem-aventurados, vós, quando os homens vos
              amaldiçoarem, perseguirem e caluniarem Dor minha causa:
              regozijai-vos, então, e exultai de alegria, pois uma copiosa
              recompensa vos está preparada nos céus».
            </Text>
          </View>

          <Text className="h3">Ofertório</Text>

          <Text className="em">Sl. 15, 7 & 8</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Benedícam Dóminum, qui tríbuit mihi intelléctum: providébam Deum
              in conspéctu meo semper, quóniam a dextris est mihi ne commóvear.
              (T.P. Allelúja.)
            </Text>
            <Text className="text-base vernacular">
              Bendirei o Senhor, que me deu a inteligência. Tenho os meus olhos
              voltados constantemente para Deus; e, visto que Ele está à minha
              dextra, não serei abalado. (T. P. Aleluia.)
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Super has hóstias. Dómine, quæsumus, benedíctio copiósa descéndat:
              quæ et sanctificatiónem nostram misericórditer operátur; et de
              sancti Bonifátii Mártyris tui atque Pontíficis fáciat sollemnitáte
              gaudére. Per Dóminum nostrum...
            </Text>
            <Text className="text-base vernacular">
              Senhor, Vos rogamos, fazei descer sobre estas hóstias abundantes
              bênçãos, a fim de que pela vossa misericórdia operem a nossa
              santificação e nos alegrem na solenidade de S. Bonifácio, vosso
              Mártir e Pontífice. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Comúnio</Text>

          <Text className="em">Ap. 3, 21</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Qui vícerit, dabo ei sedére mecum in throno meo: sicut et ego vici
              et sedi cum Patre meo in throno ejus. (T.P. Allelúja.)
            </Text>
            <Text className="text-base vernacular">
              Aquele que houver vencido tomará lugar comigo no meu trono, assim
              como Eu, que também venci, estou assentado com meu Pai no seu
              trono. (T. P. Aleluia.)
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Sanctificati, Dómine, salutári mysterio: quæsumus; ut nobis sancti
              Bonifátii Martyris tui atque Pontíficis pia non desit orátio,
              cujus nos donásti patrocínio gubernari. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Senhor, santificados com estes salutares mystérios, Vos
              suplicamos, não permitais que nos faltem as piedosas orações
              daquele que nos concedestes como nosso protector e guia. Por nosso
              Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
