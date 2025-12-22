import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page6Rei() {
  return (
    <PageWrapper>
      <H1 text="6.ª Pelo Rei" />

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Quǽsumus, omnípotens Deus: ut fámulus tuus{" "}
          <Typography className="latin">N.</Typography>, rex noster, qui tua
          miseratióne suscépit regni gubernácula, virtútum etiam ómnium
          percípiat increménta; quibus decénter ornátus, et vitiórum monstra
          devitáre et ad te, qui via, véritas et vita es, gratiósus váleat
          perveníre. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Vos suplicamos, ó omnipotente Deus, permiti que o vosso servo{" "}
          <Typography className="vernacular">N.</Typography>, nosso rei, o qual,
          por efeito da vossa misericórdia, recebeu as rédeas do governo,
          alcance também incremento em todas as virtudes, a fim de que, sendo,
          como convém, ornado com elas, possa evitar o horror dos vícios e,
          cheio de merecimentos, se aproxime de Vós, que sois o caminho, a
          verdade e a vida. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Múnera, Dómine, quǽsumus, oblata sanctífica: ut et nobis Unigéniti tui
          Corpus et Sanguis fiant; ei regi nostro ad obtinéndam ánimæ
          corporísque salútem, et peragéndum injúnctum offícium, te largiénte,
          usquéquaque profíciant. Per eúndem Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Santificai, Senhor, Vos imploramos, estas oblatas que Vos são
          oferecidas, a fim de que, para nosso proveito, se convertam no Corpo e
          no Sangue de vosso Filho Unigénito; e que, pela vossa misericórdia,
          sejam úteis ao nosso rei, para lhe alcançarem a salvação da alma e do
          corpo e o auxiliarem a desempenhar o cargo de que foi investido. Pelo
          mesmo nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Hæc, Dómine, oblátio salutáris fámulum tuum{" "}
          <Typography className="latin">N.</Typography>, regem nostrum, ab
          ómnibus tueátur advérsis: quaténus et ecclesiásticæ pacis obtíneat
          tranquillitátem; et, post hujus témporis decúrsum, ad ætérnam
          pervéniat hereditátem. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Senhor, que esta salutar oblação proteja o vosso servo{" "}
          <Typography className="vernacular">N.</Typography>, nosso rei, contra
          todas as adversidades, a fim de que alcance a tranquilidade, que
          proporciona a paz da Igreja, e, após esta vida, consiga a herança
          eterna. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
