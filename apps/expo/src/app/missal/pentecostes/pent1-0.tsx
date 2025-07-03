import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { H1, H3 } from "~/components/Headings";


export default function PagePent10() {
  return (
    <PageWrapper>
      <H1 text="Domingo da Santíssima Trindade" />

      <H3 text="Intróito" />

      <Text className="em">Tb. 12, 6</Text>

      <Language>
        <Text className="latin">
          Benedícta sit sancta Trínitas atque indivísa Unitas: confitébimur ei,
          quia fecit nobíscum misericórdiam suam.{" "}
          <Text className="latin">Ps. 8, 2</Text> Dómine, Dóminus noster, quam
          admirábile est nomen tuum in univérsa terra!
          <Text className="versicle"> ℣. </Text>
          Gloria Patri...
        </Text>
        <Text className="vernacular">
          Bendita seja a Santíssima Trindade e a indivisível Unidade! Nós A
          louvamos; pois foi misericordiosa para connosco.{" "}
          <Text className="vernacular">Sl. 8, 2</Text> Senhor, nosso Deus, como
          o vosso nome é admirável em todo o universo!
          <Text className="versicle"> ℣. </Text>
          Glória ao Pai...
        </Text>
      </Language>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Omnípotens sempitérne Deus, qui dedísti fámulis tuis in confessióne
          veræ fídei, ætérnæ Trinitátis glóriam agnóscere, et in poténtia
          majestátis adoráre Unitátem: quǽsumus; ut, ejúsdem fídei firmitáte, ab
          ómnibus semper muniámur advérsis. Per Dóminum nostrum...
        </Text>
        <Text className="vernacular">
          Ó omnipotente e eterno Deus, que quisestes que os vossos fiéis,
          acreditando e confessando a verdadeira fé, conhecessem a glória da
          sempiterna Trindade e adorassem a Unidade no poder da sua majestade,
          permiti, Vos imploramos, que, guardando nós firmemente a mesma fé,
          vençamos sempre todas as adversidades. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Epístola" />

      <Text className="em">Rm. 11, 33-36</Text>

      <Language>
        <Text className="latin">
          Léctio Epístolæ beáti Pauli Apóstoli ad Romános.
        </Text>
        <Text className="vernacular">
          Lição da Ep.ª do B. Ap.º Paulo aos Romanos.
        </Text>
        <Text className="latin">
          O altitúdo divitiárum sapiéntiae et sciéntiæ Dei: quam
          incomprehensibília sunt judícia ejus, et investigábiles viæ ejus! Quis
          enim cognovit sensum Dómini? Aut quis consiliárius ejus fuit? Aut quis
          prior dedit illi, et retribuétur ei? Quóniam ex ipso et per ipsum et
          in ipso sunt ómnia: ipsi glória in sǽcula. Amen.
        </Text>
        <Text className="vernacular">
          Ó abysmo das riquezas, da sabedoria e da ciência de Deus! Como são
          incompreensíveis os seus juízos e impenetráveis os seus caminhos! Pois
          quem, porventura, conheceu já os desígnios do Senhor? Quem foi seu
          conselheiro? Quem foi o primeiro a dar-Lhe alguma coisa, para depois
          receber recompensa? Pois tudo quanto existe é d’Ele, para Ele e n’Ele.
          A Ele, pois, seja dada glória em todos os séculos. Amen.
        </Text>
      </Language>

      <H3 text="Gradual" />

      <Text className="em">Dn. 3, 55-56</Text>

      <Language>
        <Text className="latin">
          Benedíctus es, Dómine, qui intuéris abýssos, et sedes super Chérubim.
          <Text className="versicle"> ℣. </Text>Benedíctus es, Dómine, in
          firmaménto cæli, et laudábilis in sǽcula.
        </Text>
        <Text className="vernacular">
          Bendito sois, Senhor, que sondais as profundezas dos abysmos e estais
          assentado sobre os Querubins!
          <Text className="versicle"> ℣. </Text>Sim, Senhor, sois bendito no
          firmamento do céu; e digno de louvor em todos os séculos.
        </Text>
        <Text className="latin">
          Allelúja, allelúja.<Text className="versicle"> ℣. </Text>
          <Text className="latin">ibid., 52</Text> Benedíctus es, Dómine, Deus
          patrum nostrórum, et laudábilis in sǽcula. Allelúja.
        </Text>
        <Text className="vernacular">
          Aleluia, aleluia.<Text className="versicle"> ℣. </Text>
          <Text className="vernacular">ibid., 52</Text> Bendito sois, Senhor,
          Deus de nossos pais, e digno de louvor em todos os séculos. Aleluia.
        </Text>
      </Language>

      <H3 text="Evangelho" />

      <Text className="em">Mt. 28, 18-20</Text>

      <Language>
        <Text className="latin">
          <Text className="cross"> ✠ </Text> Sequéntia sancti Evangélii secúndum
          Matthǽum.
        </Text>
        <Text className="vernacular">
          <Text className="cross"> ✠ </Text> Continuação do santo Evangelho
          segundo S. Mateus.
        </Text>
        <Text className="latin">
          In illo témpore: Dixit Jesus discípulis suis: Data est mihi omnis
          potéstas in cœlo et in terra. Eúntes ergo docéte omnes gentes,
          baptizántes eos in nómine Patris, et Fílii, et Spíritus Sancti:
          docéntes eos serváre ómnia, quæcúmque mandávi vobis. Et ecce, ego
          vobíscum sum ómnibus diébus usque ad consummatiónem sǽculi.
        </Text>
        <Text className="vernacular">
          Naquele tempo, disse Jesus aos discípulos: «Todo o poder me foi dado
          no céu e na terra. Ide, pois; ensinai todos os povos, baptizando-os em
          nome do Pai, e do Filho, e do Espírito Santo. Ensinai-os a observar
          tudo o que vos mandei. E sabei que estou convosco todos os dias até à
          consumação dos séculos».
        </Text>
      </Language>

      <H3 text="Ofertório" />

      <Text className="em">Tb. 12, 6</Text>

      <Language>
        <Text className="latin">
          Benedíctus sit Deus Pater, unigenitúsque Dei Fílius, Sanctus quoque
          Spíritus: quia fecit nobíscum misericórdiam suam.
        </Text>
        <Text className="vernacular">
          Bendito seja Deus Pai, e o Filho Unigénito de Deus, e também o
          Espírito Santo: pois foi misericordioso para connosco.
        </Text>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Text className="latin">
          Sanctífica, quǽsumus, Dómine, Deus noster, per tui sancti nóminis
          invocatiónem, hujus oblatiónis hóstiam: et per eam nosmetípsos tibi
          pérfice munus ætérnum. Per Dóminum nostrum...
        </Text>
        <Text className="vernacular">
          Dignai-Vos, Senhor, nosso Deus, Vos suplicamos, pela invocação do
          vosso santo nome, santificar esta hóstia, que Vos oferecemos; e que
          por ela nos convertamos em dom perpétuo de homenagem à vossa
          majestade. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Comúnio" />

      <Text className="em">Tb. 12, 6</Text>

      <Language>
        <Text className="latin">
          Benedícimus Deum cœli et coram ómnibus vivéntibus confitébimur ei:
          quia fecit nobíscum misericórdiam suam.
        </Text>
        <Text className="vernacular">
          Bendizemos Deus do céu e cantamos os seus louvores diante de todos os
          viventes: pois foi misericordioso para connosco.
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Profíciat nobis ad salútem córporis et ánimæ, Dómine, Deus noster,
          hujus sacraménti suscéptio: et sempitérnæ sanctæ Trinitátis ejusdémque
          indivíduæ Unitátis conféssio. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Que a recepção deste sacramento, assim como a crença, que confessamos,
          na santa e eterna Trindade e indivisível Unidade, nos sirvam, Senhor,
          de proveito para a salvação da alma e do corpo. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
