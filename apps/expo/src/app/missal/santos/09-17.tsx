import { Text, View } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";

export default function Page0917() {
  return (
    <PageWrapper>
      <H1 text="Imp. dos Estigmas em S. Francisco, a 17 de Setembro" />

      <H3 text="Intróito" />

      <Text className="em">Gl. 6, 14</Text>

      <Language>
        <Text className="latin">
          Mihi autem absit gloriári, nisi in Cruce Dómini nostri Jesu Christi:
          per quem mihi mundus crucifíxus est, et ego mundo.{" "}
          <Text className="latin">Ps. 141, 2</Text> Voce mea ad Dóminum clamávi:
          voce mea ad Dóminum deprecátus sum.
          <Text className="versicle"> ℣. </Text>Gloria Patri...
        </Text>
        <Text className="vernacular">
          Nunca, porém, Deus permita que me glorie senão na Cruz de nosso Senhor
          Jesus Cristo, por quem o mundo está crucificado para mim, como eu o
          estou para o mundo! <Text className="vernacular">Sl. 141, 2</Text>{" "}
          Elevei a minha voz ao Senhor: dirigi ao Senhor a minha voz suplicante!
          <Text className="versicle"> ℣. </Text>
          Glória ao Pai...
        </Text>
      </Language>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Dómine Jesu Christe, qui, frigescénte mundo, ad inflammándum corda
          nostra tui amóris igne, in carne beatíssimi Francísci passiónis tuæ
          sacra Stígmata renovásti: concéde propítius; ut ejus méritis et
          précibus crucem júgiter ferámus, et dignos fructus pœniténtiæ
          faciámus: Qui vivis...
        </Text>
        <Text className="vernacular">
          Senhor Jesus Cristo, que, quando a caridade resfriou no mundo,
          quisestes renovar os Sagrados Estigmas da vossa Paixão na carne do B.
          Francisco, para inflamar os nossos corações no fogo do vosso amor,
          concedei-nos, Vos suplicamos, que pelos seus méritos e preces
          abracemos continuamente a Cruz e pratiquemos dignos frutos de
          penitência. Ó Vós, que viveis e reinais...
        </Text>
      </Language>

      <H3 text="Epístola" />

      <Text className="em">Gl. 6, 14-18</Text>

      <Language>
        <Text className="latin">
          Léctio Epístolæ beáti Pauli Apóstoli ad Gálatas.
        </Text>
        <Text className="vernacular">
          Lição da Ep.ª do B. Ap.º Paulo aos Gálatas.
        </Text>
        <Text className="latin">
          Fratres: Mihi autem absit gloriári, nisi in Cruce Dómini nostri Jesu
          Christi: per quem mihi mundus crucifíxus est, et ego mundo. In Christo
          enim Jesu neque circumcísio áliquid valet neque præpútium, sed nova
          creatúra. Et quicúmque hanc régulam secúti fúerint, pax sin per illos
          et misericórdia, et super Israël Dei. De cetero nemo mihi moléstus
          sit: ego enim stígmata Dómini Jesu in córpore meo porto. Grátia Dómini
          nostri Jesu Christi cum spíritu vestro, fratres. Amen.
        </Text>
        <Text className="vernacular">
          Meus irmãos: Nunca Deus permita que me glorie senão na Cruz de nosso
          Senhor Jesus Cristo, por quem o mundo está crucificado para mim, como
          eu o estou para o mundo! Na verdade, em Jesus Cristo não é a
          circuncisão ou a incircuncisão que valem alguma coisa, mas cada um ser
          uma criatura nova. Que todos aqueles que seguirem esta regra
          experimentem paz e consolação, e do mesmo modo os que são o Israel (o
          povo) de Deus. Que doravante ninguém me dê desgosto algum, pois trago
          no meu coração os Estigmas do Senhor Jesus. Que a graça de nosso
          Senhor Jesus Cristo, meus irmãos, seja com vosso espírito. Amen.
        </Text>
      </Language>

      <H3 text="Gradual" />

      <Text className="em">Sl. 36, 30-31</Text>

      <Language>
        <Text className="latin">
          Os justi meditábitur sapiéntiam, et lingua ejus loquétur judícium.
          <Text className="versicle"> ℣. </Text>Lex Dei ejus in corde ipsíus: et
          non supplantabúntur gressus ejus.
        </Text>
        <Text className="vernacular">
          A boca do justo falará com sabedoria e a sua língua proclamará a
          justiça.<Text className="versicle"> ℣. </Text>A lei do seu Deus está
          sempre no seu coração e os seus pés não tropeçarão.
        </Text>
        <Text className="latin">
          Allelúja, allelúja.<Text className="versicle"> ℣. </Text>
          Francíscus pauper et húmilis cœlum dives ingréditur, hymnis cœléstibus
          honorátur. Allelúja.
        </Text>
        <Text className="vernacular">
          Aleluia, aleluia.<Text className="versicle"> ℣. </Text>Francisco,
          pobre e humilde, entra rico no céu: em sua honra ressoam hinos
          celestiais. Aleluia.
        </Text>
      </Language>

      <H3 text="Evangelho" />

      <LinkCard
        title="Intróito Mártir Pontífice"
        href="/missal/comum/3martirpontifice#evangelho"
      />

      <H3 text="Ofertório" />

      <Text className="em">Sl. 88, 25</Text>

      <Language>
        <Text className="latin">
          Véritas mea et misericórdia mea cum ipso: et in nómine meo exaltábitur
          cornu ejus.
        </Text>
        <Text className="vernacular">
          A minha fidelidade e a minha misericórdia estarão com ele; e por
          virtude do meu nome será exaltado o seu poder.
        </Text>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Text className="latin">
          Múnera tibi, Dómine, dicata sanctífica: et, intercedénte beáto
          Francísco, ab omni nos culpárum labe purífica. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Santificai, Senhor, os dons que Vos são oferecidos, e pela intercessão
          do B. Francisco purificai-nos dos nossos pecados. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Comúnio" />

      <Text className="em">Lc. 12, 42</Text>

      <Language>
        <Text className="latin">
          Fidélis servus et prudens, quem constítuit dóminus super famíliam
          suam: ut det illis in témpore trítici mensúram.
        </Text>
        <Text className="vernacular">
          Eis o servo fiel e prudente, destinado pelo Senhor para distribuir
          oportunamente a cada um na família a sua medida de trigo.
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Deus, qui mira Crucis mystéria in beáto Francísco Confessóre tuo
          multifórmiter demonstrásti: da nobis, quǽsumus; devotiónis suæ semper
          exémpla sectári, et assídua ejúsdem Crucis meditatióne muníri. Per
          Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que sob múltiplas formas manifestastes na pessoa do B.
          Francisco, vosso Confessor, os admiráveis mystérios da Cruz,
          concedei-nos, Vos rogamos, que possamos sempre seguir os exemplos da
          sua devoção e confortar-nos com a contínua meditação desta mesma Cruz.
          Por nosso...
        </Text>
      </Language>
    </PageWrapper>
  );
}
