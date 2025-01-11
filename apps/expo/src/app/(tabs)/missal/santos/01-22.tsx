"use dom";
import { Link } from "expo-router";
import "../../../../global.css";

import React from "react";

export default function Page0122() {
  return (
    <div className="docs">
      <h1>S. S. Vicente e Anastácio, Márts., a 22 de Janeiro</h1>

      <aside>
        Como na{" "}
        <Link className="link" href="/missal/comum/6muitosmartires1">
          Missa Intret in
        </Link>{" "}
        , excepto:
      </aside>

      <h3>Oração</h3>

      <div className="side-by-side">
        <p>
          Adésto, Dómine, supplicatiónibus nostris: ut, qui ex iniquitáte nostra
          reos nos esse cognóscimus, beatórum Mártyrum tuórum Vincéntii et
          Anastásii intercessióne liberémur. Per Dóminum...
        </p>
        <p>
          Senhor, dignai-Vos ouvir as nossas súplicas, a fim de que,
          reconhecendo-nos réus diante de Vós pelas nossas iniquidades, sejamos
          livres delas por intercessão dos vossos B. B. Mártires Vicente e
          Anastácio. Por nosso Senhor...
        </p>
      </div>

      <h3>Secreta</h3>

      <div className="side-by-side">
        <p>
          Múnera tibi, Dómine, nostræ devotiónis offérimus: quæ et pro tuórum
          tibi grata sint honóre Justórum, et nobis salutária, te miseránte,
          reddántur. Per Dóminum...
        </p>
        <p>
          Senhor, Vos oferecemos estes dons da nossa devoção; e que em
          consideração dos vossos Santos eles Vos sejam agradáveis, e pela vossa
          misericórdia nos sejam salutares. Por nosso Senhor...
        </p>
      </div>

      <h3>Postcomúnio</h3>

      <div className="side-by-side">
        <p>
          Quǽsumus, omnípotens Deus: ut, qui cœléstia aliménta percépimus,
          intercedéntibus beátis Martýribus tuis Vincéntio et Anastásio, per hæc
          contra ómnia advérsa muniámur. Per Dóminum...
        </p>
        <p>
          Ó Deus omnipotente, Vos suplicamos, fazei que, havendo nós recebido os
          alimentos celestiais, sejamos fortalecidos contra todas as
          adversidades por intercessão dos vossos B. B. Mártires Vicente e
          Anastácio. Por nosso Senhor...
        </p>
      </div>
    </div>
  );
}
