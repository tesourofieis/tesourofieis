import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";

export default function Page0501Funchal() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Tiago, Apóstolo, a 1 de Maio</Text>

          <Text className="h3">Intróito</Text>

          <LinkCard
            href="/missal/comumn/9martir#intróito"
            title="Missa Protexísti me"
          />

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Deus, qui nos ánnua beáti Jacóbi Apóstoli tui sollemnitáte
              lætíficas: præsta, quǽsumus; ut cujus gaudémus méritis, instruámur
              exémplis. Per Dóminum nostrum...
            </Text>
            <Text className="vernacular">
              Ó Deus, que nos alegrais com a solenidade anual dos Vosso B.
              Apóstolo Tiago, concedei-nos, Vos suplicamos, que, alegrando-nos
              com os seus méritos, sejamos instruídos com os seus exemplos. Por
              nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Epístola</Text>

          <Text className="em">Tg. 1, 17-21</Text>

          <Language>
            <Text className="latin">
              Léctio Epístolæ beáti Jacóbi Apóstoli.
            </Text>
            <Text className="vernacular">Lição da Ep.ª do B. Ap.º Tiago.</Text>
            <Text className="latin">
              Caríssimi: Omne datum óptimum, et omne donum perféctum desúrsum
              est, descéndens a Patre lúminum, apud quem non est transmutátio
              nec vicissitúdinis obumbrátio. Voluntárie enim génuit nos verbo
              veritátis, ut simus inítium áliquod creatúræ ejus. Scitis, fratres
              mei dilectíssimi. Sit autem omnis homo velox ad audiéndum: tardus
              autem ad loquéndum et tardus ad iram. Ira enim viri justítiam Dei
              non operátur. Propter quod abjiciéntes omnem immundítiam et
              abundántiam malítiæ, in mansuetúdine suscípite ínsitum verbum,
              quod potest salváre ánimas vestras.
            </Text>
            <Text className="vernacular">
              Caríssimos: Toda a graça excelente e todo o dom perfeito vêm do
              alto e descem do Pai das luzes, em quem não há inconstância, nem
              sombra de mudança. Espontaneamente criou-nos pela palavra da
              verdade, para que fôssemos como primícias de suas criaturas. Bem o
              sabeis, irmãos dilectíssimos: todo o homem esteja sempre pronto
              para ouvir; seja lento em falar; e mais tardo em irar-se, pois a
              ira do homem não está em harmonia com a justiça de Deus. Por isso
              deveis desprezar todas as impurezas e malícias e receber com
              docilidade a palavra que ouvistes, a qual tem poder para salvar as
              almas.
            </Text>
          </Language>

          <Language>
            <Text className="latin">
              Allelúja, allelúja.<Text className="versicle"> ℣. </Text>
              <Text className="latin">Ps. 88, 6</Text> Confitebúntur cœli
              mirabília tua, Dómine: étenim veritátem tuam in ecclésia
              sanctórum. Allelúja.<Text className="versicle"> ℣. </Text>Vos
              amici mei estis, si fecéritis quæ præcípio vobis. Allelúja.
            </Text>
            <Text className="vernacular">
              Aleluia, aleluia.<Text className="versicle"> ℣. </Text>
              <Text className="vernacular">Sl. 88, 6</Text> Senhor, que os céus
              festejem as vossas maravilhas; que a vossa verdade seja exaltada
              na assembleia dos santos. Aleluia.
              <Text className="versicle"> ℣. </Text>Sereis meus amigos, se
              fizerdes o que vos mando. Aleluia.
            </Text>
          </Language>

          <Text className="h3">Evangelho</Text>

          <LinkCard
            href="/missal/comumn/1vigiliaapostolos#evangelho"
            title="Segundo Domingo da Quaresma"
          />

          <Text className="h3">Ofertório</Text>

          <Text className="em">Sl. 91, 13</Text>

          <Language>
            <Text className="latin">
              Justus ut palma florébit: sicut cedrus, quæ in Líbano est
              multiplicábitur. (T. P. Allelúja.)
            </Text>
            <Text className="vernacular">
              O justo florescerá, como a palmeira, e crescerá, como o cedro do
              Líbano. (T. P. Aleluia.)
            </Text>
          </Language>

          <Text className="h3">Secreta</Text>

          <Language>
            <Text className="latin">
              Múnera, Dómine, quæ pro Apóstoli tui Jacóbi sollemnitáte
              deférimus, propítius súscipe: et mala ómnia, quæ meréraur, avérte.
              Per Dóminum...
            </Text>
            <Text className="vernacular">
              Recebei propício, Senhor, os dons que Vos apresentamos na
              solenidade do vosso Apóstolo Tiago e afastai de nós todos os males
              que merecemos. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Comúnio</Text>

          <Text className="em">Jo. 14, 9 & 10</Text>

          <Language>
            <Text className="latin">
              Non vos me elegistis, sed ego elégi vos, et pósui vos, ut eátis et
              fructum afferátis, et fructus vester máneat, aleluia.
            </Text>
            <Text className="vernacular">
              Não fostes vós que me escolhestes; senão Eu a vós; e vos instituí,
              para que possais ir e alcanceis fruto, e para que esse fruto
              permaneça, aleluia.
            </Text>
          </Language>

          <Text className="h3">Postcomúnio</Text>

          <Language>
            <Text className="latin">
              Quǽsumus, Dómine, salutáribus repléti mystériis: ut cujus
              sollémnia celebrámus, eórum oratiónibus adjuvémur. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Saciados já com estes salutares mystérios, Senhor, Vos rogamos,
              permiti que sejamos socorridos com as orações daquele cuja festa
              celebramos. Por nosso Senhor...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
