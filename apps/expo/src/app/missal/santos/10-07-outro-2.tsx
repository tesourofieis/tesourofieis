import { Typography } from "~/components/typography";
import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page1007Outro2() {
  return (
    <PageWrapper>
      <H1 text="S. S. Sérgio, Baco e Outros, Mártires, a 7 de Outubro" />

      <Typography className="comment">
        Na Baixa-Syria, diz o Martyrologio Romano, os santos Martyres Sérgio e
        Baco, nobres romanos que viveram sob o imperador Maximiano. Baco foi
        açoitado até ter as carnes despedaçadas; nesse suplício, expirou,
        confessando o nome de Jesus. Sergio, calçado com sapatos cujos pregos
        lhe rasgavam os pés, permaneceu firme na fé e foi degolado. Em Roma, os
        santos Martyres Marcello e Apuleo os quais, tendo sido primeiramente
        discípulos de Simão o Mágico, abandonaram-no para seguir a doutrina do
        Apóstolo S. Pedro. Após o suplício dos Apóstolos, eles próprios
        obtiveram a corda do martyrio sob Aureliano, e foram sepultados em Roma.
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/7muitosmartires2">
          Missa Sapiéntiam sanctórum
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Sanctórum Martyrum tuórum nos, Dómine, Sérgii, Bacchi, Marcélli et
          Apuléji beáta mérita prosequántur: et tuo semper fáciant amóre
          fervéntes. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Fazei, Senhor, que os méritos dos vossos Santos Mártires Sérgio, Baco,
          Marcelo e Apúlio nos acompanhem e nos comuniquem incessantemente o
          fervor do vosso amor. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Majestátem tuam nobis, Dómine, quǽsumus, hæc hóstia reddat immolánda
          placátam, tuórum digna postulatióne Sanctórum. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Que esta hóstia, que vai ser imolada em vosso louvor, Vos rogamos,
          Senhor, possa pelas dignas preces dos vossos Santos aplacar a vossa
          majestade. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Sacraméntis, Dómine, muniámur accéptis: et sanctórum Mártyrum tuórum
          Sérgii, Bacchi, Marcélli et Apuléji intercessióne, contra omnes
          nequítias irruéntes, annis cœléstibus protegámur. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Que os sacramentos que recebemos, Senhor, nos confortem; e que pela
          intercessão dos vossos Santos Sérgio, Baco, Marcelo e Apúlio sejamos
          fortalecidos com as armas celestiais e defendidos contra todos os
          ataques dos espíritos malignos. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
