import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0724Outro() {
  return (
    <PageWrapper>
      <H1 text="S. Cristina, Virgem e Mártir, a 24 de Julho" />

      <Typography className="comment">
        Santa Cristina, nascida na Toscana, tirou, na idade de dez anos, os ídolos de prata que se
        achavam em casa de seu pai, e os quebrou. Entregue, por esse motivo, aos perseguidores, foi
        presa a um poste e traspassada com flechas, acrescentando ao mérito da castidade o da força
        cristã (Or.). Foi sob Diocleciano, cerca do ano 300.
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/18virgensmartires2">
          Missa Me exspectavérunt
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Indulgéntiam nobis, quǽsumus, Dómine, beáta Christína Virgo et Martyr implóret: quæ tibi
          grata semper éxstitit, et merito castitátis, et tuæ professióne virtútis...
        </Typography>
        <Typography className="vernacular">
          Concedei-nos, Senhor, Vos pedimos que alcancemos o perdão dos nossos pecados pela
          intercessão da B. Catarina, Virgem e Mártir, que sempre Vos foi agradável não só pelos
          méritos da castidade, mas também pela prática da vossa virtude..
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Hóstias tibi, Dómine, beátæ Christínæ Vírginis et Martyris tuæ dicátas méritis, benígnus
          assúme: et ad perpétuum nobis tríbue proveníre subsídium...
        </Typography>
        <Typography className="vernacular">
          Aceitai benignamente, Senhor, as hóstias que Vos oferecemos pelos méritos da B. Cristina,
          Virgem e Mártir, e dignai-Vos permitir que nos sirvam de perpétuo socorro...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Divíni númeris largitáte satiáti, quǽsumus, Dómine, Deus noster: ut, intercedénte beáta
          Christína Vírgine et Mártyre tua, in ejus semper participatióne vivámus...
        </Typography>
        <Typography className="vernacular">
          Saciados com a liberdade do dom divino, Senhor, nosso Deus, Vos suplicamos, permiti, pela
          intercessão da B. Catarina, vossa Virgem, que comparticipemos sempre deste dom durante a
          vida...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
