import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";

export default function Page0712() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. João Gualberto, Abade, a 12 de Julho</Text>

          <Text className="comment">
            João Gualberto nasceu em Florença, cerca do ano 999. Numa
            Sexta-Feira Santa, escoltado pelos seus homens armados, encontrou,
            só e sem defesa, o assassino de seu irmão. Ia atravessa-lo com a
            lança, quando este, lançando-se a seus pés, implorou-lhe o perdão
            pelo amor de Jesus crucificado. João lembrou-se da palavra de amor
            do Evangelho e o abraçou como a um irmão. Movido por graça ainda
            mais viva, revestiu o hábito monástico e, em breve, legislador como
            Moisés (Ep.) fundou em Val Umbrosa (Toscana) uma nova Ordem, à qual
            deu a regra de S. Bento (Com.) e que ainda hoje floresce, após mais
            de oito séculos de existência. A simonia reinava em toda a parte na
            Itália. Sua firmeza e eloquência baniram essa desordem da Etruria e
            levaram novamente sua pátria à integridade da fé e dos costumes.
            Quando morreu, em 1073, escreveram sobre o seu túmulo: A João
            Gualberto, cidadão de Florença, libertador da Itália.
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/16abades">
              Missa Os justi
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Evangelho</Text>

          <Text className="em">Mt. 5, 48-48</Text>

          <Language>
            <Text className="latin">
              <Text className="cross"> ✠ </Text> Sequéntia sancti Evangélii
              secúndum Matthǽum.
            </Text>
            <Text className="vernacular">
              <Text className="cross"> ✠ </Text> Continuação do santo Evangelho
              segundo S. Mateus.
            </Text>
            <Text className="latin">
              In illo témpore: Dixit Jesus discípulis suis: Audístis, quia
              dictum est: Diliges próximum tuum, et ódio habébis inimícum tuum.
              Ego autem dico vobis: Dilígite inimícos vestros, benefácite his,
              qui odérunt vos, et oráte pro persequéntibus et calumniántibus
              vos, ut sitis fílii Patris vestri, qui in cœlis est: qui solem
              suum oriri facit super bonos et malos, et pluit super justos et
              injústos. Si enim dilígitis eos, qui vos díligunt, quam mercédem
              habébitis? nonne et publicáni hoc fáciunt? Et si salutavéritis
              fratres vestros tantum, quid ámplius tácitis? nonne et éthnici hoc
              fáciunt? Estóte ergo vos perfécti, sicut et Pater vester cœléstis
              perféctus est.
            </Text>
            <Text className="vernacular">
              Naquele tempo, disse Jesus aos seus discípulos: «Aprendestes o que
              vos ensinaram: «amareis o vosso próximo e aborreceis o vosso
              inimigo?». Pois Eu vos digo: amai os vossos inimigos; fazei bem
              àqueles que vos odeiam; rezai pelos que vos perseguem e caluniam,
              a fim de que sejais filhos do vosso Pai, que está nos céus, o qual
              faz nascer o sol para os maus e bons e chover para os justos e
              injustos. Se amais os que vos amam, que recompensa mereceis? Não
              procedem do mesmo modo os publicanos? Se saudais somente os vossos
              irmãos, que fazeis mais do que os outros? Não procedem assim os
              pagãos? Sede, portanto, perfeitos, como o vosso Pai celestial é
              perfeito».
            </Text>
          </Language>

          <Text className="h2">
            Comemoração dos Santos Mártires Nabor e Félix
          </Text>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Præsta, quǽsumus, Dómine: ut, sicut nos sanctórum Martyrum tuórum
              Nabóris et Felícis natalítia celebránda non desérunt; ita júgiter
              suffrágiis comitántur. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Senhor, assim como nós não cessamos de celebrar o natalício dos
              vossos Santos Mártires Nabor e Félix, assim também, Vos
              suplicamos, sejamos sempre socorridos com seus sufrágios. Por
              nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Secreta</Text>

          <Language>
            <Text className="latin">
              Múnera plebis tuæ, quǽsumus, Dómine, sanetórum Mártyrum tuórum
              Nabóris et Felícis fiant grata suffrágiis: et, quorum triúmphis
              tuo nómini offeruntur, ipsorum digna perficiantur et méritis. Per
              Dóminum...
            </Text>
            <Text className="vernacular">
              Dignai-Vos permitir, Senhor, Vos imploramos, que os dons do vosso
              povo Vos sejam agradáveis pelos sufrágios dos vossos Santos Nabor
              e Félix; e, pelos méritos daqueles em cuja honra são oferecidos ao
              vosso nome, fazei que sejam dignos de Vós. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Postcomúnio</Text>

          <Language>
            <Text className="latin">
              Natalítiis Sanctórum tuórum, quǽsumus, Dómine: ut, sacraménti
              múnere vegetáti, bonis, quibus per tuam grátiam nunc fovémur,
              perfruámur ætérnis. Per Dóminum nostrum...
            </Text>
            <Text className="vernacular">
              Fortalecidos com a recepção do sacramento que recebemos neste
              natalício dos vossos Santos, Vos suplicamos, Senhor, permiti que
              gozemos na eternidade aqueles bens com que a vossa graça nos
              favoreceu nesta vida. Por nosso Senhor...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
