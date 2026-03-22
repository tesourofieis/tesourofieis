import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page1014() {
  return (
    <PageWrapper>
      <H1 text="S. Calisto I, Papa e Mártir, a 14 de Outubro" />

      <Typography className="comment">
        S. Calixto I, Papa e Martyr (2). D. Param. vermelhos. Calixto romano, Papa, successor de S.
        Zepherino, foi chamado a participar do sacerdócio de Cristo em toda a sua plenitude (Ep.,
        Or..) Foi ele quem estabeleceu as Têmporas; teve papel importantíssimo na organização da
        catacumba que traz o seu nome. Morreu martyr em 223.
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/sumospontifices">
          Missa Si díligis me
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui nos cónspicis ex nostra infirmitáte defícere: ad amórem tuum nos misericórditer
          per Sanctórum tuórum exémpla restáura. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que nos vedes desfalecer por causa da nossa fraqueza, dignai-Vos pela vossa
          misericórdia restaurar-nos no vosso amor, segundo os exemplos dos vossos Santos. Por nosso
          Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Mýstica nobis, Dómine, prosit oblátio: quæ nos et a reátibus nostris expédiat, et perpétua
          salvatióne confírmet. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Que esta mística oblação nos aproveite, Senhor; e que nos livre das nossas faltas e nos
          assegure a salvação eterna. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Quǽsumus, omnípotens Deus: ut reátus nostros múnera sacráta puríficent, et recte vivéndi
          nobis operéntur efféctum. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Dignai-Vos permitir, ó Deus omnipotente, que estes dons nos purifiquem das nossas faltas e
          que, produzindo em nós os seus efeitos, nos façam viver santamente. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
