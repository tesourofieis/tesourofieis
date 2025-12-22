import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PageTelucis() {
  return (
    <PageWrapper>
      <H1 text="Te lucis" />

      <Language>
        <Typography className="latin">
          Te lucis ante términum, Rerum Creátor, póscimus, Ut pro tua cleméntia
          Sis præsul et custódia.
        </Typography>
        <Typography className="vernacular">
          Antes que a luz desapareça, Vos suplicamos, ó Criador de todas as
          cousas, que pela vossa clemência nos protegeis e guardais.
        </Typography>
        <Typography className="latin">
          Procul recedant somnia et noctium phantasmata; hostemque nostrum
          comprime, ne polluantur corpora.
        </Typography>
        <Typography className="vernacular">
          Para bem longe de nós os sonhos e os fantasmas da noite. Reprimi o
          nosso inimigo, para que nossos corpos não sejam manchados.
        </Typography>
        <Typography className="latin">
          Præsta, Pater piissime, Patrique compar Unice, cum Spiritu Paraclito
          regnans per omne sæculum. Amen.
        </Typography>
        <Typography className="vernacular">
          Concedei-nos esta graça, ó Pai misericordiosíssimo, e Vós, ó Filho
          único, igual ao Pai, que reinais com o Espírito Paráclito em todos os
          séculos. Amen.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
