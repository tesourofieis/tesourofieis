import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PageMementorerumconditor() {
  return (
    <PageWrapper>
      <H1 text="Memento rerum conditor" />

      <Language>
        <Typography className="latin">
          Memento rerum conditor, Nostri quod olim corporis Sacrata ab alvo Virginis, Nascendo
          formam sumpseris.
        </Typography>
        <Typography className="vernacular">
          Ó Vós, que o mundo fizestes, lembrai-Vos, que quando nasceste do ventre sagrado da Virgem,
          tomastes a humana figura.
        </Typography>
        <Typography className="latin">
          Maria Mater gratiæ, dulcis Parens clementiæ, tu nos ab hoste protege, et mortis hora
          suscipe.
        </Typography>
        <Typography className="vernacular">
          Maria Mãe cheia de graça, doce Mãe de misericóridia, defende-nos do inimigo, e na última
          agonia tomai-nos.
        </Typography>
        <Typography className="latin">
          Jesu, tibi sit gloria, qui natus es de Virgine, cum Patre, et almo Spiritu, in sempiterna
          sæcula. Amen.
        </Typography>
        <Typography className="vernacular">
          Jesus seja glorificado, da virgem nascido, e o eterno Pai também, com o Espírito Santo,
          por todos os séculos. Amen.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
