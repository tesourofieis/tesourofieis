import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page27Humildade() {
  return (
    <PageWrapper>
      <Text className="h1">27.ª Para pedir a humildade</Text>

      <Text className="h3">Oração</Text>

      <Language>
        <Text className="latin">
          Deus, qui supérbis resístis et grátiam præstas humílibus: concéde
          nobis veræ humilitátis virtútem, cujus in se formam fidélibus
          Unigénitus tuus exhíbuit; ut numquam indignatiónem tuam provocémus
          elati, sed pótius grátiæ tuæ capiámus dona subjécti. Per eúndem
          Dóminum nostrum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que resistis aos soberbos e dais a graça aos humildes,
          concedei-nos a virtude da verdadeira humildade, da qual o vosso Filho
          Unigénito deu aos fiéis o exemplo, para que pelo nosso orgulho nunca
          incorramos na vossa indignação, mas, permanecendo humildes, recebamos
          os dons da vossa graça. Por nosso Senhor...
        </Text>
      </Language>

      <Text className="h3">Secreta</Text>

      <Language>
        <Text className="latin">
          Hæc oblátio, Dómine, quǽsumus, veræ nobis humilitátis grátiam
          obtíneat: simúlque a córdibus nostris concupiscéntiam carnis et
          oculórum atque ambitiónem sǽculi áuferat; quaténus sóbrie, juste
          piéque vivéntes, prǽmia consequámur ætérna. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Que esta oblação, Senhor, Vos suplicamos, nos obtenha a graça da
          verdadeira humildade, e que ao mesmo tempo arranque dos nossos
          corações a concupiscência da carne e dos olhos, assim como a ambição
          do espírito do mundo, para que, vivendo nós com sobriedade, justiça e
          piedade, consigamos os prémios eternos. Por nosso Senhor...
        </Text>
      </Language>

      <Text className="h3">Postcomúnio</Text>

      <Language>
        <Text className="latin">
          Hujus, Dómine, sacraménti percéptio peccatórum nostrórum máculas
          abstérgat: et nos, per humilitátis exhibitiónem, ad cœléstia regna
          perdúcat. Per Dóminum nostrum...
        </Text>
        <Text className="vernacular">
          Senhor, que a recepção deste sacramento possa lavar as máculas dos
          nossos pecados; e, praticando nós a humildade, nos conduza ao reino
          celestial. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
