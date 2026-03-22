import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PageAttendeDomine() {
  return (
    <PageWrapper>
      <H1 text="Attende Domine" />
      <Language>
        <Typography className="latin">
          ℟. Attende, Domine, et miserere, quia peccavimus tibi.
        </Typography>
        <Typography className="vernacular">
          ℟. Ouve, Senhor, e tem piedade, porque pecamos contra Vós!
        </Typography>
        <Typography className="latin">
          Ad te Rex summe, omnium redemptor, oculos nostros sublevamus flentes: exaudi, Christe,
          supplicantum preces.
        </Typography>
        <Typography className="vernacular">
          A Vós, Rei Supremo, Redentor de todos, levantamos nossos olhos em pranto: escutai, ó
          Cristo, as preces dos que Vos suplicam.
        </Typography>
        <Typography className="latin">
          Dextera Patris, lapis angularis, via salutis, ianua caelestis, ablue nostri maculas
          delicti.
        </Typography>
        <Typography className="vernacular">
          Mão direita do Pai, pedra angular, caminho da salvação, porta do céu: lavai as manchas do
          nosso pecado.
        </Typography>
        <Typography className="latin">
          Rogamus, Deus, tuam maiestatem: auribus sacris gemitus exaudi: crimina nostra placidus
          indulge.
        </Typography>
        <Typography className="vernacular">
          Pedimos à vossa Majestade, ó Deus: escutai, com ouvidos sagrados, nossos gemidos; perdoai,
          Benigno, nossos crimes.
        </Typography>
        <Typography className="latin">
          Tibi fatemur crimina admissa: contrito corde pandimus occulta: tua Redemptor, pietas
          ignoscat.
        </Typography>
        <Typography className="vernacular">
          Nós Vos confessamos os pecados cometidos, com coração arrependido Vos manifestamos os
          ocultos: que vossa Misericórdia perdoe, ó Redentor.
        </Typography>
        <Typography className="latin">
          Innocens captus, nec repugnans ductus, testibus falsis pro impiis damnatus: quos
          redemisti, tu conserva, Christe.
        </Typography>
        <Typography className="vernacular">
          Preso inocentemente, conduzido sem fugir, condenado, em favor dos pecadores, por falsas
          testemunhas: conservai, ó Cristo, aqueles que salvastes!
        </Typography>
      </Language>
      <Typography className="aside">Nota: O refrão é cantado após cada verso.</Typography>
    </PageWrapper>
  );
}
