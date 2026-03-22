import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page27Humildade() {
  return (
    <PageWrapper>
      <H1 text="27.ª Para pedir a humildade" />

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui supérbis resístis et grátiam præstas humílibus: concéde nobis veræ humilitátis
          virtútem, cujus in se formam fidélibus Unigénitus tuus exhíbuit; ut numquam indignatiónem
          tuam provocémus elati, sed pótius grátiæ tuæ capiámus dona subjécti. Per eúndem Dóminum
          nostrum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que resistis aos soberbos e dais a graça aos humildes, concedei-nos a virtude da
          verdadeira humildade, da qual o vosso Filho Unigénito deu aos fiéis o exemplo, para que
          pelo nosso orgulho nunca incorramos na vossa indignação, mas, permanecendo humildes,
          recebamos os dons da vossa graça. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Hæc oblátio, Dómine, quǽsumus, veræ nobis humilitátis grátiam obtíneat: simúlque a
          córdibus nostris concupiscéntiam carnis et oculórum atque ambitiónem sǽculi áuferat;
          quaténus sóbrie, juste piéque vivéntes, prǽmia consequámur ætérna. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Que esta oblação, Senhor, Vos suplicamos, nos obtenha a graça da verdadeira humildade, e
          que ao mesmo tempo arranque dos nossos corações a concupiscência da carne e dos olhos,
          assim como a ambição do espírito do mundo, para que, vivendo nós com sobriedade, justiça e
          piedade, consigamos os prémios eternos. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Hujus, Dómine, sacraménti percéptio peccatórum nostrórum máculas abstérgat: et nos, per
          humilitátis exhibitiónem, ad cœléstia regna perdúcat. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Senhor, que a recepção deste sacramento possa lavar as máculas dos nossos pecados; e,
          praticando nós a humildade, nos conduza ao reino celestial. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
