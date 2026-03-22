import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PageRorate() {
  return (
    <PageWrapper>
      <H1 text="Rorate Caeli" />

      <Language>
        <Typography className="latin">
          Roráte caéli désuper, Et núbes plúant jústum, Aperiátur térra, et gérminet Salvatórem.
        </Typography>
        <Typography className="vernacular">
          Derramai, ó céus, o vosso orvalho do alto, e as nuvens chovam o Justo, Que a terra seja
          aberta e traga o Salvador.
        </Typography>
        <Typography className="latin">
          Caéli enarrant gloriam Dei: Et opera manuum ejus annuntiat firmamentum.
        </Typography>
        <Typography className="vernacular">
          Os céus declaram a Glória de Deus: E o firmamento a obra de Suas mãos.
        </Typography>
        <Typography className="latin">
          Gloria Patri, et Filio, et Spiritui Sancto, Sicut erat in principio, et nunc, et semper,
          Et in sæcula sæculorum. Amen.
        </Typography>
        <Typography className="vernacular">
          Glória ao Pai, ao Filho e ao Espírito Santo, Assim como era no princípio agora E sempre,
          pelos séculos dos séculos. Amém.
        </Typography>
        <Typography className="latin">
          Roráte caéli désuper, Et núbes plúant jústum: Aperiátur térra, et gérminet Salvatórem.
        </Typography>
        <Typography className="vernacular">
          Derramai, ó céus, o vosso orvalho do alto, e as nuvens chovam o Justo, Que a terra seja
          aberta e traga o Salvador.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
