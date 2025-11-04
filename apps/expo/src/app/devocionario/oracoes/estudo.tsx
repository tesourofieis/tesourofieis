import { Typography } from "~/components/typography";
import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageEstudo() {
  return (
    <PageWrapper>
      <H1 text="Antes do Estudo, por São Tomás Aquino" />
      <Language>
        <Typography className="latin">
          Creátor Ineffábilis, qui de thesáuris Sapiéntiae tuae tres Angelórum
          hierarchías designásti, et eas super Caelum empyreum miro órdine
          collocásti, atque univérsi partes elegantíssime distribuísti, tu,
          inquam, qui verus fons lúminis et sapiéntiae díceris atque
          superéminens princípium infundere dignéris super intelléctus mei
          ténebras tuae rádium claritátis, dúplices, in quibus natus sum a me
          remóvens ténebras, peccátum scilicet et ignorántiam.
        </Typography>
        <Typography className="vernacular">
          Ó Criador inefável, que dos tesouros da vossa sabedoria elegestes três
          hierarquias de Anjos e as estabelecestes numa ordem admirável acima
          dos céus, e dispusestes com tanta beleza as partes do universo; Vós
          que sois chamado a fonte verdadeira e o Princípio supereminente da Luz
          e da Sabedoria, dignai-Vos enviar sobre as trevas da minha
          inteligência um raio da vossa claridade, afastando de mim as duplas
          trevas em que nasci, a do pecado e a da ignorância.
        </Typography>
        <Typography className="latin">
          Tu qui línguas infántium facis disértas, línguam meam erúdias atque in
          lábiis meis grátiam tuae benedictiónis infundas. Da mihi intelligéndi
          acúmen, retinéndi capacitátem, addiscéndi modum et facilitátem,
          interpretándi subtilitátem, loquéndi grátiam copiósam. Ingressum
          instruas, progréssum dirigas, egréssum cómpleas. Tu qui es verus Deus
          et homo, qui vivis et regnas in sáecula saeculórum. Amen.
        </Typography>
        <Typography className="vernacular">
          Vós que tornais eloquente a língua das crianças, formai a minha
          palavra e deitai sobre os meus lábios a graça da vossa bênção. Dai-me
          a penetração para compreender, capacidade para reter, mode e
          facilidade para aprender, subtileza para interpretar e graça copiosa
          para falar. Disponde o começo, dirigi o progresso, completai o fim;
          Vós que sois verdadeiro Deus e verdadeiro homem, e que viveis e
          reinais pelos séculos dos séculos. Amém.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
