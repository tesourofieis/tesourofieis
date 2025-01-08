"use dom";
import "../../../global.css";

import React from 'react';
import Novena from '~/components/Novena';

export default function PageNovenas() {
  return (
    <div className="docs">
      <h1>Novenas</h1>



<Novena client:only="react" />

    </div>
  );
}
