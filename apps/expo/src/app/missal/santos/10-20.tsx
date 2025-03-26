import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";

export default function Page1020() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. João Câncio, Conf., a 20 de Outubro</Text>

          <Text className="h3">Intróito</Text>

          <Text className="em">Sl. 91, 13-14</Text>

          <Language>
            <Text className="latin">
              Miserátio hóminis circa próximum: misericórdia autem Dei super
              omnem carnem. Qui misericórdiam habet, docet et érudit quasi
              pastor gregem suum. <Text className="latin">Ps. 1, 1</Text> Beátus
              vir, qui non ábiit in consílio impiórum, et in via peccatórum non
              stetit, et in cáthedra pestiléntiæ non sedit.
              <Text className="versicle"> ℣. </Text>Gloria Patri...
            </Text>
            <Text className="vernacular">
              A misericórdia do homem exerce-se para com seu próximo; enquanto
              que a misericórdia de Deus espalha-se sobre toda a carne. Aquele
              que possui misericórdia ensina e guia os homens, como um pastor
              guia o seu rebanho. <Text className="vernacular">Sl. 1, 1</Text>{" "}
              Bem-aventurado o homem que não entrou na assembleia dos ímpios,
              nem seguiu os caminhos dos pecadores, nem se assentou na cadeira
              da maldade.<Text className="versicle"> ℣. </Text>Glória ao Pai...
            </Text>
          </Language>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Da, quǽsumus, omnípotens Deus: ut, sancti Joánnis Confessóris
              exémplo in scientia Sanctórum proficiéntes atque áliis
              misericórdiam exhibéntes; ejus méritis, indulgéntiam apud te
              consequámur. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Concedei-nos, ó Deus omnipotente. Vos suplicamos, que, progredindo
              nós na ciência dos Santos e praticando a misericórdia para com o
              próximo, a exemplo do Santo Confessor João, obtenhamos pelos seus
              méritos a vossa indulgência. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Epístola</Text>

          <Text className="em">Tg. 2, 12-17</Text>

          <Language>
            <Text className="latin">
              Léctio Epístolæ beáti Jacóbi Apóstoli.
            </Text>
            <Text className="vernacular">Lição da Ep.ª do B. Ap.º Tiago.</Text>
            <Text className="latin">
              Sic loquímini, et sic fácite sicut per legem libertátis
              incipiéntes judicári. Judícium enim sine misericórdia illi, qui
              non fecit misericórdiam: superexáltat autem misericórdia judícium.
              Quid próderit, fratres mei, si fidem quis dicat se habére, ópera
              autem non hábeat? Numquid poterit fides salváre eum? Si autem
              frater et soror nudi sint, et indígeant victu quotidiáno, dicat
              autem áliquis ex vobis illis: Ite in pace, calefacímini et
              saturámini: non dedéritis autem eis, quæ necessária sunt córpori,
              quid próderit? Sic et fides, si non hábeat ópera, mórtua est in
              semetípsa.
            </Text>
            <Text className="vernacular">
              Falai e procedei como devendo ser julgados pela lei da liberdade;
              pois o juízo de Deus será sem misericórdia para com aquele que não
              houver tido misericórdia; enquanto que a misericórdia triunfará no
              juízo. Meus irmãos: de que serve alguém dizer que tem fé, se não
              possui obras? Porventura poderá esta fé salvá-lo? Ora, se a um
              irmão ou irmã, estando nu e carecendo cada dia de sustento, algum
              de vós disser: «Ide em paz, aquecei-vos e saciai-vos», mas lhe não
              der aquilo que lhe é necessário ao corpo, de que lhe servirão as
              palavras? Assim, se a fé não é acompanhada de obras, está morta
              por si própria.
            </Text>
          </Language>

          <Text className="h3">Gradual</Text>

          <Text className="em">Sl. 106, 8-9</Text>

          <Language>
            <Text className="latin">
              Confiteántur Dómino misericórdiæ ejus: et mirabília ejus fíliis
              hóminum.<Text className="versicle"> ℣. </Text>Quia satiávit ánimam
              inánem: et ánimam esuriéntem satiavit bonis.
            </Text>
            <Text className="vernacular">
              Louvai o Senhor pelas suas misericórdias e pelas suas maravilhas
              em favor dos filhos dos homens.
              <Text className="versicle"> ℣. </Text>Pois Ele saciou a alma vazia
              e encheu de benefícios a alma faminta.
            </Text>
            <Text className="latin">
              Allelúja, allelúja.<Text className="versicle"> ℣. </Text>
              <Text className="latin">Prov. 31, 20</Text> Manum suam apéruit
              ínopi: et palmas suas exténdit ad páuperem. Allelúja.
            </Text>
            <Text className="vernacular">
              Aleluia, aleluia.<Text className="versicle"> ℣. </Text>
              <Text className="vernacular">Pr. 31, 20</Text> Abriu a sua mão
              para o indigente: e estendeu os seus braços para o pobre. Aleluia.
            </Text>
          </Language>

          <Text className="h3">Evangelho</Text>

          <LinkCard
            href="/missal/comum/14confessoresnaopontifices1#evangelho"
            title="Confessores não Pontífices - Missa Os justi"
          />

          <Text className="h3">Ofertório</Text>

          <Text className="em">Jb 29, 14-16</Text>

          <Language>
            <Text className="latin">
              Justítia indútus sum, et vestívi me, sicut vestiménto et
              diadémate, judício meo. Oculus fui cæco et pes claudo: pater eram
              páuperum.
            </Text>
            <Text className="vernacular">
              Revesti-me de justiça, e a equidade dos meus juízos serviu-me como
              que de vestido e de diadema. Tenho sido olhos para o cego e pés
              para o coxo. Tenho sido o pai dos pobres.
            </Text>
          </Language>

          <Text className="h3">Secreta</Text>

          <Language>
            <Text className="latin">
              Has, quǽssumus, Dómine, hóstias sancti Joánnis Confessóris tui
              méritis benígnus assúme: et præsta; ut, te super ómnia et omnes
              propter te diligéntes, corde tibi et ópere placeámus. Per
              Dóminum...
            </Text>
            <Text className="vernacular">
              Aceitai benignamente estas hóstias pelos méritos do vosso Santo
              Confessor João, Vos suplicamos, Senhor, e fazei que, amando-Vos
              sobre todas as coisas e ao próximo por amor de Vós, nos tornemos
              agradáveis a Deus pelos nossos sentimentos e obras. Por nosso
              Senhor...
            </Text>
          </Language>

          <Text className="h3">Comúnio</Text>

          <Text className="em">Lc. 6, 38</Text>

          <Language>
            <Text className="latin">
              Date, et dábitur vobis: mensúram bonam et confértam et coagitátam
              et supereffluéntem dabunt in sinum vestrum.
            </Text>
            <Text className="vernacular">
              Dai e ser-vos-á dado: derramar-se-á no vosso seio uma boa medida,
              cheia, calcada, acogulada e a trasbordar.
            </Text>
          </Language>

          <Text className="h3">Postcomúnio</Text>

          <Language>
            <Text className="latin">
              Pretiósi Córporis et Sánguinis tui, Dómine, pasti delíciis, tuam
              súpplices deprecámur clementiam: ut, sancti Joánnis Confessóris
              tui méritis et exémplis, ejúsdem caritátis imitatóres effécti,
              consórtes simus et glóriæ: Qui vivis et regnas...
            </Text>
            <Text className="vernacular">
              Havendo sido alimentados com as delícias do vosso preciosíssimo
              Corpo e Sangue, Senhor, imploramos humildemente da vossa
              clemência, que, pelos méritos e exemplos do vosso Santo Confessor
              João, nos tornemos imitadores da sua caridade e compartilhemos
              também da sua glória. Ó Vós, que viveis e reinais...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
