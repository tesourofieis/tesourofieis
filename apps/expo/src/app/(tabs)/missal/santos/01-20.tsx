import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page0120() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. S. Fabião e Sebastião, Márts., a 20 de Janeiro
          </Text>
          <Text className="h3">Intróito</Text>
          <LinkCard
            href="/missal/comum/6muitosmartires1#intróito"
            title="Muitos Mártires - Missa Intret in"
          />
          <Text className="h3">Oração</Text>
          <View className="side-by-side">
            <Text className="text-base latin">
              Infirmitátem nostram réspice, omnípotens Deus: et, quia pondus
              própriæ actiónis gravat, beatórum Mártyrum tuórum Fabiáni et
              Sebastiáni intercéssio gloriósa nos prótegat. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus omnipotente, olhai para a nossa fraqueza, e, visto que
              estamos oprimidos sob o peso dos nossos pecados, fazei que sejamos
              protegidos pela gloriosa intercessão dos vossos B. B. Mártires
              Fabião e Sebastião. Por nosso Senhor...
            </Text>
          </View>
          <Text className="h3">Epístola</Text>
          <Text className="em">Heb. 11, 33-39</Text>
          <View className="side-by-side">
            <Text className="text-base latin">
              Léctio Epístolæ beáti Pauli Apóstoli ad Hebrǽos.
            </Text>
            <Text className="text-base vernacular">
              Lição da Epístola do B. Ap.º Paulo aos Hebreus.
            </Text>
            <Text className="text-base latin">
              Fratres: Sancti per fidem vicérunt regna, operáti sunt justítiam,
              adépti sunt repromissiónes, obturavérunt ora leónum, exstinxérunt
              ímpetum ignis, effugérunt áciem gládii, convaluérunt de
              infirmitáte, fortes facti sunt in bello, castra vertérunt
              exterórum: accepérunt mulíeres de resurrectióne mórtuos suos: álii
              autem disténti sunt, non suscipiéntes redemptiónem, ut meliórem
              invenírent resurrectiónem: alii vero ludíbria et vérbera expérti,
              ínsuper et víncula et cárceres: lapidáti sunt, secti sunt, tentáti
              sunt, in occisióne gládii mórtui sunt: circuiérunt in melótis, in
              péllibus caprínis, egéntes, angustiáti, afflicti: quibus dignus
              non erat mundus: in solitudínibus errantes, in móntibus et
              spelúncis et in cavérnis terræ. Et hi omnes testimónio fídei
              probáti, invénti sunt in Christo Jesu, Dómino nostro.
            </Text>
            <Text className="text-base vernacular">
              Meus irmãos: Pela Fé os santos conquistaram os reinos, praticaram
              a justiça, alcançaram a realização das promessas, fecharam a boca
              dos leões, apagaram as chamas do fogo, escaparam ao fio das
              espadas, convalesceram de suas enfermidades, foram fortes nas
              batalhas e puseram em debandada as forças inimigas. Pela Fé as
              mulheres receberam, já ressuscitados, os seus mortos, outros
              aceitaram a tortura sem desejarem livrar-se, a fim de alcançarem
              uma ressurreição melhor; e outros ainda foram escarnecidos e
              açoitados e até algemados e presos. Pela Fé muitos foram
              apedrejados, serrados, tentados, passados à espada, decapitados,
              levaram vida errante, vestidos com peles de ovelhas e de cabras,
              despojados de tudo, perseguidos e maltratados. Pela Fé houve
              homens (de quem o mundo não era digno) que andaram errantes nos
              desertos e nas montanhas e escondidos nas Covas e nas cavernas da
              terra. Todos foram provados para testemunho da sua Fé em N. S.
              Jesus Cristo.
            </Text>
          </View>
          <Text className="h3">Gradual</Text>
          <Text className="em">Ex. 15, 11</Text>
          <View className="side-by-side">
            <Text className="text-base latin">
              Gloriósus Deus in Sanctis suis: mirábilis in majestáte, fáciens
              prodígia. ℣. <Text className="text-base latin">ibid., 6</Text>{" "}
              Déxtera tua, Dómine, glorificáta est in virtúte: déxtera manus tua
              confrégit inimícos.
            </Text>
            <Text className="text-base vernacular">
              Deus é glorioso em seus Santos: e admirável na sua majestade,
              praticando prodígios. ℣.{" "}
              <Text className="text-base vernacular">ibid., 6</Text> Senhor, a
              vossa mão direita engrandeceu-se pela força: a vossa mão direita
              esmagou os inimigos.
            </Text>
            <Text className="text-base latin">
              Allelúja, allelúja. ℣.{" "}
              <Text className="text-base latin">Ps. 144, 10-11</Text> Sancti
              tui, Dómine, benedícent te: glóriam regni tui dicent. Allelúja.
            </Text>
            <Text className="text-base vernacular">
              Aleluia, aleluia. ℣.{" "}
              <Text className="text-base vernacular">Sl. 144, 10-11</Text>{" "}
              Vossos Santos Vos bendirão, Senhor: e proclamarão a glória do
              vosso reino. Aleluia.
            </Text>
          </View>
          Depois da Septuagésima, a Aleluia é omitida e é dito o Trato da Missa
          Intret in.
          <LinkCard
            href="/missal/comum/6muitosmartires1#trato"
            title="Muitos Mártires - Missa Intret in"
          />
          <Text className="h3">Evangelho</Text>
          <LinkCard
            href="/missal/comum/7muitosmartires2#evangelho"
            title="Muitos Mártires - Missa Sapiéntiam sanctórum"
          />
          <Text className="h3">Ofertório</Text>
          <Text className="em">Sl. 31, 11</Text>
          <View className="side-by-side">
            <Text className="text-base latin">
              Lætámini in Dómino et exsultáte, justi: et gloriámini, omnes recti
              corde.
            </Text>
            <Text className="text-base vernacular">
              Alegrai-vos no Senhor, ó justos. Todos aqueles que possuem o
              coração recto serão glorificados.
            </Text>
          </View>
          <Text className="h3">Secreta</Text>
          <View className="side-by-side">
            <Text className="text-base latin">
              Hóstias tibi, Dómine, beatórum Mártyrum tuórum Fabiáni et
              Sebastiáni dicátas méritis, benígnus assúme: et ad perpétuum nobis
              tríbue proveníre subsídium. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Recebei benigno, Senhor, as hóstias que Vos oferecemos pelos
              méritos dos vossos B. B. Mártires Fabião e Sebastião e dignai-Vos
              permitir que em virtude delas alcancemos o vosso perpétuo socorro.
              Por nosso Senhor...
            </Text>
          </View>
          <Text className="h3">Comúnio</Text>
          <Text className="em">Lc. 6, 18 & 19</Text>
          <View className="side-by-side">
            <Text className="text-base latin">
              Multitúdo languéntium, et qui vexabántur a spirítibus immúndis,
              veniébant ad eum: quia virtus de illo exíbat, et sanábat omnes.
            </Text>
            <Text className="text-base vernacular">
              Numerosos enfermos e possessos de espíritos imundos vinham ter com
              Ele, pois de si saía uma tal virtude que a todos curava.
            </Text>
          </View>
          <Text className="h3">Postcomúnio</Text>
          <View className="side-by-side">
            <Text className="text-base latin">
              Refécti participatióne múneris sacri, quǽsumus, Dómine, Deus
              noster: ut, cujus exséquimur cultum, intercedéntibus sanctis
              Martýribus tuis Fabiáno et Sebastiáno, sentiámus efféctum. Per
              Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Fortalecidos com a participação deste dom sacratíssimo, Vos
              suplicamos, Senhor, nosso Deus, que, por intercessão dos vossos B.
              B. Mártires Fabião e Sebastião, sintamos o efeito do mystério que
              hoje celebrámos. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
