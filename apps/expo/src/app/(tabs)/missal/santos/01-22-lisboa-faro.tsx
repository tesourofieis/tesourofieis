"use dom";
import { Link } from "expo-router";
import "../../../../global.css";

import React from "react";

export default function Page0122LisboaFaro() {
  return (
    <div className="docs">
      <h1>S. Vicente, Mártir, a 22 de Janeiro</h1>

      <aside>
        Como na{" "}
        <Link className="link" href="/missal/comum/4martirnaopontifice1">
          Missa In virtúte tua
        </Link>{" "}
        , excepto:
      </aside>

      <h3>Oração</h3>

      <div className="side-by-side">
        <p>
          Adésto, Dómine, supplicatiónibus nostris: ut, qui ex iniquitáte nostra
          reos nos esse cognóscimus, beáti Vincéntii Martyris tui intercessióne
          liberémur. Per Dóminum...
        </p>
        <p>
          Senhor, dignai-Vos ouvir as nossas súplicas, a fim de que,
          reconhecendo-nos réus diante de Vós pelas nossas iniquidades, sejamos
          livres delas por intercessão do vosso B. Mártir Vicente. Por nosso
          Senhor...
        </p>
      </div>

      <h3>Evangelho</h3>

      <em>Jo. 12, 24-26</em>

      <div className="side-by-side">
        <p>
          <span className="cross text-red-500">✠</span> Sequéntia sancti
          Evangélii secúndum Joánnem.
        </p>
        <p>
          <span className="cross text-red-500">✠</span> Continuação do santo
          Evangelho segundo S. João.
        </p>
        <p>
          In illo témpore: Dixit Jesus discípulis suis: Amen, amen, dico vobis,
          nisi granum fruménti cadens in terram, mórtuum fúerit, ipsum solum
          manet: si autem mórtuum fúerit, multum fructum affert. Qui amat ánimam
          suam, perdet eam: et qui odit ánimam suam in hoc mundo, in vitam
          ætérnam custódit eam. Si quis mihi mínistrat, me sequátur: et ubi sum
          ego, illic et miníster meus erit. Si quis mihi ministráverit,
          honorificábit eum Pater meus.
        </p>
        <p>
          Naquele tempo, disse Jesus aos seus discípulos: «Se o grão de trigo,
          caindo na terra, não morrer, permanece estéril; mas, se morrer, dará
          muito fruto. Aquele que ama a sua vida perdê-la-á; mas aquele que
          aborrece a sua vida neste mundo conservá-la-á para a vida eterna. Se
          alguém me serve, siga-me; e onde eu estiver lá estará também o meu
          servo. Se alguém me servir, meu Pai o honrará».
        </p>
      </div>

      <h3>Ofertório</h3>

      <em>Sl. 95, 6</em>

      <div className="side-by-side">
        <p>
          Conféssio et pulchritúdo in conspéctu ejus: sánctitas, et
          magnificéntia in sanctificatióne ejus.
        </p>
        <p>
          Rodeiam-no a glória e a majestade: e no seu santuário reluzem a
          santidade e a magnificência.
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
          intercedéntibus beáto Vincéntio Martýre tuo, per hæc contra ómnia
          advérsa muniámur. Per Dóminum...
        </p>
        <p>
          Ó Deus omnipotente, Vos suplicamos, fazei que, havendo nós recebido os
          alimentos celestiais, sejamos fortalecidos contra todas as
          adversidades por intercessão do vosso B. Mártir Vicente. Por nosso
          Senhor...
        </p>
      </div>
    </div>
  );
}
