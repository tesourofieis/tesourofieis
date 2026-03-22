import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PageNuncdimittis() {
  return (
    <PageWrapper>
      <H1 text="Nunc Dimíttis" />

      <Language>
        <Typography className="latin">
          Nunc dimíttis, servum tuum, Dómine, * secúndum verbum tuum in pace:
        </Typography>
        <Typography className="vernacular">
          Agora, Senhor, deixareis ir em paz o vosso servo, * segundo a vossa palavra:
        </Typography>
        <Typography className="latin">Quia vidérunt óculi mei * salutáre tuum,</Typography>
        <Typography className="vernacular">
          Pois os meus olhos já viram * a vossa salvação,
        </Typography>
        <Typography className="latin">Quod parásti * ante fáciem ómnium populórum,</Typography>
        <Typography className="vernacular">
          E que preparastes * ante a face de todos os povos,
        </Typography>
        <Typography className="latin">
          Lumen ad revelatiónem Géntium, * et glóriam plebis tuæ Israël.
        </Typography>
        <Typography className="vernacular">
          Luz para se revelar às nações, * e glória de Israel, vosso povo.
        </Typography>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Glória Patri, et Fílio, et Spíritui
          Sancto.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Glória ao Pai, e ao Filho e ao Espírito
          Santo.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Sicut erat in pricípio, et nunc, et
          semper, et in sǽcula sæculórum. Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Assim como era no princípio, agora e
          sempre, e por todos os séculos dos séculos. Amen.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
