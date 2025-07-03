import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageAttendeDomine() {
  return (
    <PageWrapper>
      <Text className="h1">Attende Domine</Text>
      <Language>
        <Text className="latin">
          ℟. Attende, Domine, et miserere, quia peccavimus tibi.
        </Text>
        <Text className="vernacular">
          ℟. Ouve, Senhor, e tem piedade, porque pecamos contra Vós!
        </Text>
        <Text className="latin">
          Ad te Rex summe, omnium redemptor, oculos nostros sublevamus flentes:
          exaudi, Christe, supplicantum preces.
        </Text>
        <Text className="vernacular">
          A Vós, Rei Supremo, Redentor de todos, levantamos nossos olhos em
          pranto: escutai, ó Cristo, as preces dos que Vos suplicam.
        </Text>
        <Text className="latin">
          Dextera Patris, lapis angularis, via salutis, ianua caelestis, ablue
          nostri maculas delicti.
        </Text>
        <Text className="vernacular">
          Mão direita do Pai, pedra angular, caminho da salvação, porta do céu:
          lavai as manchas do nosso pecado.
        </Text>
        <Text className="latin">
          Rogamus, Deus, tuam maiestatem: auribus sacris gemitus exaudi: crimina
          nostra placidus indulge.
        </Text>
        <Text className="vernacular">
          Pedimos à vossa Majestade, ó Deus: escutai, com ouvidos sagrados,
          nossos gemidos; perdoai, Benigno, nossos crimes.
        </Text>
        <Text className="latin">
          Tibi fatemur crimina admissa: contrito corde pandimus occulta: tua
          Redemptor, pietas ignoscat.
        </Text>
        <Text className="vernacular">
          Nós Vos confessamos os pecados cometidos, com coração arrependido Vos
          manifestamos os ocultos: que vossa Misericórdia perdoe, ó Redentor.
        </Text>
        <Text className="latin">
          Innocens captus, nec repugnans ductus, testibus falsis pro impiis
          damnatus: quos redemisti, tu conserva, Christe.
        </Text>
        <Text className="vernacular">
          Preso inocentemente, conduzido sem fugir, condenado, em favor dos
          pecadores, por falsas testemunhas: conservai, ó Cristo, aqueles que
          salvastes!
        </Text>
      </Language>
      <Text className="aside">Nota: O refrão é cantado após cada verso.</Text>
    </PageWrapper>
  );
}
