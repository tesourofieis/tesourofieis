import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page0328() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. João Capistrano, Conf., a 28 de Março</Text>

          <Text className="h3">Intróito</Text>

          <Text className="em">Hab. 3, 18-19</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Ego autem in Dómino gaudébo: et exsultábo in Deo, Jesu meo: Deus
              Dóminus fortitúdo mea. (T. P. Allelúja, allelúja.){" "}
              <Text className="text-base latin">Ps. 80, 2</Text> Exsultáte Deo,
              adjutóri nostro, jubiláte Deo Jacob. ℣. Gloria Patri...
            </Text>
            <Text className="text-base vernacular">
              Alegrar-me-ei no Senhor; rejubilarei em Deus, meu Salvador. O
              Senhor, meu Deus, é a minha fortaleza. (T. P. Aleluia, aleluia.){" "}
              <Text className="text-base vernacular">Sl. 80, 2</Text> Exultai de
              alegria, louvando Deus, que é o nosso sustentáculo: aclamai com
              júbilo Deus de Jacob. ℣. Glória ao Pai...
            </Text>
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, qui per beátum Joánnem fidéles tuos in virtúte sanctíssimi
              nóminis Jesu de Crucis inimícis triumpháre fecísti: præsta,
              quǽsumus; ut, spirituálium hóstium, ejus intercessióne, superátis
              insídiis, corónam justítiæ a te accípere mereámur. Per eúndem
              Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, que pelo B. João permitistes que os vossos fiéis, graças à
              virtude do Santíssimo Nome de Jesus, triunfassem dos inimigos da
              Cruz, concedei-nos, Vos suplicamos, que, havendo resistido por sua
              intercessão às tentações dos inimigos, mereçamos receber de vossas
              mãos a coroa de justiça. Pelo mesmo nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Epístola</Text>

          <LinkCard
            href="/missal/comum/4martirnaopontifice1#epístola"
            title="Mártir não Pontífice - Missa In virtúte tua"
          />

          <Text className="h3">Gradual</Text>

          <Text className="em">Sl. 21, 24-25</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Qui timétis Dóminum, laudáte eum: univérsum semen Jacob,
              glorificáte eum. ℣. Timeat eum omne semen Israël: quóniam non
              sprevit, neque despéxit deprecatiónem páuperis.
            </Text>
            <Text className="text-base vernacular">
              Ó vós, que temeis o Senhor, louvai-O! Vós todos, que sois
              descendentes de Jacob, glorificai-O! ℣. Tema-O toda a geração de
              Israel: pois não desprezou, nem desdenhou a oração do pobre.
            </Text>
          </View>

          <Text className="h3">Trato</Text>

          <Text className="em">Ex. 15, 2 & 3</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Fortitúdo mea et laus mea Dóminus, et factus est mihi in salútem:
              iste Deus meus, et glorificábo eum. ℣. Dóminus quasi vir pugnátor,
              omnípotens nomen ejus. ℣.{" "}
              <Text className="text-base latin">Judith 16, 3</Text> Dóminus
              cónterens bella: Dóminus nomen est illi.
            </Text>
            <Text className="text-base vernacular">
              O Senhor é a minha fortaleza e o objecto dos meus louvores. Foi
              Ele, que é o meu Deus, quem me salvou: eu O glorificarei. ℣. O
              Senhor mostrou-se um guerreiro invencível: o seu nome é
              omnipotente. ℣.{" "}
              <Text className="text-base vernacular">Jdt. 16, 3</Text> O Senhor
              é o vencedor das batalhas. Senhor é o seu nome!
            </Text>
          </View>

          <Text className="aside">
            No Tempo Pascal omite-se o Gradual e o Trato, e diz-se:
          </Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Allelúja, allelúja. ℣.{" "}
              <Text className="text-base latin">Ps. 58, 17</Text> Ego autem
              cantábo fortitúdinem tuam: et exsultábo mane misericórdiam tuam.
              Allelúja. ℣. Quia factus es suscéptor meus, et refúgium meum in
              die tribulatiónis meæ. Allelúja.
            </Text>
            <Text className="text-base vernacular">
              Aleluia, aleluia. ℣.{" "}
              <Text className="text-base vernacular">Sl. 58, 17</Text> Eu,
              porém, cantarei a vossa fortaleza e regozijar-me-ei desde manhã
              com vossa misericórdia. Aleluia. ℣. Pois fostes o meu protector e
              o meu refúgio no dia da minha tribulação. Aleluia.
            </Text>
          </View>

          <Text className="h3">Evangelho</Text>

          <LinkCard
            href="/missal/pentecostes/pasc7-4#evangelho"
            title="Quinta-feira de Pentecostes - Estação em S. Lourenço fora de Muros"
          />

          <Text className="h3">Ofertório</Text>

          <Text className="em">Ecl. 46, 6</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Invocávit Altíssimum poténtem in oppugnándo inimícos úndique, et
              audívit illum magnus et sanctus Deus.
            </Text>
            <Text className="text-base vernacular">
              Invocou o Omnipotente, o Altíssimo, quando os inimigos o atacaram
              por todos os lados: e Deus, infinito e santo, escutou-o.
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Sacrifícium, Dómine, quod immolámus, placátus inténde: ut,
              intercedénte beáto Joánne Confessóre tuo, ad conteréndas
              inimicórum insídias nos in tuæ protectiónis securitáte constítuat.
              Per Dóminum nostrum...
            </Text>
            <Text className="text-base vernacular">
              Olhai aplacado, Senhor, para esta vítima, que imolamos em vossa
              honra, a fim de que por intercessão do B. João, vosso Confessor,
              nos acolha com segurança, e sob a vossa protecção possamos repelir
              as insídias dos inimigos. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Comúnio</Text>

          <Text className="em">Sb. 10, 20</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Decantavérunt, Dómine, nomen sanctum tuum, et victrícem manum tuam
              laudavérunt.
            </Text>
            <Text className="text-base vernacular">
              Celebraram com seus cânticos o vosso santo nome, ó Senhor, e
              louvaram a vossa mão vitoriosa.
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Repléti alimónia cœlésti et spirituáli pópulo recreáti, quǽsumus,
              omnípotens Deus: ut, intercedénte beáto Joánne Confessóre tuo, nos
              ab hoste malígno deféndas, et Ecclésiam tuam perpétua pace
              custódias. Per Dóminum nostrum...
            </Text>
            <Text className="text-base vernacular">
              Saciados com o alimento celestial e fortalecidos com a bebida
              espiritual, Vos pedimos, ó Deus omnipotente, por intercessão do B.
              João, vosso Confessor, defendei-nos contra o inimigo maligno e
              conservai a vossa Igreja em contínua paz. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
