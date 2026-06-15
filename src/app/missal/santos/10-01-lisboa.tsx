import { MissalRefLink as Link } from "~/components/MissalRefLink";
import { H1, H3 } from "~/components/Headings";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page1001Lisboa() {
  return (
    <PageWrapper>
      <H1 text="S. Veríssimo e Outros, Mártires, a 1 de Outubro, No Patriarcado de Lisboa" />
      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/6muitosmartires1">
          Missa Intret in
        </Link>{" "}
        , excepto:
      </Typography>
      <H3 text="Oração" />
      <Typography className="vernacular">
        Ó Deus, que permitistes assistíssemos a esta festa dos vossos Santos Mártires Veríssimo,
        Máximo e Júlia, concedei-nos, Vos suplicamos, que, celebrando o seu nascimento no céu, nos
        enchamos de zelo com seus exemplos. Por nosso Senhor...
      </Typography>
      <H3 text="Gradual" />
      <Typography className="vernacular">
        Deus é glorioso em seus Santos, e admirável na sua majestade, praticando prodígios. Senhor,
        a vossa dextra engrandeceu-se pela sua força: a vossa dextra esmagou os inimigos. Aleluia,
        aleluia. Esta é a verdadeira fraternidade» que venceu os crimes do mundo. Ela seguiu Cristo:
        Pelo que goza a glória do reino celestial. Aleluia.
      </Typography>
      <H3 text="Secreta e Postcomúnio" />
      <LinkCard
        href="/missal/comum/7muitosmartires2#secreta"
        title="Muitos Mártires - Missa Sapiéntiam sanctórum"
      />
    </PageWrapper>
  );
}
