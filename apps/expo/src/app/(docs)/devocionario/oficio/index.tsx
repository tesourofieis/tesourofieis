"use dom";
import "../../../../global.css";

import React from "react";
import DirectoryList from "../../../../components/List.astro";

export default function PageIndex() {
  return (
    <div className="docs">
      <h1>Pequeno Ofício de Nossa Senhora</h1>

      <aside>
        Em conformidade com <em>Editio Typica</em> do Breviário Romano.
      </aside>

      <DirectoryList />
    </div>
  );
}
