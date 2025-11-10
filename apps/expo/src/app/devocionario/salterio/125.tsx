import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page125() {
  return (
    <PageWrapper>
      <H1 text="Salmo 125" />

      <Language>
        <Typography className="latin">
          In converténdo Dóminus captivitátem Sion: * facti sumus sicut
          consoláti:
        </Typography>
        <Typography className="vernacular">
          Quando o Senhor fez volver os cativos de Sião: * nós ficámos cheios de
          consolação:
        </Typography>
        <Typography className="latin">
          Tunc replétum est gáudio os nostrum: * et lingua nostra exsultatióne.
        </Typography>
        <Typography className="vernacular">
          Então a nossa boca se encheu de alegria: * e a nossa língua exultou.
        </Typography>
        <Typography className="latin">
          Tunc dicent inter gentes: * Magnificávit Dóminus fácere cum eis.
        </Typography>
        <Typography className="vernacular">
          Então dir-se-á entre as gentes: * grandes coisas fez o Senhor para
          eles.
        </Typography>
        <Typography className="latin">
          Magnificávit Dóminus fácere nobíscum: * facti sumus lætántes.
        </Typography>
        <Typography className="vernacular">
          Grandes coisas fez o Senhor por nós: * estamos cheios de alegria.
        </Typography>
        <Typography className="latin">
          Convérte, Dómine, captivitátem nostram, * sicut torrens in Austro.
        </Typography>
        <Typography className="vernacular">
          Fazei, ó Senhor, volver os nossos cativos, * como as torrentes do sul.
        </Typography>
        <Typography className="latin">
          Qui séminant in lácrimis, * in exsultatióne metent.
        </Typography>
        <Typography className="vernacular">
          Os que semeiam em lágrimas, * em exultação ceifarão.
        </Typography>
        <Typography className="latin">
          Eúntes ibant et flebant, * mitténtes sémina sua.
        </Typography>
        <Typography className="vernacular">
          Andando iam e choravam, * lançando as suas sementes.
        </Typography>
        <Typography className="latin">
          Veniéntes autem vénient cum exsultatióne, * portántes manípulos suos.
        </Typography>
        <Typography className="vernacular">
          Vindo, todavia, virão contentes, * trazendo os seus feixes.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
