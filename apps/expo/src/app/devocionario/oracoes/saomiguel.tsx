import { Typography } from "~/components/typography";
import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageSaomiguel() {
  return (
    <PageWrapper>
      <H1 text="São Miguel Arcanjo" />

      <Language>
        <Typography className="latin">
          Sancte Míchaël Archángele, defénde nos in prælio; contra nequitiam et
          insidias diáboli esto præsídium. Imperet illi Deus, súpplices
          deprecámur: tuque, Princeps milítiæ cæléstis, Sátanam aliosque
          Spíritus malignos, qui ad perditionem animarum pervagantur in mundo,
          divina virtúte in inférnum detrude. Amen.
        </Typography>
        <Typography className="vernacular">
          São Miguel Arcanjo, defendei-nos no combate, sede o nosso auxílio
          contra as maldades e as ciladas do demónio. Instantemente vos pedimos
          que Deus sobre ele impere; e vós, Príncipe da Milícia Celeste, pelo
          poder divino, precipitai no inferno a Satanás e aos outros espíritos
          malignos que vagueiam pelo mundo para perdição das almas. Amen.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
