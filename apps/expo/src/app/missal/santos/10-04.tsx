import { Typography } from "~/components/typography";
import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page1004() {
  return (
    <PageWrapper>
      <H1 text="S. Francisco, a 4 de Outubro" />

      <Typography className="comment">
        Nascido em Assis na Ombria, São Francisco foi suscitado por Deus para
        trabalhar ao mesmo tempo que São Domingos no reerguimento moral do
        mundo, numa das épocas mais perturbadas. Denominado João no Baptismo,
        recebeu do pai o nome de Francisco, por ter sido depois de uma feliz
        viagem comercial pela França que encontrou o filhinho recém nascido.
        Quanto mais esse sublime insensato, diz Montalambert, se escondia e
        aviltava para tornar-se digno, pela humildade e desprezo dos homens, de
        ser o veículo do amor divino, tanto mais, por maravilhoso efeito da
        graça, se precipitavam os homens a segui-lo. Francisco teve logo
        discipulos (Comm.) reduzidos à mesma pobreza e compartilhando-lhe o
        ardor pela conversão dos povos. Meus irmãos, dizia ele, preguemos a
        penitência, mais pelos exemplos do que pelas palavras. Deu-lhes uma
        Regra, aprovada em 1210 por Inocêncio III. No ano seguinte, obteve dos
        Beneditinos a pequena igreja de Nossa Senhora dos Anjos, chamada
        Porciuncula, que foi o berço de sua Ordem. A nova familia religiosa, com
        a qual ele enriqueceu a Igreja (Or.), multiplicou-se com tal rapidez
        que, cerca de dez anos depois do seu nascimento, reuniram-se cinco mil
        irmãos no capitulo geral, em Assis. Desejando que se considerassem como
        os minimos entre os religiosos, S. Francisco deu-lhes o nome de Irmãos
        Menores e ele próprio permaneceu simples diácono a vida toda. Ao lado
        desta primeira Ordem, fundou o Santo a segunda, a Ordem das Senhoras
        pobres ou Clarissas, assim chamada por causa da ilustre virgem de Assis,
        Santa Clara. Finalmente, em 1221, instituiu uma terceira Ordem
        denominada Ordem Terceira da penitência, à qual os Papas e,
        especialmente Leão XIII, que se ufanava de pertencer-lhe, não pouparam a
        mais poderosa animação e os maiores favores. S. Francisco enviou seus
        discípulos à França, Alemanha, Espanha e África; quis ele proprio ir á
        Palestina e a Marrocos; mas a divina Providência fê-lo parar em caminho.
        O amor divino que o abrasava valeu-lhe o sobrenome de Seraphico. A
        Igreja consagrou uma festa a 17 de Setembro (v. p. 1442) à impressão dos
        Sagrados Estigmas no corpo de S. Francisco (Ep.). No dia 4 de Outubro de
        1226 o Santo entregou sua alma a Deus ao terminar as últimas palavras do
        Psalmo 141: Tirai a minha alma de sua prisão, ó Senhor, a fim de ir
        cantar os vossos louvores.
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/santos/07-17">
          Missa Imp. dos Estigmas em S. Francisco
        </Link>{" "}
        , a 17 de Setembro, excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui Ecclésiam tuam, beáti Francisci méritis fœtu novæ prolis
          amplíficas: tríbue nobis; ex ejus imitatióne, terréna despícere et
          cœléstium donórum semper participatióne gaudére. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que pelos méritos do B. Francisco enriquecestes a vossa
          Igreja, dando-lhe uma nova família, concedei-nos a graça de imitá-lo,
          desprezando os bens terrenos, e de sempre nos alegrarmos com a
          participação dos dons celestiais. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Evangelho" />

      <Typography className="aside">
        Como na
        <Link href="/missal/santos/01-15#evangelho">
          Missa S. Paulo, 1.º Eremita, Conf.
        </Link>
      </Typography>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Ecclésiam tuam, quǽsumus, Dómine, grátia cœléstis amplíficet: quam
          beáti Francísci Confessóris tui illumináre voluísti gloriósis méritis
          et exémplis. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Dignai-Vos, Senhor, Vos suplicamos, com a graça celestial dilatar a
          vossa Igreja, a qual quisestes ilustrar com os gloriosos méritos e
          exemplos do B. Francisco, vosso Confessor. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
