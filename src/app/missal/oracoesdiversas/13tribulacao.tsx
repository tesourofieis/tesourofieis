import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page13Tribulacao() {
  return (
    <PageWrapper>
      <H1 text="13.ª Por alguma tribulação" />

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Ne despícias, omnípotens Deus, pópulum tuum in afflictióne clamántem: sed, propter glóriam
          nóminis tui, tribulátis succúrre placátus. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Não desprezeis, ó Deus omnipotente, o vosso povo, que nesta aflição por Vós clama; mas
          antes, para glória do vosso nome, deixai-Vos aplacar e vinde em auxílio daqueles que estão
          na tribulação. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Súscipe, Dómine, propítius hóstias, quibus et te placári voluísti, et nobis salútem
          poténti pietáte restítui. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Recebei propício, Senhor, estas oblações, com as quais quisestes ser aplacado; e, pela
          vossa poderosa misericórdia, restituí-nos a salvação por meio delas. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Tribulatiónem nostram, quǽsumus, Dómine, propítius réspice: et iram tuæ indignatiónis,
          quam juste merémur, avérte. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Senhor, Vos suplicamos, lançai vossos olhares misericordiosos para as nossas tribulações e
          afastai de nós o furor da vossa indignação, que justamente merecemos. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
