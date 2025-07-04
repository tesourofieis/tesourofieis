import { Text, View } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0515() {
  return (
    <PageWrapper>
      <H1 text="S. João Baptista de la Salle, Conf., a 15 de Maio" />

      <Text className="comment">
        Nascido em Reims, a 30 de Abril de 1651, duma ilustre família, S. João
        Baptista de la Salle, tornou-se caro a todos, desde a sua infância,
        pelas virtudes de sua alma, a doçura de sua natureza e vivacidade de
        espírito. Em Paris, estudou a teologia, na Sorbona, foi cónego da
        Metrópole, com 17 anos. Ordenado sacerdote, celebrou o Santo Sacrifício
        com fé mui viva e grande amor, conservando estes sentimentos sempre que
        subia ao altar. Deus o suscitou «para dar aos pobres o ensino cristão e
        firmar a mocidade no caminho da verdade». Fundou, com esse desígnio, uma
        nova congregação religiosa por ele intitulada «Os Irmãos das Escolas
        Cristãs», espalhada, em breve, por todo o mundo. Por humildade e pelo
        amor à pobreza renunciou ao canonicato distribuindo aos pobres todos os
        seus bens. «Inflamado de zelo pela salvação das almas», diz o Breviário,
        «consumiu a existência em trabalhar para seu maior bem. Castigava-se
        assiduamente por jejuns, flagelações e outras austeridades; passava
        noites em orações. Tal foi a sua vida, notável em todas as virtudes,
        especialmente na obediência e zelo no cumprimento da vontade divina,
        amor e dedicação para com a Sé Apostólica. Carregado de méritos,
        adormeceu no Senhor em Rouen, numa Sexta-Feira Santa a 7 de Abril de
        1719 com a idade de 68 anos». Aplicava-se em ocultar a sua vida nas mais
        humildes funções, servindo a Jesus nos pequeninos. Foi exaltado pelo
        Divino Ressuscitado, cuja glória compartilha, continuando a abençoar a
        sua obra, no universo inteiro. À imitação do Santo, «tenhamos grande
        zelo em procurar a glória de Deus salvando-lhes almas, a fim de
        merecermos igual recompensa no céu».
      </Text>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Deus, qui, ad christiánam páuperum eruditiónem et ad juvéntam in via
          veritátis firmándam, sanctum Joánnem Baptístam Confessórem excitásti,
          et novam per eum in Ecclésia famíliam collegísti: concéde propítius;
          ut ejus intercessióne et exémplo, stúdio glóriæ tuæ in animárum salúte
          fervéntes, ejus in cœlis corónæ partícipes fíeri valeámus. Per
          Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que para o ensino dos pobres e para a firmeza dos jovens no
          caminho da verdade fizestes aparecer o Santo Confessor João Baptista,
          pelo qual fundastes uma nova família na Igreja, concedei-nos propício
          que, pela sua intercessão e seguindo o seu exemplo, sejamos devorados
          pelo zelo da glória de Deus para a salvação das almas, a fim de que
          possamos tornar-nos seus companheiros de glória no céu. Por nosso
          Senhor...
        </Text>
      </Language>

      <H3 text="Evangelho" />

      <Text className="em">Mt. 18, 1-5</Text>

      <Language>
        <Text className="latin">
          <Text className="cross"> ✠ </Text> Sequéntia sancti Evangélii secúndum
          Matthǽum.
        </Text>
        <Text className="vernacular">
          <Text className="cross"> ✠ </Text> Continuação do santo Evangelho
          segundo S. Mateus.
        </Text>
        <Text className="latin">
          In illo témpore: Accessérunt discípuli ad Jesum, dicéntes: Quis,
          putas, major est in regno cœlórum? Et ádvocans Jesus párvulum, státuit
          eum in médio eórum et dixit: Amen, dico vobis, nisi convérsi fuéritis
          et efficiámini sicut párvuli, non intrábitis in regnum cœlórum.
          Quicumque ergo humiliáverit se sicut párvulus iste, hic est major in
          regno cœlórum. Et qui suscéperit unum párvulum talem in nómine meo, me
          súscipit.
        </Text>
        <Text className="vernacular">
          Naquele tempo, aproximaram-se de Jesus os seus discípulos,
          dizendo-Lhe: «Qual pensais Vós que é o maior no reino dos céus?». E
          Jesus, havendo chamado um pequeno, colocou-o no meio deles e disse:
          «Em verdade vos digo: se vos não converteis e vos não tornais como os
          pequenos, não entrareis no reino dos céus. Todo aquele, pois, que se
          fizer pequeno, como este menino, esse é o maior no reino dos céus; e
          quem receber um pequeno, como este, em meu nome, recebe-me a mim
          mesmo».
        </Text>
      </Language>
    </PageWrapper>
  );
}
