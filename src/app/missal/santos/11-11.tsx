import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page1111() {
  return (
    <PageWrapper>
      <H1 text="S. Martinho, a 11 de Novembro" />

      <Typography className="comment">
        Os Santos honrados nos primeiros séculos eram Mártires; o primeiro Confessor honrado pela
        Igreja do Ocidente é São Martinho. Segundo nota Durand de Mende, a liturgia outorga-lhe
        ordem igual à dos Apóstolos, pois, ele terminou a evangelização das Gálias. O dia de sua
        festa era feriado por toda a parte. Muitas vezes favorecida pelos belos dias do verão, de S.
        Martinho, rivalizava em importância e festejos populares, com a de São João. Tinha sua
        Oitava, como S. Lourenço pois S. Martinho a pérola dos sacerdotes (Responso de Matinas)
        ocupa, entre os Confessores, a ordem que tem S. Lourenço entre os Mártires (Ant. das
        segundas Vésperas). São Martinho, nascido em Labaria, na Pannonia, foi á Gália, como
        soldado. Ainda catecúmeno, deu, um dia, perto de Amiens, parte do seu manto a um pobre, que
        lhe pedia esmola em nome de Cristo. Na noite seguinte, Jesus lhe apareceu revestido com esse
        manto, e disse: Martinho simples catecúmeno, cobriu-me com esta veste (Ant. de Matinas). Com
        dezoito anos, o Santo recebeu o baptismo e, tendo-se feito discípulo de Santo Hilário, Bispo
        de Poitiers, erigiu, a duas léguas da cidade episcopal, no deserto de Ligugé, um mosteiro ao
        qual se retirou com alguns discípulos, tornando-se, assim, o fundador do monaquismo nas
        Gálias. Mas, não quiz Deus ficasse essa luz escondida sob o alqueire (Ev.). São Martinho,
        arrancado à solidão, foi feito bispo de Tours (Intr., Ep, Grad.) estabelecendo, então, a
        celebre abadia de Marmoutiers ou grande mosteiro, onde se retirava muitas vezes, para fugir
        mais do mundo. Ai se achava cercado de oitenta monges, seguindo a vida dos solitários da
        Thebaida. Martinho viveu mais de oitenta anos, todo entregue à gloria de Deus e à salvação
        das almas. Morreu em Candes, perto de Tours, em 397. O seu túmulo foi ilustrado por muitos
        milagres, eis porque a ele afluíam todos, Gregorio de Tours, seu successor, não hesita em
        chamar o santo taumaturgo padroeiro especial do mundo inteiro. Poucos santos têm tido a sua
        popularidade. Só em França, existem cerca de quatro mil igrejas paroquiais sob o vocábulo de
        S. Martinho e quatrocentos e oitenta e cinco burgos ou aldeias ainda trazem o seu nome. Roma
        possui uma igreja dos Santos Silvestre e Martinho, onde é feita a Estação na Quinta-Feira da
        4ª semana da Quaresma. A capa de São Martinho era levada à frente dos exércitos, em tempo de
        guerra. Sobre ela eram prestados os juramentos solenes, em tempo de paz. Símbolo da
        protecção, com a qual o Apóstolo nacional cobria a França, essa capa deu seu nome ao
        oratório que a guardava e a todas as pequenas igrejas, que são denominadas capelas.
      </Typography>

      <Typography className="aside">
        Comemoração de S. Mena como na
        <Link href="/missal/comum/4martirnaopontifice1">Missa In virtúte tua</Link>.
      </Typography>

      <H3 text="Intróito" />

      <LinkCard
        href="/missal/comum/2martirpontificeforapascal#intróito"
        title="Mártir Pontífice - Missa Státuit ei Dóminus"
      />

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui cónspicis, quia ex nulla nostra virtúte subsístimus: concéde propítius; ut,
          intercessióne beáti Martíni...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que bem conheceis que não é pelo nosso poder que subsistimos, concedei-nos
          propício que, pela intercessão do B. Martinho, vosso Confessor e Pontífice, sejamos
          protegidos contra todas as adversidades. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Epístola" />

      <LinkCard
        href="/missal/comum/11confessorespontifices1#epístola"
        title="Confessores Pontífices - Missa Státuit ei Dóminus"
      />

      <H3 text="Gradual" />

      <Typography className="em">Ecl. 44, 16</Typography>

      <Language>
        <Typography className="latin">
          Ecce sacérdos magnus, qui in diébus suis plácuit Deo.
          <Typography className="versicle"> ℣. </Typography>
          <Typography className="latin">ibid., 20</Typography> Non est invéntus símilis illi, qui
          conserváret legem Excelsi.
        </Typography>
        <Typography className="vernacular">
          Eis o grande sacerdote que nos dias da sua vida agradou a Deus.
          <Typography className="versicle"> ℣. </Typography>
          <Typography className="vernacular">ibid., 20</Typography> Ninguém o igualou na observância
          das leis do Altíssimo.
        </Typography>
        <Typography className="latin">
          Allelúja, allelúja.<Typography className="versicle"> ℣. </Typography>
          Beátus vir, sanctus Martínus, urbis Turónis Epíscopus, requiévit: quem suscéperunt Angeli
          atque Archángeli, Throni, Dominatiónes et Virtútes. Allelúja.
        </Typography>
        <Typography className="vernacular">
          Aleluia, aleluia.<Typography className="versicle"> ℣. </Typography>O bem-aventurado varão
          Martinho, Bispo de Tours, dormiu no Senhor: e os Anjos, os Arcanjos, os Tronos, as
          Dominações e as Virtudes o acolheram. Aleluia.
        </Typography>
      </Language>

      <H3 text="Evangelho" />

      <Typography className="em">Lc. 11, 33-36</Typography>

      <Language>
        <Typography className="latin">
          <Typography className="cross"> ✠ </Typography> Sequéntia sancti Evangélii secúndum Lucam.
        </Typography>
        <Typography className="vernacular">
          <Typography className="cross"> ✠ </Typography> Continuação do santo Evangelho segundo S.
          Lucas.
        </Typography>
        <Typography className="latin">
          In illo témpore: Dixit Jesus discípulis suis: Nemo lucérnam accéndit, et in abscóndito
          ponit, neque sub módio: sed supra candelábrum, ut, qui ingrediúntur, lumen vídeant.
          Lucérna córporis tui est óculus tuus. Si óculus tuus fúerit simplex, totum corpus tuum
          lúcidum erit: si autem nequam fúerit, étiam corpus tuum tenebrósum erit. Vide ergo, ne
          lumen, quod in te est, ténebræ sint. Si ergo corpus tuum totum lúcidum fúerit, non habens
          áliquam partem tenebrárum, erit lúcidum totum, et sicut lucérna fulgóris illuminábit te.
        </Typography>
        <Typography className="vernacular">
          Naquele tempo, disse Jesus aos seus discípulos: «Ninguém acende uma lâmpada para a colocar
          num lugar oculto ou sob um alqueire; mas coloca-a sobre o candelabro, para que aqueles que
          entrarem vejam a luz. A lâmpada do teu corpo é o teu olho. Se o teu olho for simples, todo
          teu corpo será luminoso; mas se ele for mau, também o teu corpo será tenebroso. Tem, pois,
          cuidado de que a luz, que está em ti, não se torne em trevas. Se, portanto, todo teu corpo
          for luminoso sem parte alguma nas trevas, será ele brilhante, como quando uma lâmpada te
          ilumina com seu brilho».
        </Typography>
      </Language>

      <H3 text="Ofertório" />

      <Typography className="em">Sl. 88, 25</Typography>

      <Language>
        <Typography className="latin">
          Véritas mea et misericórdia mea cum ipso: et in nómine meo exaltábitur cornu ejus.
        </Typography>
        <Typography className="vernacular">
          A minha fidelidade e a minha misericórdia estarão com ele; e o seu poder elevar-se-á pelo
          meu nome.
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Sanctífica, quǽsumus, Dómine Deus, hæc múnera, quæ in sollemnitáte sancti Antístitis tui
          Martíni offérimus: ut per ea vita nostra inter advérsa et próspera ubíque dirigátur. Per
          Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Senhor e Deus, santificai, Vos rogamos, estes dons que Vos oferecemos na solenidade do
          Santo Bispo Martinho, vosso Mártir, a fim de que, graças a eles, a nossa vida se regule
          segundo a vossa vontade, tanto nas adversidades, como nas prosperidades. Por nosso
          Senhor...
        </Typography>
      </Language>

      <H3 text="Comúnio" />

      <Typography className="em">Mt. 24,46-47</Typography>

      <Language>
        <Typography className="latin">
          Beátus servus, quem, cum vénerit dóminus, invénerit vigilántem: amen, dico vobis, super
          ómnia bona sua constítuet eum.
        </Typography>
        <Typography className="vernacular">
          Bem-aventurado o servo que, quando o Senhor vier, encontrar vigilante. Em verdade vos digo
          que o encarregará de administrar todos seus bens.
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Præsta, quǽsumus, Dómine, Deus noster: ut, quorum festivitáte votíva sunt sacraménta,
          eórum intercessióne salutária nobis reddántur. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Fazei, Senhor, nosso Deus, que nos sejam salutares estes sacrossantos sacramentos, pela
          intercessão daqueles em cuja festa Vo-los apresentamos. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
