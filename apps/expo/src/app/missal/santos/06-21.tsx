import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page0621() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Luís Gonzaga, Conf., a 21 de Junho</Text>

          <Text className="h3">Intróito</Text>

          <Text className="em">Sl. 8, 6</Text>

          <View className="side-by-side">
            <Text className="latin">
              Minuísti eum paulo minus ab Angelis: glória et honóre coronásti
              eum. <Text className="latin">Ps. 148, 2</Text> Laudáte Dóminum,
              omnes Angeli ejus: laudáte eum, omnes virtútes ejus.
              <Text className="versicle"> ℣. </Text>
              Gloria Patri...
            </Text>
            <Text className="vernacular">
              Vós o criastes um pouco abaixo dos Anjos: Vós o coroastes com
              honra e glória. <Text className="vernacular">Sl. 148, 2</Text> Que
              todos os Anjos do Senhor louvem o Senhor; que todos os exércitos
              do Senhor louvem o Senhor.<Text className="versicle"> ℣. </Text>
              Glória ao Pai...
            </Text>
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="latin">
              Cœléstium donórum distribútor, Deus, qui in angélico júvene
              Aloísio miram vitæ innocéntiam pari cum pœniténtia sociásti: ejus
              méritis et précibus concéde; ut, innocéntem non secúti, pœniténtem
              imitémur. Per Dóminum nostrum...
            </Text>
            <Text className="vernacular">
              Ó Deus, distribuidor dos dons celestiais, que reunistes no
              angélico jovem Luís uma brilhante inocência de vida com uma não
              menos admirável penitência, concedei-nos pelos seus méritos e
              preces que o imitemos na penitência, já que o não acompanhamos na
              inocência. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Epístola</Text>

          <LinkCard
            href="/missal/comum/14confessoresnaopontifices1#epístola"
            title="Confessores não Pontífices - Missa Os justi"
          />

          <Text className="h3">Gradual</Text>

          <Text className="em">Sl. 70, 5-6</Text>

          <View className="side-by-side">
            <Text className="latin">
              Dómine, spes mea: in te confirmátus sum ex útero: de ventre matris
              meæ tu es protéctor meus.<Text className="versicle"> ℣. </Text>
              <Text className="latin">Ps. 40, 13</Text> Me autem propter
              innocéntiam suscepísti: et confirmásti me in conspéctu tuo in
              ætérnum.
            </Text>
            <Text className="vernacular">
              Desde a minha juventude, Senhor, sois a minha esperança; desde o
              meu nascimento fiquei ligado a Vós; e desde o seio de minha mãe
              sois o meu protector.<Text className="versicle"> ℣. </Text>
              <Text className="vernacular">Sl. 40, 13</Text> Acolhestes-me por
              causa da minha inocência: e quisestes que ficasse sempre na vossa
              presença.
            </Text>
            <Text className="latin">
              Allelúja, allelúja.<Text className="versicle"> ℣. </Text>
              <Text className="latin">Ps. 64, 5</Text> Beátus, quem elegísti et
              assumpsísti: inhabitábit in átriis tuis. Allelúja.
            </Text>
            <Text className="vernacular">
              Aleluia, aleluia.<Text className="versicle"> ℣. </Text>
              <Text className="vernacular">Sl. 64, 5</Text> Bem-aventurado
              aquele que escolhestes e chamastes para junto de Vós, pois
              habitará nos átrios do Senhor. Aleluia.
            </Text>
          </View>

          <Text className="h3">Evangelho</Text>

          <Text className="em">Mt. 22, 28-40</Text>

          <View className="side-by-side">
            <Text className="latin">
              <Text className="cross"> ✠ </Text> Sequéntia sancti Evangélii
              secúndum Matthǽum.
            </Text>
            <Text className="vernacular">
              <Text className="cross"> ✠ </Text> Continuação do santo Evangelho
              segundo S. Mateus.
            </Text>
            <Text className="latin">
              In illo témpore: Respóndens Jesus, ait sadducǽis: Errátis,
              nesciéntes Scriptúras neque virtútem Dei. In resurrectióne enim
              neque nubent neque nubéntur: sed erunt sicut Angeli Dei in cœlo.
              De resurrectióne autem mortuórum non legístis, quod dictum est a
              Deo dicénte vobis: Ego sum Deus Abraham et Deus Isaac et Deus
              Jacob? Non est Deus mortuórum, sed vivéntium. Et audiéntes turbæ,
              mirabántur in doctrína ejus. Pharisǽi autem audiéntes, quod
              siléntium imposuísset sadducǽis, convenérunt in unum: et
              interrogávit eum unus ex eis legis doctor, tentans eum: Magíster,
              quod est mandátum magnum in lege? Ait illi Jesus: Díliges Dóminum,
              Deum tuum, ex toto corde tuo, et in tota ánima tua, et in tota
              mente tua. Hoc est máximum et primum mandátum. Secúndum autem
              símile est huic: Díliges próximum tuum, sicut teípsum. In his
              duóbus mandátis univérsa lex pendet et Prophétæ.
            </Text>
            <Text className="vernacular">
              Naquele tempo, respondendo Jesus aos saduceus, disse-lhes: «Estais
              no erro e não compreendeis nem as Escrituras, nem o poder de Deus;
              pois após a ressurreição os homens se não ligarão a mulheres, nem
              as mulheres tomarão maridos; mas serão como os Anjos de Deus no
              céu. Acerca da ressurreição dos mortos, não lestes o que está
              escrito quando Deus vos disse: «Eu son o Deus de Abraão, o Deus de
              Isaque e de Jacob? Deus não é dos mortos, mas dos vivos». E as
              turbas, que o escutavam, estavam admiradas da sua doutrina. Porém
              os fariseus, ouvindo dizer que Ele fizera calar os saduceus,
              reuniram-se em conselho; e um deles, que era doutor da Lei,
              fez-lhe esta interrogação para O tentar: «Mestre, qual é o maior
              mandamento da Lei?». Jesus disse-lhe: «Amarás o Senhor, teu Deus,
              com todo teu coração, com toda tua alma e com todo teu
              entendimento. Este é o maior e o primeiro mandamento. Porém, há um
              segundo, igual a este, qual é: amarás o teu próximo como a ti
              mesmo. Nestes dois mandamentos se encerram toda a Lei e os
              Profetas».
            </Text>
          </View>

          <Text className="h3">Ofertório</Text>

          <Text className="em">Sl. 23, 3-4</Text>

          <View className="side-by-side">
            <Text className="latin">
              Quis ascéndet in montem Dómini, aut quis stabit in loco sancto
              ejus? Innocens mánibus, et mundo corde.
            </Text>
            <Text className="vernacular">
              Quem ascenderá à montanha do Senhor? Quem permanecerá no seu lugar
              sagrado? Aqueles cujas mãos são inocentes e cujo coração é puro.
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="latin">
              Cœlésti convívio fac nos, Dómine, nuptiáli veste indútos
              accúmbere: quam beáti Aloísii pia præparátio et juges lácrimæ
              inæstimabílibus ornábant margarítis. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Para que sejamos admitidos ao celestial banquete, concedei-nos,
              Senhor, que sejamos revestidos com a veste nupcial que o B. Luís,
              com suas fervorosas disposições e lágrimas contínuas, ornava de
              pérolas preciosas. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Comúnio</Text>

          <Text className="em">Sl. 77, 24-25</Text>

          <View className="side-by-side">
            <Text className="latin">
              Panem cœli dedit eis: panem Angelórum manducávit homo.
            </Text>
            <Text className="vernacular">
              Deu-lhe o pão do céu: o homem comeu o pão dos Anjos.
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="latin">
              Angelórum esca nutrítos, angélicis étiam, Dómine, da móribus
              vívere: et ejus, quem hódie cólimus, exémplo in gratiárum semper
              actióne manére. Per Dóminum nostrum...
            </Text>
            <Text className="vernacular">
              Havendo nós sido alimentados com o Pão dos Anjos, concedei-nos,
              Senhor, que vivamos também como os Anjos, e, imitando o exemplo
              daquele que festejamos hoje, vivamos apresentando-Vos sempre a
              nossa acção de graças. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
