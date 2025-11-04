import { Typography } from "~/components/typography";
import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0127() {
  return (
    <PageWrapper>
      <H1 text="S. João Crisóstomo, B. C. e Doutor, a 27 de Janeiro" />

      <Typography className="comment">
        S. João Crisóstomo, nascido em Antioquia pelo ano de 347, era homem de
        grande génio, e sua poderosa eloquência valeu-lhe o sobrenome de
        Crisóstomo, boca de oiro. O povo de Constantinopla, ávido de ouvi-lo,
        reunia-se em grande número na sua Catedral. Apoderara-se de grande amor
        por S. Paulo, do qual dizia: « O coração de Paulo é o Coração de
        Cristo». Também ele amou apaixonadamente a Cristo e, à semelhança do
        Apóstolo, tudo suportou para não deixar lesar os direitos divinos. Com
        S. Atanásio, S. Gregório de Nazianzo e S. Basílio formam os quatro
        grandes Doutores da Igreja Oriental (Intr.). Arcebispo da cidade
        imperial, deu sempre àqueles dos quais se tornará o pai, o pão da
        palavra e da graça (Com.). A sua coragem em extirpar os vícios,
        «repreendendo em tempo e contratempo» (Ep.), a fim de ser constantemente
        o sal da sabedoria que garante as almas contra a corrupção (Ev.),
        valeu-lhe o exílio e toda a sorte de maus tratos (Al.). Morreu à comana
        da Transladação das suas relíquias sob Teodósio II em 438. Ouçamos com
        amor a palavra divina e coloquemo-lo no nosso coração, a fim de que a
        nossa vida seja o reflexo da vida de Deus.
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/13doutores">
          Missa In médio Ecclésiae
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Ecclésiam tuam, quǽsumus, Dómine, grátia cœléstis amplíficet: quam
          beáti Joánnis Chrysóstomi Confessóris tui atque Pontíficis illustráre
          voluísti gloriósis méritis et doctrínis. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Vos suplicamos, Senhor, que a graça celestial aumente a vossa Igreja,
          a qual quisestes ilustrar com os gloriosos méritos e ensinos do B.
          João Crisóstomo, vosso Confessor e Pontífice. Por nosso Senhor...
        </Typography>
      </Language>

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
          <Typography className="latin">Jac. 1, 12</Typography> Beátus vir, qui suffert
          tentatiónem: quóniam, cum probátus fúerit, accípiet corónam vitæ.
          Allelúja.
        </Typography>
        <Typography className="vernacular">
          Aleluia, aleluia.<Typography className="versicle"> ℣. </Typography>
          <Typography className="vernacular">Tg. 1, 12</Typography> Bem-aventurado o varão
          que sofre com paciência a tentação, porque, quando acabar a provação,
          alcançará a coroa da vida. Aleluia.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
