import { MissalRefLink as Link } from "~/components/MissalRefLink";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0514() {
  return (
    <PageWrapper>
      <H1 text="S. Bonifácio, Mártir, a 14 de Maio" />

      <Typography className="comment">
        Comemoração S. Bonifácio, Mártir. A vitória de Jesus ressuscitado e da sua Ascensão,
        estende-se a todos os membros de seu corpo místico, a Ele unidos como os ramos da vinha ao
        cepo, e por ele produzindo inúmeros frutos. Preso em Tarso, Bonifácio «mostrou-se corajoso
        na presença dos carrascos». Estes lhe despedaçaram o corpo com unhas de ferro, enfiaram-lhe
        nas unhas caniços pontudos, e na boca derramaram chumbo derretido. Decapitado em 275, sob o
        imperador Galério, a 14 de Maio, em Tarso, seus despojos foram transladados para o monte
        Aventino em Roma, cuja igreja tomou o seu nome, vindo a ser, em seguida, a igreja de Santo
        Aleixo.
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/9martir">
          Missa Protexísti me
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Da, quǽsumus, omnípotens Deus: ut, qui beáti Bonifátii Mártyris tui sollémnia cólimus,
          ejus apud te intercessiónibus adjuvémur. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus omnipotente, Vos rogamos, visto que celebramos a festa do vosso B. Mártir
          Bonifácio, concedei-nos que sejamos auxiliados com sua intercessão. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Munéribus nostris, quǽsumus, Dómine, precibúsque suscéptis: et cœléstibus nos munda
          mystériis, et cleménter exáudi. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Havendo Vós recebido os nossos dons e as nossas orações, dignai-Vos purificar-nos com
          vossos celestiais mystérios e ouvir-nos clementemente. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Refécti participatióne múneris sacri, quǽsumus, Dómine, Deus noster: ut, cujus exséquimur
          cultum, intercedénte beáto Bonifátio Mártyre tuo, sentiámus efféctum. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Confortados com a participação do dom sagrado, Vos suplicamos, ó Senhor, nosso Deus,
          fazei-nos sentir por intercessão do B. Bonifácio, vosso Mártir, o efeito do mystério que
          celebramos. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
