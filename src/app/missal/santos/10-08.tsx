import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page1008() {
  return (
    <PageWrapper>
      <H1 text="Santa Brígida, Viúva, a 8 de Outubro" />

      <Typography className="comment">
        Santa Brigida era descendente de sangue real da Suécia. Casada com o principe de Mericia,
        educou santamente seus oito filhos, entre os quais figura Santa Catharina de Suécia.
        Estimulou de tal sorte o esposo na prática da virtude que o levou ao completo desprendimento
        do mundo e a abraçar a Regra dos Cistercienses, no mosteiro de Alvastra, onde morreu em odor
        de santidade (1344). Brigida redobrou de fervor no santo estado de viuvez aplicando-se a
        toda sorte de boas obras e perseverando dia e noite na oração e meditações (Ep.). Á
        semelhança de quem encontra um tesouro e vende tudo para adquiri-lo (Ev.), distribuiu os
        bens entre os filhos e, desapegada de tudo, só buscava o reino do céu. Penetrada do temor de
        Deus, infligia ao corpo as mais duras penitências (Intr.) e Jesus, cuja paixão imitava,
        recompensou-a, revelando-lhe os segredos celestes (Or.). Deu-lhe as constituições da Ordem
        por ela fundada, sob a regra de Santo Agostinho. Morreu em Roma em 1373.
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/24nemvirgensnemmartires">
          Missa Cognóvi, Dómine
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Dómine, Deus noster, qui beátæ Birgíttæ per Fílium tuum unigénitum secreta cœléstia
          revelásti: ipsíus pia intercessióne da nobis, fámulis tuis; in revelatióne sempitérna
          glóriæ tuæ gaudére lætántes. Per eúndem Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Senhor, nosso Deus, que pelo vosso Unigénito Filho revelastes os segredos celestiais à B.
          Brígida, concedei-nos, já que somos vossos servos, que nos alegremos na felicidade da
          contemplação da vossa eterna glória. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Epístola" />

      <LinkCard href="/missal/santos/05-04#epístola" title="Santa Mónica, Viúva" />
    </PageWrapper>
  );
}
