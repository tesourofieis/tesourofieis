import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Link } from "expo-router";
import React from "react";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";

export default function Page0704() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Santa Isabel, Rainha de Portugal, a 4 de Julho
          </Text>

          <Text className="comment">
            A Igreja nos exorta hoje a louvar a Deus pelas santas obras da
            bem-aventurada Isabel. Filha de Pedro III de Aragão, herdou o nome e
            as virtudes de sua tia-avó
            <Link href="/missal/santos/11-19">Santa Isabel da Hungria.</Link> O
            pai, vendo-lhe a santidade, dizia que ela excederia a todas as
            mulheres nascidas também da raça real (Ep., Com.). Isabel casou-se
            com Dinis I, rei de Portugal, recebera a prerogativa de restabelecer
            a paz onde houvesse divisões, e de acalmar os furores da guerra
            (Or.). Viúva, tomou o hábito da Ordem Terceira, distribuiu suas
            riquezas, adquirindo, por esse meio, a pérola preciosa e tesouro
            oculto da vida eterna (Ev.). Morreu em 1336, em Coimbra. Seu corpo
            conservou-se intacto.
          </Text>

          <Text className="h3">Intróito</Text>

          <Language>
            <Text className="latin">
              Gaudeámus omnes in Dómino, diem festum celebrántes sub honóre
              beátæ Elisabeth reginæ: de cujus solemnitáte gaudent Angeli, et
              colláudant Fílium Dei. <Text className="latin">Ps. 118, 1</Text>{" "}
              Beáti immaculáti in via: qui ámbulant in lege Dómini.
              <Text className="versicle"> ℣. </Text>Gloria Patri...
            </Text>
            <Text className="vernacular">
              Alegremo-nos todos no Senhor, no dia em que celebramos a festa em
              honra da B. Rainha Isabel: os Anjos regozijam-se com esta festa e
              louvam em harmonias o Filho de Deus.{" "}
              <Text className="vernacular">Sl. 118, 1</Text> Bem-aventurados
              aqueles que procedem sem mácula: e que andam na lei do Senhor.
              <Text className="versicle"> ℣. </Text>Glória ao Pai...
            </Text>
          </Language>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Clementíssime Deus, qui beátam Elísabeth regínam, inter céteras
              egrégias dotes, béllíci furóris sedándi prærogatíva decorásti: da
              nobis, ejus intercessíóne; post mortális vitæ, quam supplícíter
              pétimus, pacem, ad ætérna gáudia perveníre. Per Dóminum nostrum...
            </Text>
            <Text className="vernacular">
              Ó clementíssimo Deus, que entre outros eminentes dotes ornastes a
              B. Isabel com a prerrogativa de aplacar os furores da guerra,
              Concedei-nos por sua intercessão que, depois de havermos durante
              esta vida mortal gozado a paz, como humildemente pedimos,
              alcancemos também as alegrias eternas. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Epístola</Text>

          <Text className="em">Ecl. 26, 19-24</Text>

          <Language>
            <Text className="latin">Léctio libri Sapiéntiæ.</Text>
            <Text className="vernacular">Lição do Livro da Sabedoria.</Text>
            <Text className="latin">
              Grátia super grátiam, múlier sancta et pudoráta. Omnis autem
              ponderátio non est digna continéntis ánimæ. Sicut sol óriens mundo
              in altíssimis Dei, sic mulíeris bonæ spécies in ornaméntum domus
              ejus. Lucérna splendens super candelábrum sanctum, et spécies
              faciéi super ætátem stábilem. Coluúmnæ áureæ super bases
              argénteas, et pedes firmi super plantas státibilis mulíeris.
              Fundaménta ætérna super petram sólidam, et mandáta Dei in corde
              mulíeris sanctæ.
            </Text>
            <Text className="vernacular">
              A mulher santa e casta é uma graça sobre graça: pois nem toda a
              riqueza é digna da alma casta. Assim como o sol, ao despontar nas
              alturas de Deus, ilumina o mundo, assim também a beleza da mulher
              virtuosa é ornamento da sua casa. A beleza do rosto feminino na
              idade madura é como uma lâmpada que brilha sobre um candelabro
              santo. Como colunas de ouro assentes sobre bases de prata, assim
              estão firmes sobre as suas plantas os pés da mulher constante. Os
              Mandamentos de Deus no coração da mulher santa são como alicerces
              eternos, assentes sobre a pedra sólida.
            </Text>
          </Language>

          <Text className="h3">Gradual</Text>

          <Language>
            <Text className="latin">
              Verbo Dómini contínuit cælum: lenívit iracúndiam Dómini, et
              conciliávit cor Patris ad fílium.
              <Text className="versicle"> ℣. </Text>
              <Text className="latin">ibid., 15</Text> In vita sua fecit
              magnália, et in morte mirabília operáta est.
            </Text>
            <Text className="vernacular">
              Com a palavra do Senhor conteve o céu, afastou a ira do Senhor e
              conciliou o coração do pai com o do filho.
              <Text className="versicle"> ℣. </Text>
              <Text className="vernacular">ibid., 15</Text> Durante a sua vida
              praticou maravilhas e na morte operou milagres.
            </Text>
            <Text className="latin">
              Allelúja, allelúja.<Text className="versicle"> ℣. </Text>Áspice,
              quæ sólio résides, regína, supérno, nos quondam hic pópulos,
              Elisabétha, tuos. Allelúja.
            </Text>
            <Text className="vernacular">
              Aleluia, aleluia.<Text className="versicle"> ℣. </Text>Ó Rainha
              Isabel, que residis em excelso trono, olhai benignamente para nós,
              que outrora fomos na terra vossos súbditos. Aleluia.
            </Text>
          </Language>

          <Text className="h3">Evangelho</Text>

          <LinkCard
            href="/missal/comum/18virgensmartires2#evangelho"
            title="Virgens Mártires - Missa Me exspectavérunt"
          />

          <Text className="h3">Ofertório</Text>

          <Text className="em">Sl. 44, 13 & 10</Text>

          <Language>
            <Text className="latin">
              Vultum tuum deprecabúntur omnes divítes plebis: fíliæ regum in
              honóre tuo.
            </Text>
            <Text className="vernacular">
              Todos os poderosos da terra implorarão o vosso olhar: as filhas
              dos reis honrar-vos-ão.
            </Text>
          </Language>

          <Text className="h3">Secreta</Text>

          <Language>
            <Text className="latin">
              Deus, qui in honórem beátæ Elísabeth, regínæ has tibi solémnes
              hóstias offérri voluísti: da nobis; ut ejus vestígia secúti, et
              oratióne adjúti, tibi, cui servíre regnáre est, toto corde
              serviámus in terra, ac tecum regnémus in cælo. Per Dóminum
              nostrum...
            </Text>
            <Text className="vernacular">
              Ó Deus, que quisestes que este solene sacrifício Vos fosse
              oferecido em honra da B. Rainha Isabel, fazei que, seguindo nós
              seus passos e auxiliados pelas suas preces, Vos sirvamos na terra,
              lembrando-nos de que «servir-Vos é reinar», e convosco reinemos no
              céu. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Comúnio</Text>

          <Text className="em">Sl. 44, 10</Text>

          <Language>
            <Text className="latin">
              Ástitit regína a déxteris tuis in vestítu deauráto, circúmdata
              varietáte.
            </Text>
            <Text className="vernacular">
              À vossa dextra está a Rainha, vestida com seu manto de ouro e
              cercada de variedade.
            </Text>
          </Language>

          <Text className="h3">Postcomúnio</Text>

          <Language>
            <Text className="latin">
              Regáli ac sacro convívio, Dómine Jesu Christe, in quo tu es ipse
              verus cibus et potus, nos, quæsumus, dignos effíciat: et cáritas
              tua imménsa, et beátæ Elisabeth regínæ intercéssio gloriósa: Qui
              vivis et regnas...
            </Text>
            <Text className="vernacular">
              Permiti, ó Senhor Jesus Cristo, Vos suplicamos, que a imensa
              caridade e a gloriosa protecção da B. Rainha Isabel nos façam
              dignos do real e sagrado banquete em que Vós próprio sois a
              Verdadeira comida e bebida. Ó Vós, que, sendo Deus...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
