import { MissalRefLink as Link } from "~/components/MissalRefLink";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0809() {
  return (
    <PageWrapper>
      <H1 text="S. João Maria Vianney, a 8 de Agosto" />

      <Typography className="comment">
        João Vianney nasceu em Dardilly, perto de Lyon a 8 de Maio de 1786 Ordenado Sacerdote em
        Grenoble a 13 de Agosto de 1815 foi pároco de Ars cerca de 42 anos. Eu suscitarei para mim
        um sacerdote fiel que agirá segundo o meu coração e segundo a minha alma, diz dele a Igreja.
        Com efeito, foi admirável por seu zelo pastoral assim como pelo ardor constante de sua
        oração e penitência (Or.). À imitação do Mestre, pregava o Evangelho do reino do Céu e
        curava toda moléstia e enfermidade (Ev.); a sua palavra brilhava como um facho (All.),
        aliviava as almas ao mesmo tempo que os corpos. As multidões afluíam em torno do santo
        pároco, pois uma virtude saída dele operava curas (Comm.). As suas mortificações tornavam
        fecundo o seu apostolado, pois não se glorificava senão na cruz de Jesus (Intr.),
        regozijando-se de poder cumprir em sua carne o que falta aos sofrimentos do Cristo, para o
        seu corpo que é a Igreja (Or.). O Salvador, morrendo por nós, não nos dispensou de sofrermos
        e expiarmos as nossas faltas pela penitência; porém, aceita o sofrimento que Lhe oferecem os
        Santos, pela conversão dos pecadores. Pois Deus não quer a morte do pecador, mas que ele se
        converta de sua impiedade e tenha a vida da graça. O Bem-aventurado Vianney morreu a 4 de
        Agosto de 1859 e foi proclamado venerável por Pio IX em 1874. Em 1896, Leão XIII publicou o
        decreto de heroicidade de suas virtudes e Pio X feito Papa no dia aniversário do nascimento
        para o céu do santo cura d'Ars, promulgou, em 1904, o decreto de autenticidade de seus
        milagres, propondo-o por modelo ao clero do mundo inteiro. A 8 de Julho de 1905, declarou-o
        bem-aventurado, e Pio XI o canonizou em 1925. Oremos pelos nossos padres a fim de que pelo
        exemplo e intercessão do Bem-aventurado Vianney, ardam no amor das almas (Grad.) e ganhem
        todas ao Cristo e com elas alcancem a glória eterna (Or.).
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/14confessoresnaopontifices1">
          Missa Os justi
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Omnípotens et miséricors Deus, qui sanctum Joánnem Maríam pastoráli stúdio et jugi
          oratiónis ac pœniténtiæ ardóre mirábilem effecísti: da, quǽsumus; ut, ejus exémplo et
          intercessióne, ánimas fratrum lucrári Christo, et cum eis ætérnam glóriam cónsequi
          valeámus. Per eúndem Dóminum...
        </Typography>
        <Typography className="vernacular">
          Omnipotente e misericordioso Deus, que, pelo seu zelo pastoral e pelo seu ardor na oração
          e na penitência, tornastes admirável o B. João Maria, concedei-nos, Vos suplicamos, que,
          seguindo o seu exemplo e pela sua intercessão, possamos conquistar para Cristo as almas
          dos nossos irmãos e com eles alcançar a glória eterna. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
