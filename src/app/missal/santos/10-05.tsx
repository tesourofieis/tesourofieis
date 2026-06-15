import { MissalRefLink as Link } from "~/components/MissalRefLink";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page1005() {
  return (
    <PageWrapper>
      <H1 text="S. Plácido e Comps. Mártires, a 5 de Outubro" />
      <Typography className="comment">
        A santidade de Bento, na gruta de Subiaco, atraiu-lhe, logo, numerosos discipulos, entre os
        quais, os dois mais illustres foram: S. Mauro, o apóstolo da Ordem Beneditina na França e
        São Plácido. Ambos, confiados ao Santo Patriarca, o primeiro aos doze anos de idade, e o
        segundo, desde os quatro annos, por seus pais que pertenciam às mais ilustres famílias
        patrícias de Roma, fizeram, sob a direcção de tal mestre, os mais rápidos progressos na
        santidade. São Bento tinha especial predilecção pelo jovem Plácido e, como o Salvador, que
        escolhia alguns de seus discípulos para serem testemunhas de seus milagres, o Santo gostava
        de ser acompanhado pelo piedoso menino, quando Deus lhe dava a graça de operar algum
        milagre. Um dia, tirando água do lago de Subiaco, caiu Plácido, e as ondas levavam-no para
        longe da margem. O homem de Deus enviou em seu socorro a Mauro o qual, caminhando
        milagrosamente sobre a água, salvou o menino. Tendo seguido S. Bento para o Monte Cassino
        com São Mauro, foi São Plácido um dos mais firmes apoios do grande Patriarca dos Monges do
        Ocidente. O Santo morreu em 541.
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/8muitosmartires3">
          Missa Salus autem
        </Link>{" "}
        , excepto
        <Link className="link" href="/missal/comum/7muitosmartires2#oração">
          Oração
        </Link>{" "}
        ,
        <Link className="link" href="/missal/comum/7muitosmartires2#secreta">
          Secreta
        </Link>{" "}
        e
        <Link className="link" href="/missal/comum/7muitosmartires2#postcomúnio">
          Postcomúnio
        </Link>{" "}
        da
        <Link className="link" href="/missal/comum/7muitosmartires2">
          Missa Sapiéntiam sanctórum.
        </Link>
      </Typography>
    </PageWrapper>
  );
}
