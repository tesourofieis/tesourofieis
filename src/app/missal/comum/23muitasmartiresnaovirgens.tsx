import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page23Muitasmartiresnaovirgens() {
  return (
    <PageWrapper>
      <H1 text="Muitas Mártires não Virgens" />

      <Typography className="aside">
        Como a{" "}
        <Link className="link" href="/missal/comum/22martiresnaovirgens">
          Missa Me exspectavérunt
        </Link>{" "}
        , excepto o seguinte:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Da nobis, quǽsumus, Dómine, Deus noster, sanctárum Mártyrum tuárum{" "}
          <Typography className="latin">N.</Typography> et{" "}
          <Typography className="text-red-500">N.</Typography> palmas incessábili devotióne
          venerári: ut, quas digna mente non póssumus celebráre, humílibus saltem frequentémus
          obséquiis. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Ó Senhor, nosso Deus, dignai-Vos conceder-nos a graça de incessantemente venerarmos com
          devoção a vitória das vossas santas Mártires{" "}
          <Typography className="vernacular">N.</Typography> e{" "}
          <Typography className="text-red-500">N.</Typography>, a fim de que, já que não podemos
          celebrar dignamente os seus méritos, possamos, ao menos, oferecer-lhes as nossas humildes
          homenagens. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Inténde, quǽsumus, Dómine, múnera altáribus tuis pro sanctárum Mártyrum tuárum{" "}
          <Typography className="latin">N.</Typography> et{" "}
          <Typography className="text-red-500">N.</Typography> festivitáte propósita: ut, sicut per
          hæc beáta mystéria illis glóriam contulísti; ita nobis indulgéntiam largiáris. Per
          Dóminum...
        </Typography>
        <Typography className="vernacular">
          Senhor, dignai-Vos volver os olhares para estas ofertas, que depositamos nos vossos
          altares para comemorar a festa das vossas santas Mártires{" "}
          <Typography className="vernacular">N.</Typography> e
          <Typography className="text-red-500">N.</Typography>, a fim de que, assim como lhes
          concedestes a glória, assim também nos concedais o perdão dos nossos pecados. Por nosso
          Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Præsta nobis, quǽsumus, Dómine, intercedéntibus sanctis Martýribus tuis{" "}
          <Typography className="latin">N.</Typography> et{" "}
          <Typography className="text-red-500">N.</Typography>: ut, quod ore contíngimus, pura mente
          capiámus. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Concedei-nos, Senhor, Vos suplicamos, que, por intercessão das vossas santas Mártires{" "}
          <Typography className="vernacular">N.</Typography> e{" "}
          <Typography className="text-red-500">N.</Typography>, guardemos com o coração puro o que a
          nossa boca acaba de receber. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
