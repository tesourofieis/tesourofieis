import { Text, View } from "react-native";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";
import { H1, H3 } from "~/components/Headings";


export default function Page10Martires() {
  return (
    <PageWrapper>
      <H1 text="Mártires" />

      <H3 text="Intróito" />

      <Text className="em">Sl. 144, 10-11</Text>

      <Language>
        <Text className="latin">
          Sancti tui, Dómine, benedícent te: glóriam regni tui dicent, allelúja,
          allelúja. <Text className="latin">Ps. ibid., 1</Text> Exaltábo te,
          Deus meus, Rex: et benedícam nómini tuo in sǽculum, et in sǽculum
          sǽculi.<Text className="versicle"> ℣. </Text>Gloria Patri...
        </Text>
        <Text className="vernacular">
          Que os vossos Santos Vos bendigam, Senhor: e publiquem a glória do
          vosso reino. Aleluia, aleluia.{" "}
          <Text className="vernacular">Sl. ibid., 1</Text> Exaltarei a vossa
          glória, ó Deus, o meu Rei: e abençoarei o vosso Nome agora, sempre e
          em todos os séculos!<Text className="versicle"> ℣. </Text>Glória ao
          Pai...
        </Text>
      </Language>

      <H3 text="Oração" />

      <LinkCard
        title="Oração Muitos Mártires"
        href="/missal/comum/6muitosmartires1#oração"
      />

      <H3 text="Epístola" />

      <Text className="em">1 Pe. 1, 3-7</Text>

      <Language>
        <Text className="latin">Léctio Epístolæ beáti Petri.</Text>
        <Text className="vernacular">Lição da Ep.ª do B. Ap.º Pedro.</Text>
        <Text className="latin">
          Benedíctus Deus et Pater Dómini nostri Jesu Christi, qui secúndum
          misericórdiam suam magnam regenerávit nos in spem vivam, per
          resurrectiónem Jesu Christi ex mórtuis, in hereditátem incorruptíbilem
          et incontaminátam et immarcescíbilem, conservátam in cœlis in vobis,
          qui in virtúte Dei custodímini per fidem in salútem, parátam revelári
          in témpore novíssimo. In quo exsultábitis, módicum nunc si opórtet
          contristári in váriis tentatiónibus: ut probátio vestræ fídei multo
          pretiósior auro (quod per ignem probátur) inveniátur in laudem et
          glóriam et honórem, in revelatióne Jesu Christi, Dómini nostri.
        </Text>
        <Text className="vernacular">
          Bendito seja Deus, Pai de N. S. Jesus Cristo, que, segundo a grandeza
          da sua misericórdia, nos regenerou para uma esperança viva pela
          ressurreição dos mortos de Jesus Cristo, para alcançarmos a herança
          incorruptível, inalterável e imortal que está reservada nos céus para
          vós, a quem o poder de Deus guarda pela fé, para vos conceder o gozo
          da salvação, que será manifestada no fim dos tempos. Alegrai-vos com
          isto, ainda que devais ser perseguidos algumas vezes com diversas
          provações, a fim de que a manifestação da vossa fé, mais preciosa que
          o ouro (que é provado pelo fogo), seja julgada digna de louvor, honra
          e glória na revelação de N. S. Jesus Cristo.
        </Text>
      </Language>

      <Language>
        <Text className="latin">
          Allelúja, allelúja.<Text className="versicle"> ℣. </Text>Sancti tui,
          Dómine, florébunt sicut lílium: et sicut odor bálsami erunt ante te.
          Allelúja.<Text className="versicle"> ℣. </Text>
          <Text className="latin">Ps. 115, 15</Text> Pretiósa in conspéctu
          Dómini mors Sanctórum ejus. Allelúja.
        </Text>
        <Text className="vernacular">
          Aleluia, aleluia.<Text className="versicle"> ℣. </Text>Vossos santos,
          Senhor, florescerão, como o lírio, e serão, ante Vós, como o odor do
          bálsamo. Aleluia.<Text className="versicle"> ℣. </Text>
          <Text className="vernacular">Sl. 115, 15</Text> É preciosa diante do
          Senhor a morte dos seus Santos. Aleluia.
        </Text>
      </Language>

      <H3 text="Evangelho" />

      <Text className="em">Jo. 15, 5-11</Text>

      <Language>
        <Text className="latin">
          <Text className="cross"> ✠ </Text> Sequéntia sancti Evangélii secúndum
          Joánnem.
        </Text>
        <Text className="vernacular">
          <Text className="cross"> ✠ </Text> Continuação do santo Evangelho
          segundo S. João.
        </Text>
        <Text className="latin">
          In illo témpore: Dixit Jesus discípulis suis: Ego sum vitis, vos
          pálmites: qui manet in me, et ego in eo, hic fert fructum multum: quia
          sine me nihil potéstis fácere. Si quis in me non mánserit, mittétur
          foras sicut palmes, et aréscet, et cólligent eum, et in ignem mittent,
          et ardet. Si manséritis in me, et verba mea in vobis mánserint:
          quodcúmque voluéritis, petétis, et fiet vobis. In hoc clarificátus est
          Pater meus, ut fructum plúrimum afferátis, et efficiámini mei
          discípuli. Sicut diléxit me Pater, et ego diléxi vos. Manéte in
          dilectióne mea. Si præcépta mea servavéritis, manébitis in dilectióne
          mea, sicut et ego Patris mei præcépta servávi, et máneo in ejus
          dilectióne. Hæc locútus sum vobis, ut gáudium meum in vobis sit, et
          gáudium vestrum impleátur.
        </Text>
        <Text className="vernacular">
          Naquele tempo, disse Jesus aos seus discípulos: «Eu sou a videira, e
          vós sois as vides. Aquele que permanece em mim, eu permaneço nele, e
          dará abundante fruto; pois sem mim nada podereis fazer. Se alguém não
          permanecer em mim, será arrancado e lançado fora, como uma vide seca.
          Então secará e levá-la-ão para a lançar no fogo, em que arderá. Se
          permanecerdes em mim e as minhas palavras permanecerem em vós, tudo o
          que quiserdes podereis pedir, que vos será concedido. Meu Pai será
          glorificado, se vós derdes muito fruto e vos tornardes meus
          discípulos. Assim como meu Pai me amou, assim também eu vos amo.
          Permanecei no meu amor. Se observardes os meus mandamentos,
          permanecereis no meu amor, como eu, que guardo os mandamentos de meu
          Pai, permaneço no seu amor. Digo-Vos estas coisas a fim de que minha
          alegria permaneça convosco e a vossa alegria seja abundante».
        </Text>
      </Language>

      <H3 text="Ofertório" />

      <Text className="em">Sl. 31, 11</Text>

      <Language>
        <Text className="latin">
          Lætámini in Dómino et exsultáte, justi: et gloriámini, omnes recti
          corde, allelúja, allelúja.
        </Text>
        <Text className="vernacular">
          Alegrai-vos no Senhor, ó justos! Exultai de júbilo! Todos aqueles que
          possuem o coração recto serão glorificados. Aleluia, aleluia.
        </Text>
      </Language>

      <H3 text="Secreta" />

      <LinkCard
        title="Secreta Muitos Mártires"
        href="/missal/comum/6muitosmartires1#secreta"
      />

      <H3 text="Comúnio" />

      <Text className="em">Sl. 32, 1</Text>

      <Language>
        <Text className="latin">
          Gaudéte, justi, in Dómino, allelúja: rectos decet collaudátio,
          allelúja.
        </Text>
        <Text className="vernacular">
          Alegrai-vos no Senhor, ó justos. Aleluia. É aos que são rectos que
          pertence cantar os vossos louvores. Aleluia.
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <LinkCard
        title="Postcomúnio Muitos Mártires"
        href="/missal/comum/6muitosmartires1#postcomúnio"
      />
    </PageWrapper>
  );
}
