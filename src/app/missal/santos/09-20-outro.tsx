import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

import Missa from "../comum/7muitosmartires2";

export default function Page0920Outro() {
  return (
    <PageWrapper>
      <H1 text="S. Eustáquio e Outros, Mártires, a 20 de Setembro" />

      <Typography className="comment">
        Eustachio, chamado também Placido, era ilustre em Roma por seu nascimento, riquezas e valor
        militar. Certo dia, narra a legenda, perseguindo na caça um veado de tamanho prodigioso, o
        animal pára de repente, deixando ver, entre os chifres, a imagem de Jesus crucificado. A
        convite do Salvador, Eustachio tomou, dai por diante, como fim das suas pesquisas, a vida
        imortal e entrou com a esposa e os dois filhos para a milícia cristã. A abadia beneditina de
        Subiaco possuiu, por muito tempo, a montanha que antigas tradições diziam ter sido o lugar
        da aparição divina. Nomeado general do exército pelo imperador Trajano, Eustachio voltou
        vitorioso duma expedição, mas, tendo recusado dar, por esse triunfo, graças aos deuses, foi
        preso e entregue aos leões com sua mulher e filhos. Foram encerrados num boião de bronze
        incandescente, declara o Martyrologio, e consumaram o seu martírio por esse suplicio sob o
        imperador Adriano no anno 120. Santo Eustachio é um dos quatorze Santos Auxiliares.
      </Typography>

      <Missa />
    </PageWrapper>
  );
}
