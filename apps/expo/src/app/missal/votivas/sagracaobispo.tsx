"use dom";
import "../../../global.css";

import React from "react";

export default function PageSagracaobispo() {
  return (
    <div className="docs">
      <h1>Na Sagração de um Bispo</h1>

      <aside>
        Missa Própria do dia, acrescentando-se à Oração, à Secreta e ao
        Postcomúnio, sob a mesma conclusão, o seguinte:
      </aside>

      <h3>Oração</h3>

      <div className="side-by-side">
        <p>
          Adésto supplicatiónibus nostris, omnípotens Deus: ut, quod humilitátis
          nostræ geréndum est ministério, tuæ virtútis impleátur efféctu. Per
          Dóminum nostrum...
        </p>
        <p>
          Ó omnipotente Deus, atendei às nossas súplicas, a fim de que aquilo
          que praticamos pelo nosso humilde ministério, tenha efeito pelo vosso
          poder. Por nosso Senhor...
        </p>
      </div>

      <h3>Secreta</h3>

      <div className="side-by-side">
        <p>
          Súscipe, Dómine, múmera, quæ tibi offérimus pro hoc fámulo tuo: ut
          propítius in eo tua dona custódias. Per Dóminum...
        </p>
        <p>
          Aceitai, Senhor, as oblatas que Vos Oferecemos em benefício deste
          vosso servo, a fim de que, propiciamente, conserveis nela os vossos
          dons. Por nosso Senhor...
        </p>
      </div>

      <h3>Postcomúnio</h3>

      <div className="side-by-side">
        <p>
          Súscipe, Dómine, múnera, quæ tibi offérimus pro me fámulo tuo: ut
          propítius in me tua dona custódias. Per Dóminum...
        </p>
        <p>
          Senhor, Vos suplicamos, que nos sejam salutares os remédios da vossa
          misericórdia; e que, propiciamente, eles de tal modo nos reanimem e
          alentem que em todo nosso ministério Vos consigamos agradar. Por nosso
          Senhor...
        </p>
      </div>
    </div>
  );
}
