import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0122() {
  return (
    <PageWrapper>
      <H1 text="S. S. Vicente e Anastácio, Márts., a 22 de Janeiro" />

      <Typography className="comment">
        Vicente, o diácono de Saragoça, e Anastácio, monge da Pérsia, morreram no mesmo dia, com o
        intervalo de 324 anos (304-628), em Roma. Duas célebres igrejas lhes são dedicadas em comum
        e o mesmo culto associa os seus nomes na Igreja inteira. «Os seus nomes viverão eternamente»
        (Al.). Sob os imperadores Diocleciano e Maximiano, o diácono Vicente, como outrora o diácono
        Lourenço, é colocado sobre uma grelha, em carvões ardentes. «Deus os provou como o oiro na
        fornalha» (Ep.). Os dois nomes de Lourenço e Vicente seguem-se nas ladainhas dos Santos,
        pois as suas frontes «vitoriosas» são cingidas com os mesmos «louros». Santa Anastácio foi
        decapitado depois de atrozes suplícios, mas o Cristo, por cujo amor foi perseguido, o
        susteve. «A vossa dextra, Senhor, esmagou os inimigos» (Grad.). Sobre os carvões em braza,
        exclama Vicente: «Eu pensava que a vossa crueldade iria mais longe». Anastácio, por sua vez,
        declara: «Esperava um gênero de morte mais cruel». Peçamos a Deus, por intercessão deste
        santos Mártires, a graça de vencer as tentações e os vícios, alcançando a salvação. (Or.,
        Secr., Postcom.).
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/6muitosmartires1">
          Missa Intret in
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Adésto, Dómine, supplicatiónibus nostris: ut, qui ex iniquitáte nostra reos nos esse
          cognóscimus, beatórum Mártyrum tuórum Vincéntii et Anastásii intercessióne liberémur. Per
          Dóminum...
        </Typography>
        <Typography className="vernacular">
          Senhor, dignai-Vos ouvir as nossas súplicas, a fim de que, reconhecendo-nos réus diante de
          Vós pelas nossas iniquidades, sejamos livres delas por intercessão dos vossos B. B.
          Mártires Vicente e Anastácio. Por nosso Senhor...
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
          Quǽsumus, omnípotens Deus: ut, qui cœléstia aliménta percépimus, intercedéntibus beátis
          Martýribus tuis Vincéntio et Anastásio, per hæc contra ómnia advérsa muniámur. Per
          Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus omnipotente, Vos suplicamos, fazei que, havendo nós recebido os alimentos
          celestiais, sejamos fortalecidos contra todas as adversidades por intercessão dos vossos
          B. B. Mártires Vicente e Anastácio. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
