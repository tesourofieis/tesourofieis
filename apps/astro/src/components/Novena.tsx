import React from "react";
import Novenas from "./Novenas";

export default function PaginaNovenas() {
  return (
    <div className="p-4">
      <Novenas />

      <p className="text-xl font-semibold mb-2">Sobre as Novenas</p>
      <p className="mb-2">
        Não existem novenas oficiais estabelecidas pela Igreja, permitindo que
        cada fiel as adapte às suas necessidades espirituais.
      </p>
      <p className="mb-2">
        Se não tiver uma novena específica para rezar, pode considerar a
        seguinte estrutura:
      </p>
      <ol className="list-decimal list-inside mb-2">
        <li>Reze a oração da missa da novena</li>
        <li>Adicione intenções pessoais</li>
        <li>Termine com a Salve Regina, ou outra oração</li>
      </ol>
    </div>
  );
}
