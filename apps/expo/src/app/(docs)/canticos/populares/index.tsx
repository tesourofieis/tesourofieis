"use dom";
import "../../../../global.css";

import React from 'react';
import DirectoryList from '../../../../components/List.astro';

export default function PageIndex() {
  return (
    <div className="docs">
      <h1>Populares</h1>



<DirectoryList />

    </div>
  );
}
