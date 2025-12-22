import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page111() {
  return (
    <PageWrapper>
      <H1 text="Salmo 111" />

      <Language>
        <Typography className="latin">
          Beátus vir, qui timet Dóminum: * in mandátis ejus volet nimis.
        </Typography>
        <Typography className="vernacular">
          Bem-aventurado o varão que teme o Senhor: * muito se deliciará nos
          seus mandamentos.
        </Typography>
        <Typography className="latin">
          Potens in terra erit semen ejus: * generátio rectórum benedicétur.
        </Typography>
        <Typography className="vernacular">
          Poderosa será a sua semente sobre a terra: * bendita será a geração
          dos justos.
        </Typography>
        <Typography className="latin">
          Glória, et spanítiæ in domo ejus: * et justítia ejus manet in sǽculum
          sǽculi.
        </Typography>
        <Typography className="vernacular">
          Haverá glória e riqueza na sua casa: * e a sua justiça permanece por
          todos os séculos.
        </Typography>
        <Typography className="latin">
          Exórtum est in ténebris lumen rectis: * miséricors, et miserátor, et
          justus.
        </Typography>
        <Typography className="vernacular">
          Nas trevas surgiu uma luz para os rectos: * ele é misericordioso,
          compassivo e justo.
        </Typography>
        <Typography className="latin">
          Jucúndus homo qui miserétur et cómmodat, dispónet sermónes suos in
          judício: * quia in ætérnum non commovébitur.
        </Typography>
        <Typography className="vernacular">
          Ditoso o homem que se compadece e empresta, ele disporá os seus
          discursos com juízo: * pois nunca será abalado.
        </Typography>
        <Typography className="latin">
          In memória ætérna erit justus: * ab auditióne mala non timébit.
        </Typography>
        <Typography className="vernacular">
          A memória do justo será eterna: * não temerá ouvir notícias funestas.
        </Typography>
        <Typography className="latin">
          Parátum cor ejus speráre in Dómino, confirmátum est cor ejus: * non
          commovébitur donec despíciat inimícos suos.
        </Typography>
        <Typography className="vernacular">
          Seu coração está disposto a esperar no Senhor, fortalecido está o seu
          coração: * não será abalado até que observe os seus inimigos.
        </Typography>
        <Typography className="latin">
          Dispérsit, dedit paupéribus: justítia ejus manet in sǽculum sǽculi, *
          cornu ejus exaltábitur in glória.
        </Typography>
        <Typography className="vernacular">
          Distribuiu, deu aos pobres: a sua justiça permanece por todos os
          séculos, * o seu poder será exaltado em glória.
        </Typography>
        <Typography className="latin">
          Peccátor vidébit, et irascétur, déntibus suis fremet et tabéscet: *
          desidérium peccatórum períbit.
        </Typography>
        <Typography className="vernacular">
          Vê-lo-á o pecador e indignar-se-á, rangerá os dentes e dissipar-se-á:
          * o desejo dos pecadores perecerá.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
