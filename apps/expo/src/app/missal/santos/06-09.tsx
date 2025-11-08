import { Typography } from "~/components/typography";
import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";

export default function Page0609() {
  return (
    <PageWrapper>
      <H1 text="S. S. Primo e Feliciano, Mártires, a 9 de Junho" />

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
          Fac nos, quǽsumus. Dómine, sanctórum Martyrum tuórum Primi et
          Feliciáni semper festa sectári: quorum suffrágiis protectiónis tuæ
          dona sentiámus. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Permiti, Senhor, Vos rogamos, que celebremos sempre fielmente a festa
          dos vossos Santos Mártires Primo e Feliciano, a fim de que pela sua
          intercessão sintamos os benefícios da vossa protecção. Por nosso
          Senhor...
        </Typography>
      </Language>

      <H3 text="Gradual" />

      <Typography className="em">Sl. 88, 6 & 2</Typography>

      <Language>
        <Typography className="latin">
          Confitebúntur cœli mirabília tua, Dómine: etenim veritátem tuam in
          ecclésia sanctórum.<Typography className="versicle"> ℣. </Typography>
          Misericórdias tuas, Dómine, in ætérnum cantábo: in generatióne et
          progénie.
        </Typography>
        <Typography className="vernacular">
          Que os céus publiquem as vossas maravilhas, Senhor! Que se publique
          também na assembleia dos santos a vossa fidelidade.
          <Typography className="versicle"> ℣. </Typography>
          Cantarei eternamente as vossas misericórdias, Senhor! Sim, de geração
          em geração eu as cantarei!
        </Typography>
        <Typography className="latin">
          Allelúja, allelúja.<Typography className="versicle"> ℣. </Typography>
          Hæc est vera fratérnitas, quæ vicit mundi crímina: Christum secúta
          est, ínclita tenens regna cœléstia. Allelúja.
        </Typography>
        <Typography className="vernacular">
          Aleluia, aleluia.<Typography className="versicle"> ℣. </Typography>
          Esta é a verdadeira fraternidade que venceu os crimes do mundo. Ela
          seguiu Cristo, possuindo gloriosamente o reino celestial. Aleluia.
        </Typography>
      </Language>

      <H3 text="Evangelho" />

      <LinkCard
        href="/missal/santos/01-15-1#evangelho"
        title="S. Paulo, 1.º Eremita, Conf."
      />

      <H3 text="Ofertório" />

      <Typography className="em">Sl. 67, 36</Typography>

      <Language>
        <Typography className="latin">
          Mirábilis Deus in Sanctis suis: Deus Israël, ipse dabit virtútem et
          fortitúdinem plebi suæ: benedíctus Deus, allelúja.
        </Typography>
        <Typography className="vernacular">
          Deus é admirável em seus santos. É o Deus de Israel quem dá força e
          coragem ao seu povo. Bendito seja Deus, aleluia.
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Fiat tibi, quǽsumus, Dómine, hóstia sacránda placábilis, pretiósi
          celebritáte martýrii: quæ et peccáta nostra puríficet, et tuórum tibi
          vota concíliet famulórum. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Senhor, que esta hóstia, que vai ser consagrada na celebração deste
          precioso mystério, Vos aplaque; e, Vos suplicamos, que ela apague os
          nossos pecados e Vos torne agradáveis os votos dos vossos servos. Por
          nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Comúnio" />

      <Typography className="em">Jo. 15, 16</Typography>

      <Language>
        <Typography className="latin">
          Ego vos elegi de mundo, ut eátis et fructum afferátis: et fructus
          vester máneat.
        </Typography>
        <Typography className="vernacular">
          Eu vos escolhi no mundo, para que possais ir e alcanceis fruto; e que
          esse fruto permaneça.
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Quǽsumus, omnípotens Deus: ut sanctórum Mártyrum tuórum Primi et
          Feliciáni cœléstibus mystériis celebráta sollémnitas, indulgéntiam
          nobis tuæ propitiatiónis acquírat. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus omnipotente, Vos suplicamos, permiti que estes celestiais
          mystérios, com os quais celebramos a solenidade dos vossos Santos
          Mártires Primo e Feliciano, nos alcancem o perdão da vossa
          misericórdia. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
