import { Calendar } from "@tesourofieis/cal/calendar";
import type { Mass } from "@tesourofieis/cal/observanceManager";
import { getYear } from "date-fns";
import React, { useState, useEffect } from "react";
import Novenas from "./Novenas";

function getAllNovenasForYear(year: number) {
  const calendar = new Calendar(year);
  const allDays = calendar.getAllDays();
  const novenaObservances = [];

  for (const day of allDays) {
    const novenas = day.mass.filter((mass) => mass.novena);
    novenaObservances.push(...novenas);
  }

  return novenaObservances;
}

export default function PaginaNovenas() {
  const [allNovenas, setAllNovenas] = useState<Mass[]>([]);
  const year = getYear(new Date());

  useEffect(() => {
    const novenas = getAllNovenasForYear(year);
    setAllNovenas(novenas);
  }, [year]);

  return (
    <div className="p-4">
      <Novenas />

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

      <p className="text-xl font-semibold mt-4 mb-2">
        Todas as Novenas agendadas
      </p>
      <ul className="list-disc list-inside">
        {allNovenas.map((novena) => {
          const buidDate = `${year}-${novena.month}-${novena.day}`;

          return (
            <li key={novena.id}>
              <span className="font-bold">{novena.name}</span> - Dia{" "}
              {novena.date ? novena.date : buidDate}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
