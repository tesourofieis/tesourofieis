"use dom";
import "../../../../global.css";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page1213() {
  return (
    <div className="docs">
      <h1>Santa Luzia, Virgem e Mártir, a 13 de Dezembro</h1>

      <aside>
        Como na [Missa Dilexísti justitiam](/missal/comum/20virgemnaomartir1),
        excepto:
      </aside>

      <h3>Gradual</h3>

      <em>Sl. 44, 8</em>

      <div className="side-by-side">
        <p>
          Dilexísti justítiam, et odísti iniquitátem. ℣. Proptérea unxit te
          Deus, Deus tuus, óleo lætítiæ.
        </p>
        <p>
          Amastes a justiça e odiastes a iniquidade. ℣. Por isso o Senhor, vosso
          Deus, ungiu-vos com o óleo da alegria, de preferência às vossas
          companheiras.
        </p>
        <p>
          Allelúja, allelúja. ℣. <em>ibid., 3</em> Diffúsa est grátia in lábiis
          tuis: proptérea benedíxit te Deus in ætérnum. Allelúja.
        </p>
        <p>
          Aleluia, aleluia. ℣. <em>ibid., 3</em> A graça espalhou-se nos vossos
          lábios; por isso Deus vos abençoou por todos os séculos. Aleluia.
        </p>
      </div>

      <h3>Evangelho</h3>

      <LinkCard
        href="/missal/comum/21virgemnaomartir2#evangelho"
        title="Virgem não Mártir - Missa Vultum tuum"
      />

      <h3>Ofertório</h3>

      <em>Sl. 44, 15-16</em>

      <div className="side-by-side">
        <p>
          Afferéntur Regi Vírgines post eam: próximæ ejus afferéntur tibi in
          lætítia et exsultatióne: adducéntur in templum Regi Dómino.
        </p>
        <p>
          Após ela serão apresentadas virgens ao Rei; as suas companheiras serão
          introduzidas no meio da alegria e júbilo: serão conduzidas ao Senhor
          no templo do Rei.
        </p>
      </div>

      <h3>Comúnio</h3>

      <em>Sl. 118, 161-162</em>

      <div className="side-by-side">
        <p>
          Príncipes persecúti sunt me gratis, et a verbis tuis formidávit cor
          meum: lætábor ego super elóquia tua, quasi qui invénit spólia multa.
        </p>
        <p>
          Os príncipes perseguiram-me injustamente, mas o meu coração não temeu
          senão as vossas palavras. Regozijar-me-ei com vossas palavras, como se
          um homem houvera achado ricos despojos.
        </p>
      </div>
    </div>
  );
}
