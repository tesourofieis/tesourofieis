import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageSantacruz() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Missa de Santa Cruz</Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/santos/09-14">
              Missa da Exaltação da Santa Cruz
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, qui unigéniti Fílii tui pretióso sanguine vivíficæ Crucis
              vexíllum sanctificáre voluísti: concéde, quǽsumus; eos, qui
              ejusdem sanctæ Crucis gaudent honóre, tua quoque ubíque
              protectióne gaudére. Per eúndem Dóminum nostrum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, que pelo precioso Sangue do vosso Filho Unigénito
              quisestes santificar o estandarte vivificante da Cruz, Vos
              pedimos, concedei àqueles que se regozijam, honrando esta mesma
              santa Cruz, que gozem sempre e em todos os lugares a vossa
              protecção. Pelo mesmo...
            </Text>
          </View>

          <Text className="aside">
            No Tempo Pascal em vez da Oração Precedente diz-se a seguinte:
          </Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, qui pro nobis Fílium tuum Crucis patíbulum subíre voluísti,
              ut inimíci a nobis expélleres potestátem: concéde nobis, fámulis
              tuis; ut resurrectiónis grátiam consequámur. Per eúndem Dóminum
              nostrum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, que quisestes que o vosso Filho sofresse o suplício da
              Cruz para nos livrar do poder do inimigo, concedei aos vossos
              servos que alcancem a graça de tomar parte na sua ressurreição.
              Pelo mesmo nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Epístola</Text>

          <Text className="em">Fl. 2, 8-11</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Léctio Epístolæ beáti Pauli Apóstoli ad Philippénses.
            </Text>
            <Text className="text-base vernacular">
              Lição da Ep.ª do B. Ap.º Paulo aos Filipenses.
            </Text>
            <Text className="text-base latin">
              Fratres: Christus factus est pro nobis obǿdiens usque ad mortem,
              mortem autem crucis. Propter quod et Deus exaltávit illum, et
              donávit illi nomen, quod est super omne nomen:{" "}
              <Text className="text-base latin">hic genuflectitur</Text> ut in
              nómine Jesu omne genu flectátur cœléstium, terréstrium et
              infernórum, et omnis lingua confiteátur, quia Dóminus Jesus
              Christus in glória est Dei Patris.
            </Text>
            <Text className="text-base vernacular">
              Meus irmãos: Cristo, por causa de nós, tornou-se obediente até à
              morte, e morte na cruz. Eis porque Deus o exaltou e lhe deu um
              nome que é superior a todos os outros.{" "}
              <Text className="text-base vernacular">Genuflecte-se</Text> De
              sorte que ao ser pronunciado o nome de Jesus todos os joelhos se
              devem dobrar no céu, na terra e nos infernos: e todas as línguas
              devem confessar que o senhor Jesus está na glória de Deus Pai.
            </Text>
          </View>

          <Text className="aside">
            Depois da Septuagésima omite-se o Aleluia e o Verso que se segue, e
            diz-se o:
          </Text>

          <Text className="h3">Trato</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Adorámus te, Christe, et benedícimus tibi: quia per Crucem tuam
              redemísti mundum. ℣. Tuam Crucem adorámus, Dómine, tuam gloriósam
              recólimus passiónem: miserére nostri, qui passus es pro nobis. ℣.
              O Crux benedícta, quæ sola fuisti digna portáre Regem cœlórum et
              Dóminum.
            </Text>
            <Text className="text-base vernacular">
              Vos adoramos e bendizemos, ó Cristo, porque salvastes o mundo pela
              vossa santa Cruz. ℣. Adoramos a vossa Cruz, Senhor, e honramos a
              vossa gloriosa paixão. O Vós, que sofrestes por nós,
              compadecei-Vos de nós. ℣. Ó Cruz bendita, só tu foste digna de
              sustentar o Senhor, que é o Rei dos céus.
            </Text>
          </View>

          <Text className="aside">
            No Tempo Pascal omite-se o Gradual o Trato, e diz-se:
          </Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Allelúja, allelúja. ℣.{" "}
              <Text className="text-base latin">Ps. 95, 10</Text> Dícite in
              géntibus, quia Dóminus regnávit a ligno. Allelúja. ℣. Dulce
              lignum, dulces clavos, dúlcia ferens póndera: quæ sola fuísti
              digna sustinére Regem cœlórum et Dóminum. Allelúja.
            </Text>
            <Text className="text-base vernacular">
              Aleluia, aleluia. ℣.{" "}
              <Text className="text-base vernacular">Sl. 95, 10</Text> Anunciai
              aos povos que Deus reinou pela Cruz. Aleluia. ℣. Ó lenho querido,
              que, preso aos benditos cravos, suportaste o doce fardo! Só tu
              foste digno de sustentar o Senhor, que é o Rei dos céus. Aleluia.
            </Text>
          </View>

          <Text className="h3">Evangelho</Text>

          <Text className="em">Mt. 20, 17-19</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              <Text className="text-base latin">✠</Text> Sequéntia sancti
              Evangélii secúndum Matthǽum.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">✠</Text> Continuação do
              santo Evangelho segundo S. Mateus.
            </Text>
            <Text className="text-base latin">
              In illo témpore: Assúmpsit Jesus duódecim discípulos secréto, et
              ait illis: Ecce, ascéndimus Jerosólymam, et Fílius hóminis
              tradétur princípibus sacerdótum et scribis, et condemnábunt eum
              morte, et tradent eum Géntibus ad illudéndum, et flagellándum, et
              crucifigéndum, et tértia die resúrget.
            </Text>
            <Text className="text-base vernacular">
              Naquele tempo, subindo Jesus para Jerusalém, chamou de parte os
              seus doze discípulos e disse-lhes: «Eis que subimos; e aí o Filho
              do homem será entregue aos príncipes dos sacerdotes e aos
              escribas, que O condenarão à morte e O entregarão aos pagãos para
              zombarem d’Ele, e depois será flagelado e crucificado; porém ao
              terceiro dia ressuscitará».
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Hæc oblátio, Dómine, quǽsumus, ab ómnibus nos purget offénsis: quæ
              in ara Crucis étiam totíus mundi tulit offénsam. Per eúndem
              Dóminum nostrum...
            </Text>
            <Text className="text-base vernacular">
              Senhor, Vos suplicamos, que esta oblação, que no altar da Cruz
              apagou os pecados do universo, nos purifique dos nossos pecados.
              Pelo mesmo...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
