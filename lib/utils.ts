function yyyyMMDD(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseLocalDate(dateString: string): Date {
  const year = Number.parseInt(dateString.slice(0, 4), 10);
  const month = Number.parseInt(dateString.slice(5, 7), 10) - 1;
  const day = Number.parseInt(dateString.slice(8, 10), 10);
  return new Date(year, month, day);
}

export { yyyyMMDD, parseLocalDate };
