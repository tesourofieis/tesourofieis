import { Typography } from "~/components/typography";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page7Preladoscongregacoes() {
  return (
    <PageWrapper>
      <H1 text="7.ª Pelos Prelados e Congregações" />

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Omnípotens sempitérne Deus, qui facis mirabília magna solus: præténde
          super fámulos tuos, et super congregatiónes illis commíssas, spíritum
          grátiæ salutáris; et, ut in veritáte tibi compláceant, perpétuum eis
          rorem tuæ benedictiónis infúnde. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Deus Omnipotente e eterno, que só Vós sois capaz de praticar grandes
          maravilhas, insuflai nos vossos servos e nas congregações confiadas
          aos seus cuidados o espírito da vossa graça, da qual vem a salvação;
          e, para que possam verdadeiramente agradar-Vos, infundi-lhes o orvalho
          perpétuo da vossa bênção. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Hóstias, Dómine, famulórum tuórum placátus inténde: et, quas in
          honórem nóminis tui devóta mente pro eis celebrámus, profícere sibi
          séntiant ad medélam. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Aceitai benigno, Senhor, as oblatas destes vossos servos; e, pois que
          nós as oferecemos piedosamente por eles, em honra do vosso nome,
          permiti que, para seu auxílio, elas lhes alcancem efeitos salutares.
          Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Quos cœlésti récreas múnere, perpétuo, Dómine, comitáre præsídio: et,
          quos fovére non désinis, dignos fíeri sempitérna redemptióne concéde.
          Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Acompanhai com vossa perpétua protecção, Senhor, aqueles a quem
          confortais com o dom celestial; e, como essa protecção é perpétua,
          concedei-lhes que se tornem dignos da redenção eterna. Por nosso
          Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
