import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PageActofe() {
  return (
    <PageWrapper>
      <H1 text="Acto de Fé" />

      <Language>
        <Typography className="latin">
          Dómine Deus, firma fide credo et confíteor ómnia et síngula quæ sancta
          Ecclésia Cathólica propónit, quia tu, Deus, ea ómnia revelásti, qui es
          ætérna véritas et sapiéntia quæ nec fállere nec falli potest. In hac
          fide vívere et mori státuo. Amen.
        </Typography>
        <Typography className="vernacular">
          Senhor Deus, creio firmemente e confesso todas e cada uma das coisas
          que a Santa Igreja Católica propõe, porque Vós, ó Deus, revelastes
          todas essas coisas, Vós, que sois a eterna verdade e sabedoria que não
          pode enganar nem ser enganada. Nesta fé, é minha determinação viver e
          morrer. Amen.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
