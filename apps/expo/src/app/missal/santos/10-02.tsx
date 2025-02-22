import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page1002() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Santos Anjos da Guarda, a 2 de Outubro</Text>
          <Text className="aside">
            Missa da Festa da{" "}
            <Link className="link" href="/missal/santos/05-08">
              Aparição de Arcanjo Miguel
            </Link>{" "}
            , excepto:
          </Text>
          <Text className="h3">Oração</Text>
          <View className="side-by-side">
            <Text className="latin">
              Deus, qui ineffábili providéntia sanctos Angelos tuos ad nostram
              custódiam míttere dignáris: largíre supplícibus tuis; et eórum
              semper protectióne deféndi, et ætérna societáte gaudére. Per
              Dóminum...
            </Text>
            <Text className="vernacular">
              Ó Deus, que por vossa inefável Providência Vos dignastes mandar os
              vossos Anjos para nos guardarem, concedei aos vossos suplicantes a
              graça de serem sempre defendidos pela sua protecção e de gozarem
              eternamente, a sua companhia. Por nosso Senhor...
            </Text>
          </View>
          <Text className="h3">Epístola</Text>
          <Text className="em">Ex. 23, 20-23</Text>
          <View className="side-by-side">
            <Text className="latin">Léctio libri Exodi.</Text>
            <Text className="vernacular">Lição do Livro Êxodo.</Text>
            <Text className="latin">
              Hæc dicit Dóminus Deus: Ecce, ego mittam Angelum meum, qui
              præcédat te, et custódiat in via, et intróducat in locum, quem
              parávi. Obsérva eum, et audi vocem ejus, nec contemnéndum putes:
              quia non dimíttet, cum peccáveris, et est nomen meum in illo. Quod
              si audiéris vocem ejus et féceris ómnia, quæ loquor, inimícus ero
              inimícis tuis et affligam affligéntes te: præcedétque te Angelus
              meus.
            </Text>
            <Text className="vernacular">
              Isto diz o Senhor, nosso Deus: «Eis que enviarei o meu Anjo, a fim
              de que ele vá adiante de vós; vos guarde no caminho; e vos
              introduza no lugar que vos preparei. Respeitai-o, ouvi a sua voz e
              não deixeis de atendê-lo, porque vos não perdoará, quando
              pecardes. Ele vos falará em meu nome. Se escutardes a sua voz e se
              fizerdes o que vos ordenar, serei inimigo do vosso inimigo e
              afligirei aqueles que vos afligirem, pois o meu Anjo
              preceder-vos-á».
            </Text>
          </View>
          <Text className="h3">Gradual</Text>
          <Text className="em">Sl. 90,11-12</Text>
          <View className="side-by-side">
            <Text className="latin">
              Angelis suis Deus mandávit de te, ut custódiant te in ómnibus viis
              tuis.<Text className="versicle"> ℣. </Text>In mánibus portábunt
              te, ne umquam offéndas ad lápidem pedem tuum.
            </Text>
            <Text className="vernacular">
              Deus mandou aos seus Anjos que te guardassem em todas as tuas
              vias.<Text className="versicle"> ℣. </Text>E eles te conduzirão em
              cima de suas mãos, para que o teu pé não tropece.
            </Text>
            <Text className="latin">
              Allelúja, allelúja.<Text className="versicle"> ℣. </Text>
              <Text className="latin">Ps. 102, 21</Text> Benedícite Dómino,
              omnes virtútes ejus: minístri ejus, qui fácitis voluntátem ejus.
              Allelúja.
            </Text>
            <Text className="vernacular">
              Aleluia, aleluia.<Text className="versicle"> ℣. </Text>
              <Text className="vernacular">Sl. 102, 21</Text> Bendizei todos o
              Senhor, ó exércitos do Senhor; pois estais ao seu serviço e
              desempenhais as suas ordens. Aleluia.
            </Text>
          </View>
          <Text className="h3">Ofertório</Text>
          <Text className="em">Sl. 102, 20 & 21</Text>
          <View className="side-by-side">
            <Text className="latin">
              Benedícite Dóminum, omnes Angeli ejus: minístri ejus, qui fácitis
              verbum ejus, ad audiéndam vocem sermónum ejus.
            </Text>
            <Text className="vernacular">
              Bendizei o Senhor, ó vós, Anjos, heróis poderosos, executores das
              suas ordens e sempre fiéis aos seus chamamentos.
            </Text>
          </View>
          <Text className="h3">Secreta</Text>
          <View className="side-by-side">
            <Text className="latin">
              Súscipe, Dómine, múnera, quæ pro sanctórum Angelórum tuórum
              veneratióne deférimus: et concéde propítius; ut, perpétuis eórum
              præsídiis, a præséntibus perículis liberémur et ad vitam
              perveniámus ætérnam. Per Dóminum nostrum...
            </Text>
            <Text className="vernacular">
              Recebei, Senhor, as ofertas que Vos apresentamos em honra dos
              vossos Santos Anjos e concedei-nos propício que pela sua contínua
              protecção sejamos livres dos perigos da vida presente e alcancemos
              a vida eterna. Por nosso Senhor...
            </Text>
          </View>
          <Text className="h3">Postcomúnio</Text>
          <View className="side-by-side">
            <Text className="latin">
              Súmpsimus, Dómine, divína mystéria, sanctórum Angelórum tuórum
              festivitáte lætántes: quǽsumus; ut eórum protectióne ab hóstium
              júgiter liberémur insídiis, et contra ómnia advérsa muniámur. Per
              Dóminum...
            </Text>
            <Text className="vernacular">
              Havendo recebido os divinos mystérios enquanto celebramos com
              júbilo a festa dos vossos Santos Anjos, dignai-Vos permitir, Vos
              suplicamos, que pela sua protecção sejamos sempre livres das
              insídias dos nossos inimigos e de todas as adversidades. Por nosso
              Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
