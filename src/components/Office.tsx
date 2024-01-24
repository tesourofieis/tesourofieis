import { getHours } from "date-fns";

export default function Office() {
  const date = new Date();
  const hour = getHours(date);
  const title = "Pequeno Ofício de Nossa Senhora";
  return (
    <>
      {hour >= 0 && hour < 3 && (
        <a href="/devocionario/oficio/matinas">
          <p>{title}</p>
          <caption>Matina</caption>
        </a>
      )}

      {hour >= 3 && hour < 6 && (
        <a href="/devocionario/oficio/lauds">
          <p>{title}</p>
          <caption>Lauds</caption>
        </a>
      )}

      {hour >= 6 && hour < 9 && (
        <a href="/devocionario/oficio/prima">
          <p>{title}</p>
          <caption>Prima</caption>
        </a>
      )}

      {hour >= 9 && hour < 12 && (
        <a href="/devocionario/oficio/terca">
          <p>{title}</p>
          <caption>Terça</caption>
        </a>
      )}

      {hour >= 12 && hour < 15 && (
        <a href="/devocionario/oficio/sexta">
          <p>{title}</p>
          <caption>Sexta</caption>
        </a>
      )}

      {hour >= 15 && hour < 18 && (
        <a href="/devocionario/oficio/noa">
          <p>{title}</p>
          <caption>Noa</caption>
        </a>
      )}

      {hour >= 18 && hour < 21 && (
        <a href="/devocionario/oficio/vesperas">
          <p>{title}</p>
          <caption>Vésperas</caption>
        </a>
      )}

      {hour >= 21 && hour < 0 && (
        <a href="/devocionario/oficio/completas">
          <p>{title}</p>
          <caption>Completas</caption>
        </a>
      )}
    </>
  );
}
