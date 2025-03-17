import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";

export default function Page0609() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. S. Primo e Feliciano, Mártires, a 9 de Junho
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/7muitosmartires2">
              Missa Sapiéntiam sanctórum
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Fac nos, quǽsumus. Dómine, sanctórum Martyrum tuórum Primi et
              Feliciáni semper festa sectári: quorum suffrágiis protectiónis tuæ
              dona sentiámus. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Permiti, Senhor, Vos rogamos, que celebremos sempre fielmente a
              festa dos vossos Santos Mártires Primo e Feliciano, a fim de que
              pela sua intercessão sintamos os benefícios da vossa protecção.
              Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Gradual</Text>

          <Text className="em">Sl. 88, 6 & 2</Text>

          <Language>
            <Text className="latin">
              Confitebúntur cœli mirabília tua, Dómine: etenim veritátem tuam in
              ecclésia sanctórum.<Text className="versicle"> ℣. </Text>
              Misericórdias tuas, Dómine, in ætérnum cantábo: in generatióne et
              progénie.
            </Text>
            <Text className="vernacular">
              Que os céus publiquem as vossas maravilhas, Senhor! Que se
              publique também na assembleia dos santos a vossa fidelidade.
              <Text className="versicle"> ℣. </Text>
              Cantarei eternamente as vossas misericórdias, Senhor! Sim, de
              geração em geração eu as cantarei!
            </Text>
            <Text className="latin">
              Allelúja, allelúja.<Text className="versicle"> ℣. </Text>Hæc est
              vera fratérnitas, quæ vicit mundi crímina: Christum secúta est,
              ínclita tenens regna cœléstia. Allelúja.
            </Text>
            <Text className="vernacular">
              Aleluia, aleluia.<Text className="versicle"> ℣. </Text>Esta é a
              verdadeira fraternidade que venceu os crimes do mundo. Ela seguiu
              Cristo, possuindo gloriosamente o reino celestial. Aleluia.
            </Text>
          </Language>

          <Text className="h3">Evangelho</Text>

          <LinkCard
            href="/missal/santos/01-15-1#evangelho"
            title="S. Paulo, 1.º Eremita, Conf."
          />

          <Text className="h3">Ofertório</Text>

          <Text className="em">Sl. 67, 36</Text>

          <Language>
            <Text className="latin">
              Mirábilis Deus in Sanctis suis: Deus Israël, ipse dabit virtútem
              et fortitúdinem plebi suæ: benedíctus Deus, allelúja.
            </Text>
            <Text className="vernacular">
              Deus é admirável em seus santos. É o Deus de Israel quem dá força
              e coragem ao seu povo. Bendito seja Deus, aleluia.
            </Text>
          </Language>

          <Text className="h3">Secreta</Text>

          <Language>
            <Text className="latin">
              Fiat tibi, quǽsumus, Dómine, hóstia sacránda placábilis, pretiósi
              celebritáte martýrii: quæ et peccáta nostra puríficet, et tuórum
              tibi vota concíliet famulórum. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Senhor, que esta hóstia, que vai ser consagrada na celebração
              deste precioso mystério, Vos aplaque; e, Vos suplicamos, que ela
              apague os nossos pecados e Vos torne agradáveis os votos dos
              vossos servos. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Comúnio</Text>

          <Text className="em">Jo. 15, 16</Text>

          <Language>
            <Text className="latin">
              Ego vos elegi de mundo, ut eátis et fructum afferátis: et fructus
              vester máneat.
            </Text>
            <Text className="vernacular">
              Eu vos escolhi no mundo, para que possais ir e alcanceis fruto; e
              que esse fruto permaneça.
            </Text>
          </Language>

          <Text className="h3">Postcomúnio</Text>

          <Language>
            <Text className="latin">
              Quǽsumus, omnípotens Deus: ut sanctórum Mártyrum tuórum Primi et
              Feliciáni cœléstibus mystériis celebráta sollémnitas, indulgéntiam
              nobis tuæ propitiatiónis acquírat. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Ó Deus omnipotente, Vos suplicamos, permiti que estes celestiais
              mystérios, com os quais celebramos a solenidade dos vossos Santos
              Mártires Primo e Feliciano, nos alcancem o perdão da vossa
              misericórdia. Por nosso Senhor...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
