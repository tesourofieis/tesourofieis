import { Link } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";
import NuncDimittis from "./../../canticos/sacros/nuncdimittis";
import TeLucis from "./../../canticos/sacros/telucis";
import ActoCaridade from "./../oracoes/actocaridade";
import ActoContricao from "./../oracoes/actocontricao";
import ActoEsperanca from "./../oracoes/actoesperanca";
import ActoFe from "./../oracoes/actofe";

export default function PageOracaonoite() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Oração da Noite</Text>
          <Language>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Convérte nos, Deus,
              salutáris noster.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Convertei-nos, ó Deus nosso
              Salvador.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Et avérte iram tuam a
              nobis.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> E afastai de nós a vossa
              ira.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Deus, in adjutórium meum
              inténde.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Deus, vinde em nosso
              auxílio.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Dómine, ad adjuvándum me
              festína.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Senhor, socorrei-nos e
              salvai-nos.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Glória Patri, et Fílio, et
              Spirítui Sancto.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Glória ao Pai, e ao Filho e
              ao Espírito Santo.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Sicut erat in princípio, et
              nunc, et semper, et in sǽcula sæculórum. Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Assim como era no
              princípio, agora e sempre, e por todos os séculos dos séculos.
              Amen.
            </Text>
          </Language>
          <Text className="h2">Veni, Sancte Spíritus</Text>
          <Language>
            <Text className="latin">
              Veni, Sancte Spíritus! reple tuórum corda fidélium: et tui amóris
              in eis ignem accénde.
            </Text>
            <Text className="vernacular">
              Vinde, ó Espírito Santo, enchei os corações dos vossos fiéis e
              acendei neles o fogo do vosso amor.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Emitte Spíritum tuum, et
              creabúntur.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Enviai o vosso Espírito e
              tudo será criado.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Et renovábis faciem terræ.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> E renovareis a face da
              terra.
            </Text>
          </Language>
          <Text className="h3">Breve lição:</Text>
          <Text className="text-base">
            Sede sóbrios e vigilantes, pois o demónio gira em torno de vós,
            procurando devorar-vos. Resisti-lhe, sendo fortes na fé. E Vós,
            Senhor, tende piedade de nós.
          </Text>
          <Text className="aside">
            Coloquemo-nos na presença de Deus e adoremo-Lo humildemente:
          </Text>
          <Text className="text-base">
            Deus meu, Senhor dos céus e da terra! Eu aqui me prostro diante de
            Vós. Com todos os Anjos e Santos eu Vos adoro e Vos amo com todo o
            coração. Dou-Vos graças por me terdes criado, feito Cristão e
            conservado neste dia. Perdoai-me os pecados que hoje cometi e, se
            algum bem fiz, aceitai-o. Guardai-me durante o repouso e livrai-me
            dos perigos. Vossa graça esteja sempre comigo e com os que me são
            caros.
          </Text>
          <Text className="aside">
            <Text className="text-base">Em seguida rezar:</Text>
            <Link className="link" href="/devocionario/oracoes/painosso">
              Pai Nosso,
            </Link>{" "}
            <Link className="link" href="/devocionario/oracoes/avemaria">
              Ave Maria,
            </Link>{" "}
            <Link className="link" href="/devocionario/oracoes/gloria">
              Glória,
            </Link>{" "}
            <Link
              className="link"
              href="/devocionario/oracoes/simboloapostolos"
            >
              Símbolo dos Apóstolos,
            </Link>{" "}
            <Link className="link" href="/devocionario/oracoes/confesso">
              Confesso
            </Link>{" "}
            . Depois o Hino:
          </Text>
          <Text className="h2">Hino Te lucis</Text>
          <TeLucis />
          <Text className="aside">
            Examina que pecados cometeste neste dia, por pensamentos, palavras,
            actos ou omissões. Depois diz o Acto de Fé, de Esperança, de
            Caridade e de Contrição.
          </Text>
          <Text className="h2">Acto de Fé</Text>
          <ActoFe />
          <Text className="h2">Acto de Esperança</Text>
          <ActoEsperanca />
          <Text className="h2">Acto de Caridade</Text>
          <ActoCaridade />
          <Text className="h2">Acto de Contrição</Text>
          <ActoContricao />
          <Text className="text-base">
            Vos ofereço, Senhor minha vida, obras, e trabalhos em satisfação de
            todos meus pecados e assim como Vos suplico, assim confio em vossa
            bondade e misericórdia infinitas que mos perdoareis pelos méritos de
            vosso preciosíssimo sangue, paixão e morte e me dareis graça para
            emendar-me e perseverar em vosso santo serviço até o fim de minha
            vida. Amen.
          </Text>
          <Text className="h2">Cântico Nunc Dimittis</Text>
          <NuncDimittis />
          <Text className="text-base">
            Visitai esta morada, Senhor, Vos suplicamos, e dignai-Vos afastar
            para bem longe dela todas as insídias do inimigo; que os vossos
            Anjos nela habitem para nos conservarem na paz, e que a vossa bênção
            nos guarde sempre. Deus Pai, abençoai-nos; Jesus Cristo, defendei e
            guardai-nos; Espírito Santo, iluminai e santificai-nos esta noite e
            para sempre; e às almas dos fiéis falecidos, dai-lhes, Senhor, o
            eterno descanso entre os esplendores da luz eterna. Que descansem em
            paz. Santo Anjo do Senhor, meu zeloso guardador, pois que a ti me
            confiou a Piedade divina: hoje e sempre me governa, rege, guarda e
            ilumina. Protegei-me à sombra das vossas asas e abençoai, Senhor, o
            meu repouso a fim de que renove as minhas forças, para melhor Vos
            servir e amar.
          </Text>
          <Text className="text-base">
            E que a paz e a bênção de Deus Todo-Poderoso, Pai, Filho
            <Text className="cross"> ✠ </Text> e Espírito Santo, desça sobre nós
            e permaneça para sempre connosco. Amen.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
