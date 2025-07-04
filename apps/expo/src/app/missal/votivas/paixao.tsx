import { Text, View } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PagePaixao() {
  return (
    <PageWrapper>
      <H1 text="Missa da Paixão de N. S. Jesus Cristo" />

      <H3 text="Intróito" />

      <Text className="em">Fl. 2, 8-9</Text>

      <Language>
        <Text className="latin">
          Humiliávit semetípsum Dóminus Jesus Christus usque ad mortem, mortem
          autem crucis: propter quod et Deus exaltávit illum, et donávit illi
          nomen, quod est super omne nomen. (T. P. Allelúja, allelúja.){" "}
          <Text className="latin">Ps. 88, 2</Text> Misericórdias Dómini in
          ætérnum cantábo: in generatiónem et generatiónem.
          <Text className="versicle"> ℣. </Text>Gloria Patri...
        </Text>
        <Text className="vernacular">
          O Senhor Jesus Cristo humilhou-se a si próprio até à morte, e morte na
          Cruz; pelo que Deus o exaltou e Lhe deu um nome que é superior a todos
          os nomes. (T. P. Aleluia, aleluia.){" "}
          <Text className="vernacular">Sl. 88, 2</Text> De geração em geração
          cantarei eternamente as misericórdias do Senhor.
          <Text className="versicle"> ℣. </Text>
          Glória ao Pai...
        </Text>
      </Language>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Dómine Jesu Christe, qui de cœlis ad terram de sinu Patris
          descendísti, et sánguinem tuum pretiósum in remissiónem peccatórum
          nostrórum fudísti: te humíliter deprecámur; ut in die judícii, ad
          déxteram tuam, audíre mereámur: Veníte, benedícti: Qui cum eodem Deo
          Patre et Spíritu Sancto vivis et regnas Deus, per ómnia sǽcula
          sæculórum...
        </Text>
        <Text className="vernacular">
          Senhor Jesus Cristo, que descestes do céu do seio do eterno Pai e
          espalhastes o vosso preciosíssimo Sangue em remissão dos nossos
          pecados, Vos pedimos humildemente, concedei-nos a graça, de, no dia de
          Juízo, nos encontrarmos colocados à vossa dextra para que mereçamos
          ouvir-Vos dizer: «Vinde, benditos do meu Pai». Ó Vós, que viveis e...
        </Text>
      </Language>

      <H3 text="Epístola" />

      <Text className="em">Zc. 12, 10-11; 13, 6-7</Text>

      <Language>
        <Text className="latin">Léctio Zacharíæ Prophétæ.</Text>
        <Text className="vernacular">Lição do Profeta Zacarias.</Text>
        <Text className="latin">
          Hæc dicit Dóminus: Effúndam super domum David et super habitatóres
          Jerúsalem spíritum grátiæ et precum: et aspícient ad me, quem
          confixérunt: et plangent eum planctu quasi super unigénitum, et
          dolébunt super eum, ut doléri solet in morte primogéniti. In die illa
          magnus erit planctus in Jerúsalem, et dicétur: Quid sunt plagæ istæ in
          médio mánuum tuárum? Et dicet: His plagátus sum in domo eórum, qui
          diligébant me. Frámea, suscitáre super pastórem meum, et super virum
          cohæréntem mihi, dicit Dóminus exercítuum: pércute pastórem, et
          dispergéntur oves: ait Dóminus omnípotens.
        </Text>
        <Text className="vernacular">
          Isto diz o Senhor: «Espalharei sobre a casa de David e sobre os
          moradores de Jerusalém o espírito da graça e da oração. Então
          ver-me-ão e conhecerão a quem traspassaram; e chorarão com lágrimas e
          suspiros, como quando se chora um filho único, penetrados de dor, como
          quando se pranteia a morte de um filho querido. Nesse dia haverá
          grande pranto em Jerusalém, perguntando-se: «Que chagas são estas no
          meio das vossas mãos?». E Ele responderá: «Com elas fui ferido em casa
          daqueles que me amavam!». Ó espada, que tu sejas desembainhada! Vem
          contra o meu pastor e contra aquele que é meu companheiro, diz o
          Senhor dos exércitos, fere este pastor, e as ovelhas serão dispersas»,
          diz o Senhor omnipotente.
        </Text>
      </Language>

      <H3 text="Gradual" />

      <Text className="em">Sl. 68,21-22</Text>

      <Language>
        <Text className="latin">
          Impropérium exspectávi cor meum et misériam: et sustínui, qui simul
          mecum contristarétur, et non fuit: consolántem me quæsívi, et non
          invéni.<Text className="versicle"> ℣. </Text>Dedérunt in escam meam
          fel, et in siti mea potavérunt me acéto.
        </Text>
        <Text className="vernacular">
          O meu coração não encontra senão impropérios e misérias. Tenho
          esperado quem tenha compaixão de mim, mas não apareceu ninguém!
          Procurei quem me consolasse, mas encontrei ninguém.
          <Text className="versicle"> ℣. </Text>Deram-me, fel para meu alimento:
          e, quando tinha sede, deram-me vinagre a beber.
        </Text>
        <Text className="latin">
          Allelúja, allelúja.<Text className="versicle"> ℣. </Text>Ave, Rex
          noster: tu solus nostros es miserátus erróres: Patri obǿdiens, ductus
          es ad crucifigéndum, ut agnus mansúetus ad occisiónem. Allelúja.
        </Text>
        <Text className="vernacular">
          Aleluia, aleluia.<Text className="versicle"> ℣. </Text>Ave, ó nosso
          Rei; só Vós tivestes compaixão de nossos erros. Sendo Vós obediente ao
          pai, fostes levado, como manso cordeiro, à crucifixão. Aleluia.
        </Text>
      </Language>

      <Text className="aside">
        Depois da Septuagésima omite-se o Aleluia e a Verso que se segue, e
        diz-se o:
      </Text>

      <H3 text="Trato" />

      <Text className="em">Is. 53, 4-5</Text>

      <Language>
        <Text className="latin">
          Vere languóres nostros ipse tulit et dolóres nostros ipse portávit.
          <Text className="versicle"> ℣. </Text>Et nos putávimus eum quasi
          leprósum et percússum a Deo et humiliátum.
          <Text className="versicle"> ℣. </Text>Ipse autem vulnerátus est
          propter iníquitates nostras, attrítus est propter scélera nostra.
          <Text className="versicle"> ℣. </Text>
          Disciplína pacis nostræ super eum: et livóre ejus sanáti sumus.
        </Text>
        <Text className="vernacular">
          Verdadeiramente tomou sobre si as nossas enfermidades e sofreu as
          nossas dores.<Text className="versicle"> ℣. </Text>Nós julgávamo-l’O
          como um leproso, como um homem ferido por Deus e humilhado pelos seus
          castigos.
          <Text className="versicle"> ℣. </Text>Porém Ele, foi ferido por causa
          das nossas iniquidades; foi cheio de dores por causa dos nossos
          crimes.<Text className="versicle"> ℣. </Text>Ele sofreu o castigo que
          nos alcançou a paz: fomos curados com seus vergões de sangue.
        </Text>
      </Language>

      <Text className="aside">
        No Tempo Pascal omite-se o Gradual e o Trato, e diz-se:
      </Text>

      <Language>
        <Text className="latin">
          Allelúja, allelúja.<Text className="versicle"> ℣. </Text>Ave, Rex
          noster: tu solus nostros es miserátus erróres: Patri obǿdiens, ductus
          es ad crucifigéndum, ut agnus mansúetus ad occisiónem. Allelúja.
          <Text className="versicle"> ℣. </Text>Tibi glória, hosánna: tibi
          triúmphus et victória: tibi summæ laudis et honóris coróna. Allelúja.
        </Text>
        <Text className="vernacular">
          Aleluia, aleluia.<Text className="versicle"> ℣. </Text>Ave, ó nosso
          Rei; só Vós tivestes compaixão de nossos erros. Sendo Vós obediente ao
          Pai, fostes levado, como manso cordeiro, à crucifixão. Aleluia.
          <Text className="versicle"> ℣. </Text>A Vós Senhor, o triunfo e a
          vitória; a Vós, a coroa da maior homenagem e louvor. Aleluia.
        </Text>
      </Language>

      <H3 text="Evangelho" />

      <Text className="em">Jo. 19, 28-35</Text>

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
          In illo témpore: Sciens Jesus, quia ómnia consummáta sunt, ut
          consummarétur Scriptúra, dixit: Sítio. Vas ergo erat pósitum acéto
          plenum. Illi autem spóngiam plenam acéto, hyssópo circumponéntes,
          obtulérunt ori ejus. Cum ergo accepísset Jesus acétum, dixit:
          Consummátum est. Et inclináto capite trádidit spíritum. Judǽi ergo
          (quóniam Parascéve erat), ut non remanérent in cruce córpora sábbato
          (erat enim magnus dies ille sábbati), rogavérunt Pilátum, ut
          frangeréntur eórum crura et tolleréntur. Venérunt ergo mílites: et
          primi quidem fregérunt crura et alteríus, qui crucifíxus est cum eo.
          Ad Jesum autem cum veníssent, ut vidérunt eum jam mórtuum, non
          fregérunt ejus crura, sed unus mílitum láncea latus ejus apéruit, et
          contínuo exívit sanguis et aqua. Et qui vidit, testimónium perhíbuit:
          et verum est testimónium ejus.
        </Text>
        <Text className="vernacular">
          Naquele tempo, sabendo Jesus que todas as coisas estavam completas,
          para que se cumprisse a Escritura, disse: «Tenho sede!». Estava ali um
          vaso cheio de vinagre. Então embeberam uma esponja no vinagre e,
          atando-a a um hissope, chegaram-lho à boca. E Jesus, havendo tomado o
          vinagre, disse: «Tudo está consumado!». Depois, tendo inclinado a
          cabeça, expirou. Porém os judeus, para que os corpos não ficassem na
          cruz, no sábado (porque era o dia da Preparação, e aquele sábado era
          dia solene) pediram licença a Pilatos que lhes fosse permitido
          quebrarem-lhes as pernas, e tirarem-nos. Vieram então os soldados e
          quebraram as pernas ao primeiro. Depois as do outro que havia sido
          crucificado com Ele. E, tendo vindo ao pé de Jesus e encontrando-O já
          morto, Lhe não quebraram as pernas, mas um dos soldados abriu-Lhe o
          lado com uma lança, donde logo saiu sangue e água. Aquele que viu
          isto, dá testemunho e o seu testemunho é verdadeiro.
        </Text>
      </Language>

      <H3 text="Ofertório" />

      <Language>
        <Text className="latin">
          Insurrexérunt in me viri iníqui: absque misericórdia quæsiérunt me
          interfícere: et non pepercérunt in fáciem meam spúere: lánceis suis
          vulneravérunt me, et concússa sunt ómnia ossa mea. (T. P. Allelúja.)
        </Text>
        <Text className="vernacular">
          Homens iníquos levantaram-se contra mim; sem misericórdia alguma
          procuraram matar-me. Não hesitaram em escarrar na minha face.
          Feriram-me com suas lanças, ficando abalados todos meus ossos. (T. P.
          Aleluia.)
        </Text>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Text className="latin">
          Oblátum tibi, Dómine, sacrifícium, intercedénte unigéniti Fílii tui
          passióne, vivíficet nos semper et múniat: Qui tecum vivit...
        </Text>
        <Text className="vernacular">
          Permiti, Senhor, pelos méritos da paixão de vosso Filho Unigénito, que
          este sacrifício, que Vos é oferecido, nos vivifique e fortifique para
          sempre. Ele, que, sendo Deus vive e reina...
        </Text>
      </Language>

      <H3 text="Comúnio" />

      <Text className="em">Sl. 21,17-18</Text>

      <Language>
        <Text className="latin">
          Fodérunt manus meas et pedes meos: dinumeravérunt ómnia ossa mea. (T.
          P. Allelúja.)
        </Text>
        <Text className="vernacular">
          Atravessaram as minhas mãos e os meus pés, e contaram todos meus
          ossos. (T. P. Aleluia.)
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Dómine Jesu Christe, Fili Dei vivi, qui hora sexta pro redemptióne
          mundi Crucis patíbulum ascendísti, et sánguinem tuum pretiósum in
          remissiónem peccatórum nostrórum fudísti: te humíliter deprecámur; ut,
          post óbitum nostrum, paradísi jánuas nos gaudénter introíre concédas:
          Qui vivis...
        </Text>
        <Text className="vernacular">
          Senhor Jesus Cristo, Filho de Deus vivo, que subistes ao patíbulo da
          Cruz, sendo a hora sexta, para redenção do mundo, e derramastes o
          vosso preciosíssimo Sangue para a redenção dos nossos pecados,
          concedei-nos a graça, humildemente Vos rogamos! de, após a nossa
          morte, podermos penetrar com alegria no paraíso, Ó Vós, que...
        </Text>
      </Language>
    </PageWrapper>
  );
}
