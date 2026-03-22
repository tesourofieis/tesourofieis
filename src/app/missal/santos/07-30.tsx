import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0730() {
  return (
    <PageWrapper>
      <H1 text="S. S. Ábdon e Senen, Mártires, a 30 de Julho" />

      <Typography className="comment">
        Abdon e Sennen, nascidos na Pérsia, «foram presos e conduzidos a Roma, no tempo do imperador
        Valeriano. Espancados com cordas munidas de chumbo, foram, em seguida, degolados»
        (Martirológio romano). Era nos meados do século III (A. D. 254).
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/6muitosmartires1">
          Missa Intret in
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui sanctis tuis Abdon et Sennen ad hanc glóriam veniéndi copiósum munus grátiæ
          contulísti: da fámulis tuis suorum véniam peccatórum; ut, Sanctórum tuórum intercedéntibus
          méritis, ab ómnibus mereántur adversitátibus liberáti. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que conferistes aos vossos Santos Ábdon e Senen os tesouros abundantes da vossa
          graça para poderem alcançar a glória, concedei aos vossos servos o perdão dos seus
          pecados, a fim de que pelo valor dos méritos dos vossos Santos mereçamos ser livres de
          todas as adversidades. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Epístola" />

      <Typography className="em">2 Cor. 6, 4-10</Typography>

      <Language>
        <Typography className="latin">
          Lectio Epístolæ beati Pauli Apostoli ad Corinthios.
        </Typography>
        <Typography className="vernacular">
          Lição da Ep.ª do B. Ap.º Paulo aos Coríntios.
        </Typography>
        <Typography className="latin">
          Fratres: Exhibeámus nosmetípsos sicut Dei minístros, in multa patiéntia, in
          tribulatiónibus, in necessitátibus, in angústiis, in plagis, in carcéribus, in
          seditiónibus, in labóribus, in vigíliis, in jejúniis, in castitáte, in sciéntia, in
          longanimitáte, in suavitáte, in Spíritu Sancto, in caritáte non ficta, in verbo veritátis,
          in virtúte Dei, per arma justítiæ a dextris et a sinístris: per glóriam et ignobilitátem:
          per infámiam et bonam famam: ut seductóres et veráces: sicut qui ignóti et cógniti: quasi
          moriéntes et ecce, vívimus: ut castigáti et non mortificáti: quasi tristes, semper autem
          gaudéntes: sicut egéntes, multos autem locupletántes: tamquam nihil habéntes et ómnia
          possidéntes.
        </Typography>
        <Typography className="vernacular">
          Meus irmãos: Mostremo-nos dignos ministros de Deus em todas as coisas, principalmente com
          muita paciência, tanto nas tribulações, nas necessidades, nas angústias, nos açoites, nas
          prisões, nas revoltas, nas fadigas, nas vigílias e nos jejuns, como pela pureza, pela
          ciência, pela longanimidade, pela bondade, pelo Espírito Santo, pela verdadeira caridade,
          pela palavra da verdade, pelo poder de Deus, pelas armas da justiça com que combatemos à
          direita e à esquerda; na honra e na ignomínia; na boa e na má fama; sendo julgados
          sedutores, ainda que sejamos sinceros e verdadeiros; sendo julgados desconhecidos, e,
          contudo, sendo bastante conhecidos; sendo considerados moribundos, e, contudo, estando bem
          vivos; sendo considerados condenados, e, contudo, escapando à morte; sendo julgados
          tristes, mas estando alegres; sendo julgados pobres, mas enriquecendo muitos; sendo
          considerados como não tendo nada, mas possuindo tudo.
        </Typography>
      </Language>

      <H3 text="Gradual" />

      <Typography className="em">Ex. 15, 11</Typography>

      <Language>
        <Typography className="latin">
          Gloriosus Deus in Sanctis suis: mirábilis in majestáte, fáciens prodígia.
          <Typography className="versicle"> ℣. </Typography>
          <Typography className="latin">ibid., 6</Typography> Déxtera tua, Dómine, glorificáta est
          in virtúte: déxtera manus tua confrégit inimícos.
        </Typography>
        <Typography className="vernacular">
          Deus é glorioso em seus Santos: e admirável na sua majestade, praticando prodígios.
          <Typography className="versicle"> ℣. </Typography>
          <Typography className="vernacular">ibid., 6</Typography> Senhor, a vossa dextra
          engrandeceu-se pela sua força: a vossa dextra esmagou os inimigos.
        </Typography>
        <Typography className="latin">
          Allelúja, allelúja.<Typography className="versicle"> ℣. </Typography>
          <Typography className="latin">Sap. 3, 1</Typography> Justórum ánimæ in manu Dei sunt, et
          non tanget illos torméntum malítiæ. Allelúja.
        </Typography>
        <Typography className="vernacular">
          Aleluia, aleluia.<Typography className="versicle"> ℣. </Typography>
          <Typography className="vernacular">Sb. 3, 1</Typography> As almas dos justos estão nas
          mãos de Deus e o tormento da malícia os não ferirá. Aleluia.
        </Typography>
      </Language>

      <H3 text="Evangelho" />

      <Typography className="em">Mt. 5, 1-12</Typography>

      <Language>
        <Typography className="latin">
          <Typography className="cross"> ✠ </Typography> Sequéntia sancti Evangélii secúndum
          Matthǽum.
        </Typography>
        <Typography className="vernacular">
          <Typography className="cross"> ✠ </Typography> Continuação do santo Evangelho segundo S.
          Mateus.
        </Typography>
        <Typography className="latin">
          In illo témpore: Videns Jesus turbas, ascéndit in montem, et cum sedísset, accessérunt ad
          eum discípuli ejus, et apériens os suum, docébat eos, dicens: Beáti páuperes spíritu:
          quóniam ipsórum est regnum cœlórum. Beáti mites: quóniam ipsi possidébunt terram. Beáti,
          qui lugent: quóniam ipsi consolabúntur. Beáti, qui esúriunt et sítiunt justítiam: quóniam
          ipsi saturabúntur. Beáti misericórdes: quóniam ipsi misericórdiam consequántur. Beáti
          mundo corde: quóniam ipsi Deum vidébunt. Beáti pacífici: quóniam fílii Dei vocabúntur.
          Beáti, qui persecutiónem patiúntur propter justítiam: quóniam ipsórum est regnum cœlórum.
          Beáti estis, cum maledíxerint vobis, et persecúti vos fúerint, et díxerint omne malum
          advérsum vos, mentiéntes, propter me: gaudete et exsultáte, quóniam merces vestra copiósa
          est in cœlis.
        </Typography>
        <Typography className="vernacular">
          Naquele tempo, vendo Jesus as turbas do povo, que O seguiam, subiu para uma montanha.
          Então assentou-se, aproximando-se d’Ele os discípulos. Depois, tomando a palavra, ensinou
          assim aos discípulos: «Bem-aventurados os pobres de espírito, porque deles é o reino dos
          céus. Bem-aventurados os mansos, porque possuirão a terra. Bem-aventurados os que choram,
          porque serão consolados. Bem-aventurados os que têm fome e sede de justiça, porque serão
          saciados. Bem-aventurados os misericordiosos, porque serão tratados com misericórdia.
          Bem-aventurados os que possuem o coração puro, porque verão Deus. Bem-aventurados os
          pacíficos, porque serão chamados filhos de Deus. Bem-aventurados os que padecem
          perseguição por amor da justiça, porque lhes pertencerá o reino dos céus. Bem-aventurados
          vós, quando os homens vos amaldiçoarem, perseguirem e caluniarem por minha causa.
          Regozijai-vos, então, e exultai de alegria, pois uma copiosa recompensa vos está preparada
          no céu».
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Hæc hóstia, quǽsumus, Dómine, quam sanctórum Mártyrum tuórum natalítia recenséntes
          offérimus: et víncula nostræ pravitátis absolvat, et tuæ nobis misericórdiæ dona
          concíliet. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Senhor, Vos suplicamos, fazei que esta hóstia, que Vos oferecemos em honra do nascimento
          no céu dos vossos Santos Mártires, nos livre das cadeias dos nossos pecados e nos alcance
          os dons da vossa misericórdia. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Comúnio" />

      <Typography className="em">Sl. 78, 2 & 11</Typography>

      <Language>
        <Typography className="latin">
          Posuérunt mortália servórum tuórum, Dómine, escas volatílibus cœli, carnes Sanctórum
          tuórum béstiis terræ: secúndum magnitúdinem bráchii tui pósside fílios morte punitórum.
        </Typography>
        <Typography className="vernacular">
          Senhor, deram como alimento às aves do céu os corpos dos vossos servos, que haviam sido
          mortos, e deram as carnes dos vossos Santos às feras da terra. Pelo poder do vosso braço
          Conservai os filhos daqueles que foram mortos.
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Per hujus, Dómine, operationem mystérii, et vitia nostra purgéntur: et, intercedéntibus
          sanctis Martyribus tuis Abdon et Sennen, justa desidéria compleántur. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Fazei, Senhor, pela virtude deste mystério, que os nossos vícios sejam apagados e que,
          pela intercessão dos vossos Santos Mártires Ábdon e Senen, sejam realizados os nossos
          justos desejos. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
