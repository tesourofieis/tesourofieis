"use dom";
import "../../../global.css";

import React from "react";
import DirectoryList from "~/components/DirectoryList";

export default function PageIndex() {
  return (
    <div className="docs">
      <h1>Orações Diversas</h1>

      <DirectoryList slug="missal/oracoesdiversas" />
    </div>
  );
}
