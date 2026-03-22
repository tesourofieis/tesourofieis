import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page1109() {
  return (
    <PageWrapper>
      <H1 text="Dedicação da Basílica do Salvador, a 9 de Novembro" />

      <Typography className="comment">
        Entre as ricas e grandiosas basílicas romanas onde se celebraram, com grande magnificência,
        após a era das perseguições, as cerimónias do culto cristão, há uma que ocupa a primeira
        ordem, e cujo aniversário da Dedicação se festeja neste dia. Colocado sobre o monte Cœlius,
        o palácio dos Laterani pertencia a Fausta, mulher de Constantino. Esse imperador, depois de
        sua conversão, deu-o ao Papa como morada particular, e aí fundou a igreja do Latrão a qual
        se tornou a Mãe e Senhora de todas as igrejas de Roma e do mundo. A 9 de Novembro de 324, o
        Papa S. Silvestre consagrou-a dando-lhe o nome de basílica de São Salvador. Era a primeira
        consagração pública de uma igreja. Muito mais tarde, sob Lucio II (século XII), foi ela
        dedicada a São João Baptista, cujo nome havia sido dado ao batistério que lhe fora anexado.
        Em nossos dias é chamada S. João de Latrão. Nessa basílica e no palácio contíguo,
        realizaram-se, do século IV até ao século XVI, mais de vinte e cinco concílios, dos quais
        cinco ecuménicos. Aí se faziam as Estações nos dias mais solenes; eram celebradas as
        ordenações, reconciliados os penitentes, baptizados os catecúmenos no dia de Páscoa e,
        neófitos, iam á basilica em procissão durante toda a Oitava. Em São João de Latrão abre-se,
        no 1º Domingo da Quaresma, a grande Estação litúrgica consagrada à penitência, faz-se a
        reunião do Domingo de Ramos e da Terça-Feira das Rogações, procede-se ás cerimónias da
        Quinta-Feira Santa e do Sábado Santo, celebra-se a missa no Sábado in Albis e na Vigília de
        Pentecostes. A igreja, tendo sido destruída, foi reedificada e de novo consagrada por Bento
        XIII, em 1726. A memória dessa consagração foi fixada, assim como a primeira, para o dia 9
        de Novembro.
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/25dedicacaoigreja">
          Missa Terríbilis est
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui nos beáti Theodóri Mártyris tui confessióne gloriósa circúmdas et prótegis:
          præsta nobis ex ejus imitatióne profícere et oratióne fulcíri. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que nos guardais e protegeis pela gloriosa confissão do B. Teodoro, vosso Mártir,
          concedei-nos a graça de aproveitarmos com seus exemplos e de sermos auxiliados com suas
          orações. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Suscipe, Dómine, fidélium preces cum oblatiónibus hostiárum: et, intercedénte beáto
          Theodóro Mártyre tuo, per hæc piæ devotiónis offícia ad cœléstem glóriam transeámus. Per
          Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Recebei, Senhor, as preces dos fiéis juntamente com a oblata destas hóstias, a fim de que,
          pela intercessão do B. Teodoro, vosso Mártir, obtenhamos, em virtude destes mystérios de
          pia devoção, a graça de sermos conduzidos até à glória celestial. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Præsta nobis, quǽsumus, Dómine: intercedénte beáto Theodóro Mártyre tuo; ut, quod ore
          contíngimus, pura mente capiámus. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Permiti, Senhor, pela intercessão do B. Teodoro, vosso Mártir, que conservemos com o
          coração puro o sacramento que a nossa boca recebeu. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
