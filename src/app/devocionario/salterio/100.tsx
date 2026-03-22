import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page100() {
  return (
    <PageWrapper>
      <H1 text="Salmo 100" />

      <Language>
        <Typography className="latin">Misericórdiam et judícium * cantábo tibi, Dómine:</Typography>
        <Typography className="vernacular">
          Misericórdia e justiça * Vos cantarei, ó Senhor:
        </Typography>
        <Typography className="latin">
          Psallam, et intéllegam in via immaculáta, * quando vénies ad me.
        </Typography>
        <Typography className="vernacular">
          Cantarei e procurarei conhecer o caminho da perfeição, * quando vierdes a mim.
        </Typography>
        <Typography className="latin">
          Perambulábam in innocéntia cordis mei, * in médio domus meæ.
        </Typography>
        <Typography className="vernacular">
          Caminhava na inocência do meu coração, * no meio da minha casa.
        </Typography>
        <Typography className="latin">
          Non proponébam ante óculos meos rem injústam: * faciéntes prævaricatiónes odívi.
        </Typography>
        <Typography className="vernacular">
          Não punha ante meus olhos coisa injusta: * aborrecia os que cometiam transgressões.
        </Typography>
        <Typography className="latin">
          Non adhǽsit mihi cor pravum: * declinántem a me malígnum non cognoscébam.
        </Typography>
        <Typography className="vernacular">
          Não se unia a mim coração depravado: * o mau afastava-se de mim e eu o não conhecia.
        </Typography>
        <Typography className="latin">
          Detrahéntem secréto próximo suo, * hunc persequébar.
        </Typography>
        <Typography className="vernacular">
          Ao que secretamente detraia o seu próximo, * eu o perseguia.
        </Typography>
        <Typography className="latin">
          Supérbo óculo, et insatiábili corde, * cum hoc non edébam.
        </Typography>
        <Typography className="vernacular">
          Com homem de olhos soberbos e de coração insaciável, * com esse não comia.
        </Typography>
        <Typography className="latin">
          Óculi mei ad fidéles terræ ut sédeant mecum: * ámbulans in via immaculáta, hic mihi
          ministrábat.
        </Typography>
        <Typography className="vernacular">
          Meus olhos buscavam os fiéis da terra para que se sentassem comigo: * andava por caminho
          inocente, esse me servia.
        </Typography>
        <Typography className="latin">
          Non habitábit in médio domus meæ qui facit supérbiam: * qui lóquitur iníqua, non diréxit
          in conspéctu oculórum meórum.
        </Typography>
        <Typography className="vernacular">
          Não habitará na minha casa o que com soberba procede: * o que diz iníquidade não pôde
          tornar-se agradável aos meus olhos.
        </Typography>
        <Typography className="latin">
          In matutíno interficiébam omnes peccatóres terræ: * ut dispérderem de civitáte Dómini
          omnes operántes iniquitátem.
        </Typography>
        <Typography className="vernacular">
          Pela manhã exterminava todos os pecadores da terra: * a fim de suprimir da cidade do
          Senhor todos os que cometem a iniquidade.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
