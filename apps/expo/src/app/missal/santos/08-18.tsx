import { Typography } from "~/components/typography";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0818() {
  return (
    <PageWrapper>
      <H1 text="S. Agapito, Mártir, a 18 de Agosto" />

      <Typography className="comment">
        Na Palestina: nascimento para o céu de Santo Agapito, que, tendo apenas
        quinze annos, foi morto em Preneste (Itália) com uma estocada, que lhe
        alcançou a corôa da imortalidade (275).
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Lætétur Ecclésia tua, Deus, beáti Agápiti Mártyris tui confísa
          suffrágiis: atque, ejus précibus gloriósis, et devóta permáneat et
          secúra consístat. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Que a vossa Igreja, ó Deus, rejubile com a confiança que lhe dão os
          sufrágios do B. Agapito, vosso Mártir, e que pelas suas gloriosas
          preces persevere na piedade e se conserve na paz. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Evangelho" />

      <Typography className="em">Jo. 12, 24-26</Typography>

      <Language>
        <Typography className="latin">
          <Typography className="cross"> ✠ </Typography> Sequéntia sancti Evangélii secúndum
          Lucam.
        </Typography>
        <Typography className="vernacular">
          <Typography className="cross"> ✠ </Typography> Continuação do santo Evangelho
          segundo S. João.
        </Typography>
        <Typography className="latin">
          In illo témpore: Dixit Jesus discípulis suis: Amen, amen dico vobis,
          nisi granum fruménti, cadens in terram, mórtuum fúerit, ipsum solum
          manet: si autem mórtuum fúerit, multum fructum affert. Qui amat ánimam
          suam, perdet earn: et qui odit ánimam suam in hoc mundo, in vitam
          ætérnam custódit earn. Si quis mihi minístrat, me sequátur: et ubi sum
          ego, illic et minister meus erit. Si quis mihi ministráverit,
          honorificábit eum Pater meus.
        </Typography>
        <Typography className="vernacular">
          Naquele tempo, disse Jesus aos seus discípulos: «Se o grão de trigo,
          caindo na terra, não morrer, permanece estéril; mas, se morrer, dará
          muito fruto. Aquele que ama a sua vida perdê-la-á; mas aquele que
          aborrece a sua vida neste mundo conservá-la-á para a vida eterna. Se
          alguém me serve, siga-me; e, onde Eu estiver, lá estará também o meu
          servo. Se alguém me servir, meu Pai o honrará.
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Súscipe, Dómine, múnera, quæ in ejus tibi sollemnitáte deférimus:
          cujus nos confídimus patrocínio liberári. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Recebei, Senhor, as ofertas que Vos apresentamos na festa daquele por
          cuja protecção esperamos ser livres. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Satiásti, Dómine, famíliam tuam munéribus sacris: ejus, quǽsumus,
          semper interventióne nos réfove, cujus sollémnia celebrámus. Per
          Dóminum...
        </Typography>
        <Typography className="vernacular">
          Saciastes, Senhor, a vossa família com os sacrossantos dons; e, Vos
          suplicamos, fortalecei-a sempre pela intercessão daquele cuja festa
          celebramos. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
