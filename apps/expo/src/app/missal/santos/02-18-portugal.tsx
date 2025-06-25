import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";

export default function Page0218Portugal() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Teotónio, Conf., a 18 de Fevereiro</Text>

          <Text className="h3">Intróito</Text>

          <Text className="em">Sl. 131, 7 & 121, 2</Text>

          <Language>
            <Text className="latin">
              Introíbimus in tabernáculum ejus: adorábimus in loco, ubi
              stetérunt pedes ejus. Stantes erant pedes nostri in átriis tuis,
              Jerusalém. <Text className="latin">Ps. 121, 1</Text> Lætátus sum
              in his, quæ dicta sunt mihi: in domum Dómini íbimus.
              <Text className="versicle"> ℣. </Text>Gloria Patri...
            </Text>
            <Text className="vernacular">
              Entraremos no seu tabernáculo e adoraremos no lugar onde Ele pôs
              os seus pés. Tínhamos os nossos pés colocados nos teus átrios, ó
              Jerusalém. <Text className="vernacular">Sl. 121, 1</Text> Senti
              muita alegria com o que me foi dito: Iremos à casa do Senhor.
              <Text className="versicle"> ℣. </Text>
              Glória ao Pai...
            </Text>
          </Language>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Deus, qui beáti Theotónii et exémplis canónicam disciplínam
              reparásti: concéde propítius; ut ejus exémplo et intercessióne,
              arctiórem christiánæ perfectiónis viam ingréssi, facílius vitam
              ætérnam consequámur. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Ó Deus, que com os salutares conselhos e exemplos do B. Teotónio
              reformastes a disciplina canónica, concedei-nos propício que, com
              seu exemplo e intercessão, seguindo nós o apertado caminho da
              perfeição cristã, mais facilmente alcancemos a vida eterna. Por
              nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Epístola</Text>

          <LinkCard
            href="/missal/comum/16abades#epístola"
            title="Abades - Missa Os justi"
          />

          <Text className="h3">Gradual</Text>

          <Text className="em">Sl. 118, 46</Text>

          <Language>
            <Text className="latin">
              Loquébar de testimóniis tuis in conspéctu regum: et non
              confundébar.<Text className="versicle"> ℣. </Text>
              <Text className="latin">Ps. 19, 10</Text> Dómine, salvum fac regem
              et exáudi nos in die, qua invocavérimus te.
            </Text>
            <Text className="vernacular">
              Falava dos vossos testemunhos na presença dos reis e não era
              confundido.<Text className="versicle"> ℣. </Text>
              <Text className="vernacular">Sl. 19, 10</Text> Senhor, salvai o
              rei e ouvi-nos no dia em que Vos invocarmos.
            </Text>
            <Text className="latin">
              Allelúja, allelúja.<Text className="versicle"> ℣. </Text>
              <Text className="latin">Ps. 115, 18-19</Text> Vota mea Dómino
              redam in átriis domus Dómini, in médio tui Jerusalém. Allelúja.
            </Text>
            <Text className="vernacular">
              Aleluia, aleluia.<Text className="versicle"> ℣. </Text>
              <Text className="vernacular">Sl. 115, 18-19</Text> Apresentarei os
              meus votos ao Senhor, nos átrios da casa do Senhor e junto de Vós,
              ó Jerusalém. Aleluia.
            </Text>
          </Language>

          <Text className="aside">
            Após a Septuagésima omite-se o Aleluia e o seguinte, e diz-se o:
          </Text>

          <Text className="h3">Trato</Text>

          <Language>
            <Text className="latin">
              <Text className="latin">Sl. 115, 16</Text>Dirupísti víncula mea:
              tibi sacrificábo hóstiam laudis, et nomen Dómini invocábo.
              <Text className="versicle"> ℣. </Text>
              <Text className="em">Sl. 86, 3</Text> Gloriósa dicta sunt de te,
              cívitas Dei.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Sl. 115, 16</Text>Cumprirei os votos
              que fiz ao Senhor na presença de todo seu povo: aos olhos do
              Senhor é preciosa a morte dos seus Santos.
              <Text className="versicle"> ℣. </Text>Porquanto considerei que
              fundastes os céus, a lua e as estrelas.{" "}
              <Text className="em">Sl. 86, 3</Text> Gloriosas coisas têm sido
              narradas a respeito de vós, ó cidade de Deus.
            </Text>
          </Language>

          <Text className="h3">Evangelho</Text>

          <LinkCard
            href="/missal/comum/16abades#evangelho"
            title="Abades - Missa Os justi"
          />

          <Text className="h3">Ofertório</Text>

          <Text className="em">Gl. 6-14</Text>

          <Language>
            <Text className="latin">
              Mihi autem absit gloriári, nisi in Cruce Dómini nostri Jesu
              Christi.
            </Text>
            <Text className="vernacular">
              Longe esteja de mim gloriar-me nalguma coisa senão na Cruz de
              nosso Senhor Jesus Cristo.
            </Text>
          </Language>

          <Text className="h3">Secreta</Text>

          <Language>
            <Text className="latin">
              Sanctæ Crucis, Dómine, mystéria recoléntes, concéde, ut
              sacrifícium incruéntum débita veneratióne offerámus: et
              interveniénte sancto Theotónnio Confessóre tuo, salutáris fructus
              consequámur efféctum. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Renovando nós, Senhor, os mystérios da Santa Cruz, concedei-nos
              que ofereçamos o sacrifício incruento com a devida veneração; e
              que por intercessão de S. Teotónio, vosso Confessor, alcancemos
              fruto salutar. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Comúnio</Text>

          <Text className="em">Rm. 12, 1-2</Text>

          <Language>
            <Text className="latin">
              Obsecro vos, frates, per misericórdiam Dei, ut exhibeátis córpora
              vestra hóstiam vivéntem, sanctam, Deo placéntem, rationábile
              obséquium vestrum: et nolíte conformári huic sæculo, sed
              reformámini.
            </Text>
            <Text className="vernacular">
              Rogo-vos, irmãos, que apresenteis vossos corpos em sacrifício
              vivo, santo e agradável a Deus, pois esta vossa doação é racional.
              E que vos não conformeis com este mundo, mas antes vos reformeis.
            </Text>
          </Language>

          <Text className="h3">Postcomúnio</Text>

          <Language>
            <Text className="latin">
              Per sancta, Dómine, quæ súmpsimus, sanctus Theotónius intercédat,
              ne huic sæculo conformémur; sed reformáti, ad perfectiónem semper
              aspirémus. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Pelos sacrossantos sacramentos que recebemos, Senhor, interceda
              por nós S. Teotónio, para que nos não conformemos com este mundo,
              mas, já reformados, aspiremos à perfeição. Por nosso Senhor...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
