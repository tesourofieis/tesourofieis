import { H1, H2 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";
import AveMaria from "./../devocionario/oracoes/avemaria";
import SaoMiguel from "./../devocionario/oracoes/saomiguel";

export default function PageOracoesleoninas() {
  return (
    <PageWrapper>
      <H1 text="Orações Leoninas" />

      <Typography className="aside">
        De joelhos diante do altar, o Sacerdote diz com os fiéis as seguintes
        preces prescritas pelo Papa Leão XIII e por Pio XI enriquecidas de
        indulgências (10 anos). Este último Papa mandou se rezassem pela
        conversão da Rússia.
      </Typography>

      <Typography className="aside">Ave Maria repete-se três vezes</Typography>

      <AveMaria />

      <H2 text="Salve Regina" />

      <Language>
        <Typography className="latin">
          Salve, Regína, mater misericórdiæ; vita, dulcédo et spes nóstra,
          salve. Ad te clamámus éxsules fílii Hevæ. Ad te suspirámus geméntes et
          flentes In hac lacrimárum valle. Eia ergo, advocáta nostra, illos tuos
          misericórdes óculos ad nos convérte. Et Iesum, benedíctum fructum
          ventris tui, nobis post hoc exsílium osténde. O clemens, o pia, o
          dulcis Virgo María.
        </Typography>
        <Typography className="vernacular">
          Salvé, Rainha, mãe de misericórdia, vida, doçura, esperança nossa,
          salve! A Vós bradamos, os degredados filhos de Eva. A Vós suspiramos,
          gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa,
          esses vossos olhos misericordiosos a nós volvei. E, depois deste
          desterro, nos mostrai Jesus, bendito fruto do vosso ventre. Ó
          clemente, ó piedosa, ó doce Virgem Maria.
        </Typography>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Ora pro nobis Sancta
          Dei Génitrix.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Rogai por nós, Santa
          Mãe de Deus.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Ut digni efficiámur
          promissiónibus Christi.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Para que sejamos
          dignos das promessas de Cristo.
        </Typography>
        <Typography className="latin">
          <Typography className="latin">Orémus.</Typography>
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">Oremos.</Typography>
        </Typography>
        <Typography className="latin">
          Deus, refúgium nostrum et virtus, pópulum ad te clamántem propítius
          réspice; et intercedénte gloriósa, et immaculáta Vírgine Dei Genitríce
          María, cum beáto Joseph, ejus Sponso, ac beatis Apóstolis tuis Petro
          et Paulo, et ómnibus Sanctis, quas pro conversióne peccatórum, pro
          libertáte et exaltatióne sanctæ Matris Ecclésiæ, preces effúndimus,
          miséricors et benígnus exáudi. Per eúndem Christum Dóminum nostrum.
        </Typography>
        <Typography className="vernacular">
          Meu Deus, refúgio e fortaleza nossa, atendei propício aos clamores do
          vosso povo, e, pela intercessão da gloriosa e imaculada Virgem Maria,
          Mãe de Deus, do Bem-aventurado S. José, seu Esposo, dos
          bem-aventurados Apóstolos Pedro e Paulo e de todos os Santos, ouvi
          benigno e misericordioso as preces que fervorosamente Vos dirigimos
          pela conversão dos pecadores e pela libertação da santa Madre Igreja.
          Pelo mesmo Cristo, nosso Senhor.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Amén.
        </Typography>
      </Language>

      <H1 text="Oração a São Miguel Arcanjo" />

      <SaoMiguel />

      <H2 text="Sagrado Coração de Jesus" />

      <Typography className="aside">
        S. Pio X pediu que se juntasse três vezes a seguinte jaculatória:
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography> Cor Jesu
          sacratíssimum:
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Coração sacratíssimo
          de Jesus:
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Miserére nobis.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Tende misericórdia
          de nós.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
