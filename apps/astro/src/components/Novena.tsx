import { getNovenas } from "@tesourofieis/cal/getCalendar";
import { yyyyMMDD } from "@tesourofieis/cal/utils";
import React from "react";
import LinkCard from "./LinkCard";

export default function PaginaNovenas() {
  const novenas = getNovenas(yyyyMMDD(new Date()));

  return (
    <div className="p-4">
      {novenas.length ? (
        <div className="p-4 rounded-lg">
          {novenas?.map((novena) => (
            <LinkCard
              key={novena.id}
              href={`/${novena.link}`}
              title={novena.name}
              description="Ir para a missa da novena"
            />
          ))}
        </div>
      ) : (
        <p className="mb-4">Não há novenas para os próximos dias.</p>
      )}

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
