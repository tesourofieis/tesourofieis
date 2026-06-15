import { MissalRefLink as Link } from "~/components/MissalRefLink";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0813() {
  return (
    <PageWrapper>
      <H1 text="S. S. Hipólito e Cassiano, Mártires, a 13 de Agosto" />

      <Typography className="comment">
        A legenda do Breviário ensina que Hipólito, encarregado de guardar São Lourenço na prisão,
        foi pelo Santo convertido. Morreu Mártir, cerca do ano 260, sendo sepultado não longe do
        túmulo de São Lourenço, onde construíram um santuário, em sua honra. No mesmo dia Cassiano
        d'Imola, mestre-escola, foi entregue com as mãos atadas ás costas, aos seus jovens
        discípulos pagãos que armados de estiletes, o mataram, cerca do ano 317.
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/8muitosmartires3">
          Missa Salus autem
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Da, quǽsumus, omnípotens Deus: ut beatórum Mártyrum tuórum Hippolýti et Cassiáni veneránda
          sollémnitas, et devotiónem nobis áugeat et salútem. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Concedei-nos, ó Deus omnipotente, Vos rogamos, que a veneranda festa dos vossos B. B.
          Mártires Hipólito e Cassiano aumente a nossa piedade e nos faça alcançar a salvação. Por
          n...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Réspice, Dómine, múnera pópuli tui, Sanctórum festivitáte votíva: et tuæ testificátio
          veritátis nobis profíciat ad salútem. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Dignai-Vos olhar, Senhor, para as oblatas que o vosso povo Vos oferece nesta festa dos
          vossos Santos, e fazei que o testemunho, por eles dado à vossa verdade, nos seja útil para
          a salvação. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Sacramentórum tuórum, Dómine, commúnio sumpta nos salvet: et in tuæ veritátis luce
          confírmet. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Que a comunhão dos vossos sacramentos, que recebemos, Senhor, nos alcance a salvação e nos
          confirme na profissão da vossa doutrina. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
