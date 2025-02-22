import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page1024() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Arcanjo Rafael, a 24 de Outubro</Text>

          <Text className="h3">Intróito</Text>

          <LinkCard
            href="/missal/santos/05-08#intróito"
            title="Aparição de Arcanjo S. Miguel"
          />

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="latin">
              Deus, qui beátum Raphǽlem Archángelum Tobíæ fámulo tuo cómitem
              dedísti in via: concéde nobis fámulis tuis; ut ejúsdem semper
              protegámur custódia et muniámur auxílio. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Ó Deus, que designastes o Arcanjo Rafael para guia do vosso servo
              Tobias, concedei-nos a nós, que somos vossos servos, a graça de
              sermos sempre protegidos por ele e fortalecidos com seu auxílio.
              Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Epístola</Text>

          <Text className="em">Tb. 12, 7-15</Text>

          <View className="side-by-side">
            <Text className="latin">Léctio libri Tobíæ.</Text>
            <Text className="vernacular">Lição do Livro de Tobias.</Text>
            <Text className="latin">
              In diébus illis: Dixit Angelus Ráphaël ad Tobíam: Sacraméntum
              regis abscóndere bonum est: ópera autem Dei reveláre et confitéri
              honoríficum est. Bona est orátio cum jejúnio, et eleemósyna magis
              quam thesáuros auri recóndere: quóniam eleemósyna a morte liberat,
              et ipsa est, quæ purgat peccáta et facit invenire misericórdiam et
              vitam ætérnam. Qui autem faciunt peccátum et iniquitátem, hostes
              sunt ánimæ suæ. Manifésto ergo vobis veritátem, et non abscóndam a
              vobis occúltum sermónem. Quando orábas cum lácrimis, et sepeliébas
              mórtuos, et derelinquébas prándium tuum, et mórtuos abscondébas
              per diem in domo tua, et nocte sepeliébas eos, ego óbtuli
              oratiónem tuam Dómino. Et quia accéptus eras Deo, necésse fuit, ut
              tentátio probáret te. Et nunc misit me Dóminus, ut curárem te, et
              Saram uxórem fílii tui a dæmónio liberárem. Ego enim sum Raphaël
              Angelus, unus ex septem, qui astámus ante Dóminum.
            </Text>
            <Text className="vernacular">
              Naqueles dias, disse o Anjo Rafael a Tobias: «É bom ocultar o
              segredo de um rei, mas é honroso descobrir e publicar as obras de
              Deus. A oração, acompanhada com o jejum e com a esmola, vale mais
              do que os tesouros que se podem juntar; pois a esmola livra da
              morte, apaga os pecados e faz alcançar a misericórdia e a vida
              eterna. Aqueles, porém, que cometem o pecado e a iniquidade são
              inimigos de suas almas. Quero, pois, descobrir-vos a verdade e não
              vos ocultar uma só coisa secreta: Quando oráveis com lágrimas;
              sepultáveis os mortos; deixáveis o vosso descanso; guardáveis os
              mortos em vossa casa de dia e os sepultáveis de noite: então
              ofereci ao Senhor as vossas orações. E porque éreis agradável a
              Deus, foi necessário que a tentação vos experimentasse. Mas logo o
              Senhor me mandou para vos curar e para do demónio livrar Sara,
              mulher do vosso filho. Pois sou o Anjo Rafael, um dos sete que
              estão sempre presentes, diante do Senhor».
            </Text>
          </View>

          <Text className="h3">Gradual</Text>

          <Text className="em">Tb. 8, 3</Text>

          <View className="side-by-side">
            <Text className="latin">
              Angelus Dómini Raphaël apprehéndit et ligávit dǽmonem.
              <Text className="versicle"> ℣. </Text>
              <Text className="latin">Ps. 146, 5</Text> Magnus Dóminus noster,
              et magna virtus ejus.
            </Text>
            <Text className="vernacular">
              Rafael, o Anjo do Senhor, dominou o demónio e amarrou-o.
              <Text className="versicle"> ℣. </Text>
              <Text className="vernacular">Sl. 146, 5</Text> Grande é o Senhor,
              nosso Deus; grande é o seu poder.
            </Text>
            <Text className="latin">
              Allelúja, allelúja.<Text className="versicle"> ℣. </Text>
              <Text className="latin">Ps. 137, 1-2</Text> In conspéctu Angelórum
              psallam tibi: adorábo ad templum sanctum tuum, et confitébor
              nómini tuo, Dómine. Allelúja.
            </Text>
            <Text className="vernacular">
              Aleluia, aleluia.<Text className="versicle"> ℣. </Text>
              <Text className="vernacular">Sl. 137, 1-2</Text> Cantarei Salmos
              na presença dos Anjos; adorar-Vos-ei no vosso santo templo e
              glorificarei o vosso santo nome, ó Senhor. Aleluia.
            </Text>
          </View>

          <Text className="h3">Evangelho</Text>

          <Text className="em">Jo. 5, 1-4</Text>

          <View className="side-by-side">
            <Text className="latin">
              <Text className="cross"> ✠ </Text> Sequéntia sancti Evangélii
              secúndum Joánnem.
            </Text>
            <Text className="vernacular">
              <Text className="cross"> ✠ </Text> Continuação do santo Evangelho
              segundo S. João.
            </Text>
            <Text className="latin">
              In illo témpore: Erat dies festus Judæórum, et ascéndit Jesus
              Jerosólymam. Est autem Jerosólymis Probática piscína, quæ
              cognominátur hebráice Bethsaida, quinque pórticus habens. In his
              jacébat multitúdo magna languéntium, cæcórum, claudórum, aridórum
              exspectántium aquæ motum. Angelus autem Dómini descendébat
              secúndum tempus in piscínam, et movebátur aqua. Et, qui prior
              descendísset in piscínam post motiónem aquæ, sanus fiebat, a
              quacúmque detinebátur infirmitáte.
            </Text>
            <Text className="vernacular">
              Naquele tempo, sendo o dia da festa dos judeus, Jesus subiu até
              Jerusalém. Ora há perto de Jerusalém uma piscina que se chama em
              hebreu Betsaida, e tem cinco alpendres, debaixo dos quais
              costumava estar deitada grande multidão de enfermos: cegos, coxos
              e paralíticos, à espera de que a água se movesse; pois um Anjo do
              Senhor descia de tempos a tempos à piscina, revolvia a água e o
              primeiro que descia à piscina, depois do movimento da água, ficava
              curado de qualquer enfermidade.
            </Text>
          </View>

          <Text className="h3">Ofertório</Text>

          <Text className="em">Ap. 8,3 & 4</Text>

          <View className="side-by-side">
            <Text className="latin">
              Stetit Angelus juxta aram templi, habens thuríbulum áureum in manu
              sua, et data sunt ei incénsa multa: et ascéndit fumus aromátum in
              conspéctu Dei.
            </Text>
            <Text className="vernacular">
              Junto ao altar, no templo, estava de pé um Anjo, tendo na mão um
              turíbulo de ouro: e deitaram-lhe muito incenso, subindo o fumo dos
              perfumes à presença de Deus.
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="latin">
              Hóstias tibi, Dómine, laudis offérimus, supplíciter deprecántes:
              ut eásdem, angélico pro nobis interveniénte suffrágio, et placátus
              accípias, et ad salútem nostram proveníre concédas. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Senhor, Vos oferecemos estas hóstias de louvor, suplicando-Vos
              humildemente que, por intercessão do santo Anjo, as aceiteis
              propício e nos concedais que sejam úteis à nossa salvação. Por
              nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Comúnio</Text>

          <Text className="em">Dn. 3, 58</Text>

          <View className="side-by-side">
            <Text className="latin">
              Benedícite, omnes Angeli Dómini, Dóminum: hymnum dícite et
              superexaltáte eum in sǽcula.
            </Text>
            <Text className="vernacular">
              Anjos do Senhor, bendizei todos o Senhor: cantai hinos em seu
              louvor e exaltai-O em todos os séculos.
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="latin">
              Dirigere dignáre, Dómine Deus, in adjutórium nostrum sanctum
              Raphǽlem Archángelum: et, quem tuæ majestáti semper assístere
              crédimus, tibi nostras exíguas preces benedicéndas assígnet. Per
              Dóminum...
            </Text>
            <Text className="vernacular">
              Ó Senhor, nosso Deus, dignai-Vos mandar para nosso guarda o santo
              Arcanjo Rafael; e que as nossas humildes preces Vos sejam
              apresentadas para serem abençoadas por aquele que sabemos estar
              sempre na presença de vossa majestade. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
