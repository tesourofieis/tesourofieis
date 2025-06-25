import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";

export default function Page0201() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Inácio, B. e Márt., a 1 de Fevereiro</Text>

          <Text className="h3">Intróito</Text>

          <Text className="em">Gl. 6, 14</Text>

          <Language>
            <Text className="latin">
              Mihi autem absit gloriári, nisi in Cruce Dómini nostri Jesu
              Christi: per quem mihi mundus crucifíxus est, et ego mundo.{" "}
              <Text className="latin">Ps. 131, 1</Text> Meménto, Dómine, David:
              et omnis mansuetúdinis ejus.<Text className="versicle"> ℣. </Text>
              Gloria Patri...
            </Text>
            <Text className="vernacular">
              Longe esteja de mim gloriar-me nalguma coisa senão na Cruz de N.
              S. Jesus Cristo, pela qual o mundo foi crucificado para mim e eu
              para o mundo. <Text className="vernacular">Sl. 131, 1</Text>{" "}
              Lembrai-Vos de David, Senhor, assim como da sua mansidão.
              <Text className="versicle"> ℣. </Text>
              Glória ao Pai...
            </Text>
          </Language>

          <Text className="h3">Epístola</Text>

          <Text className="em">Rm. 8, 35-39</Text>

          <Language>
            <Text className="latin">
              Léctio Epistolæ beáti Pauli Apóstoli ad Romános.
            </Text>
            <Text className="vernacular">
              Lição da Ep.ª do B. Ap.º Paulo aos Romanos.
            </Text>
            <Text className="latin">
              Fratres: Quis nos separábit a cantáte Christi: tribulátio, an
              angustia, an fames, an núditas, an perículum, an persecútio, an
              gládius? (sicut scriptum est: Quia propter te mortificámur tota
              die: æstimáti sumus sicut oves occisiónis). Sed in his ómnibus
              superámus propter eum, qui diléxit nos. Certus sum enim, quia
              neque mors, neque vita, neque ángeli, neque principátus, neque
              virtútes, neque instántia, neque futúra, neque fortitúdo, neque
              altitúdo, neque profúndum, neque creatúra alia poterit nos
              separáre a cantáte Dei, quæ est in Christo Jesu, Dómino nostro.
            </Text>
            <Text className="vernacular">
              Quem nos separará do amor de Cristo? A tribulação, a angústia, a
              fome, a nudez, os perigos, a perseguição, a espada? Segundo o que
              está escrito: «Por ti somos entregues à morte todos os dias; somos
              reputados como ovelhas conduzidas à morte». Mas de todas estas
              coisas saímos vencedores por Aquele que nos amou. Estou certo de
              que nem a morte, nem a vida, nem os anjos, nem os príncipes, nem
              as virtudes, nem as coisas presentes, nem as futuras, nem a força,
              nem a altura, nem a profundidade, nem nenhuma outra criatura
              poderá separar-nos do amor de Deus, que está em nosso Senhor Jesus
              Cristo.
            </Text>
          </Language>

          <Text className="h3">Gradual</Text>

          <Text className="em">Ecl. 44, 16</Text>

          <Language>
            <Text className="latin">
              Ecce sacérdos magnus, qui m diébus suis plácuit Deo.
              <Text className="versicle"> ℣. </Text>
              <Text className="latin">Ibid , 20</Text> Non est invéntus símilis
              illi, qui conserváret legem Excélsi.
            </Text>
            <Text className="vernacular">
              Eis o grande sacerdote que durante a vida agradou a Deus.
              <Text className="versicle"> ℣. </Text>
              <Text className="vernacular">Ibid , 20</Text> Não houve quem, como
              ele, guardasse a observância da Lei do Altíssimo.
            </Text>
            <Text className="latin">
              Allelúja, allelúja.<Text className="versicle"> ℣. </Text>
              <Text className="latin">Gal 2, 19-20</Text> Christo confíxus sum
              Cruci: vivo ego, jam non ego, vivit vero in me Christus. Allelúja.
            </Text>
            <Text className="vernacular">
              Aleluia, aleluia.<Text className="versicle"> ℣. </Text>
              <Text className="vernacular">Gl 2, 19-20</Text> Estou crucificado
              com Cristo. Vivo, mas já não sou eu que vivo: é Cristo que vive em
              mim. Aleluia.
            </Text>
          </Language>

          <Text className="aside">
            Após a Septuagésima omite-se o Aleluia e o Verso, e diz-se:
          </Text>

          <Text className="h3">Trato</Text>

          <Text className="em">Sl. 20, 3-4</Text>

          <Language>
            <Text className="latin">
              Desirérium ánimæ ejus tribuísti ei: et voluntáte labiórum ejus non
              fraudásti eum.<Text className="versicle"> ℣. </Text>Quoniam
              prævenísti eum in benedictiónibus dulcedinis.
              <Text className="versicle"> ℣. </Text>Posuísti in cápite ejus
              coronam de lápide pretióso.
            </Text>
            <Text className="vernacular">
              Satisfizestes os desejos do seu coração e o não iludistes nas
              preces proferidas por seus lábios.
              <Text className="versicle"> ℣. </Text>Vós, Senhor, o enchestes com
              bênçãos faustosas.<Text className="versicle"> ℣. </Text>Colocastes
              na sua cabeça o diadema de ouro.
            </Text>
          </Language>

          <Text className="h3">Ofertório</Text>

          <Text className="em">Sl. 8, 6-7</Text>

          <Language>
            <Text className="latin">
              Glória et honóre coronásti eum: et constituísti eum super ópera
              mánuum tuárum, Domine.
            </Text>
            <Text className="vernacular">
              Vós o coroastes, Senhor, com glória e honras: Vós lhe concedestes
              domínio sobre as obras das vossas mãos.
            </Text>
          </Language>

          <Text className="h3">Comúnio</Text>

          <Text className="em">Palavras de S. Inácio</Text>

          <Language>
            <Text className="latin">
              Fruméntum Christi sum: déntibus bestiárum molar, ut panis mundus
              invéniar.
            </Text>
            <Text className="vernacular">
              Sou o trigo de Cristo, que hei-de ser moído nos dentes das feras
              para me tornar em pão puríssimo.
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
