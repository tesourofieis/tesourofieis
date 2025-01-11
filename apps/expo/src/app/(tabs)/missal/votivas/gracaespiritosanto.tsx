"use dom";
import { Link } from "expo-router";
import "../../../../global.css";

import React from "react";

export default function PageGracaespiritosanto() {
  return (
    <div className="docs">
      <h1>Suplicando a Graça do Espírito Santo</h1>

      <aside>
        Como na{" "}
        <Link className="link" href="/missal/votivas/espiritosanto">
          Missa do Espírito Santo
        </Link>{" "}
        , excepto:
      </aside>

      <h3>Oração</h3>

      <div className="side-by-side">
        <p>
          Deus, cui omne cor patet, et omnis volúntas lóquitur, et quem nullum
          latet secrétum: purífica per infusiónem Sancti Spíritus cogitatiónes
          cordis nostri; ut te perfécte dilígere et digne laudáre mereámur. Per
          Dóminum... in unitáte ejúsdem Spíritus Sancti...
        </p>
        <p>
          Ó Deus, de quem é conhecido o íntimo de todo o coração e os desejos de
          toda a vontade, assim como não ignorais nenhum segredo, purificai,
          pela difusão do Espírito Santo, os pensamentos do nosso coração, a fim
          de que Vos amemos com perfeição e mereçamos louvar-Vos dignamente. Por
          nosso Senhor... em unidade do mesmo Espírito Santo...
        </p>
      </div>

      <h3>Secreta</h3>

      <div className="side-by-side">
        <p>
          Hæc oblátio, quǽsumus, Dómine, cordis nostri máculas emúndet: ut
          Sancti Spíritus digna efficiátur habitátio. Per Dóminum... in unitáte
          ejúsdem Spíritus Sancti...
        </p>
        <p>
          Que esta oblação, Senhor, Vos suplicamos, apague as manchas do nosso
          coração, a fim de que ele se torna em digno habitáculo do Espírito
          Santo. Por nosso Senhor... em unidade do mesmo Espírito Santo...
        </p>
      </div>

      <h3>Postcomúnio</h3>

      <div className="side-by-side">
        <p>
          Concéde, quǽsumus, omnípotens Deus, Sanctum nos Spíritum votis
          promeréri sédulis: quaténus, ejus grátia, et ab ómnibus liberémur
          tentatiónibus, et peccatórum nostrórum indulgéntiam percípere
          mereámur. Per Dóminum... in unitáte ejúsdem Spíritus Sancti...
        </p>
        <p>
          Ó omnipotente Deus, Vos suplicamos, concedei-nos que pelos nossos
          votos nos tornemos dignos de o Espírito Santo habitar em nós, de modo
          que pela sua graça sejamos livres de todas as tentações e mereçamos
          alcançar o perdão dos nossos pecados. Por nosso Senhor... em unidade
          do mesmo Espírito Santo...
        </p>
      </div>
    </div>
  );
}
