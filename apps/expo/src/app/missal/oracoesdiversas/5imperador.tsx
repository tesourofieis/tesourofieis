import { Typography } from "~/components/typography";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page5Imperador() {
  return (
    <PageWrapper>
      <H1 text="5.ª Pelo Imperador" />

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, regnórum ómnium, et christiáni maxime protéctor impérii: da
          servo tuo imperatóri nostro <Typography className="latin">N.</Typography>{" "}
          triúmphum virtútis tuæ sciénter excólere; ut, qui tua institutióne est
          princeps, tuo sit semper múnere potens. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que sois o protector de todos os reinos e principalmente do
          império cristão, concedei ao imperador{" "}
          <Typography className="vernacular">N.</Typography> vosso servo, que governe sempre
          com sabedoria, para o triunfo do vosso poder, a fim de que, sendo
          príncipe em virtude da vossa instituição, seja sempre poderoso em
          virtude da vossa graça. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Súscipe, Dómine, preces et hóstias Ecclésiæ tuæ, pro salúte fámuli tui
          supplicántis: et in protectióne fidélium populórum antiqua bráchii tui
          operáre mirácula; ut, superátis pacis inimícis, secúra tibi sérviat
          christiána libértas. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Recebei, Senhor, as preces e as hóstias da vossa Igreja em favor da
          salvação do vosso servo suplicante, e operai os costumados prodígios
          do vosso poder para proteger os povos fiéis, a fim de que, sendo
          vencidos os inimigos da paz, a liberdade cristã permita que Vos possam
          servir com segurança. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Deus, qui ad prædicándum ætérni Regis Evangélium, Románum impérium
          præparásti: præténde fámulo tuo imperatóri nostro{" "}
          <Typography className="latin">N.</Typography> arma cœléstia; ut pax ecclesiárum
          nulla turbátur tempestáte bellórum. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que predestinastes o império romano para pregar o Evangelho do
          eterno Rei, entregai ao imperador{" "}
          <Typography className="vernacular">N.</Typography>, vosso servo, as armas
          celestiais, para que a paz das igrejas não seja perturbada pela
          tempestade feroz das guerras. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
