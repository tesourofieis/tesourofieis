import { Link } from "expo-router";
import { H1, H2 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";
import Salmo94 from "./../devocionario/salterio/094";

export default function PageOficiodefuntos() {
  return (
    <PageWrapper>
      <H1 text="Ofício dos Defuntos" />

      <Typography className="aside">
        Rezar{" "}
        <Link className="link" href="/devocionario/oracoes/painosso">
          Pai-nosso
        </Link>{" "}
        ;
        <Link className="link" href="/devocionario/oracoes/avemaria">
          Ave-Maria
        </Link>{" "}
        ;
        <Link className="link" href="/devocionario/oracoes/simboloapostolos">
          Creio em Deus.
        </Link>
      </Typography>

      <H2 text="Invitatório" />

      <Language>
        <Typography className="latin">Regem, cui ómnia vivunt, Veníte adorémus.</Typography>
        <Typography className="vernacular">
          Vinde, adoremos o Rei para quem todas as criatura vivem.
        </Typography>
        <Typography className="latin">Regem, cui ómnia vivunt, Veníte adorémus.</Typography>
        <Typography className="vernacular">
          Vinde, adoremos o Rei para quem todas as criatura vivem.
        </Typography>
      </Language>

      <Salmo94 />

      <Language>
        <Typography className="latin">
          Veníte, exsultémus Dómino: * jubilémus Deo salutári nostro:
        </Typography>
        <Typography className="vernacular">
          Vinde, exultemos no Senhor: * cantemos alegres a de Deus nosso salvador:
        </Typography>
        <Typography className="latin">
          Præoccupémus fáciem ejus in confessióne: * et in psalmis jubilémus ei.
        </Typography>
        <Typography className="vernacular">
          Apresentemo-nos diante d’Ele em acção de graças: * e celebremo-l’O com salmos.
        </Typography>
      </Language>

      <Language>
        <Typography className="latin">Regem, cui ómnia vivunt, Veníte adorémus.</Typography>
        <Typography className="vernacular">
          Vinde, adoremos o Rei para quem todas as criatura vivem.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
