import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0501Funchal() {
  return (
    <PageWrapper>
      <H1 text="S. Tiago, Apóstolo, a 1 de Maio" />

      <H3 text="Intróito" />

      <LinkCard href="/missal/comumn/9martir#intróito" title="Missa Protexísti me" />

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui nos ánnua beáti Jacóbi Apóstoli tui sollemnitáte lætíficas: præsta, quǽsumus; ut
          cujus gaudémus méritis, instruámur exémplis. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que nos alegrais com a solenidade anual dos Vosso B. Apóstolo Tiago, concedei-nos,
          Vos suplicamos, que, alegrando-nos com os seus méritos, sejamos instruídos com os seus
          exemplos. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Epístola" />

      <Typography className="em">Tg. 1, 17-21</Typography>

      <Language>
        <Typography className="latin">Léctio Epístolæ beáti Jacóbi Apóstoli.</Typography>
        <Typography className="vernacular">Lição da Ep.ª do B. Ap.º Tiago.</Typography>
        <Typography className="latin">
          Caríssimi: Omne datum óptimum, et omne donum perféctum desúrsum est, descéndens a Patre
          lúminum, apud quem non est transmutátio nec vicissitúdinis obumbrátio. Voluntárie enim
          génuit nos verbo veritátis, ut simus inítium áliquod creatúræ ejus. Scitis, fratres mei
          dilectíssimi. Sit autem omnis homo velox ad audiéndum: tardus autem ad loquéndum et tardus
          ad iram. Ira enim viri justítiam Dei non operátur. Propter quod abjiciéntes omnem
          immundítiam et abundántiam malítiæ, in mansuetúdine suscípite ínsitum verbum, quod potest
          salváre ánimas vestras.
        </Typography>
        <Typography className="vernacular">
          Caríssimos: Toda a graça excelente e todo o dom perfeito vêm do alto e descem do Pai das
          luzes, em quem não há inconstância, nem sombra de mudança. Espontaneamente criou-nos pela
          palavra da verdade, para que fôssemos como primícias de suas criaturas. Bem o sabeis,
          irmãos dilectíssimos: todo o homem esteja sempre pronto para ouvir; seja lento em falar; e
          mais tardo em irar-se, pois a ira do homem não está em harmonia com a justiça de Deus. Por
          isso deveis desprezar todas as impurezas e malícias e receber com docilidade a palavra que
          ouvistes, a qual tem poder para salvar as almas.
        </Typography>
      </Language>

      <Language>
        <Typography className="latin">
          Allelúja, allelúja.<Typography className="versicle"> ℣. </Typography>
          <Typography className="latin">Ps. 88, 6</Typography> Confitebúntur cœli mirabília tua,
          Dómine: étenim veritátem tuam in ecclésia sanctórum. Allelúja.
          <Typography className="versicle"> ℣. </Typography>Vos amici mei estis, si fecéritis quæ
          præcípio vobis. Allelúja.
        </Typography>
        <Typography className="vernacular">
          Aleluia, aleluia.<Typography className="versicle"> ℣. </Typography>
          <Typography className="vernacular">Sl. 88, 6</Typography> Senhor, que os céus festejem as
          vossas maravilhas; que a vossa verdade seja exaltada na assembleia dos santos. Aleluia.
          <Typography className="versicle"> ℣. </Typography>Sereis meus amigos, se fizerdes o que
          vos mando. Aleluia.
        </Typography>
      </Language>

      <H3 text="Evangelho" />

      <LinkCard
        href="/missal/comumn/1vigiliaapostolos#evangelho"
        title="Segundo Domingo da Quaresma"
      />

      <H3 text="Ofertório" />

      <Typography className="em">Sl. 91, 13</Typography>

      <Language>
        <Typography className="latin">
          Justus ut palma florébit: sicut cedrus, quæ in Líbano est multiplicábitur. (T. P.
          Allelúja.)
        </Typography>
        <Typography className="vernacular">
          O justo florescerá, como a palmeira, e crescerá, como o cedro do Líbano. (T. P. Aleluia.)
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Múnera, Dómine, quæ pro Apóstoli tui Jacóbi sollemnitáte deférimus, propítius súscipe: et
          mala ómnia, quæ meréraur, avérte. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Recebei propício, Senhor, os dons que Vos apresentamos na solenidade do vosso Apóstolo
          Tiago e afastai de nós todos os males que merecemos. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Comúnio" />

      <Typography className="em">Jo. 14, 9 & 10</Typography>

      <Language>
        <Typography className="latin">
          Non vos me elegistis, sed ego elégi vos, et pósui vos, ut eátis et fructum afferátis, et
          fructus vester máneat, aleluia.
        </Typography>
        <Typography className="vernacular">
          Não fostes vós que me escolhestes; senão Eu a vós; e vos instituí, para que possais ir e
          alcanceis fruto, e para que esse fruto permaneça, aleluia.
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Quǽsumus, Dómine, salutáribus repléti mystériis: ut cujus sollémnia celebrámus, eórum
          oratiónibus adjuvémur. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Saciados já com estes salutares mystérios, Senhor, Vos rogamos, permiti que sejamos
          socorridos com as orações daquele cuja festa celebramos. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
