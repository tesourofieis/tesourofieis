"use dom";
import { Link } from "expo-router";
import "../../../../global.css";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page1207() {
  return (
    <div className="docs">
      <h1>S. Ambrósio. B. Conf. e Dr., a 7 de Dezembro</h1>

      <aside>
        Como na{" "}
        <Link className="link" href="/missal/comum/13doutores">
          Missa In médio Ecclésiae
        </Link>{" "}
        , excepto:
      </aside>

      <h3>Gradual</h3>

      <em>Ecl. 44, 16</em>

      <div className="side-by-side">
        <p>
          Ecce sacérdos magnus, qui in diébus suis plácuit Deo. ℣.{" "}
          <em>ibid., 20</em> Non est inventus símilis illi, qui conserváret
          legem Excélsi.
        </p>
        <p>
          Eis o grande sacerdote que nos dias da sua vida agradou a Deus. ℣.{" "}
          <em>ibid., 20</em> Ninguém o igualou na observância das leis do
          Altíssimo.
        </p>
        <p>
          Allelúja, allelúja. ℣. <em>Ps. 109, 4</em> Jurávit Dóminus, et non
          pænitébit eum: Tu es sacérdos in ætérnum, secúndum órdinem
          Melchísedech. Allelúja.
        </p>
        <p>
          Aleluia, aleluia. ℣. <em>Sl. 109, 4</em> O Senhor jurou e nunca se
          arrependerá: Tu és sacerdote para sempre, segundo a ordem de
          Melquisedeque. Aleluia.
        </p>
      </div>

      <h3>Ofertório</h3>

      <em>Sl. 88, 25</em>

      <div className="side-by-side">
        <p>
          Véritas mea et misericórdia mea cum ipso: et in nómine meo exaltábitur
          cornu ejus.
        </p>
        <p>
          A minha verdade e a minha misericórdia estarão com ele: e o seu poder
          elevar-se-á pelo meu nome.
        </p>
      </div>

      <h3>Secreta</h3>

      <div className="side-by-side">
        <p>
          Omnípotens sempitérne Deus, múnera tuæ majestáti obláta, per
          intercessiónem beáti Ambrósii Confessóris tui atque Pontíficis, ad
          perpétuam nobis fac proveníre salútem. Per Dóminum...
        </p>
        <p>
          Omnipotente e eterno Deus, permiti que os dons oferecidos à vossa
          majestade contribuam por intercessão do B. Ambrósio, vosso Confessor e
          Pontífice, para a nossa salvação eterna. Por nosso Senhor...
        </p>
      </div>

      <h3>Comúnio</h3>

      <LinkCard
        href="/missal/santos/12-06#comúnio"
        title="S. Nicolau, B. e Conf."
      />

      <h3>Postcomúnio</h3>

      <div className="side-by-side">
        <p>
          Sacraménta salútis nostræ suscipiéntes, concéde, quǽsumus, omnípotens
          Deus: ut beáti Ambrósii Confessóris tui atque Pontíficis nos ubíque
          orátio ádjuvet; in cujus veneratióne hæc tuæ obtúlimus majestáti. Per
          Dóminum nostram...
        </p>
        <p>
          Havendo recebido os Sacramentos da nossa salvação, concedei-nos, ó
          Deus omnipotente, que sejamos sempre auxiliados pela oração do B.
          Ambrósio, vosso Confessor e Pontífice, em cuja honra oferecemos este
          sacrifício à vossa majestade. Por nosso Senhor...
        </p>
      </div>
    </div>
  );
}
