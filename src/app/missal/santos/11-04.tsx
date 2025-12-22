import { Link } from "expo-router";
import { H1, H2, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page1104() {
  return (
    <PageWrapper>
      <H1 text="S. Carlos Borromeu, B. e Conf., a 4 de Novembro" />

      <Typography className="comment">
        São Carlos foi suscitado por Deus para ser um dos principais
        instrumentos da verdadeira reforma da Igreja no século XVI. À sua
        prudência deve-se, em grande parte, a feliz conclusão do Concílio de
        Trento. Feito cardeal aos 23 anos de idade, e logo depois arcebispo de
        Milão (Intr., Ep., Grad., Comm., Off.) presidiu a Synodos e Concílios,
        estabeleceu colégios e comunidades, renovou o espírito de seu clero e
        dos mosteiros, e fundou asilos para os pobres e órfãos. A mais
        maravilhosa de suas obras foi a criação de seminários diocesanos, cujos
        regulamentos serviram de modelo a todos os que se estabeleceram mais
        tarde. Morreu em 1584.
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/11confessorespontifices1">
          Missa Státuit ei
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Ecclésiam tuam, Dómine, sancti Caróli Confessóris tui atque Pontíficis
          contínua protectióne custódi: ut, sicut illum pastorális sollicitúdo
          gloriósum réddidit; ita nos ejus intercéssio in tuo semper fáciat
          amóre fervéntes. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Pela protecção do vosso Santo Confessor e Pontífice Carlos, dignai-Vos
          guardar a vossa Igreja, Senhor, a fim de que, assim como a sua
          solicitude pastoral o tornou glorioso, assim também a sua intercessão
          nos obtenha perpétuo fervor no vosso amor. Por nosso Senhor...
        </Typography>
      </Language>

      <H2 text="Comemoração dos Santos Mártires" />

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Præsta, quǽsumus, omnípotens Deus: ut, qui sanctórum Mártyrum tuórum
          Vitális et Agrícolæ sollémnia cólimus, eórum apud te intercessiónibus
          adjuvémur. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus omnipotente, Vos rogamos, permiti que, celebrando a festa dos
          vossos Santos Mártires Vital e Agrícola, sejamos auxiliados pela sua
          intercessão junto de Vós. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Oblatis, quǽsumus, Dómine, placáre munéribus: et, intercedéntibus
          sanctis Martýribus tuis Vitále et Agrícola, a cunctis nos defénde
          perículis. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Deixai-Vos aplacar com os dons que Vos oferecemos, Senhor, e por
          intercessão dos vossos Santos Mártires Vital e Agrícola preservai-nos
          de todos os perigos. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Hæc nos commúnio, Dómine, purget a crímine: et, intercedéntibus
          sanctis Martýribus tuis Vitále et Agrícola, cœléstis remédii fáciat
          esse consórtes. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Que esta comunhão nos purifique dos nossos crimes, Senhor, e que por
          intercessão dos vossos Santos Mártires Vital e Agrícola nos faça
          participantes do remédio celestial. Por nosso S...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
