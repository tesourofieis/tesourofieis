"use dom";
import { Link } from "expo-router";
import "../../../../global.css";

import React from "react";

export default function Page1115() {
  return (
    <div className="docs">
      <h1>S. Alberto Magno, B. C. e Doutor, a 15 de Novembro</h1>

      <aside>
        Como na{" "}
        <Link className="link" href="/missal/comum/13doutores">
          Missa In médio Ecclésiae
        </Link>{" "}
        , excepto:
      </aside>

      <h3>Oração</h3>

      <div className="side-by-side">
        <p>
          Deus, qui beátum Albértum Pontíficem tuum atque Doctórem in humána
          sapiéntia divínæ fídei subjiciénda magnum effecísti: da nobis,
          quǽsumus; ita ejus magistérii inhærére vestígiis, ut luce perfécta
          fruámur in cœlis. Per Dóminum...
        </p>
        <p>
          Ó Deus, que ao B. Alberto, vosso Pontífice e Doutor, tornastes grande
          na arte de sujeitar a sabedoria humana à fé divina, concedei-nos, Vos
          suplicamos, que de tal modo sigamos as lições do seu magistério que
          nos céus gozemos a luz perfeita. Por nosso Senhor...
        </p>
      </div>

      <h3>Secreta</h3>

      <div className="side-by-side">
        <p>
          Sacrifíciis præséntibus, Dómine, quǽsumus, inténde placátus: ut quod
          Passiónis Fílii tui Dómini nostri mystério gérimus, beáti Alberti
          intercessióne et exémplo, pio consequámur afféctu. Per eumdem
          Dóminum...
        </p>
        <p>
          Pelos presentes sacrifícios, Senhor, Vos suplicamos, olhai aplacado
          para nós, a fim de que com o exemplo e intercessão do B. Alberto
          consigamos alcançar piedosos afectos pelo mystério, que celebramos, da
          paixão do vosso Filho e nosso Senhor. Pelo mesmo nosso Senhor...
        </p>
      </div>

      <h3>Postcomúnio</h3>

      <div className="side-by-side">
        <p>
          Per hæc sancta quæ súmpsimus, ab hóstium nos, Dómine, impugnatióne
          defénde: et intercedénte beáto Albérto Confessóre tuo atque Pontífice,
          perpétua pace respiráre concéde; Per Dóminum...
        </p>
        <p>
          Por estes sacrossantos sacramentos, que recebemos, Senhor,
          defendei-nos dos ataques dos nossos inimigos, e, intercedendo o B.
          Alberto, vosso Confessor e Pontífice, permiti que gozemos a paz
          perpétua. Por nosso Senhor...
        </p>
      </div>
    </div>
  );
}
