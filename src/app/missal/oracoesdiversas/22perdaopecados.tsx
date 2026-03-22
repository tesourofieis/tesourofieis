import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page22Perdaopecados() {
  return (
    <PageWrapper>
      <H1 text="22.ª Para obter perdão dos pecados" />

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui nullum réspuis, sed, quantúmvis peccántibus, per pœniténtiam pia miseratióne
          placáris: réspice propítius ad preces humilitátis nostræ, et illúmina corda nostra; ut tua
          valeámus implére præcépta. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que não repelis homem algum, mas antes, em vossa misericordiosa bondade, Vos
          deixais aplacar pela penitência dos pecadores, por mais que Vos tenham ofendido, aceitai
          benigno as nossas humildes orações e iluminai os nossos corações, para que possamos
          cumprir os vossos preceitos. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Præsens sacrifícium, Dómine, quod tibi pro delíctis nostris offérimus, sit tibi munus
          accéptum: et tam vivéntibus quam defúnctis profíciat ad salútem. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Que este sacrifício, que Vos oferecemos em reparação dos nossos pecados, Vos seja
          agradável, Senhor, e que, tanto aos vivos como aos mortos, seja proveitoso para a sua
          salvação. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Exáudi preces famíliæ tuæ, omnípotens Deus: et præsta; ut sancta hæc, quæ a te súmpsimus,
          incorrúpta in nobis, te donánte, servántur. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus omnipotente, ouvi as preces da vossa família; e pela vossa graça concedei-nos, Vos
          suplicamos, que estes sacrossantos mystérios, que recebemos de vossas mãos, não sejam
          manchados no nosso íntimo. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
