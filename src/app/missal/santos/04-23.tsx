import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0423() {
  return (
    <PageWrapper>
      <H1 text="S. Jorge, Patrono de Portugal, a 23 de Abril" />

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
          Deus, qui nos beáti Georgii Martyris tui méritis et intercessióne
          lætíficas: concéde propítius; ut, qui tua per eum benefícia póscimus,
          dono tuæ grátiæ consequámur. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que nos alegrais com os méritos e intercessão do B. Jorge,
          vosso Mártir, concedei-nos propício que, suplicando-Vos por sua
          intercessão os vossos benefícios, os obtenhamos por efeito da vossa
          graça. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Epístola" />

      <LinkCard
        href="/missal/comum/5martirnaopontifice2#epístola"
        title="Mártir não Pontífice - Missa Lætábitur justus"
      />

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Múnera, Dómine, obláta sanctífica: et, intercedénte beáto Geórgio
          Mártyre tuo, nos per hæc a peccatórum nostrórum máculis emúnda. Per
          Dóminum...
        </Typography>
        <Typography className="vernacular">
          Santificai, Senhor, estas oblatas que Vos são oferecidas; e pela
          intercessão do B. Jorge, vosso Mártir, purificai-nos, pela sua
          virtude, das manchas dos nossos pecados. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Súpplices te rogámus, omnípotens Deus: ut, quos tuis réficis
          sacraméntis, intercedénte beáto Geórgio Mártyre tuo, tibi étiam
          plácitis móribus dignánter tríbuas deservíre. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus omnipotente, Vos imploramos, pela intercessão do B. Jorge,
          vosso Mártir, dignai-Vos conceder àqueles a quem sustentais com vossos
          sacramentos a graça de Vos servirem, como convém, com conduta de vida
          que Vos agrade. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
