"use dom";
import { Link } from "expo-router";
import "../../../global.css";

import React from "react";

export default function Page0830() {
  return (
    <div className="docs">
      <h1>Santa Rosa de Lima, Virgem, a 30 de Agosto</h1>

      <aside>
        Como na{" "}
        <Link className="link" href="/missal/comum/20virgemnaomartir1">
          Missa Dilexísti justitiam
        </Link>{" "}
        , excepto:
      </aside>

      <h3>Oração</h3>

      <div className="side-by-side">
        <p>
          Bonórum ómnium largítor, omnípotens Deus, qui beátam Rosam, cœléstis
          grátiæ rore prævéntam, virginitátis et patiéntiæ decóre Indis
          floréscere voluísti: da nobis fámulis tuis; ut, in odórem suavitátis
          ejus curréntes, Christi bonus odor éffici mereámur: Qui tecum...
        </p>
        <p>
          Ó Deus omnipotente, dispensador de todos os bens, que antecipadamente
          enriquecestes com o orvalho celestial da vossa graça a B. Rosa e que a
          fizestes florescer nas Índias com o brilho da virgindade e da
          paciência, concedei aos vossos servos que, correndo após o perfume das
          suas suaves virtudes, mereçamos tornar-nos o bom odor de Cristo: Que
          convosco vive e reina...
        </p>
      </div>

      <h2>Comemoração dos S. S. Mártires Félix e Adauto</h2>

      <h3>Oração</h3>

      <div className="side-by-side">
        <p>
          Majestátem tuam, Dómine, súpplices exorámus: ut, sicut nos júgiter
          Sanctórum tuórum commemoratióne lætíficas; ita semper supplicatióne
          deféndas. Per Dóminum nostrum...
        </p>
        <p>
          Dirigimos as nossas súplicas à vossa majestade, Senhor, a fim de que,
          assim como nos dais, na festa dos vossos Santos, perpétuo motivo de
          alegria, assim também, graças às suas orações, nos defendais
          perpetuamente. Por nosso Senhor...
        </p>
      </div>

      <h3>Secreta</h3>

      <div className="side-by-side">
        <p>
          Hóstias, Dómine, tuæ plebis inténde: et, quas in honóre Sanctórum
          tuórum devóta mente célebrat, profícere sibi séntiat ad salútem. Per
          Dóminum...
        </p>
        <p>
          Dignai-Vos lançar os vossos olhares, Senhor, para as hóstias do vosso
          povo, e, visto que ele Vo-las oferece com devoção em honra dos vossos
          Santos, fazei que sejam úteis à sua salvação. Por nosso Senhor...
        </p>
      </div>

      <h3>Postcomúnio</h3>

      <div className="side-by-side">
        <p>
          Repléti, Dómine, munéribus sacris: quǽsumus: ut, intercedéntibus
          Sanctis tuis, in gratiárum semper actióne maneámus. Per Dóminum
          nostrum...
        </p>
        <p>
          Saciados com os sacrossantos dons, Senhor, Vos imploramos, permiti,
          pela intercessão dos vossos Santos, que permaneçamos sempre em acção
          de graças. Por nosso Senhor...
        </p>
      </div>
    </div>
  );
}
