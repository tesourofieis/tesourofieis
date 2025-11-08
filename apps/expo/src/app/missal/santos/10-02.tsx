import { Typography } from "~/components/typography";
import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page1002() {
  return (
    <PageWrapper>
      <H1 text="Santos Anjos da Guarda, a 2 de Outubro" />

      <Typography className="comment">
        Esta festa, celebrada pelos Espanhóis no século XVI, foi estendida à
        Igreja universal em 1608 por Paulo V. Clemente X (1670) fixou-a para o
        primeiro dia livre depois de São Miguel, isto é para 2 de Outubro. Já
        gozando da glória, a primeira missão dos Anjos é adorar a Divindade
        (Intr, Off., Comm.). No Prefácio, a Igreja manda pedirmos a Deus
        permissão de unir as nossas vozes às dos Anjos para louvarmos a Deus
        (2). Mas, como indica o seu nome, os Anjos são também Mensageiros das
        vontades divinas (Off.). Os Santos Padres ensinam que eles presidem a
        todas as coisas criadas e S. Paulo declara que eles têm por missão
        servir aos futuros herdeiros da salvação. Eis porque são chamados Anjos
        da Guarda (Or.). Pensa-se geralmente terem os reinos, as provincias, as
        famílias, as dioceses, as Igrejas, e as Comunidades religiosas cada um o
        seu Anjo tutelar. Quanto ao justo, não há dúvida ter ele o seu Anjo e a
        Igreja aplica às almas, pertencentes à Nova Lei, o que está escrito do
        povo da Antiga Lei. Eu enviarei o meu Anjo para que ande diante de vós,
        vos guarde no caminho e vos faça entrar na terra que vos preparei (Ep.).
        A missão de nosso Anjo da Guarda é proteger-nos e defender-nos, a fim de
        que, sob a sua guarda, abrigados contra as ciladas dos inimigos de nossa
        alma e de todas as adversidades, possamos chegar á terra de promissão da
        vida eterna (Or., Secr., Postcomm.). Esse fiel companheiro merece o
        nosso reconhecimento e a veneração prestada a um Santo fruindo já da
        visão beatifica (Ev.). Para animar-nos nessa pratica habitual das almas
        cristãs, a Igreja instituiu a festa dos Santos Anjos da Guarda.
      </Typography>

      <Typography className="aside">
        Missa da Festa da{" "}
        <Link className="link" href="/missal/santos/05-08">
          Aparição de Arcanjo Miguel
        </Link>{" "}
        , excepto:
      </Typography>
      <H3 text="Oração" />
      <Language>
        <Typography className="latin">
          Deus, qui ineffábili providéntia sanctos Angelos tuos ad nostram
          custódiam míttere dignáris: largíre supplícibus tuis; et eórum semper
          protectióne deféndi, et ætérna societáte gaudére. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que por vossa inefável Providência Vos dignastes mandar os
          vossos Anjos para nos guardarem, concedei aos vossos suplicantes a
          graça de serem sempre defendidos pela sua protecção e de gozarem
          eternamente, a sua companhia. Por nosso Senhor...
        </Typography>
      </Language>
      <H3 text="Epístola" />
      <Typography className="em">Ex. 23, 20-23</Typography>
      <Language>
        <Typography className="latin">Léctio libri Exodi.</Typography>
        <Typography className="vernacular">Lição do Livro Êxodo.</Typography>
        <Typography className="latin">
          Hæc dicit Dóminus Deus: Ecce, ego mittam Angelum meum, qui præcédat
          te, et custódiat in via, et intróducat in locum, quem parávi. Obsérva
          eum, et audi vocem ejus, nec contemnéndum putes: quia non dimíttet,
          cum peccáveris, et est nomen meum in illo. Quod si audiéris vocem ejus
          et féceris ómnia, quæ loquor, inimícus ero inimícis tuis et affligam
          affligéntes te: præcedétque te Angelus meus.
        </Typography>
        <Typography className="vernacular">
          Isto diz o Senhor, nosso Deus: «Eis que enviarei o meu Anjo, a fim de
          que ele vá adiante de vós; vos guarde no caminho; e vos introduza no
          lugar que vos preparei. Respeitai-o, ouvi a sua voz e não deixeis de
          atendê-lo, porque vos não perdoará, quando pecardes. Ele vos falará em
          meu nome. Se escutardes a sua voz e se fizerdes o que vos ordenar,
          serei inimigo do vosso inimigo e afligirei aqueles que vos afligirem,
          pois o meu Anjo preceder-vos-á».
        </Typography>
      </Language>
      <H3 text="Gradual" />
      <Typography className="em">Sl. 90,11-12</Typography>
      <Language>
        <Typography className="latin">
          Angelis suis Deus mandávit de te, ut custódiant te in ómnibus viis
          tuis.<Typography className="versicle"> ℣. </Typography>In mánibus
          portábunt te, ne umquam offéndas ad lápidem pedem tuum.
        </Typography>
        <Typography className="vernacular">
          Deus mandou aos seus Anjos que te guardassem em todas as tuas vias.
          <Typography className="versicle"> ℣. </Typography>E eles te conduzirão
          em cima de suas mãos, para que o teu pé não tropece.
        </Typography>
        <Typography className="latin">
          Allelúja, allelúja.<Typography className="versicle"> ℣. </Typography>
          <Typography className="latin">Ps. 102, 21</Typography> Benedícite
          Dómino, omnes virtútes ejus: minístri ejus, qui fácitis voluntátem
          ejus. Allelúja.
        </Typography>
        <Typography className="vernacular">
          Aleluia, aleluia.<Typography className="versicle"> ℣. </Typography>
          <Typography className="vernacular">Sl. 102, 21</Typography> Bendizei
          todos o Senhor, ó exércitos do Senhor; pois estais ao seu serviço e
          desempenhais as suas ordens. Aleluia.
        </Typography>
      </Language>
      <H3 text="Ofertório" />
      <Typography className="em">Sl. 102, 20 & 21</Typography>
      <Language>
        <Typography className="latin">
          Benedícite Dóminum, omnes Angeli ejus: minístri ejus, qui fácitis
          verbum ejus, ad audiéndam vocem sermónum ejus.
        </Typography>
        <Typography className="vernacular">
          Bendizei o Senhor, ó vós, Anjos, heróis poderosos, executores das suas
          ordens e sempre fiéis aos seus chamamentos.
        </Typography>
      </Language>
      <H3 text="Secreta" />
      <Language>
        <Typography className="latin">
          Súscipe, Dómine, múnera, quæ pro sanctórum Angelórum tuórum
          veneratióne deférimus: et concéde propítius; ut, perpétuis eórum
          præsídiis, a præséntibus perículis liberémur et ad vitam perveniámus
          ætérnam. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Recebei, Senhor, as ofertas que Vos apresentamos em honra dos vossos
          Santos Anjos e concedei-nos propício que pela sua contínua protecção
          sejamos livres dos perigos da vida presente e alcancemos a vida
          eterna. Por nosso Senhor...
        </Typography>
      </Language>
      <H3 text="Postcomúnio" />
      <Language>
        <Typography className="latin">
          Súmpsimus, Dómine, divína mystéria, sanctórum Angelórum tuórum
          festivitáte lætántes: quǽsumus; ut eórum protectióne ab hóstium
          júgiter liberémur insídiis, et contra ómnia advérsa muniámur. Per
          Dóminum...
        </Typography>
        <Typography className="vernacular">
          Havendo recebido os divinos mystérios enquanto celebramos com júbilo a
          festa dos vossos Santos Anjos, dignai-Vos permitir, Vos suplicamos,
          que pela sua protecção sejamos sempre livres das insídias dos nossos
          inimigos e de todas as adversidades. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
