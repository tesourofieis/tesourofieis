import { Link } from "expo-router";
import { H1, H2, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0510() {
  return (
    <PageWrapper>
      <H1 text="S. Antonino, B. Conf., a 10 de Maio" />

      <Typography className="aside">
        Como na <Link href="/missal/comum/11confessorespontifices1">Missa Státuit ei Dóminus,</Link>
        excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Sancti Antonini, Dómine, Confessóris tui atque Pontíficis méritis adjuvémur: ut, sicut te
          in illo mirábilem prædicámus, ita in nos misericórdem fuísse gloriémur. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Que os méritos de Santo Antonino, vosso Confessor e Pontífice, nos auxiliem, Senhor, de
          modo que, assim como Vos louvamos pelas maravilhas que operastes em seu proveito, assim
          também possamos glorificar as vossas misericórdias para connosco. Por nosso Senhor...
        </Typography>
      </Language>

      <H2 text="Comemoração dos S. S. Mártires Gordiano e Epímaco" />

      <Typography className="aside">
        Aquando da celebração da Missa S. S. Mártires Gordiano e Epímaco Como na
        <Link className="link" href="/missal/comum/10martires">
          Missa Sancti tui
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Da, quǽsumus, omnípotens Deus: ut, qui beatórum Mártyrum tuórum Gordiáni et Epimachi
          sollémnia cólimus, eórum apud te intercessiónibus adjuvémur. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Vos suplicamos, ó Deus omnipotente, permiti que, celebrando nós a festa dos vossos B. B.
          Mártires Gordiano e Epímaco, alcancemos o auxílio da sua intercessão junto de vós. Por
          nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Hóstias tibi, Dómine, beatórum Martyrum tuórum Gordiáni et Epimáchi dicátas méritis,
          benígnus assúme: et ad perpétuum nobis tríbue proveníre subsídium. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Aceitai benigno, Senhor, as hóstias que Vos oferecemos pelos méritos dos vossos B. B.
          Mártires Gordiano e Epímaco e fazei que nos sirvam de perpétuo auxílio. Por nosso
          Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Quǽsumus, omnípotens Deus: ut, qui cœléstia aliménta percépimus, intercedéntibus sanctis
          Martýribus tuis Gordiáno et Epímacho, per hæc contra ómnia advérsa muniámur. Per
          Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus omnipotente, Vos suplicamos, visto que recebemos o alimento celestial, dignai-Vos
          permitirm pela intercessão dos vossos Santos Mártires, que por este alimento sejamos
          robustecidos contra todas as adversidades. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
