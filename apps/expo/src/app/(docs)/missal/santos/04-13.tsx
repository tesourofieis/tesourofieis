"use dom";
import "../../../../global.css";

import React from 'react';
import LinkCard from '~/components/LinkCard'

export default function Page0413() {
  return (
    <div className="docs">
      <h1>S. Hermenegildo, Mártir, a 13 de Abril</h1>



Fora do Tempo Pascal como na Missa In virtúte tua, excepto a Oração e o Evangelho.

<LinkCard
  href="/missal/comum/4martirnaopontifice1"
  title="Mártir não Pontífice - Missa In virtúte tua"
/>

Dentro do Tempo Pascal como na Missa Protexísti me, excepto a Oração e o Evangelho.

<LinkCard href="/missal/comum/9martir" title="Mártir - Missa Protexísti me" />

      <h3>Oração</h3>

<div className="side-by-side not-content">
      <p>Deus, qui beátum Hermenegíldum Mártyrem tuum cœlésti regno terrénum postpónere docuísti: da, quǽsumus, nobis; ejus exémplo cadúca despícere atque ætérna sectári. Per Dóminum...</p>
      <p>Ó Deus, que ensinastes o S. Hermenegildo, vosso Mártir, a preferir o reino celestial ao terrestre, concedei-nos a graça, Vos suplicamos, de, seguindo seus exemplos, desprezarmos os bens caducos e amarmos os eternos. Por nosso Senhor...</p>
      </div>

      <h3>Evangelho</h3>

<LinkCard
  href="/missal/comum/2martirpontificeforapascal#evangelho"
  title="Mártir Pontífice - Missa Státuit ei Dóminus"
/>

    </div>
  );
}
