"use dom";
import { Link } from "expo-router";
import "../../../global.css";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page0425() {
  return (
    <div className="docs">
      <h1>S. Marcos, Evangelista, a 25 de Abril</h1>

      <aside>
        Como na{" "}
        <Link className="link" href="/missal/comum/9martir">
          Missa Protexísti me
        </Link>{" "}
        , excepto:
      </aside>

      <h3>Oração</h3>

      <div className="side-by-side">
        <p>
          Deus, qui beátum Marcum Evangelístam tuum evangélicæ prædicatiónis
          grátia sublimásti: tríbue, quǽsumus; ejus nos semper et eruditióne
          profícere et oratióne deféndi. Per Dóminum...
        </p>
        <p>
          Ó Deus, que glorificastes o Beato Marcos, vosso Evangelista,
          elevando-o à dignidade de pregador do vosso Evangelho, concedei-nos a
          graça, Vos suplicamos, de aproveitarmos sempre os seus ensinos e de
          sermos defendidos pela sua oração. Por nosso Senhor...
        </p>
      </div>

      <h3>Epístola</h3>

      <em>Ez. 1, 10-14</em>

      <div className="side-by-side">
        <p>Léctio Ezechiélis Prophétæ.</p>
        <p>Lição do Profeta Ezequiel.</p>
        <p>
          Similitúdo vultus quátuor animálium: fácies hóminis, et fácies leónis
          a dextris ipsórum quatuor: fácies autem bovis a sinístris ipsórum
          quátuor, et fácies áquilæ désuper ipsórum quátuor. Fácies eórum et
          pennæ eórum exténtæ désuper: duæ pennæ singulórum jungebántur et duæ
          tegébant córpora eórum: et unumquódque eórum coram fácie sua
          ambulábat: ubi erat ímpetus spíritus, illuc gradiebántur, nec
          revertebántur cum ambulárent. Et similitúdo animálium, aspéctus eórum
          quasi carbónum ignis ardéntium et quasi aspéctus lampadárum. Hæc erat
          visio discúrrens in médio animálium, splendor ignis, et de igne fulgur
          egrédiens. Et animália ibant et revertebántur in similitúdinem
          fúlguris coruscántis.
        </p>
        <p>
          Eis a semelhança do rosto dos quatro seres animados: Tinham todos os
          quatro uma face de homem; todos os quatro à direita uma face de leão;
          todos os quatro à esquerda uma face de touro; e todos os quatro por
          cima uma face de águia! As faces e as asas mostravam-se estendidas por
          cima; e estavam unidos uns aos outros por duas asas, cobrindo os
          corpos com as outras duas. Cada um deles caminhava para a frente do
          seu rosto, e iam até onde os impelia o espírito, não se voltando
          enquanto andavam. Estes seres tinham o aspecto de carvões de fogo a
          arder e de lâmpadas acesas. Viam-se crepitar no meio deles chamas de
          fogo, saindo do fogo relâmpagos. E eles iam e vinham, semelhante ao
          fuzilar dos relâmpagos.
        </p>
      </div>

      <h3>Evangelho</h3>

      <LinkCard
        href="/missal/santos/02-06#evangelho"
        title="S. Tito, B. e Conf."
      />

      <h3>Secreta</h3>

      <div className="side-by-side">
        <p>
          Beáti Marci Evangelístæ tui sollemnitáte tibi múnera deferéntes,
          quǽsumus, Dómine: ut, sicut illum prædicátio evangélica fecit
          gloriósum: ita nos ejus intercéssio et verbo et ópere tibi reddat
          accéptos. Per Dóminum...
        </p>
        <p>
          Oferecendo-Vos estes dons na solenidade do B. Marcos, vosso
          Evangelista, Vos rogamos, Senhor, que, assim como a pregação do
          Evangelho tornou o seu nome glorioso, assim também a sua intercessão
          nos torne agradáveis à vossa majestade, tanto pelas nossas palavras,
          como pelas nossas obras. Por nosso Senhor...
        </p>
      </div>

      <h3>Postcomúnio</h3>

      <div className="side-by-side">
        <p>
          Tríbuant nobis, quǽsumus, Dómine, contínuum tua sancta præsídium: quo,
          beáti Marci evangelístæ tui précibus, nos ab ómnibus semper tueántur
          advérsis. Per Dóminum...
        </p>
        <p>
          Vos imploramos, Senhor, que os vossos sacrossantos mystérios nos
          sirvam de contínua protecção, e que pelas preces do B. Marcos, vosso
          Evangelista, nos defendam de todas as adversidades. Por nosso
          Senhor...
        </p>
      </div>
    </div>
  );
}
