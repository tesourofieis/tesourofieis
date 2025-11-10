import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PageSuscipedomine() {
  return (
    <PageWrapper>
      <H1 text="Súscipe Dómine" />

      <Language>
        <Typography className="latin">
          Súscipe, Dómine, universam meam libertatem. Accipe memoriam,
          intellectum atque voluntatem omnem. Quidquid habeo vel possideo mihi
          largitus es; id tibi totum restituo, ac tuæ prorsus voluntati trado
          gubernandum. Amorem tui solum cum grátia tua mihi dones, et dives sum
          satis, nec aliud quidquam ultra posco. Amen.
        </Typography>
        <Typography className="vernacular">
          Tomai, Senhor e recebei toda minha liberdade, a minha memória, o meu
          entendimento e toda minha vontade, tudo o que tenho e possuo; Vós mo
          destes; a Vós, Senhor, o restituo. Tudo é vosso, disponde de tudo, à
          vossa inteira vontade. Dai-me o vosso amor e graça, que esta me basta.
          Amen.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
