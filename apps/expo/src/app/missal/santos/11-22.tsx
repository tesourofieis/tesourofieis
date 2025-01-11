"use dom";
import "../../../global.css";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page1122() {
  return (
    <div className="docs">
      <h1>Santa Cecília, Virgem e Mártir, a 22 de Novembro</h1>

      <aside>
        Como na{" "}
        <a className="link" href="/missal/comum/17virgensmartires1">
          Missa Loquébar
        </a>{" "}
        , excepto:
      </aside>

      <h3>Oração</h3>

      <div className="side-by-side">
        <p>
          Deus, qui nos ánnua beátæ Caeciliae Vírginis et Mártyris tuæ
          sollemnitáte lætíficas: da, ut, quam venerámur offício, étiam piæ
          conversatiónis sequámur exémplo. Per Dóminum...
        </p>
        <p>
          Ó Deus, que nos alegrais com a solenidade anual da B. Cecília, vossa
          Virgem e Mártir, dignai-Vos permitir que, honrando-a com estes cultos,
          imitemos também os exemplos da sua piedosa vida. Por nosso Senhor...
        </p>
      </div>

      <h3>Epístola</h3>

      <LinkCard
        href="/missal/comum/18virgensmartires2#epístola"
        title="Virgens Mártires - Missa Me exspectavérunt"
      />

      <h3>Gradual</h3>

      <em>Sl. 44, 11 & 12</em>

      <div className="side-by-side">
        <p>
          Audi, fília, et vide, et inclína aurem tuam: quia concupívit Rex
          spéciem tuam. ℣. <em>ibid., 5</em> Spécie tua et pulchritúdine tua
          inténde, próspere procéde et regna.
        </p>
        <p>
          Escutai, ó minha filha, vede e inclinai o vosso ouvido; o Rei está
          cheio de amor por vós, por causa da vossa beleza! ℣. <em>ibid., 5</em>{" "}
          Com a vossa glória e com vossa formosura caminhai, triunfai e reinai.
        </p>
        <p>
          Allelúja, allelúja. ℣. <em>Matth. 25, 4 & 6</em> Quinque prudéntes
          vírgines accepérunt óleum in vasis suis cum lampádibus: média autem
          nocte clamor factus est: Ecce, sponsus venit: exíte óbviam Christo
          Dómino. Allelúja.
        </p>
        <p>
          Aleluia, aleluia. ℣. <em>Mt. 25, 4 & 6</em> As cinco virgens prudentes
          tomaram óleo em seus vasos para suas lâmpadas. No meio da noite uma
          voz soou: eis que chega o esposo: ide ao encontro de Cristo, Senhor.
          Aleluia.
        </p>
      </div>

      <h3>Secreta</h3>

      <div className="side-by-side">
        <p>
          Hæc hóstia, Dómine, placatiónis et laudis, quǽsumus: ut, intercedénte
          beáta Cæcília Vírgine et Mártyre tua, nos propitiatióne tua dignos
          semper effíciat. Per Dóminum...
        </p>
        <p>
          Que esta hóstia de propiciação e de louvor, Senhor, Vos rogamos, nos
          torne sempre dignos da vossa misericórdia, pela intercessão da B.
          Cecília, vossa Virgem e Mártir. Por nosso Senhor...
        </p>
      </div>

      <h3>Postcomúnio</h3>

      <div className="side-by-side">
        <p>
          Satiásti, Dómine, famíliam tuam munéribus sacris: ejus, quǽsumus,
          semper interventióne nos réfove, cujus sollémnia celebrámus. Per
          Dóminum...
        </p>
        <p>
          Saciastes, Senhor, a vossa família com vossos sacratíssimos dons; e
          dignai-Vos favorecer-nos sempre, Vos imploramos, pela intercessão
          daquela cuja festa celebramos. Por nosso Senhor...
        </p>
      </div>
    </div>
  );
}
