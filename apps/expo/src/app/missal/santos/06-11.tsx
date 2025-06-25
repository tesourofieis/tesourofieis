import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";

export default function Page0611() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Barnabé, Apóstolo, a 11 de Junho</Text>

          <Text className="h3">Intróito</Text>

          <LinkCard
            href="/missal/santos/11-30#intróito"
            title="S. André, Apóstolo"
          />

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Deus, qui nos beáti Bárnabæ Apóstoli tui méritis et intercessióne
              lætíficas: concéde propítius; ut, qui tua per eum benefícia
              póscimus, dono tuæ grátiæ consequámur. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Ó Deus, que nos alegrais com os méritos e intercessão do B.
              Barnabé, vosso Apóstolo, concedei-nos propício que, suplicando os
              vossos benefícios pela sua intercessão, os obtenhamos por efeito
              da vossa graça. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Epístola</Text>

          <Text className="em">Act. 11, 21-26; 13, 1-3</Text>

          <Language>
            <Text className="latin">Léctio Actuum Apostolórum.</Text>
            <Text className="vernacular">Lição dos Actos dos Apóstolos.</Text>
            <Text className="latin">
              In diébus illis: Multus numerus credentium Antiochíæ convérsus est
              ad Dóminum. Pervénit autem sermo ad aures ecclésiæ, quæ erat
              Jerosólymis, super istis: et misérunt Bárnabam usque ad
              Antiochíam. Qui cum pervenísset et vidísset grátiam Dei, gavísus
              est: et hortabátur omnes in propósito cordis permanére in Dómino:
              quia erat vir bonus, et plenus Spiritu Sancto et fide. Et appósita
              est multa turba Dómino. Proféctus est autem Bárnabas Tarsum, ut
              quǽreret Saulum: quem cum invenísset, perdúxit Antiochíam. Et
              annum totum conversáti sunt ibi in ecclésia: et docuérunt turbam
              multam, ita ut cognominaréntur primum Antiochíæ discípuli
              Christiáni. Erant autem in ecclésia, quæ erat Antiochíæ, prophétæ
              et doctóres, in quibus Bárnabas, et Simon qui vocabátur Niger, et
              Lúcius Cyrenénsis, et Mánahen qui erat Heródis Tetrárchæ
              collactáneus, et Saulus. Ministrántibus autem illis Dómino et
              jejunántibus, dixit illis Spíritus Sanctus: Segregáte mihi Saulum
              et Bárnabam in opus, ad quod assúmpsi eos. Tunc jejunántes et
              orantes imponentésque eis manus, dimisérunt illos.
            </Text>
            <Text className="vernacular">
              Naqueles dias, um grande número de pessoas acreditaram e
              converteram-se ao Senhor em Antioquia; e, havendo esta notícia
              chegado à igreja de Jerusalém, mandaram Barnabé a Antioquia, o
              qual, tendo lá chegado e visto a graça de Deus, alegrou-se,
              exortando-os a perseverarem no Senhor com o coração firme, pois
              ele era um homem bom e cheio de Espírito Santo e de fé. Desta
              maneira muitas pessoas se uniram ao Senhor. Barnabé foi em seguida
              a Tarso em procura de Saulo, e, tendo-o encontrado, levou-o para
              Antioquia, onde permaneceram um ano inteiro nesta igreja,
              instruindo muitas pessoas. Foi em Antioquia o lugar onde os
              discípulos receberam pela primeira vez o nome de cristãos. Havia,
              então, na igreja de Antioquia, profetas e doutores, entre os quais
              Barnabé, Simão, chamado o negro, Lúcio de Cirene, Manaém, irmão
              colaço de Herodes Tetrarca, e Saulo. Ora, enquanto ofereciam ao
              Senhor os mystérios e jejuavam, o Espírito Santo disse-lhes:
              «Separai Saulo e Barnabé para a obra a que os destinei». E, então,
              tendo jejuado e orado, impuseram-lhes as mãos e enviaram-nos.
            </Text>
          </Language>

          <Text className="h3">Gradual</Text>

          <Text className="em">Sl. 18, 5 & 2</Text>

          <Language>
            <Text className="latin">
              In omnem terram exívit sonus eórum: et in fines orbis terræ verba
              eórum.<Text className="versicle"> ℣. </Text>Cœli enárrant glóriam
              Dei: et ópera mánuum ejus annúntiat firmaméntum.
            </Text>
            <Text className="vernacular">
              O som da sua voz espalhou-se por toda a terra: as suas palavras
              soaram até aos confins do mundo.
              <Text className="versicle"> ℣. </Text>Os céus apregoam a glória do
              Senhor e o firmamento manifesta as obras das suas mãos.
            </Text>
            <Text className="latin">
              Allelúja, allelúja.<Text className="versicle"> ℣. </Text>
              <Text className="latin">Joann. 15, 16</Text> Ego vos elégi de
              mundo, ut eátis et fructum afferátis: et fructus vester maneat.
              Allelúja.
            </Text>
            <Text className="vernacular">
              Aleluia, aleluia.<Text className="versicle"> ℣. </Text>
              <Text className="vernacular">Jo. 15, 16</Text> Eu vos escolhi para
              que possais ir e alcançar fruto; e para que esse vosso fruto
              permaneça. Aleluia.
            </Text>
          </Language>

          <Text className="h3">Evangelho</Text>

          <LinkCard
            href="/missal/santos/06-30#evangelho"
            title="Comemoração de S. Paulo"
          />

          <Text className="h3">Ofertório</Text>

          <Text className="em">Sl. 44, 17-18</Text>

          <Language>
            <Text className="latin">
              Constítues eos príncipes super omnem terram: mémores erunt nóminis
              tui, Dómine, in omni progénie et generatióne.
            </Text>
            <Text className="vernacular">
              Vós os constituireis príncipes em toda a terra: e perpetuarão o
              vosso nome, Senhor, de geração em geração.
            </Text>
          </Language>

          <Text className="h3">Secreta</Text>

          <Language>
            <Text className="latin">
              Múnera, Dómine, obláta sanctífica, et, intercedénte beáto Bárnaba
              Apostolo tuo, nos per hæc a peccatórum nostrórum máculis emúnda.
              Per Dóminum...
            </Text>
            <Text className="vernacular">
              Santificai, Senhor, estes dons que Vos são oferecidos, e, por
              intercessão do B. Barnabé, vosso Apóstolo, fazei que nos
              purifiquem das manchas dos nossos pecados. Por nosso Senhor Jesus
              Cristo...
            </Text>
          </Language>

          <Text className="h3">Comúnio</Text>

          <Text className="em">Mt. 19, 28</Text>

          <Language>
            <Text className="latin">
              Vos, qui secúti estis me, sedébitis super sedes, judicántes
              duódecim tribus Israël.
            </Text>
            <Text className="vernacular">
              Vós, que me seguistes, vos assentareis sobre tronos e julgareis as
              dozes tribos de Israel.
            </Text>
          </Language>

          <Text className="h3">Postcomúnio</Text>

          <Language>
            <Text className="latin">
              Súpplices te rogámus, omnípotens Deus: ut, quos tuis réficis
              sacraméntis, intercedénte beáto Bárnaba Apóstolo tuo, tibi étiam
              plácitis móribus dignánter tríbuas deservíre. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Ó Deus omnipotente, Vos rogamos humildemente que pela intercessão
              do B. Barnabé, vosso Apóstolo, concedais àqueles que alimentais
              com vossos sacramentos a graça de Vos servirem dignamente com
              acções que Vos sejam agradáveis. Por nosso Senhor...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
