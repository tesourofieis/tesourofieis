import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PagePangelingua() {
  return (
    <PageWrapper>
      <H1 text="Pange, lingua, gloriósi" />

      <Language>
        <Typography className="latin">
          Pange, lingua, gloriósi Córporis mystérium, Sanguinísque pretiósi, Quem in mundi prétium
          Fructus ventris generósi Rex effúdit géntium.
        </Typography>
        <Typography className="vernacular">
          Canta, ó minha língua, o mystério do Corpo e do Sangue precioso que foi derramado para
          resgate do mundo, fruto dum seio fecundo, o Rei dos povos.
        </Typography>
        <Typography className="latin">
          Nobis datus, nobis natus Ex intácta Vírgine, Et in mundo conversátus, Sparso verbi sémine,
          Sui moras incolátus Miro clausit órdine.
        </Typography>
        <Typography className="vernacular">
          Foi-nos dado; para nós nasceu da Virgem Imaculada; viveu no mundo, e, depois de haver
          espalhado a semente da palavra, terminou a sua passagem neste mundo com uma admirável
          instituição.
        </Typography>
        <Typography className="latin">
          In suprémæ nocte coenæ Recúmbens cum frátribus Observáta lege plene Cibis in legálibus,
          Cibum turbæ duodénæ Se dat suis mánibus.
        </Typography>
        <Typography className="vernacular">
          Na noite da última ceia, estando à mesa com seus irmãos depois de haver observado os ritos
          legais, Ele próprio se deu com suas mãos em alimento aos Doze.
        </Typography>
        <Typography className="latin">
          Verbum caro, panem verum Verbo carnem éfficit: Fitque sanguis Christi merum, Et si sensus
          déficit, Ad firmándum cor sincérum Sola fides súfficit.
        </Typography>
        <Typography className="vernacular">
          O Verbo feito carne mudou pela sua palavra um pão verdadeiro na própria Carne, e o vinho
          no Sangue de Cristo; e se a razão desfalece, não podendo compreender isto, a fé basta para
          corroborar esta crença nos corações sinceros.
        </Typography>
      </Language>

      <Language>
        <Typography className="latin">
          Tamtum ergo Sacraméntum Venerémur cérnui: Et antíquum documéntum Novo cedat rítui: Præstet
          fides suppleméntum Sénsuum deféctui.
        </Typography>
        <Typography className="vernacular">
          Adoremos, pois, prostrados este tão grande Sacramento: cedam os ritos antigos o lugar ao
          novo mystério e que a fé supra a fraqueza dos nossos sentidos.
        </Typography>
      </Language>

      <Language>
        <Typography className="latin">
          Genitóri, Genitóque Laus et jubilátio, Salus, honor, virtus quoque Sit et benedíctio:
          Procedénti ab utróque Compar sit laudátio. Amen. Alleluja.
        </Typography>
        <Typography className="vernacular">
          Glória, honra, louvor, poder, acção de graças e bênçãos sejam dadas ao Pai e ao Filho: e
          dêem-se iguais louvores ao que procede de um e do outro. Amen.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
