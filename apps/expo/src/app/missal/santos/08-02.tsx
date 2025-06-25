import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";

export default function Page0802() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Afonso Ligório, B. C. e Doutor, a 2 de Agosto
          </Text>

          <Text className="h3">Intróito</Text>

          <Text className="em">Lc. 4, 18</Text>

          <Language>
            <Text className="latin">
              Spíritus Dómini super me: propter quod unxit me: evangelizáre
              paupéribus misit me, sanáre contrítos corde.{" "}
              <Text className="latin">Ps. 77, 1</Text> Atténdite, pópule meus,
              legem meam: inclináte aurem vestram in verba oris mei.
              <Text className="versicle"> ℣. </Text>Gloria Patri...
            </Text>
            <Text className="vernacular">
              O Espírito do Senhor está sobre mim; eis porque me ungiu; e me
              mandou evangelizar os pobres e sarar aqueles cujos corações estão
              feridos. <Text className="vernacular">Sl. 77, 1</Text> Atendei à
              minha lei, ó meu povo; escutai as palavras que saem da minha boca.
              <Text className="versicle"> ℣. </Text>Glória ao Pai...
            </Text>
          </Language>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Deus, qui per beátum Alfónsum Maríam Confessórem tuum atque
              Pontíficem, animárum zelo succénsum, Ecclésiam tuam nova prole
              fœcundásti: quǽsumus; ut, ejus salutáribus mónitis edócti et
              exémplis roboráti, ad te perveníre felíciter valeámus. Per
              Dóminum...
            </Text>
            <Text className="vernacular">
              Ó Deus, que pelo ministério do B. Afonso Maria, vosso Confessor e
              Pontífice, que ardia em zelo pela salvação das almas, destes à
              vossa Igreja uma nova família, permiti, Vos suplicamos, que,
              instruídos com suas salutares lições e fortalecidos com seus
              exemplos, possamos chegar até junto de Vós com felicidade. Por
              nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Epístola</Text>

          <Text className="em">2 Tm. 2, 1-7</Text>

          <Language>
            <Text className="latin">
              Léctio Epístolæ beáti Pauli Apóstoli ad Timótheum.
            </Text>
            <Text className="vernacular">
              Lição da Ep.ª do B. Ap.º Paulo a Timóteo.
            </Text>
            <Text className="latin">
              Caríssime: Confortáre in grátia, quæ est in Christo Jesu: et quæ
              audísti a me per multos testes, hæc comménda fidálibus homínibus,
              qui idónei erunt et alios docére. Labóra sicut bonus miles Christi
              Jesu. Nemo mílitans Deo ímplicat se negótiis sæculáribus: ut ei
              pláceat, cui se probávit. Nam et qui certat in agóne, non
              coronátur, nisi legítime certáverit. Laborántem agrícolam opórtet
              primum de frúctibus percípere. Intéllege quæ dico: dabit enim tibi
              Dóminus in ómnibus intelléctum.
            </Text>
            <Text className="vernacular">
              Caríssimo: Fortificai-vos na graça que está em Jesus Cristo; e,
              guardando o ensino, que aprendestes de mim diante de várias
              testemunhas, transmiti-o a homens fiéis, que sejam idóneos para
              instruir outros. Trabalhai como bom soldado de Jesus Cristo.
              Aquele que se alista no serviço de Deus nunca se embaraça com os
              negócios do mundo, mas deve procurar agradar Àquele a quem se
              entregou. Aquele que combate nos jogos públicos não será coroado
              se não tiver combatido segundo as regras. O trabalhador agrícola
              deve ser o primeiro a saborear os frutos. Compreendei bem o que
              vos digo; pois o Senhor vos dará inteligência em todas as coisas.
            </Text>
          </Language>

          <Text className="h3">Gradual</Text>

          <Text className="em">Sl. 118, 52-53</Text>

          <Language>
            <Text className="latin">
              Memor fui judiciórum tuórum a sǽculo, Dómine, et consolátus sum:
              deféctio ténuit me pro peccatóribus derelinquéntibus legem tuam.
              <Text className="versicle"> ℣. </Text>
              <Text className="latin">Ps. 39, 11</Text> Justítiam tuam non
              abscóndi in corde meo: veritátem tuam et salutáre tuum dixi.
            </Text>
            <Text className="vernacular">
              Recordei-me, Senhor, das vossas sentenças, que existiam antes dos
              séculos: e fiquei consolado. O desânimo apoderou-se de mim à vista
              dos pecadores, que se afastaram da vossa lei.
              <Text className="versicle"> ℣. </Text>
              <Text className="vernacular">Sl. 39, 11</Text> Não ocultei a vossa
              justiça no meu coração, publiquei a vossa verdade e a vossa
              salvação.
            </Text>
            <Text className="latin">
              Allelúja, allelúja.<Text className="versicle"> ℣. </Text>
              <Text className="latin">Eccli. 49, 3-4</Text> Ipse est diréctus
              divínitus in pœniténtiam gentis, et tulit abominatiónes
              impietátis: et gubernávit ad Dóminum cor ipsíus: et in diébus
              peccatórum corroborávit pietátem. Allelúja.
            </Text>
            <Text className="vernacular">
              Aleluia, aleluia.<Text className="versicle"> ℣. </Text>
              <Text className="vernacular">Ecl. 49, 3-4</Text> Foi predestinado
              pelo alto para levar o povo à penitência; e fez desaparecer as
              abominações da impiedade. Volveu o seu coração para o Senhor: e
              nos dias dos pecadores desenvolveu a piedade. Aleluia.
            </Text>
          </Language>

          <Text className="h3">Evangelho</Text>

          <LinkCard
            href="/missal/santos/02-06#evangelho"
            title="S. Tito, B. e Conf."
          />

          <Text className="h3">Ofertório</Text>

          <Text className="em">Pr. 3, 9 & 27</Text>

          <Language>
            <Text className="latin">
              Hónora Dóminum de tua substántia, et de primítiis ómnium frugum
              tuárum da ei. Noli prohibére benefácere eum, qui potest: si vales,
              et ipse bénefac.
            </Text>
            <Text className="vernacular">
              Honra o Senhor, oferecendo-Lhe alguma coisa que te pertença:
              dá-lhe primícias de todos teus frutos. Ninguém proíba de praticar
              o bem a quem pode fazê-lo: e, se és capaz de fazer algum bem,
              fá-lo.
            </Text>
          </Language>

          <Text className="h3">Secreta</Text>

          <Language>
            <Text className="latin">
              Cœlésti, Dómine Jesu Christe, sacrifícii igne corda nostra in
              odórem suavitátis exúre: qui beáto Alfónso Maríæ tribuísti et hæc
              mystéria celebráre, et per éadem hóstiam tibi sanctam seípsum
              exhibére: Qui vivis...
            </Text>
            <Text className="vernacular">
              Senhor Jesus Cristo acendei nos nossos corações o fogo celestial
              do sacrifício para os consumir em odor de santidade, pois
              concedestes ao B. Afonso Maria a graça de celebrar estes mystérios
              e de se oferecer a Vós, pelo mesmo mystério, como vítima sagrada.
              Ó Vós, que viveis, e reinais...
            </Text>
          </Language>

          <Text className="h3">Comúnio</Text>

          <Text className="em">Ecl. 50, 1 & 9</Text>

          <Language>
            <Text className="latin">
              Sacérdos magnus, qui in vita sua suffúlsit domum, et in diébus
              suis corroborávit templum, quasi ignis effúlgens et thus ardens in
              igne.
            </Text>
            <Text className="vernacular">
              Este grande Pontífice, que durante a sua vida sustentou a casa do
              Senhor e empregou os seus dias em fortificar o templo, apareceu,
              como uma chama, a arder e, como o incenso, abrasado no fogo!
            </Text>
          </Language>

          <Text className="h3">Postcomúnio</Text>

          <Language>
            <Text className="latin">
              Deus, qui beátum Alfónsum Maríam Confessórem tuum atque Pontíficem
              fidelem divíni mystérii dispensatórem et præcónem effecísti: ejus
              méritis precibúsque concéde; ut fidéles tui et frequénter
              percípiant, et percipiéndo sine fine colláudent. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Ó Deus, que tornastes o B. Afonso Maria, vosso Confessor e
              Pontífice, fiel dispensador e pregador dos divinos mystérios,
              permiti que pelas suas preces e méritos os vossos fiéis os recebam
              frequentemente e, recebendo-os, Vos louvem incessantemente. Por
              nosso Senhor...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
