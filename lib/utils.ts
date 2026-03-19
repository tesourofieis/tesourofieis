function yyyyMMDD(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

const parsedDateCache = new Map<string, Date>();

function parseLocalDate(dateString: string): Date {
  const cached = parsedDateCache.get(dateString);
  if (cached) {
    return cached;
  }

  const year = Number.parseInt(dateString.slice(0, 4), 10);
  const month = Number.parseInt(dateString.slice(5, 7), 10) - 1;
  const day = Number.parseInt(dateString.slice(8, 10), 10);
  const parsed = new Date(year, month, day);
  parsedDateCache.set(dateString, parsed);
  return parsed;
}

export { yyyyMMDD, parseLocalDate };
