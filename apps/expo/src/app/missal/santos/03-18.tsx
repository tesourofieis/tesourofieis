import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Language from "~/components/Language";

export default function Page0318() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Cirilo de Jerusalém, B. Conf. e Doutor, a 18 de Março
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/13doutores">
              Missa In médio Ecclésiae
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Da nobis, quǽsumus, omnípotens Deus, beáto Cyríllo Pontífice
              intercedénte: te solum verum Deum, et quem misísti Jesum Christum
              ita cognóscere; ut inter oves, quæ vocem ejus áudiunt, perpétuo
              connumerári mereámur. Per eúndem Dóminum nostrum...
            </Text>
            <Text className="vernacular">
              Ó Deus omnipotente, Vos suplicamos, permiti que, por intercessão
              do B. Pontífice Cirilo, conheçamos que sois o único e verdadeiro
              Deus e Aquele que enviastes ao mundo, Jesus Cristo, de tal sorte
              que mereçamos ser contados eternamente entre as ovelhas que
              escutam a vossa voz. Pelo mesmo...
            </Text>
          </Language>

          <Text className="h3">Epístola</Text>

          <Text className="em">Ecl. 39, 6-14</Text>

          <Language>
            <Text className="latin">Léctio libri Sapiéntiæ.</Text>
            <Text className="vernacular">Lição do Livro da Sabedoria.</Text>
            <Text className="latin">
              Justus cor suum tradet ad vigilándum dilúculo ad Dóminum, qui
              fecit illum, et in conspéctu Altíssimi deprecábitur. Apériet os
              suum in oratióne, et pro delíctis suis deprecábitur. Si enim
              Dóminus magnus volúerit, spíritu intellegéntiæ replébit illum: et
              ipse tamquam imbres mittet elóquia sapiéntiæ suæ, et in oratióne
              confitébitur Dómino: et ipse díriget consílium ejus et
              disciplínam, et in abscónditis suis consiliábitur. Ipse palam
              fáciet disciplínam doctrínæ suæ, et in lege testaménti Dómini
              gloriábitur. Collaudábunt multi sapiéntiam ejus, et usque in
              sǽculum non delébitur. Non recédet memória ejus, et nomen ejus
              requirétur a generatióne in generatiónem. Sapiéntiam ejus
              enarrábunt gentes, et laudem ejus enuntiábit ecclésia.
            </Text>
            <Text className="vernacular">
              O justo aplicará o seu coração e vigiará desde o romper do dia
              para se unir ao Senhor, que o criou, e oferecer as suas preces ao
              Altíssimo. Abrirá a sua boca para orar e implorar o perdão dos
              seus pecados; pois se o soberano Senhor quiser, enchê-lo-á com o
              espírito de inteligência. Então ele espalhará, como chuva, as
              palavras da sabedoria e abençoará o Senhor na sua oração. O Senhor
              inspirará os seus conselhos e instruções, e ele compreenderá os
              mystérios divinos. Publicará a doutrina que tiver aprendido, e a
              sua glória será manter-se na lei da aliança com o Senhor. Sua
              sabedoria receberá louvor de muitos e não cairá no esquecimento.
              Sua memória se não apagará. Seu nome será honrado de geração em
              geração. As nações publicarão a sua sabedoria e a Igreja anunciará
              os seus louvores.
            </Text>
          </Language>

          <Text className="h3">Evangelho</Text>

          <Text className="em">Mt. 10, 23-28</Text>

          <Language>
            <Text className="latin">
              <Text className="cross"> ✠ </Text> Sequéntia sancti Evangélii
              secúndum Matthǽum.
            </Text>
            <Text className="vernacular">
              <Text className="cross"> ✠ </Text> Continuação do santo Evangelho
              segundo S. Mateus.
            </Text>
            <Text className="latin">
              In illo témpore: Dixit Jesus discípulis suis: Cum persequéntur vos
              in civitáte ista, fúgite in áliam. Amen, dico vobis, non
              consummábitis civitátes Israël, donec véniat Fílius hóminis. Non
              est discípulus super magístrum nec servus super dóminum suum.
              Súfficit discípulo, ut sit sicut magíster ejus: et servo, sicut
              dóminus ejus. Si patremfamílias Beélzebub vocavérunt; quanto magis
              domésticos ejus? Ne ergo timuéritis eos. Nihil enim est opértum,
              quod non revelábitur: et occúltum, quod non sciétur. Quod dico
              vobis in ténebris, dícite in lúmine: et quod in aure audítis,
              prædicáte super tecta. Et nolíte timére eos, qui occídunt corpus,
              ánimam autem non possunt occídere: sed pótius timéte eum, qui
              potest et ánimam et corpus pérdere in gehénnam.
            </Text>
            <Text className="vernacular">
              Naquele tempo, disse Jesus aos seus discípulos: «Quando vos
              perseguirem em uma cidade, fugi para outra. Em verdade vos digo:
              não acabareis de percorrer as cidades de Israel sem que venha o
              Filho do homem. O discípulo não é superior ao mestre, nem o servo
              ao senhor. Basta ao discípulo ser como o mestre e ao servo como o
              senhor. Se chamaram Belzebute ao pai de família, o que não
              chamarão aos seus domésticos? Portanto, os não receeis; pois não
              há nada secreto que não seja revelado, nem oculto que não seja
              conhecido. Aquilo que vos digo nas trevas, dizei-o à luz; e o que
              vos digo ao ouvido, pregai-o sobre os tectos. E nunca temais
              aqueles que matam o corpo, mas não podem matar a alma; temei antes
              Aquele que pode condenar a alma e o corpo ao inferno».
            </Text>
          </Language>

          <Text className="h3">Secreta</Text>

          <Language>
            <Text className="latin">
              Réspice, Dómine, immaculátam hóstiam, quam tibi offérimus: et
              præsta; ut, méritis beáti Pontíficis et Confessóris tui Cyrílli,
              eam mundo corde suscípere studeámus. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Olhai, Senhor, para a Hóstia Imaculada que Vos oferecemos; e
              permiti que pelos méritos do B. Cirilo, vosso Confessor e
              Pontífice, diligenciemos recebê-la com o coração puro. Por nosso
              Senhor...
            </Text>
          </Language>

          <Text className="h3">Postcomúnio</Text>

          <Language>
            <Text className="latin">
              Sacraménta Córporis et Sánguinis tui, quæ súmpsimus, Dómine Jesu
              Christe: beáti Cyrílli Pontíficis précibus, mentes et corda nostra
              sanctíficent; ut divínæ consórtes natúræ éffici mereámur: Qui
              vivis...
            </Text>
            <Text className="vernacular">
              Ó Senhor Jesus Cristo, fazei que os sacramentos do vosso Corpo e
              Sangue, que acabámos de receber, santifiquem, pelas preces do B.
              Cirilo, os nossos espíritos e os nossos corações, a fim de que
              mereçamos ser participantes da natureza divina. Ó Vós, que viveis
              e reinais...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
