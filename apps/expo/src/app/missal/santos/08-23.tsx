import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0823() {
  return (
    <PageWrapper>
      <H1 text="S. Filipe Benício, Conf., a 23 de Agosto" />

      <Typography className="comment">
        Honramos hoje um Santo a quem a Santa Virgem apareceu a fim de lhe fazer
        conhecer que devia entrar para a Ordem dos Servitas, consagrada a honrar
        as dores que lhe mereceram a glória, motivo da nossa alegria, durante
        estes últimos oito dias. Nascido em Florença, da ilustre familia dos
        Benício, São Filipe deu, desde o berço, signais de sua futura santidade.
        Havia quinze anos que a Ordem dos Servos da Virgem Maria, dita dos
        Servitas, tinha sido instituída e o pequeno convento ficava não muito
        longe da cidade. Foi lá que, assistindo à Missa da Quinta-Feira da
        Semana de Pascoá, São Filipe se impressionou com as palavras da Epistola
        dirigidas pelo Espirito Santo ao diácono Filipe e, como tinha o mesmo
        nome, aplicou-se o texto da Escritura. Sentindo-se convidado pelo
        Espirito Santo a entrar nessa Ordem, tudo deixou a fim de obter o
        tesouro imperecível do Céu (Ev.). Entrando como irmão converso, foi,
        mais tarde, ordenado sacerdote e depois veio a ser geral dos Servitas.
        Os Cardeais, reunidos em Viterbo, quiseram elegê-lo Papa, o que, por
        humildade (Or.), recusou indo esconder-se nas montanhas. Ai floresceu
        como a palma e cresceu como o cedro do Líbano (Intr.). Deus chamou-o,
        então, a evangelizar a Itália, França e Alemanha. Ao voltar, foi
        confirmado no seu cargo para toda a vida. Aplicou-se em acalmar a
        animosidade existente entre os Guelfas, partidários do Papa, e os
        Gibelinos, partidários do imperador, correndo, então, sérios perigos, a
        que alude a Epístola. Uma febre ardente assaltou-o no dia da Assunção;
        morreu em Todi, em 1285, na Oitava dessa festa, contemplando a imagem do
        Salvador estendido na cruz. Peçamos a Deus a humildade de S. Filipe,
        para que, desprezando, a seu exemplo, os bens da terra, procuremos
        sempre os do céu (Or.).
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link href="/missal/comum/15confessoresnaopontifices2">
          Missa Justus ut palma,
        </Link>
        excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui per beátum Philippum Confessórem tuum, exímium nobis
          humilitátis exémplum tribuísti: da fámulis tuis próspera mundi ex ejus
          imitatióne despícere, et cœléstia semper inquírere. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que na pessoa do B. Filipe, vosso Confessor, nos
          proporcionastes exímio exemplo de humildade, fazei que os vossos
          servos, imitando-o, desprezem as alegrias deste mundo e procurem
          sempre as celestiais. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
