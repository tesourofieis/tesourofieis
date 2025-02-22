import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageApostolos() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Missa de Todos os S. S. Apóstolos</Text>

          <Text className="aside">
            Tudo como na Missa precedente, excepto o seguinte: Oração, Secreta e
            Postcomúnio como na{" "}
            <Link className="link" href="/missal/santos/10-28">
              Missa S. Simão e S. Judas
            </Link>{" "}
            .
          </Text>

          <Text className="h3">Epístola</Text>

          <Text className="em">Ef. 4, 7-13</Text>

          <View className="side-by-side">
            <Text className="latin">
              Léctio Epístolæ beáti Pauli Apóstoli ad Ephésios.
            </Text>
            <Text className="vernacular">
              Lição da do B. Ap.º Paulo aos Efésios.
            </Text>
            <Text className="latin">
              Fratres: Unicuíque nostrum data est grátia secúndum mensúram
              donatiónis Christi. Propter quod dicit: Ascéndens in altum
              captívam duxit captivitátem: dedit dona homínibus. Quod autem
              ascéndit, quid est, nisi quia et descéndit primum in inferióres
              partes terræ? Qui descéndit, ipse est et qui ascéndit super omnes
              cœlos, ut impléret ómnia. Et ipse dedit quosdam quidem apóstolos,
              quosdam autem prophétas, alios vero vero evangelístas, alios autem
              pastóres, et doctores ad consummatiónem sanctó rum in opus
              ministérii, in ædificatiónem córporis Christi: donec occurrámus
              omnes in unitátem fídei et agnitiónis Fílii Dei, in virum
              perféctum, in mensúram ætatis plenitúdinis Christi.
            </Text>
            <Text className="vernacular">
              Meus irmãos: A graça foi dada a cada um de nós segundo a medida do
              dom de Jesus Cristo. É por isso que a Escritura diz: «Subindo ao
              céu, Ele levou consigo muitos cativos e distribuiu dons pelos
              homens». Mas, porque foi que subiu, senão porque, também, antes
              descera aos lugares mais baixos da terra? Aquele que desceu, foi o
              mesmo que subiu acima de todos os céus, para completar todas as
              coisas. Foi Ele, também, quem destinou uns para apóstolos, outros
              para profetas, estes para evangelistas, aqueles para pastores e
              doutores para a perfeição dos santos, para o trabalho do
              ministério e para a edificação do corpo de Cristo, até que nós
              todos cheguemos à unidade, da fé e do conhecimento do Filho de
              Deus, ao estado da perfeição humana, à medida da plenitude de
              Cristo.
            </Text>
          </View>

          <Text className="h2">Missa de Todos os S. S. Apóstolos</Text>

          <Text className="aside">
            Para Quarta-feira Dentro do Tempo Pascal Tudo como na Missa
            precedente, excepto o seguinte:
          </Text>

          <Text className="h3">Intróito</Text>

          <Text className="em">Sl. 63, 3</Text>

          <View className="side-by-side">
            <Text className="latin">
              Protexísti me, Deus, a convéntu malignántium, allelúja: a
              multitúdine operántium iniquitátem, allelúja, allelúja.{" "}
              <Text className="latin">Ps. ib., 2</Text> Exáudi, Dómine,
              orationem meam, cum déprecor: a timóre inimíci éripe ánimam meam.
              <Text className="versicle"> ℣. </Text>Gloria Patri...
            </Text>
            <Text className="vernacular">
              Ó Deus, livrastes-me da companhia dos maus, aleluia: livrastes-me
              do meio daqueles que procedem com iniquidade. Aleluia, aleluia.{" "}
              <Text className="vernacular">Sl. ib., 2</Text> Senhor, quando eu
              Vos invocar, ouvi a minha oração: livrai a minha alma do temor do
              inimigo.<Text className="versicle"> ℣. </Text>Glória ao Pai...
            </Text>
          </View>

          <Text className="aside">Depois da Epistola:</Text>

          <View className="side-by-side">
            <Text className="latin">
              Allelúja, allelúja.<Text className="versicle"> ℣. </Text>
              <Text className="latin">Ps. 88, 6</Text> Confitebúntur cœli
              mirabília tua, Dómine: étenim veritátem tuam in ecclésia
              sanctórum. Allelúja.<Text className="versicle"> ℣. </Text>
              <Text className="em">Joann. 15, 16</Text> Ego vos elégi de mundo,
              ut eátis, et fructum afferátis, et fructus vester máneat.
              Allelúja.
            </Text>
            <Text className="vernacular">
              Aleluia, aleluia.<Text className="versicle"> ℣. </Text>
              <Text className="vernacular">Sl. 88, 6</Text> Senhor, os céus
              proclamam as vossas maravilhas e a vossa verdade na assembleia dos
              Santos. Aleluia.<Text className="versicle"> ℣. </Text>
              <Text className="em">Jo. 15, 16</Text> Fui Eu quem vos escolheu no
              mundo, a fim de que possais ir (pelo mundo), alcanceis frutos e
              esses frutos permaneçam Aleluia.
            </Text>
          </View>

          <Text className="h3">Ofertório</Text>

          <Text className="em">Sl. 44, 17-18</Text>

          <View className="side-by-side">
            <Text className="latin">
              Constítues eos príncipes super omnem terram: mémores erunt nóminis
              tui, Dómine, in omni progénie et generatióne, allelúja, allelúja.
            </Text>
            <Text className="vernacular">
              Vós os instituístes príncipes em toda a terra: eles se recordarão
              do vosso nome em todas as gerações. Aleluia, aleluia.
            </Text>
          </View>

          <Text className="h3">Comúnio</Text>

          <Text className="em">Sl. 18, 5</Text>

          <View className="side-by-side">
            <Text className="latin">
              In omnem terram exívit sonus eórum: et in fines orbis terræ verba
              eórum, allelúja, allelúja.
            </Text>
            <Text className="vernacular">
              O som da sua voz ecoa por toda a terra, fazendo-se ouvir as suas
              palavras até às extremidades do mundo, aleluia, aleluia.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
