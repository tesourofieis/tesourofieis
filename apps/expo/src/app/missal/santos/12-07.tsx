import { Typography } from "~/components/typography";
import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";

export default function Page1207() {
  return (
    <PageWrapper>
      <H1 text="S. Ambrósio. B. Conf. e Dr., a 7 de Dezembro" />

      <Typography className="comment">
        Santo Ambrósio, nascido em Tréveris, pelo ano de 335, é um dos quatro
        grandes Doutores da Igreja Latina. Quando ainda no berço, um enxame de
        abelhas entrou na boca do Santo, para aí trabalhar o seu mel: presságio
        de sua grande eloquência. Governador de Milão, Ambrósio foi
        providencialmente designado como bispo, pela voz de uma criança e
        tornou-se pregador incansável de que falam a Epístola e o Evangelho.
        Combateu os hereges, conseguiu que o imperador Teodósio se humilhasse e
        deu à Igreja S. Agostinho, cuja conversão vale a de reinos inteiros.
        Enriqueceu o Ofício Divino com hinos sagrados, mandou cantar os salmos
        por todo o povo dividido em coros. Esse grande bispo morreu em 397, na
        noite do Sábado Santo, depois de ter recebido o adorável Corpo de Jesus,
        que o levou para a sua bem-aventurada eternidade. À semelhança de
        Ambrósio, saibamos sempre manter com doce firmeza os direitos de Deus.
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/13doutores">
          Missa In médio Ecclésiae
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Gradual" />

      <Typography className="em">Ecl. 44, 16</Typography>

      <Language>
        <Typography className="latin">
          Ecce sacérdos magnus, qui in diébus suis plácuit Deo.
          <Typography className="versicle"> ℣. </Typography>
          <Typography className="latin">ibid., 20</Typography> Non est inventus símilis
          illi, qui conserváret legem Excélsi.
        </Typography>
        <Typography className="vernacular">
          Eis o grande sacerdote que nos dias da sua vida agradou a Deus.
          <Typography className="versicle"> ℣. </Typography>
          <Typography className="vernacular">ibid., 20</Typography> Ninguém o igualou na
          observância das leis do Altíssimo.
        </Typography>
        <Typography className="latin">
          Allelúja, allelúja.<Typography className="versicle"> ℣. </Typography>
          <Typography className="latin">Ps. 109, 4</Typography> Jurávit Dóminus, et non
          pænitébit eum: Tu es sacérdos in ætérnum, secúndum órdinem
          Melchísedech. Allelúja.
        </Typography>
        <Typography className="vernacular">
          Aleluia, aleluia.<Typography className="versicle"> ℣. </Typography>
          <Typography className="vernacular">Sl. 109, 4</Typography> O Senhor jurou e nunca
          se arrependerá: Tu és sacerdote para sempre, segundo a ordem de
          Melquisedeque. Aleluia.
        </Typography>
      </Language>

      <H3 text="Ofertório" />

      <Typography className="em">Sl. 88, 25</Typography>

      <Language>
        <Typography className="latin">
          Véritas mea et misericórdia mea cum ipso: et in nómine meo exaltábitur
          cornu ejus.
        </Typography>
        <Typography className="vernacular">
          A minha verdade e a minha misericórdia estarão com ele: e o seu poder
          elevar-se-á pelo meu nome.
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Omnípotens sempitérne Deus, múnera tuæ majestáti obláta, per
          intercessiónem beáti Ambrósii Confessóris tui atque Pontíficis, ad
          perpétuam nobis fac proveníre salútem. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Omnipotente e eterno Deus, permiti que os dons oferecidos à vossa
          majestade contribuam por intercessão do B. Ambrósio, vosso Confessor e
          Pontífice, para a nossa salvação eterna. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Comúnio" />

      <LinkCard
        href="/missal/santos/12-06#comúnio"
        title="S. Nicolau, B. e Conf."
      />

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Sacraménta salútis nostræ suscipiéntes, concéde, quǽsumus, omnípotens
          Deus: ut beáti Ambrósii Confessóris tui atque Pontíficis nos ubíque
          orátio ádjuvet; in cujus veneratióne hæc tuæ obtúlimus majestáti. Per
          Dóminum nostram...
        </Typography>
        <Typography className="vernacular">
          Havendo recebido os Sacramentos da nossa salvação, concedei-nos, ó
          Deus omnipotente, que sejamos sempre auxiliados pela oração do B.
          Ambrósio, vosso Confessor e Pontífice, em cuja honra oferecemos este
          sacrifício à vossa majestade. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
