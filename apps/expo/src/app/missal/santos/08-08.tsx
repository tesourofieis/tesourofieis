import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";

export default function Page0808() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Ciríaco e Outros, Mártires, a 8 de Agosto
          </Text>

          <Text className="h3">Intróito</Text>

          <Text className="em">Sl. 33, 10-11</Text>

          <Language>
            <Text className="latin">
              Timéte Dóminum, omnes sancti ejus, quóniam nihil deest timéntibus
              eum: dívites eguérunt et esuriérunt: inquiréntes autem Dóminum non
              defícient omni bono. <Text className="latin">Ps. ib., 2</Text>{" "}
              Benedícam Dóminum in omni témpore: semper laus ejus in ore meo.
              <Text className="versicle"> ℣. </Text>Gloria Patri...
            </Text>
            <Text className="vernacular">
              Temei o Senhor, ó vós, que sois os seus Santos, pois nada falta
              àqueles que O temem. Os ricos sentiram necessidades e tiveram
              fome; porém, àqueles que procuram o Senhor nenhum bem faltará.{" "}
              <Text className="vernacular">Sl. ib., 2</Text> Bendirei o Senhor
              em todo o tempo: sempre estará na minha boca o seu louvor.
              <Text className="versicle"> ℣. </Text>Glória ao Pai...
            </Text>
          </Language>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Deus, qui nos ánnua sanctórum Mártyrum tuórum Cyriáci, Largi et
              Smarágdi sollemnitáte lætíficas: concéde propítius; ut, quorum
              natalítia cólimus, virtútem quoque passiónis imitémur. Per
              Dóminum...
            </Text>
            <Text className="vernacular">
              Ó Deus, que nos alegrais com a festa anual dos vossos Santos
              Mártires Ciríaco, Largo e Esmaragdo, concedei-nos propício que,
              honrando o seu nascimento no céu, imitemos também a coragem do seu
              martírio. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Epístola</Text>

          <Text className="em">1 Ts. 2, 13-16</Text>

          <Language>
            <Text className="latin">
              Léctio Epístolæ beáti Pauli Apóstoli ad Thessalonicénses.
            </Text>
            <Text className="vernacular">
              Lição da Ep.ª do B. Ap.º Paulo aos Tessalonicenses.
            </Text>
            <Text className="latin">
              Fratres: Grátias ágimus Deo sine intermissióne: quóniam, cum
              accepissétis a nobis verbum audítus Dei, accepístis illud, non ut
              verbum hóminum, sed (sicut est vere) verbum Dei, qui operátur in
              vobis, qui credidístis. Vos enim imitatóres facti estis, fratres,
              ecclesiárum Dei, quæ sunt in Judǽa in Christo Jesu: quia éadem
              passi estis et vos a contribúlibus vestris, sicut et ipsi a
              Judǽis: qui et Dóminum occidérunt Jesum et Prophétas: et nos
              persecúti sunt, et Deo non placent, et ómnibus homínibus
              adversántur, prohibéntes nos géntibus loqui, ut salvæ fiant, ut
              ímpleant peccáta sua semper: pervénit enim ira Dei super illos
              usque in finem.
            </Text>
            <Text className="vernacular">
              Meus irmãos: Rendemos a Deus incessantes acções de graças, porque,
              quando ouvistes a palavra de Deus, pregada por nós, recebeste-la,
              não como palavra de homens, mas como palavra de Deus (e,
              realmente, ela o é) , agindo em vós que sois crentes. Com efeito,
              irmãos, tornastes-vos imitadores das igrejas de Deus que, em união
              com Jesus Cristo, há na Judeia; pois sofrestes dos vossos próprios
              compatriotas as mesmas perseguições que as igrejas sofreram dos
              judeus, que chegaram até a dar a morte ao Senhor Jesus e aos
              Profetas e nos perseguiram também. Eles não agradam a Deus e são
              inimigos de todos os homens, proibindo-nos de anunciar aos povos a
              palavra da salvação. Deste modo aumentam sempre a medida dos seus
              pecados; mas a ira do Senhor caiu já sobre eles e permanecerá até
              à consumação dos séculos.
            </Text>
          </Language>

          <Text className="h3">Gradual</Text>

          <Text className="em">Sl. 33, 10 & 11</Text>

          <Language>
            <Text className="latin">
              Timéte Dóminum, omnes sancti ejus: quóniam nihil deest timéntibus
              eum.<Text className="versicle"> ℣. </Text>Inquiréntes autem
              Dóminum, non defícient omni bono.
            </Text>
            <Text className="vernacular">
              Temei o Senhor, ó vós, que sois os seus Santos, pois nada falta
              àqueles que procuram o Senhor.
              <Text className="versicle"> ℣. </Text>
              Os ricos sentiram necessidades e tiveram fome; porém, àqueles que
              procuram o Senhor nenhum bem faltará.
            </Text>
            <Text className="latin">
              Allelúja, allelúja.<Text className="versicle"> ℣. </Text>
              <Text className="latin">Sap. 3, 7</Text> Fulgébunt justi, et
              tamquam scintíllæ in arundinéto current in ætérnum. Allelúja.
            </Text>
            <Text className="vernacular">
              Aleluia, aleluia.<Text className="versicle"> ℣. </Text>
              <Text className="vernacular">Sb. 3, 7</Text> Os justos brilharão;
              e, como as faíscas de fogo em um canavial, espalhar-se-ão
              perpetuamente. Aleluia.
            </Text>
          </Language>

          <Text className="h3">Evangelho</Text>

          <LinkCard
            href="/missal/santos/10martires12-03#evangelho"
            title="S. Francisco Xavier, Confessor"
          />

          <Text className="h3">Ofertório</Text>

          <LinkCard
            href="/missal/comum/10martires#ofertório"
            title="Mártires - Missa Sancti tui"
          />

          <Text className="h3">Secreta</Text>

          <Language>
            <Text className="latin">
              Accépta sit in conspéctu tuo, Dómine, nostra devótio: et eórum
              nobis fiat supplicatióne salutáris, pro quorum sollemnitáte
              defértur. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Seja recebida na vossa presença, Senhor, esta nossa devota oferta;
              e fazei que, pela súplica daqueles em cuja honra Vo-la
              apresentamos, ela nos seja salutar. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Comúnio</Text>

          <Text className="em">Mc. 16, 17 & 18</Text>

          <Language>
            <Text className="latin">
              Signa autem eos, qui in me credunt, hæc sequéntur: dæmónia
              ejícient: super ægros manus impónent, et bene habébunt.
            </Text>
            <Text className="vernacular">
              Eis os milagres que acompanharão aqueles que acreditarem em mim:
              expulsarão os demónios; imporão as mãos sobre os enfermos, que
              serão curados.
            </Text>
          </Language>

          <Text className="h3">Postcomúnio</Text>

          <Language>
            <Text className="latin">
              Refécti participatióne múneris sacri, quǽsumus, Dómine, Deus
              noster: ut, cujus exséquimur cultum, intercedéntibus sanctis
              Martýribus tuis Cyríaco, Largo et Smarágdo, sentiámus efféctum.
              Per Dóminum...
            </Text>
            <Text className="vernacular">
              Saciados com a participação do Sacrossanto dom, Vos suplicamos,
              Senhor, permiti que pela intercessão dos vossos Santos Mártires
              Ciríaco, Largo e Esmaragdo sintamos o efeito do mystério que
              celebramos. Por nosso Senhor...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
