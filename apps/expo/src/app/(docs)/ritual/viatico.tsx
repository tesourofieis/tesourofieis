"use dom";
import "../../../global.css";

import React from "react";
import AspergesMe from "../missal/aspergesme";

export default function PageViatico() {
  return (
    <div className="docs">
      <h1>Viático, Extrema-unção</h1>
      <aside>O Sacerdote, entrando em casa do enfermo, diz:</aside>
      <div className="side-by-side">
        <p>℣. Pax huic dómui.</p>
        <p>℣. A paz esteja nesta casa.</p>
        <p>
          <span className="text-red-500">℟.</span> Et ómnibus habitántibus in
          ea.
        </p>
        <p>
          <span className="text-red-500">℟.</span> E em todos seus habitantes.
        </p>
      </div>
      <h1>Asperges Me</h1>
      <AspergesMe />O Acólito diz o Confiteor Deo... (como na página
      <a className="link" href="/devocionario/oracoes/confesso)">
        confiteor
      </a>{" "}
      ; e o Sacerdote, tendo dado as Absolvições, continua:
      <h1>Recepção da Comunhão</h1>
      <div className="side-by-side">
        <p>℣. Ecce Agnus Dei, ecce qui tollit peccáta mundi.</p>
        <p>
          ℣. Eis o Cordeiro de Deus, eis Aquele que tira os pecados do mundo.
        </p>
        <p>
          <span className="text-red-500">℟.</span> Dómine, non sum dignus, ut
          intres sub tectum meum: sed tantum dic verbo, et sanábitur ánima mea.
        </p>
        <p>
          <span className="text-red-500">℟.</span> Senhor, eu não sou digno de
          que entreis na minha morada, mas dizei uma só palavra e a minha alma
          será salva.
        </p>
        <p>
          Accípe frater (soror), Viaticum Córporis Dómini nostri Jesu Christi,
          qui te custódiat ab hoste malígno, et perdúcate in vitam ætérnam.
        </p>
        <p>
          Recebei, meu irmão (ou minha irmã), o Viático do Corpo de Nosso Senhor
          Jesus Cristo, a fim de que vos guie até à vida eterna.
        </p>
        <p>
          <span className="text-red-500">℟.</span> Amen.
        </p>
        <p>
          <span className="text-red-500">℟.</span> Amen.
        </p>
        <p>℣. Dominus vobíscum.</p>
        <p>℣. O Senhor seja convosco.</p>
        <p>
          <span className="text-red-500">℟.</span> Et cum spíritu tuo.
        </p>
        <p>
          <span className="text-red-500">℟.</span> E com vosso espírito.
        </p>
      </div>
      <div className="side-by-side">
        <p>
          <span className="text-red-500 text-center">Orémus.</span>
        </p>
        <p>
          <span className="text-red-500 text-center">Oremos.</span>
        </p>
        <p>
          Dómine sancte, Páter omnípotens, ætérne Deus, te fidéliter deprecámur,
          ut accipiénti fratri nostro (soróri nostræ) sacrosánctum Corpus Dómini
          nostri Jesu Christi Fílii tui, tam córpori, quam ánimæ prosit ad
          remédium sempitérnum: Qui tecum vivit et regnat in unitáte Spíritus
          Sancti Deus, per ómnia sǽcula sæculórum.
        </p>
        <p>
          Senhor santo, Pai omnipotente, Deus eterno, Vos rogamos com confiança
          que o Corpo Santíssimo de nosso Senhor, que o nosso irmão (ou irmã)
          acaba de receber, lhe seja remédio eficaz, tanto para a sua alma como
          para o seu corpo, a fim de que lhe sirva para a eternidade: Ele, que,
          sendo Deus, convosco vive e reina por todos os séculos dos séculos.
        </p>
        <p>
          <span className="text-red-500">℟.</span> Amen.
        </p>
        <p>
          <span className="text-red-500">℟.</span> Amen.
        </p>
      </div>
    </div>
  );
}
