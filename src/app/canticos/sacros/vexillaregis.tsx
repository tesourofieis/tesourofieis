import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PageVexillaregis() {
  return (
    <PageWrapper>
      <H1 text="Vexílla Regis" />

      <Language>
        <Typography className="latin">
          Vexílla Regis pródeunt: Fúlget Crucis mystérium, Qua vita mortem pértulit, Et morte vitam
          prótulit.
        </Typography>
        <Typography className="vernacular">
          Ó nobre estandarte do Rei dos reis, ó misteriosa Cruz, aparece agora, pois a vida sofreu a
          morte, e pela sua morte nos deu a vida!
        </Typography>
        <Typography className="latin">
          Quæ, vulneráta lánceæ Mucróne diro, críminum Ut nos laváret sórdibus, Manávit unda et
          sánguine.
        </Typography>
        <Typography className="vernacular">
          Do seu lado, ferido pela cruel lança, correm a água e o sangue, destinados a lavrar a
          nódoa dos nossos crimes.
        </Typography>
        <Typography className="latin">
          Impléta sunt quæ cóncinit David fidéli cármine, Dicéndo natiónibus : Regnávit a ligno
          Deus.
        </Typography>
        <Typography className="vernacular">
          Cumpriu-se o oráculo de David, que nos seus cânticos inspirados havia anunciado às nações:
          «Deus reinará pelo madeiro».
        </Typography>
        <Typography className="latin">
          Arbor decóra et fúlgida, Ornáta Regis púrpura, Elécta digno stípite Tam sancta membra
          tángere.
        </Typography>
        <Typography className="vernacular">
          Sois bela e brilhante de gloória, ó árvore enaltecida com a púrpura do Rei: tronco
          escolhido e julgado digno de tocar nos membros dos santos.
        </Typography>
        <Typography className="latin">
          Beáta, cuius bráchiis Prétium pepéndit sǽculi, Statéra facta córporis, Tulítque prædam
          tártari.
        </Typography>
        <Typography className="vernacular">
          Ó feliz Cruz, de cujos braços pendeu o penhor do mundo! Fostes a balança que pesou o
          Corpo, cujo peso arrancou ao inferno a sua presa!
        </Typography>
        <Typography className="latin">
          O Crux, ave, spes única, Hoc Passiónis témpore Piis adáuge grátiam, Reísque dele crímina.
        </Typography>
        <Typography className="vernacular">
          Salve, ó Cruz, nossa única esperança, nestes dias consagrados a honrar a Paixão do
          Salvador concedei aos justos aumento da graça e aos pecadores apagai seus crimes.
        </Typography>
        <Typography className="latin">
          Te, fons salútis, Trínitas, Colláudet omnis spíritus : Quibus Crucis victóriam Largíris,
          adde prǽmium. Amen.
        </Typography>
        <Typography className="vernacular">
          Que todos os espíritos cantem vossos louvores, ó Trindade, fonte da nossa salvação. Vós,
          que nos dais a vitória pela Cruz, dignai-Vos aumentá-la com a recompensa. Amen.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
