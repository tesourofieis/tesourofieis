import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0528() {
  return (
    <PageWrapper>
      <H1 text="S. Agostinho de Cantorbéry, B. e C., a 28 de Maio" />

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/12confessorespontifices2">
          Missa Sacerdótes tui
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui Anglórum gentes, prædicatióne et miráculis beáti Augustíni Confessóris tui atque
          Pontíficis, veræ fídei luce illustráre dignátus es: concéde; ut, ipso interveniénte,
          errántium corda ad veritátis tuæ rédeant unitátem, et nos in tua simus voluntáte
          concórdes. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que pela pregação e milagres do B. Agostinho, vosso Confessor e Pontífice, Vos
          dignastes ilustrar com a luz da verdadeira fé a nação inglesa, concedei-nos por sua
          intercessão que os corações dos que andam transviados regressem à unidade da vossa fé, e
          sejamos concordes com vossa vontade. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Epístola" />

      <Typography className="em">1 Ts. 2, 2-9</Typography>

      <Language>
        <Typography className="latin">
          Léctio Epístolæ beáti Pauli Apóstoli ad Thessalonicénses.
        </Typography>
        <Typography className="vernacular">
          Lição da Ep.ª do B. Ap.º Paulo aos Tessalonicenses.
        </Typography>
        <Typography className="latin">
          Fratres: Fidúciam habúimus in Deo nostro loqui ad vos Evangélium Dei in multa
          sollicitúdine. Exhortátio enim nostra non de erróre neque de immundítia neque in dolo, sed
          sicut probáti sumus a Deo, ut crederétur nobis Evangélium: ita lóquimur, non quasi
          homínibus placéntes, sed Deo, qui probat corda nostra. Neque enim aliquándo fuimus in
          sermóne adulatiónis, sicut scitis: neque in occasióne avarítiæ: Deus testis est: nec
          quæréntes ab homínibus glóriam, neque a vobis neque ab áliis; cum possémus vobis óneri
          esse ut Christi Apóstoli: sed facti sumus párvuli in médio vestrum, tamquam si nutrix
          fóveat fílios suos. Ita desiderántes vos, cúpide volebámus trádere vobis non solum
          Evangélium Dei, sed étiam ánimas nostras: quóniam caríssimi nobis facti estis. Mémores
          enim estis, fratres, labóris nostri et fatigatiónis: nocte ac die operántes, ne quem
          vestrum gravarémus, prædicávimus in vobis Evangélium Dei.
        </Typography>
        <Typography className="vernacular">
          Meus irmãos: Tivemos confiança em o nosso Deus de vos pregar o Evangelho com muita
          solicitude, pois a nossa pregação não foi baseada nem no erro, nem em nenhuma intenção
          viciosa, nem na impostura, mas porque Deus nos julgou dignos de nos confiar o Evangelho.
          E, assim, falámos, não para agradar aos homens, mas a Deus, que perscruta os nossos
          corações. Com efeito, nunca a nossa linguagem (vós o sabeis e Deus é testemunha) serviu
          para adular, foi inspirada pela avareza, procurou a glória humana, ou a vossa ou a de
          outrem. Podíamos, como Apóstolos de Cristo, impor-nos a vós, mas tornamo-nos pequenos,
          como uma mãe que acaricia seus filhos. Assim, no nosso afecto por vós, desejamos
          ardentemente dar-vos, não somente o Evangelho de Deus, mas até a nossa própria vida, pois
          tanto vos tornastes caríssimos ao nosso coração! Decerto vos recordais, meus irmãos, do
          nosso trabalho e fadiga, porquanto trabalhámos dia e noite, a fim de não sermos onerosos a
          nenhum de vós, a quem pregamos o Evangelho de Deus.
        </Typography>
      </Language>

      <H3 text="Evangelho" />

      <LinkCard href="/missal/santos/02-06#evangelho" title="S. Tito, B. e Conf." />

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Sacrifícium tibi offérimus. Dómine, in sollemnitáte beáti Augustíni Pontíficis et
          Confessóris tui, humíliter deprecántes: ut oves, quæ periérunt, ad unum ovile revérsæ, hoc
          salutári pábulo nutriántur. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Vos oferecemos, Senhor, este sacrifício na solenidade do B. Agostinho, vosso Pontífice e
          Confessor, suplicando-Vos humildemente que as ovelhas perdidas, tendo regressado ao único
          aprisco, se sustentem com este salutar alimento. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Hóstia salutári refécti: te. Dómine, súpplices exorámus; ut eadem, beáti Augustíni
          interveniénte suffrágio, in omni loco nómini tuo júgiter immolétur. Per nominum nostrum...
        </Typography>
        <Typography className="vernacular">
          Saciados com a hóstia salutar, Senhor, Vos pedimos humildemente que pela intercessão dos
          sufrágios do B. Agostinho ela seja imolada em honra do vosso nome em todos os lugares e
          constantemente. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
