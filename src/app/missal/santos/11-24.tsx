import { MissalRefLink as Link } from "~/components/MissalRefLink";
import { H1, H2, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page1124() {
  return (
    <PageWrapper>
      <H1 text="S. João da Cruz, Conf. e Doutor, a 24 de Novembro" />

      <Typography className="comment">
        Depois de St. Theresa, a reformadora do Carmelo, a Egreja honra hoje a São João da Cruz,
        poderoso auxiliar da Santa nessa grande obra. Por elle, introduziu Santa Theresa a
        observancia primitiva nos mosteiros dos Carmos, como fizéra para as Carmelitas. A Santa Sé o
        julga egual a Sta Theresa nas explicações dos arcanos divinos. João, diz essa Santa, era uma
        das almas mais puras da Egreja. Deus The havia communicado ricos thesouros de luz e o seu
        entendimento estava repleto da sciencia dos Santos. Nascido na Antiga Castilha, em 1542,
        tomou o nome de João da Cruz ao entrar para a Ordem da Bemaventurada Virgem Maria do Monte
        Carmelo. Teve sempre grande devoção á Paixão do Senhor e sua virtude principal foi a
        perfeita abnegação de si mesmo, fazendo-o procurar os soffrimentos e as humilhações (Or.);
        pedia muitas vezes a Deus para não passar um só dia da vida sem soffrer, e morrer em logar
        onde fosse ignorado por todos. Foi plenamente attendido, pois a reforma do Carmelo valeu-lhe
        muitas penas. Atacado por cruel enfermidade, em Ubeda, morreu no amplexo de Jesus
        crucificado, exclamando: Gloria a Deus. Era o anno de 1591. Pio XI o proclamou Doutor da
        Egreja em 1926.
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
          Deus, qui sanctum Joánnem Confessórem tuum atque Doctorem perféctæ sui abnegatiónis et
          Crucis amatórem exímium effecísti: concéde; ut, ejus imitatióni júgiter inhæréntes,
          glóriam assequámur ætérnam. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que tornastes notável o vosso Santo Confessor e Doutor João pela abnegação
          perfeita de si próprio e pelo amor à Cruz, fazei que, diligenciando imitá-lo, alcancemos a
          glória eterna. Por nosso Senhor...
        </Typography>
      </Language>

      <H2 text="Comemoração de S. Crisógono" />

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Adésto, Dómine, supplicatiónibus nostris: ut, qui ex iniquitáte nostra reos nos esse
          cognóscimus, beáti Chrysógoni Mártyris tui intercessióne liberémur. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Ouvi as nossas súplicas, Senhor, a fim de que, reconhecendo-nos réus pelas nossas
          iniquidades, sejamos absolvidos pela intercessão do vosso B. Mártir Crisógono. Por nosso
          Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Oblatis, quǽsumus, Dómine, placáre munéribus: et, intercedénte beáto Chrysógono Mártyre
          tuo, a cunctis nos defénde perículis. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Deixai-Vos aplacar, Senhor, com a oferta destes dons, Vos suplicamos; e, pela intercessão
          do B. Crisógono, vosso Mártir, preservai-nos de todos os perigos. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Tui, Dómine, perceptióne sacraménti, et a nostris mundémur occúltis, et ab hóstium
          liberémur insídiis. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Que a recepção do vosso sacramento, Senhor, nos purifique das nossas faltas ocultas e nos
          livre das insídias dos nossos inimigos. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
