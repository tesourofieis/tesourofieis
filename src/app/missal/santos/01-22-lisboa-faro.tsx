import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0122LisboaFaro() {
  return (
    <PageWrapper>
      <H1 text="S. Vicente, Mártir, a 22 de Janeiro" />

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/4martirnaopontifice1">
          Missa In virtúte tua
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Adésto, Dómine, supplicatiónibus nostris: ut, qui ex iniquitáte nostra reos nos esse
          cognóscimus, beáti Vincéntii Martyris tui intercessióne liberémur. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Senhor, dignai-Vos ouvir as nossas súplicas, a fim de que, reconhecendo-nos réus diante de
          Vós pelas nossas iniquidades, sejamos livres delas por intercessão do vosso B. Mártir
          Vicente. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Evangelho" />

      <Typography className="em">Jo. 12, 24-26</Typography>

      <Language>
        <Typography className="latin">
          <Typography className="cross"> ✠ </Typography> Sequéntia sancti Evangélii secúndum
          Joánnem.
        </Typography>
        <Typography className="vernacular">
          <Typography className="cross"> ✠ </Typography> Continuação do santo Evangelho segundo S.
          João.
        </Typography>
        <Typography className="latin">
          In illo témpore: Dixit Jesus discípulis suis: Amen, amen, dico vobis, nisi granum fruménti
          cadens in terram, mórtuum fúerit, ipsum solum manet: si autem mórtuum fúerit, multum
          fructum affert. Qui amat ánimam suam, perdet eam: et qui odit ánimam suam in hoc mundo, in
          vitam ætérnam custódit eam. Si quis mihi mínistrat, me sequátur: et ubi sum ego, illic et
          miníster meus erit. Si quis mihi ministráverit, honorificábit eum Pater meus.
        </Typography>
        <Typography className="vernacular">
          Naquele tempo, disse Jesus aos seus discípulos: «Se o grão de trigo, caindo na terra, não
          morrer, permanece estéril; mas, se morrer, dará muito fruto. Aquele que ama a sua vida
          perdê-la-á; mas aquele que aborrece a sua vida neste mundo conservá-la-á para a vida
          eterna. Se alguém me serve, siga-me; e onde eu estiver lá estará também o meu servo. Se
          alguém me servir, meu Pai o honrará».
        </Typography>
      </Language>

      <H3 text="Ofertório" />

      <Typography className="em">Sl. 95, 6</Typography>

      <Language>
        <Typography className="latin">
          Conféssio et pulchritúdo in conspéctu ejus: sánctitas, et magnificéntia in sanctificatióne
          ejus.
        </Typography>
        <Typography className="vernacular">
          Rodeiam-no a glória e a majestade: e no seu santuário reluzem a santidade e a
          magnificência.
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Múnera tibi, Dómine, nostræ devotiónis offérimus: quæ et pro tuórum tibi grata sint honóre
          Justórum, et nobis salutária, te miseránte, reddántur. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Senhor, Vos oferecemos estes dons da nossa devoção; e que em consideração dos vossos
          Santos eles Vos sejam agradáveis, e pela vossa misericórdia nos sejam salutares. Por nosso
          Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Quǽsumus, omnípotens Deus: ut, qui cœléstia aliménta percépimus, intercedéntibus beáto
          Vincéntio Martýre tuo, per hæc contra ómnia advérsa muniámur. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus omnipotente, Vos suplicamos, fazei que, havendo nós recebido os alimentos
          celestiais, sejamos fortalecidos contra todas as adversidades por intercessão do vosso B.
          Mártir Vicente. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
