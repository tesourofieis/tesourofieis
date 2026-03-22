import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page130() {
  return (
    <PageWrapper>
      <H1 text="Salmo 130" />

      <Language>
        <Typography className="latin">
          Dómine, non est exaltátum cor meum: * neque eláti sunt óculi mei.
        </Typography>
        <Typography className="vernacular">
          Senhor, o meu coração se não exaltou: * nem os meus olhos se mostraram altivos.
        </Typography>
        <Typography className="latin">
          Neque ambulávi in magnis: * neque in mirabílibus super me.
        </Typography>
        <Typography className="vernacular">
          Não andei em grandezas: * nem em pompas superiores a mim.
        </Typography>
        <Typography className="latin">
          Si non humíliter sentiébam: * sed exaltávi ánimam meam:
        </Typography>
        <Typography className="vernacular">
          Se não tinha sentimentos humildes: * mas exaltava a minha alma:
        </Typography>
        <Typography className="latin">
          Sicut ablactátus est super matre sua, * ita retribútio in ánima mea.
        </Typography>
        <Typography className="vernacular">
          Como o ablactado é para sua mãe, * assim seja retribuída a minha alma.
        </Typography>
        <Typography className="latin">
          Speret Israël in Dómino, * ex hoc nunc et usque in sǽculum.
        </Typography>
        <Typography className="vernacular">
          Espere Israel no Senhor, * desde agora e para sempre.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
